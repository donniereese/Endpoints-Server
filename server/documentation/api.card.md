# Card Api Endpoint
---

## GET # /cards
`/cards`

**_Accepts no properties_**

**_Requires no body_**

> Get a list of cards in an array of objects.

### Success:
```
[
    {
        _id: Mongo.ObjectId,
        title: String,
        description: String,
        body: String,
        priority: Number,
        dueDate: Date
    },
    ...
]
```
**Response Type**:
 * _Empty Array_
 * _Array of Objects_

### Failure:
```
{ error: String }
```
**Response Type**:

_Object_

---

## GET # /cards/:cardID
`/cards/{Mongo.ObjectId}`

**_@PARAM_** **cardID**

**_Requires no body_**

> Get a single card object

### Success:
```
{
    _id: Mongo.ObjectId,
    title: String,
    description: String,
    body: String,
    ...
}
```
**Response Type**:
 * _Empty Object_
 * _Object with properties_

### Failure:
```
{ error: String }
```
**Response Type**:

_Object_

---

## POST # /cards
`/cards`

**_Accepts no properties._**

**_Accepts request body_**

> Adds a new card with values provided.

### Requires:
** request body** _text/json_
```
{
    title: String,
    description: String,
    body: String,
    priority: Number,
    dueDate: Date

}
```

#### Required Properties:
```
{
    body: String
}
```

### Success:
```
{
    _id: Mongo.ObjectId
    title: String,
    description: String,
    body: String,
    priority: Number,
    dueDate: Date
}
```
**Response Type**: _Object_

### Failure:
```
{
    error: String
}
```
**Response Type**: _Object_

---


## PUT # /cards
`/cards`

**_Accepts no properties._**

**_Accepts request body_**

> Replaces an existing card, specified by it's `ObjectId`, with a card of the same ObjectId with modified properties.

### Requires:
** request body** _text/json_
```
{
    _id: Mongo.ObjectId,
    title: String,
    description: String,
    body: String,
    priority: Number,
    dueDate: Date

}
```

#### Required Properties:
```
{
    _id: Mongo.ObjectId,
    body: String
}
```

### Success:
```
{
    _id: Mongo.ObjectId
    title: String,
    description: String,
    body: String,
    priority: Number,
    dueDate: Date
}
```
**Response Type**: _Object_

### Failure:
```
{
    error: String
}
```
**Response Type**: _Object_

---

## DELETE # /cards/:cardID
`/cards/{Mongo.ObjectId}`

**_@PARAM_** **cardID**

**_Does not require request body_**

> Removes a specific card identified by it's `ObjectId`.

### Success:
```
{
    _id: Mongo.ObjectId
    title: String,
    description: String,
    body: String,
    priority: Number,
    dueDate: Date
}
```
**Response Type**: _Object_

### Failure:
```
{
    error: String
}
```
**Response Type**: _Object_

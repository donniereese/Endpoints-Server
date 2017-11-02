# Objectives

1. Design and plan the solution
2. Structure work and break it down into parts.
  - Documentation for the code.
  - Create test suite to
  - Implement those pieces.

# Solution Design

0. Data model:
  - user
    - username, email, password
  - Card (smallest unit)
    - owner
    - title: String, 120 char.
    - description field: string, 400 chars.
    - priority field:
    - due date:
    - (group)
    - (tags)
    - subtasks
  - Container
    - board reference
    - title
    - cards array
  - Board
    - title
    - description
    - owner
    - members: users array
    - container array

1. A mongodb database to store data
2. Express server for API endpoints

3. chai test suite for testing
4. Document js for documentation

# Setup Tasks

- consider what NPM packages we will need
1. mongoose
2. express
3. chai
4. mocha
5. chai-http

0. Create data model (mongoose)
1. Create a list of all the routes we plan to have.
2. Draft document for routes (api.md).
3. Shallow implement test suit.
  - create boilerplate tests. one per route.
4. Deep implementation of test suite.
  - test routes for accuracy
  - test all routes for returning data objects with accurate structure and data.

# Implementation / Solution Tasks

0. Set up directory and file structure
1. Set up mongoose models based on data model from solution design phase.
2. API Endpoints Server (express, node)
  - GET, POST, PUT, DETELE routes
  - Users
  - Posts
  - Comments
3. Implement 'likes', 'bookmark', and 'upvote' for posts.
4. Implement 'follow' for users.

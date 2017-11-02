const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
  parentBoard: {
    type: mongoose.Types.ObjectID,
    ref: 'boards',
    required: true,
  },
  title: {
    type: String,
    required: true,
    maxlength: 120,
  },
  cards: {
    type: [mongoose.Type.ObjectID],
    ref: 'cards',
    default: []
  }
});

const List = mongoose.model('List', ListSchema, 'lists');

module.exports = List;

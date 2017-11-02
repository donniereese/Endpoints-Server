const mongoose = require('mongoose');

const BoardSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Types.ObjectID,
    ref: 'users',
    required: true,
  },
  title: {
    type: String,
    required: true,
    maxlength: 120,
  },
  description: {
    type: String,
    maxlength: 800,
  },
  members: {
    type: [mongoose.Types.ObjectID],
    ref: 'users',
    default: []
  },
  lists: {
    type: [mongoose.Types.ObjectID],
    ref: 'lists',
    default: []
  }
});

const Board = mongoose.model('Board', BoardSchema, 'boards');

module.exports = Board;

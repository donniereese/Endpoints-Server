const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Types.ObjectId,
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
  body: {
    type: String,
    required: true
  }
  priority: {
    type: Number,
    default: 0
  },
  dueDate: {
    type: Date,
    default: null
  }
});

const Card = mongoose.model('Card', CardSchema, 'cards');

module.exports = Card;

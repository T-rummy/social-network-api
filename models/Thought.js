const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    require: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  username: {
    type: String
  },
  reactions: []
  
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;

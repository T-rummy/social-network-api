const { Schema, model } = require('mongoose');

const ReactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
     
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      deafult: Date.now
    
    },
  },
      {
    id: false,
  }
  
  
);


const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    require: true,
    minLength: 1,
    maxLength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  username: {
    type: String,
    required: true
  },
   reactions: [ReactionSchema],
    },
  {
    toJSON: {
      virtuals: true,
    },
    id: false
  }
);
ThoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});


const Thought = model('Thought', ThoughtSchema);


module.exports = Thought;

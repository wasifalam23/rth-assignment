const mongoose = require('mongoose');
const validator = require('validator');

const candidateSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'A candidate must have a firstName'],
  },

  lastName: {
    type: String,
    required: [true, 'A candidate must have a lastName'],
  },

  email: {
    type: String,
    trim: true,
    required: [true, 'A candidate must have an email'],
    unique: true,
    lowercase: true,
    validate: validator.isEmail,
  },

  phone: {
    type: String,
    required: [true, 'A candidate must have a phone'],
  },

  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'other'],
      message: '{VALUE} is not supported',
    },
    required: [true, 'A candidate must have a gender'],
  },

  dob: {
    type: Date,
  },

  yop: {
    type: Date,
  },

  maritalStatus: {
    type: String,
    enum: {
      values: ['married', 'unmarried', 'other'],
      message: '{VALUE} is not supported',
    },
    required: [true, 'A candidate must have marital status'],
  },

  profession: {
    type: String,
  },

  city: {
    type: String,
  },

  state: {
    type: String,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Candidate = mongoose.model('Candidate', candidateSchema);

module.exports = Candidate;

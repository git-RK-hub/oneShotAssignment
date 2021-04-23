const mongoose = require('mongoose');
const validator = require('validator');

const studentSchema = new mongoose.Schema({
  // Name
  name: {
    type: String,
    required: [true, 'Student must have name']
  },

  email: {
    type: String,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email']
  },

  // Year of batch
  batchYear: {
    type: Number,
    required: [true, 'Provide year of batch']
  },

  // College_Id
  collegeId: {
    type: mongoose.Schema.ObjectId,
    ref: 'College'
  },
  // Skills (C++, Java, C,...etc)
  skills: {
    type: Array
  }
});

module.exports = mongoose.model('Student', studentSchema);

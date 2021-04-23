const mongoose = require('mongoose');

const collegeSchema = new mongoose.Schema({
  //Name
  name: {
    type: String,
    required: [true, 'Please provide college name']
  },

  // Year founded
  yearFounded: {
    type: Number,
    required: [true, 'Please provide college foundation year']
  },

  // City
  city: {
    type: String,
    required: [true, 'Please tell us city name']
  },

  //  State
  state: {
    type: String,
    required: [true, 'Please tell us state name']
  },

  //   Country
  country: {
    type: String,
    required: [true, 'Please tell us state name']
  },

  // No of students
  students: {
    type: Number,
    required: [true, 'Please tell us number of students']
  },

  // Courses  (Computer science, Electronics, IT..etc)
  courses: {
    type: Array,
    required: [true, 'Please tell us the courses you provide']
  }
});

module.exports = mongoose.model('College', collegeSchema);

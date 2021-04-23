const Student = require('../Model/studentSchema');

exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({
        status: 'fail',
        message: 'No student found'
      });
    }
    res.status(200).json({
      status: 'success',
      data: {
        student
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: err.message
    });
  }
};

exports.getAllStudentsOfCllg = async (req, res) => {
  try {
    const students = await Student.find({ collegeId: req.body.cllgId });
    if (!students) {
      return res.status(404).json({
        status: 'fail',
        message: 'No student found'
      });
    }
    res.status(200).json({
      status: 'success',
      results: students.length,
      data: {
        students
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: err.message
    });
  }
};

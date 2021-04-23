const College = require('../Model/collegeSchema');
const Student = require('../Model/studentSchema');

// 1. create college
exports.createCollege = async (req, res) => {
  try {
    const college = await College.create({
      name: req.body.name,
      yearFounded: req.body.yearFounded,
      city: req.body.city,
      state: req.body.state,
      country: req.body.country,
      students: req.body.students,
      courses: req.body.courses
    });

    res.status(200).json({
      status: 'success',
      data: {
        college
      }
    });
  } catch (err) {
    return res.status(400).json({
      status: 'error',
      message: err.message
    });
  }
};

// 2. Get College details by College name/id
exports.getCollege = async (req, res) => {
  try {
    let college = null;
    if (req.params.id) college = await College.findById(req.params.id);
    if (req.body.name) college = await College.findOne({ name: req.body.name });

    if (!college) {
      return res.status(404).json({
        status: 'fail',
        message: 'College not found'
      });
    }
    res.status(200).json({
      status: 'success',
      data: {
        college
      }
    });
  } catch (err) {
    return res.status(400).json({
      status: 'error',
      message: err.message
    });
  }
};

// 3. Get all colleges

exports.getAllColleges = async (req, res) => {
  try {
    let colleges = [];
    if (req.query.state) {
      colleges = await College.find({ state: req.query.state });
    }

    if (req.query.course) {
      colleges = await College.find({ courses: { $in: req.query.course } });
    }

    if (colleges.length < 1) {
      colleges = await College.find();
    }

    if (colleges.length < 1) {
      return res.status(404).json({
        status: 'fail',
        message: 'No college found'
      });
    }

    res.status(200).json({
      status: 'success',
      results: colleges.length,
      data: {
        colleges
      }
    });
  } catch (err) {
    return res.status(400).json({
      status: 'error',
      message: err.message
    });
  }
};

// 4. Get similar colleges for a given college

exports.getSimilarColleges = async (req, res) => {
  try {
    const college = await College.findById(req.params.id);
    const courses = college.courses;
    let colleges = null;

    // get similar college by city
    colleges = await College.find({
      $and: [{ city: college.city }, { students: { $gte: 100 } }]
    });

    // get similar college by state
    if (!colleges || colleges.length < 1)
      colleges = await College.find({
        $and: [{ state: college.state }, { students: { $gte: 100 } }]
      });

    // if no similar college in city and state
    if (!colleges || colleges.length < 1)
      colleges = await College.find({ students: { $gte: 100 } });

    // filter college by courses
    const filtered = colleges.filter((el) => {
      return el.courses.some((e) => courses.includes(e));
    });

    res.status(200).json({
      status: 'success',
      results: filtered.length,
      data: {
        colleges: filtered
      }
    });
  } catch (err) {
    return res.status(400).json({
      status: 'error',
      message: err.message
    });
  }
};

// 5. Get college stats

exports.getCollegeStats = async (req, res) => {
  try {
    const collegeStats = await College.aggregate([
      {
        $match: { country: 'India' }
      },
      {
        $group: {
          _id: '$state',
          numOfCllgs: { $sum: 1 }
        }
      }
    ]);
    res.status(200).json({
      status: 'success',
      data: {
        collegeStats
      }
    });
  } catch (err) {
    return res.status(400).json({
      status: 'error',
      message: err.message
    });
  }
};

// 6. Get college courses stats
exports.getCollegeCoursesStats = async (req, res) => {
  try {
    const coursesStats = await College.aggregate([
      {
        $match: { country: 'India' }
      },
      {
        $project: { _id: 0, courses: 1 }
      },
      {
        $unwind: '$courses'
      },
      {
        $group: {
          _id: '$courses',
          numOfCllgs: { $sum: 1 }
        }
      },
      {
        $project: {
          _id: 0,
          courses: '$_id',
          numOfCllgs: 1
        }
      }
    ]);
    res.status(200).json({
      status: 'success',
      data: {
        coursesStats
      }
    });
  } catch (err) {
    return res.status(400).json({
      status: 'error',
      message: err.message
    });
  }
};

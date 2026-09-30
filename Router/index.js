const express = require('express');

const router = express.Router();

const st = require('../Controller/student');
const teacher = require('../Controller/teacher');
const course = require('../Controller/course');


// ================= STUDENT =================

router.get('/student/getdata', st.getstudentdata);

router.post('/student/insertdata', st.insertstudentdata);

router.put('/student/updatedata', st.updatestudentdata);

router.delete('/student/deletedata', st.deletestudentdata);


// ================= TEACHER =================

router.get('/teacher/getdata', teacher.getteacherdata);

router.post('/teacher/insertdata', teacher.insertteacherdata);

router.put('/teacher/updatedata', teacher.updateteacherdata);

router.delete('/teacher/deletedata', teacher.deleteteacherdata);


// ================= COURSE =================

router.get('/course/getdata', course.getcoursedata);

router.post('/course/insertdata', course.insertcoursedata);

router.put('/course/updatedata', course.updatecoursedata);

router.delete('/course/deletedata', course.deletecoursedata);


// ================= HOME =================

router.get('/home', (req, res) => {
    res.render('index');
});


module.exports = router;
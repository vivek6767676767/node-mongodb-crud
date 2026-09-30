const database = require('../Database/db');


// ================= GET =================

const getcoursedata = async (req, res) => {

    try {

        const db = await database.connectDB();

        console.log("connect db");

        const result = await db
            .collection('course')
            .find()
            .toArray();

        console.log(result);

        res.send({
            status: 200,
            message: "Course data",
            data: result
        });

    } catch (error) {

        console.log(error);

        res.send({
            status: 500,
            message: "Something went wrong",
            error: error.message
        });
    }
};


// ================= POST =================

const insertcoursedata = async (req, res) => {

    try {

        console.log(req.body);

        const db = await database.connectDB();

        console.log("connect db");

        const result = await db
            .collection('course')
            .insertOne(req.body);

        console.log(result);

        if (result.acknowledged === true) {

            res.send({
                status: 200,
                message: "Course data inserted",
                data: result
            });

        } else {

            res.send({
                status: 500,
                message: "Something went wrong",
                data: result
            });
        }

    } catch (error) {

        console.log(error);

        res.send({
            status: 500,
            message: "Something went wrong",
            error: error.message
        });
    }
};


// ================= PUT =================

const updatecoursedata = async (req, res) => {

    try {

        const db = await database.connectDB();

        console.log("connect db");

        const result = await db
            .collection('course')
            .updateOne(
                {
                    courseCode: req.query.courseCode
                },
                {
                    $set: req.body
                }
            );

        console.log(result);

        if (result.matchedCount >= 1) {

            res.send({
                status: 200,
                message: "Course data updated",
                data: result
            });

        } else {

            res.send({
                status: 404,
                message: "Course not found",
                data: result
            });
        }

    } catch (error) {

        console.log(error);

        res.send({
            status: 500,
            message: "Something went wrong",
            error: error.message
        });
    }
};


// ================= DELETE =================

const deletecoursedata = async (req, res) => {

    try {

        const db = await database.connectDB();

        console.log("connect db");

        const result = await db
            .collection('course')
            .deleteOne({
                courseCode: req.query.courseCode
            });

        console.log(result);

        if (result.deletedCount >= 1) {

            res.send({
                status: 200,
                message: "Course data deleted",
                data: result
            });

        } else {

            res.send({
                status: 404,
                message: "Course not found",
                data: result
            });
        }

    } catch (error) {

        console.log(error);

        res.send({
            status: 500,
            message: "Something went wrong",
            error: error.message
        });
    }
};


module.exports = {
    getcoursedata,
    insertcoursedata,
    updatecoursedata,
    deletecoursedata
};
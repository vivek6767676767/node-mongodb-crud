const database = require('../Database/db');


// GET
const getcoursedata = async (req, res) => {

    try {

        const db = await database.connectDB();

        const result = await db
            .collection('course')
            .find()
            .toArray();

        res.send({
            status: 200,
            message: "Course data",
            data: result
        });

    } catch (error) {

        res.status(500).send({
            status: 500,
            message: "Something went wrong",
            error: error.message
        });

    }

};


// POST
const insertcoursedata = async (req, res) => {

    try {

        const db = await database.connectDB();

        const result = await db
            .collection('course')
            .insertOne(req.body);

        res.send({
            status: 200,
            message: "Course data inserted",
            data: result
        });

    } catch (error) {

        res.status(500).send({
            status: 500,
            message: "Something went wrong",
            error: error.message
        });

    }

};


// PUT
const updatecoursedata = async (req, res) => {

    try {

        const db = await database.connectDB();

        const result = await db
            .collection('course')
            .updateOne(
                { courseCode: req.query.courseCode },
                { $set: req.body }
            );

        if (result.matchedCount === 0) {

            return res.status(404).send({
                status: 404,
                message: "Course not found"
            });

        }

        res.send({
            status: 200,
            message: "Course data updated",
            data: result
        });

    } catch (error) {

        res.status(500).send({
            status: 500,
            message: "Something went wrong",
            error: error.message
        });

    }

};


// DELETE
const deletecoursedata = async (req, res) => {

    try {

        const db = await database.connectDB();

        const result = await db
            .collection('course')
            .deleteOne({
                courseCode: req.query.courseCode
            });

        if (result.deletedCount === 0) {

            return res.status(404).send({
                status: 404,
                message: "Course not found"
            });

        }

        res.send({
            status: 200,
            message: "Course data deleted",
            data: result
        });

    } catch (error) {

        res.status(500).send({
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
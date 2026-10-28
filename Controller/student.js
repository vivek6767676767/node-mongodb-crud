const database = require('../Database/db');


// =========================
// GET STUDENTS
// =========================

const getstudentdata = async (req, res) => {
    try {

        const db = await database.connectDB();

        const result = await db
            .collection('student')
            .find()
            .toArray();

        res.send({
            status: 200,
            message: "Student data",
            data: result
        });

    } catch (error) {

        console.log(error);

        res.status(500).send({
            status: 500,
            message: "Something went wrong",
            error: error.message
        });

    }
};


// =========================
// INSERT STUDENT
// =========================

const insertstudentdata = async (req, res) => {
    try {

        const db = await database.connectDB();

        const result = await db
            .collection('student')
            .insertOne(req.body);

        res.send({
            status: 200,
            message: "Student data inserted",
            data: result
        });

    } catch (error) {

        console.log(error);

        res.status(500).send({
            status: 500,
            message: "Something went wrong",
            error: error.message
        });

    }
};


// =========================
// UPDATE STUDENT
// =========================

const updatestudentdata = async (req, res) => {
    try {

        const db = await database.connectDB();

        const result = await db
            .collection('student')
            .updateOne(
                { name: req.query.name },
                { $set: req.body }
            );

        if (result.matchedCount === 0) {

            return res.status(404).send({
                status: 404,
                message: "Student not found"
            });

        }

        res.send({
            status: 200,
            message: "Student data updated",
            data: result
        });

    } catch (error) {

        console.log(error);

        res.status(500).send({
            status: 500,
            message: "Something went wrong",
            error: error.message
        });

    }
};


// =========================
// DELETE STUDENT
// =========================

const deletestudentdata = async (req, res) => {
    try {

        const db = await database.connectDB();

        const result = await db
            .collection('student')
            .deleteOne({
                name: req.query.name
            });

        if (result.deletedCount === 0) {

            return res.status(404).send({
                status: 404,
                message: "Student not found"
            });

        }

        res.send({
            status: 200,
            message: "Student data deleted",
            data: result
        });

    } catch (error) {

        console.log(error);

        res.status(500).send({
            status: 500,
            message: "Something went wrong",
            error: error.message
        });

    }
};


module.exports = {
    getstudentdata,
    insertstudentdata,
    updatestudentdata,
    deletestudentdata
};
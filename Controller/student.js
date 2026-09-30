const database = require('../Database/db');


// ================= GET =================

const getstudentdata = async (req, res) => {

    try {

        const db = await database.connectDB();

        const result = await db
            .collection('student')
            .find()
            .toArray();

        res.send({
            status: 200,
            message: "Get data",
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

const insertstudentdata = async (req, res) => {

    try {

        console.log(req.body);

        const db = await database.connectDB();

        const result = await db
            .collection('student')
            .insertOne(req.body);

        console.log(result);

        if (result.acknowledged === true) {

            res.send({
                status: 200,
                message: "Record inserted",
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

const updatestudentdata = async (req, res) => {

    try {

        const db = await database.connectDB();

        const result = await db
            .collection('student')
            .updateOne(
                { name: req.query.name },
                {
                    $set: req.body
                }
            );

        console.log(result);

        if (result.matchedCount >= 1) {

            res.send({
                status: 200,
                message: "Record updated",
                data: result
            });

        } else {

            res.send({
                status: 404,
                message: "Student not found",
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

const deletestudentdata = async (req, res) => {

    try {

        const db = await database.connectDB();

        const result = await db
            .collection('student')
            .deleteOne({
                name: req.query.name
            });

        console.log(result);

        if (result.deletedCount >= 1) {

            res.send({
                status: 200,
                message: "Record deleted",
                data: result
            });

        } else {

            res.send({
                status: 404,
                message: "Student not found",
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
    getstudentdata,
    insertstudentdata,
    updatestudentdata,
    deletestudentdata
};
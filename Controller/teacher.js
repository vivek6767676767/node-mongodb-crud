const database = require('../Database/db');


// ================= GET =================

const getteacherdata = async (req, res) => {

    try {

        const db = await database.connectDB();

        console.log("connect db");

        const result = await db
            .collection('teacher')
            .find()
            .toArray();

        console.log(result);

        res.send({
            status: 200,
            message: "Teacher data",
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

const insertteacherdata = async (req, res) => {

    try {

        console.log(req.body);

        const db = await database.connectDB();

        console.log("connect db");

        const result = await db
            .collection('teacher')
            .insertOne(req.body);

        console.log(result);

        if (result.acknowledged === true) {

            res.send({
                status: 200,
                message: "Teacher data inserted",
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

const updateteacherdata = async (req, res) => {

    try {

        const db = await database.connectDB();

        console.log("connect db");

        const result = await db
            .collection('teacher')
            .updateOne(
                {
                    name: req.query.name
                },
                {
                    $set: req.body
                }
            );

        console.log(result);

        if (result.matchedCount >= 1) {

            res.send({
                status: 200,
                message: "Teacher data updated",
                data: result
            });

        } else {

            res.send({
                status: 404,
                message: "Teacher not found",
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

const deleteteacherdata = async (req, res) => {

    try {

        const db = await database.connectDB();

        console.log("connect db");

        const result = await db
            .collection('teacher')
            .deleteOne({
                name: req.query.name
            });

        console.log(result);

        if (result.deletedCount >= 1) {

            res.send({
                status: 200,
                message: "Teacher data deleted",
                data: result
            });

        } else {

            res.send({
                status: 404,
                message: "Teacher not found",
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
    getteacherdata,
    insertteacherdata,
    updateteacherdata,
    deleteteacherdata
};
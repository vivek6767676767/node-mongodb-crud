const database = require('../Database/db');


// GET
const getteacherdata = async (req, res) => {

    try {

        const db = await database.connectDB();

        const result = await db
            .collection('teacher')
            .find()
            .toArray();

        res.send({
            status: 200,
            message: "Teacher data",
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
const insertteacherdata = async (req, res) => {

    try {

        const db = await database.connectDB();

        const result = await db
            .collection('teacher')
            .insertOne(req.body);

        res.send({
            status: 200,
            message: "Teacher data inserted",
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
const updateteacherdata = async (req, res) => {

    try {

        const db = await database.connectDB();

        const result = await db
            .collection('teacher')
            .updateOne(
                { name: req.query.name },
                { $set: req.body }
            );

        if (result.matchedCount === 0) {

            return res.status(404).send({
                status: 404,
                message: "Teacher not found"
            });

        }

        res.send({
            status: 200,
            message: "Teacher data updated",
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
const deleteteacherdata = async (req, res) => {

    try {

        const db = await database.connectDB();

        const result = await db
            .collection('teacher')
            .deleteOne({
                name: req.query.name
            });

        if (result.deletedCount === 0) {

            return res.status(404).send({
                status: 404,
                message: "Teacher not found"
            });

        }

        res.send({
            status: 200,
            message: "Teacher data deleted",
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
    getteacherdata,
    insertteacherdata,
    updateteacherdata,
    deleteteacherdata
};
const express = require("express");
const auth = require("../middleware/auth.middleware");
const Food = require("../models/Food");
const router = express.Router({ mergeParams: true });

// /api/foods
router
    .route("/")
    .get(async (req, res) => {
        try {
            const { orderBy, equalTo } = req.query;
            const list = await Food.find({ [orderBy]: equalTo });
            res.send(list);
        } catch (e) {
            res.status(500).json({
                message: "На сервере произошла ошибка. Попробуйте позже"
            });
        }
    })
    .post(auth, async (req, res) => {
        try {
            console.log({ ...req.body });
            const newFood = await Food.create({
                ...req.body
                // foodId: req.food._id
            });
            res.status(201).send(newFood);
        } catch (e) {
            res.status(500).json({
                message: "На сервере произошла ошибка. Попробуйте позже"
            });
            console.log(e.message);
        }
    });

router
    .route("/:foodId")
    .delete(auth, async (req, res) => {
        try {
            const { foodId } = req.params;
            await Food.findByIdAndRemove(foodId);
            return res.send(null);
        } catch (e) {
            res.status(500).json({
                message: "На сервере произошла ошибка. Попробуйте позже"
            });
            console.log(e.message);
        }
    })
    .patch(auth, async (req, res) => {
        try {
            const { foodId } = req.params;

            const updatedFood = await Food.findByIdAndUpdate(foodId, req.body, {
                new: true
            });
            res.send(updatedFood);
        } catch (e) {
            res.status(500).json({
                message: "На сервере произошла ошибка. Попробуйте позже"
            });
            console.log(e.message);
        }
    });

module.exports = router;

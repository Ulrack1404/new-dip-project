const { Schema, model } = require("mongoose");

const schema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        category: { type: Schema.Types.ObjectId, ref: "Category" },
        price: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        imageUrl: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = model("Food", schema);

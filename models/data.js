const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const formSchema = new Schema({
    name: {
        type: String,
        require: true,
    },

    email: {
        type: String,
        require: true,
    },

    password: {
        type: String,
        require: true,
    }
});

const Formdata = mongoose.model("Formdata", formSchema);

module.exports = Formdata;
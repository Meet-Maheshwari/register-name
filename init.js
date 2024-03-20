const mongoose = require("mongoose");
const Formdata = require("./models/data.js");

main()
.then(() => {
    console.log("connection successfull");
})
.catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/form');
};

const data1 = new Formdata({
    name: "Hemangi",
    email: "hemangi01@gmail.com",
    password: "24#Midtours",
});

data1.save()
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})
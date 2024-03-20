if(process.env.NODE_ENV != "production") {
    require("dotenv").config();
}

const express = require("express");
const mongoose = require("mongoose");
const Formdata = require("./models/data.js");

const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));

main()
.then(() => {
    console.log("connetion successfull");
})
.catch((err) => {
    console.log(err);
});

 async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/form');
 };

app.listen(8080, () => {
    console.log("app is listening to port 8080");
});

app.get("/", (req, res) => {
    res.send("This is a Home Page, Add /form in the end of url to reach our website... Thankyou!");
})

app.get("/form", (req, res) => {
    res.sendFile(__dirname + "/views/registrationform.html");
});

app.post("/form", async (req, res) => {
    let {name , email, password } = req.body;
    const existingUser = await Formdata.findOne({email: email});
    if (!existingUser) {
        const user1 = new Formdata({
            name: name,
            email: email,
            password: password,
        });
        await user1.save();
        console.log(name + email + password);
        res.sendFile(__dirname + "/views/success.html");
    } else {
        res.sendFile(__dirname + "/views/error.html");
    }
})

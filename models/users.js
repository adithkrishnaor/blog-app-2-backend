const mongoose = require("mongoose")
const Schema = mongoose.Schema({
    "name": { type: String, require },
    "email": { type: String, require },
    "password": { type: String, require },
    "dob": { type: String, require },
    "gender": { type: String, require }
})

let usermodel = mongoose.model("users",Schema)
module.exports = {usermodel}
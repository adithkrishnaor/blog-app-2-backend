const mongoose = require("mongoose")
const Schema = mongoose.Schema({
    "title": { type: String, require },
    "content": { type: String, require }
})

let postmodel = mongoose.model("posts",Schema)
module.exports = {postmodel}
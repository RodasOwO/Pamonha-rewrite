const mongoose = require("mongoose")
let reqstring = {
  type: String,
  required: true,
}
const UserSchema = mongoose.Schema({
  _id: reqstring,
  milho: Number,
})
module.exports = mongoose.model("users", UserSchema)

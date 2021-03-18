const mongoose = require("mongoose")
let reqstring = {
  type: String,
  required: true,
}
const GuildSchema = mongoose.Schema({
  _id: reqstring,
  prefix: String,
})
module.exports = mongoose.model("guilds", GuildSchema)

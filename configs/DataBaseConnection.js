const mongoose = require("mongoose")
function ConnectToMongo(mongooseString) {
  mongoose.connect(
    mongooseString,
    { useNewUrlParser: true, useUnifiedTopology: true, keepAlive: true },
    (err) => {
      if (err) return console.log(`(x) Erro a conectar á db ${err}`)
      console.log("conectada com succeso")
    }
  )
}
module.exports = ConnectToMongo

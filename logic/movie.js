const Movie = require("../models/Movie")
async function create(req)
{
    var res = {} 
    const movie = new Movie(req.body)
    try
    {
      await movie.save()
      console.log("Saved")
      res = {msg:"Done"}
    }
    catch(err)
    {
      console.log(err)
      res = {msg:"Failed"}
    }
    return res
}

module.exports = { create }

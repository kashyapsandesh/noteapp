//Define Schemas-->Note: id, userid,title,content,dateadded
//create model--> modelname,schemaname
const mongoose = require("mongoose");
const noteschema = mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  userid: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    
  },
  dateadded: {
    type: Date,
    default: Date.now,
  },
});
module.exports =(mongoose.model("Note",noteschema));

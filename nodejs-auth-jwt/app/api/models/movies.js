const mongoose = require('mongoose'); 
//Define a schema 
const Schema = mongoose.Schema; 
const MovieSchema = new Schema({ 
  movieName: { 
  type: String, 
  trim: true,   
  required: true,
 }, 
  releaseDate: { 
  type: Date, 
  trim: true, 
  required: true 
 } 
}); 
module.exports = mongoose.model('Movie', MovieSchema) 
import mongoose from "mongoose";

const Schema = mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Category: {
    type: String,
    required: true,
  },
  Size: {
    type: String,
    enum: [ "M", "L"],
    required: true,
  },
  Color: {
    type: String,
    enum: [ "Red", "Green"],
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  
  },
});

export default mongoose.model("Products", Schema);

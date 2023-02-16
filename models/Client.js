import mongoose from "mongoose";

const { Schema } = mongoose;

const ClientSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 2,
    max: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    min: 2,
  },
});

const Client = mongoose.model("Client", ClientSchema);
export default Client;

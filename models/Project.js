import mongoose from "mongoose";

const { Schema } = mongoose;

const ProjectSchema = new Schema({
    name: {
        type: String,
        required: true,
        min: 2,
        max: 50,
      },
      description: {
        type: String,
        required: true,
      },
      status: {
        type: String,
        enum: ['Not Started', 'In Progress', 'Completed'],
      },
      clientId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Client',
      }
});

const Project = mongoose.model("Project", ProjectSchema);
export default Project;

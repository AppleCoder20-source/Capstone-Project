import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true, 
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // email is unique
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
});

UserSchema.index({ userName: 1, name: 1 });

const Users = mongoose.model("User", UserSchema);

export default Users;

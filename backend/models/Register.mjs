import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  Username: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
    minlength: 8,
  },
});

UserSchema.index({Username: 1}, { unique: true });

const Users = mongoose.model('Users', UserSchema);

export default Users;
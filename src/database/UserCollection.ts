import mongoose from 'mongoose';

export default class UserCollection {
  User: mongoose.Model<mongoose.Document>;

  constructor() {
    this.User = mongoose.model('User', this.UserSchema());
  }
  UserSchema() {
    const User = new mongoose.Schema(
      {
        userDetails: {
          name: { type: String },
          email: { type: String },
        },
        createdAt: { type: Date, default: Date.now },
        status: { type: String, enum: ['active', 'in-active'], default: 'active' },
      },
      { versionKey: false }
    );
    return User;
  }
}

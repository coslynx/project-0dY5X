const User = require('../models/User');

const userService = {
  registerUser: async (userData) => {
    try {
      const newUser = new User(userData);
      const savedUser = await newUser.save();
      return savedUser;
    } catch (error) {
      throw new Error('Error registering user');
    }
  },

  updateUser: async (userId, userData) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(userId, userData, { new: true });
      return updatedUser;
    } catch (error) {
      throw new Error('Error updating user');
    }
  },

  deleteUser: async (userId) => {
    try {
      await User.findByIdAndDelete(userId);
      return 'User deleted successfully';
    } catch (error) {
      throw new Error('Error deleting user');
    }
  },

  findUserById: async (userId) => {
    try {
      const user = await User.findById(userId);
      return user;
    } catch (error) {
      throw new Error('User not found');
    }
  },

  findAllUsers: async () => {
    try {
      const users = await User.find();
      return users;
    } catch (error) {
      throw new Error('Error fetching users');
    }
  },
};

module.exports = userService;
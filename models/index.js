// import models
const Post = require('./Post');
const User = require('./User');

// set model relationships
User.hasMany(Post, {
    foreignKey: 'user_id'
  });
  
  Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
  });
  

// export all the models
module.exports = {Post, User};
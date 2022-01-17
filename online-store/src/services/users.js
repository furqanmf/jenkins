/**
 * Service talks to the database (data layer)
 */
import mongoose from "mongoose";
import config from '../utils/config.js';

//const mongoose = require( 'mongoose' );

const User = mongoose.model('User');

const fetchUsers = (sort, order, page, q, role ) => {

  const skipClause = (page - 1) * config.PAGE_SIZE;

  const filterClause = {};
  // role-based filtering is role is passed
  if (role) {
    filterClause.role = {
      $in: role
    };

  }
  if (q) {
    filterClause.name = {
      $regex: q,
      $options: 'i' //ignore case
    }
  }

  console.log(filterClause);

  const sortClause = {
    [sort]: order === 'desc' ? -1 : 1
}

  return User
  .find(filterClause)
  .select(' -password ')
  .sort(sortClause)
  .skip(skipClause)
  .limit(config.PAGE_SIZE);
};

 User.find();

 const fetchUserById = (_id) => {
  return User.findById(_id);
};

const addUser = ( user ) => {
  return User.create( user );
};

const updateUser = ( _id, newUserDetails ) => {
  return User.findByIdAndUpdate( _id, newUserDetails, { new: true } );
};

const removeUser = ( _id ) => {
  return User.findByIdAndRemove( _id );
};



export {
  fetchUsers,
  fetchUserById,
  addUser,
  updateUser,
  removeUser
};
const Users = require('../models/user');
const camelize = require('camelize');


const createUser = async (data) => {
  try {
    const createdUser = await Users.create({  username: data.username, password: data.password });
    return camelize(createdUser);
  } catch (error) {
    return null
  }
};

const readdOne = async (dados) => {
  try {
    const user = await Users.findOne({ where: { username: dados.username, password: dados.password } });
    if (!user) {
      return null
    }
    return camelize(user.dataValues);
  } catch (error) {
    return null
  }
};

const readUsername = async (dados) => {
  try {
    const user = await Users.findOne({ where: { username: dados.username } });
    if (!user) {
      return null
    }
    return camelize(user.dataValues);
  } catch (error) {
   return null
  }
};

const updateProduct = async (dados) => {
  try {
    const [rowsUpdated] = await Users.update(
      { username: dados.newUsername, password: dados.newPassword },
      { where: { username: dados.oldUsername, password: dados.oldPassword } }
    );
    if (rowsUpdated === 0) {
      return null
    }
    return { username: dados.newUsername, password: dados.newPassword };
  } catch (error) {
    return null
  }
};

const deleteUser = async (dados) => {
  try {
    const rowsDeleted = await Users.destroy({ where: { username: dados.username } });
    if (rowsDeleted === 0) {
      return null
    }
    return { username: dados.username };
  } catch (error) {
    return null
  }
};

module.exports = { createUser, readdOne, updateProduct, deleteUser,readUsername };

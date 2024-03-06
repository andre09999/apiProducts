const product = require('../models/product');
const camelize = require('camelize');

const createProduct = async ({ name, brand, model, price, color }) => {
  try {
    const createdProduct = await product.create({ name, brand, model, price, color });
    return camelize(createdProduct);
  } catch (error) {
    return null
  }
};

const readd = async () => {
  try {
    console.log(product);
    const products = await product.findAll();
    const productValues = products.map(product => product.dataValues);
    return camelize(productValues);
  } catch (error) {
    return null
  }
};

const readdOne = async (id) => {
  try {
    const products = await product.findByPk(id);
    if (!products) {
      throw new Error('Produto não encontrado');
    }
    return camelize(products.dataValues);
  } catch (error) {
    return null
  }
};

const updateProduct = async (id, { name, brand, model, price, color }) => {
  try {
    const [rowsUpdated] = await product.update(
      { name, brand, model, price, color },
      { where: { id } }
    );
    if (rowsUpdated === 0) {
      throw new Error('Produto não encontrado');
    }
    return { id, name, brand, model, price, color };
  } catch (error) {
    return null
  }
};

const delet = async (id) => {
  try {
    const rowsDeleted = await Product.destroy({ where: { id } });
    if (rowsDeleted === 0) {
      throw new Error('Produto não encontrado');
    }
    return { id };
  } catch (error) {
    return null
  }
};

module.exports = { createProduct, readd, readdOne, updateProduct, delet };

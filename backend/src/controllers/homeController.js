const express = require('express');

const homeController = (req, res) => {
  res.json({ message: 'Welcome to the E-commerce API' });
};

module.exports = new homeController();

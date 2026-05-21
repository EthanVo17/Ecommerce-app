const express = require('express');



function homeCOntroller(req, res) {
    res.json({ message: 'Welcome to the E-commerce API' });
}
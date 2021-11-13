const express = require('express');
const { body, validationResult } = require('express-validator');

const routes = express.Router();

const RomanController = require('./controllers/RomanController');
const romanController = new RomanController();

const validate = (validations) => {
  return async (req, res, next) => {
    for (let validation of validations) {
      await validation.run(req);
    }
    
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    res.status(400).json({ errors: errors.array() });
  };
};

routes.post('/convert', 
  validate([
    body('number').isInt({min:1,max:3999}).withMessage("Os valores devem ser numéricos entre 1 e 3999")
  ]), 
  romanController.ToRoman);

module.exports = routes;
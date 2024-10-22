const Validator = require("validator");
const isEmpty = require("./is_empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};
  data.name = !isEmpty(data.name)? data.name:'';
  if(!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must be between 2 and 30 characters";
  }
  if (Validator.isEmpty(data.email)) {
    errors.email= "Email is null";
  }
  if (!Validator.isEmail(data.email)) {
    errors.email= "Email no is type email";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password is null";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

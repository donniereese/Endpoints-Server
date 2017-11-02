const {
  STATUS_USER_ERROR,
  STATUS_SERVER_ERROR
} = require('../constants/constants.js');

// Support functions.
function validateStringInput(str) {
  if (str === undefined) return false;
  if (typeof str !== 'string') return false;
  return true;
}

function handleInvalidInput(res) {
  const error = {
    message: 'Invalid Input'
  };
  res.status(STATUS_USER_ERROR);
  // res.send(JSON.stringify(error, undefined, 2));
  res.json(error);
}

function handleServerError(res, err) {
  const error = {
    stack: err.stack,
    message: err.message
  };
  res.status(STATUS_SERVER_ERROR);
  // res.send(JSON.stringify(error, undefined, 2));
  res.json(error);
}

module.exports = {
  validateStringInput,
  handleServerError,
  handleInvalidInput
}

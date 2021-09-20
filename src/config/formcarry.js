const joi = require('joi');

const schema = joi
  .object()
  .keys({
    NEXT_PUBLIC_FORMCARRY_ENDPOINT: joi.string(),
  })
  .unknown();
const { value: envVars, error } = schema.validate({
  NEXT_PUBLIC_FORMCARRY_ENDPOINT: process.env.NEXT_PUBLIC_FORMCARRY_ENDPOINT,
});
if (error) {
  throw new Error(`Formcarry config validation error: ${error.message}`);
}

module.exports = {
  ENDPOINT: envVars.NEXT_PUBLIC_FORMCARRY_ENDPOINT,
};

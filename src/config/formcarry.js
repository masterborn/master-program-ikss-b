const joi = require('joi');

const schema = joi
  .object()
  .keys({
    NEXT_PUBLIC_FORMCARRY_URL: joi.string().required(),
  })
  .unknown();
const { value: envVars, error } = schema.validate({
  NEXT_PUBLIC_FORMCARRY_URL: process.env.NEXT_PUBLIC_FORMCARRY_URL,
});
if (error) {
  throw new Error(`Formcarry config validation error: ${error.message}`);
}

module.exports = {
  FORMCARRY_URL: envVars.NEXT_PUBLIC_FORMCARRY_URL,
};

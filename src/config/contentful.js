const joi = require('joi');

const schema = joi
  .object()
  .keys({
    SPACE_ID: joi.string().required(),
    ENV_ID: joi.string().required(),
    TOKEN: joi.string().required(),
  })
  .unknown();

const { value: envVars, error } = schema.validate(process.env);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
  SPACE_ID: envVars.SPACE_ID,
  ENV_ID: envVars.ENV_ID,
  TOKEN: envVars.TOKEN,
};

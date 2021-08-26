const joi = require('joi');

const schema = joi
  .object()
  .keys({
    NEXT_PUBLIC_CONTENTFUL_SPACE_ID: joi.string().required(),
    NEXT_PUBLIC_CONTENTFUL_API_TOKEN: joi.string().required(),
  })
  .unknown();

const { value: envVars, error } = schema.validate(process.env);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
  SPACE_ID: envVars.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  TOKEN: envVars.NEXT_PUBLIC_CONTENTFUL_API_TOKEN,
};

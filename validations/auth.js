const config = require('config')

const userPasswordRegex = config.get('app.userPasswordRegex')

const validatePostLogin = {
  schema: {
    body: {
      type: 'object',
      properties: {
        email: { type: 'string', format: 'email' },
        password: {
          type: 'string',
          format: 'regex',
          pattern: userPasswordRegex
        }
      },
      required: ['email', 'password']
    }
  }
}

const validatePostSignup = {
  schema: {
    body: {
      type: 'object',
      properties: {
        user: {
          properties: {
            email: { type: 'string', format: 'email' },
            password: {
              type: 'string',
              format: 'regex',
              pattern: userPasswordRegex,
              minLength: 6,
              maxLength: 20
            }
          },
          required: ['email', 'password']
        },
        recaptchaToken: {
          type: 'string'
        }
      },
      required: ['user']
    }
  }
}

module.exports = {
  validatePostLogin,
  validatePostSignup
}

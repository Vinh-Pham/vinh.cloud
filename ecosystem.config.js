const { join } = require('path')

module.exports = {
  apps: [{
    name: 'vinh.cloud',
    script: 'nuxt-start',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: `-c ${join(__dirname, 'nuxt.config.js')}`,
    instances: 'max',
    autorestart: true,
    watch: false,
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
}

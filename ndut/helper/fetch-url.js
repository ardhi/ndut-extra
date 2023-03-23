const http = require('http')
const https = require('https')

module.exports = async function (url, options = {}) {
  const { aneka, getNdutConfig } = this.ndut.helper
  const cfg = getNdutConfig('ndut-extra')
  options.url = url
  if (options.agent === false) {}
  else {
    const opt = options.agent || { keepAlive: true }
    options.httpAgent = options.httpAgent || new http.Agent(opt)
    options.httpsAgent = options.httpsAgent || new https.Agent(opt)
  }

  return await aneka.fetchUrl(options, {
    cacheBuster: options.cacheBuster,
    cacheBusterKey: cfg.cacheBusterKey
  })
}

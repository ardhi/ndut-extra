module.exports = async function (url, options = {}) {
  const { aneka, getNdutConfig } = this.ndut.helper
  const cfg = getNdutConfig('ndut-extra')
  options.url = url
  return await aneka.fetchUrl(options, {
    cacheBuster: options.cacheBuster,
    cacheBusterKey: cfg.cacheBusterKey
  })
}

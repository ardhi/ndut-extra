module.exports = async function (url, options = {}) {
  const { aneka, getNdutConfig } = this.ndut.helper
  const cfg = getNdutConfig('ndut-extra')
  return await aneka.fetchUrl(url, options, {
    cacheBuster: options.cacheBuster,
    cacheBusterKey: cfg.cacheBusterKey
  })
}

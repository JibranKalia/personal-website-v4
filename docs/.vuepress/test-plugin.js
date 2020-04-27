const path = require('path')
const spawn = require('cross-spawn')

module.exports = (options = {}, context) => ({
  extendPageData ($page) {
    const { transformer, dateOptions } = options
    console.log("Page", $page);
    console.log("Page Filepath", $page._filePath);
    const timestamp = getGitLastUpdatedTimeStamp($page._filePath)
    const $lang = $page._computed.$lang
    if (timestamp) {
      const lastUpdated = typeof transformer === 'function'
        ? transformer(timestamp, $lang)
        : defaultTransformer(timestamp, $lang, dateOptions)
      $page.lastUpdated = lastUpdated
    }
  }
})

function defaultTransformer (timestamp, lang, dateOptions) {
  return new Date(timestamp).toLocaleString(lang, dateOptions)
}

function getGitLastUpdatedTimeStamp (filePath) {
  console.log("Filepath", filePath);
  let lastUpdated
  try {
    lastUpdated = parseInt(spawn.sync(
      'git',
      ['log', '-1', '--format=%at', path.basename(filePath)],
      { cwd: path.dirname(filePath) }
    ).stdout.toString('utf-8')) * 1000
  } catch (e) { console.log(`error: ${e}`)}
  console.log("Last Updated", lastUpdated);
  return lastUpdated
}
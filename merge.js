/* eslint-disable n/handle-callback-err */
// https://stackoverflow.com/a/40022630
const fs = require('fs')
const glob = require('glob')

const output = {}
const outputPath = './snippets/'

glob('src/universal/*.json', (error, files) => {
  try {
    fs.existsSync(outputPath) || fs.mkdirSync(outputPath)

    fs.accessSync(outputPath, fs.constants.R_OK | fs.constants.W_OK)

    // console.log(`${outputPath} exists, and it is writable`);

    files.forEach((filename) => {
      const contents = JSON.parse(fs.readFileSync(filename, 'utf8'))
      Object.assign(output, contents)
    })

    fs.writeFileSync(`${outputPath}javascript.json`, JSON.stringify(output))

    console.log(`Complete! :)`)
  } catch (err) {
    console.error(
      `${outputPath} ${
        err.code === 'ENOENT' ? 'does not exist' : 'is read-only'
      }`
    )
    console.log('Failed! :(')
  }
})

const vueOutput = {}
glob('src/vue-script/*.json', (error, files) => {
  try {
    fs.existsSync(outputPath) || fs.mkdirSync(outputPath)

    fs.accessSync(outputPath, fs.constants.R_OK | fs.constants.W_OK)

    // console.log(`${outputPath} exists, and it is writable`);

    files.forEach((filename) => {
      const contents = JSON.parse(fs.readFileSync(filename, 'utf8'))
      Object.assign(vueOutput, contents)
    })
    fs.writeFileSync(`${outputPath}vueScript.json`, JSON.stringify(vueOutput))

    console.log(`Complete! :)`)
  } catch (err) {
    console.error(
      `${outputPath} ${
        err.code === 'ENOENT' ? 'does not exist' : 'is read-only'
      }`
    )
    console.log('Failed! :(')
  }
})

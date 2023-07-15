const puppeteer = require('puppeteer')

const downProject = async (URL) => {
  try {
    const delay = (time) => new Promise((resolve) => setTimeout(resolve, time))
    const browser = await puppeteer.launch({
      headless: 'new'
      // args: ['--no-sandbox', '--disable-setuid-sandbox'],
    })
    const page = await browser.newPage()
    await page.goto(URL)
    await page.waitForSelector('#studio-download-project')
    await page.$$eval(
      '.thq-panel-dropdown > .section > .pt-inline > .pt-btn',
      (options) => {
        options[2].click()
      }
    )
    await delay(3000)
    await browser.close()
    return 'ok'
  } catch (error) {
    return error.message
  }
}

module.exports = downProject

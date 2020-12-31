/*const puppeteer = require('puppeteer')
let scrape = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('http://books.toscrape.com/')
  const result = await page.evaluate(() => {
    const books = []
    document.querySelectorAll('section > div > ol > li img')
            .forEach((book) => books.push(book.getAttribute('alt')))
    return books
  })
  browser.close()
  return result
}
scrape().then((value) => {
  console.log(value)
})*/

const puppeteer = require('puppeteer')
let scrape = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('http://www.ans.gov.br/prestadores/tiss-troca-de-informacao-de-saude-suplementar/padrao-tiss-dezembro-2020')
  const result = await page.$eval('div.table-responsive table.table-bordered tbody tr td a', a => a.href )
  browser.close()
  return result
};
scrape().then((value) => {
  console.log(value)
}).catch(error => {
    console.error(error)
})
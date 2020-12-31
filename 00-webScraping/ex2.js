const download = require('download-pdf');
const puppeteer = require('puppeteer');

let getLink = async () => {
    
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.goto('http://www.ans.gov.br/prestadores/tiss-troca-de-informacao-de-saude-suplementar/padrao-tiss-dezembro-2020');
  const link = await page.$eval('a.btn.btn-primary.btn-sm.center-block', a => a.href );

  browser.close();

  return link;
};

getLink()
  .then(pdfLink => {
    let arrayLink = pdfLink.split("/")
    console.log(arrayLink[arrayLink.length - 1])
    let options = {
      filename: arrayLink[arrayLink.length - 1]
    }

    download(pdfLink, options, err => {
      if(err){
        console.error(err)
      }
    }) 
  })
  .catch(error => {
    console.error(error)
  })
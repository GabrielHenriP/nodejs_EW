const PDFExtract = require('pdf.js-extract').PDFExtract;
const pdfExtract = new PDFExtract();
const options = {
    normalizeWhitespace: true,
    disableCombineTextItems: true
}; /* see below */
pdfExtract.extract('Padrao_TISS_Componente_Organizacional__202012.pdf', options, (err, data) => {
  if (err) return console.log(err);
  //console.log(data.pages[78]);
  data.pages[78].content.map( bloco => {
      if(bloco.str ===  'Quadro 31'){
        console.log(bloco.str)
      }

      console.log(bloco.str)
      
  })
});


//Quadro 31 – Tabela de categoria do Padrão TISS
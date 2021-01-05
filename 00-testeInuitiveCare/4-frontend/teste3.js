const fs = require('fs');
const iconv = require('iconv-lite');

const filepath = "Relatorio_cadop.csv"

fs.createReadStream(filepath)
  .pipe(iconv.decodeStream('ascii'))
  .pipe(iconv.encodeStream('utf-8'))
  .pipe(fs.createWriteStream('file_utf-8.txt'));


const str = 'cat\u{1F639}';
console.log('cat\u{1F639}');


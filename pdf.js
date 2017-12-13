"use strict";
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,

  });
  const page = await browser.newPage();
  if (process.argv.length < 3){
    console.log("Usage: node pdf.js [url] [filename] ")
  }else{
    const url = process.argv[2]
    const filename = process.argv[3] || 'html-pdf'
    page.setViewport({width: 1024, height: 769, isMobile: false} )
    await page.goto(url, {waitUntil: 'networkidle2'});
    await page.pdf({
      path: filename+'.pdf',
      width: '14.7in',
      height: '10.27in',
      printBackground: true,
      margin: {top: '10px', right: '10px', left: '10px', bottom: '10px'},
    });
  }
  await browser.close();

})();

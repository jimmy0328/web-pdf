const puppeteer = require('puppeteer');
const http = require('http');
const url = require('url');

const app = http.createServer(async (req, res) => {

  let { host } = req.headers;
  let q        = url.parse(req.url, true)
  let params   = q.query 
  let browser  = await puppeteer.launch();
  let page     = await browser.newPage();
  let pageURL  = params["url"]

  if (pageURL && q.pathname == "/pdf"){
    
    await page.goto(pageURL, {waitUntil: 'networkidle2'})

    const pdf_format = {
      width:  '14.7in',
      height: '10.27in',
      printBackground: true,
      margin: { 
        top:    '10px', 
        right:  '10px', 
        left:   '10px', 
        bottom: '10px',
      },
      timeout: 3000000,
    }

    const pdf = await page.pdf(pdf_format);

    res.writeHead(200, {
      'content-type': 'application/pdf',
      'cache-control': 'public,max-age=31536000',
    });
    res.end(pdf, 'binary');
  }else{
    res.writeHead(200, {
      'content-type': 'text/html; charset=UTF-8',
      'cache-control': 'public,max-age=31536000',
    });
    res.end("<h1> Opps, Something was wrong </h1>"); 

  }

})
app.listen(3000);


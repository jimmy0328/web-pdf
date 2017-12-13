# WEB-PDF

> WEB-PDF is use [Puppeteer] (https://github.com/GoogleChrome/puppeteer) Chrome over the [DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/). It can also be configured to use full (non-headless) Chrome.


###### What can I do?

* Generate PDFs of pages.
* Crawl a SPA and generate pre-rendered content (i.e. "SSR").
* Scrape content from websites.


### Installation

> *Note: Puppeteer requires at least Node v6.4.0, but the examples below use async/await which is only supported in Node v7.6.0 or greater*

install html-pdf 
```
git clone git@github.com:jimmy0328/html-pdf.git
cd html-pdf
yarn install
``````

run 
```
node pdf.js [url] [filename]

```









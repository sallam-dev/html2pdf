const puppeteer = require("puppeteer");
const { writeFileSync, readFileSync } = require("fs");

async function printPDF() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setContent(readFileSync(`${__dirname}/test.html`, 'utf-8'));
  const pdfPromise = page.pdf({ format: "A4" });
  const pdf = await pdfPromise
  await browser.close();
  return pdf;
}

(async function() {
  writeFileSync(`${__dirname}/test2.pdf`, await printPDF());
})();

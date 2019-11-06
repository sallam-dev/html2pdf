const puppeteer = require("puppeteer");
const { writeFileSync } = require("fs");

async function printPDF() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(`file://${__dirname}/test.html`, {
    waitUntil: "networkidle0"
  });
  const pdfPromise = page.pdf({ format: "A4" });
  const pdf = await pdfPromise
  await browser.close();
  return pdf;
}

(async function() {
  writeFileSync(`${__dirname}/test.pdf`, await printPDF());
})();

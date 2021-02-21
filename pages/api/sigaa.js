//https://sig.ifc.edu.br/sigaa/verTelaLogin.do
const puppeteer = require('puppeteer');
const chrome = require('chrome-aws-lambda');
export default async(req, res) => {

    const browser = await puppeteer.launch(
      process.env.NODE_ENV === 'production'
        ? {
            headless: true,
            args: ['--no-sandbox'],
            args: chrome.args,
            executablePath: await chrome.executablePath,
            headless: chrome.headless,
          }
        : {}
    );

    const page = await browser.newPage();
    await page.goto('https://sig.ifc.edu.br/sigaa/verTelaLogin.do',{
      waitUntil:'networkidle0'
    })
  
  
    await browser.close()
  
  res.statusCode = 200
  res.json({ user:req.query.user, pass:req.query.pass})
}

//https://sig.ifc.edu.br/sigaa/verTelaLogin.do
const puppeteer = require('puppeteer');
const chrome = require('chrome-aws-lambda');
export default async(req, res) => {
    const pass = req.query.pass;
    const user = req.query.user;

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
  
    await page.waitForSelector('input[name="user.login"]');
    await page.type('input[name="user.login"]', user);
    await page.type('input[name="user.senha"]', pass);
    await page.click('input[type="submit"]');
    await page.waitForSelector('#agenda-docente');
    const textContent = await page.evaluate(() => {
      return document.querySelector('#agenda-docente').outerHTML;
    })
    await browser.close()
  
  res.statusCode = 200
  res.json({user:textContent})
}

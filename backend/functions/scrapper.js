const puppeteer = require("puppeteer");
const { URLFolderDict } = require("./urlFolderDictClass.js");

const scrapPage = async (url) => {
  var foldername = URLFolderDict[url];

  const browser = await puppeteer.launch({
    headless: true,
    timeout: 20000,
    ignoreHTTPSErrors: true,
    slowMo: 0,
    args: [
      "--disable-gpu",
      "--disable-dev-shm-usage",
      "--disable-setuid-sandbox",
      "--no-first-run",
      "--no-sandbox",
      "--no-zygote",
      "--window-size=1280,720",
    ],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 1024 });
  await page.goto(url);

  await closeTermCondition(page, foldername);

  await scrollPage(page);

  var timestamp = Date.now();
  var tempdir = "/tmp/";

  var fileName = `${timestamp}_${foldername}.jpg`;
  var filePath = `${tempdir}${fileName}`;

  await page.screenshot({
    path: filePath,
    fullPage: true,
    type: "jpeg",
  });

  await browser.close();

  return {
    fileName: fileName,
    filePath: filePath,
  };
};

const scrollPage = async (page) => {
  await page.evaluate(() => {
    return new Promise((resolve, reject) => {
      let interval;
      const reachedBottom = () =>
        document.scrollingElement.scrollTop + window.innerHeight >=
        document.scrollingElement.scrollHeight;
      const scroll = async () => {
        document.scrollingElement.scrollTop += window.innerHeight / 2;
        if (reachedBottom()) {
          clearInterval(interval);
          document.scrollingElement.scrollTop = 0;
          resolve();
        }
      };
      interval = setInterval(scroll, 100);
    });
  });
};

const closeTermCondition = async (page, url) => {
  if (url === "Cnn") {
    try {
      await page.evaluate(() => {
        document.querySelector(".user-msg--header").lastElementChild.click();
      });
    } catch (e) {
      console.log("Exception in CloseTermCondition", e);
    }
  }
};

module.exports = { scrapPage };

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { Storage } = require("@google-cloud/storage");
const scrape = require("./scrapper.js");
const { storage } = require("firebase-admin");
const storageClient = require("./StorageClient.js");
const { URLFolderDict } = require("./urlFolderDictClass.js");

const MAX_RETRIES = 3;
let retryCount = 0;
const KEY_FILE_NAME = "";

admin.initializeApp({
  credential: admin.credential.cert(KEY_FILE_NAME),
});

exports.scrapeEngine_test = functions
  .region("europe-central2")
  .runWith({ timeoutSeconds: 60 * 5, memory: "2GB" })
  .pubsub.schedule("0 19 * * *")
  .onRun((context) => {
    const MAX_RETRIES = 3;
    let retryCount = 0;

    const doScrape = () => {
      return wrapper().catch((err) => {
        console.error(err.toString());
        retryCount++;
        if (retryCount <= MAX_RETRIES) {
          console.log(`Retrying... Attempt ${retryCount} of ${MAX_RETRIES}`);
          return doScrape();
        } else {
          throw new Error(`Failed after ${MAX_RETRIES} retries`);
        }
      });
    };

    return doScrape();
  });

async function wrapper() {
  try {
    for (var url in URLFolderDict) {
      const [fileDetails, operationStatus, imageUrl] = await Promise.allSettled(
        [
          scrape.scrapPage(url),
          storageClient.uploadToStorage(
            url,
            fileDetails.fileName,
            fileDetails.filePath
          ),
          storageClient.updateDbCollection(imageUrl, url),
        ]
      );
    }
  } catch (err) {
    console.log(err.toString());
  }
}

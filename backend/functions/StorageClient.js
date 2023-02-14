const admin = require("firebase-admin");
const { Storage } = require("@google-cloud/storage");
const { URLFolderDict } = require("./urlFolderDictClass.js");
const { firestore } = require("firebase-admin");
const frst = require("@google-cloud/firestore");
const db = new frst.Firestore();

const BUCKETNAME = "";
const KEY_FILE_NAME = "";
const PROJECT_ID = "";

async function uploadToStorage(url, fileName, filePath) {
  let operationStatus = true;
  try {
    const storage = new Storage();
    var folderName = URLFolderDict[url];
    var bucketName = BUCKETNAME;
    const bucket = storage.bucket(bucketName);

    await bucket
      .upload(filePath, {
        gzip: true,
        destination: `${folderName}/${fileName}`,
        metadata: {
          metadata: { contentType: "image/jpeg" },
        },
      })
      .then(() => {
        console.log(`${fileName} uploaded to ${folderName}.`);
      })
      .catch((err) => {
        console.error("ERROR:", err);
      });
  } catch (e) {
    operationStatus = false;
    console.log(e);
  }
  return operationStatus;
}

async function GetImageUrl(fileName, url) {
  var folderName = URLFolderDict[url];
  var fileLocation = `${folderName}/${fileName}`;

  var bucketName = BUCKETNAME;
  const storage = new Storage({
    projectId: PROJECT_ID,
    credential: admin.credential.cert(KEY_FILE_NAME),
  });

  await storage.bucket(bucketName).file(fileLocation).makePublic();

  const bucket = storage.bucket(bucketName);
  const publicUrl = `https://storage.googleapis.com/${bucket.name}/${fileLocation}`;
  return publicUrl;
}

async function updateDbCollection(imageUrl, url) {
  const collection = URLFolderDict[url];
  const data = {
    imageUrl: imageUrl,
    date: frst.FieldValue.serverTimestamp(),
  };

  db.collection(collection)
    .add(data)
    .then((ref) => {
      console.log("Added document with id: ", ref.id);
    });

  console.log("updateDbCollection: ", imageUrl);
}

module.exports = { uploadToStorage, updateDbCollection, GetImageUrl };

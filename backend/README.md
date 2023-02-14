# Cloud function

the backend is a scheduled pub/sub function with firebase. it runs as a background job every day at 19:00 with NodeJs. It uses Puppeteer which is a
headless chromium browser to take screenshot from both Fox and CNN. The data is then saved in a storage bucket then the url is saved in a firestore collection.

## Prerequisite

To run this cloud function and deploy it to your GCP, y

1. Create a firebase project
2. Set up Node.js and the Firebase CLI
3. Initialize your project

More information how how to get started can be found using this link [Get started](https://firebase.google.com/docs/functions/get-started)

## Installation

use npm [pip](https://docs.npmjs.com/getting-started) to install dependencies.

```bash
npm install
```

## Usage

Before running and deploying this function you will need to change some variables inside index.js and StorageClient.js.

```javascript
const KEY_FILE_NAME = "";
const BUCKETNAME = "";
const PROJECT_ID = "";
```

To deploy the function to GCP you will need to run this command

```bash
firebase deploy --only functions
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

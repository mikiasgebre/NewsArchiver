<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/mikiasgebre/NewsArchiver">
    <img src="img/newsarchiverlogo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">News Archiver</h3>

  <p align="center">
    News Archiver from two different universe
    <br />
    <br />
    <a href="https://github.com/mikiasgebre/NewsArchiver">View Demo</a>
    ·
    <a href="https://github.com/mikiasgebre/NewsArchiver/issues">Report Bug</a>
    ·
    <a href="https://github.com/mikiasgebre/NewsArchiver/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[News Archiver website](https://dataaggregatorcnf.azurewebsites.net/)

In the United States there's an obvious schism in the way the news is reported. At any given moment, you can pull CNN in one tab and Fox News in another tab, you will often find headlines that seem to come from two different universes. This web app archives the content from both news websites every day at 19:00 to allow users to historically scroll through the news and see how it's reported.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![Blazor][blazor.com]][blazor-url]
- [![Nodejs][node.com]][node-url]
- [![Bootstrap][bootstrap.com]][bootstrap-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

The backend is a scheduled pub/sub function with firebase. it runs as a background job every day at 19:00 with NodeJS. It uses Puppeteer which is a headless chromium browser to take screenshot from both Fox and CNN. The data is then saved in a storage bucket then the URL is saved in a firestore collection.

The frontend is a blazor application that shows a calendar where user can select a date in which they want to see the news reported on both website.

### Prerequisites

To run this cloud function and deploy it to your GCP,

Create a firebase project
Set up Node.js and the Firebase CLI
Initialize your project
More information how how to get started can be found using this link Get started

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Navigate to the backend directory.
2. use [npm](https://docs.npmjs.com/getting-started) to install dependencies.

```bash
npm install
```

3. Before running and deploying this function you will need to change some variables inside index.js and StorageClient.js.

```javascript
const KEY_FILE_NAME = "";
const BUCKETNAME = "";
const PROJECT_ID = "";
```

4. To deploy the function to GCP you will need to run this command

```bash
firebase deploy --only functions
```

5. For the front-end, before building and running this project, You will need to change some variables in FirestoreDataAccessLayer.cs. You will need to get the projectId and projectKey file from GCP console.

```C#
private readonly string projectId = "";
private readonly string projectKeyFileNamePath = "";
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

<img src="img/screen_record.gif" style="margin-left:50px" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- Align both screenshot to have the same height
- Scrape also the content of the website so that user can look for keywords. (Comming in Version 2.0)

See the [open issues](https://github.com/mikiasgebre/NewsArchiver/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/development`)
3. Commit your Changes (`git commit -m 'Add some development'`)
4. Push to the Branch (`git push origin feature/development`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Mikias Gebre - [Personal Website](https://mikiasgebre.github.io/) -

Project Link: [https://github.com/mikiasgebre/NewsArchiver](https://github.com/mikiasgebre/NewsArchiver)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Idea behind the project](https://www.youtube.com/watch?v=JTOJsU3FSD8&list=WL&index=5&t=56s&ab_channel=Fireship)
- [Big Thank you to Fireship.io and Jeff Delaney](https://www.youtube.com/@Fireship/featured)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/mikiasgebre/NewsArchiver.svg?style=for-the-badge
[contributors-url]: https://github.com/mikiasgebre/NewsArchiver/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/mikiasgebre/NewsArchiver.svg?style=for-the-badge
[forks-url]: https://github.com/mikiasgebre/NewsArchiver/network/members
[stars-shield]: https://img.shields.io/github/stars/mikiasgebre/NewsArchiver.svg?style=for-the-badge
[stars-url]: https://github.com/mikiasgebre/newsarchiver/stargazers
[issues-shield]: https://img.shields.io/github/issues/mikiasgebre/NewsArchiver.svg?style=for-the-badge
[issues-url]: https://img.shields.io/github/issues/mikiasgebre/newsarchiver.svg?style=for-the-badge
[license-shield]: https://img.shields.io/github/license/mikiasgebre/NewsArchiver.svg?style=for-the-badge
[license-url]: https://github.com/mikiasgebre/NewsArchiver/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/mikias-gebre-015225b4/
[product-screenshot]: images/screenshot.png
[node.com]: https://camo.githubusercontent.com/faec9d89bd2c7d47b91d988dcd0f27011c27e8191d45836cfa36bf2b3c2a92bd/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d4e6f64652e6a7326636f6c6f723d333339393333266c6f676f3d4e6f64652e6a73266c6f676f436f6c6f723d464646464646266c6162656c3d
[node-url]: https://nodejs.org/en/
[bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[bootstrap-url]: https://getbootstrap.com
[blazor-url]: https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor
[blazor.com]: https://camo.githubusercontent.com/c8b610b9cf2320754d67c7e2e403569591e5baff7d4184ce75fbf94b49765f23/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d426c617a6f7226636f6c6f723d353132424434266c6f676f3d426c617a6f72266c6f676f436f6c6f723d464646464646266c6162656c3d

# Client side

This Blazor client-side app lets user see choose the date from a calendar and see the news on that Date.

## Prerequisite

To run this project you will need to :

1. Install .net6 sdk on your machine

## Installation

Install Dotnet6 from [Microsoft](https://dotnet.microsoft.com/en-us/download/dotnet/6.0)

## Usage

Before building and running this project, You will need to change some variables in FirestoreDataAccessLayer.cs. You will need to get the projectId and projectKey file from GCP console.

```C#
private readonly string projectId = "";
private readonly string projectKeyFileNamePath = "";
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

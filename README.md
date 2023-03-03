# Express Backend Application with Firebase and Bright Data

This is a backend application built using Express framework that integrates with Firebase and Bright Data to retrieve and store data.
The live application is available [Amazon Web Scraper](https://roookas-web-scraper.vercel.app/)
With love from [Rokas Rudzianskas](https://byrookas.com) with ❤️

## Features

- Ability to retrieve and store data from multiple sources using Bright Data's web scraping API.
- Integrates with Firebase to store and manage data securely in the cloud.
- Supports authentication and authorization using Firebase Authentication.
- Enables users to access data through RESTful APIs.

## Installation

To use this application, follow these steps:

1. Clone the repository to your local machine.
2. Run `npm install` to install the required dependencies.
3. Create a `.env` file with the following environment variables:

    - `FIREBASE_API_KEY`: Your Firebase API key
    - `FIREBASE_AUTH_DOMAIN`: Your Firebase authentication domain
    - `FIREBASE_PROJECT_ID`: Your Firebase project ID
    - `BRIGHT_DATA_API_KEY`: Your Bright Data API key

4. Run `npm start` to start the application.

Note: This application requires Node.js and npm to be installed on your machine.

## Usage

Once the application is running, you can use the following RESTful APIs to retrieve and store data:

- `GET /api/data` - retrieves data from Bright Data's web scraping API.
- `POST /api/data` - stores data in Firebase.

To access these APIs, you need to authenticate using Firebase Authentication. You can create new users or sign in existing users using Firebase Authentication.

## Contributing

Contributions to this application are welcome. To contribute, please fork the repository and submit a pull request with your changes.

## License

This application is licensed under the MIT license. See LICENSE.md for more information.

# Movies Night Application

## Description

This application was created as part of a recruitment process with venn.
The application displays a list of movies fetched from a given API.
users can search for movies, and filter the results on the page by name and year.
created by Sagi Granot.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/SagiGranot/neighbours-movie-night.git

2. build the docker container:

    ```bash
    docker build -t movies-app .

3. run the docker container:


    ```bash
    docker run -p 8080:80 movies-app

4. access the application in browser:

    http://localhost:8080

Alternatively install and run without docker:

1. Clone the repository:

   ```bash
   git clone https://github.com/SagiGranot/neighbours-movie-night.git

2. install:

    ```bash
    npm install

3. run:

    ```bash
    npm start

4. access the application in browser:

    http://localhost:3000
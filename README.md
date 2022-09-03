## Project design and configuration

Creating a great user experience was in the center of what I have tried to build with the available time window, I have build accordingly by following my assumption.

1. Make the UI looks and feels as what in the bequest official website
2. Create interactive navigation bar
3. Create address book
4. Create input to capture user typing
5. currently, user able to search by postcode only( not by address)
6. user able to same address in their book address by clicking on any address result
7. user data is save and persistent by utilizing browser local storage

## Node version

required v18.7.0

## Technologies used in the project

1. Docker
2. Docker Compose
3. React
4. Typescript
5. HTML and Dom objects
6. CSS3
7. Media queries
8. story book

## Libraries used in the project

1. React
2. axios
3. react testing library
4. Typescript
5. prettier
6. eslint
7. eslint-plugin-react
8. eslint-plugin-prettier
9. husky
10. story book

## The Components

1. App
2. Loader
3. Typography
4. Input
5. Navigation
6. AddressBook
7. Lookup Container

## project structure

|--bequest
    |---public
    |---src
        |--assets
        |---components
        |---hooks
        |---stories
        |---type
        |---utils
    ....
    eslintrc
    Dockerfile
    package.json
    tsconfig.json
    ....

## The Challenges I faced during development:

- Retrieve data from local storage as an array
- Manage the state( I am currently thinking of introducing redux)
- I couldn't find the url string for find by address and I didn't have time to check the docs properly
- Time

## Things to be improved:

1. Cover more edge cases
2. Make it more efficient
3. Allow user to search by address

## The Sources I looked at:

1. Github issue
2. Stack overflow
3. Google

# How to run the App? there are Two way to run the Apps
## using npm

1. navigate to the root directory of the project
2. open new terminal tab in the root directory of the project and run the following command:
   `npm install && npm start`
3. visit the url: `http://localhost:3000`

## 2. Run the app using Container

1. make sure you have docker desk top installed and its running, you can run it using docker or docker compose with one command

#### Docker

1. build image `docker build -t client:v1 .`
2. run image`docker run -it -p 3000:3000 client:v1`
3. visit the app on `http://localhost:3000`

### Docker-compose

1. run the following command in the terminal
   `docker-compose up --build`
2. you can check the services are running by visiting the following url:
   Client `http://localhost:3000`

# Testing

There are 10 tests covering most of the meaningful test cases

1. run the following command in the terminal
   `npm test`

## Available Scripts

In the project directory, you can run:

### `npm start`

### `npm test`

### `npm run build`

### `npm run eject`

### `npx prettier --write .`

# Getting Started with NftHouse App

### Env Variables

Create a .env file in then root and add the following

```
MONGO_URL = "your mongo URL"
PORT = 5000
NODE_ENV = development
JWT_SECRET = 'abc123'
```

### Install Dependencies (frontend & backend)

```
npm install
cd server
npm install
```
### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## API access via routes

List of all NFTs:

- http://localhost:5000/api/assets/


Find an NFTs by ID:

- http://localhost:5000/api/assets/id


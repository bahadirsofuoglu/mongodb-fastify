# mongodb-fastify
This project was made to learn some features of the mongoose package.In this project you can find:
- Transaction
- Seed
- Auth
- Some relationships

### Setup .ENV-default.json File && Run Project:
###### .env 
```sh
MONGO_URI=<YOUR-MONGO-URIN>
```
###### default.json 
```sh
{
  "app": {
    "userJwtExpiry": "7d",
    "userTokenExpiryInSeconds": "604800",
  },
  "secrets": {
    "jwt": "<YOUR-JWT-SECRET>"
  }
}
```
###### Run Project
```sh
$ npm install
$ npm run seed
$ npm run serve
```

# Movies API
## Structure
   - /app
     - app.js
     - package.json

## Configuration
Add new file in config folder
   - database.js ( in this file will save about the database config )
```
      module.exports = {
         multipleStatements  : true,
         host                : 'localhost',
         user                : 'root',
         password            : 'password',
         database            : 'assessment'
      };
```

   - config.js (in this file will save about the OMDB config)
```
  module.exports = {
    API_URL             : 'http://www.omdbapi.com/',
    API_KEY             : 'd3344e5b'
  }
```
## Get Package
```
  npm install
```

## HISTORY LOG
inside root folder there is DDL script, you can run it first before run the project. this table will save the history log data


## How to run?
```
  npm start
```

## Endpoint
  - search => /movies/search?apikey=<YOUR_APIKEY>&<OMDB_PARAMS>=<VALUE>
  - detail => /movies/detail/<IMDB_ID>

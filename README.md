# understandingAPI-NodeJS

A simple NodeJS + Express.js RESTful API serving data about recipes and musics.

API Version: 1.0

## More about

My main goal is organize my knowledge about MVC basics and improve coding (I'm a Padawan, so.. you know how it's gonna be, right?). :trollface:

You will notice that the endpoints for both are the same but the code is not. Inside musics I experiment some middleware initial concepts.

Inside misc folder you can try each of Thunder's Collections for both Endpoints (yes, I'm really into Nick Jonas but don't like the other brothers that much).

### Endpoints for recipes

`GET /recipes (ALL)`

 - Returns an array with all registered recipes.

   ```
   {
         "name": "Rabanada",
         "cuisine": "Brazilian French Toast",
         "history": "Rabanada is the Brazilian version of french toast.",
         "image": "https://cdn.tasteatlas.com/images/dishes/5c33b6059a634e6195f80ff37c3f0997.jpg?mw=1300"
    }
   ```

	- Status Code: 200.

`GET /recipes/:id (By ID)`

 - Returns a recipe by it's ID.
 - Status Code: 200.
 - Status Code: 404 if recipe's ID is not inside my Array

`POST /recipes`

- Create a new recipe

  ```
  {
        "name": "Beef Stroganoff",
        "cuisine": "Russia",
        "history": "RWhen it first appeared in the mid-19th-century Russia, beef Stroganoff was a dish made out of lightly floured beef cubes that have been sautéed and cooked in a simple sauce made from stock and mustard with only a small amount of sour cream.",
        "image": "https://cdn.tasteatlas.com/images/dishes/a3078ca2ae154366aed6f4e3aa61bc82.jpg?mw=1300"
  }
  ```

- Status Code: 200.

`PUT /recipes/:id`

- Change Recipe by it's ID

  ```
  {
        "name": "Stroganoff",
        "cuisine": "Russia",
        "history": "RWhen it first appeared in the mid-19th-century Russia, beef Stroganoff was a dish made out of lightly floured beef cubes that have been sautéed and cooked in a simple sauce made from stock and mustard with only a small amount of sour cream.",
        "image": "https://cdn.tasteatlas.com/images/dishes/a3078ca2ae154366aed6f4e3aa61bc82.jpg?mw=1300"
  }
  ```

 - Status Code: 200.
 - Status Code: 404 if recipe's ID is not inside my Array

`DELETE /recipes/:id`

 - Status Code: 200.
 - Status Code: 404 if recipe's ID is not inside my Array

### Endpoints for musics

`GET /musics (ALL)`

 - Returns an array with all registered musics (my array have only on music to start)

   ```
   {
         "name": "Falling",
         "artist": "Léon",
         "duration": "3:55",
         "year": 2019
    }
   ```

   Status Code: 200

`GET /musics/:id (By ID)`

 - Returns a music by it's ID
 - Status Code: 200
 - Status Code: 404 if music's ID is not inside my Array

`POST /musics`

- Create a new music

  ```
  {
        "name": "This is Heaven",
        "artist": "Nick Jonas",
        "duration": "3:34",
        "year": 2021
  }
  ```

  Status Code: 200

- Status Code 400 if name field is empty

- Redirects to GET /musics

`PUT /musics/:id`

 - Change music by it's ID

   ```
   {
         "name": "Spaceman",
         "artist": "Nick Jonas",
         "duration": "3:16",
         "year": 2021
   }
   ```

   Status Code: 200

 - Status Code: 404 if music's ID is not inside my Array

 - Status Code 400 if name field is empty

 - Redirects to GET /musics/:id

`DELETE /musics/:id`

 - Delete music by it's ID
 - Status Code: 200
 - Status Code: 404 if music's ID is not inside my Array
 - Redirects to GET /musics

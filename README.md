backbone-fill-collection
========================

Backbone-Fill-Collection makes it easy to generate collections with mock data quickly for prototyping.
It sends requests to [filltext.com](http://filltext.com/) and inserts the results into a backbone collection on every fetch.

## Download
[download master/edge](https://github.com/AdamBrodzinski/backbone-fill-collection/raw/master/backbone-fill-collection.js)

## Usage

Extend a collection from `Backbone.FillCollection` and insert a `fillWith` property with a hash of parameters. 
The key will become the models key and it's value can be static or mocked with the FillText params. A full list of 
FillText's params can be found on their [website](http://filltext.com/).

```javascript

var User = Backbone.Model.extend({
  defaults: {
    name: 'n/a',
    age: 'n/a',
    homeTown: 'n/a',
    email: 'n/a'
  }
});

var Users = Backbone.FillCollection.extend({
  model: User,

  fillWith: {
    // optional number of models to return, defaults to 5
    rows: 3,

    name: '{firstName}',
    homeTown: '{city}',
    email: '{email}',
    type: 'user'
  }
});    

```
#### *Outputs*
```javascript
users = new Users();
users.fetch();

console.log(users.toJSON());
// logs:

[
  Object
    age: "n/a"
    email: "KSherstan@sit.net"
    homeTown: "Stl"
    name: "Alonzo"
    type: "user"
    __proto__: Object
  , 
  Object
    age: "n/a"
    email: "JWallace@neque.com"
    homeTown: "Fort Collins"
    name: "Marina"
    type: "user"
    __proto__: Object
  , 
  Object
    age: "n/a"
    email: "GRamirez@tellus.org"
    homeTown: "Siloam Springs"
    name: "Rick"
    type: "user"
    __proto__: Object
]
```


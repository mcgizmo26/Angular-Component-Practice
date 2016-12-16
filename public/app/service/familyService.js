angular.module('angularApp')
       .service('family', function(){

  var myFamily = [
    {
      "name": "Lonnie",
      "age": "36",
      "species": "human"
    },
    {
      "name": "Jill",
      "age": "37",
      "species": "human"
    },
    {
      "name": "McKayla",
      "age": "10",
      "species": "human"
    },
    {
      "name": "Beckham",
      "age": "9",
      "species": "human"
    },
    {
      "name": "Liam",
      "age": "7",
      "species": "human"
    },
    {
      "name": "Ksenya",
      "age": "5",
      "species": "human"
    },
    {
      "name": "Marvin",
      "age": "7",
      "species": "dog"
    }
  ]

    return myFamily;

})

const users = [
  {
    first_name: 'Mike',
    last_name: 'Sheridan',
    age: 30
  },
  {
    first_name: 'Tim',
    last_name: 'Lee',
    age: 45
  },
  {
    first_name: 'John',
    last_name: 'Carte',
    age: 25
  }
];

let a=users.map(function(last){
	return last.last_name
});

console.log(a);
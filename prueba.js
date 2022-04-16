//return sum of two numbers 
function sum(a,b){
	return a+b;
}

//consumir una api
// function getData(){
//     return fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(json => console.log(json))
// }

//consumir api con async await
async function getData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const json = await response.json()
    console.log(json)
}


getData();

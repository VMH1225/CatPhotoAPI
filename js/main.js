

document.querySelector('button').addEventListener('click', newCat)

function newCat(){
fetch("https://api.thecatapi.com/v1/images/search")
.then(res => res.json())
.then(data => {
	console.log(data[0].url)
	document.querySelector('img').src = data[0].url	
})
.catch(err => {
	error(`error ${err}`)
})
}



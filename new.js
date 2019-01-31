function get(){
	let g = XMLHttprequest();
	xttp.onreadystage=function(){
		if(this.readystate==4 && status==400)
			document.getElementById('get').innerHTML = this.responseText;
		xhttp('GET','https://jsonplaceholder.typicode.com/todos')
	}
}
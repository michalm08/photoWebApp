function dodaj(number) {


	fetch('https://picsum.photos/v2/list')
	.then(res => res.json())
	.then((data) => {
	let x=data[number].download_url;



  var newItem = document.createElement("img");
  var textnode = document.createTextNode("image");
  newItem.appendChild(textnode);
  newItem.src = x;
  newItem.style="width:300px; margin-bottom: 100px;margin-right: 30px;"
  var list = document.getElementById("myList");
	
  setTimeout(function(){ list.insertBefore(newItem, list.childNodes[0]); }, 200);
  
})

}






function nextLine() {
  var newItem = document.createElement("p");
  var textnode = document.createTextNode('');
  newItem.appendChild(textnode);
  
  var list = document.getElementById("myList");
  list.insertBefore(newItem, list.childNodes[0]);
}


function klik() {
	action();
}

setTimeout(function(){ dodaj(0); }, 300);
setTimeout(function(){ dodaj(1); },600);
setTimeout(function(){ dodaj(2); }, 900);





let a=0;
function action(){

	if(a!=30)
      a+=3;
    else
      a=0



	setTimeout(function(){ dodaj(a+2); }, 500);
	setTimeout(function(){ dodaj(a+1); },1000);
	setTimeout(function(){ dodaj(a); }, 1500);
	//dodaj(a+2);
	//dodaj(a+1);
	//dodaj(a);
	nextLine();
}













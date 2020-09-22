function dodaj(number) {


	fetch('https://picsum.photos/v2/list')
	.then(res => res.json())
	.then((data) => {
	let x=data[number].download_url;



  var newItem = document.createElement("img");
  var textnode = document.createTextNode("image");
  newItem.appendChild(textnode);
  newItem.src = x;

  
  var list = document.getElementById("myList");
	
  list.insertBefore(newItem, list.childNodes[0]); 
  newItem.style="width:300px; margin-bottom: 100px;margin-right: 30px; border-radius: 8px; opacity: 0.0;"

  setTimeout(function(){ newItem.style="width:300px; margin-bottom: 100px;margin-right: 30px;border-radius: 8px; opacity: 0.0; "}, 300);
  setTimeout(function(){ newItem.style="width:300px; margin-bottom: 100px;margin-right: 30px;border-radius: 8px; opacity: 0.2; "}, 350);
  setTimeout(function(){ newItem.style="width:300px; margin-bottom: 100px;margin-right: 30px;border-radius: 8px; opacity: 0.3; "}, 390);
  setTimeout(function(){ newItem.style="width:300px; margin-bottom: 100px;margin-right: 30px;border-radius: 8px; opacity: 0.4; "}, 400);
  setTimeout(function(){ newItem.style="width:300px; margin-bottom: 100px;margin-right: 30px;border-radius: 8px; opacity: 0.5; "}, 500);
  setTimeout(function(){ newItem.style="width:300px; margin-bottom: 100px;margin-right: 30px;border-radius: 8px; opacity: 0.6; "}, 700);
  setTimeout(function(){ newItem.style="width:300px; margin-bottom: 100px;margin-right: 30px;border-radius: 8px; opacity: 0.7; "}, 900);
  setTimeout(function(){ newItem.style="width:300px; margin-bottom: 100px;margin-right: 30px;border-radius: 8px; opacity: 0.8; "}, 1100);
  setTimeout(function(){ newItem.style="width:300px; margin-bottom: 100px;margin-right: 30px;border-radius: 8px; opacity: 0.9; "}, 1300);
  setTimeout(function(){ newItem.style="width:300px; margin-bottom: 100px;margin-right: 30px;border-radius: 8px; opacity: 1; "}, 1500);
  
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

dodaj(0);
dodaj(1);
dodaj(2);





let a=0;
function action(){

	if(a!=30)
      a+=3;
    else
      a=0


  dodaj(a+2)
  setTimeout(function(){ dodaj(a+1)}, 1);
  setTimeout(function(){ dodaj(a)}, 1);
  

	nextLine();
}













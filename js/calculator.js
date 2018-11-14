for(var i=1; i<10; i++) {
	var btn = document.createElement("BUTTON");
  btn.innerHTML = i;
  btn.setAttribute('class', 'numberButton');
  btn.setAttribute('id', i);
  document.body.appendChild(btn);
   if(i%3 == 0) {
   	document.body.appendChild(document.createElement("BR"));
   }
  
  btn.addEventListener('click', function(){
    document.getElementById("result").value += this.getAttribute('id');
    calc.readFromInput();
  });
    
}


var zeroBtn = document.createElement("BUTTON");
zeroBtn.setAttribute('class', 'zeroButton');
zeroBtn.innerHTML = 0;
document.body.appendChild(zeroBtn);

class Calc {
	constructor() {
  	this.arr = [];
  }
  
  readFromInput(){
  	this.arr = document.getElementById("result").value.split('');
    
  }
  
}

var calc = new Calc();



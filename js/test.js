class Person {
    name="";

    constructor(name){
        this.name = name;
    }

    showMsg(){
        console.log(`hi i'am is ${this.name}`);
    }
}

class Child extends Person {
    #teacher = 'ºŸ¿œ ¶';

    constructor(name,teacher){
        super(name);
        this.#teacher= teacher;
    }

    showMsg(){
        console.log(`my name is ${this.name}  and i will be ${this.#teacher}`);
    }
    
}

var requestURL = "../js/elem.json"

var header = document.querySelector('header');

var request = new XMLHttpRequest();

request.open('GET','../js/elem.json',true);

request.responseType = 'text';



request.onLoad = function(){
    var Obj = request.response;
    populateHeader(Obj);

}

function headerFun(jsonObj){
    var h1 = document.createElement('h1');
    h1.textContent = jsonObj['name'];
    header.appendChild(h1);
}

request.send();

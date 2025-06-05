
/*
const h1 = document.getElementById("h1");
const btn = document.getElementById("button");
const clock = document.getElementById("clock");
const pn = document.getElementById("pn");
*/




// project 1


/*
function changeText(){
      btn.addEventListener("click",() => {
            h1.innerText = "Thanks for Visiting....";
      });
}
changeText();
*/

/*

// project 2

function changeBg(){
      btn.addEventListener("click",() => {
            h1.style.background = "green";
            h1.style.color = "black";
      });
}

changeBg();
*/


// digital Clock:

/*
function ShowTime(){
      const now = new Date();
      let h = String(now.getHours()).padStart(2,'0'); // atleat 2 chara r else 0
      let m = String(now.getMinutes()).padStart(2,'0'); // 1 char -> 01
      let s = String(now.getSeconds()).padStart(2,'0');  // 2 char -> 19

      clock.innerText = `${h} : ${m} : ${s}`;
}

setInterval(ShowTime, 1000);
ShowTime();
*/


// print numbers 1,2,3,4,5,6, for each 1sec gap


/*

console.log("Printing numbers!!!!!!");
function printNum(){
      for(let i = 1; i<= 10 ; i++){
           setTimeout( () => {
                  console.log(i);
           }, i * 1000);            // delay for each iteration
      }                             // 1000 for all iterations
}

printNum();

*/

// counterApp


/*
const display = document.getElementById("counterApp_display");
const  btn1 = document.getElementById("counterApp_btn1");
const  btn2 = document.getElementById("counterApp_btn2");

let count = 0;

function counterApp(){
      
      display.innerText = count;
      
      btn1.addEventListener("click",()=>{
            count = count + 1;
            display.innerText = count;
            console.log(count);
      });
      btn2.addEventListener("click",() =>{
            count = count - 1;
            display.innerText = count;
            console.log(count);
      });

}
counterApp();

*/






//to do list


/*
function addTask(){
      
      // get input
      const input = document.getElementById("textInput");
      // trim spaces---> remove extra spaces
      const taskText = input.value.trim();

      // condition if input empty
      if(taskText === ""){
            alert("input cannot be empty!!!");
            return;
      }

      // creata a new list item <li>
      const  li = document.createElement("li");
      li.textContent = taskText;

      li.onclick = function(){
            this.remove();
      }

      document.getElementById("taskList").appendChild(li);

      input.value = "";

}

*/


// --> Ranadom quote Generator


/*
async function generate(){

      const textgenerate = document.getElementById("textgenerate");

      try{
            const p = await fetch('https://quotes-api-self.vercel.app/quote');
            const data = await p.json();
            //console.log(data);
            //textgenerate.textContent = `"${data.quote}" - ${data.author}`;

            const li = document.createElement("li");
            li.textContent = `"${data.quote}" - ${data.author}`;

            li.onclick = function(){
                  this.remove();
            };
            textgenerate.appendChild(li);
      }
      catch(err){
            textgenerate.textContent = "field to featch the ApI";
            console.log(err);
      }
      
}
*/




/*
const arr = [1,2,3,4,5];
console.log(arr);
console.log(arr.length);
console.log(typeof(arr));

const person = {first : "Shashi", last:"Kumar", age: 20};
console.log(person);
console.log(typeof(person));

let car = "Shashi";
console.log(car);
console.log(typeof(car));


let a = 10;
let b = 20;
function myFunction(){
      console.log(`${a}\n${b}`);
}
myFunction();


function sum( a,b){
      return a+b;
}
let x = sum(1,2);
console.log(x);



let multi = (a,b)=>{
      return a*b;
};
let xx = multi(1,2);
console.log(xx);


const person1 = {
      firstName: "John",
      lastName: "Doe",
      age: 50,
      eyeColor: "blue"
    };
    
delete person1.age;
person1.mobile = 7353749696;
person1.eyeColor = "red";

for(let key in person1){
      console.log(`${key}:${person1[key]}`);
}
console.log(person1);

const myArr = Object.values(person1);
console.log(myArr);
const myArr1 = Object.entries(person1);
console.log(myArr1);

let myString = JSON.stringify(person1);
console.log(myString);




class student{
      constructor(firstName,secondName){
            this._firstName = firstName;
            this.secondName = secondName;
      }

      setFirstName(firstName){
            this._firstName = firstName;
      }
      setLastName(lastName){
            this.lastName = lastName;
      }
      getFirstName(){
            return this._firstName;
      }
      getSecondName(){
            return this.secondName;
      }
};

const s1 = new student("Shashi","Kumar");
console.log(s1.getFirstName());
console.log(s1.getSecondName());


*/

console.log("Helloooooo")

async function getData(){
      const ptag = document.getElementById("pTag");
      ptag.innerText="Loading....";
      
      try{
            const promise = await fetch('https://quotes-api-self.vercel.app/quote');
            const data = await promise.json();
            console.log(data);
            ptag.innerText= `${data.quote} ~ ${data.author}`;
      }    
      catch(err){
            ptag.innerText="Failed to Fetch the Data.....";
            console.log(err);
      } 
}
      


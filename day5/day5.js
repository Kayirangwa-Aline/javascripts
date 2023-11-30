 let year = "1990";
console.log(typeof year);

//program block: to divide program into blocks using curly bracketsclear
let  counter;
console.log(counter);  
 {
          counter  =  1;
          console.log(counter);  
 }
 counter  =  counter  +  1;
 console.log(counter);  

//Program blocks can be nested, that is, we can create one block inside of another one.
 let counter;
 console.log(counter);
 {
    counter = 1;
    {
    console.log(counter);
 }
 }
 counter = counter + 1;
 console.log(counter);

 //declare something using let or const inside a block

 let height = 180;
 {
   let weight = 70;
   console.log(height);
   console.log(weight);
 }
 console.log(height);
 console.log(weight);

//  to display the values of both variables inside and outside the block. 
//  We can also test the case with nested blocks:

 let height = 200;
 {
   let weight = 100;
   {
      let info = "tall";
      console.log(height);
      console.log(weight);
      console.log(info);
   }
   console.log(height);
   console.log(weight);
   console.log(info);
 }

 //declaration using var keyword. it will be visible everywhere
 var  height  =  180;
{
         var  weight  =  70;
         console.log(height);  
         console.log(weight);    
}
console.log(height);  
console.log(weight);  

// declaration of a simple function

function testFunction(){
   console.log("hello");
   console.log("world");
}
console.log("hello");
console.log('world');

/*declare a variable using the keyword var inside a function
its scope will be limited only to the inside of that function (it's a local scope).*/
var globalGreeting = 'Good';
function testFunction(){
   var localGreeting = 'Morning';
   console.log('function:');
   console.log(globalGreeting);
   console.log(localGreeting);
}
testFunction();
console.log("main program:");
console.log(globalGreeting);
console.log(localGreeting);

/*Variable shadowing
JavaScript allows for variable shadowing. 
What does that mean? It means that we can declare 
a global variable and a local variable of the same name.*/

let counter = 100;
console.log(counter);
{
   counter = 200;
   console.log(counter);
}
console.log(counter);



let counter = 100;
console.log(counter); 
{
    let counter = 200;
    console.log(counter); 
 }
 console.log(counter); 

 var  counter  =  100;
  
function  testFunction()  {
         var  counter  =  200;    
         console.log(counter);
 }
   
console.log(counter);  
 testFunction();  
console.log(counter);   

boolean

let a = 2;
let b = 5;
if(a>=b){
      console.log(true);
   } else{
   console.log(false);
}



//// variable scope = where a variable is accessible 

// let = variables are limited to block scope{}
// var = variables are limited to a function(){}

//// global variable = is declared outside any function
// (if global, var will CHANGE browser's window properties)



// console.log("I like my Biryani!");
// console.log("It's really great!");

// window.alert("I really Love Biryani!!!")


// let fname = "brown";
// let age = 21;
// let student = true; 

// document.getElementById("p1").innerHTML = "Hello " + fname ;
// document.getElementById("p2").innerHTML = "U are " + age + " years old." ;
// document.getElementById("p3").innerHTML = "u r happy: " + student ;


//how to accept user input

//easy way with a windows prompt 

    // let username = window.prompt("What is your name ?");
    // console.log(username);

//difficult way with HTML textbox

// pre requirement html 

//         <label id = "myLable">Enter your name:</label><br>
//             <input type = "text" id = "myText"><br>
//             <button type = "button" id = "myButton">submit</button>
//             <script src="index.js" ></script>


// let username;
// document.getElementById("myButton").onclick = function() {

//     username = document.getElementById("myText").value; 
//     console.log(username);
//     document.getElementById("myLable").innerHTML = "Hello " + username + "!";
// }


// Type Conversion = change the datatype of a value to another
//                   ( strings, number, booleans)

        // let age = window.prompt("How old where u yesterday ?");
        // console.log(typeof age);
    //// age = Number(age);  Type conversion
        // age++;
        // console.log(typeof age);
        // console.log("Happy Birthday you are ", age, " years old.");


// const = a variable that can't be changed.
//make all const as capital letters eg:"PI".


// Math functions 

// let x ;
// let y = 5;
// let z = 9;
// let maximum;
// let minimum;
// x = Math.round(x);
// x = Math.floor(x);
// x = Math.ceil(x);
// x = Math.pow(x, 2);
// x = Math.sqrt(x);
// x = Math.abs(x);
// maximum = Math.max(x,y,z);
// console.log(maximum);
// minimum = Math.min(x,y,z);
// console.log(minimum);
// x = Math.PI;
// console.log(x);

// Hypotenuse calculator

//Simple Method 
    // let a ;
    // let b ;
    // let c ;

    // a = window.prompt("Enter the value of A ");
    // a = Number(a);
    // b = window.prompt("Enter the value of B ");
    // b = Number(b);

    // c =(Math.sqrt(Math.pow(a,2) + Math.pow(b,2)));

    // console.log("the length of Hypotenuse is = " + c);


//using HTML

// HTML CODE 

// <label type="text" id="alable">Enter the value of A:</lable><br>
//     <input type="text" id="aval"></input><br><br>
//     <label type="text" id="blable">Enter the value of B:</label><br>
//     <input type="text" id="bval"></input><br><br>

//     <button type="button" id="submitButton">Calculate</button><br><br>

//     <label type ="text" id="cval"> ⬆Please fill up the above details! </label>


// JS ⬇ 
// document.getElementById("submitButton").onclick  = function() {
//     a = document.getElementById("aval").value;
//     a = Number(a);
//     b = document.getElementById("bval").value ;
//     b = Number(b);

//     c =(Math.sqrt(Math.pow(a,2) + Math.pow(b,2)));

//     document.getElementById("cval").innerHTML = "Value of c is : " + c;
// }


// Coutner by using JS

/* <label id="count">0</label>
    <div id="butt">
        <button id="add">Add</button>
    <button id="reset">Reset</button>
    <button id="sub">Sub</button>
    </div> */



// let num = 0;

// document.getElementById("add").onclick = function() {

//     num++;
//     document.getElementById("count").innerHTML = num;
// }
// document.getElementById("reset").onclick = function() {

//     num=0;
//     document.getElementById("count").innerHTML = num;
// }
// document.getElementById("sub").onclick = function() {

//     num--;
//     document.getElementById("count").innerHTML = num;
// }

// Useful sting properties and methods

    // let userName = "Suraj Telrandhe";
    // let phoneNumber = "123-456-7890"

    // console.log(username.length);
    // console.log(username.charAt(6));
    // console.log(username.indexOf("r"));
    // console.log(username.lastIndexOf("r"));

    // userName = userName.toUpperCase(); 
    // console.log(userName);s
    // userName = userName.toLowerCase(); 
    // console.log(userName);

    // phoneNumber=phoneNumber.replaceAll("-","");

    // console.log(phoneNumber);


    //// Slice Function
    // slice () extracts a section of a string and returns it as  anew string , without modifying the original string.

    // let Name = "Suraj Telrandhe";
    // let FirstName = Name.slice(0,Name.indexOf(" "));
    // let LastName = Name.slice(Name.indexOf(" ") + 1);

    // console.log(FirstName);
    // console.log(LastName);

    //// Method chaining = calling one method after another in one continuous line of code.

    // let username = "suraj";

    // let letter = username.charAt(0).toUpperCase().trim() + username.slice(1);
    // console.log(letter);

    //// if statement = It is same as in CPP.

    //// JavaScript checked property
        //worked for checkBox and also for radio boxes.
    // Html code
    // <label for="myCheckBox">Show Suraj</label><br>
    // <input type="checkbox" id="myCheckBox"><br>
    // <button id="myButton">Submit</button>

    // document.getElementById("myButton").onclick = function() {

    //     const image = document.getElementById("myCheckBox");
        
    //     if(image.checked) {

    //         console.log("yes")

    //     }
    //     else{
    //         console.log("no");
    //     }
    // }
    //// Switch statements are same as in CPP

    //// = assignment operator
    //// == comparison operator (checks two values disregard of data type 3.14 == "3.14" is correct.)
    //// === strict equality operator (checks two values as well as data type 3.14 === "3.14" is incorrect.)

    //// While loop

    // let userName = "";

    // while(userName == "" || userName == null){
    //     userName = window.prompt("Enter your name");
    // }
    // console.log("Hello " + userName);

    ////Functions also work same as it does in CPP.

    // function myName(){
    //     console.log("Suraj Kishor Telrandhe");
    // }
    
    // myName();
    // myName();
    // myName();

    //// ternary operator = shortcut for an 'if/else statement'.
    // Takes 3 operands 
    // 1. a condition with ?
    // 2. expression if True :
    // 3. expression if False

    // condition ? exprIfTrue : exprIfFalse

    // let adult = checkAge(21);
    // console.log(adult);

    // function checkAge(age){
    //     return age >= 18 ? "Adult" : "Child";
    // }

    //// template literals = declared with (`)
    //                       instead of double or single quotes 
    //                       they allows embadded variable and expressions

    let userName = "Bro";
    let items = 3;
    let total = 75;

    //noobs be like ⬇
    // console.log("Hello ", userName);
    // console.log("You have ", items, " items in your cart.");
    // console.log("and your total is ", total);

    //by using  template literals
    // console.log(`hello ${userName}`);
    // console.log(`You have ${items} items in your cart.`);
    // console.log(`and your total is ${total}`);

// we can also do 

// let text = 
// `hello ${userName} <br>
// You have ${items} items in your cart.<br>
// and your total is ${total}<br>`;
// // console.log(text)

// <label id="textLable"></label>

// document.getElementById("textLable").innerHTML = text; 
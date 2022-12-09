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
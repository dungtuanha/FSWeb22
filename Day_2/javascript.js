// console.log("Hello world");

// const a = 10;

// console.log(a);

// // a = "Hello";

// let b = 10;
// var c = 15;

// console.log(b);

// b = true;

// console.log(b);

// const obj = {
//     b: 100,
//     c: "Hello World"
// };

// console.log(obj.b);
// console.log(obj["c"]);

// obj.d = true;
// obj["e"] = 1000;
// obj.b = {
//     a: 1000
// };

// obj.b = 500;
// delete obj.c;

// console.log(obj);

// const arr = [213, "Hello", true]

// arr.push("100")

// console.log(arr.length);
// const number = 10.101101012313;

// console.log(number.toFixed(2));

// const str = "adjadjadjdaudjausjd";
// str.toLocaleLowerCase();
// str.toUpperCase();

// const now = new Date();
// console.log(now);
// console.log(now.getDate());
// console.log(now.getHours());

// console.log(/([A-Z])\w+/.test("AHSAYS"));

// err = new Error("This is an err");
// throw err;

// var a = 100;

// function aFunc() {
//     var b = 50; //var chỉ dùng giá trị ở trong function.
//     console.log(a);
//     console.log(b);
// }

// aFunc();

// console.log(a);
// console.log(b);

// setTimeout(function(){
//     console.log("1s");
//     } ,1000);

// setInterval(function(){
//     console.log("1s");
//     } ,1000)


// function Countdown(count) {
//     for (let i = count; i >=0; i--){
//         setTimeout(function(){
//             console.log(i);
//         }, 1000*(count - i));
//     }
// };

// Countdown(5);

// console.log("hello");

// setTimeout(function(){
//     console.log('1s');
// }, 1000)

// console.log("end");

// function print(message){
//     console.log(message);
// }

// print("hello");

// const printClone = print;

// printClone("world")

// function print(message, time){
//     setTimeout(function(){
//         console.log(message);
//         if(cb) cb();
//     }, time)
// }

// print("World", 2000, function(){
//     print("Hello", 1500);
// });

testLengthArray = new Array(1, 2, 4);
var i = 0;
 while(i < testLengthArray.length){
    var input = new Array(testLengthArray[i]);
    for(var j = 0; j < input.length; j++){
        input[j] = Math.floor(Math.random() * (10000 + 10000) + 1) -10000;
    }
    i = i + 1;
    console.log(input);
    console.log(testLengthArray);
}

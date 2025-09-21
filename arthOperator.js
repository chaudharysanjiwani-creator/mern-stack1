let num1 = 30
let num2 = 40

let result = num1+num2;

console.log(result)

//subtraction

let sub1 = 50
let sub2 = 20

let subtract = sub1-sub2;
console.log(subtract)

//Multiplication

let mul1 = 6
let mul2 = 4

let multiply = mul1*mul2
console.log(multiply)

//Division

let div1 = 10
let div2 = 2

let division = div1/div2
console.log(division)

//Modulus

let mod1 = 7
let mod2 = 3

let modulus = mod1%mod2
console.log(modulus)

//Increment

let inc = 3
console.log("inc")
++inc
console.log(inc)

let incre = 4
console.log("incre")
++incre
console.log(incre)

//Decrement

let dre = 5
console.log("dre")
--dre
console.log(dre)


//Assignment operator

let assNum = 29
//assNum = assNum+20

assNum += 40

console.log(assNum)

let assSub = 40

assSub -= 20
console.log(assSub)

let assMul = 5

assMul *= 5
console.log(assMul)

let assDiv = 10
assDiv /= 2
console.log(assDiv)

let assMod = 7
assMod %= 3
console.log(assMod)



//Logical operator

let val1 = true
let val2 = false

console.log(val1 && val2)

let value1 = 1
let value2 = 0

console.log(value1 && value2)

let sum1 = true
let sum2 = false

console.log(!sum1 || sum2)

let object1 = !false
let object2 = !false

console.log(object1 && object2)

let isAdmin = true;

if(isAdmin){
  console.log("Welcome to Admin page")
} else {
  console.log("Go back")
}


const isEmployee = false;

if(isEmployee){
  console.log("Welcome to the employee page")
} else{
  console.log("you'are not welcomed")
}

const marks = 90;

if(marks > 90 && marks < 100){
  console.log("Congratulations you got A+")
} else if( marks >= 80 && marks <= 90){
  console.log("Congratulations you got A")
} else if(marks >= 70 && marks <= 80){
  console.log("Congratulations you got B+")
} else if(marks >= 60 && marks <= 70){
  console.log("Congratulations you got B")
} else if(marks >= 50 && marks <= 60) {
  console.log("Congratulations you got C+")
} else{
  console.log("you are failed")
}

// const age = 21;

// if(age >= 80 && age <= 90){
//   console.log("You are too old to participate")
// } else if(age >=70 && age <=80){
//   console.log("You are old ")
// } else (age >= 30 && age <70){
//   console.log("You are ready to participae")
// }







  //ternqary operator

  let mark = 60

  marks>40?console.log("You are pass"):console.log("You are Fail")



  //for loop

  for(let i=0; i<10; i++){
    console.log(i * 4)
  }

  let Arr = [1, 2, 3 , 4, 5]

  for(let x of Arr){
    console.log(x)
  }


  let helloArray = [1, 2, 3, 4, 5, 6]
   let sum = 1;

   for (let x of helloArray){
       

    sum = sum * x

   }
   console.log(sum)


   let ArrString = "hello world"

   for(let x of ArrString){
    console.log(x + " sanjiwani")
   }


   const objArr = {
    name:"sanjiwani",
    department:"DIT",
    age:20
   }

   for(let x in objArr){
    console.log(" my "+x+  "is " +objArr[x])
   }

   const objArray = {
    fname:"Sangam puri",
    Depart: "DIT",
    age: 20
   }

   for(let x in objArray){
    console.log(" my "+x+ " is " + objArr[x])
   }
   //javaScript while loop 
   let i = 0;
   while (i < 5) {
       console.log("Hello World");
       i++;
   }
// // const a=["venkat","raji"];

// const { match } = require("assert");
// const { error, log } = require("console");
// const { sep } = require("path");
// const { Script } = require("vm");
// const { stream } = require("xlsx");


// // a.unshift("Arya")
// // console.log(a)
// // 
// // var a="venkat"
// // var a= 100
// // var c;
// // console.log(c)


// // var a= "venkata reddy"
// // var b="reddy"
// // console.log(a.includes(b))


// // let a= "venkata reddy"

// // console.log(a.charAt(0).toUpperCase()+a.slice(1))


// // var a= "v r"

// // var b=a.search("r")

// // console.log(b)


// // var a= "this is java script"

// // console.log(a.replace(/w\S*/g,+a.charAt(0).toUpperCase()+a.substring(1).toLowerCase()))



// // var a= "venkat"

// // let b= "reddy"
// // var a= "hi"

// // console.log(a)


// // let a= [1,2,3]

// // let b=[5,6,7]

// // let c=[...a,...b]

// // console.log(c)


// // var a="hi"
// // var b="Hi"

// // if(a==b.toLowerCase())
// // {
// //     console.log("both are same")
// // }
// // else{
// //     console.log("not same")
// // }


// // let a= 10+20+"Hi"

// // console.log(a)


// // let a= [10,20,30]


// // console.log(a)

// // console.log(typeof(a))


// // let a = [1, 2, 3]

// // let b = ["venakt", "reddy"]


// // console.log(a.length)

// // console.log(b.length)


// // console.log(false==0)


// // console.log(false==="0")


// // let d= ["a","b","c"]

// // delete d[2]

// // console.log(d.length)


// // let a1= `this is java 


// // script`


// // let b1= ["hi","how","are","u","hi"]

// // const unique=[...new Set(b1)];

// // console.log(unique)


// // let a1= [1,2,3,4,5,6,2,3,4]




// // let du=a1.filter((ele,index,arr) => arr.indexOf(ele)!==index)


// // console.log(du)



// // count duplicate words or chars
// //const months= ["jan","Feb","mar","apr","may","june","jan","mar"];

// //const months= ["a","b","c","d","e","f","g","a"];
// // const months= [1,2,3,5,6,7,1,0];

// // const dup = months.reduce((Obj, month) => {
// //     if(Obj[month]==undefined)
// //     {

// //         Obj[month]=1
// //         return Obj
// //     }
// //     else{

// //         Obj[month]=Obj[month]+1
// //         return Obj;
// //     }

// // },{});

// // console.log(dup)



// // let n= 10

// // console.log(isNaN(n))


// // let arr=[1,2,8,10,11,3,1,0]

// //    const so= arr.sort((a,b) =>{

// //         return a-b
// //     })
// // console.log(so)


// // const months= ["jan","Feb","mar","apr","may","june","jan","mar"];


// // console.log(months.sort())


// // let ar=[10,19,1,2,3,4,5,6,1,2]

// // const un=ar.filter((ele,index,arr) => arr.indexOf(ele)==index) 
// // un.sort((a,b) =>{
// //     return a-b

// // })


// // console.log(un)

// // let ar=[10,19,1,2,3,4,5,6,1,2,0]

// // function findmax(arr) {

// //     return arr.reduce(function(prev,curr) {


// //         return prev < curr ? prev: curr
// //     })

// // }


// // console.log(findmax(ar))


// // let a1= 100
// // let b1=0

// // console.log(a1%b1)

// // try {

// // let user;
// // console.log(user.firstNmae)
// // }


// // try {
// // let arr=[43,3,,5,7]


// // console.log(arr[9].toString())

// // }

// // catch(error)
// // {
// //     console.log(error.message)
// // }


// // console.log("contunue")


// // let age=14;

// // if(age < 18){


// //     throw new Error ("age is not lessthan 18")
// // }

// // console.log("Eligible")



// // const ids=[1,2,3,4,5]

// // const total=ids.reduce((a,b)=> a+b,0)


// // console.log(total)

// // const len= ids.length;


// // console.log(total / len)



// const days = ["monday", "tuesday", "wednesday", "thursday"]

//     //const days= "this is venkat"

//     // let udatedate=[]
//     // for(let day of days)
//     // {

//     //     day=day.charAt(0).toUpperCase()+day.substring(1)
//     // //udatedate.push(day)
//     //    console.log(day)
//     // }

//     //console.log(udatedate)


//     //  let ids=[1,2,3,4,5,7,9,0]

//     //  function minval(arr)
//     //  {
//     //     return arr.reduce(function(p,v){

//     //         return(p<v? p: v)
//     //     })
//     //  }

//     //  console.log(minval(ids))



//     // const str=["welcome","to","java","script"]
//     // const j=str.join(" ")

//     // console.log(j)


//     // let c=[1,2,3,4,5]
//     // let d=[5,6,,7]

//     // const re= c.some(ele => d.includes(ele))

//     // console.log(re)


//     // const string1 = "Mary"

//     // const string2 = "Mari"

//     // function check(string1, string2) {

//     //     var a = string1.toLowerCase()
//     //     var b = string2.toLowerCase()
//     //     a = a.split("").sort().join("")
//     //     b = b.split("").sort().join("")

//     //     return a == b
//     // }


//     //console.log(string1, string2)


//     // const input= {

//     //     "students": [
//     //         {
//     //             name: "venkat",
//     //             Gender: "M"
//     //         },

//     //          {
//     //             name: "A",
//     //             Gender: "M"
//     //         },
//     //          {
//     //             name: "B",
//     //             Gender: "F"
//     //         }
//     //     ]
//     // }

//     // const r=input.students.map(function(item){

//     //     return item.name
//     // })

//     // console.log(r)


//     // const arr=[1,2,3]
//     // console.log(Array.isArray(arr))


//     // const str= "welcome to javascript"

//     // function reve(sampleinput,sep){

//     //     return sampleinput.split(sep).reverse().join(sep)
//     // }

//     // var re=reve(str,"")

//     // console.log(re)


//     // let arr= [1,2,3,4]

//     // //arr=[]

//     // //arr.length=0

//     // while(arr.length > 0)
//     // {
//     //     arr.pop()
//     // }
//     // console.log(arr)
//     // console.log(arr.length)



//     // function palindrun(str){

//     //     str=str.replace(/\W/g,'').toLowerCase()
//     //     return (str ==str.split('').reverse().join(''));

//     // }


//     // console.log(palindrun("Madam"))


//     //let a1= ["a","b","c"]


//     // let a1= ["welcome","to","js"]

//     // const b1=a1.slice().reverse();


//     // console.log(b1)



//     // const iv=[10,20,30,40]


//     // const ele=3;
//     // const insertAt=2

//     // const re=[...iv.slice(0,insertAt), ele, ...iv.slice(insertAt)]
//     // console.log(re)


//     // const iv=[1,2,3,4]


//     // const tosdelete=2

//     // const res= iv.filter(item => item !== tosdelete)

//     // console.log(res)


//     // let s= "welcome to js"

//     // const s1= s.split(" ").reverse()
//     // console.log(s1)



//     // for(let i=0;i<5;i++)
//     // {
//     //     console.log(i)
//     // }



//     // function strRev(str)
//     // {

//     //     const arr= str.split('')

//     //     arr.reverse();
//     //     return arr.join('')
//     // }


//     // let str= strRev("venkat reddy")
//     // console.log(str)


//     // function strrev(str)
//     // {
//     //     let revstr='';

//     //     for(let chat of str)
//     //     {
//     //        revstr=chat + revstr ;


//     //     }


//     // return revstr;
//     // }


//     // let str= strrev("venkat")
//     // console.log(str)


//     // function palindruom(str)
//     // {

//     //     let rev= '';

//     //     for(let char of str)
//     //     {

//     //         rev=rev+char;

//     //     }

//     //     if(str === rev)
//     //     {
//     //         return true
//     //     }
//     //     else
//     // {
//     //     return false
//     // }
//     // }


//     // let revstr=palindruom("aba")
//     // console.log(revstr)



//     // function numRev(num)
//     // {

//     //     let rev=num.toString().split("").reverse().join('');

//     //     console.log(rev)
//     //     console.log(parseInt(rev)*Math.sign(num))

//     // }

//     // numRev(-520)


//     // const str="venakta reddy"

//     // const chars={}


//     // for(let c of str)
//     // {
//     //     if(!chars[c])
//     //     {

//     //         chars[c]=1
//     //     }
//     //     else{
//     //         chars[c]++
//     //     }
//     // }


//     // console.log(chars)




//     // const str="Hi@#Everyone @#$%!!123"


//     // console.log((str.replace(/[^\W]/g,'')).toLowercse())




//     // const arr= [1,2,3,4,5,4,3]


//     // let newArr= []


//     // newArr=new Set(arr)

//     // console.log([...newArr])


//     // const arr= [1,2,3,4,56,1,2,56]

//     // const dup=arr.filter((ele,index,arr)=> arr.indexOf(ele)!= index)


//     // console.log(dup)
//     // console.log(arr)


//     // const arr= [1,2,3,4,5]

//     // const re=arr.filter((item) =>{
//     // return item % 2==!0

//     // })


//     // console.log(re)

//     // function sum(num)
//     // {

//     //     return num.reduce(Prev,cur)

//     //     return Prev +cur
//     // }

//     // const arr= [1,2,3,4,5]

//     // console.log(sum(arr))


//     // const arrNum= [1,2,3,4]

//     // const sumofnum= (arr) =>
//     // {
//     //     return arr.reduce((a,b) =>{
//     //         return a +b

//     //     })

//     // }


//     // console.log(sumofnum(arrNum))



// //     < Script >
// // const inputnum = prompt("please ente a number")
// // const fact = 1

// // if (input < 0)
// //     [
// //         console.log(`factorial of ${input} is not possible`)
// //     ]
// // else {
// //     for (let i = 1; i <= input; i++) {
// //         fact = fact * i
// //     }

// //     console.log(`factorail of ${input} is ${fact}`)
// // }

// // </Script >


// // fact=1

// // for(let i=1;i<5;i++)
// // {

// //     fact=fact*i
// // }

// // console.log(fact)

// // let number=17

// // for(let i=2;i<=number;i++)
// // {

// //     if(number % i == 0)
// //     {

// //         var result= `${number} is prime number`
// //     }

// //     else{
// //         var result=`${number} is not prime number`
// //     }
// // }


// // console.log(result)


// // let a1 =20;
// // let b1=30
// // let temp =a1
// // a1=b1
// // b1=temp
// // console,log(a1)


// // console.log(b1)


// // let d=20

// // let e=30

// // d=a+b
// // e=a-b
// // d=a+b

// // console.log(`value of a is  ${d} and value of b is ${e}`)


// // let a= [1,2,3,4]

// // let b= [5,6,7]

// // //let res=a.concat(b)

// // let res=[...a,...b]
// // console.log(res)



// // let a= [2,4,3,7,9,8]

// // const re=a.sort(function(a,b) {



// //     return a-b
// // })

// // console.log(re)


// // let a= [1,2,3,4,5,5,4]

// // let b= [3,4,5]

// // // let re= a.length === b.length

// // // console.log(re)

// // let res=a.filter((ele) =>{


// //     return b.includes(ele)
// // })


// // console.log([...new Set(res)])


// // let res= [...a,...b]

// // console.log([...new Set(res)])


// // var a=0;
// // var b=1

// // for(let i=0;i<=15;i++)
// // {

// // var temp=a+b
// // a=b
// // b=temp
// // console.log(temp)

// // }


// // for(let i=1 ; i <=6;i++)
// // {

// //     for(let j=1;j <=i;j++)
// //     {

// //         console.log("*")
// //     }

// //     console.log("")
// // }




// // const table=(number) => {

// // for(let i=1;i<=10;i++)
// // {

// //     var res=i*number

// //     console.log(`${number} * ${i}=${res}`)
// // }

// // }

// // table(4)





// // console.log("venkat")

// // console.log("Arya")

// // //calculate()

// // setTimeout(() => {
// //     calculate()
// // }, 5000);

// // console.log("Avinash")


// // function calculate()
// // {

// //     let sum=0

// //     for(let i=1;i<=5;i++)
// //     {
// //         sum=sum+i
// //     }

// //     console.log(sum)
// // }






// // setTimeout(() => {
// //     console.log("hi")
// // }, 10000);

// // console.log("Avinash")



// //console.log(a)

// //var a=5


// // var a=5
// // var b='5'

// // console.log(a===b)

// // console.log(typeof b)

// // let a=null
// // console.log(a)


// // var a1= 31

// // var b= "3"
// // console.log(a1==b)

// // const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // for (let i = 0; i < 10; i++) {
// //   setTimeout(() => console.log(b[i]), 1000);
// // }


// // const arr = [1, 2];
// // arr[5] = 99;
// // console.log(arr.length);

// // let x = 0;
// // console.log(x++);
// // console.log(++x);


// // console.log([] + []);

// // let a= 10
// //  a=20


// // // var a=20
// // // var a=30

// // console.log(a)

// //let text = 'We are the so-called \"Vikings\" from the north'



// // let text = "The character \\ is called backslash.";
// // console.log(text)


// // const cars = [];
// // cars[0] = "Opel";
// // cars[1]= "Volvo";
// // cars[2]= "BMW";


// // // const cars= new Array("a","B","C")

// // console.log(cars[0])

// // const fruits = ["Banana", "Orange", "Apple", "Mango"];

// // console.log(fruits)


// // const person = {firstName:"John", lastName:"Doe", age:46};

// // console.log(person.age)

// // const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // let fruit = fruits[fruits.length - 1];


// // console.log(fruit)

// // const fruits = ["Banana", "Orange", "Apple"];
// // fruits.push("Lemon");


// // console.log(fruits)

// // const fruits = ["Banana", "Orange", "Apple"];
// // fruits[fruits.length] = "Lemon"; 


// // const fruits = ["Banana", "Orange", "Apple"];
// // fruits[6] = "Lemon";
// // console.log(fruits)

// // const points = new Array(40);  

// // console.log(points)


// // const fruits = ["Banana", "Orange", "Apple", "Mango"];

// // fruits.length = 2;


// // console.log(fruits)


// // const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // let fruit = fruits.at(2);
// // console.log(fruits[2])


// // const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // fruits.pop();


// // const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // let length = fruits.push("Kiwi");


// // console.log(length)


// // const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // delete fruits[0];


// // console.log(fruits)


// // const myGirls = ["Cecilie", "Lone"];
// // const myBoys = ["Emil", "Tobias", "Linus"];

// // const myChildren = myGirls.concat(myBoys);


// // console.log(myChildren)

// // const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // fruits.splice(2, 2,"Lemon", "Kiwi");



// // console.log(fruits)


// // const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // fruits.splice(0, 1);


// // console.log(fruits)
// // const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// // const citrus = fruits.slice(1);


// // const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// // const citrus = fruits.slice(1, 2);


// // console.log(citrus)
// // const fruits = ["Apple", "Orange", "Apple", "Mango"];
// // let position = fruits.lastIndexOf("Apple") ;

// // console.log(position)


// //const points = [40, 100, 1, 5, 25, 10];
// // points.sort(function(a, b)



// // {
// //     return a - b}


// // );
// // console.log(points)


// // points.sort(function(a,b)

// // {
// // return a-b

// // })

// // console.log(points)


// // const points = [40, 100, 1, 5, 25, 10];
// // points.sort(function()

// // {
// //     return 0.5 - Math.random()});

// //     console.log(points)

// // const points = [40, 100, 1, 5, 25, 10];
// // points.sort(function(a, b)
// // {
// //     return a - b

// // });


// // console.log(points)


 //console.log("hi")

 // You can create a constant array:
// const cars = ["Saab", "Volvo", "BMW"];

// //You can change an element:
// cars[0] = "Toyota";

// // You can add an element:
// cars.push("Audi");


// const cars;
// cars = ["Saab", "Volvo", "BMW"];
//var cars = ["Saab", "Volvo", "BMW"];
// // Here cars[0] is "Saab"
// {
//   var cars = ["Toyota", "Volvo", "BMW"];
//   // Here cars[0] is "Toyota"
// }



// const cars = ["Volvo2", "BMW"];   // Allowed
// {
//   const cars = ["Volvo", "BMW"]; // Allowed
// }
// {
//   const cars = ["Volvo1", "BMW"]; // Allowed
// }

// console.log(cars)



// //const d = new Date();
// const d = new Date("2022-03-25");
// console.log(d)

// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// const d = new Date();
// let month = months[d.getMonth()];


// console.log(month)


let a=Math.random(1,4);

console.log(a)
//Q1
function fullname(fn,ln){
  console.log(fn+" "+ln) 
}
fullname('Nitharsana','Vigneswaran')

//Q2
console.log("There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")

//Q3
console.log("1 1 1 1 1 \n 2 1 2 4 8 \n 3 1 3 9 27 \n 4 1 4 16 645\n  1 5 25 125")

//Q4

function word() {
    let para = "There is a commonly stated “rule” of grammar that beginning a sentence with and, or any other conjunction, is a mistake. But this is just not true. This supposed “rule” has no basis in actual writing, and even formal writing features plenty of sentences that start with and and other conjunctions. And we think that is really cool."
    console.log(
        (para.match(/and/g)).length);
}
word()

//Q5
const d = new Date();
let year = d.getFullYear();
console.log(year)

let month=d.getMonth()+1;
console.log(month);

const d1 =new Date();
console.log(d1);

let day =  d.getDate();
console.log(day)

//Q6
function straightline(m,c){
  const slope=m;
  const yIntercept =c;
  const xIntercept =c/m;

  return `slope: ${slope},\n y-Intercept:${yIntercept},\n x-Intercept:${xIntercept}`;
}
console.log(straightline(2,-2));

//Q7
function calculatelope(x1,y1,x2,y2){
  const slope1=(y2-y1)/(x2-x1);
  return `slope:${slope1}`
}
console.log(calculatelope(2,2,6,10));

//Q8
const hours =prompt("Enter hours:");
const rateperhours =prompt("Enter Rate per hour:");
const weeklyearnings = hours*rateperhours;
alert (`Your weekly earning is ${weeklyearnings}`);

//Q9
const currentyear=new Date().getFullYear();
const birthyear= prompt ("Enter your birth year:");
const age=currentyear-birthyear;

if (age>=18){alert(`you are:${age}. you are old enough to drive.`)
}else{
  const wait =18-age;
  alert(`you are:${age}. you will be allowed to drive after${wait} years.`);
}

//Q10
const numbers=[1,2,3,4,5,6,7];
const evenNumber=numbers.filter(number => number%2===0);
console.log("Even Number:",evenNumber);

//Q11
const numbers1=[1,2,3,4,5];
const squarenumber=numbers1.map(number=> number*number
);
console.log("Square number:",squarenumber);

//Q12
const books = [ 
  {
   title: "To Kill a Mockingbird",
   author: "Harper Lee", 
   genre: "Fiction",
   pages: 336, 
   publication_year: 1925, 
  }, 
  { 
  title: "1984", 
  author: "George Orwell",
  genre: "Dystopian",
  pages: 328, 
  publication_year: 1949,
  
 }, 
 {
  title: "Pride and Prejudice", 
  author: "Jane Austen",
  genre: "Romance",
  pages: 432, 
  publication_year: 1813,
  }, 
 {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald", 
  genre: "Classic", 
  pages: 180,
  publication_year: 1925,
 },
 ];
 console.log(books);
 
 //map1

const titles = books.map((books)=>{
  return books.title;
});
 console.log(titles)
 
//map2
const authors = books.map((books)=>{
  return books.author;
});
 console.log(authors)

 //map3
 const ta = books.map((books)=>{
  return books.title + " , "+books.author
  
});
 console.log(ta);

 //filter1
 const filterbypage= books.filter((books)=>{return books.pages>100}, {})
 console.log(filterbypage)

 //filter2
 const filterbypage1= books.filter((books)=>{return books.pages<200}, {})
 console.log(filterbypage1)

 //filter3
 const filtergenre= books.filter((books)=>{return books.genre==="Fiction"}, {})
 console.log(filtergenre)

 //filter4
 const filtergenre1= books.filter((books)=>{return books.genre==="Romance"}, {})
 console.log(filtergenre1)

 //reduce1
 const totalpage=books.reduce((sum,books)=>{
  return sum+parseInt(books.pages)
 },0)
 console.log("Total Number of page is",totalpage)

 //reduce2
 const totalbookbypubyear=books.reduce((result,books)=>{
  if(typeof result[books.publication_year]==="undefined"){
    result[books.publication_year]=1;
  }else{
    result[books.publication_year]+=1;
  }
  return result;
 }, {});
 console.log(totalbookbypubyear);

 //reduce3
 const totalbookbytitle=books.reduce((result1,books)=>{
  if(typeof result1[books.title]==="undefined"){
    result1[books.title]=1;
  }else{
    result1[books.title]+=1;
  }
  return result1;
 }, {});
 console.log(totalbookbytitle);


 //reduce4
 const totalbookbygenre=books.reduce((result2,books)=>{
  if(typeof result2[books.genre]==="undefined"){
    result2[books.genre]=1;
  }else{
    result2[books.genre]+=1;
  }
  return result2;
 }, {});
 console.log(totalbookbygenre);

 //Q13
 const greets = name => {
  return `Welcome ${name} to the team.`;
};

console.log(greets('Ran'));  
console.log(greets('Sara')); 

//Q14
const litres = time => {
  return Math.floor(time * 0.5);
};

console.log(litres(0));   
console.log(litres(2));  
console.log(litres(1.4));

//Q15
const positiveSum = arr => {
  return arr.filter(num => num > 0).reduce((sum, num) => sum + num, 0);
};

console.log(positiveSum([1, 2, 3, 4, 5]));      
console.log(positiveSum([1, -2, 3, 4, 5]));     
console.log(positiveSum([-1, 2, 3, 4, -5]));    
console.log(positiveSum([-1, -2, -3, -4, -5])); 
console.log(positiveSum([]));  

//Q16
function BMI(weight,height){
  console.log(weight/(height*height))
}
BMI(40,1.4)
if(BMI<18.5){
  console.log("It's a under weight")
}
else if(18.5<BMI<24.9){
  console.log("It's a Normal weight")
}
else if (25<BMI<29.9){
  console.log("It's a over weight")
}
else{
  console.log("Obese")
}

//PART2

//q1

let no11=1;
(no11>0)? console.log("It's a Positive Number"):console.log("It's a Negative Number")

//q2
let EvenOdd=4;
(EvenOdd%2==0)?console.log("Even Number"):console.log("Odd Number")

//q3
let x=5;
let y=10;
(x>y)?console.log("True"):console.log("Faluse");

//q4
let age1=26
if(age1<12){
  console.log("Ticket price is Rs5.00")
}
else if(12<age1<18){
  console.log("Ticket price is Rs10.00")
}
else if(18<age1<60){
  console.log("Ticket price is Rs20.00")
}
else{
  console.log("Ticket price is Rs15.00")
}

//q5
let leapyear=2000;
(leapyear%4==0)?console.log("It's a Leapyear"):console.log("It's not a leapyear");

//q6
let priced=150
if(priced=>100){
  console.log("Discount is 20.00")
}
else if(priced=>50){
  console.log("Discount is 10.00")
}
else{
  console.log("No Discount")
}

//q7
  let currentHour = 10;
  if (currentHour >= 5 && currentHour < 12) {
      console.log("Good morning");
  } else if (currentHour >= 12 && currentHour < 18) {
      console.log("Good afternoon");
  } else {
      console.log ("Good evening");
  }
  
//q8
let secretNumber=27
let userGuess=28

if (userGuess === secretNumber) {
  console.log ("Congratulations! You guessed the correct number!");
} 
else if (userGuess > secretNumber) {
  console.log  ("Your guess is too high. Try again!");
} 
else if (userGuess < secretNumber) {
  console.log  ("Your guess is too low. Try again!");
} 
else {
  console.log  ("Please enter a valid number.");
}

//PART3
//q1
for (let i = 0; i <= 5; i++) {
  console.log(i);
}

//q2
let sum = 0;
            for (let i = 0; i <= 99; i++) {
                sum += i;
            }
            console.log("The sum of numbers from 0 to 99 is: " + sum);

            //q3
            let sum1 = 0;
            for (let i = 10; i <= 100; i += 2) {
                sum1 += i;
            }
            console.log("The sum of even numbers from 10 to 100 is: " + sum1);

            //q4
            let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];

            for (let i = arr.length - 1; i >= 0; i--) 
                console.log(arr[i]);

            //q5
            let arr1=[4,6,7];
            let arr2=[8,1,9];
            sumArray=[];
            for (let i = 0; i < arr1.length; i++) {
              sumArray.push(arr1[i] + arr2[i]);
          }

          console.log(sumArray);
        
          //q6
          let str1 = "javascript";
            let result = "";

            for (let i = 0; i < str1.length; i++) {
                if ((i + 1) % 2 == 0) {
                    result += "Z";
                } else {
                    result += str1[i];
                }
            }
            console.log(result);

            //q7
            let arr3=[3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2];
            let arr4=[9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];

            let sum3 = arr3.reduce((acc, curr) => acc + curr, 0);
let sum4 = arr4.reduce((acc, curr) => acc + curr, 0);

let totalSum = sum3+ sum4;
console.log(totalSum);


        

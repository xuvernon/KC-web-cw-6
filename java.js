alert('hello!! welcome to my website, I will help you count your grade')

let grade = prompt('enter your grade in numbers')

console.log(grade)

if(grade <=100 && grade >=90 ){
   console.log(" %cyou got an A+🥳", 'color: pink;  font-size: 30px')
} 
else if( grade >= 80 && grade < 90 ){
    console.log(" %cyou got a B+ 🤩" ,'color: green; font-size: 30px')
}
else if( grade >= 70 && grade < 80){
    console.log(" %cyou got a C+ 🙂",'color: blue; font-size: 30px')
}
else if( grade >= 60 && grade < 70){
    console.log('%cyou got a D+ 😕', 'color: yellow ;font-size: 30px')
}
else if( grade >= 50 && grade < 60 ){
    console.log
    ('%cyou got a F 💔', 'color: red; font-size: 30px');
        
}
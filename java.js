alert('hello!! welcome to my website, I will help you count your grade')

let grade = prompt('enter your grade in numbers')

console.log(grade)

if(grade <=100 && grade>=90 ){
    alert("you got an A+🥳")
} 
else if( grade >= 80 && grade < 90 ){
    alert("you got a B+ 🤩")
}
else if( grade >= 70 && grade < 80){
    alert("you got a C+ 🙂")
}
else if( grade >= 60 && grade < 70){
    alert(' you got a D+ 😕')
}
else if( grade >= 50 && grade < 60 ){
    alert('you got a F 💔')
}
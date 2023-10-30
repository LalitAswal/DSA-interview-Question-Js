// Reverse words in a given string
// Input: s = “geeks quiz practice code” 
// Output: s = “code practice quiz geeks”

// Input: s = “i love programming very much” 
// Output: s = “much very programming love i” 


const reverseString = (s)=>{
    const stringInArray = s.split(' ');
    const reverseArray =[];
    for(let i =stringInArray.length; i>=0; i--){
        reverseArray.push(stringInArray[i])
        // console.log(stringInArray(i))
    }
    return reverseArray.join(' ')

}

let s ='geeks quiz practice code'
// console.log(s.split(' ').)

console.log(reverseString(s))
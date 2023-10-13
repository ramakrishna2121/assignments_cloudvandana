function reverseWords(str) 
{
    let reverseWordArr = str.split(" ").map(word => word.split("").reverse().join(""));
    return reverseWordArr.join(" ");
}
const str = 'Myself Ramakrishna Satti';
console.log(reverseWords(str));
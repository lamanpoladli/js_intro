let num = 21;
if (num % 7 === 0) {
    console.log("7'ye bolunur");
} 
else if (num % 7 <4){
    console.log(num-(num%7));
}
else if (num % 7 >=4){
    console.log(num+(7-num%7));
}

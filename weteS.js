// Palindron

function PaInput(){
    var iPaJ = document.getElementById("iPa").value;
    if(iPaJ == ""){
        document.getElementById("oPa").innerHTML = "It is empty.";
    }
    else{
        if(PaCheck(iPaJ)){
            document.getElementById("oPa").innerHTML = "It is a palindrome.";
        }
        else{
            document.getElementById("oPa").innerHTML = "It is NOT a palindrome";
        }
    }
    

}


function PaCheck(str){
    str = str.toUpperCase()
    var len = str.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}


// Random Array
 
let rArr = [0, 1, 2, 3, 4, 5, 6, 7 , 8 ,9]

function randArr(){
    rArr= shuffle(rArr);
    document.getElementById("oRA").innerHTML = rArr;
}

function shuffle(array) {
    var currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  

// Array 

let arr = [1, 2, 'hello', { a: 'a', b: 1 }, true, [1, 2, 3, 4], false, 2]
document.getElementById("oA").innerHTML = arr;
function actionFilter(){

    document.getElementById("oFA").innerHTML = arr;

}

function filter(){

}
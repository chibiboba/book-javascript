function takeString (string){
    if (string.length > 10){
        return string.toUpperCase();
    } else {
        return string; 
    }
}

console.log(takeString('hello world'));
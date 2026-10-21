

for (let i = 1; i <= 5; i++){
    let star = "";
    for (let j = 0; j < 5 - i; j++){
        star += " ";
    }
    for (let k = 0; k < 2*i-1; k++){
        star += "*";
    }

    console.log(star)
}


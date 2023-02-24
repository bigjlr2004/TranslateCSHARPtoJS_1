// Put your code here

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const DiceString = (dieVal) => {
    let dieString = ""
    switch (dieVal) {
        case 1:
            dieString = "one";
            break;
        case 2:
            dieString = "two";
            break;
        case 3:
            dieString = "three";
            break;
        case 4:
            dieString = "four";
            break;
        case 5:
            dieString = "five";
            break;
        case 6:
            dieString = "six";
            break;
    }

    return dieString;

}

console.log("Let's roll some dice, baby!")
console.log("---------------------------")
for (i = 0; i < 10; i++) {
    const Die1 = getRandomInt(1, 6);
    const Die2 = getRandomInt(1, 6);
    const DiceTotal = Die1 + Die2;
    if (Die1 === Die2) {
        console.log(`${DiceString(Die1)} + ${DiceString(Die2)} == ${DiceTotal} DOUBLES LUCKY LUCKY LUCKY!!`)
    } else {

        console.log(`${DiceString(Die1)} + ${DiceString(Die2)} == ${DiceTotal}`)
    }


}
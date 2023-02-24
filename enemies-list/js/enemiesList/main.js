// Put your code here

const createEnemy = (firstName, lastName, offenses, isReallyHated) => {
    return {
        firstName: firstName,
        lastName: lastName,
        offenses: offenses,
        isReallyHated: isReallyHated
    };

};

const vader = createEnemy("Darth", "Vader", ["Cut off Luke's Hand", "Killed children", "Smelly Breath"], true);
const george = createEnemy("George", "Smith", ["Smart Alec", "Never Happy", "Doesn't get it."], false);
const betty = createEnemy("Betty", "RudeLady", ["Phone calls in the theater", "Phone calls on the bus", "Phone calls in line at the grocery store", "Poor conversationalist"], true);
const leon = createEnemy("Leon", "Beck", ["Giving meer a hotplate", "Lets go Brandon", "Only see the bad"], true);
const frenemies = [vader, george, betty, leon];
console.log(frenemies);
// const frenemies = [
//     { vader: createEnemy("Darth", "Vader", ["Cut off Luke's Hand", "Killed children", "Smelly Breath"], true) },
//     { george: createEnemy("George", "Smith", ["Smart Alec", "Never Happy", "Doesn't get it."], false) },
//     { betty: createEnemy("Betty", "RudeLady", ["Phone calls in the theater", "Phone calls on the bus", "Phone calls in line at the grocery store", "Poor conversationalist"], true) },
//     { leon: createEnemy("Leon", "Beck", ["Giving meer a hotplate", "Lets go Brandon", "Only see the bad"], true) }
// ]
// console.log(frenemies);

for (let frenemy of frenemies) {
    if (frenemy.isReallyHated) {
        console.log()
        console.log(`${frenemy.firstName} ${frenemy.lastName} REeally Really REally Deeslike!!!`);
    }
    else {
        console.log()
        console.log(`${frenemy.firstName} ${frenemy.lastName}`)
    }
};

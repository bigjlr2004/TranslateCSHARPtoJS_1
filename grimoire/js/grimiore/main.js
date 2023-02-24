// Put your code here

console.log("Do you believe in magic?");
console.log("------------------------");



const allSpells = [
    {
        Name: "Turn enemy into a newt",
        IsEvil: true,
        EnergyRequired: 5.1
    },
    {
        Name: "Conjure some gold for a local charity",
        IsEvil: false,
        EnergyRequired: 2.99
    },
    {
        Name: "Give a deaf person the ability to hear",
        IsEvil: false,
        EnergyRequired: 12.2
    },
    {
        Name: "Make yourself emperor of the universe",
        IsEvil: true,
        EnergyRequired: 100.0
    },
    {
        Name: "Convince your relatives your political views are correct",
        IsEvil: false,
        EnergyRequired: 2921.5
    }
]

const EvilBook = (allSpells) => {
    const EvilSpells = allSpells.filter((aSpell) => {
        return aSpell.IsEvil === true;
    })
    return EvilSpells
}

const GoodBook = (allSpells) => {
    const GoodSpells = allSpells.filter((aSpell) => {
        return aSpell.IsEvil !== true;
    })
    return GoodSpells
}

const GoodSpellBook = {
    title: "Good Spell Book",
    spells: GoodBook(allSpells)

}
const EvilSpellBook = {
    title: "Evil Spell Book",
    spells: EvilBook(allSpells)

}

const DisplayBook = (SpellBookObj) => {
    console.log(`${SpellBookObj.title}`);
    for (let spell of SpellBookObj.spells) {
        console.log(`${spell.Name}`)
    }

}

console.log("Evil Spells");
DisplayBook(EvilSpellBook);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("Good Spells");
DisplayBook(GoodSpellBook);

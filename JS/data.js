class Units {
    constructor(name, unitClass) {
        this.name = name
        this.class = unitClass
    };
};

class UnitClass {
    constructor(hp, att, skl, spd, lck, def, res, dmgType, name) {
        this.hp = hp
        this.att = att
        this.skl = skl
        this.spd = spd
        this.lck = lck 
        this.def = def
        this.res = res 

        this.dmgType = dmgType
        this.name = name
    };
};
//classes for units and unit classes. Unit's stats are entirely based on it's class.


const darkKnight =  new UnitClass(69, 52, 24, 39, 38, 30, 24, 'mag', `Dark Knight`);
const grandMaster = new UnitClass(58, 45, 37, 37, 45, 36, 23, `str`, `Grandmaster`)
const swordMaster = new UnitClass(57, 47, 32, 48, 36, 24, 7, `str`, `Swordmaster`);
const lord =        new UnitClass(64, 44, 39, 38, 41, 23, 22, `str`, `Lord`);
const general =     new UnitClass(73, 31, 22, 22, 34, 48, 2, `str`, `General`);
const cleric =      new UnitClass(79, 32, 27, 25, 41, 44, 29, `mag`, `Cleric`);
const knight =      new UnitClass(55, 42, 37, 30, 24, 35, 9, `str`, `Knight`);
const mage =        new UnitClass(57, 49, 31, 21, 35, 28, 25, `mag`, `Mage`);
const classList = [darkKnight, grandMaster, swordMaster, lord, general, cleric, knight, mage];


var leo = new Units(`Leo`, darkKnight);
var robin = new Units(`Robin`, grandMaster);
var mia = new Units(`Mia`, swordMaster);
var hector = new Units(`Hector`, lord);
var amelia = new Units(`Amelia`, general);
var lissa = new Units(`Lissa`, cleric);
var playerUnitList = [robin, hector, lissa];
var enemyUnitList = [leo, mia, amelia];

//here I define the classes and default units. 
//Names and stats, as well as the battle system are based on the Fire Emblem game series
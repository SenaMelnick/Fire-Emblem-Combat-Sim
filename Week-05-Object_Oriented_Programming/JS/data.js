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



const darkKnight = new UnitClass(39, 25, 17, 19, 19, 20, 24, 'mag', `Dark Knight`);
const grandMaster = new UnitClass(38, 20, 17, 17, 10, 16, 13, `str`, `Grandmaster`)
const swordMaster = new UnitClass(47, 27, 32, 38, 26, 24, 17, `str`, `Swordmaster`);
const lord = new UnitClass(44, 24, 19, 18, 11, 23, 12, `str`, `Lord`);
const general = new UnitClass(43, 20, 22, 22, 24, 18, 12, `str`, `General`);
const cleric = new UnitClass(39, 22, 17, 15, 20, 14, 20, `mag`, `Cleric`);
const knight = new UnitClass(45, 22, 17, 20, 14, 15, 10, `str`, `Knight`);
const mage = new UnitClass(37, 19, 21, 21, 15, 10, 15, `mag`, `Mage`);
const classList = [darkKnight, grandMaster, swordMaster, lord, general, cleric, knight, mage];


var leo = new Units(`Leo`, darkKnight);
var robin = new Units(`Robin`, grandMaster);
var mia = new Units(`Mia`, swordMaster);
var hector = new Units(`Hector`, lord);
var amelia = new Units(`Amelia`, general);
var lissa = new Units(`Lissa`, cleric);
var playerUnitList = [robin, hector, lissa];
var enemyUnitList = [leo, mia, amelia];
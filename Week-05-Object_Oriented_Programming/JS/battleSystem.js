const battlePrep = () => {
  let unit1 =
    playerUnitList[displayUnits(playerUnitList, `use in battle.`) - 1];
  let unit2 = enemyUnitList[displayUnits(enemyUnitList, `fight against.`) - 1];

  let firstUnit;
  let secondUnit;
  console.log(unit1.class.spd);
  if (unit1.class.spd > unit2.class.spd) {
    firstUnit = unit1;
    secondUnit = unit2;
  } else {
    firstUnit = unit2;
    secondUnit = unit1;
  }

  let battleOver = false;
  let dmgTotal1 = 0;
  let dmgTotal2 = 0;
  let roundDmg;
  while (battleOver === false) {
    roundDmg = 0
    roundDmg = battle(firstUnit, secondUnit);
    if (roundDmg === `Miss`) {

    } else {
    dmgTotal1 += roundDmg;
    }
    if (dmgTotal1 > secondUnit.class.hp) {
      alert(`${secondUnit.name} has been defeated!`);
      battleOver = true;
      break;
    }
    roundDmg = 0
    roundDmg = battle(secondUnit, firstUnit);
    if (roundDmg === `Miss`) {

    } else {
    dmgTotal2 += roundDmg;
    }
    if (dmgTotal2 > firstUnit.class.hp) {
      alert(`${firstUnit.name} has been defeated!`);
      battleOver = true;
      break;
    }
  }
};

const battle = (unit1, unit2) => {
  let hitRate =
    80 +
    unit1.class.skl * 2 +
    unit1.class.lck / 2 -
    (unit2.class.spd * 2 + unit2.class.lck);
  let critRate = unit1.class.skl / 2 + 10 - unit2.class.lck;
  if (hitRate > 100) {
    hitRate = 100;
  } else if (hitRate < 1) {
    hitRate = 0;
  }
  if (critRate > 100) {
    critRate = 100;
  } else if (critRate < 1) {
    critRate = 0;
  }
  let dmg;
  if ((unit1.class.dmgType = `mag`)) {
    dmg = unit1.class.att - unit2.class.res;
  } else {
    dmg = unit1.class.att - unit2.class.def;
  }
  if (dmg < 1) {
    dmg = 0;
  }

  if (Math.floor(Math.random() * 100 + 1) > hitRate) {
    alert(`${unit1.name} missed!`);
    return `Miss`
  } else {
    if (Math.floor(Math.random() * 100 + 1) < critRate) {
      alert(`${unit1.name} dealt a critital hit of ${dmg * 3}!!!`);
      return dmg * 3;
    } else {
      alert(`${unit1.name} dealt ${dmg} damage!`);
      return dmg;
    }
  }
};

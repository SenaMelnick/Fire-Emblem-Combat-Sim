const menuStart = () => {
  let stayInMenu = true;
  while (stayInMenu === true) {
    //this loop and others like it ensure the uesr stays in the menu unless they input 0 
    let input = prompt(
      ` 0) Exit
 1) Edit Player Team
 2) Edit Enemy Team
 3) Battle`
    );

    switch (input) {
      case `1`:
        unitMenu(playerUnitList);
        break;
      case `2`:
        unitMenu(enemyUnitList);
        break;
      case `3`:
        battlePrep();
        break;
      case `0`:
        stayInMenu = false;
        break;
      default:
        alert(`Invalid. Input must be between 0 and 3.`);
        break;
    }
  }
};

var unitNumber = 1;

const unitMenu = (list) => {
  let stayInMenu = true;
  while (stayInMenu === true) {
    let input = prompt(
      ` 0) Exit
 1) View Units
 2) Add Unit
 3) Delete Unit`
    );
    switch (input) {
      case `1`:
        {
          let input = displayUnits(list, `view`) - 1;
          let dmgMsg;
          let blankSpace = ``;
          let blankSkill = ``;
          if (list[input].class.dmgType === `mag`) {
            dmgMsg = `Magic:`;
            blankSpace = `    `;
            blankSkill = `        `;
          } else {
            dmgMsg = `Strength:`;
          }
          alert(
            `Name: ${list[input].name}     Class: ${list[input].class.name}
HP: ${list[input].class.hp}
${dmgMsg} ${list[input].class.att} ${blankSkill}   Skill: ${list[input].class.skl}
Speed: ${list[input].class.spd}    ${blankSpace}    Luck: ${list[input].class.lck}
Defense: ${list[input].class.def}  ${blankSpace}   Resistance: ${list[input].class.res}`
//this displays all a unit's stats, accounting for spacing
          );
        }
        break;
      case `2`:
        let unitName = prompt(`Input unit name.`);
        let classInput;
        do {
          classInput = prompt(
            ` Pick a class:
 1) Knight
 2) General
 3) Mage
 4) Cleric
 5) Lord
 6) Swordmaster
 7) Dark Knight
 8) Grandmaster`
          );
          if (classInput < 1 || classInput > 8) {
            alert(`Invalid. Input must be beteen 1 and 8.`);
          }
        } while (classInput < 1 || classInput > 8);
        let className;
        switch (classInput) {
          case `1`:
            className = knight;
            break;
          case `2`:
            className = general;
            break;
          case `3`:
            className = mage;
            break;
          case `4`:
            className = cleric;
            break;
          case `5`:
            className = lord;
            break;
          case `6`:
            className = swordMaster;
            break;
          case `7`:
            className = darkKnight;
            break;
          case `8`:
            className = grandMaster;
            break;
        }

        eval(`var newUnit${unitNumber} = new Units(unitName, className)`);
        eval(`list.push(newUnit${unitNumber})`);
        unitNumber += 1;
        //this ensures that every newly created unit will have a different variable names
        break;
      case `3`:
        {
          let input = displayUnits(list, `delete`) - 1;
          alert(`${list[input].name} has been deleted.`);
          list.splice([input], 1);
          //deletes the inputed unit
        }
        break;
      case `0`:
        stayInMenu = false;
        break;
      default:
        alert(`Invalid. Input must be between 0 and 3.`);
        break;
    }
  }
};

const displayUnits = (list, fun) => {
  while (1 === 1) {
    let index = 1;
    let msg = `Input a unit to ${fun}:`;
    for (val of list) {
      msg += `
${index}) ${val.name}`;
      index += 1;
    }
    let output = prompt(msg);
    if (output > 0 && output <= list.length) {
      return output;
    } else {
      alert(`Invalid. Input must be between 1 and ${list.length}`);
    }
  }
};
//this function displays a dynamic list of units and allows the unit to input thier choosen unit.
//this is called by case 1 and case 3 of the previous function

menuStart();

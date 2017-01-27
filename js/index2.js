
$(document).ready(function() {



// var player = {

//    basicattackcooldown:false,
//    iceboltcooldown:false,
//    fireboltcooldown:false,
//    stormboltcooldown:false,
//    shadowboltcooldown:false,
//    thornscooldown:false,
//    bloodstrikecooldown:false,
//    healcooldown:false,
//    shieldcooldown:false,
//    buffmagiccooldown:false,
//    naturehealcooldown:false,
//    manarestorecooldown:false,

//    icebuffcooldown: false,
//    firebuffcooldown: false,
//    stormbuffcooldown: false,
//    shadowbuffcooldown: false,
//    bloodsapcooldown: false,
//    healwingscooldown: false,
//    helmetcooldown: false,
//    attackbuffcooldown:false,
//    magebuffcooldown: false,
//    lotuscooldown: false,
//    magicattackcooldown: false,
//    defensehealcooldown: false,

//  }



var mouseX;
var mouseY;
$(document).mousemove(function(e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
});




// function playerattack(object){
// updatespells();

//   var i = 0;


//   // function resetcooldown(){
//   //   player[object.namefunction+"cooldown"] = false;
//   //   $(object.nameid).removeClass("oncooldown");

//   // }

//   function f() {
//     if (player[object.namefunction +"cooldown"] === false && currentplayermana >= object.manacost && battle === true){
//       player[object.namefunction+"cooldown"]=true;

// // 0 means 1 spell use per battle
//       fattack();
//       if (object.cooldown !== 0 ){
//       setTimeout(resetcooldown,object.cooldown,object.namefunction);
//     }
//     }

//     function removebuff(){
//       player[object.buffname]= 0;
//     }

//     function fattack(){

//     if (object.buffamount != 0 && i === 0){
//       player[object.buffname] = object.buffamount;
//       var classname = object.buffname.replace("buff","");
//       $("#rightinfo").prepend("<p class='"+ classname +"'>"+object.buffname.replace("buff","")+" buffed: "+object.buffamount+"</p>");
//       setTimeout (removebuff, object.buffduration);

//     }

//     if (object.damage > 0 ){
//       var critroll = Math.floor(Math.random() * (100 - Critical)) + 1;
//       var ifcrit = " does ";

//         if (critroll < Critical) {
//           object.damage = object.damage * 2;
//           ifcrit = " CRITS for";
//         }
//       currentbosshealth = currentbosshealth - object.damage;
//       $("#rightinfo").prepend("<p>"+ object.nameplayer + ifcrit + ": "+ object.damage + " DMG! </p>");
//     }

//     if (object.manacost > 0){
//       currentplayermana = currentplayermana - object.manacost;
//     }

//     if (object.healthcost > 0){
//       currentplayerhealth = currentplayerhealth - object.healthcost;
//     }

//     if (object.manarestore > 0 ){
//       currentplayermana = currentplayermana + object.manarestore;
//       $("#rightinfo").prepend("<p>You restore: " + object.manarestore + " Mana!")
//     }

//     if (object.healthrestore > 0){
//       currentplayerhealth = currentplayerhealth + object.healthrestore;
//       $("#rightinfo").prepend("<p>You restore: " + object.healthrestore + " Health!");
//     }

//       i++;
//       if( i < object.repeat ){setTimeout(fattack, object.delay );}
//     }
//   }
// if (player[object.namefunction +"cooldown"] === false && currentplayermana >= object.manacost){
//   $(object.nameid).addClass("oncooldown");
//   setTimeout(f,object.delay);
// }


// }

var spellTree = [
  ///// Simple spell ////////
  {
    name: 'Simple Ice',
    icon_class: '-ice-6',
    combo: [1],
    damage: 15 ,
    manacost: 25,
    type: 'ice',
  },
  {
    name: 'Simple Fire',
    icon_class: '-fire-3',
    combo: [2],
    damage: 20 ,
    manacost: 30,
    type: 'fire',
  },
  {
    name: 'Simple Storm',
    icon_class: '-lightning-2',
    combo: [3],
    damage: 10 ,
    manacost: 10,
    type: 'storm',
  },
  {
    name: 'Simple Nature',
    icon_class: '-nature-4',
    combo: [4],
    damage: 10 ,
    manacost: 10,
    type: 'nature',
  },
  {
    name: 'Simple Nature',
    icon_class: '-shadow-1',
    combo: [5],
    damage: 10 ,
    manacost: 10,
    type: 'shadow',
  },
  {
    name: 'Simple Nature',
    icon_class: '-blood-2',
    combo: [6],
    damage: 10 ,
    manacost: 10,
    type: 'blood',
  },
  {
    name: 'Simple Attack',
    icon_class: '-basic',
    combo: [7],
    damage: 5,
    manacost: 0,
    type: 'physical',
  },
  {
    name: 'Simple Defend',
    icon_class: '-defend-3',
    combo: [8],
    damage: 10 ,
    manacost: 10,
    type: 'dodge',
  },

  ///// Medium spell repeat ////////

  {
    name: 'Medium Ice',
    icon_class: '-ice-6',
    combo: [1,1],
    damage: 15 ,
    manacost: 25,
    type: 'ice',
  },
  {
    name: 'Medium Fire',
    icon_class: '-fire-3',
    combo: [2,2],
    damage: 20 ,
    manacost: 30,
    type: 'fire',
  },
  {
    name: 'Medium Storm',
    icon_class: '-lightning-2',
    combo: [3,3],
    damage: 10 ,
    manacost: 10,
    type: 'storm',
  },
  {
    name: 'Medium Nature',
    icon_class: '-nature-1',
    combo: [4,4],
    damage: 5,
    manacost: 0,
    type: 'nature',
  },
  {
    name: 'Medium Nature',
    icon_class: '-nature-1',
    combo: [5,5],
    damage: 5,
    manacost: 0,
    type: 'nature',
  },
  {
    name: 'Medium Nature',
    icon_class: '-nature-1',
    combo: [6,6],
    damage: 5,
    manacost: 0,
    type: 'nature',
  },
  {
    name: 'Medium Attack',
    icon_class: '-basic',
    combo: [7,7],
    damage: 5,
    manacost: 0,
    type: 'physical',
  },
  {
    name: 'Medium Nature',
    icon_class: '-nature-1',
    combo: [8,8],
    damage: 5,
    manacost: 0,
    type: 'nature',
  },

  ///// Medium spell ice ////////
  {
    name: 'Ice Fire',
    icon_class: '-ice-1',
    combo: [1,2],
    damage: 15 ,
    manacost: 25,
    type: 'ice',
  },
  {
    name: 'Ice Blast',
    icon_class: '-ice-4',
    combo: [1,3],
    damage: 15 ,
    manacost: 25,
    type: 'ice',
  },
  {
    name: 'Ice Prison',
    icon_class: '-ice-2',
    combo: [1,4],
    damage: 15 ,
    manacost: 25,
    type: 'ice',
  },
  {
    name: 'Ice Shadow',
    icon_class: '-support-4',
    combo: [1,5],
    damage: 15 ,
    manacost: 25,
    type: 'ice',
  },
  {
    name: 'Ice Wall',
    icon_class: '-ice-5',
    combo: [1,6],
    damage: 15 ,
    manacost: 25,
    type: 'ice',
  },
  {
    name: 'Ice Sword',
    icon_class: '-basic',
    combo: [1,7],
    damage: 15 ,
    manacost: 25,
    type: 'ice',
  },
  {
    name: 'Ice block',
    icon_class: '-ice-3',
    combo: [1,8],
    damage: 15 ,
    manacost: 25,
    type: 'ice',
  },

  ///// Medium spell fire ////////

];


var combo = [];
var targetComboSpell = {};
var previous_spell = {};

function playerattack (object){
  if(targetComboSpell.icon_class){
    $("#infolog").prepend("<p>You cast: " + object.name + "! / Type: "+object.type+" / Damage: "+object.damage+" / Manacost: "+object.manacost);
    if(combo[0])$("#0_spell").removeClass(combo[0].icon_class);
    if(combo[1])$("#1_spell").removeClass(combo[1].icon_class);
    // if(combo[2])$("#2_spell").removeClass(combo[2].icon_class);
    $("#spell_to_cast").removeClass(targetComboSpell.icon_class);
    targetComboSpell = {};
    combo = [];
    $("#spell_name").text("");
    $("#spell_type").text("");
    $("#spell_type").attr("class", "");
    $("#spell_damage").text("");
    $("#spell_manacost").text("");
  // }else{
  //   $("#infolog").prepend("<p>Cast a spell!</p>");
  }
}

function reset (){
  // $("#infolog").prepend("<p>Cancel spell!</p>");
  if(combo[0])$("#0_spell").removeClass(combo[0].icon_class);
  if(combo[1])$("#1_spell").removeClass(combo[1].icon_class);
  // if(combo[2])$("#2_spell").removeClass(combo[2].icon_class);
  $("#spell_to_cast").removeClass(targetComboSpell.icon_class);
  targetComboSpell = {};
  combo = [];
  $("#spell_name").text("");
  $("#spell_type").text("");
  $("#spell_type").attr("class", "");
  $("#spell_damage").text("");
  $("#spell_manacost").text("");
}

function put_in_combo (object){
  var i = 0;
  // while (i != 3) {
  while (i != 2) {
    if(!combo[i]){
      $("#"+i+"_spell").addClass(object.icon_class);
      combo[i] = object;
      var comboIds = $.map(combo, function(n,i){
        return n.id;
      })

      console.log(comboIds);

      var sort_comboIds = comboIds.sort();
      var numberOfSpells = 0;
      var bothSpells = 0;

      if(previous_spell.icon_class){
        $("#spell_to_cast").removeClass(previous_spell.icon_class);
        $("#spell_name").text("");
        $("#spell_type").text("");
        $("#spell_type").attr("class", "");
        $("#spell_damage").text("");
        $("#spell_manacost").text("");
      }

      spellTree.forEach(function (spell) {
        bothSpells = 0;
        numberOfSpells = spell.combo.length > sort_comboIds.length ? spell.combo.length : sort_comboIds.length;
        for (var i = 0; i < numberOfSpells; i++){
          if(spell.combo[i] == sort_comboIds[i]){
            bothSpells++;
          }
        }
        if(numberOfSpells == bothSpells){
          targetComboSpell = spell;
          if(previous_spell.icon_class){
            $("#spell_to_cast").removeClass(previous_spell.icon_class);
          }
          if(targetComboSpell.icon_class){
            $("#spell_to_cast").addClass(targetComboSpell.icon_class);
            $("#spell_name").text("Name: "+targetComboSpell.name);
            $("#spell_type").text("Type: "+targetComboSpell.type);
            $("#spell_type").addClass(targetComboSpell.type);
            $("#spell_damage").text("Damage: "+targetComboSpell.damage);
            $("#spell_manacost").text("Manacost: "+targetComboSpell.manacost);
          }
          previous_spell = targetComboSpell;
          console.log(targetComboSpell);
        }
      });

      break;
    }
    if(combo[1]){
      $("#0_spell").removeClass(combo[0].icon_class);
      $("#1_spell").removeClass(combo[1].icon_class);
      // $("#2_spell").removeClass(combo[2].icon_class);

      $("#0_spell").addClass(combo[1].icon_class);
      $("#1_spell").addClass(object.icon_class);
      // $("#1_spell").addClass(combo[2].icon_class);
      // $("#2_spell").addClass(object.icon_class);

      combo[0] = combo[1];
      combo[1] = object;
      // combo[1] = combo[2];
      // combo[2] = object;

      var comboIds = $.map(combo, function(n,i){
        return n.id;
      })


      var sort_comboIds = comboIds.sort();
      var numberOfSpells = 0;
      var bothSpells = 0;

      if(previous_spell.icon_class){
        $("#spell_to_cast").removeClass(previous_spell.icon_class);
        $("#spell_name").text("");
        $("#spell_type").text("");
        $("#spell_type").attr("class", "");
        $("#spell_damage").text("");
        $("#spell_manacost").text("");
      }

      spellTree.forEach(function (spell) {
        bothSpells = 0;
        numberOfSpells = spell.combo.length > sort_comboIds.length ? spell.combo.length : sort_comboIds.length;
        for (var i = 0; i < numberOfSpells; i++){
          if(spell.combo[i] == sort_comboIds[i]){
            bothSpells++;
          }
        }
        if(numberOfSpells == bothSpells){
          targetComboSpell = spell;
          if(previous_spell.icon_class){
            $("#spell_to_cast").removeClass(previous_spell.icon_class);
          }
          if(targetComboSpell.icon_class){
            $("#spell_to_cast").addClass(targetComboSpell.icon_class);
            $("#spell_name").text("Name: "+targetComboSpell.name);
            $("#spell_type").text("Type: "+targetComboSpell.type);
            $("#spell_type").addClass(targetComboSpell.type);
            $("#spell_damage").text("Damage: "+targetComboSpell.damage);
            $("#spell_manacost").text("Manacost: "+targetComboSpell.manacost);
          }

          previous_spell = targetComboSpell;
        }
      });

      console.log(targetComboSpell);

      break;
    }
    i++;
  }

  // if(combo[2]){
  //   console.log(combo[0].nameplayer+" # "+combo[1].nameplayer+" # "+combo[2].nameplayer);
  // }
  if(combo[1]){
    console.log(combo[0].nameplayer+" # "+combo[1].nameplayer);
  }
}

var spellobject;


function updatespells(){

 spellobject = {

    icebolt: {
      id: 1,
      nameplayer: "Icebolt",
      // namefunction: "icebolt",
      icon_class: "-ice-6",
      // damage: Math.floor(Damage/2 + IceDMG + MagicPow/2) ,
      // manacost: boss.level * 15,
      // healthcost: 0,
      // manarestore: 0,
      // healthrestore: 0,
      // repeat: 0,
      // delay: 0,
      // buffname: 0,
      // buffamount: 0,
      // cooldown: 5000,
    },

    firebolt: {
      id: 2,
      nameplayer: "Firebolt",
      // namefunction: "firebolt",
      icon_class: "-fire-3",
      // damage: Math.floor(Damage/2 + FireDMG + MagicPow/2) ,
      // manacost: boss.level * 15,
      // healthcost: 0,
      // manarestore: 0,
      // healthrestore: 0,
      // repeat: 0,
      // delay: 0,
      // buffname: 0,
      // buffamount: 0,
      // cooldown: 5000,
    },


    stormbolt: {
      id: 3,
      nameplayer: "Stormbolt",
      // namefunction: "stormbolt",
      icon_class: "-lightning-2",
      // damage: Math.floor(Damage/2 + StormDMG + MagicPow/2) ,
      // manacost: boss.level * 15,
      // healthcost: 0,
      // manarestore: 0,
      // healthrestore: 0,
      // repeat: 0,
      // delay: 0,
      // buffname: 0,
      // buffamount: 0,
      // cooldown: 5000,
    },

    thorns: {
      id: 4,
      nameplayer: "Thorns",
      // namefunction: "thorns",
      icon_class: "-nature-4",
      // damage: Math.floor(Damage/6 + NatureDMG/3 + MagicPow/6) ,
      // manacost: boss.level * 4,
      // healthcost: 0,
      // manarestore: 0,
      // healthrestore: 0,
      // repeat: 3,
      // delay: 1000,
      // buffname: 0,
      // buffamount: 0,
      // cooldown: 5000,
    },

    shadowbolt: {
      id: 5,
      nameplayer: "Shadowbolt",
      // namefunction: "shadowbolt",
      icon_class: "-shadow-1",
      // damage: Math.floor(Damage/2 + ShadowDMG + MagicPow/2) ,
      // manacost: boss.level * 15,
      // healthcost: 0,
      // manarestore: 0,
      // healthrestore: 0,
      // repeat: 0,
      // delay: 2000,
      // buffname: 0,
      // buffamount: 0,
      // cooldown: 5000,
    },


    bloodstrike: {
      id: 6,
      nameplayer: "Bloodstrike",
      // namefunction: "bloodstrike",
      icon_class: "-blood-2",
      // damage: Math.floor(BloodDMG + Damage),
      // manacost: boss.level * 5,
      // healthcost: boss.level * 30,
      // manarestore: 0,
      // healthrestore: 0,
      // repeat: 0,
      // delay: 0,
      // buffname: "buffLifesteal",
      // buffamount: Math.floor(BloodDMG / 2),
      // cooldown: 5000,
    },


    basicattack: {
      id: 7,
      nameplayer: "Attack",
      // namefunction: "basicattack",
      icon_class: "-basic",
      // damage: Damage,
      // manacost: 0,
      // healthcost: 0,
      // manarestore: Math.floor(Mana/10),
      // healthrestore: Math.floor(Lifesteal/4),
      // repeat: 0,
      // delay: 0,
      // buffname: 0,
      // buffamount: 0,
      // cooldown: 2000,
    },


    shield: {
      id: 8,
      nameplayer: "Shield",
      icon_class: "-defend-3",
      // namefunction: "shield",
      // nameid: "#shield",
      // damage: 0,
      // manacost: boss.level * 15,
      // healthcost: 0,
      // manarestore: 0,
      // healthrestore: 0,
      // repeat: 0,
      // delay: 0,
      // buffname: "buffDodge",
      // buffamount: 100,
      // cooldown: 10000,
      // buffduration: 5000,
    },

    // heal: {
    //   id: 9,
    //   nameplayer: "Heal",
    //   // namefunction: "heal",
    //   icon_class: "-heal-2",
    //   // damage: 0,
    //   // manacost: boss.level * 4,
    //   // healthcost: 0,
    //   // manarestore: 0,
    //   // healthrestore: HealPow*2,
    //   // repeat: 0,
    //   // delay: 0,
    //   // buffname: 0,
    //   // buffamount: 0,
    //   // cooldown: 10000,
    // },

    // natureheal: {
    //   nameplayer: "Natureheal",
    //   namefunction: "natureheal",
    //   nameid: "#natureheal",
    //   damage: 0,
    //   manacost: boss.level * 5,
    //   healthcost: 0,
    //   manarestore: 0,
    //   healthrestore: Math.floor(NatureDMG/4),
    //   repeat: 3,
    //   delay: 1000,
    //   buffname: "buffNatureDMG",
    //   buffamount: Math.floor(NatureDMG),
    //   buffduration: 5000,
    //   cooldown: 10000,
    // },


    // manarestore: {
    //   nameplayer: "Manarestore",
    //   namefunction: "manarestore",
    //   nameid: "#manarestore",
    //   damage: 0,
    //   manacost: 0,
    //   healthcost: 0,
    //   manarestore:  Math.floor(MagicPow/2),
    //   healthrestore:0,
    //   repeat: 0,
    //   delay: 0,
    //   buffname: 0,
    //   buffamount: 0,
    //   cooldown: 10000,
    // },

    // lotus: {
    //   nameplayer: "Lotus",
    //   namefunction: "lotus",
    //   nameid: "#lotus",
    //   damage: 0,
    //   manacost: 0,
    //   healthcost: 0,
    //   manarestore:  Math.floor(MagicPow/2),
    //   healthrestore:0,
    //   repeat: 5,
    //   delay: 1000,
    //   buffname: 0,
    //   buffamount: 0,
    //   cooldown: 0,
    // },

    // buffmagic: {
    //   nameplayer: "Magic Bottle",
    //   namefunction: "buffmagic",
    //   nameid: "#buffmagic",
    //   damage: 0,
    //   manacost: boss.level * 25,
    //   healthcost: 0,
    //   manarestore: 0,
    //   healthrestore: 0,
    //   repeat: 0,
    //   delay: 0,
    //   buffname: "buffMagicPow",
    //   buffamount: Math.floor(MagicPow/2),
    //   cooldown: 10000,
    //   buffduration: 5000,
    // },

    // icebuff: {
    //   nameplayer: "Ice Mask",
    //   namefunction: "icebuff",
    //   nameid: "#icebuff",
    //   damage:  Math.floor(IceDMG / 2),
    //   manacost: boss.level * 10,
    //   healthcost: 0,
    //   manarestore: 0,
    //   healthrestore: 0,
    //   repeat: 0,
    //   delay: 0,
    //   buffname: "buffIceDMG",
    //   buffamount: Math.floor(IceDMG),
    //   cooldown: 10000,
    //   buffduration: 5000,
    // },

    // firebuff: {
    //   nameplayer: "Hand of Fire",
    //   namefunction: "firebuff",
    //   nameid: "#firebuff",
    //   damage:  Math.floor(FireDMG / 2),
    //   manacost: boss.level * 10,
    //   healthcost: 0,
    //   manarestore: 0,
    //   healthrestore: 0,
    //   repeat: 0,
    //   delay: 0,
    //   buffname: "buffFireDMG",
    //   buffamount: Math.floor(FireDMG),
    //   cooldown: 10000,
    //   buffduration: 5000,
    // },

    // shadowbuff: {
    //   nameplayer: "Eye of Shadow",
    //   namefunction: "shadowbuff",
    //   nameid: "#shadowbuff",
    //   damage:  Math.floor(ShadowDMG / 2),
    //   manacost: boss.level * 10,
    //   healthcost: 0,
    //   manarestore: 0,
    //   healthrestore: 0,
    //   repeat: 0,
    //   delay: 0,
    //   buffname: "buffShadowDMG",
    //   buffamount: Math.floor(ShadowDMG),
    //   cooldown: 10000,
    //   buffduration: 5000,
    // },

    // stormbuff: {
    //   nameplayer: "Tree of Storm",
    //   namefunction: "stormbuff",
    //   nameid: "#stormbuff",
    //   damage: Math.floor(StormDMG/2),
    //   manacost: boss.level * 10,
    //   healthcost: 0,
    //   manarestore: 0,
    //   healthrestore: 0,
    //   repeat: 0,
    //   delay: 0,
    //   buffname: "buffStormDMG",
    //   buffamount: Math.floor(StormDMG ),
    //   cooldown: 10000,
    //   buffduration: 5000,
    // },

    // magebuff: {
    //   nameplayer: "Mage Burst",
    //   namefunction: "magebuff",
    //   nameid: "#magebuff",
    //   damage: Math.floor(MagicPow /2),
    //   manacost: Math.floor(currentplayermana / 2),
    //   healthcost: 0,
    //   manarestore: 0,
    //   healthrestore: 0,
    //   repeat: 0,
    //   delay: 0,
    //   buffname: "buffMagicPow",
    //   buffamount: Math.floor(MagicPow /2),
    //   cooldown: 10000,
    //   buffduration: 10000,
    // },

    // bloodsap: {
    //   nameplayer: "Blood Sap",
    //   namefunction: "bloodsap",
    //   nameid: "#bloodsap",
    //   damage: Math.floor(BloodDMG/3),
    //   manacost: 0,
    //   healthcost: Math.floor(Health / 4),
    //   manarestore: 0,
    //   healthrestore: Math.floor(BloodDMG/3),
    //   repeat: 3,
    //   delay: 1000,
    //   buffname: "buffBloodDMG",
    //   buffamount: Math.floor(BloodDMG ),
    //   cooldown: 10000,
    //   buffduration: 5000,
    // },

    // healwings: {
    //   nameplayer: "Heal Wings",
    //   namefunction: "healwings",
    //   nameid: "#healwings",
    //   damage: 0,
    //   manacost: Math.floor(Mana / 10),
    //   healthcost: 0,
    //   manarestore: 0,
    //   healthrestore: HealPow,
    //   repeat: 5,
    //   delay: 800,
    //   buffname: 0,
    //   buffamount: 0,
    //   cooldown: 10000,
    // },

    // defenseheal: {
    //   nameplayer: "Palace of Gods",
    //   namefunction: "defenseheal",
    //   nameid: "#defenseheal",
    //   damage: 0,
    //   manacost: boss.level*7,
    //   healthcost: 0,
    //   manarestore: 0,
    //   healthrestore: Math.floor(HealPow/2),
    //   repeat: 3,
    //   delay: 1000,
    //   buffname: "buffDodge",
    //   buffamount: 30,
    //   buffduration: 4000,
    //   cooldown: 10000,
    // },

    // attackbuff: {
    //   nameplayer: "Damage Buff",
    //   namefunction: "attackbuff",
    //   nameid: "#attackbuff",
    //   damage: 0,
    //   manacost: boss.level * 15,
    //   healthcost: 0,
    //   manarestore: 0,
    //   healthrestore: 0,
    //   repeat: 0,
    //   delay: 0,
    //   buffname: "buffDamage",
    //   buffamount: Math.floor(Damage),
    //   cooldown: 10000,
    //   buffduration: 10000,
    // },

    // helmet: {
    //   nameplayer: "Vigor Of Vikings",
    //   namefunction: "helmet",
    //   nameid: "#helmet",
    //   damage: 0,
    //   manacost: boss.level * 15,
    //   healthcost: 0,
    //   manarestore: 0,
    //   healthrestore: 0,
    //   repeat: 0,
    //   delay: 0,
    //   buffname: "buffHealth",
    //   buffamount: Math.floor(Mana / 2),
    //   cooldown: 10000,
    //   buffduration: 15000,
    // },

    // magicattack: {
    //   nameplayer: "Finger Bolt",
    //   namefunction: "magicattack",
    //   nameid: "#magicattack",
    //   damage: MagicPow,
    //   manacost: boss.level * 10,
    //   healthcost: 0,
    //   manarestore: 0,
    //   healthrestore: 0,
    //   repeat: 0,
    //   delay: 0,
    //   buffname: 0,
    //   buffamount: 0,
    //   cooldown: 7000,
    //   buffduration: 0,
    // },


  }


}

updatespells();


$(".spell1").click(function(){put_in_combo(spellobject.icebolt);});
$(".spell2").click(function(){put_in_combo(spellobject.firebolt);});
$(".spell3").click(function(){put_in_combo(spellobject.stormbolt);});
$(".spell4").click(function(){put_in_combo(spellobject.thorns);});
$(".spell5").click(function(){put_in_combo(spellobject.shadowbolt);});
$(".spell6").click(function(){put_in_combo(spellobject.bloodstrike);});
$(".spell7").click(function(){put_in_combo(spellobject.basicattack);});
$(".spell8").click(function(){put_in_combo(spellobject.shield);});

$("#spell_to_cast").click(function(){playerattack(targetComboSpell);});


// $("#shadowbuff").click(function(){playerattack(spellobject.shadowbuff);});
// $("#stormbuff").click(function(){playerattack(spellobject.stormbuff);});
// $("#firebuff").click(function(){playerattack(spellobject.firebuff);});
// $("#icebuff").click(function(){playerattack(spellobject.icebuff);});

// $("#icebolt").click(function(){playerattack(spellobject.icebolt);});
// $("#firebolt").click(function(){playerattack(spellobject.firebolt);});
// $("#stormbolt").click(function(){playerattack(spellobject.stormbolt);});
// $("#thorns").click(function(){playerattack(spellobject.thorns);});
// $("#shadowbolt").click(function(){playerattack(spellobject.shadowbolt);});
// $("#heal").click(function(){playerattack(spellobject.heal);});
// $("#natureheal").click(function(){playerattack(spellobject.natureheal);});
// $("#manarestore").click(function(){playerattack(spellobject.manarestore);});
// $("#bloodstrike").click(function(){playerattack(spellobject.bloodstrike);});
// $("#shield").click(function(){playerattack(spellobject.shield);});
// $("#buffmagic").click(function(){playerattack(spellobject.buffmagic);});
// $(".-basic").click(function(){playerattack(spellobject.basicattack);});


// keyboard spell clicking support! Woo :D
$('body').bind('keypress',function (event){
  // console.log(event.keyCode);
  if (event.keyCode === 113){$(".spell1").trigger('click'); $(".spell1").addClass('down');}
  if (event.keyCode === 119){$(".spell2").trigger('click'); $(".spell2").addClass('down');}
  if (event.keyCode === 101){$(".spell3").trigger('click'); $(".spell3").addClass('down');}
  if (event.keyCode === 114){$(".spell4").trigger('click'); $(".spell4").addClass('down');}
  if (event.keyCode === 97){$(".spell5").trigger('click'); $(".spell5").addClass('down');}
  if (event.keyCode === 115){$(".spell6").trigger('click'); $(".spell6").addClass('down');}
  if (event.keyCode === 100){$(".spell7").trigger('click'); $(".spell7").addClass('down');}
  if (event.keyCode === 102){$(".spell8").trigger('click'); $(".spell8").addClass('down');}

  if (event.keyCode === 32){$("#spell_to_cast").trigger('click');}

  if (event.keyCode === 0){reset();}

  // if (event.keyCode === 57){$(".spell9").trigger('click');}

  // if (event.charCode === 113){$(".spell1").trigger('click');}
  // if (event.charCode === 119){$(".spell2").trigger('click');}
  // if (event.charCode === 101){$(".spell3").trigger('click');}
  // if (event.charCode === 114){$(".spell4").trigger('click');}
  // if (event.charCode === 97){$(".spell5").trigger('click');}
  // if (event.charCode === 115){$(".spell6").trigger('click');}
  // if (event.charCode === 100){$(".spell7").trigger('click');}
  // if (event.charCode === 102){$(".spell8").trigger('click');}
  // if (event.charCode === 57){$(".spell9").trigger('click');}

});

$('body').keyup(function (){
  $(".spell1").removeClass('down');
  $(".spell2").removeClass('down');
  $(".spell3").removeClass('down');
  $(".spell4").removeClass('down');
  $(".spell5").removeClass('down');
  $(".spell6").removeClass('down');
  $(".spell7").removeClass('down');
  $(".spell8").removeClass('down');
});



}); // doc rdy

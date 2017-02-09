
$(document).ready(function() {


var mouseX;
var mouseY;
$(document).mousemove(function(e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
});


function drawSpellText(spell){
  $("#spell_name").text("Name: "+spell.name);
  $("#spell_type").text("Type: "+spell.type);
  $("#spell_type").addClass(spell.school);
  $("#spell_damage").text("Damage: "+spell.damage);
  $("#spell_manacost").text("Manacost: "+spell.manacost);
}

function resetSpellText(){
  $("#spell_name").text("");
  $("#spell_type").text("");
  $("#spell_type").attr("class", "");
  $("#spell_damage").text("");
  $("#spell_manacost").text("");
}


function hpUpdate(player){
  $("#playerhpbar").css('width', player.hp / player.total_hp * 100 + '%');
}

function manaUpdate(player){
  $("#playermanabar").css('width', player.mana / player.total_mana * 100 + '%');
}

function updateBuffsScreen(player){

}

function updateSummonsScreen(player){

}


function Player(){

  this.name - 'player1';
  this.total_hp = 200;
  this.hp = 200;
  this.total_mana = 100;
  this.mana = 100;
  this.base_dmg = 5;
  this.base_resist = 10; // *%
  this.spells = {};
  this.buffs = {};
  this.debuffs = {};
  this.summons = {};
  this.target = null;
  this.combo = [];
  this.targetComboSpell = {};
  this.previous_spell = {};

}

window.player = new Player();

hpUpdate(window.player);
manaUpdate(window.player);



Player.prototype.castSpell = Player.prototype.castSpell || function(spell){

  var self = this;

  self.target = self;

  if(!spell || !spell.type){
    
    $("#spell_status").attr('style', '');

    $("#spell_status").text("Spell not found!").delay(500).fadeOut(1500);

  }else if(self.spells[spell.name] == true){

    $("#spell_status").attr('style', '');

    $("#spell_status").text("Spell on cooldown!").delay(500).fadeOut(1500); 

  }else if(spell.manacost > self.mana){

    $("#spell_status").attr('style', '');

    $("#spell_status").text("Not enough mana!").delay(500).fadeOut(1500); 

  }else{

    switch (spell.type) {
      case 'damage':
        spell.makeDamage(self.target);
        spell.manaCost(self);
        spell.setCooldown(self);
        break;
      case 'heal':
        spell.makeHeal(self.target);
        spell.manaCost(self);
        spell.setCooldown(self);
        break;
      case 'buff':
        spell.setBuff(self.target);
        spell.manaCost(self);
        spell.setCooldown(self);
        break;
      case 'debuff':
        spell.setDebuff(self.target);
        spell.manaCost(self);
        spell.setCooldown(self);
        break;
      case 'summon':
        spell.setSummon(self.target);
        spell.manaCost(self);
        spell.setCooldown(self);
        break;
      default:
        console.log('Spell type is undefined');
        break;
    }

    manaUpdate(self);

    $("#infolog").prepend("<p>You cast: " + spell.name + "! / Type: "+spell.type+" / Damage: "+spell.damage+" / Manacost: "+spell.manacost);
    self.reset();
  }
}



Player.prototype.put_in_combo = Player.prototype.put_in_combo || function (object){
  var self = this;
  self.targetComboSpell = {};
  var i = 0;
  // while (i != 3) {
  while (i != 2) {
    if(!self.combo[i]){
      $("#"+i+"_spell").addClass(object.icon_class);
      self.combo[i] = object;
      var comboIds = $.map(self.combo, function(n,i){
        return n.id;
      })

      // console.log(comboIds);

      var sort_comboIds = comboIds.sort();
      var numberOfSpells = 0;
      var bothSpells = 0;

      if(self.previous_spell.type){
        $("#spell_to_cast").removeClass(self.previous_spell.icon_class);
        resetSpellText();
      }

      spellBook.forEach(function (spell) {
        bothSpells = 0;
        numberOfSpells = spell.combo.length > sort_comboIds.length ? spell.combo.length : sort_comboIds.length;
        for (var i = 0; i < numberOfSpells; i++){
          if(spell.combo[i] == sort_comboIds[i]){
            bothSpells++;
          }
        }
        if(numberOfSpells == bothSpells){
          self.targetComboSpell = spell;
          if(self.previous_spell.icon_class){
            $("#spell_to_cast").removeClass(self.previous_spell.icon_class);
          }
          if(self.targetComboSpell.icon_class){
            $("#spell_to_cast").addClass(self.targetComboSpell.icon_class);
            if(self.spells[spell.name] == true){
              $("#spell_to_cast").addClass('cooldown');
            }else{
              $("#spell_to_cast").removeClass('cooldown');
            }
            drawSpellText(self.targetComboSpell);
          }
          self.previous_spell = self.targetComboSpell;

          // console.log(self.targetComboSpell);

        }
      });

      break;
    }
    if(self.combo[1]){
      $("#0_spell").removeClass(self.combo[0].icon_class);
      $("#1_spell").removeClass(self.combo[1].icon_class);
      // $("#2_spell").removeClass(combo[2].icon_class);

      $("#0_spell").addClass(self.combo[1].icon_class);
      $("#1_spell").addClass(object.icon_class);
      // $("#1_spell").addClass(combo[2].icon_class);
      // $("#2_spell").addClass(object.icon_class);

      self.combo[0] = self.combo[1];
      self.combo[1] = object;
      // combo[1] = combo[2];
      // combo[2] = object;

      var comboIds = $.map(self.combo, function(n,i){
        return n.id;
      })


      var sort_comboIds = comboIds.sort();
      var numberOfSpells = 0;
      var bothSpells = 0;

      if(self.previous_spell.icon_class){
        $("#spell_to_cast").removeClass(self.previous_spell.icon_class);
        resetSpellText();
      }

      spellBook.forEach(function (spell) {
        bothSpells = 0;
        numberOfSpells = spell.combo.length > sort_comboIds.length ? spell.combo.length : sort_comboIds.length;
        for (var i = 0; i < numberOfSpells; i++){
          if(spell.combo[i] == sort_comboIds[i]){
            bothSpells++;
          }
        }
        if(numberOfSpells == bothSpells){
          self.targetComboSpell = spell;
          if(self.previous_spell.icon_class){
            $("#spell_to_cast").removeClass(self.previous_spell.icon_class);
          }
          if(self.targetComboSpell.icon_class){
            $("#spell_to_cast").addClass(self.targetComboSpell.icon_class);
            if(self.spells[spell.name] == true){
              $("#spell_to_cast").addClass('cooldown');
            }else{
              $("#spell_to_cast").removeClass('cooldown');
            }
            drawSpellText(self.targetComboSpell);
          }

          self.previous_spell = self.targetComboSpell;
        }
      });

      // console.log(self.targetComboSpell);

      break;
    }
    i++;
  }

  // if(combo[2]){
  //   console.log(combo[0].nameplayer+" # "+combo[1].nameplayer+" # "+combo[2].nameplayer);
  // }
  // if(self.combo[1]){
  //   console.log(self.combo[0].nameplayer+" # "+self.combo[1].nameplayer);
  // }
}



Player.prototype.reset = Player.prototype.reset || function (){
  var self = this;
  if(self.combo[0])$("#0_spell").removeClass(self.combo[0].icon_class);
  if(self.combo[1])$("#1_spell").removeClass(self.combo[1].icon_class);
  // if(combo[2])$("#2_spell").removeClass(combo[2].icon_class);
  $("#spell_to_cast").removeClass(self.targetComboSpell.icon_class);
  self.targetComboSpell = {};
  self.combo = [];
  resetSpellText();
}


$(".spell1").click(function(){window.player.put_in_combo(spellobject.icebolt);});
$(".spell2").click(function(){window.player.put_in_combo(spellobject.firebolt);});
$(".spell3").click(function(){window.player.put_in_combo(spellobject.stormbolt);});
$(".spell4").click(function(){window.player.put_in_combo(spellobject.thorns);});
$(".spell5").click(function(){window.player.put_in_combo(spellobject.shadowbolt);});
$(".spell6").click(function(){window.player.put_in_combo(spellobject.bloodstrike);});
$(".spell7").click(function(){window.player.put_in_combo(spellobject.basicattack);});
$(".spell8").click(function(){window.player.put_in_combo(spellobject.shield);});

$("#spell_to_cast").click(function(){window.player.castSpell(window.player.targetComboSpell);});



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

  if (event.keyCode === 0){window.player.reset();}


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





function Summon(spell){
  this.name = spell.summon.name;
  this.hp = spell.summon.hp;
  this.attack = spell.summon.attack;
  this.attackDelay = spell.summon.attackDelay;
  this.target = window.player;
  this.number = spell.summon.number;
  this.makeDamage = function(){
    this.target.hp -= this.attack * this.number;
    this.hp -= this.attack * this.number;
    hpUpdate(this.target);
  }
}


var spell_methods = {

  setCooldown: function(player){
    player.spells[this.name] = true;
    var self = this;
    setTimeout(function(){self.resetCooldown(player);}, self.cooldown);
  },

  resetCooldown: function(player){
    player.spells[this.name] = false;
  },

  manaCost: function(player){
    player.mana -= this.manacost;
  },

  makeDamage: function(target){
    target.hp -= this.value;
    hpUpdate(target);
  },

  makeHeal: function(target){
    target.hp += this.value;
    hpUpdate(target);
  },

  setBuff: function(player){
    var self = this;
    player.buffs[this.buff.name] = {
      name: this.buff.name,
    };
    var i = 0;
    var buffInterval = setInterval(function(){
      self.makeHeal(player);
      i++;
      if(i == self.buff.buffrepeat){
        self.removeBuff(player);
        clearInterval(buffInterval);
      }
    }, self.buff.buffdelay);
  },

  removeBuff: function(player){
    var self = this;
    delete player.buffs[self.buff.name];
  },

  setDebuff: function(player){
    var self = this;
    player.debuffs[self.debuff.name] = {
      name: self.debuff.name,
    };
    var i = 0;
    var debuffInterval = setInterval(function(){
      self.makeDamage(player);
      i++;
      if(i == self.debuff.debuffrepeat){
        self.removeDebuff(player);
        clearInterval(debuffInterval);
      }
    }, self.debuff.debuffdelay);
  },

  removeDebuff: function(player){
    var self = this;
    delete player.debuffs[self.debuff.name];
  },

  setSummon: function(player){
    var self = this;
    player.summons[self.summon.name] = new Summon(self);
    var summonInterval = setInterval(function(){
      if(player.summons[self.summon.name].hp <= 0){
        self.removeSummon(player);
        clearInterval(summonInterval);
      }else{
        player.summons[self.summon.name].makeDamage();
      }
    }, player.summons[self.summon.name].attackDelay);
  },

  removeSummon: function(player){
    var self = this;
    delete player.summons[self.summon.name];
  },

}




//var spellBook = [
window.spellBook = [

  {
    name: 'Simple Ice',
    icon_class: '-ice-6',
    combo: [1],
    value: 15 ,
    manacost: 25,
    type: 'summon',
    school: 'ice',
    cooldown: 10000,
    summon: {
      name: 'Ice Wisp',
      hp: '20',
      attack: 5,
      attackDelay: 5000,
      number: 1,
    },
  },
  {
    name: 'Simple Fire',
    icon_class: '-fire-3',
    combo: [2],
    value: 20 ,
    manacost: 30,
    school: 'fire',
    type: 'damage',
    cooldown: 10000,
  },
  {
    name: 'Simple Storm',
    icon_class: '-lightning-2',
    combo: [3],
    value: 10 ,
    manacost: 10,
    school: 'storm',
    type: 'damage',
    cooldown: 10000,
  },
  {
    name: 'Simple Nature',
    icon_class: '-nature-4',
    combo: [4],
    value: 10 ,
    manacost: 10,
    school: 'nature',
    heal: 10,
    type: 'buff',
    cooldown: 10000,
    buff: {
      name: 'Heal',
      buffdelay: 5000,
      buffrepeat: 5,
    },
  },
  {
    name: 'Simple Cabal',
    icon_class: '-shadow-1',
    combo: [5],
    value: 5 ,
    manacost: 10,
    school: 'shadow',
    type: 'debuff',
    debuff: {
      name: 'Pain',
      debuffdelay: 5000,
      debuffrepeat: 5,    
    },
    cooldown: 10000,
  },
  {
    name: 'Simple Blood',
    icon_class: '-blood-2',
    combo: [6],
    value: 10 ,
    manacost: 10,
    school: 'blood',
    type: 'buff',
    buff: {
      name: 'Haste',
      buffdelay: 5000,
      buffrepeat: 5,
      value: 5,   
    },
    cooldown: 10000,
  },
  {
    name: 'Simple Attack',
    icon_class: '-basic',
    combo: [7],
    value: 5,
    manacost: 0,
    school: 'physical',
    type: 'damage',
    cooldown: 10000,
  },
  {
    name: 'Simple Defend',
    icon_class: '-defend-3',
    combo: [8],
    value: 10 ,
    manacost: 10,
    school: 'dodge',
    type: 'damage',
    cooldown: 10000,
  },

];

spellBook.forEach(function (spell) {
  $.extend(spell, spell_methods);
});



var spellobject = {

    icebolt: {
      id: 1,
      letter: 'I',
      nameplayer: "Icebolt",
      icon_class: "-ice-6",
    },

    firebolt: {
      id: 2,
      letter: 'F',
      nameplayer: "Firebolt",
      icon_class: "-fire-3",
    },


    stormbolt: {
      id: 3,
      letter: 'S',
      nameplayer: "Stormbolt",
      icon_class: "-lightning-2",
    },

    thorns: {
      id: 4,
      letter: 'N',
      nameplayer: "Thorns",
      icon_class: "-nature-4",
    },

    shadowbolt: {
      id: 5,
      letter: 'C',
      nameplayer: "Shadowbolt",
      icon_class: "-shadow-1",
    },


    bloodstrike: {
      id: 6,
      letter: 'B',
      nameplayer: "Bloodstrike",
      icon_class: "-blood-2",
    },


    basicattack: {
      id: 7,
      letter: 'W',
      nameplayer: "Attack",
      icon_class: "-basic",
    },


    shield: {
      id: 8,
      letter: 'D',
      nameplayer: "Shield",
      icon_class: "-defend-3",
    },

  }

}); // doc rdy

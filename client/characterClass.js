export default class Character{
  constructor(intelligence, dexterity, strength, toughness, constitution, luck) {
    this.level = 1;
    this.magicAttackPts = intelligence;
    this.experienceInc = intelligence / 100;
    this.dodgePts = dexterity;
    this.distanceAttackPts = dexterity;
    this.meleeAttackPts = strength;
    this.loadBearingInc = strength * 10;
    this.defensePts = toughness;
    this.persistance = toughness;
    this.healthPts = constitution;
    this.endurance = constituion;
    this.rollInc = luck;
    this.inventory = [];
    this.perks = [];
  }

  levelUp() {
    this.level++;
    this.magicAttackPts += this.magicAttackPts;
    this.dodgePts += this.dodgePts;
    this.distanceAttackPts += this.distanceAttackPts;
    this.meleeAttackPts += this.meleeAttackPts;
    this.loadBearingInc += this.loadBearingInc / this.level * 10;
  }
}

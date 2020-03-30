const { expect } = require('chai');

const audit = require("../index.js");

describe('Week 3 audit', () => {

  describe('Context Problems', () => {
    it('exercise A', () => {
      expect(audit.exerciseA()).to.equal('global window object');
    });

    it('exercise B', () => {
      expect(audit.exerciseB()).to.equal('data');
    });

    it('exercise C', () => {
      expect(audit.exerciseC()).to.equal('global window object');
    });
  });

  describe('Scope Problems', () => {

    it('Exercise D', () => {
      expect(audit.exerciseD()).to.deep.equal([
       { 'D': 'welcome' },
       { 'A': 'hi' },
       { 'B': 'hi' },
       { 'C': 'hi' }
      ])
    });

    it('Exercise E', () => {
      expect(audit.exerciseE()).to.deep.equal([
        { 'A': 'heel' },
        { 'C': 'heel' },
        { 'B': 'boot' },
        { 'D': 'boot' }
      ]);
    });
  });

  describe('Prototype Problems', () => {

    it('Exercise F', () => {
      expect(audit.exerciseF()).to.deep.equal([
        'Beckon', 'El Five', 'ChoLon', 'Super Mega Bien'  
      ]);
    });

    it('Exercise G', () => {
      expect(audit.exerciseG()).to.deep.equal([
        { restaurant: 'Beckon', takeOut: false },
        { restaurant: 'El Five', takeOut: true },
        { restaurant: 'ChoLon', takeOut: true },
        { restaurant: 'Super Mega Bien', takeOut: true }
      ]);
    });

    it('Exercise H', () => {
      expect(audit.exerciseH()).to.deep.equal({
       'New American': ['Beckon'],
       'Tapas/small plates': ['El Five', 'Super Mega Bien'],
       'Asian Fusion': ['ChoLon']
      });
    });

    it('ExerciseBonus', () => {
      expect(audit.exerciseBonus()).to.deep.equal({
        one: 'Right side wins!',
        two: 'Let\'s fight again!',
        three: 'Right side wins!',
        four: 'Left side wins!'
      });
    });
  });
});
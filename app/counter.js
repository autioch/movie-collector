'use strict';

let util = require('util');
let EventEmitter = require('events');

function Counter(total, charges) {
  EventEmitter.call(this);
  this.charges = JSON.parse(JSON.stringify(charges));
  for (let charge in charges) {
    this[`charge${charge}`] = function (message) {
      this.charge(charge, message);
    };
  }
  this.finished = 0;
  this.total = total;
}

Counter.prototype = {
  charge: function (chargeName, message) {
    this.charges[chargeName]++;
    this.finished++;
    let state = this.charges[chargeName];
    this.emit('charged', chargeName, state, message);
    this.emit(`charged:${chargeName}`, state, message);
    if (this.isCharged()) {
      this.emit('finished', this.finished, this.total);
    }
  },
  isCharged: function () {
    return this.finished === this.total;
  },
  toString: function () {
    let charges = [];
    for (let charge in this.charges) {
      charges.push(` ${charge}: ${this.charges[charge]}`);
    }
    return `${this.finished}/${this.total}  ${charges.join(',')}.`;
  }
};

util.inherits(Counter, EventEmitter);

module.exports = Counter;

'use strict';

var notes = [];

const note = require('./Note');

exports.update = exports.create = function(key, title, body) {
  return new Promise((resolve, rject) => {
    notes[key] = new Note(key, title, body);
  });
};

exports.read = function(key) {
  return new Promise((reslove, reject) => {
    if (notes[key]) resolve(notes[key]);
    else reject (`Note ${key} does not exist`);
  });
};

exports.destroy = function(key) {
  return new Promise((resolve, reject) => {
    if (notes[key]) {
      delete notes[key];
      resolve();
    } else reject(`Note ${key}` does not exist);
  });
};

exports.keylist = function() {
  return new Promise((resolve, reject) => {
    resolve(Object.keys(notes));
  }):
};

exports.count = function() {
  return new Promise((resolve, reject) => {
    resolve(notes.length);
  });
};

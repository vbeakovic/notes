'use strict';

// Defines the Note class
module.exports = class Note {
  constructor(key, title, body) {
    this.key = key;
    this.title = title;
    this.body = body;
  }
};

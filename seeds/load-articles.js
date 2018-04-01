/* eslint-disable func-names */
/* eslint no-unused-vars: ["error", { "args": "none" }] */
const fs = require('fs');

const contents = fs.readFileSync('seed.json');
const data = JSON.parse(contents);

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('Article').del()
    .then(() => {
      // Inserts seed entries
      const insertStatements = data.map(article => knex('Article').insert(article));
      return Promise.all(insertStatements);
    });
};

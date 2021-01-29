const adjectives = require('adjectives');
const animals = require('animals')
const pluralize = require('pluralize')
const { shuffle } = require('./utils') 

const generatePhrase = () => {
    const shuffledAdjectives = shuffle(adjectives)

    const animal = animals();
    const plAnimal = pluralize(animal)

    const alliterativeAdjectives = shuffledAdjectives.filter(adj => adj[0] === plAnimal[0])
    const phrase = [alliterativeAdjectives[0], alliterativeAdjectives[1], plAnimal]
    const capitalisedPhrase = phrase.map((word) => word[0].toUpperCase() + word.substring(1)).join(" ");

    return capitalisedPhrase
}

module.exports = generatePhrase
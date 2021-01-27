const adjectives = require('adjectives');
const animals = require('animals')
const pluralize = require('pluralize')
const { shuffle } = require('./utils') 

const generatePhrase = () => {
    const shuffledAdjectives = shuffle(adjectives)

    const animal = animals();
    const plAnimal = pluralize(animal)

    const alliterativeAdjectives = shuffledAdjectives.filter(adj => adj[0] === plAnimal[0])
    return `${alliterativeAdjectives[0]} ${alliterativeAdjectives[1]} ${plAnimal}`
}

module.exports = generatePhrase
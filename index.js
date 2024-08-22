import adjectives from "adjectives";
import animals from "animals";
import pluralize from "pluralize";
import { shuffle } from "./utils.js";

export const generatePhrase = () => {
  const shuffledAdjectives = shuffle(adjectives);

  const animal = animals();
  const plAnimal = pluralize(animal);

  const alliterativeAdjectives = shuffledAdjectives.filter(
    (adj) => adj[0] === plAnimal[0]
  );
  const phrase = [
    alliterativeAdjectives[0],
    alliterativeAdjectives[1],
    plAnimal,
  ];
  const capitalisedPhrase = phrase
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ");

  return capitalisedPhrase;
};

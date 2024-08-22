import adjectives from "adjectives";
import getRandomAnimal from "animals";
import pluralize from "pluralize";

const getTwoRandomAdjs = (array) => {
  if (array.length < 2) {
    throw new Error("Oh no no");
  }

  const first = array[Math.floor(Math.random() * array.length)];
  let second = first;

  while (first === second) {
    second = array[Math.floor(Math.random() * array.length)];
  }
  return [first, second];
};

export const generatePhrase = () => {
  const plAnimal = pluralize(getRandomAnimal());

  const alliterativeAdjectives = adjectives.filter(
    (adj) => adj[0] === plAnimal[0]
  );

  const [adj1, adj2] = getTwoRandomAdjs(alliterativeAdjectives);

  const capitalisedPhrase = [adj1, adj2, plAnimal]
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ");

  return capitalisedPhrase;
};

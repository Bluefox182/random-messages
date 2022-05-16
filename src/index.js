// How to create a NPM Package

const messages = [
  'Peter',
  'Tony',
  'Bruce',
  'Clark',
  'Natasha',
  'John',
  'Carol',
];

const randomMessage = () => {
  const randomIndex = Math.floor(Math.random() * messages.length);
  console.log(messages[randomIndex]);
};

module.exports = {
  randomMessage,
};

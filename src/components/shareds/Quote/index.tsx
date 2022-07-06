import React from 'react';
import randomIntFromInterval from '../../../common/random-number.helper';

const Quote = () => {
  const quotes = [
    {
      text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      author: 'Martin Fowler',
    },
    { text: 'First, solve the problem. Then, write the code.', author: 'John Johnson' },
    { text: 'Experience is the name everyone gives to their mistakes.', author: 'Oscar Wilde' },
    { text: ' In order to be irreplaceable, one must always be different', author: 'Coco Chanel' },
    { text: 'Java is to JavaScript what car is to Carpet.', author: 'Chris Heilmann' },
    { text: 'Knowledge is power.', author: 'Francis Bacon' },
    {
      text: 'Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.',
      author: 'Dan Salomon',
    },
    {
      text: 'Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.',
      author: 'Antoine de Saint-Exupery',
    },
    { text: 'Ruby is rubbish! PHP is phpantastic!', author: 'Nikita Popov' },
    { text: ' Code is like humor. When you have to explain it, it’s bad.', author: 'Cory House' },
  ];

  const randomQuote = quotes[randomIntFromInterval(0, 9)];

  return (
    <blockquote className="Quote">
      <q>{randomQuote.text}</q> - {randomQuote.author}
    </blockquote>
  );
};

export default Quote;

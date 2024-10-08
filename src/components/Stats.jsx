import {
  INSTAGRAM_CHARACTERS_LIMIT,
  TWITTER_CHARACTERS_LIMIT,
} from '@/lib/constants';

const Stat = ({ number, label }) => {
  const statNumberLimitClassName = `stat__number ${
    number < 0 ? 'stat__number--limit' : ''
  }`;

  return (
    <section className="stat">
      <span className={statNumberLimitClassName}>{number}</span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
};

const Stats = ({ text }) => {
  let numberOfWords = text.split(/\s/).filter((word) => word !== '').length;

  let numberOfCharacters = text.length;

  let twitterCharactersLeft = TWITTER_CHARACTERS_LIMIT - numberOfCharacters;
  let instagramCharactersLeft = INSTAGRAM_CHARACTERS_LIMIT - numberOfCharacters;

  return (
    <section className="stats">
      <Stat number={numberOfWords} label="Words" />
      <Stat number={numberOfCharacters} label="Characters" />
      <Stat number={twitterCharactersLeft} label="Twitter" />
      <Stat number={instagramCharactersLeft} label="Instagram" />
    </section>
  );
};

export default Stats;

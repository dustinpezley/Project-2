const { Talent } = require('../models');

const talentData = [
  {
    title: 'Dixie Antebellum',
  },
  {
    title: 'Frightened Jazz Orchestra',
  },
  {
    title: 'The OMalley Cats',
  },
  {
    title: 'EPMD',
  },
  {
    title: 'Tenth Ghost',
  },
  {
    title: 'Miss Limits',
  },
  {
    title: 'K Theory',
  },
  {
    title: 'The Honey Quintet',
  },
  {
    title: 'Lost Vibes',
  },
  {
    title: 'Sway the Hill',
  },
  {
    title: 'Lightnin Morganfield',
  },
  {
    title: 'Clandestine Information',
  },
  {
    title: 'Collective Obligation',
  },
  {
    title: 'Huckleberry',
  },
  {
    title: 'Mosaic Age',
  },
  {
    title: 'Untitled Epithets',
  },
  {
    title: 'Mapping Saturn',
  },
  {
    title: 'Dan King and the Queens',
  },
  {
    title: 'Mr. Burns Wild Ride',
  },
  {
    title: 'Original Film',
  },
  {
    title: 'The Black Knight',
  },
  {
    title: 'Little Black Book',
  },
  {
    title: 'Without Remorse',
  },
  {
    title: 'Stormchaser',
  },
  {
    title: 'Ace of Spades',
  },
  {
    title: 'Sleeping Giant',
  },
  {
    title: 'Clairvoyance',
  },
  {
    title: 'Soulrender',
  },
  {
    title: 'After the Dawn',
  },
  {
    title: 'Dead Messenger',
  },
  {
    title: 'Symmetry',
  },
  {
    title: 'Calypso',
  },
  {
    title: 'Mr. Owl and the Tootsie Pops',
  },
  {
    title: 'Sam Gamgee and the Olyphants',
  },
  {
    title: 'Mythos',
  },
  {
    title: 'The Stanley Parable',
  },
];

const seedTalent = () => Talent.bulkCreate(talentData);

module.exports = seedTalent;

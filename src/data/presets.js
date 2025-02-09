'use strict';

// The wheel used in the game show 'Wheel of Fortune'.
export const PRESET1 = {
  name: 'Wheel of Fortune',
  winningText: 'Result: <b>%s</b>',
  background: '',
  removeWinning: false,
  prizes: [
    { name: '$550', freq: 3, bg: '#CE93D8', text: '#222', hide: false, fontMod: 1 },
    { name: '$400', freq: 3, bg: '#FFF59D', text: '#222', hide: false, fontMod: 1 },
    { name: '$300', freq: 3, bg: '#F48FB1', text: '#222', hide: false, fontMod: 1 },
    { name: '$900', freq: 3, bg: '#ef9a9a', text: '#222', hide: false, fontMod: 1 },
    { name: '$500', freq: 3, bg: '#FFCC80', text: '#222', hide: false, fontMod: 1 },
    { name: '$300', freq: 3, bg: '#80CBC4', text: '#222', hide: false, fontMod: 1 },
    { name: '$900', freq: 3, bg: '#FFCC80', text: '#222', hide: false, fontMod: 1 },
    { name: 'BANKRUPT', freq: 3, bg: '#333', text: '#eee', hide: false, fontMod: 1 },
    { name: '$600', freq: 3, bg: '#CE93D8', text: '#222', hide: false, fontMod: 1 },
    { name: '$400', freq: 3, bg: '#FFF59D', text: '#222', hide: false, fontMod: 1 },
    { name: '$300', freq: 3, bg: '#F48FB1', text: '#222', hide: false, fontMod: 1 },
    { name: 'LOSE A TURN', freq: 3, bg: 'white', text: '#222', hide: false, fontMod: 1 },
    { name: '$800', freq: 3, bg: '#ef9a9a', text: '#222', hide: false, fontMod: 1 },
    { name: '$350', freq: 3, bg: '#CE93D8', text: '#222', hide: false, fontMod: 1 },
    { name: '$450', freq: 3, bg: '#F48FB1', text: '#222', hide: false, fontMod: 1 },
    { name: '$700', freq: 3, bg: '#80CBC4', text: '#222', hide: false, fontMod: 1 },
    { name: '$300', freq: 3, bg: '#FFCC80', text: '#222', hide: false, fontMod: 1 },
    { name: '$600', freq: 3, bg: '#CE93D8', text: '#222', hide: false, fontMod: 1 },
    { name: '$2500', freq: 3, bg: '#81D4FA', text: '#222', hide: false, fontMod: 1 },
    { name: '$300', freq: 3, bg: '#FFF59D', text: '#222', hide: false, fontMod: 1 },
    { name: '$600', freq: 3, bg: '#ef9a9a', text: '#222', hide: false, fontMod: 1 },
    { name: '$300', freq: 3, bg: '#FFCC80', text: '#222', hide: false, fontMod: 1 },
    { name: '$500', freq: 3, bg: '#80CBC4', text: '#222', hide: false, fontMod: 1 },
    { name: 'BANKRUPT', freq: 1, bg: '#333', text: '#eee', hide: false, fontMod: 2 },
    { name: '$10000', freq: 1, bg: '#FFD54F', text: '#222', hide: false, fontMod: 2 },
    { name: 'BANKRUPT', freq: 1, bg: '#333', text: '#eee', hide: false, fontMod: 2 }
  ]
};

// Wheel of Misfortune: SMRT disruption edition.
export const PRESET2 = {
  name: 'Wheel of Misfortune',
  winningText: 'Congratulations! You win: <b>%s</b>!',
  background: 'static/smrt.jpg',
  removeWinning: false,
  prizes: [
    { name: 'No Service', freq: 4, bg: '#FFCC80', text: '#222', hide: false, fontMod: 1 },
    { name: 'Tunnel Ponding', freq: 4, bg: '#F48FB1', text: '#222', hide: false, fontMod: 1 },
    { name: 'Delay 60 mins', freq: 4, bg: '#81D4FA', text: '#222', hide: false, fontMod: 1 },
    { name: 'Lightning Fault', freq: 4, bg: '#B39DDB', text: '#222', hide: false, fontMod: 1 },
    { name: 'Delay 10 mins', freq: 4, bg: '#C5E1A5', text: '#222', hide: false, fontMod: 1 },
    { name: 'Track Fault', freq: 4, bg: '#F48FB1', text: '#222', hide: false, fontMod: 1 },
    { name: 'Delay 40 mins', freq: 4, bg: '#81D4FA', text: '#222', hide: false, fontMod: 1 },
    { name: 'Full-day Closure', freq: 4, bg: '#FFCC80', text: '#222', hide: false, fontMod: 1 },
    { name: 'Train Fault', freq: 4, bg: 'white', text: '#222', hide: false, fontMod: 1 },
    { name: 'Delay 20 mins', freq: 4, bg: '#81D4FA', text: '#222', hide: false, fontMod: 1 },
    { name: 'Signal Fault', freq: 4, bg: '#B39DDB', text: '#222', hide: false, fontMod: 1 },
    { name: 'Delay 10 mins', freq: 4, bg: '#C5E1A5', text: '#222', hide: false, fontMod: 1 },
    { name: 'No Delay', freq: 1, bg: '#111', text: 'white', hide: false, fontMod: 1.4 },
    { name: 'Collision', freq: 2, bg: '#ef9a9a', text: '#222', hide: false, fontMod: 1 },
    { name: 'No Delay', freq: 1, bg: '#111', text: 'white', hide: false, fontMod: 1.4 }
  ]
};

// Wheel of Inquiry: select a person to answer your question.
export const PRESET3 = {
  name: 'Wheel of Inquiry',
  winningText: 'Your turn to answer the question, <b>%s</b>!',
  background: '',
  removeWinning: true,
  prizes: [
    // use defaults - freq: 4, bg: auto, text: #222, hide: false, fontMod: 1
    { name: 'James' },
    { name: 'John' },
    { name: 'Robert' },
    { name: 'Michael' },
    { name: 'William' },
    { name: 'David' },
    { name: 'Richard' },
    { name: 'Charles' },
    { name: 'Mary' },
    { name: 'Patricia' },
    { name: 'Linda' },
    { name: 'Barbara' },
    { name: 'Elizabeth' },
    { name: 'Jennifer' },
    { name: 'Maria' },
    { name: 'Susan' }
  ]
};

// The wheel used in the game show 'Wheel of Fortune'.
export const PRESET4 = {
  name: 'Wheel of Scientific Computing',
  winningText: 'Scientific Computing supports <b>%s</b>?',
  background: '',
  removeWinning: false,
  prizes: [
    { name: 'Image Segmentation', freq: 3, bg: '#CE93D8', text: '#222', hide: false, fontMod: 1, answer: true },
    { name: 'Genome Sequencing', freq: 3, bg: '#FFF59D', text: '#222', hide: false, fontMod: 1, answer: false },
    {
      name: 'Commercial Software Licensing',
      freq: 3,
      bg: '#FFCC80',
      text: '#222',
      hide: false,
      fontMod: 1,
      answer: false
    },
    { name: 'Sequencing Data Analysis', freq: 3, bg: '#F48FB1', text: '#222', hide: false, fontMod: 1, answer: true },
    { name: 'Software Development', freq: 3, bg: '#81D4FA', text: '#222', hide: false, fontMod: 1, answer: true },
    { name: 'Labfolder Support', freq: 3, bg: '#FFCC80', text: '#222', hide: false, fontMod: 1, answer: true },
    { name: 'Machine Learning', freq: 3, bg: '#80CBC4', text: '#222', hide: false, fontMod: 1, answer: true },
    { name: 'Printer Support', freq: 3, bg: '#FFF59D', text: '#222', hide: false, fontMod: 1, answer: false },
    { name: 'Image Acquisition', freq: 3, bg: '#CE93D8', text: '#222', hide: false, fontMod: 1, answer: false },
    { name: 'Spot Detection', freq: 3, bg: '#81D4FA', text: '#222', hide: false, fontMod: 1, answer: true },
    { name: 'Experimental Design', freq: 3, bg: '#F48FB1', text: '#222', hide: false, fontMod: 1, answer: true },
    { name: 'Code Parallelization', freq: 3, bg: '#80CBC4', text: '#222', hide: false, fontMod: 1, answer: true },
    {
      name: 'Research Data Management Support',
      freq: 3,
      bg: '#FFF59D',
      text: '#222',
      hide: false,
      fontMod: 1,
      answer: true
    },
    { name: 'Bitcoin Mining', freq: 3, bg: '#F48FB1', text: '#222', hide: false, fontMod: 1, answer: false },
    { name: 'Coding Support', freq: 3, bg: '#80CBC4', text: '#222', hide: false, fontMod: 1, answer: true },
    { name: 'Chip Design', freq: 3, bg: '#FFCC80', text: '#222', hide: false, fontMod: 1, answer: false },
    { name: 'Cluster Support', freq: 3, bg: '#CE93D8', text: '#222', hide: false, fontMod: 1, answer: false },
    { name: 'Cell Tracking', freq: 3, bg: '#81D4FA', text: '#222', hide: false, fontMod: 1, answer: true },
    {
      name: 'Protein Structure Prediction',
      freq: 3,
      bg: '#FFF59D',
      text: '#222',
      hide: false,
      fontMod: 1,
      answer: true
    },
    { name: 'Data Backup', freq: 3, bg: '#ef9a9a', text: '#222', hide: false, fontMod: 1, answer: false },
    { name: 'Web Application', freq: 3, bg: '#FFCC80', text: '#222', hide: false, fontMod: 1, answer: true },
    { name: 'Data Management Plans', freq: 3, bg: '#80CBC4', text: '#222', hide: false, fontMod: 1, answer: true },
    { name: 'Data Visualization', freq: 3, bg: '#FFD54F', text: '#222', hide: false, fontMod: 1, answer: true },
    { name: 'Purchasing Computer', freq: 3, bg: '#F48FB1', text: '#222', hide: false, fontMod: 1, answer: false },
    { name: 'Hardware Support', freq: 3, bg: '#80CBC4', text: '#222', hide: false, fontMod: 1, answer: false },
    { name: 'Excel Support', freq: 3, bg: '#81D4FA', text: '#222', hide: false, fontMod: 1, answer: false }
  ]
};

export const DEFAULT_PRESETS = [PRESET1, PRESET2, PRESET3, PRESET4];

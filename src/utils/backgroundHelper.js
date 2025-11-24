// src/utils/backgroundHelper.js
import bg1 from '../assets/bg1.jpeg';
import bg2 from '../assets/bg2.jpeg';
import bg3 from '../assets/bg3.jpeg';
import bg4 from '../assets/bg4.png';
import bg5 from '../assets/bg5.jpeg';
import bg6 from '../assets/bg6.jpeg';
import bg7 from '../assets/bg7.jpeg';

const backgroundImages = [
  bg1,
  bg2,
  bg3,
  bg4,
  bg5,
  bg6,
  bg7
];

export const getRandomBackground = () => {
  return backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
};

export const getRandomBackgrounds = (count) => {
  const shuffled = [...backgroundImages].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
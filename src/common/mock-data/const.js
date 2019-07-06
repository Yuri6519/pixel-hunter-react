import {
  FIRST_GAME,
  SECOND_GAME,
  THIRD_GAME,
  PAINT,
  PHOTO,
} from '../constants';

const TASK_1 = 'Угадайте для каждого изображения фото или рисунок?';
const TASK_2 = 'Угадай, фото или рисунок?';
const TASK_3_1 = 'Найдите рисунок среди изображений';
const TASK_3_2 = 'Найдите фото среди изображений';

const paintings = [
  // People
  'https://k42.kn3.net/CF42609C8.jpg',
  // Animals
  'https://k42.kn3.net/D2F0370D6.jpg',
  // Nature
  'https://k32.kn3.net/5C7060EC5.jpg',
];
const photos = [
  // People
  'http://i.imgur.com/1KegWPz.jpg',
  // Animals
  'https://i.imgur.com/DiHM5Zb.jpg',
  // Nature
  'http://i.imgur.com/DKR1HtB.jpg',
];

export const gameFirst = [
  {
    type: FIRST_GAME,
    task: TASK_1,
    data: {
      [paintings[1]]: PAINT,
      [photos[1]]: PHOTO,
    },
  },
  {
    type: FIRST_GAME,
    task: TASK_1,
    data: {
      [photos[0]]: PHOTO,
      [paintings[0]]: PAINT,
    },
  },
  {
    type: FIRST_GAME,
    task: TASK_1,
    data: {
      [paintings[2]]: PAINT,
      [photos[2]]: PHOTO,
    },
  },
];

export const gameSecond = [
  {
    type: SECOND_GAME,
    task: TASK_2,
    data: {
      [paintings[0]]: PAINT,
    },
  },
  {
    type: SECOND_GAME,
    task: TASK_2,
    data: {
      [photos[1]]: PHOTO,
    },
  },
  {
    type: SECOND_GAME,
    task: TASK_2,
    data: {
      [photos[2]]: PHOTO,
    },
  },
];

export const gameThird = [
  {
    type: THIRD_GAME,
    task: TASK_3_1,
    data: {
      [paintings[0]]: PAINT,
      [photos[1]]: PHOTO,
      [paintings[2]]: PAINT,
    },
  },
  {
    type: THIRD_GAME,
    task: TASK_3_2,
    data: {
      [photos[1]]: PHOTO,
      [photos[2]]: PHOTO,
      [paintings[1]]: PAINT,
    },
  },
  {
    type: THIRD_GAME,
    task: TASK_3_1,
    data: {
      [photos[0]]: PHOTO,
      [paintings[0]]: PAINT,
      [photos[1]]: PHOTO,
    },
  },
];

import { gameFirst, gameSecond, gameThird } from './const';

export default () => {
  const data = [];

  data.push(gameFirst[0]);
  data.push(gameFirst[1]);
  data.push(gameFirst[2]);
  data.push(gameSecond[0]);
  data.push(gameSecond[1]);
  data.push(gameSecond[2]);
  data.push(gameThird[0]);
  data.push(gameThird[1]);
  data.push(gameThird[2]);
  data.push(gameFirst[0]);

  return data;
};

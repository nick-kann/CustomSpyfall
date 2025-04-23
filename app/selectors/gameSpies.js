import { useSelector } from 'react-redux';
import { store } from '@app/store';

export const gameSpiesSelector = (state) => {
  const spies = state.game.spies;
  // console.log('Game spies from selector:', spies);
  return spies;
};

export const getGameSpies = () => {
  const spies = gameSpiesSelector(store.getState());
  // console.log('Game spies from getGameSpies:', spies);
  return spies;
};

export const useGameSpies = () => {
  const spies = useSelector(gameSpiesSelector);
  // console.log('Game spies from useGameSpies hook:', spies);
  return spies;
};
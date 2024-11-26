import monstersData from '../../../data/monsters.json';
import { Battle } from '../../models/interfaces/battle.interface';
import { setRandomMonster, setWinner } from './monsters.actions.extended';
import { monstersReducerExtended } from './monsters.reducer.extended';

describe('Monsters Reducer', () => {
  const initialState = {
    selectRandomMonster: null,
    winner: null,
  };

  it('should add the random monster to the state', () => {
    const randomMonster = monstersData.monsters[2];
    const action = { type: setRandomMonster.fulfilled.type, payload: randomMonster }

    const newState = monstersReducerExtended(initialState, action);

    expect(newState).toEqual(
      expect.objectContaining({
        selectRandomMonster: randomMonster,
      })
    );
  });

  it('should add the winner to the state', () => {
    const battleResult: Battle = {
      winner: monstersData.monsters[2],
      tie: false,
    };

    const action = { type: setWinner.type, payload: battleResult };
    const newState = monstersReducerExtended(initialState, action);

    expect(newState).toEqual(
      expect.objectContaining({
        winner: battleResult,
      })
    );
  });
});

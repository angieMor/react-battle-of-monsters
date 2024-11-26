import '@testing-library/jest-dom';

import monstersData from '../../../data/monsters.json';
import { configureStore } from '@reduxjs/toolkit';
import { monstersReducer } from '../../reducers/monsters/monsters.reducer';
import { monstersReducerExtended } from '../../reducers/monsters/monsters.reducer.extended';
import { render, act, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BattleOfMonsters } from '../../pages/battle-of-monsters/BattleOfMonsters.extended';

const store = configureStore({
  reducer: {
    monsters: monstersReducer,
    monstersExtended: monstersReducerExtended,
  },
  preloadedState: {
    monsters: {
      monsters: monstersData.monsters,
      selectedMonster: monstersData.monsters[2],
    },
    monstersExtended: {
      selectRandomMonster: null,
      winner: null,
    },
  }
})

describe('MonsterBattleCardExtended', () => {
  it('renders the monster card correctly with a monster', async () => {
    await act(async () => {
      render (
          <Provider store={store}>
            <BattleOfMonsters />
          </Provider>
      )
    })

    expect(screen.getByTestId('info-card-hp')).toBeInTheDocument();
  });
});

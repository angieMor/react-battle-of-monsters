import { createReducer } from '@reduxjs/toolkit';
import { Battle } from '../../models/interfaces/battle.interface';
import { Monster } from '../../models/interfaces/monster.interface';
import { setRandomMonster, setWinner } from './monsters.actions.extended';

interface MonsterState {
  selectRandomMonster: Monster | null;
  winner: Battle | null;
}

const initialState: MonsterState = {
  selectRandomMonster: null,
  winner: null,
};

export const monstersReducerExtended = createReducer(initialState, builder => {
  // Implement
  builder.addCase(setRandomMonster.fulfilled, (state, action) => ({
    ...state,
    selectRandomMonster: action.payload,
  }));
  builder.addCase(setWinner, (state, action) => ({
    ...state,
    winner: action.payload,
  }));
});
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Monster } from '../../models/interfaces/monster.interface';
import { MonsterService } from './monsters.service';
import { Battle, Players } from '../../models/interfaces/battle.interface';
import { MonsterServiceExtended } from './monsters.service.extended';

function getRandomMonster(playerMonster: Monster, monsters: Monster[]) {
  const removedMonsterPlayerFromMonsters = monsters.filter(
    monster => playerMonster.name !== monster.name,
  );

  const randomNumber = Math.floor(
    Math.random() * removedMonsterPlayerFromMonsters.length,
  );

  return removedMonsterPlayerFromMonsters[randomNumber];
}

export const setRandomMonster = createAsyncThunk<
  Monster | null,
  Monster | null,
  { state: any }
>('monsters/setRandomMonster', async (playerMonster, { getState }) => {
  const state = getState();
  const monsters = state.monsters.monsters;

  const availableMonsters =
    monsters.length > 0 ? monsters : await MonsterService.getAll();

  if (availableMonsters.length === 0 || !playerMonster) return null;

  return getRandomMonster(playerMonster, monsters);
});

export const fetchBattleWins = createAsyncThunk<Battle, Players>(
  'monsters/battle',
  async players => {
    return MonsterServiceExtended.battle(players);
  },
);

export const setWinner = createAction<Battle>('monsters/setWinner');

import React from 'react';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../app/hooks';
import { MonsterBattleCard } from '../../components/monster-battle-card/MonsterBattleCard.extended';
import { MonstersList } from '../../components/monsters-list/MonstersList.extended';
import { Title } from '../../components/title/Title';
import { fetchMonstersData } from '../../reducers/monsters/monsters.actions';
import {
  selectMonsters,
  selectSelectedMonster,
} from '../../reducers/monsters/monsters.selectors';
import {
  BattleSection,
  PageContainer,
  StartBattleButton,
} from './BattleOfMonsters.extended.styled';
import {
  selectRandomMonster,
  selectWinner,
} from '../../reducers/monsters/monsters.selectors.extended';
import { Players } from '../../models/interfaces/battle.interface';
import {
  fetchBattleWins,
  setWinner,
} from '../../reducers/monsters/monsters.actions.extended';
import { WinnerDisplay } from '../../components/winner-display/WinnerDisplay.extended';

const BattleOfMonsters = () => {
  const dispatch = useAppDispatch();

  const monsters = useSelector(selectMonsters);
  const selectedMonster = useSelector(selectSelectedMonster);

  const generatedRandomMonster = useSelector(selectRandomMonster);

  const winnerResult = useSelector(selectWinner);

  useEffect(() => {
    dispatch(fetchMonstersData());
  }, []);

  const handleStartBattleClick = () => {
    const players: Players = {
      monster1Id: selectedMonster?.id,
      monster2Id: generatedRandomMonster?.id,
    };

    dispatch(fetchBattleWins(players)).then(result => {
      if (fetchBattleWins.fulfilled.match(result)) {
        dispatch(setWinner(result.payload));
      }
    });
  };

  return (
    <PageContainer>
      <Title>Battle of Monsters</Title>

      <MonstersList monsters={monsters} />

      {winnerResult && (
        <WinnerDisplay text={winnerResult.winner.name}></WinnerDisplay>
      )}

      <BattleSection>
        <MonsterBattleCard
          title={selectedMonster?.name || 'Player'}
          image={selectedMonster?.imageUrl}
          monster={selectedMonster}
        />
        <StartBattleButton
          data-testid="start-battle-button"
          disabled={selectedMonster === null}
          onClick={handleStartBattleClick}>
          Start Battle
        </StartBattleButton>
        <MonsterBattleCard
          title={generatedRandomMonster?.name || 'Computer'}
          image={generatedRandomMonster?.imageUrl}
          monster={generatedRandomMonster}
        />
      </BattleSection>
    </PageContainer>
  );
};

export { BattleOfMonsters };

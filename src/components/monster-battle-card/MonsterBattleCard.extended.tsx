import React, { Fragment } from 'react';

import { Monster } from '../../models/interfaces/monster.interface';
import {
  BattleMonsterCard,
  BattleMonsterTitle,
  BattleMonsterImage,
  BattleMonsterInfo,
  ProgressBar,
  GrayLine,
} from './MonsterBattleCard.extended.styled';

type MonsterCardProps = {
  monster?: Monster | null;
  title?: string;
  image?: string;
};

interface InfoCardProps {
  infoName: string;
  infoValue: number;
  dataTestId?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  infoName,
  infoValue,
  dataTestId,
}) => {
  return (
    <Fragment>
      <BattleMonsterInfo>{infoName}</BattleMonsterInfo>
      <ProgressBar
        data-testid={dataTestId}
        variant="determinate"
        value={infoValue}
      />
    </Fragment>
  );
};

const MonsterBattleCard: React.FC<MonsterCardProps> = ({
  title,
  image,
  monster,
}) => {
  return (
    <BattleMonsterCard centralized={image ? false : true}>
      <BattleMonsterImage hasImage={image ?? null} src={image} />
      <BattleMonsterTitle>{title!}</BattleMonsterTitle>
      {monster && (
        <Fragment>
          <GrayLine />
          <InfoCard
            infoName="HP"
            infoValue={monster.attack}
            dataTestId="info-card-hp"
          />
          <InfoCard
            infoName="Attack"
            infoValue={monster.attack}
            dataTestId="info-card-attack"
          />
          <InfoCard
            infoName="Defense"
            infoValue={monster.defense}
            dataTestId="info-card-defense"
          />
          <InfoCard
            infoName="Speed"
            infoValue={monster.speed}
            dataTestId="info-card-speed"
          />
        </Fragment>
      )}
    </BattleMonsterCard>
  );
};

export { MonsterBattleCard };

import styled from '@emotion/styled';
import {
  Card,
  LinearProgress,
  linearProgressClasses,
  Typography,
} from '@mui/material';
import { colors } from '../../constants/colors';

export const BattleMonsterCard = styled(Card, {
  shouldForwardProp: prop => prop !== 'centralized',
})<{ centralized?: boolean }>(({ centralized }) => ({
  padding: '13px 11px',
  width: 'calc(307px - 22px)',
  height: '415px',
  background: colors.white,
  boxShadow: '-2px 3px 10px rgba(0, 0, 0, 0.25)',
  borderRadius: '7px',
  display: centralized ? 'flex' : 'auto',
  alignItems: centralized ? 'center' : 'auto',
  justifyContent: centralized ? 'center' : 'auto',
}));

export const BattleMonsterImage = styled.img<{
  hasImage: string | null;
}>(({ hasImage }) => ({
  borderRdius: '7px',
  width: hasImage ? 'inherit' : '',
  height: '150px',
}));

export const GrayLine = styled('div')(() => ({
  width: '100%',
  height: '2px',
  backgroundColor: 'whitesmoke',
}));

export const BattleMonsterInfo = styled('p')(() => ({
  textAlign: 'left',
  fontFamily: 'Roboto',
  fontSize: '13px',
  padding: '10px 0 10px 0',
}));

export const BattleMonsterTitle = styled(Typography)(() => ({
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '36px',
  lineHeight: '42px',
  color: colors.black,
}));

export const ProgressBar = styled(LinearProgress)(() => ({
  height: 8,
  borderRadius: 15,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: colors.progressBarBackground,
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 15,
    backgroundColor: colors.progressColor,
  },
}));

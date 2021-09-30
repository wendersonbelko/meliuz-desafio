import Styled from 'styled-components';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import { RemToPx } from '../../utils/RemToPx';

import ThemeColors from '../../static/theme';

export const Container = Styled(SkeletonTheme).attrs({
  color: ThemeColors.colors.skeletonBackGround,
  highlightColor: ThemeColors.colors.SkeletonHighlightColor,
})``;

export const Card = Styled(Skeleton).attrs({
  count: 1,
  duration: 2,
  delay: 0.5,
  width: RemToPx(12.5), //200px
  height: RemToPx(18.75), //300px
})`
  margin: 0.5rem;
`;

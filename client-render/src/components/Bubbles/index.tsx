import Styled from 'styled-components';
import ReactLoading from "react-loading";
import ThemeColors from '../../static/theme';

const LoadingBubbles = Styled(ReactLoading).attrs({
  color: ThemeColors.colors.text,
  type: 'bubbles',
})`
  align-self: 'center';
  margin: auto;
`;

export const Bubbles = () => {
  return <LoadingBubbles />;
}

import 'styled-components';
import theme from './theme';

// Faz a declaração das variaveis de estilo de acordo coma  estrutura do "theme".
declare module 'styled-components' {
  type ThemeType = typeof theme

  export interface DefaultTheme extends ThemeType {}
}

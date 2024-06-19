/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#1C2631',
    tint: tintColorLight,
    primary: '#00B86B',
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    primaryGreen: '#00B86B',
    inputBorder: '#6783A0',
    inputBackground: '#30445B',
    errorColor: '#E40427',
    placeholder: '#7f8c8d',
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    primaryGreen: '#00B86B',
    inputBorder: '#6783A0',
    inputBackground: '#30445B',
    errorColor: '#E40427',
    mainBackground: '#1C2631',
    placeholder: '#7f8c8d',
  },
};

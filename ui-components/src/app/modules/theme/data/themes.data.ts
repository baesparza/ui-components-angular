import { Theme } from '../interfaces/theme.interface';

export const darkTheme: Theme = {
  name: 'dark',
  properties: {
    '--background': '#1F2125',
    '--on-background': '#fff',
    '--primary': '#2F90FF',
    '--on-primary': '#fff',
    '--secondary': '#474A4F',
    '--on-secondary': '#fff',
    '--surface': '#282A2F',
    '--on-surface': '#dddede',
    '--error': '#E74E3C',
    '--on-error': '#fff'
  }
};

export const lightTheme: Theme = {
  name: 'light',
  properties: {
    /**
     * A primary color is the color displayed most frequently across the app and components.
     */
    '--primary': '#389BFF',
    '--on-primary': '#fff',
    /** 
     * A secondary color provides more ways to accent accent select parts of the UI. 
     */
    '--secondary': '#B2B4B7',
    '--on-secondary': '#fff',
    /**
     * Surface colors affect surfaces of components, such as cards, sheets, and menus. 
     */
    '--surface': '#fff',
    '--on-surface': '#0F0F0F',
    /**
     * The background color appears behind scrollable content. 
     */
    '--background': '#EFF0F4',
    '--on-background': '#0F0F0F',
    /**
     * Error color indicates errors components, such as text fields. 
     */
    '--error': '#EB5945',
    '--on-error': '#fff',
    /**
     * Warning color indicates warning components, such as text fields. 
     */
    '--warning': '#F6BB42',
    '--on-warning': '#fff',
  }
};
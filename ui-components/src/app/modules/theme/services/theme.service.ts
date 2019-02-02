import { Injectable, Inject, EventEmitter } from '@angular/core';
import { Theme } from '../interfaces/theme.interface';
import { THEMES, ACTIVE_THEME } from '../interfaces/theme-tokens.interface';

@Injectable()
export class ThemeService {

    /**
     * Stream in case theme changes
     */
    themeChange = new EventEmitter<Theme>();

    constructor(
        @Inject(THEMES) public themes: Theme[],
        @Inject(ACTIVE_THEME) public theme: string
    ) { }

    /**
     * Return theme with specified name. If theme is not found
     * an exception will be throw.
     * @param name of theme 
     */
    getTheme(name: string): Theme {
        const theme = this.themes.find(t => t.name === name);
        if (!theme) {
            throw new Error(`Theme not found: '${name}'`);
        }
        return theme;
    }

    /**
     * Get theme that's being used
     */
    get activeTheme(): Theme {
        if (this.theme)
            return this.getTheme(this.theme);
    }

    /**
     * Get property value from active theme
     * @param propName specific property of active theme
     */
    getProperty(propName: string): Object {
        return this.activeTheme.properties[propName];
    }

    /**
     * Set new theme for app, and emit changes
     * @param name of theme
     */
    setTheme(name: string): void {
        this.theme = name;
        this.themeChange.emit(this.activeTheme);
    }

    /**
     * Store new theme to Themes.
     * @param theme data
     */
    registerTheme(theme: Theme): void {
        this.themes.push(theme);
    }

    /**
     * Update data and props of theme
     * @param name of theme to be updated
     * @param properties with values to be updated or added to theme
     */
    updateTheme(name: string, properties: { [key: string]: string; }) {

        // update data and props of theme
        const theme = this.getTheme(name);
        theme.properties = {
            ...theme.properties,
            ...properties
        };

        // update changes on theme that's being used
        if (name === this.theme) {
            this.themeChange.emit(theme);
        }
    }

}
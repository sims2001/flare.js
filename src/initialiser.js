import defaults from './defaults.js';
import { fromString } from 'css-color-converter';

class Initializer {
    load(self, options, selector) {
        self.selector = selector;

        const elements = document.querySelectorAll(selector);
        if (!elements.length) {
            return;
        }

        self.options = { ...defaults, ...options };

        //SETUP ELEMENTS
        self.glowElements = [];
        elements.forEach((ele) => {
            const elementBackground = window.getComputedStyle(ele, null).getPropertyValue('background-color');

            let configBackground = self.options.bgColor;

            if (configBackground !== null) {
                configBackground = fromString(configBackground).toRgbString();
            }

            const background = configBackground === null ? elementBackground : configBackground;

            const newGlowElement = {
                element: ele,
                defaultBackground: background,
            };

            self.glowElements.push(newGlowElement);
        });

        self.glowRadius = self.options.glowRadius;
        self.flareColor = fromString(self.options.flareColor).toRgbString();

        self.eventHandlers = [];

        self.isPaused = false;

        self.initialized = true;
    }
}

export const initializer = new Initializer();

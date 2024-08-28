declare module 'flare.js' {
    export interface FlareOptions {
        glowRadius?: number
        bgColor?: null|string
        flareColor?: string
        /**
         * Experimental!
         */
        fluentFlares?: boolean
    }

    export default class FlareJS {
        constructor(elementSelector: any, options: any);

        private initFlares(): void;
        private addFlareEvents(glowObject: any): void;
        private resetBackground(glowObject: any): void;
        private handleFlareEvent(event: any, glowObject: any): void;

        /**
         * Generates the css background property
         * @param {number} x the x position of the FlareEffect
         * @param {number} y the y position of the FlareEffect
         * @param {string} background the background color of the current element;
         * @private
         */
        private generateGradientString(x: any, y: any, background: any): string;
    }
}

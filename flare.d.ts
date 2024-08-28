export default class FlareJS {
    constructor(elementSelector: any, options: any);
    initFlares(): void;
    addFlareEvents(glowObject: any): void;
    resetBackground(glowObject: any): void;
    handleFlareEvent(event: any, glowObject: any): void;
    /**
     * Generates
     * @param {number} x the x position of the FlareEffect
     * @param {number} y the y position of the FlareEffect
     * @param {string} background the background color of the current element;
     * @private
     */
    private generateGradientString;
}

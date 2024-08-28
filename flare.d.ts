/**
 * Welcome to Flare.js!
 * @param {string} elementId CSS QuerySelector
 * @param {object} options options object
 * @returns {object} a new FlareJS object
 */
export default class FlareJS {
    constructor(elementSelector: any, options: any);
    /**
     * Toggle start() and stop() of the FlareJS instance
     * @public
     */
    public toggle(): void;
    /**
     * Start FlareEffects and reset all Backgrounds
     * @public
     */
    public start(): void;
    isPaused: boolean;
    /**
     * Stop FlareEffects and reset all Backgrounds
     * @public
     */
    public stop(): void;
    /**
     * Destroy FlareJS and remove all EventHandlers;
     * @public
     */
    public destroy(): void;
    eventHandlers: any[];
    initialized: boolean;
    /**
     * Reset FlareJS to add EventHandlers to new Elements
     * @public
     */
    public reset(): void;
    /**
     * Initial All FlareEffects
     * @private
     */
    private initFlares;
    /**
     * Add MouseMove and MouseLeave EventHandler to the given glowObject
     * @param {object} glowObject Object containing the Element and its default background
     * @private
     */
    private addFlareEvents;
    /**
     * Set the Elements background to its default Value
     * @param {object} glowObject Object containing the Element and its default background
     * @private
     */
    private resetBackground;
    /**
     * Handle the MouseMove Event
     * @param {event} event MouseMove Event to calculate x and y
     * @param {object} glowObject Object containing the Element and its default background
     * @private
     */
    private handleFlareEvent;
    /**
     * Generates
     * @param {number} x the x position of the FlareEffect
     * @param {number} y the y position of the FlareEffect
     * @param {string} background the background color of the current element;
     * @private
     */
    private generateGradientString;
}

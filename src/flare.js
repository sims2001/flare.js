import {initializer} from './initialiser.js'



/**
 * Welcome to Flare.js!
 * @param {string} elementId CSS QuerySelector
 * @param {object} options options object
 * @returns {object} a new FlareJS object
 */
export default class FlareJS {
    constructor(elementSelector, options) {
        initializer.load(this, options, elementSelector)

        if(this.initialized) this.initFlares()
        else console.error("Couldn't initialize FlareJS");
    }

    /**
     * Toggle start() and stop() of the FlareJS instance
     * @public
     */
    toggle() {
        this.isPaused ? this.start() : this.stop();
    }

    /**
     * Start FlareEffects and reset all Backgrounds
     * @public
     */
    start() {
        if(! this.isPaused) return;
        this.isPaused = false;
        this.options.onStart(this);
    }

    /**
     * Stop FlareEffects and reset all Backgrounds
     * @public
     */
    stop() {
        if(this.isPaused) return;
        this.isPaused = true;
        this.glowElements.forEach((glowObject) => { this.resetBackground(glowObject) });
        this.options.onStop(this);
    }


    /**
     * Destroy FlareJS and remove all EventHandlers;
     * @public
     */
    destroy()  {
        this.eventHandlers.forEach(({ element, event, eventHandler }) => {
            element.removeEventListener(event, eventHandler);
        });
        this.eventHandlers = [];
        this.initialized = false;
        this.options.onDestroy(this);
    }


    /**
     * Reset FlareJS to add EventHandlers to new Elements
     * @public
     */
    reset() {
        this.destroy();
        this.options.onReset(this);
        this.constructor(this.selector, this.options);
    }

    /**
     * Initial All FlareEffects
     * @private
     */
    initFlares() {
        this.glowElements.forEach((glowObject) => {
            this.addFlareEvents(glowObject)
        })
    }

    /**
     * Add MouseMove and MouseLeave EventHandler to the given glowObject
     * @param {object} glowObject Object containing the Element and its default background
     * @private
     */
    addFlareEvents(glowObject) {
        this.resetBackground(glowObject);

        const { element } = glowObject;

        let glowHandler = (e) => {};

        if(! this.options.fluentFlares){
            glowHandler = (e) => this.handleFlareEvent(e, glowObject);
        } else {
            glowHandler = (e) => {
                this.glowElements.forEach((g) => { this.handleFlareEvent(e, g); });
            };
        }

        element.addEventListener('mousemove', glowHandler)
        const leaveHandler = () => this.resetBackground(glowObject);
        element.addEventListener('mouseleave', leaveHandler)

        this.eventHandlers.push({element: element, event: 'mousemove', eventHandler: glowHandler});
        this.eventHandlers.push({element: element, event: 'mouseleave', eventHandler: leaveHandler});
    }

    /**
     * Set the Elements background to its default Value
     * @param {object} glowObject Object containing the Element and its default background
     * @private
     */
    resetBackground(glowObject) {
        if(this.isPaused) return;

        const { element, defaultBackground } = glowObject;

        element.style.background = defaultBackground;
    }

    /**
     * Handle the MouseMove Event
     * @param {event} event MouseMove Event to calculate x and y
     * @param {object} glowObject Object containing the Element and its default background
     * @private
     */
    handleFlareEvent(event, glowObject) {
        if(this.isPaused) return;

        const { element, defaultBackground } = glowObject;

        let x = event.pageX - element.offsetLeft;
        let y = event.pageY + document.querySelector('body').scrollTop - element.offsetTop;

        element.style.background = this.generateGradientString(x, y, defaultBackground);
    }

    /**
     * Generates
     * @param {number} x the x position of the FlareEffect
     * @param {number} y the y position of the FlareEffect
     * @param {string} background the background color of the current element;
     * @private
     */
    generateGradientString(x, y, background) {
        const xy = x + ' ' + y;
        return `radial-gradient(circle ${this.glowRadius}px at ${x}px ${y}px, ${this.flareColor}, ${background})`;
    }
}

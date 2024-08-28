import {initializer} from './initialiser.js'

export default class FlareJS {
    constructor(elementSelector, options) {
        initializer.load(this, options, elementSelector)

        if(this.initialized) this.initFlares()
        else console.error("Couldn't initialize FlareJS");
    }

    initFlares() {
        this.glowElements.forEach((glowObject) => {
            this.addFlareEvents(glowObject)
        })
    }

    addFlareEvents(glowObject) {
        this.resetBackground(glowObject);

        const { element } = glowObject;

        if(! this.options.fluentFlares){
            element.addEventListener('mousemove', (e) => { this.handleFlareEvent(e, glowObject); })

        } else {
            element.addEventListener('mousemove', (e) => {
                this.glowElements.forEach((g) => {
                    this.handleFlareEvent(e, g);
                })
            })
        }
        element.addEventListener('mouseleave', () => { this.resetBackground( glowObject ); })
    }

    resetBackground(glowObject) {
        const { element, background } = glowObject;

        element.style.background = background;
    }

    handleFlareEvent(event, glowObject) {
        const { element, background } = glowObject;

        let x = event.pageX - element.offsetLeft;
        let y = event.pageY + document.querySelector('body').scrollTop - element.offsetTop;

        element.style.background = this.generateGradientString(x, y, background);
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
        return `radial-gradient(circle ${this.options.glowRadius}px at ${x}px ${y}px, ${this.options.flareColor}, ${background})`;
    }
}

import defaults from "./defaults.js";
import Flare from "./flare.js";

export default class Initializer {

    load(self, options, selector) {
        self.glowGrounds = document.querySelectorAll(selector);

        if(! self.glowGrounds.length){
            console.error("No elements found.");
        }

        self.options = { ...defaults, ...options };

    }

}

export let initializer = new Initializer();
import { initializer } from "./initialiser.js";

export default class FlareJS {
    constructor(elementSelector, options){

        initializer.load(this, options, elementSelector, options);

        this.initFlares();
    }

    initFlares() {
        this.glowGrounds.forEach((glowGround) => {
            this.addFlare(glowGround);
        })

    }

    addFlare(el) {
        el.style.background = this.options.backgroundColor;

        el.addEventListener("mousemove", (e) => {

            let x = e.pageX - el.offsetLeft;
            let y = e.pageY + document.querySelector("body").scrollTop - el.offsetTop;
            let xAndY = x + " " + y;

            el.style.background = "-webkit-gradient(radial, " + xAndY + ", 0, " + xAndY + ", " + this.options.glowRadius + ", from(" + this.options.flareColor + "), to(rgba(254,1,154,0.0))), " + this.options.backgroundColor;
            el.style.background = "-moz-radial-gradient(" + x + "px " + y + "px 45deg, circle, " + this.options.flareColor + " 0%, " + this.options.backgroundColor + " " + this.options.glowRadius + "px)";

        });

        el.addEventListener("mouseleave", (e) => {
            el.style.background = this.options.backgroundColor;
        })
    }


}
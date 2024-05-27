
declare module 'flarejs' {
    export interface FlareOptions {
        glowRadius? :number;
        backgroundColor? :string;
        flareColor? :string;
    }

    export default class FlareJS {
        constructor(elementSelector :string, options: FlareOptions);
    }
}
export default class Display {
    readonly width: number;
    readonly height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    public getAspectRatio() : number
    {
        return this.width / this.height;
    }
};


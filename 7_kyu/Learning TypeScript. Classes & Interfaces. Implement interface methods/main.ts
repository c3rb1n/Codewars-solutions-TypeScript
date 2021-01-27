interface IGeometricFigure {
    area: () => number;
    perimeter: () => number;
}

export class Square implements IGeometricFigure {
    side: number;
    
    constructor(side: number) {
        this.side = side;
    };
    
    area = (): number => this.side ** 2;
    perimeter = (): number => this.side * 4;
}

export class Circle implements IGeometricFigure {
    radius: number;
    
    constructor(radius: number) {
        this.radius = radius;
    };
    
    area = (): number => Math.PI * this.radius ** 2;
    perimeter = (): number => 2 * Math.PI * this.radius;
}
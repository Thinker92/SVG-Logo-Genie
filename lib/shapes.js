class Shape {
    constructor(color){
        this.color = color;
    }
    setColor(color) {
        this.color = color;
    }
    render() {
        return '';
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="50" cy="50" r="25" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="25" y="25" width="50" height="50" fill="${this.color}" />`;
    }
}

module.exports = {Circle, Square}
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

module.exports = {Circle}
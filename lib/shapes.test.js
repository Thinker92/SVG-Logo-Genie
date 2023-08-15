const { Circle, Square, Triangle } = require('./shapes.js');

test('Circle render method', () => {
    const circle = new Circle('blue');
    expect(circle.render()).toBe('<circle cx="150" cy="100" r="80" fill="blue" />');
});

test('Square render method', () => {
    const square = new Square('red');
    expect(square.render()).toBe('<rect x="75" y="50" width="150" height="150" fill="red" />');
});

test('Square render method', () => {
    const triangle = new Triangle('green');
    expect(triangle.render()).toBe('<polygon points="150,30 30, 170 270,170" fill="green" />');
});

const {Circle, Square} = require('../lib/shapes');

test('Circle render method', () => {
    const circle = new Circle('blue');
    expect(circle.render()).toBe('<circle cx="50" cy="50" r="25" fill="blue" />');
});

test('Square render method', () => {
    const square = new Square('red');
    expect(square.render()).toBe('<rect x="25" y="25" width="50" height="50" fill="red" />');
});

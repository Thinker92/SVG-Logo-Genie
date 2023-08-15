const {Circle} = require('../lib/shapes');

test('Circle render method', () => {
    const circle = new Circle('blue');
    expect(circle.render()).toBe('<circle cx="50" cy="50" r="25" fill="blue" />');
});

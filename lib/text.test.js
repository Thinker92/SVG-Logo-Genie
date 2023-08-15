const Text = require('./text.js');

test('Text render method', () => {
    const text = new Text('SVG', 'white');
    expect(text.render()).toBe(`<text x="150" y="125" text-anchor="middle" dominant-baseline="middle" font-weight="bold" font-size="30" fill="white">SVG</text>`);
})
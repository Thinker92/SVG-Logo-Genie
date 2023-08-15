const Text = require('../lib/text');

test('Text render method', () => {
    const text = new Text('SVG', 'white');
    expect(text.render()).toBe(`<text x="50" y="60" fill="white">SVG</text>`);
})
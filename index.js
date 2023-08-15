import {Circle, Square, Triangle} from './lib/shapes.js'
import { getUserInput } from './lib/input.js';
import Text from './lib/text.js';

getUserInput()
    .then(answers => {
        let shape;
        switch (answers.shape){
            case 'Circle':
                shape = new Circle(answers.shapeColor);
                break;
            case 'Square':
                shape = new Square(answers.shapeColor);
                break;
            case 'Triangle':
                shape = new Triangle(answers.shapeColor);
                break;
        }
        const text = new Text(answers.text, answers.textColor);

        const svg = `<svg height="100" width="100">
                        ${shape.render()}
                        ${text.render()}
                    </svg>`;
        
        console.log(svg);
    })
import {Circle, Square, Triangle} from './lib/shapes.js'
import { getUserInput } from './lib/input.js';
import Text from './lib/text.js';
import { writeToFile} from './lib/writeToFile.js'

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
        let textRender;
        if (shape instanceof Circle){
            textRender = text.renderForCircle();
        } else {
            textRender = text.render();
        }

        const svg = `<svg height="200" width="300">
                        ${shape.render()}
                        ${textRender}
                    </svg>`;
        
        console.log(svg);
        writeToFile(`./example/logo_${answers.text}.svg`,svg);
    })
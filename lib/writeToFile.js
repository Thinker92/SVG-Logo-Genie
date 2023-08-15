import fs from 'fs';

function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if (err) {
            console.error('An error occured when writing the file:', err);
            return;
        }
        console.log(`Generated ${filename}`);
    })    
}

export {writeToFile};
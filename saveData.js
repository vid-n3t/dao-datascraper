'use strict';

// require npm modules
const fs = require('fs');

module.exports = (outputPath, data) => {

    // save data to outputPath
    fs.writeFile(outputPath, data, (err) => {

        if (err) {
            process.stdout.write(`Error: ${err}\n`);
        }

        process.stdout.write(`File saved: ${outputPath}\n`);

    });

};

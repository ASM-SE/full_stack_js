'use strict';


const fs = require('fs');
const FILE_PATH = 'C:/Users/Anderson/full_stack_js/NodeJS/jobs/api/data/empresas-sao-carlos.xlsx'

fs.stat( FILE_PATH, function(err, stat) {
    if (err) {
        if ('ENOENT' == err.code) {
            //file did'nt exist so for example send 404 to client
            console.log("Nope!");
        } else {
            //it is a server error so for example send 500 to client
            console.log("Nope again!");
        }
    } else {
      console.log("Ok!");
        //every thing was ok so for example you can read it and send it to client
    }
} );

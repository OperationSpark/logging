#!/usr/bin/env node

/**
 * required modules
 */
var fs = require("fs");
var util = require("util");

/**
 * example datatypes
 */
var simpleString = "A simple string";
var simpleObject = { a: simpleString };
var complexObject = { 
  a: 'value a',
  b: 'value b',
  c: simpleObject
};
var now = new Date();

// TODO 1 : Log a message //
console.log('All about logging');

// TODO 2 : log the simpleString variable //
console.log(simpleString);

// TODO 3 : log the simpleObject complexObject variables //
console.log(simpleObject);
console.log(complexObject);

// TODO 4 : log the now date //
console.log(now);

/* 
 * TOOD 5 : Using console.log() to introspect the incoming data, 
 * figure out how to pull out a list of fullnames from the data returned 
 * the loadjson method:
 */
loadjson('people.json', function (err, data) {
    if (err) return console.log('whoa no, we got an error: %s', err);
     
    /*
     * Get the students to run the introspection steps, something like 
     * these 3 steps:
     */
    // 5.1 // 
    //console.log(data);
    
    // 5.2 //
    // for (var i = 0; i < data.length; i++) {
    //     console.log(data[i].firstName + ' ' + data[i].lastName);
    // }
    
    // 5.3 //
    var fullnames = [];
    for (var i = 0; i < data.length; i++) {
        fullnames.push(data[i].firstName + ' ' + data[i].lastName);
    }
    console.log(fullnames);
});

// TODO 6 : Insepct something using the util.inspect function //
// console.log(util.inspect(console, { showHidden: true, depth: null }));

function loadjson(filepath, callback) {
    fs.exists(filepath, function (exists) {
        if (exists) {
            fs.readFile(filepath, function (err, data) {
                if (err) return callback(err);
                var parsed;
                try {
                    parsed = JSON.parse(data);
                } catch (err) {
                    return callback(err);
                }
                callback(err, parsed);
            });     
        } else {
            callback(new Error('loadjson: No file found at ' + filepath));
        }
    });
}
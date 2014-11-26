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


// TODO 2 : log the simpleString variable //


// TODO 3 : log the simpleObject complexObject variables //


// TODO 4 : log the now date //


/* 
 * TOOD 5 : Using console.log() to introspect the incoming data, 
 * figure out how to pull out a list of fullnames from the data returned 
 * the loadjson method:
 */
loadjson('people.json', function (err, data) {
    if (err) return console.log('whoa no, we got an error: %s', err);
    
    // 5.1 // 
    
    
    // 5.2 //
    
    
    // 5.3 //
    
});


// TODO 6 : Insepct something using the util.inspect function //


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
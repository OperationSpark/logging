Logging in JavaScript & Node
=============
A little ditty on using console.log() for introspecting objects and debugging at runtime...

**Table of Contents**

- [Logging in JavaScript & Node](#)
- [Installation](#)
		- [On Cloud9](#)
- [Lesson Steps](#)

# Installation

### On Cloud9

Create a new Cloud9 workspace for Node.js

1. From your Cloud9 Dashboard, find in the upper left corner and click the green button, "Create New Workspace".
Select "Clone From URL".
2. In the "Source URL" form input, copy and paste in the following URL:

        https://github.com/OperationSpark/logging.git

3. In the environment selection box, select "Node.js".
4. Finally, click the green button "Create".

Nice, you're in business...

---

# Lesson Steps

Logging is an essentials part of developing applications.  

During development, logging helps developers introspect and debug an app, and in production, once an app is running live, logging allows the development team to record inputs, expectations, and error messages.

In large applications, it can be useful to allow objects to log the fact that they are handling a transaction, so new team members can understand the logical flow or lifecycle of the app just by reading their IDE's log console.

In the JavaScript stack, including JavaScript executed in web-browsers and in the Node.js environment, we have access to logging capabilities through the globally accessable object, `console`.  The `console` object exposes a `log` method, and the log method takes a `String` or an `Object` to be converted to a `String`, and will print that `String` to the console's output stream.  We utilize it by invoking the method like:

    console.log('some log message');

Let's try it out in an app: Open of the `app.js` file and find TODO 1, and create a log message, like so:

**TODO 1**
```javascript
// TODO 1 : Log a message //
console.log('All about logging');
```

From the command line, run the app, like so:

    myuser@logging:~/workspace $ ./app.js 

Here, we're just providing a String literal to the log method of the console, which when we run the app, prints to the screen:

    myuser@logging:~/workspace $ ./app.js 
    All about logging

Let's do some more logging:

Notice the three variables listed at the top of the file:

```javascript
var simpleString = "A simple string";
var simpleObject = { a: simpleString };
var complexObject = { 
  a: 'value a',
  b: 'value b',
  c: simpleObject
};
var now = new Date();
```

`simpleString` is exactly that, a primative plain old JavaScript String.  Let's throw that into the console.log() function:

**TODO 2**

```javascript
// TODO 2 : log the simpleString variable //
console.log(simpleString);
```

Surprize, surprize, the log method evaluated and printed the value of the `simpleString` variable, "A simple string".

Logging becomes powerful for debugging when we realize we can introspect and log any type of object.  Objects that have nested data-structures will also be converted to printable String versions:

**TODO 3**

```javascript
// TODO 3 : log the simpleObject complexObject variables //
console.log(simpleObject);
console.log(complexObject);
```

Now when we run the app, we get:

    myuser@logging:~/workspace $ ./app.js 
    All about logging
    A simple string
    { a: 'A simple string' }
    { a: 'value a', b: 'value b', c: { a: 'A simple string' } }

...the `console.log()` converted our more complex objects to Strings so we could introspect them!


**TODO 4**

Ok then, let's try logging a Date:

```javascript
// TODO 4 : log the now date //
console.log(now);
```

Interesting, `console.log()` calls the `toString()` method of the `Date` to format a `String` representing all the details fo the `Date`, `now`.

    myuser@logging:~/workspace $ ./app.js 
    All about logging
    A simple string
    { a: 'A simple string' }
    { a: 'value a', b: 'value b', c: { a: 'A simple string' } }
    Tue Nov 25 2014 19:10:20 GMT+0000 (UTC)


**TODO 5**

**Alrighty, let's get real:** Imagine you were loading some data from a third-party API and maybe the API documentation isn't up to date (welcome to the real world), so you're not sure what the data-structure will be for values returned.  And, if for some reason (say it was 1991), you couldn't use the debugger of your IDE, you might lean on `console.log()` to instrospect the data returned so you can understand its structure, then pull out the values you need for your purposes.

```javascript
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
```

In our exercise, we're invoking a function named `loadjson` to load the people.json file.  Once loaded, we'll have access to the people data in the `data` parameter.

Let's use `console.log()` to instrospect that data, find out its structure and figure out how we can get a list of full-names from that data.

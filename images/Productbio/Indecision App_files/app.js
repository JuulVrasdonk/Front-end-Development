'use strict';

console.log('App.js is running!');

// JSX - Javascript XML = Javascript syntax extension
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'This is some info.'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var userName = 'Mike';
var age = 19;

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        userName
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        React.createElement(
            'strong',
            null,
            age
        )
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        React.createElement(
            'strong',
            null,
            location
        )
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);

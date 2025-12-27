import React from 'react';
import ReactDOM from 'react-dom/client';


const element = React.createElement('div', { id: 'parent', key: 'parent' }, [
    React.createElement('div', { id: 'child1', key: 'child1' }, [
        React.createElement('h1', { id: 'heading1', key: 'heading1' }, 'This is heading.'),
        React.createElement('h2', { id: 'heading2', key: 'heading2' }, 'This is a subheading')
    ]),
    React.createElement('div', { id: 'child2', key: 'child2' }, [
        React.createElement('h3', { id: 'heading3', key: 'heading3' }, 'This is heading3'),
        React.createElement('h4', { id: 'heading4', key: 'heading4' }, 'This is heading4')
    ])
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);

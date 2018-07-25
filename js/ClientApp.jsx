import React from 'react';
import { render } from 'react-dom';

const ce = React.createElement;

const MyTitle = function(props) {
  return ce(
    'div',
    null,
    ce('h1', { style: { color: props.color } }, props.title)
  );
};
const MyFirstComponent = function() {
  return ce(
    'div',
    null,
    ce(MyTitle, { title: 'Stranger things', color: 'LimeGreen' }),
    ce(MyTitle, { title: 'Altered Carbon', color: 'Green' }),
    ce(MyTitle, { title: 'Sense 8', color: 'Lime' })
  );
};

render(React.createElement(MyFirstComponent), document.getElementById('app'));

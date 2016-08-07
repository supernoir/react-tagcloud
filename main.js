import React from 'react';
import ReactDOM from 'react-dom';
import Tagcloud from './tagcloud';

ReactDOM.render(
    <Tagcloud tags={allTags}/>,
    document.getElementById('app')
);
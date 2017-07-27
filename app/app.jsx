var React = require('react');
var ReactDOM = require('react-dom');
var {Route,Router} = require('react-router-dom');
var createHashHistory = require('history').createHashHistory;

var Layout = require('Layout');

//Foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//App css
require('style-loader!css-loader!sass-loader!applicationStyles')

ReactDOM.render(
    <Router history={createHashHistory()}>
        <Route path="/" component={Layout} />
    </Router>
, document.getElementById('container'))
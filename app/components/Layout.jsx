var React = require('react');
var {Switch, Route, NavLink} = require('react-router-dom');

const Layout = () => (
    <div>

        <div className="grid-x grid-padding-x small-up-2 medium-up-2 large-up-2 large-offset-4">
            <div className="cell text-center">                
                Main page
                <Switch>                    
                </Switch>
            </div>            
        </div>        
    </div>
);

module.exports = Layout;
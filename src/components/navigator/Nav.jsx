import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import React from 'react';

const Nav = () => {
    return (
        <>
            <Link to="groups">
                <h1>Dashboard</h1>
            </Link>
        </>
    );
}

const ConnectedNav = connect(/** mapStateToProp */ state => state )(Nav)
export default ConnectedNav;
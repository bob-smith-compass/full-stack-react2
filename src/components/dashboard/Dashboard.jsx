import React from 'react';
// import { store } from '../../store/index';

const Dashboard = (props) => {
    
    return (
        <div>
            <h3>Dashboard</h3>
            {/* {JSON.stringify(props.store)} */}
            {/* {JSON.stringify(store.getState())} */}
            {JSON.stringify(props.store.getState())}
        </div>
    );
}

export default Dashboard;

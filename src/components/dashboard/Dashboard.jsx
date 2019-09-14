import React from 'react';
// import { store } from '../../store/index';
import { connect } from 'react-redux';

const Dashboard = ({groups}) => {
    
    return (
        <div>
            <h3>Dashboard</h3>
            {/* {JSON.stringify(props.store)} */}
            {/* {JSON.stringify(store.getState())} */}
            {/* {JSON.stringify(props.store.getState())} */}
            {JSON.stringify(groups)}
        </div>
    );
}

const ConnectedDashboard = connect(mapStateToProps)(Dashboard);
export default ConnectedDashboard;

function mapStateToProps(state){
    /**
     * whatever mapStateToProps returns
     * becomes props of this component
     */
    return {
        groups: state.groups
    }
}

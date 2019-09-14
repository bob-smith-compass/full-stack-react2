import React from 'react';

const Group = ({group}) => {
    return (
        <div>
            <h3>{group.name}</h3>
            <h4>{group.id}</h4>
            <h5>{group.owner}</h5>
        </div>
    );
}

export default Group;

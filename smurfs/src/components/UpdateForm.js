import React from 'react';

const UpdateForm = props => {
    return (
        <form onSubmit={e => props.updateSmurf(e, props.smurf.id)}>
            <input type="text" placeholder="Name" onChange={props.handleInput} value={props.name}/>
            <input type="number" placeholder="Age" onChange={props.handleInput} value={props.smurf.age}/>
            <input type="number" placeholder="Height" onChange={props.handleInput} value={props.smurf.height}/>
            <button>Update Smurf</button>
        </form>
    );
}

export default UpdateForm;
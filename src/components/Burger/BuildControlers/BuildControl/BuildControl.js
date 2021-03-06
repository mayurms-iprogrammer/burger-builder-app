import Classes from './BuildControl.css';
import React from 'react';
const buildControl = (props) => {
    return (
        <div className={Classes.BuildControl}>
            <div className={Classes.Label}> {props.label}</div>
            <button className={Classes.Less} onClick={props.removed}
            disabled={props.disabled}
            >Less</button>

            <button className={Classes.More} onClick={props.added}>More</button>
        </div>
    )
}
export default buildControl;
import React, { createContext, useContext } from "react";
import Reservation from "./Reservation";

export const ClassesContext = createContext();

const SubComp = () => {
    const [ classes, setClasses ] = useContext(ClassesContext);
    console.log(classes);

    return (
        <div className='Sub-Component'>
            <SubComp2 />
            <br />
            {/* <SubComp3 classes={classes} setClasses={setClasses} /> */}
            <Reservation />
        </div>
    )
}

const SubComp2 = () => {
    const { dispatch } = useContext(ClassesContext);

    return (
        <div className='Sub-Component2'>
            <h2>Client</h2>
            <h4>Class time: </h4>
            <h4>Date: </h4>
            <h4>Duration: </h4>
            <h4>Class type: </h4>
            <h4>Intensity: </h4>
            <h4>Location: </h4>
            <button>Add Class</button>
        </div>
    )
}

const SubComp3 = () => {
    const { dispatch } = useContext(ClassesContext);
    // console.log(dispatch);

    return (
        <div className='Sub-Component2'>
            <h2>Instructor</h2>
            <h4>Name: </h4>
            <h4>Type: </h4>
            <h4>Start Time: </h4>
            <h4>Duration: </h4>
            <h4>Intensity Level: </h4>
            <h4>Location: </h4>
            <h4>Current Attendies: </h4>
            <h4>Max Class Size: </h4>
            <button>Create Punch Pass</button>
            <br />
            <button>Process Payment</button>
            <br /><br />
        </div>
    )
}

export default SubComp;

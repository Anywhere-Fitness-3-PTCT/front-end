const SubComp = () => {
    const { classes, setClasses } = useContext(ClassesContext);

    return (
        <div className='Sub-Component'>
            <h2>Classes</h2>
            <SubComp2 />
            <br />
            <SubComp3 classes={classes} setClasses={setClasses} />
            <Reservation />
        </div>
    )
}

const SubComp2 = () => {
    const [classes, setClasses] = useContext(ClassesContext);

    const addClass = () => {
        setClasses({
            ...classes,
            time: '',
            date: '',
            duration: '',
            type: '',
            intensity: '',
            location: ''
        })
    }

    return (
        <div className='Sub-Component2'>
            <h4>Class time: </h4>
            <h4>Date: </h4>
            <h4>Duration: </h4>
            <h4>Class type: </h4>
            <h4>Intensity: </h4>
            <h4>Location: </h4>
            <button onClick={addClass}>Add Class</button>
        </div>
    )
}

const SubComp3 = () => {
    // const { classes } = useContext(ClassesContext);

    return (
        <div className='Sub-Component2'>
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

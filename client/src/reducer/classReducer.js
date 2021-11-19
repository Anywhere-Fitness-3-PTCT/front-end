export const ADD_CLASS = 'ADD_CLASS';
export const CREATE_PUNCH = 'CREATE_PUNCH';

export const setClasses = (name, type, time, duration, intensity, location, attendies, size) => {
    return({type:ADD_CLASS, payload:{name, type, time, duration, intensity, location, attendies, size}})
}

export const initialState = {
    name: '',
    type: '',
    time: '',
    date: '',
    duration: '',
    intensity: '',
    location: '',
    attendies: '',
    size: ''
}

export const reducer = (state, action) => {
    switch (action.type) {
        case(ADD_CLASS):
            return({...state, })
        default:
            return (state);
    }
}

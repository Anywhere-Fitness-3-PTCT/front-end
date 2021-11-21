import React from "react";
import { initialState } from "../reducer/classReducer";
import { ClassesContext } from "./Class";

class PostClass extends React.Component {
    constructor(ClassesContext) {
        super(ClassesContext);
        this.state = initialState;
        console.log(initialState);
    }

    handleChange = e => {
        this.setState({
            addClass: {
                ...this.state.addClass, [e.target.name]: e.target.value
            }
        });
    };

    postClass = e => {
        e.preventDefault();
        this.post.postClass(this.state.addClass);
    };
    
    render() {
        return (
            <div className='add-class-form'>
                <h2>Add Class</h2>
                <form onSubmit={this.postClass}>
                    <input
                        type='text'
                        name='instructor'
                        placeholder='instructor'
                        onChange={this.handleChange}
                        // value={this.state.addClass.instructor}
                        input />
                    <input
                        type='text'
                        name='name'
                        placeholder='name'
                        onChange={this.handleChange}
                        // value={this.state.addClass.name}
                    />
                    <input
                        type='text'
                        name='date'
                        placeholder='date'
                        onChange={this.handleChange}
                        // value={this.state.addClass.date}
                    />
                    <input
                        type='text'
                        name='duration'
                        placeholder='duration'
                        onChange={this.handleChange}
                        // value={this.state.addClass.data}
                    />
                    <input
                        type='text'
                        name='type'
                        placeholder='type'
                        onChange={this.handleChange}
                        // value={this.state.addClass.data}
                    />
                    <input
                        type='text'
                        name='intensity'
                        placeholder='intensity'
                        onChange={this.handleChange}
                        // value={this.state.addClass.data}
                    />
                    <input
                        type='text'
                        name='location'
                        placeholder='location'
                        onChange={this.handleChange}
                        // value={this.state.addClass.data}
                    />
                    <input
                        type='integer'
                        name='capacity'
                        placeholder='capacity'
                        onChange={this.handleChange}
                        // value={this.state.addClass.data}
                        />
                    <input
                        type='integer'
                        name='reservations'
                        placeholder='reservations'
                        onChange={this.handleChange}
                        // value={this.state.addClass.data}
                        />
                </form>
            </div>
        );
    }
}

export default PostClass;

import React from 'react';

export default function Form(props) {
    const {
        values,
        onInputChange,
        onSubmit,
    } = props


    return (
        <form onSubmit={onSubmit}>
            <div>
                <h2>Build The Team!</h2>
                <button>Submit Member</button>
            </div>

            <div>
                <h4>General Information</h4>
                
                <label>Member Name:&nbsp;
                    <input 
                    type='text'
                    name='name'
                    value={values.name}
                    onChange={onInputChange}
                    maxLength='100'
                
                    />
                </label>&nbsp;

                <label>Email:&nbsp;
                    <input 
                    type='email'
                    name='email'
                    value={values.email}
                    onChange={onInputChange}
                    maxLength='100'
                    
                    />
                </label>&nbsp;

                <label>Role:&nbsp;
                    <select
                        name='role'
                        value={values.role}
                        onChange={onInputChange}
                    >
                        <option value=''>-- Select a Role --</option>
                        <option value='Backend Engineer'>Backend Engineer</option>
                        <option value='Frontend Engineer'>Frontend Engineer</option>
                        <option value='Designer'>Designer</option>
                        <option value='Marketing'>Marketing</option>
                        <option value='Project Manager'>Project Manager</option>
                    </select>
                </label>
            </div>
            <div>
                <h4>-- Members Below --</h4>
            </div>
        </form>
    )
}
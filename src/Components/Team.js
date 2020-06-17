import React from 'react';

export default function Team(props) {
    const { details } = props

    if (!details) {
        return <h3>Working fetching your Team Member&apos;s details...</h3>
    }

    return (
        <div>
            <h2>{details.name}</h2>
            <p>Age: {details.age}</p>
            <p>Favorite Food: {details.favFood}</p>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
            <p>Salary: {details.salary}</p>
        </div>
    )
}
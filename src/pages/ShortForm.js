import React, { useState } from 'react';

function ShortForm() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submit = (event) => {
        event.preventDefault()
        console.log(firstName);
        console.log(lastName);
        console.log(email);
        console.log(password);
    }
    return (
        <div className='mt-4'>
            <form onSubmit={submit}>
                <label htmlFor='name'>First Name</label><br />
                <input className='border' type='text' name='firstname' id='firstname' onBlur={(e) => setFirstName(e.target.value)} /><br />
                <label htmlFor='name'>Last Name</label><br />
                <input className='border' type='text' name='lastname' id='lastname' onBlur={(e) => setLastName(e.target.value)} /><br />
                <label htmlFor='name'>Email</label><br />
                <input className='border' type='text' name='email' id='email' onBlur={(e) => setEmail(e.target.value)} /><br />
                <label htmlFor='name'>Password</label><br />
                <input className='border' type='text' name='password' id='password' onBlur={(e) => setPassword(e.target.value)} /><br />
                <button className='btn bg-red-200 p-2 rounded mt-2' type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default ShortForm;
import React,{useState} from 'react';

const AddUserForm = (props) => {
    const InitialState = {id: null,name: '',username: ''}
    const [user,setUser] = useState(InitialState)

    const handleInputChange = (event) => {
        const {name,value} = event.target;
        setUser({...user,[name]:value})
    }

    const SubmitUserData = (event) => {
        event.preventDefault();
        if(!user.name || !user.username) return
        props.addUser(user)
        setUser(InitialState);
    }

    return(
        <form>
            <label>Name</label>
            <input type="text" name="name" onChange={handleInputChange} value={user.name}/>
            <label>Username</label>
            <input type="text" name="username" onChange={handleInputChange} value={user.username}/>
            <button onClick={SubmitUserData}>Add New User</button>
        </form>
    )
}

export default AddUserForm;
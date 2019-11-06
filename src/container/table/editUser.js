import React,{useState,useEffect} from 'react';

const EditUser = (props) => {

    const [currentUser,setCurrentUser] = useState(props.passeditUser);

    useEffect(() => {
        setCurrentUser(props.passeditUser)
    }, [props])

    const handleInputChange = (event) => {
        const {name,value} = event.target;
        setCurrentUser({...currentUser,[name]:value});
    }

    return(
        <form>
            <label>Name</label>
            <input type="text" name="name" value={currentUser.name} onChange={handleInputChange}/>
            <label>Username</label>
            <input type="text" name="username" value={currentUser.username} onChange={handleInputChange}/>
            <button onClick={event => {event.preventDefault();
                                        props.getupdateUser(currentUser);
                                        }}>Update User</button>
        </form>
    );
}

export default EditUser;
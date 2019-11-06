import React,{useState,useEffect} from 'react';
import UserTable from '../table/userTable';
import AddUserForm from '../table/AddUserForm';
import EditUser from '../table/editUser';

import './App.css';
const App = () => {

    useEffect(() => console.log('mounted'), []);

    const editUserData = {id:'',name:'',username:''};

    const [editUser,setEditUserData] = useState(editUserData);

    const editFlag = false;

    const [editUserFlag,setEditUserFlag] = useState(editFlag);

    const usersData = [
        {id: 1, name: 'Tania', username: 'sem'},
        {id: 2, name: 'Devraj', username: 'raj'},
        {id: 3, name: 'Manthan', username: 'man'}
    ];

    const [users, setUsers] = useState(usersData);

    const addUser = user => {
        user.id = users.length+1
        setUsers([...users,user])
    }

    const currentUserAction = user => {
        setEditUserData({id:user.id,name:user.name,username:user.username})
        setEditUserFlag(true);
    }

    const updateUser = (currentUser) => {
        setEditUserFlag(false);
        console.log("update user: ",currentUser.id);
        setUsers(users.map(user =>(currentUser.id === user.id ? currentUser : user)))
    }

    const deleteUser = (userId) => {
        setUsers(users.filter(user => (user.id !== userId)))
    }

    return(
        <div className="container">
            <h1>CRUD App with Hooks</h1>
            <div className="flex-row">
                <div className="flex-large">
                    {editUserFlag ? (
                        <div>
                            <h2>Edit User</h2>
                            <EditUser passeditUser = {editUser} getupdateUser={updateUser}/>
                        </div>
                    ) : (
                        <div>
                            <h2>Add user</h2>
                            <AddUserForm addUser = {addUser}/>
                        </div>
                    )}
                </div>
                <div className="flex-large">
                    <h2>View users</h2>
                    <UserTable users = {users} editUser = {currentUserAction} deleteUser = {deleteUser}/>
                </div>
            </div>
        </div>
    )
}

export default App;

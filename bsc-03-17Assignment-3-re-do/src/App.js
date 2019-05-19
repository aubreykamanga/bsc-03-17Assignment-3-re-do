import React, { useState, Fragment } from 'react'
import AddUserForm from './components/AddUserForm'
import EditUserForm from './components/EditUserForm'
import UserForm  from'./components/UserForm'
import './App.css';






const App = () => {
	// fixed names that will be displayed for the user
	const usersData = [
		{ id: 1, name: 'Aubrey', username: 'aubryekmng' },
		{ id: 2, name: 'Kamanga', username: 'kamangaaub' },
		
	]

	const initialFormState = { id: null, name: '', username: '' }

	// Setting state
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	//some operations involving  CRUD
	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, username: user.username })
	}

	return (
		<div className="container">
			<h1>LAB-X COMPUTER USERS REGISTER</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit user</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add user</h2>
							<AddUserForm addUser={addUser} />
						</Fragment>
					)}
				</div>
				
				<div className="flex-large">
					<h2>View Computer users</h2>
					<UserForm users={users} editRow={editRow} deleteUser={deleteUser} />
					
				</div>
			</div>
		</div>
	)
}
		
				
			

export default App

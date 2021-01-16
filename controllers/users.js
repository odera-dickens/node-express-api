import { v4 as uuidv4 } from 'uuid';


//declare an empty users array
let users = [];


//get all users
export const getUsers = (req, res) => res.send(users);

//retrieve a single user with their unique id
export const getUser = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
}

//create an new user
export const createUser = (req, res) => {
    const user = req.body;
    const userwithId = {...user, id: uuidv4() };
    users.push(userwithId);
    res.send(`User with id ${userwithId.id} created successfully`);
}

//update a user record using their unique id
export const updateUser = (req, res) => {
    const { id } = req.params;
    const {firstName, lastName, age } = req.body;
    const user = users.find((user) => user.id === id);
    if(firstName){ user.firstName = firstName };
    if(lastName){ user.lastName = lastName };
    if(age){ user.age = age };
    res.send(`User with id ${user.id} updated successfully`);
}

//delete a user record using their unique id
export const deleteUser = (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`User with id ${id}  deleted successfully`);
}
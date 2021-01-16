import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();


let users = [];

//retrieve all users
router.get('/',(reg, res) => res.send(users));

//add a new user to users array and add a new item (id) onto the array
router.post('/',(req, res) => {
    const user = req.body;
    //let userId = uuidv4();
    const userWithId = {...user, id: uuidv4() };
    users.push(userWithId);
    res.send(`User with the id ${userWithId.id} has been added successfully`);
});

//retrieve a single user with unique id
router.get('/:id',(req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
});


//delete a user with unique id
router.delete('/:id',(req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`User with id ${id} deleted from the users array`);
});

//update a particular user record
router.patch('/:id',(req, res) => {
    const {id } = req.params;
    const { firstName, lastName, age } = req.body;
    const user = users.find((user) => user.id === id );
    if(firstName) { user.firstName = firstName};
    if(lastName) { user.lastName = lastName };
    if(age) { user.age = age };
    res.send(`User with id ${id} updated successfully`);
});



export default router;
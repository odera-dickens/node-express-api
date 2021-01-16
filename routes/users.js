import express from 'express';
import {getUsers, getUser, createUser, updateUser, deleteUser } from '../controllers/users.js';


const router = express.Router();


//retrieve all users
router.get('/', getUsers);

//add a new user to users array and add a new item (id) onto the array
router.post('/', createUser);

//retrieve a single user with unique id
router.get('/:id', getUser);

//delete a user with unique id
router.delete('/:id',deleteUser);

//update a particular user record
router.patch('/:id', updateUser);




export default router;
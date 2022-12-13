import express from 'express';

import { getUsers, createUser, getUserId, deleteUser, updateUser } from '../controllers/users.js';

const router = express.Router();


// get route request  
router.get('/', getUsers);

// post/ create request
router.post('/', createUser);


// get users id 
router.get('/:id', getUserId);

//deleting users request
router.delete('/:id' , deleteUser);

// edit request
router.patch('/:id', updateUser)

export default router;
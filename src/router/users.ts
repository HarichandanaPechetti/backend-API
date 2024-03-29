import express from 'express';

import { getAllUsers, deleteUser, updateUser } from '../controllers/users';
import { isAuthenticated, isOwner } from '../middlewares';

export default (router: express.Router) => {
  router.get('/users',  getAllUsers);
  router.delete('/users/:id',  deleteUser);
  router.patch('/users/:id',  updateUser);
};
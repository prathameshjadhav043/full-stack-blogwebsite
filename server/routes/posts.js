import express from 'express';

import { getPost, createPost, updatePost, deletePost, likePost } from '../controller/posts.js';

const router = express.Router();

// localhost:5000/post

router.get('/', getPost);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;
import express from 'express';
import { getAllBlogs, getBlog, addBlog, updateBlog, deleteBlog } from '../controllers/BlogController.js';

const router = express.Router();

//Rutas
router.get('/', getAllBlogs)
router.get('/:id', getBlog)
router.post('/', addBlog)
router.put('/:id', updateBlog)
router.delete('/:id', deleteBlog)

export default router
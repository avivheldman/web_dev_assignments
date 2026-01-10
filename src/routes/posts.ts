import { Router, Request, Response } from 'express';
import Post from '../models/post';

const router = Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const { title, content, sender } = req.body;

    if (!title || !content || !sender) {
      res.status(400).json({ error: 'Title, content, and sender are required' });
      return;
    }

    const newPost = new Post({
      title,
      content,
      sender,
    });

    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create post' });
  }
});

export default router;

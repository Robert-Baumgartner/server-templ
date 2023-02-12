import express from 'express';
import asyncHandler from 'express-async-handler';

const router = express.Router();

router.get(
  '/',
  asyncHandler((req, res) => res.status(200).send('it Works!')),
);

export default router;

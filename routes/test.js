import express from 'express';
import asyncHandler from 'express-async-handler';

import test from '../controllers/test.js';

const router = express.Router();

router.get('/', asyncHandler(test));

export default router;

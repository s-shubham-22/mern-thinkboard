import express from 'express';
import notesRouter from './notes.routes.js';

const router = express.Router();

router.use('/notes', notesRouter);

export default router;

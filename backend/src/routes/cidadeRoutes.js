import express from 'express';
import { listarCidades, criarCidade } from '../controllers/cidadeController.js';

const router = express.Router();

router.get('/', listarCidades);
router.post('/', criarCidade);

export default router;

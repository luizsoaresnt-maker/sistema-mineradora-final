import express from 'express';
import { listarFuncionarios, criarFuncionario } from '../controllers/funcionarioController.js';

const router = express.Router();

router.get('/', listarFuncionarios);
router.post('/', criarFuncionario);

export default router;

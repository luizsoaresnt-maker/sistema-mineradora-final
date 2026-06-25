import express from 'express';
import { listarEquipamentos, criarEquipamento } from '../controllers/equipamentoController.js';

const router = express.Router();

router.get('/', listarEquipamentos);
router.post('/', criarEquipamento);

export default router;

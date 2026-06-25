import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import equipamentoRoutes from './routes/equipamentoRoutes.js';
import cidadeRoutes from './routes/cidadeRoutes.js';
import funcionarioRoutes from './routes/funcionarioRoutes.js';
import servicoRoutes from './routes/servicoRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/equipamentos', equipamentoRoutes);
app.use('/cidades', cidadeRoutes);
app.use('/funcionarios', funcionarioRoutes);
app.use('/servicos', servicoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

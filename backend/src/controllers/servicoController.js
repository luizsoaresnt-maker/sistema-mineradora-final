import { supabase } from '../config/supabaseClient.js';

export const listarServicos = async (req, res) => {
  const { data, error } = await supabase.from('servicos').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json({ data });
};

export const criarServico = async (req, res) => {
  const { descricao, tipo, status } = req.body;
  const { data, error } = await supabase
    .from('servicos')
    .insert([{ descricao, tipo, status }])
    .select();
  if (error) return res.status(500).json({ error: error.message });
  res.status(201).json({ data });
};

import { supabase } from '../config/supabaseClient.js';

export const listarFuncionarios = async (req, res) => {
  const { data, error } = await supabase.from('funcionarios').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json({ data });
};

export const criarFuncionario = async (req, res) => {
  const { nome, cargo, setor } = req.body;
  const { data, error } = await supabase
    .from('funcionarios')
    .insert([{ nome, cargo, setor }])
    .select();
  if (error) return res.status(500).json({ error: error.message });
  res.status(201).json({ data });
};

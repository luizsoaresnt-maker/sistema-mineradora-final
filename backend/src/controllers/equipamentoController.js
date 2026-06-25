import { supabase } from '../config/supabaseClient.js';

export const listarEquipamentos = async (req, res) => {
  const { data, error } = await supabase.from('equipamentos').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json({ data });
};

export const criarEquipamento = async (req, res) => {
  const { nome, setor } = req.body;
  const { data, error } = await supabase
    .from('equipamentos')
    .insert([{ nome, setor }])
    .select();
  if (error) return res.status(500).json({ error: error.message });
  res.status(201).json({ data });
};

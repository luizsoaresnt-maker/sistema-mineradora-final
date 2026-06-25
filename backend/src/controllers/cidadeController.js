import { supabase } from '../config/supabaseClient.js';

export const listarCidades = async (req, res) => {
  const { data, error } = await supabase.from('cidades').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json({ data });
};

export const criarCidade = async (req, res) => {
  const { nome } = req.body;
  const { data, error } = await supabase
    .from('cidades')
    .insert([{ nome }])
    .select();
  if (error) return res.status(500).json({ error: error.message });
  res.status(201).json({ data });
};

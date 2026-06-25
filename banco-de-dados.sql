-- Script SQL para criar as tabelas no Supabase
-- Execute no SQL Editor do painel do Supabase

CREATE TABLE cidades (
  id serial primary key,
  nome text NOT NULL
);

CREATE TABLE equipamentos (
  id serial primary key,
  nome text NOT NULL,
  setor text NOT NULL
);

CREATE TABLE funcionarios (
  id serial primary key,
  nome text NOT NULL,
  cargo text NOT NULL,
  setor text NOT NULL
);

CREATE TABLE servicos (
  id serial primary key,
  descricao text NOT NULL,
  tipo text NOT NULL,
  status text NOT NULL
);

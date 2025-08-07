-- Create core tables for LeetCode-like problem metadata
-- Problems, Tags, Companies and their relations

-- Enable required extension (safe if already enabled)
create extension if not exists pgcrypto;

-- Problems table
create table if not exists public.problems (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  difficulty text not null check (difficulty in ('Easy','Medium','Hard')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Tags table
create table if not exists public.tags (
  id uuid primary key default gen_random_uuid(),
  name text not null unique
);

-- Problem <-> Tag relation
create table if not exists public.problem_tags (
  problem_id uuid not null references public.problems(id) on delete cascade,
  tag_id uuid not null references public.tags(id) on delete cascade,
  primary key (problem_id, tag_id)
);

-- Companies table
create table if not exists public.companies (
  id uuid primary key default gen_random_uuid(),
  name text not null unique
);

-- Company <-> Problem relation with frequency
create table if not exists public.company_problems (
  company_id uuid not null references public.companies(id) on delete cascade,
  problem_id uuid not null references public.problems(id) on delete cascade,
  frequency integer not null default 1,
  primary key (company_id, problem_id)
);

-- Helpful indexes
create index if not exists idx_problems_difficulty on public.problems(difficulty);
create index if not exists idx_problems_title on public.problems(title);
create index if not exists idx_company_problems_frequency on public.company_problems(frequency);

-- RLS
alter table public.problems enable row level security;
alter table public.tags enable row level security;
alter table public.problem_tags enable row level security;
alter table public.companies enable row level security;
alter table public.company_problems enable row level security;

-- Public read-only policies for catalog data
create policy if not exists "Problems are publicly readable"
  on public.problems for select using (true);

create policy if not exists "Tags are publicly readable"
  on public.tags for select using (true);

create policy if not exists "Problem-Tags are publicly readable"
  on public.problem_tags for select using (true);

create policy if not exists "Companies are publicly readable"
  on public.companies for select using (true);

create policy if not exists "Company-Problems are publicly readable"
  on public.company_problems for select using (true);

-- Timestamp trigger function (idempotent)
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- Attach trigger to problems table
create or replace trigger set_problems_updated_at
before update on public.problems
for each row execute function public.set_updated_at();
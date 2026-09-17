export async function buscarEnderecoPorCep(cep: string): Promise<{
  ok: boolean;
  erro?: string;
  logradouro?: string;
  complemento?: string;
  bairro?: string;
  localidade?: string;
  uf?: string;
}> {
  try {
    const normalized = cep.replace(/\D/g, '');
    if (normalized.length !== 8) {
      return { ok: false, erro: 'CEP inválido.' };
    }

    const response = await fetch(`https://viacep.com.br/ws/${normalized}/json/`);
    if (!response.ok) {
      return { ok: false, erro: `Erro ao consultar CEP (status ${response.status})` };
    }

    const json = await response.json();
    if (json.erro) {
      return { ok: false, erro: 'CEP não encontrado.' };
    }

    return {
      ok: true,
      logradouro: json.logradouro,
      complemento: json.complemento,
      bairro: json.bairro,
      localidade: json.localidade,
      uf: json.uf,
    };
  } catch (error) {
    return { ok: false, erro: String(error) };
  }
}

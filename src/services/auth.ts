const normalizeErrorMessage = (data: any): string => {
  if (!data) return 'Erro desconhecido.';

  if (typeof data.detail === 'string') return data.detail;
  if (Array.isArray(data.detail)) {
    return data.detail
      .map((item: any) => (typeof item === 'string' ? item : JSON.stringify(item)))
      .join('\n');
  }

  if (typeof data.message === 'string') return data.message;
  if (Array.isArray(data.message)) {
    return data.message.map((item: any) => String(item)).join('\n');
  }

  if (typeof data === 'string') return data;
  if (typeof data === 'object') return JSON.stringify(data);

  return String(data);
};

import {
  API_URL,
  AUTH_TOKEN_KEY,
  BASE_URL,
  ErroResponse,
  gerarIniciais,
} from './api';

export type LoginResponse = {
  cpf: string;
  nome: string;
  email: string;
  token?: string;
  iniciais: string;
};

export type TrocaContaResponse = {
  cpf: string;
  nome: string;
  email: string;
};

export type CadastroRequest = {
  nome: string;
  email: string;
  senha: string;
  cpf: string;
  nascimento: string;
  celular: string;
  pais: string;
  estado: string;
  cidade: string;
  rua: string;
  numero: string;
  complemento: string;
  cep: string;
};

export type AtualizacaoCadastralRequest = Partial<CadastroRequest>;

export type ApiResponse = LoginResponse | ErroResponse;
export type TrocaContaApiResponse = TrocaContaResponse | ErroResponse;

const saveAuthToken = async (token: string) => {
  if (typeof window === 'undefined') return;

  try {
    window.localStorage.setItem(AUTH_TOKEN_KEY, token);
  } catch {
    // noop
  }
};

export async function validarLogin(
  cpf: string,
  senha: string,
): Promise<ApiResponse> {
  if (!cpf || cpf.length !== 14 || !senha) {
    return { erro: 'CPF ou senha inválidos.' };
  }

  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cpf, senha }),
    });

    const data = await response.json();
    if (!response.ok) {
      return { erro: normalizeErrorMessage(data) || 'Erro ao fazer login.' };
    }

    if (data.token) {
      await saveAuthToken(data.token);
    }

    return {
      cpf: data.cpf,
      nome: data.nome,
      email: data.email || '',
      token: data.token,
      iniciais: data.iniciais || gerarIniciais(data.nome),
    };
  } catch {
    return { erro: 'Falha na conexão com o servidor.' };
  }
}

export async function trocarConta(
  cpf: string,
  senha: string,
): Promise<TrocaContaApiResponse> {
  if (!cpf || cpf.length !== 14 || !senha) {
    return { erro: 'CPF ou senha inválidos.' };
  }

  try {
    const response = await fetch(`${API_URL}/trocar-conta`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cpf, senha }),
    });

    const data = await response.json();
    if (!response.ok) {
      return { erro: normalizeErrorMessage(data) || 'Erro ao trocar conta.' };
    }

    return {
      cpf: data.cpf,
      nome: data.nome,
      email: data.email || '',
    };
  } catch {
    return { erro: 'Falha na conexão com o servidor.' };
  }
}

export async function cadastrarUsuario(
  dados: CadastroRequest,
): Promise<ApiResponse> {
  try {
    const response = await fetch(`${API_URL}/cadastro`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dados),
    });

    const data = await response.json();
    if (!response.ok) {
      return { erro: normalizeErrorMessage(data) || 'Erro no cadastro.' };
    }

    return {
      cpf: data.cpf,
      nome: data.nome,
      email: data.email || dados.email,
      iniciais: data.iniciais || gerarIniciais(data.nome),
    };
  } catch {
    return { erro: 'Falha na conexão com o servidor.' };
  }
}

export async function solicitarRecuperacao(login: string): Promise<any> {
  try {
    const response = await fetch(`${BASE_URL}/auth/esqueci-senha`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: login }),
    });

    const data = await response.json();
    if (!response.ok) {
      return { erro: normalizeErrorMessage(data) || 'Erro ao solicitar.' };
    }

    return data;
  } catch {
    return { erro: 'Falha na conexão.' };
  }
}

export async function validarCodigoRecuperacao(
  email: string,
  codigo: string,
): Promise<any> {
  try {
    const response = await fetch(`${BASE_URL}/auth/validar-codigo`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, codigo }),
    });

    const data = await response.json();
    if (!response.ok) {
      return { erro: normalizeErrorMessage(data) || 'Código inválido.' };
    }

    return data;
  } catch {
    return { erro: 'Falha na conexão.' };
  }
}

export async function redefinirSenhaFinal(
  token: string,
  novaSenha: string,
): Promise<any> {
  try {
    const response = await fetch(`${BASE_URL}/auth/redefinir-senha`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token, nova_senha: novaSenha }),
    });

    const data = await response.json();
    if (!response.ok) {
      return { erro: normalizeErrorMessage(data) || 'Erro ao redefinir.' };
    }

    return data;
  } catch {
    return { erro: 'Falha na conexão.' };
  }
}

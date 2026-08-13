'use client';

import Link from "next/link";
import GridBackground from "../../../components/core/GridBackground";

export default function TermosPage() {
    return (
        <div className="relative min-h-screen text-[#F5F5F7] font-sans selection:bg-[#00C853] selection:text-[#0B0C10]">
            <GridBackground />
            <div className="noise-overlay" />

            {/* Header Comercial da Página de Termos */}
            <header className="relative z-20 max-w-5xl mx-auto px-6 py-6 flex items-center justify-between border-b border-[#1F222F]/60">
                <Link href="/" className="flex items-center gap-3">
                    <img
                        src="/financelab/logo.png"
                        alt="FinanceLab Logo"
                        width={100}
                        height={35}
                        className="object-contain"
                    />
                </Link>
                <Link
                    href="/"
                    className="text-xs font-mono text-[#00C853] bg-[#12141C] border border-[#1F222F] px-4 py-2 rounded-lg hover:border-[#00C853] transition-colors"
                >
                    ← Voltar ao Início
                </Link>
            </header>

            {/* Container Principal dos Textos */}
            <main className="relative z-10 max-w-3xl mx-auto px-6 py-16 space-y-12">

                {/* Badge de Atualização */}
                <div className="inline-block bg-[#12141C] border border-[#00C853]/40 text-[#00C853] font-mono text-xs px-4 py-2 rounded-full">
                    Última atualização: agosto de 2026
                </div>

                {/* Bloco de Termos de Uso */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-white border-b border-[#1F222F] pb-3">
                        Termos e Condições de Uso
                    </h2>

                    <p className="text-[#8E929F] text-sm leading-relaxed">
                        Bem-vindo ao <strong>FinanceLab</strong>. Ao utilizar nossa plataforma, você concorda com os termos descritos abaixo. Leia-os atentamente, pois eles regem sua relação com nossas ferramentas de análise e dados.
                    </p>

                    <h3 className="text-lg font-semibold text-white pt-4">1. Natureza do Serviço e Inteligência Artificial</h3>
                    <p className="text-[#8E929F] text-sm leading-relaxed">
                        O FinanceLab utiliza algoritmos avançados e Inteligência Artificial (IA) para processar grandes volumes de dados, compilar informações de fontes públicas e gerar insights de mercado.
                    </p>
                    <ul className="space-y-2 text-sm text-[#8E929F] pl-4">
                        <li className="list-disc"><strong>Conteúdo Educativo:</strong> Todas as análises, projeções e insights gerados pela IA têm caráter estritamente informativo e educativo.</li>
                        <li className="list-disc"><strong>Não Recomendação:</strong> O aplicativo não fornece recomendações de compra, venda ou manutenção de ativos. A decisão final de investimento é de responsabilidade exclusiva do usuário.</li>
                        <li className="list-disc"><strong>Limitações da IA:</strong> O usuário declara estar ciente de que modelos de IA podem apresentar imprecisões e que rendimentos passados não garantem resultados futuros.</li>
                    </ul>

                    <div className="p-4 rounded-xl bg-[#1A1100]/60 border-l-4 border-[#FF9800] text-[#FFB74D] text-sm font-light">
                        ⚠️ O FinanceLab não é uma corretora, assessora de investimentos ou gestora de recursos. Nenhum conteúdo do app deve ser interpretado como recomendação de investimento.
                    </div>

                    <h3 className="text-lg font-semibold text-white pt-4">2. Conexão com Corretoras e Segurança</h3>
                    <p className="text-[#8E929F] text-sm leading-relaxed">
                        Para oferecer uma visão consolidada da sua carteira, o aplicativo permite a integração com instituições financeiras e corretoras via Open Finance, por meio da plataforma parceira Pluggy.
                    </p>
                    <ul className="space-y-2 text-sm text-[#8E929F] pl-4">
                        <li className="list-disc"><strong>Ambiente Seguro:</strong> O login e a autenticação junto às corretoras são realizados através de APIs seguras que seguem padrões rigorosos de criptografia.</li>
                        <li className="list-disc"><strong>Senha não armazenada:</strong> O FinanceLab não armazena sua senha da corretora — apenas tokens de acesso autorizados por você, que podem ser revogados a qualquer momento.</li>
                    </ul>

                    <h3 className="text-lg font-semibold text-white pt-4">3. Elegibilidade e Idade Mínima</h3>
                    <p className="text-[#8E929F] text-sm leading-relaxed">
                        O uso do FinanceLab é destinado exclusivamente a maiores de 18 anos, plenamente capazes de contratar investimentos e serviços financeiros nos termos da legislação brasileira. Ao criar uma conta, você declara ter idade igual ou superior a 18 anos.
                    </p>

                    <h3 className="text-lg font-semibold text-white pt-4">4. Responsabilidades do Usuário</h3>
                    <p className="text-[#8E929F] text-sm leading-relaxed">
                        Ao utilizar o sistema, você se compromete a:
                    </p>
                    <ul className="space-y-2 text-sm text-[#8E929F] pl-4">
                        <li className="list-disc">Não utilizar as informações para fins ilícitos ou manipulação de mercado.</li>
                        <li className="list-disc">Manter a confidencialidade de suas credenciais de acesso.</li>
                        <li className="list-disc">Reconhecer que o mercado financeiro envolve riscos intrínsecos e possibilidade de perda de capital.</li>
                        <li className="list-disc">Fornecer informações verdadeiras e atualizadas sobre seu perfil de investidor e dados cadastrais.</li>
                        <li className="list-disc">Não compartilhar sua conta com terceiros.</li>
                    </ul>

                    <h3 className="text-lg font-semibold text-white pt-4">5. Planos e Pagamentos</h3>
                    <ul className="space-y-2 text-sm text-[#8E929F] pl-4">
                        <li className="list-disc"><strong>Plano Silver (Gratuito):</strong> Acesso às funcionalidades básicas do app sem custo.</li>
                        <li className="list-disc"><strong>Plano Gold (R$ 39,90/mês):</strong> Acesso completo incluindo o Centro de Inteligência com IA.</li>
                        <li className="list-disc">Os preços podem ser alterados mediante aviso prévio de 30 dias.</li>
                        <li className="list-disc">O cancelamento do plano Gold pode ser feito a qualquer momento nas configurações do app.</li>
                    </ul>

                    <h3 className="text-lg font-semibold text-white pt-4">6. Limitação de Responsabilidade</h3>
                    <p className="text-[#8E929F] text-sm leading-relaxed">
                        O FinanceLab não se responsabiliza por perdas financeiras, diretas ou indiretas, decorrentes de decisões tomadas com base nas análises fornecidas pela ferramenta. O investimento em renda variável exige cautela e, idealmente, o suporte de profissionais certificados (CNPI, CFP ou assessores de investimento).
                    </p>

                    <h3 className="text-lg font-semibold text-white pt-4">7. Feeds RSS e Conteúdo de Terceiros</h3>
                    <p className="text-[#8E929F] text-sm leading-relaxed">
                        O FinanceLab disponibiliza um serviço de agregação de notícias financeiras provenientes de feeds RSS públicos de veículos jornalísticos.
                    </p>
                    <ul className="space-y-2 text-sm text-[#8E929F] pl-4">
                        <li className="list-disc">O conteúdo das notícias é de exclusiva responsabilidade de seus respectivos autores e veículos originais, não representando opinião ou endosso do FinanceLab.</li>
                        <li className="list-disc">O FinanceLab não reproduz, armazena nem hospeda artigos completos — exibe apenas metadados resumidos (título, veículo e data), redirecionando ao site original.</li>
                        <li className="list-disc">O FinanceLab não garante a precisão, completude ou disponibilidade das notícias de fontes externas.</li>
                    </ul>
                    <p className="text-[#8E929F] text-sm leading-relaxed">
                        Caso algum veículo entenda que determinado conteúdo não deve ser agregado, poderá solicitar sua exclusão pelo e-mail <strong className="text-white">suporte@labai-tech.com</strong>. A solicitação será atendida em até 5 dias úteis.
                    </p>

                    <h3 className="text-lg font-semibold text-white pt-4">8. Propriedade Intelectual</h3>
                    <p className="text-[#8E929F] text-sm leading-relaxed">
                        Todo o conteúdo do FinanceLab — incluindo marca, logo, design, algoritmos e análises geradas pela IA — é de propriedade exclusiva da <strong>LabAI Tech</strong> e protegido por lei. É vedada a reprodução, distribuição ou uso comercial sem autorização prévia.
                    </p>

                    <h3 className="text-lg font-semibold text-white pt-4">9. Atualizações dos Termos</h3>
                    <p className="text-[#8E929F] text-sm leading-relaxed">
                        Reservamo-nos o direito de alterar estes termos a qualquer momento para refletir mudanças na legislação ou em nossas funcionalidades. O uso continuado do app após tais mudanças constitui aceitação dos novos termos.
                    </p>
                </section>

                {/* Divisor */}
                <div className="border-t border-[#1F222F]" />

                {/* Bloco de Política de Privacidade */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-white border-b border-[#1F222F] pb-3">
                        Política de Privacidade (LGPD)
                    </h2>

                    <p className="text-[#8E929F] text-sm leading-relaxed">
                        A <strong>LabAI Tech</strong> desenvolveu o aplicativo <strong>FinanceLab</strong> como um serviço de educação e análise financeira. Esta política descreve como protegemos suas informações em conformidade com a <strong>LGPD (Lei nº 13.709/2018)</strong>.
                    </p>

                    <h3 className="text-lg font-semibold text-white pt-4">1. Dados Coletados</h3>
                    <ul className="space-y-2 text-sm text-[#8E929F] pl-4">
                        <li className="list-disc"><strong>Dados cadastrais:</strong> Nome completo, e-mail, CPF, data de nascimento e telefone/celular.</li>
                        <li className="list-disc"><strong>Dados de endereço:</strong> País, estado, cidade, rua, número, complemento e CEP.</li>
                        <li className="list-disc"><strong>Dados de perfil de investidor:</strong> Objetivos financeiros, horizonte de investimento e tolerância a risco.</li>
                        <li className="list-disc"><strong>Dados financeiros:</strong> Carteiras conectadas via Pluggy (Open Finance), histórico de transações e saldo.</li>
                    </ul>

                    <h3 className="text-lg font-semibold text-white pt-4">2. Uso da Inteligência Artificial e Dados</h3>
                    <p className="text-[#8E929F] text-sm leading-relaxed">
                        Nossa Inteligência Artificial processa seus dados de forma automatizada para compilar informações de mercado, analisar sua carteira frente à sua estratégia declarada, e gerar relatórios educativos que apoiam — sem substituir — sua tomada de decisão.
                    </p>
                    <div className="p-4 rounded-xl bg-[#12141C] border border-[#1F222F] text-[#8E929F] text-sm font-light">
                        Nota: Seus dados individuais nunca são utilizados para treinar modelos de IA públicos de terceiros. O processamento é realizado por meio da API do Google Gemini, em chamadas isoladas por requisição.
                    </div>

                    <h3 className="text-lg font-semibold text-white pt-4">3. Compartilhamento com Parceiros</h3>
                    <p className="text-[#8E929F] text-sm leading-relaxed">
                        Não vendemos seus dados. Compartilhamos apenas com parceiros essenciais sob contratos rígidos:
                    </p>
                    <div className="bg-[#12141C] border border-[#1F222F] rounded-xl overflow-hidden text-sm">
                        <div className="grid grid-cols-2 p-3 border-b border-[#1F222F] font-mono text-[#00C853]">
                            <span>Parceiro</span>
                            <span>Finalidade</span>
                        </div>
                        <div className="grid grid-cols-2 p-3 border-b border-[#1F222F] text-[#8E929F]">
                            <span>Supabase</span>
                            <span>Banco de dados seguro</span>
                        </div>
                        <div className="grid grid-cols-2 p-3 border-b border-[#1F222F] text-[#8E929F]">
                            <span>Pluggy</span>
                            <span>Open Finance</span>
                        </div>
                        <div className="grid grid-cols-2 p-3 text-[#8E929F]">
                            <span>Google Gemini AI</span>
                            <span>Geração de análises</span>
                        </div>
                    </div>
                    <p className="text-[#8E929F] text-sm leading-relaxed">
                        Também podemos compartilhar dados para cumprimento de obrigações legais ou ordens judiciais emitidas por órgãos reguladores competentes, como a CVM ou o Banco Central do Brasil.
                    </p>

                    <h3 className="text-lg font-semibold text-white pt-4">4. Seus Direitos (LGPD)</h3>
                    <ul className="space-y-2 text-sm text-[#8E929F] pl-4">
                        <li className="list-disc">Acessar, corrigir ou atualizar seus dados cadastrais.</li>
                        <li className="list-disc">Revogar o acesso de qualquer corretora conectada, diretamente nas configurações do app.</li>
                        <li className="list-disc">Solicitar a exclusão definitiva de sua conta e de todos os dados associados.</li>
                        <li className="list-disc">Solicitar informações sobre com quem seus dados foram compartilhados.</li>
                    </ul>
                    <p className="text-[#8E929F] text-sm leading-relaxed">
                        Você pode exercer qualquer um desses direitos a qualquer momento enviando um e-mail para <strong className="text-white">suporte@labai-tech.com</strong>, nosso canal oficial de atendimento e de contato com o Encarregado de Proteção de Dados (DPO).
                    </p>

                    <h3 className="text-lg font-semibold text-white pt-4">5. Retenção de Dados</h3>
                    <p className="text-[#8E929F] text-sm leading-relaxed">
                        Mantemos seus dados apenas pelo tempo necessário para cumprir as finalidades descritas nesta política ou obrigações legais e regulatórias aplicáveis ao setor financeiro. Em caso de exclusão de conta, os dados são anonimizados ou deletados permanentemente em até 3 dias úteis, ressalvadas informações que devamos manter por período superior em razão de exigência legal.
                    </p>

                    <h3 className="text-lg font-semibold text-white pt-4">6. Menores de Idade</h3>
                    <p className="text-[#8E929F] text-sm leading-relaxed">
                        O FinanceLab não é destinado a menores de 18 anos e não coleta intencionalmente dados pessoais de menores. Caso um responsável legal identifique que um menor forneceu dados em nossa plataforma, pedimos contato imediato pelo e-mail <strong className="text-white">suporte@labai-tech.com</strong> para exclusão dos dados.
                    </p>
                </section>

                {/* Caixa de Contato / Suporte */}
                <div className="p-6 rounded-2xl bg-[#12141C] border border-[#1F222F] space-y-2 text-sm text-[#8E929F]">
                    <p className="font-bold text-white">LabAI Tech</p>
                    <p>E-mail de suporte e DPO: <a href="mailto:suporte@labai-tech.com" className="text-[#00C853] hover:underline">suporte@labai-tech.com</a></p>
                    <p>Site oficial: <a href="https://labai-tech.com" target="_blank" rel="noreferrer" className="text-[#00C853] hover:underline">labai-tech.com</a></p>
                </div>

            </main>

            {/* Footer */}
            <footer className="relative z-10 py-12 text-center border-t border-[#1F222F]/40 bg-[#0B0C10] space-y-2">
                <p className="text-xs font-mono text-[#8E929F]">
                    &copy; {new Date().getFullYear()} FinanceLab — LabAI Tech. Todos os direitos reservados.
                </p>
                <p className="text-[11px] font-mono text-[#555]">Educação e independência financeira ao alcance de todos.</p>
            </footer>
        </div>
    );
}

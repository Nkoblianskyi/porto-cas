import { Header } from "@/components/header"

export default function PoliticaCookiesPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">Política de Cookies</h1>

        <div className="max-w-4xl mx-auto space-y-8 bg-slate-900/90 backdrop-blur-sm rounded-lg p-8">
          <div className="text-center mb-8">
            <p className="text-yellow-400 text-lg">Última atualização: Janeiro de 2025</p>
          </div>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">O que são Cookies?</h2>
            <div className="text-slate-300 leading-relaxed space-y-3">
              <p>
                Os cookies são pequenos ficheiros de texto que são armazenados no seu dispositivo (computador, tablet ou
                telemóvel) quando visita um website. Estes ficheiros permitem que o site "lembre" das suas ações e
                preferências durante um período de tempo.
              </p>
              <p>
                No ApostasDesportivasPT.com, utilizamos cookies para melhorar a sua experiência de navegação,
                personalizar conteúdo e analisar como o nosso site é utilizado.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Tipos de Cookies que Utilizamos</h2>
            <div className="text-slate-300 space-y-6">
              <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-4">
                <h4 className="text-green-400 font-bold mb-3">Cookies Essenciais (Sempre Ativos)</h4>
                <p className="mb-2">Estes cookies são necessários para o funcionamento básico do site:</p>
                <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                  <li>Manter as suas preferências de cookies</li>
                  <li>Garantir a segurança durante a navegação</li>
                  <li>Lembrar informações de sessão</li>
                  <li>Permitir funcionalidades básicas do site</li>
                </ul>
                <p className="text-xs mt-2 text-green-300">
                  <strong>Base legal:</strong> Interesse legítimo (funcionamento do site)
                </p>
              </div>

              <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4">
                <h4 className="text-blue-400 font-bold mb-3">Cookies de Analytics</h4>
                <p className="mb-2">Ajudam-nos a compreender como os visitantes usam o nosso site:</p>
                <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                  <li>Número de visitantes e páginas mais populares</li>
                  <li>Tempo gasto no site e taxa de rejeição</li>
                  <li>Origem do tráfego (Google, redes sociais, etc.)</li>
                  <li>Dispositivos e navegadores mais utilizados</li>
                </ul>
                <p className="text-xs mt-2 text-blue-300">
                  <strong>Fornecedor:</strong> Google Analytics
                  <br />
                  <strong>Base legal:</strong> Consentimento
                </p>
              </div>

              <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4">
                <h4 className="text-yellow-400 font-bold mb-3">Cookies de Personalização</h4>
                <p className="mb-2">Permitem personalizar a sua experiência:</p>
                <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                  <li>Lembrar as suas preferências de idioma</li>
                  <li>Guardar filtros aplicados nas comparações</li>
                  <li>Personalizar conteúdo com base nos seus interesses</li>
                  <li>Melhorar recomendações de casas de apostas</li>
                </ul>
                <p className="text-xs mt-2 text-yellow-300">
                  <strong>Base legal:</strong> Consentimento
                </p>
              </div>

              <div className="bg-purple-900/20 border border-purple-700/50 rounded-lg p-4">
                <h4 className="text-purple-400 font-bold mb-3">Cookies de Marketing</h4>
                <p className="mb-2">Utilizados para mostrar publicidade relevante:</p>
                <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                  <li>Rastrear visitas através de diferentes sites</li>
                  <li>Criar perfis de interesse para publicidade direcionada</li>
                  <li>Medir a eficácia das campanhas publicitárias</li>
                  <li>Limitar o número de vezes que vê o mesmo anúncio</li>
                </ul>
                <p className="text-xs mt-2 text-purple-300">
                  <strong>Fornecedores:</strong> Google Ads, Facebook Pixel
                  <br />
                  <strong>Base legal:</strong> Consentimento
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Cookies de Terceiros</h2>
            <div className="text-slate-300 leading-relaxed space-y-4">
              <p>Alguns cookies são colocados por serviços de terceiros que aparecem nas nossas páginas:</p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-slate-700">
                  <thead className="bg-slate-800">
                    <tr>
                      <th className="border border-slate-700 p-2 text-left">Serviço</th>
                      <th className="border border-slate-700 p-2 text-left">Finalidade</th>
                      <th className="border border-slate-700 p-2 text-left">Duração</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-700 p-2">Google Analytics</td>
                      <td className="border border-slate-700 p-2">Análise de tráfego</td>
                      <td className="border border-slate-700 p-2">26 meses</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-700 p-2">Google Ads</td>
                      <td className="border border-slate-700 p-2">Publicidade direcionada</td>
                      <td className="border border-slate-700 p-2">90 dias</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-700 p-2">Facebook Pixel</td>
                      <td className="border border-slate-700 p-2">Remarketing</td>
                      <td className="border border-slate-700 p-2">180 dias</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Como Gerir os Seus Cookies</h2>
            <div className="text-slate-300 leading-relaxed space-y-4">
              <div className="bg-slate-800/50 p-4 rounded-lg">
                <h4 className="text-white font-bold mb-3">Através do Nosso Site</h4>
                <p>
                  Pode alterar as suas preferências de cookies a qualquer momento clicando no botão "Gerir Cookies" no
                  rodapé do site ou através do banner que aparece na sua primeira visita.
                </p>
              </div>

              <div className="bg-slate-800/50 p-4 rounded-lg">
                <h4 className="text-white font-bold mb-3">Através do Seu Navegador</h4>
                <p className="mb-2">Pode controlar cookies através das definições do seu navegador:</p>
                <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                  <li>
                    <strong>Chrome:</strong> Definições → Privacidade e segurança → Cookies
                  </li>
                  <li>
                    <strong>Firefox:</strong> Opções → Privacidade e Segurança → Cookies
                  </li>
                  <li>
                    <strong>Safari:</strong> Preferências → Privacidade → Cookies
                  </li>
                  <li>
                    <strong>Edge:</strong> Definições → Cookies e permissões do site
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-900/20 border border-yellow-700/50 p-4 rounded-lg">
                <h4 className="text-yellow-400 font-bold mb-3">Importante Saber</h4>
                <p>
                  Se desativar todos os cookies, algumas funcionalidades do site podem não funcionar corretamente. Os
                  cookies essenciais são sempre necessários para o funcionamento básico.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Atualizações desta Política</h2>
            <div className="text-slate-300 leading-relaxed">
              <p>
                Esta política de cookies pode ser atualizada periodicamente para refletir mudanças nos nossos serviços
                ou requisitos legais. Recomendamos que consulte esta página regularmente para se manter informado sobre
                como utilizamos cookies.
              </p>
            </div>
          </section>


          <div className="text-center mt-8 p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg">
            <p className="text-blue-300 text-sm">
              Esta política está em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD) e a legislação
              portuguesa aplicável sobre cookies e privacidade online.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

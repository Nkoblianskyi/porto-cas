import { Header } from "@/components/header"

export default function PoliticaPrivacidadePage() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">Política de Privacidade</h1>

        <div className="max-w-4xl mx-auto space-y-8 bg-slate-900/90 backdrop-blur-sm rounded-lg p-8">
          <div className="text-center mb-8">
            <p className="text-yellow-400 text-lg">Última atualização: Janeiro de 2025</p>
          </div>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">1. Quem Somos</h2>
            <div className="text-slate-300 leading-relaxed space-y-3">
              <p>
                O PortugalMelhoresCasinos.com é um serviço de comparação independente de casinos online licenciados em
                Portugal. O nosso objetivo é fornecer informações precisas e atualizadas para ajudar os utilizadores a
                tomar decisões informadas sobre plataformas de casino online.
              </p>
              <p>
                Somos um site de informação e comparação que não opera jogos de casino nem processa transações
                financeiras relacionadas com jogos de azar.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">2. Informações que Recolhemos</h2>
            <div className="text-slate-300 leading-relaxed space-y-4">
              <div>
                <h4 className="text-white font-semibold mb-2">Informações Recolhidas Automaticamente:</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Endereço IP e localização aproximada</li>
                  <li>Tipo de navegador e dispositivo utilizado</li>
                  <li>Páginas visitadas e tempo de permanência no site</li>
                  <li>Origem do tráfego (como chegou ao nosso site)</li>
                  <li>Dados de cookies e tecnologias similares</li>
                  <li>Informações sobre o sistema operativo</li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-2">Informações de Navegação:</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Histórico de cliques e interações no site</li>
                  <li>Preferências de conteúdo e filtros aplicados</li>
                  <li>Tempo gasto em diferentes secções do site</li>
                  <li>Padrões de utilização e comportamento de navegação</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">3. Como Utilizamos as Suas Informações</h2>
            <div className="text-slate-300 leading-relaxed">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Fornecer e melhorar os nossos serviços de comparação de casinos</li>
                <li>Personalizar o conteúdo com base nas suas preferências de navegação</li>
                <li>Analisar o uso do site para melhorar a experiência do utilizador</li>
                <li>Otimizar o desempenho e funcionalidade do website</li>
                <li>Gerar estatísticas agregadas sobre o uso do site</li>
                <li>Cumprir obrigações legais e regulamentares aplicáveis</li>
                <li>Proteger contra fraude, spam e atividades maliciosas</li>
                <li>Manter a segurança e integridade da plataforma</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">4. Base Legal para o Tratamento</h2>
            <div className="text-slate-300 leading-relaxed space-y-3">
              <p>Processamos os seus dados pessoais com base em:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>
                  <strong>Interesse legítimo:</strong> Para análise do site, melhorias do serviço e segurança
                </li>
                <li>
                  <strong>Consentimento:</strong> Para cookies não essenciais e análise de comportamento
                </li>
                <li>
                  <strong>Execução de serviço:</strong> Para fornecer as funcionalidades de comparação solicitadas
                </li>
                <li>
                  <strong>Obrigação legal:</strong> Para cumprir requisitos legais aplicáveis em Portugal
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">5. Partilha de Informações</h2>
            <div className="text-slate-300 leading-relaxed space-y-3">
              <p>
                <strong>Não vendemos os seus dados pessoais.</strong> Podemos partilhar informações limitadas com:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Fornecedores de serviços técnicos (hosting, analytics, CDN)</li>
                <li>Serviços de análise de tráfego e comportamento do utilizador</li>
                <li>Autoridades competentes quando exigido por lei portuguesa</li>
                <li>Parceiros comerciais (apenas dados agregados e anonimizados)</li>
              </ul>
              <p>Todos os terceiros são obrigados a proteger os seus dados de acordo com as leis aplicáveis.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">6. Os Seus Direitos (RGPD)</h2>
            <div className="text-slate-300 leading-relaxed space-y-3">
              <p>Tem o direito de:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <strong>Acesso:</strong> Saber que dados temos sobre si
                  </li>
                  <li>
                    <strong>Retificação:</strong> Corrigir dados incorretos
                  </li>
                  <li>
                    <strong>Apagamento:</strong> Solicitar a eliminação dos seus dados
                  </li>
                  <li>
                    <strong>Limitação:</strong> Restringir o processamento
                  </li>
                </ul>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <strong>Portabilidade:</strong> Receber os seus dados
                  </li>
                  <li>
                    <strong>Oposição:</strong> Opor-se ao processamento
                  </li>
                  <li>
                    <strong>Retirar consentimento:</strong> A qualquer momento
                  </li>
                  <li>
                    <strong>Reclamação:</strong> Junto da CNPD
                  </li>
                </ul>
              </div>
              <p className="mt-4">
                Para exercer os seus direitos, pode utilizar as definições do seu navegador ou as opções disponíveis no
                nosso site.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">7. Segurança dos Dados</h2>
            <div className="text-slate-300 leading-relaxed">
              <p>
                Implementamos medidas técnicas e organizacionais adequadas para proteger os seus dados pessoais contra
                acesso não autorizado, alteração, divulgação ou destruição. Isto inclui:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-3">
                <li>Encriptação SSL/TLS para todas as comunicações</li>
                <li>Acesso restrito aos dados apenas para pessoal autorizado</li>
                <li>Monitorização regular dos nossos sistemas de segurança</li>
                <li>Atualizações regulares de software e sistemas de proteção</li>
                <li>Backup seguro e procedimentos de recuperação de dados</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">8. Retenção de Dados</h2>
            <div className="text-slate-300 leading-relaxed">
              <p>
                Mantemos os seus dados pessoais apenas pelo tempo necessário para os fins para os quais foram
                recolhidos:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-3">
                <li>Dados de analytics: máximo de 26 meses</li>
                <li>Logs de servidor: máximo de 12 meses</li>
                <li>Cookies de preferências: até serem eliminados pelo utilizador</li>
                <li>Dados agregados: podem ser mantidos indefinidamente após anonimização</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">9. Cookies e Tecnologias Similares</h2>
            <div className="text-slate-300 leading-relaxed">
              <p>
                Utilizamos cookies e tecnologias similares para melhorar a sua experiência no nosso site. Para
                informações detalhadas sobre como utilizamos cookies, consulte a nossa Política de Cookies.
              </p>
              <p className="mt-3">
                Pode gerir as suas preferências de cookies através das definições do seu navegador ou utilizando as
                opções disponíveis no nosso site.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">10. Alterações a Esta Política</h2>
            <div className="text-slate-300 leading-relaxed">
              <p>
                Podemos atualizar esta política periodicamente para refletir mudanças nos nossos serviços ou requisitos
                legais. Notificaremos sobre alterações significativas através do nosso site. A data da última
                atualização está indicada no topo desta página.
              </p>
              <p className="mt-3">
                Recomendamos que consulte esta política regularmente para se manter informado sobre como protegemos os
                seus dados pessoais.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">11. Jogo Responsável</h2>
            <div className="text-slate-300 leading-relaxed bg-red-900/20 p-4 rounded-lg">
              <p className="text-red-300 font-semibold mb-2">Compromisso com o Jogo Responsável</p>
              <p>
                Como plataforma de comparação de casinos, promovemos práticas de jogo responsável. Não recolhemos
                informações sobre hábitos de jogo individuais, mas fornecemos informações educativas sobre jogo
                responsável.
              </p>
              <p className="mt-2 text-sm">
                Lembre-se: O jogo deve ser sempre encarado como entretenimento. Jogue apenas o que pode permitir-se
                perder.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

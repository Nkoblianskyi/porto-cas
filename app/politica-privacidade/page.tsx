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
                O ApostasDesportivasPT.com é um serviço de comparação independente de casas de apostas desportivas
                licenciadas em Portugal. O nosso objetivo é fornecer informações precisas e atualizadas para ajudar os
                utilizadores a tomar decisões informadas.
              </p>
              <p>
                <strong>Responsável pelo tratamento:</strong> ApostasDesportivasPT
                <br />
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">2. Informações que Recolhemos</h2>
            <div className="text-slate-300 leading-relaxed space-y-4">
              <div>
                <h4 className="text-white font-semibold mb-2">Informações Fornecidas Voluntariamente:</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Endereço de email quando subscreve a nossa newsletter</li>
                  <li>Comentários ou feedback enviados através dos nossos formulários</li>
                  <li>Informações de contacto quando nos contacta diretamente</li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-2">Informações Recolhidas Automaticamente:</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Endereço IP e localização aproximada</li>
                  <li>Tipo de navegador e dispositivo utilizado</li>
                  <li>Páginas visitadas e tempo de permanência no site</li>
                  <li>Origem do tráfego (como chegou ao nosso site)</li>
                  <li>Cookies e tecnologias similares (ver Política de Cookies)</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">3. Como Utilizamos as Suas Informações</h2>
            <div className="text-slate-300 leading-relaxed">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Fornecer e melhorar os nossos serviços de comparação</li>
                <li>Personalizar o conteúdo com base nas suas preferências</li>
                <li>Enviar newsletters e atualizações (apenas com o seu consentimento)</li>
                <li>Responder às suas questões e pedidos de suporte</li>
                <li>Analisar o uso do site para melhorar a experiência do utilizador</li>
                <li>Cumprir obrigações legais e regulamentares</li>
                <li>Proteger contra fraude e atividades maliciosas</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">4. Base Legal para o Tratamento</h2>
            <div className="text-slate-300 leading-relaxed space-y-3">
              <p>Processamos os seus dados pessoais com base em:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>
                  <strong>Consentimento:</strong> Para newsletters e comunicações de marketing
                </li>
                <li>
                  <strong>Interesse legítimo:</strong> Para análise do site e melhorias do serviço
                </li>
                <li>
                  <strong>Execução de contrato:</strong> Para fornecer os serviços solicitados
                </li>
                <li>
                  <strong>Obrigação legal:</strong> Para cumprir requisitos legais aplicáveis
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
                <li>Fornecedores de serviços técnicos (hosting, analytics, email marketing)</li>
                <li>Autoridades competentes quando exigido por lei</li>
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

            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">7. Segurança dos Dados</h2>
            <div className="text-slate-300 leading-relaxed">
              <p>
                Implementamos medidas técnicas e organizacionais adequadas para proteger os seus dados pessoais contra
                acesso não autorizado, alteração, divulgação ou destruição. Isto inclui encriptação SSL, acesso restrito
                aos dados e monitorização regular dos nossos sistemas.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">8. Retenção de Dados</h2>
            <div className="text-slate-300 leading-relaxed">
              <p>
                Mantemos os seus dados pessoais apenas pelo tempo necessário para os fins para os quais foram
                recolhidos, ou conforme exigido por lei. Os dados de analytics são mantidos por um máximo de 26 meses,
                enquanto os dados de newsletter são mantidos até cancelar a subscrição.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">9. Alterações a Esta Política</h2>
            <div className="text-slate-300 leading-relaxed">
              <p>
                Podemos atualizar esta política periodicamente. Notificaremos sobre alterações significativas através do
                nosso site ou por email. A data da última atualização está indicada no topo desta página.
              </p>
            </div>
          </section>

        </div>
      </div>
    </>
  )
}

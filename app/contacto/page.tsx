import { Header } from "@/components/header"

export default function ContactoPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">Contacto</h1>

        <div className="max-w-4xl mx-auto space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Entre em Contacto Connosco</h2>
            <div className="text-slate-300 space-y-4 bg-slate-900/90 backdrop-blur-sm rounded-lg p-6">
              <p>
                A equipa do ApostasDesportivasPT está sempre disponível para o ajudar. Seja para esclarecer dúvidas
                sobre as nossas análises, sugerir melhorias ou reportar problemas técnicos, estamos aqui para si.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Informações de Contacto</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/90 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-green-400 font-bold mb-3">Contactos por Email</h4>
                <div className="space-y-3 text-slate-300 text-sm">
                  <p>
                    <strong>Geral:</strong>
                    <br />
                    <span className="text-yellow-400">geral@apostasdesportivaspt.com</span>
                    <br />
                    <span className="text-xs">Para questões gerais e informações</span>
                  </p>
                  <p>
                    <strong>Suporte Técnico:</strong>
                    <br />
                    <span className="text-yellow-400">suporte@apostasdesportivaspt.com</span>
                    <br />
                    <span className="text-xs">Problemas técnicos e bugs</span>
                  </p>
                  <p>
                    <strong>Parcerias:</strong>
                    <br />
                    <span className="text-yellow-400">parcerias@apostasdesportivaspt.com</span>
                    <br />
                    <span className="text-xs">Propostas comerciais e colaborações</span>
                  </p>
                  <p>
                    <strong>Privacidade:</strong>
                    <br />
                    <span className="text-yellow-400">privacidade@apostasdesportivaspt.com</span>
                    <br />
                    <span className="text-xs">Questões sobre dados pessoais</span>
                  </p>
                </div>
              </div>

              <div className="bg-slate-900/90 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-green-400 font-bold mb-3">Tempos de Resposta</h4>
                <div className="space-y-3 text-slate-300 text-sm">
                  <p>
                    <strong>Questões Gerais:</strong>
                    <br />
                    <span className="text-yellow-400">24-48 horas</span>
                    <br />
                    <span className="text-xs">Durante dias úteis</span>
                  </p>
                  <p>
                    <strong>Suporte Técnico:</strong>
                    <br />
                    <span className="text-yellow-400">12-24 horas</span>
                    <br />
                    <span className="text-xs">Problemas urgentes prioritários</span>
                  </p>
                  <p>
                    <strong>Questões Legais:</strong>
                    <br />
                    <span className="text-yellow-400">Até 15 dias úteis</span>
                    <br />
                    <span className="text-xs">Conforme legislação aplicável</span>
                  </p>
                  <p>
                    <strong>Fins de Semana:</strong>
                    <br />
                    <span className="text-yellow-400">Resposta na 2ª feira</span>
                    <br />
                    <span className="text-xs">Exceto emergências técnicas</span>
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Como Podemos Ajudar</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4">
                <h4 className="text-blue-400 font-bold mb-2">Informações sobre Sites</h4>
                <p className="text-slate-300 text-sm">
                  Dúvidas sobre as nossas análises, metodologia de avaliação ou pedidos de revisão de classificações.
                </p>
              </div>

              <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-4">
                <h4 className="text-green-400 font-bold mb-2">Problemas Técnicos</h4>
                <p className="text-slate-300 text-sm">
                  Reportar bugs, problemas de carregamento, erros no site ou sugestões de melhorias técnicas.
                </p>
              </div>

              <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4">
                <h4 className="text-yellow-400 font-bold mb-2">Sugestões</h4>
                <p className="text-slate-300 text-sm">
                  Ideias para novos conteúdos, funcionalidades ou melhorias na experiência do utilizador.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Recursos de Ajuda Especializados</h2>
            <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-6">
              <h4 className="text-red-300 font-bold mb-4">Problemas com o Jogo?</h4>
              <p className="text-slate-300 mb-4">
                Se está a enfrentar dificuldades relacionadas com apostas ou jogos, existem recursos especializados
                disponíveis em Portugal:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-white font-semibold">Linha SOS Jogador</p>
                  <p className="text-yellow-400 text-xl font-bold">213 950 840</p>
                  <p className="text-sm text-slate-400">Segunda a Sexta: 10h-20h</p>
                </div>
                <div>
                  <p className="text-white font-semibold">SICAD Online</p>
                  <p className="text-yellow-400">www.sicad.pt</p>
                  <p className="text-sm text-slate-400">Recursos e apoio especializado</p>
                </div>
              </div>

              <p className="text-sm text-slate-300 mt-4">
                <strong>Nota:</strong> Não fornecemos aconselhamento médico ou psicológico. Para problemas graves,
                procure ajuda profissional qualificada.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Política de Comunicação</h2>
            <div className="bg-slate-900/90 backdrop-blur-sm rounded-lg p-6">
              <div className="text-slate-300 space-y-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">Ao contactar-nos, por favor inclua:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                    <li>Assunto claro e descritivo</li>
                    <li>Descrição detalhada da sua questão</li>
                    <li>Capturas de ecrã se aplicável (problemas técnicos)</li>
                    <li>Informações do seu navegador/dispositivo (se relevante)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-2">Comprometemo-nos a:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                    <li>Responder a todos os emails recebidos</li>
                    <li>Tratar todas as comunicações com confidencialidade</li>
                    <li>Fornecer respostas claras e úteis</li>
                    <li>Encaminhar questões especializadas para os departamentos adequados</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <div className="text-center mt-8 p-4 bg-green-900/20 border border-green-700/50 rounded-lg">
            <p className="text-green-300 text-sm">
              <strong>Aviso:</strong> O ApostasDesportivasPT.com é um serviço de comparação independente. Não somos uma
              casa de apostas e não processamos apostas ou transações financeiras. Para questões relacionadas com contas
              de apostas, contacte diretamente o operador relevante.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

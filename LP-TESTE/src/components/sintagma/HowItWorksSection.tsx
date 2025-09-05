import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, TrendingUp, BookOpen, Heart } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Foco em TEMPO: Produtividade Sem Sobrecarga",
      description: "Quanto tempo você perde escrevendo o que já viveu? Você já atendeu, refletiu, conduziu… mas ainda precisa anotar tudo? Com o SINTAGMA, você economiza até 25 segundos por paciente. Imagine isso em 15 pacientes por semana: são mais de 6 horas semanais liberadas! Esse tempo tem um valor inestimável. É mais do que dinheiro; é saúde mental, é oportunidade. Você pode usá-lo para descansar, estudar mais a fundo seus casos, desenvolver novos projetos para sua carreira, ou simplesmente para ter mais vida pessoal. O SINTAGMA não é um gasto, é um investimento inteligente na sua própria carreira, com um retorno muito maior do que o valor mensal. Quanto você tem investido em você, hoje?"
    },
    {
      number: "02",
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Foco em CARREIRA: Posicionamento e Valorização",
      description: "Tem gente que atende. Tem gente que constrói uma carreira de impacto. O profissional que cresce com consistência não vive preso ao operacional. Ele usa o tempo com estratégia, tecnologia e visão. Liberar horas da sua semana não é só sobre descansar; é sobre ter tempo para evoluir, construir sua própria estrutura e posicionamento, e ver sua clínica como um projeto de impacto."
    },
    {
      number: "03",
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      title: "Foco em ATUALIZAÇÃO: Estudo Baseado em Evidências",
      description: "Seu prontuário pode te ensinar mais do que o Instagram. Imagine um sistema que, além de organizar tudo da sessão, ainda te envia artigos, leituras e estudos com base nas queixas do seu paciente. Atualização automática. Evidência no dia a dia. Sem precisar correr atrás."
    },
    {
      number: "04",
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Foco em IMPACTO TERAPÊUTICO: Melhoria da Escuta e do Cuidado",
      description: "Você escuta o paciente ou divide atenção entre paciente e papel? Quando você não precisa anotar, sobra escuta. Quando não precisa lembrar de tudo, sobra presença. Um software pode cuidar do que é técnico, pra você focar no que é humano. Aumente o impacto das suas sessões com tecnologia a favor da escuta, garantindo que a clínica seja sempre sobre profundidade."
    }
  ];

  return (
    <section className="py-24 bg-section-3 section-transition relative overflow-hidden">
      {/* Futuristic floating background */}
      <div className="floating-bg absolute inset-0"></div>
      
      {/* Subtle geometric background */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-10 right-10 w-40 h-40 border border-primary/30 rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 border border-primary/20 rounded-lg rotate-12"></div>
        <div className="absolute top-1/3 left-1/3 w-20 h-20 bg-primary/10 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-primary/10 rounded-lg rotate-45"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 flex flex-col sm:flex-row items-center justify-center font-body px-4">
            <span className="mb-2 sm:mb-0">Como o</span>
            <img src="/logosintagmaNOVO.png" alt="SINTAGMA" className="h-8 sm:h-10 md:h-12 lg:h-14 object-contain mx-1 sm:mx-2" />
            <span className="mt-2 sm:mt-0">Funciona</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-body px-4">
            Sua Prática Transformada: SINTAGMA te Devolve Tempo, Impulsiona Sua Carreira e Eleva Seu Impacto.
          </p>
          <p className="text-base sm:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed font-body mt-3 sm:mt-4 px-4">
            Não vendemos software, vendemos liberdade, segurança, autoridade e maestria. Com o SINTAGMA, você vai experimentar:
          </p>
        </div>

        <div className="relative">
          {/* Animated connection lines */}
          <div className="hidden md:block absolute inset-0 pointer-events-none">
            {/* Horizontal line connecting cards 1-2 */}
            <div className="absolute top-[25%] left-[50%] w-[50%] h-0.5 bg-gradient-to-r from-primary/30 via-primary/60 to-primary/30">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"></div>
            </div>
            
            {/* Vertical line connecting row 1 to row 2 */}
            <div className="absolute top-[50%] left-[75%] w-0.5 h-[25%] bg-gradient-to-b from-primary/30 via-primary/60 to-primary/30">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary to-transparent animate-pulse" style={{animationDelay: '0.5s'}}></div>
            </div>
            
            {/* Horizontal line connecting cards 3-4 */}
            <div className="absolute top-[75%] left-[0%] w-[50%] h-0.5 bg-gradient-to-r from-primary/30 via-primary/60 to-primary/30">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
            
            {/* Connection dots */}
            <div className="absolute top-[25%] left-[50%] w-3 h-3 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-ping"></div>
            <div className="absolute top-[25%] left-[100%] w-3 h-3 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-ping" style={{animationDelay: '0.3s'}}></div>
            <div className="absolute top-[75%] left-[0%] w-3 h-3 bg-primary rounded-full transform translate-x-1/2 -translate-y-1/2 animate-ping" style={{animationDelay: '0.6s'}}></div>
            <div className="absolute top-[75%] left-[50%] w-3 h-3 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-ping" style={{animationDelay: '0.9s'}}></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="group glass hover:glass-orange transition-all duration-500 border-primary/10 hover:border-primary/30 h-full hover:scale-105 hover:shadow-2xl">
                  <CardContent className="p-8 text-center h-full flex flex-col">
                    <div className="mb-6">
                      <div className="text-6xl font-bold text-primary/30 mb-4 group-hover:text-primary/50 transition-colors duration-300">
                        {step.number}
                      </div>
                      <div className="flex justify-center mb-4">
                        <div className="p-4 bg-gradient-primary/10 rounded-full group-hover:bg-gradient-primary/20 transition-all duration-300 group-hover:shadow-glow group-hover:scale-110">
                          {step.icon}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 font-body group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed flex-grow font-body">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="glass-orange rounded-2xl p-8 max-w-4xl mx-auto border border-primary/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-body">
              Simplicidade na interface, sofisticação na tecnologia
            </h3>
            <p className="text-gray-600 text-lg font-body">
              Desenvolvido por psicólogos e psiquiatras para psicólogos e psiquiatras. Cada funcionalidade foi pensada para otimizar seu fluxo de trabalho, por alguém que sabe exatamente como você atua.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
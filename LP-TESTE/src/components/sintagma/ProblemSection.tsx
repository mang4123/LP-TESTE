import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, FileText, AlertTriangle, TrendingDown, Users, Brain } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
      title: "A Angústia de Parecer 'Ruim'",
      description: "O medo de que a falta de organização e um detalhe perdido passem uma imagem de desleixo, afetando sua reputação e autoconfiança.",
      impact: "Impacto na reputação"
    },
    {
      icon: <Brain className="w-8 h-8 text-red-500" />,
      title: "A Perda do Fio da Meada",
      description: "Não se trata de 'esquecer', mas de perder insights valiosos que poderiam ser a chave para o avanço de um caso complexo. Você atende, reflete, conduz… mas e o registro?",
      impact: "Insights perdidos"
    },
    {
      icon: <FileText className="w-8 h-8 text-red-500" />,
      title: "A Falta de Clareza e Continuidade",
      description: "Chegar à sessão seguinte com prontuários superficiais, dependendo unicamente de uma memória que pode falhar e tornar a retomada do tratamento menos eficaz.",
      impact: "Continuidade comprometida"
    },
    {
      icon: <Clock className="w-8 h-8 text-red-500" />,
      title: "Tempo que Se Dissolve",
      description: "Gastar horas preciosas no pós-consulta, organizando prontuários e gerando documentos, sentindo que esse tempo não se traduz em mais acurácia diagnóstica ou clareza.",
      impact: "Tempo desperdiçado"
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-red-500" />,
      title: "A Exaustão Silenciosa",
      description: "O acúmulo de tarefas administrativas e a preocupação constante com a integridade e legalidade dos registros geram um cansaço mental e físico que rouba sua energia e sua presença genuína na próxima consulta.",
      impact: "Burnout profissional"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-section-1 section-transition relative overflow-hidden">
      {/* Futuristic floating background */}
      <div className="floating-bg absolute inset-0"></div>
      
      {/* Orange side effects */}
      <div className="absolute top-0 left-0 w-1 h-64 bg-gradient-to-b from-primary via-primary/80 to-transparent opacity-60"></div>
      <div className="absolute top-0 left-0 w-32 h-1 bg-gradient-to-r from-primary via-primary/60 to-transparent opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-1 h-64 bg-gradient-to-t from-primary via-primary/80 to-transparent opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-32 h-1 bg-gradient-to-l from-primary via-primary/60 to-transparent opacity-50"></div>
      
      {/* Subtle geometric background - optimized for mobile */}
      <div className="absolute inset-0 opacity-10 sm:opacity-15">
        <div className="absolute top-10 left-4 sm:top-20 sm:left-20 w-16 h-16 sm:w-32 sm:h-32 border border-gray-300/40 rounded-full"></div>
        <div className="absolute bottom-10 right-4 sm:bottom-20 sm:right-20 w-12 h-12 sm:w-24 sm:h-24 border border-gray-300/30 rounded-lg rotate-45"></div>
        <div className="absolute top-1/2 left-1/3 w-8 h-8 sm:w-16 sm:h-16 bg-gray-200/30 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/3 w-10 h-10 sm:w-20 sm:h-20 bg-gray-200/30 rounded-lg rotate-12"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16 mt-12 sm:mt-16 lg:mt-20">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 font-body text-center leading-tight px-2">
          Você Sabia que o Maior Inimigo da sua Excelência Clínica...<br className="hidden sm:block" />
          <span className="sm:hidden">É a Rotina que Você Vive Hoje?</span>
          <span className="hidden sm:inline">É a Rotina que Você Vive Hoje?</span>
        </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-body px-2">
            Você, que se dedica à escuta e à complexidade da mente humana, sabe que ser um bom profissional vai muito além do consultório. A grande mentira é achar que basta atender bem para ter uma carreira de sucesso. A realidade é que o profissional da saúde mental enfrenta uma série de <strong>dores invisíveis</strong> que minam sua energia e comprometem sua capacidade de entregar a excelência que seu paciente merece:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {problems.map((problem, index) => (
            <Card key={index} className="group glass hover:glass transition-all duration-500 border-gray-200/30 hover:border-red-300/50">
              <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
                <div className="mb-4 sm:mb-6 flex justify-center">
                  <div className="p-3 sm:p-4 bg-red-50/80 rounded-full group-hover:bg-red-100/80 transition-all duration-300 group-hover:shadow-soft">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 text-red-500">
                      {React.cloneElement(problem.icon, { className: "w-6 h-6 sm:w-8 sm:h-8 text-red-500" })}
                    </div>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 font-body">
                  {problem.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4 font-body">
                  {problem.description}
                </p>
                <div className="text-xs sm:text-sm font-semibold text-red-600 bg-red-50/80 px-2 sm:px-3 py-1 rounded-full inline-block mt-3 sm:mt-4">
                  {problem.impact}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto border border-primary/20">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 font-body">
              É Hora de uma <span className="text-primary">Mudança</span>
            </h3>
            <p className="text-gray-700 text-base sm:text-lg font-body leading-relaxed">
              Você foi formado para cuidar de gente, não para brigar com papelada. Sua carreira não merece ficar estagnada na <strong>esteira infinita de tarefas</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
import { Heart, Target, Brain, Users, Zap, Check, X, AlertTriangle, Sparkles, Shield, Award } from "lucide-react";

export const ForWhomSection = () => {
  const forWho = [
    {
      icon: Heart,
      text: "São Psicólogos e Psiquiatras que vivem a clínica com verdade e paixão."
    },
    {
      icon: Target,
      text: "Buscam otimizar seu tempo sem perder a qualidade do atendimento ou a profundidade do raciocínio."
    },
    {
      icon: Brain,
      text: "Priorizam a acurácia diagnóstica, a continuidade do cuidado e a base científica em sua prática."
    },
    {
      icon: Shield,
      text: "Valorizam a segurança inegociável, a ética e a conformidade legal em seus registros."
    },
    {
      icon: Zap,
      text: "Desejam focar na essência do cuidado humano e menos na sobrecarga operacional."
    },
    {
      icon: Award,
      text: "Querem elevar sua reputação profissional e o impacto de seu trabalho."
    }
  ];

  const notFor = [
    {
      icon: AlertTriangle,
      text: "Procura apenas um sistema de gestão de clínica com agendamento e finanças (nosso foco é a inteligência e a segurança do prontuário)."
    },
    {
      icon: X,
      text: "Acredita que a IA irá substituí-lo na escuta e na decisão clínica (nós acreditamos que ela o sustenta e potencializa)."
    },
    {
      icon: AlertTriangle,
      text: "Não vê valor na organização, segurança e profundidade dos registros clínicos."
    },
    {
      icon: X,
      text: "Não se preocupa com a conformidade da LGPD em sua prática."
    },
    {
      icon: X,
      text: "Busca substituir sua própria escuta e interpretação pela escuta/interpretação de uma I.A. (não acreditamos nisso)."
    },
    {
      icon: AlertTriangle,
      text: "Negligencia os aspectos extra-atendimento na evolução profissional."
    }
  ];

  return (
    <section className="py-32 bg-section-3 section-transition relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto mb-24">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full px-8 py-3 mb-8 border border-primary/20 hover:shadow-2xl hover:shadow-[#aeb5fc]/25 transition-all duration-800 ease-out hover:bg-gradient-to-r hover:from-[#aeb5fc]/35 hover:to-secondary/20 hover:border-[#aeb5fc]/70 hover:scale-108 animate-[float_5s_ease-in-out_infinite] before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-[#aeb5fc]/15 before:via-transparent before:to-[#aeb5fc]/15 before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-800 relative overflow-hidden backdrop-blur-sm">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Excelência Profissional</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-8 leading-tight font-body">
            O SINTAGMA é Para Você Que Busca a 
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-medium block mt-2">
              Excelência...
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-body">
            O SINTAGMA foi cuidadosamente desenvolvido para profissionais de saúde mental que:
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* For Who */}
          <div className="relative flex flex-col h-full">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-4 bg-gradient-to-r from-[#aeb5fc]/15 to-emerald-50 rounded-2xl px-8 py-4 mb-8 border border-[#aeb5fc]/25 shadow-lg hover:shadow-xl hover:shadow-[#aeb5fc]/25 transition-all duration-600 hover:scale-105">
                <div className="p-3 bg-gradient-to-r from-[#aeb5fc] to-emerald-500 rounded-xl shadow-lg">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-medium text-gray-800 font-body">
                  <span className="text-[#aeb5fc] font-semibold">Perfeito</span> para Você
                </h3>
              </div>
              <p className="text-base text-gray-600 leading-relaxed font-body max-w-sm mx-auto">
                O SINTAGMA foi cuidadosamente desenvolvido para profissionais de saúde mental que:
              </p>
            </div>
            
            <div className="space-y-6 flex-1">
              {forWho.map((item, index) => (
                <div key={index} className="group bg-white/95 backdrop-blur-sm border border-[#aeb5fc]/15 rounded-2xl p-6 hover:shadow-2xl hover:shadow-[#aeb5fc]/20 transition-all duration-700 hover:-translate-y-2 hover:border-[#aeb5fc]/40 hover:bg-white">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 p-3 bg-gradient-to-br from-[#aeb5fc]/15 to-emerald-50 rounded-xl group-hover:from-[#aeb5fc]/25 group-hover:to-emerald-100 transition-all duration-500 group-hover:scale-110">
                      <item.icon className="w-6 h-6 text-[#aeb5fc] group-hover:text-[#9ca3f0]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-800 leading-relaxed font-medium font-body text-base group-hover:text-gray-900 transition-colors duration-300">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Not For */}
          <div className="relative flex flex-col h-full">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-4 bg-gradient-to-r from-red-50/80 to-red-25 rounded-2xl px-8 py-4 mb-8 border border-red-200/40 shadow-lg hover:shadow-xl hover:shadow-red-200/25 transition-all duration-600 hover:scale-105">
                <div className="p-3 bg-gradient-to-r from-red-500 to-red-600 rounded-xl shadow-lg">
                  <X className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-medium text-gray-800 font-body">
                  <span className="text-red-600 font-semibold">Não É</span> Para Quem Busca Apenas Um 'Sistema Genérico'
                </h3>
              </div>
              <p className="text-base text-gray-600 leading-relaxed font-body max-w-sm mx-auto">
                O SINTAGMA NÃO É indicado para quem:
              </p>
            </div>
            
            <div className="space-y-6 flex-1">
              {notFor.map((item, index) => (
                <div key={index} className="group bg-gradient-to-br from-red-50/80 to-white/90 backdrop-blur-sm border border-red-100/60 rounded-2xl p-6 hover:shadow-2xl hover:shadow-red-200/20 transition-all duration-700 hover:border-red-200/80 hover:from-red-50 hover:to-white">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 p-3 bg-gradient-to-br from-red-100/80 to-red-50 rounded-xl group-hover:from-red-200/90 group-hover:to-red-100 transition-all duration-500 group-hover:scale-110">
                      <item.icon className="w-6 h-6 text-red-600 group-hover:text-red-700" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 leading-relaxed font-medium font-body text-base group-hover:text-gray-800 transition-colors duration-300">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-24">
          <div className="relative bg-gradient-to-br from-orange-100 via-orange-50 to-orange-200/50 rounded-3xl p-16 shadow-2xl max-w-5xl mx-auto overflow-hidden border border-orange-200/30">
             {/* Background glow effects */}
             <div className="absolute inset-0 bg-gradient-to-r from-orange-200/30 via-transparent to-orange-300/30 opacity-50"></div>
             <div className="absolute top-0 left-1/4 w-32 h-32 bg-orange-300/40 rounded-full blur-3xl"></div>
             <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-orange-400/40 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="mb-12">
                <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-orange-300/30 hover:shadow-2xl hover:shadow-[#aeb5fc]/20 transition-all duration-900 ease-out hover:bg-gradient-to-r hover:from-white/90 hover:to-[#aeb5fc]/25 hover:border-[#aeb5fc]/50 hover:scale-107 animate-[breathe_6s_ease-in-out_infinite] before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-[#aeb5fc]/10 before:to-white/20 before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-900 relative overflow-hidden">
                   <Award className="w-5 h-5 text-orange-600" />
                   <span className="text-orange-700 font-medium">Excelência Reconhecida</span>
                </div>
                
                <h3 className="text-4xl lg:text-5xl font-light text-gray-800 mb-6 leading-tight font-body">
                   Você se <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-medium">identificou?</span>
                 </h3>
                 
                 <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto font-body">
                  Se você é um profissional que busca excelência, ética e humanização na sua prática, 
                  o SINTAGMA foi feito especialmente para você.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <button className="relative bg-gradient-to-r from-primary to-orange-500 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3">
                    <Sparkles className="w-5 h-5" />
                    Sim, Quero Transformar Minha Prática!
                  </button>
                </div>
                 
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <button className="relative bg-gradient-to-r from-primary to-orange-500 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3">
                    <Shield className="w-5 h-5" />
                    Experimente Grátis por 14 Dias
                  </button>
                </div>
              </div>
              
              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-orange-300/30">
                 <div className="flex items-center gap-2 text-gray-600">
                   <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                   <span className="text-sm">LGPD Compliant</span>
                 </div>
                 <div className="flex items-center gap-2 text-gray-600">
                   <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                   <span className="text-sm">End to end</span>
                 </div>
                 <div className="flex items-center gap-2 text-gray-600">
                   <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                   <span className="text-sm">ISO Certified</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
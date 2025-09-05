import React from 'react';
import { Check, X, Star, Zap, Shield, Clock, TrendingUp, Brain, Sparkles, ArrowRight, Award, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ComparisonSection = () => {
  const features = [
    {
      feature: "📝 Medo de esquecer detalhes cruciais da consulta.",
      traditional: "😰 Medo de esquecer detalhes cruciais da consulta.",
      sintagma: "✨ Prontuários detalhados e insights claros, sempre à mão.",
      description: "Memória perfeita vs ansiedade constante",
      icon: Brain,
      highlight: true
    },
    {
      feature: "⏳ Horas perdidas na digitação e organização pós-consulta.",
      traditional: "⏳ Horas perdidas na digitação e organização pós-consulta.",
      sintagma: "🚀 Prontuários impecáveis gerados em segundos pela IA.",
      description: "Eficiência vs desperdício de tempo",
      icon: Clock,
      highlight: true
    },
    {
      feature: "🔐 Insegurança quanto à conformidade legal e ética dos registros.",
      traditional: "🔐 Insegurança quanto à conformidade legal e ética dos registros.",
      sintagma: "🔒 Prática blindada com criptografia de ponta a ponta e LGPD.",
      description: "Segurança total vs preocupação constante",
      icon: Shield,
      highlight: true
    },
    {
      feature: "😩 Exaustão mental com a burocracia, tirando o foco do paciente.",
      traditional: "😩 Exaustão mental com a burocracia, tirando o foco do paciente.",
      sintagma: "🧘‍♀️ Mais tempo e energia para o cuidado humano e excelência clínica.",
      description: "Foco no paciente vs sobrecarga administrativa",
      icon: Target,
      highlight: true
    },
    {
      feature: "🤷‍♀️ Dificuldade em retomar o caso com clareza na próxima sessão.",
      traditional: "🤷‍♀️ Dificuldade em retomar o caso com clareza na próxima sessão.",
      sintagma: "💡 Sugestões inteligentes para o próximo atendimento e continuidade perfeita.",
      description: "Continuidade inteligente vs perda de contexto",
      icon: TrendingUp,
      highlight: true
    },
    {
      feature: "😭 Sentir que sua carreira está estagnada no operacional.",
      traditional: "😭 Sentir que sua carreira está estagnada no operacional.",
      sintagma: "🌟 Atuar nos níveis tático e estratégico, construindo uma carreira de impacto.",
      description: "Crescimento profissional vs estagnação",
      icon: Award,
      highlight: true
    }
  ];

  const renderValue = (value: boolean | string, isTraditional: boolean = false) => {
     if (typeof value === 'boolean') {
       return value ? (
         <div className={`flex items-center justify-center w-8 h-8 rounded-lg ${isTraditional ? 'bg-gray-50 border border-gray-200' : 'bg-emerald-50 border border-emerald-200'} transition-all duration-200`}>
           <Check className={`w-4 h-4 ${isTraditional ? 'text-gray-400' : 'text-emerald-600'}`} />
         </div>
       ) : (
         <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-50 border border-red-200">
           <X className="w-4 h-4 text-red-500" />
         </div>
       );
     }
     return (
       <div className={`px-3 py-1.5 rounded-lg text-sm font-medium ${isTraditional ? 'bg-gray-50 text-gray-600 border border-gray-200' : 'bg-primary/10 text-primary border border-primary/20'} transition-all duration-200`}>
         {value}
       </div>
     );
   };

   return (
    <section className="py-12 sm:py-16 lg:py-24 bg-section-2 section-transition relative overflow-hidden">
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6 hover:shadow-2xl hover:shadow-[#aeb5fc]/20 transition-all duration-700 ease-in-out hover:bg-gradient-to-r hover:from-[#aeb5fc]/25 hover:to-primary/20 hover:border-[#aeb5fc]/50 hover:scale-105 animate-[glow_3s_ease-in-out_infinite] before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-[#aeb5fc]/10 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-700 relative overflow-hidden border border-transparent">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
            <span className="text-primary font-medium text-xs sm:text-sm">Comparação</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-2">
            <img src="/logosintagmaNOVO.png" alt="SINTAGMA" className="h-8 sm:h-10 md:h-12 lg:h-14 object-contain inline mx-1 sm:mx-2" /> vs <span className="text-primary">Métodos Tradicionais</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            Descubra a <strong className="text-primary">revolução tecnológica</strong> que está transformando 
            a prática clínica e elevando o padrão de atendimento profissional.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Mobile Layout */}
          <div className="block lg:hidden space-y-4 sm:space-y-6">
            {features.map((item, index) => (
              <div key={index} className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="p-4 sm:p-6">
                  <div className="mb-4">
                    <div className="inline-flex items-center gap-2 bg-red-50 rounded-lg px-3 py-1.5 mb-3">
                      <span className="text-red-600 text-xs sm:text-sm font-medium">ANTES</span>
                    </div>
                    <p className="text-gray-700 font-medium text-sm sm:text-base">{item.traditional}</p>
                  </div>
                  <div className="border-t border-gray-100 pt-4">
                    <div className="inline-flex items-center gap-2 bg-primary/10 rounded-lg px-3 py-1.5 mb-3">
                      <span className="text-primary text-xs sm:text-sm font-medium">COM SINTAGMA</span>
                    </div>
                    <p className="text-primary font-medium text-sm sm:text-base">{item.sintagma}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-2 bg-gray-50/50 border-b border-gray-100">
              <div className="px-8 py-6 text-center border-r border-gray-100">
                <h3 className="text-lg font-semibold text-gray-600">
                  SUA REALIDADE ANTES DO SINTAGMA
                </h3>
              </div>
              <div className="px-8 py-6 text-center bg-primary/5">
                 <h3 className="text-lg font-semibold text-primary flex items-center justify-center">
                   SUA REALIDADE COM O <img src="/logosintagmaNOVO.png" alt="SINTAGMA" className="h-6 object-contain ml-2" />
                 </h3>
               </div>
            </div>

            {/* Features */}
            {features.map((item, index) => (
              <div key={index} className={`grid grid-cols-2 border-b border-gray-50 hover:bg-gray-50/50 transition-all duration-200 group ${item.highlight ? 'bg-primary/2' : ''}`}>
                <div className="px-8 py-6 border-r border-gray-50 flex items-center">
                  <p className="text-gray-700 font-medium">{item.traditional}</p>
                </div>
                <div className="px-8 py-6 flex items-center bg-primary/2">
                  <p className="text-primary font-medium">{item.sintagma}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-8 sm:mt-10 lg:mt-12">
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto border border-gray-100 shadow-sm">
              <div className="flex items-center justify-center gap-1 mb-4 sm:mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 font-body px-2">
                Faça a Escolha <span className="text-primary">Inteligente</span>
              </h3>
              
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto font-body px-2">
                Junte-se aos <strong className="text-primary">milhares de profissionais</strong> que já descobriram 
                o futuro da prática clínica com tecnologia de ponta.
              </p>
              
              <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center">
                <div className="group relative w-full sm:w-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <button className="relative bg-gradient-to-r from-primary to-orange-500 text-white font-bold px-6 sm:px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 w-full sm:w-auto text-sm sm:text-base">
                    <Sparkles className="w-4 h-4" />
                    <span className="sm:hidden">Teste Gratuito</span>
                    <span className="hidden sm:inline">Começar Teste Gratuito</span>
                  </button>
                </div>
                
                <div className="group relative w-full sm:w-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <button className="relative bg-gradient-to-r from-primary to-orange-500 text-white font-bold px-6 sm:px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 w-full sm:w-auto text-sm sm:text-base">
                    <Brain className="w-4 h-4" />
                    <span className="sm:hidden">Demonstração</span>
                    <span className="hidden sm:inline">Assista a demonstração</span>
                  </button>
                </div>
              </div>
              
              <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-gray-500 text-xs sm:text-sm">
                <div className="flex items-center gap-1">
                  <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                  <span>100% Seguro</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                  <span>Setup em 5min</span>
                </div>
                <div className="flex items-center gap-1">
                  <Award className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                  <span>Suporte 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
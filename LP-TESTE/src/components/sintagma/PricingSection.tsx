import { Button } from "@/components/ui/button";
import { Check, Calendar, CreditCard, Shield, Zap, Star, Sparkles, Crown, Award } from "lucide-react";

export const PricingSection = () => {
  const features = [
    "Todos os Recursos SINTAGMA",
    "Prontuários Ilimitados", 
    "Criptografia P2P e LGPD",
    "Transcrição com IA Curada",
    "Modelos Personalizáveis",
    "Suporte Especializado",
    "Atualizações Contínuas"
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-section-5 section-transition relative overflow-hidden">
      {/* Background decorative elements - mobile optimized */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-4 sm:top-20 sm:left-10 w-32 h-32 sm:w-72 sm:h-72 bg-gradient-to-br from-orange-200/20 to-orange-300/10 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-10 right-4 sm:bottom-20 sm:right-10 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-br from-blue-200/15 to-blue-200/10 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-[600px] sm:h-[600px] bg-gradient-to-br from-orange-100/10 to-transparent rounded-full blur-2xl sm:blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-orange-600/10 backdrop-blur-sm border border-orange-200/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 hover:shadow-2xl hover:shadow-[#aeb5fc]/30 transition-all duration-1000 ease-out hover:bg-gradient-to-r hover:from-[#aeb5fc]/30 hover:to-orange-600/20 hover:border-[#aeb5fc]/60 hover:scale-112 animate-[pulse-glow_4s_ease-in-out_infinite] before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-[#aeb5fc]/20 before:via-orange-500/10 before:to-[#aeb5fc]/20 before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-1000 relative overflow-hidden">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
            <span className="text-orange-700 font-semibold text-xs sm:text-sm tracking-wide uppercase">Planos Premium</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent mb-6 sm:mb-8 leading-tight font-display px-2">
            Escolha o Plano Que 
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent block mt-1 sm:mt-2 font-display">
              Impulsiona Sua Excelência
            </span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-8 font-body px-2">
            Invista na sua prática, na sua segurança e na qualidade do seu cuidado. 
            O SINTAGMA se adapta às suas necessidades com tecnologia de ponta.
          </p>
          

        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          {/* Monthly Plan */}
          <div className="group relative h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-[#aeb5fc]/10 to-orange-200/10 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
            <div className="relative bg-white/95 backdrop-blur-sm border border-[#aeb5fc]/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg shadow-[#aeb5fc]/10 hover:shadow-xl hover:shadow-[#aeb5fc]/20 transition-all duration-500 hover:-translate-y-1 h-full flex flex-col">
              <div className="text-center mb-4 sm:mb-6 pt-1 sm:pt-2">
                <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
                  <div className="p-1.5 sm:p-2 bg-gradient-to-br from-[#aeb5fc] to-orange-500 rounded-lg shadow-sm">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-slate-800 to-[#aeb5fc] bg-clip-text text-transparent font-body">Plano Mensal</h3>
                    <p className="text-[#aeb5fc] font-medium text-xs tracking-wide uppercase">Flexibilidade</p>
                  </div>
                </div>
                
                <div className="mb-4 sm:mb-6">
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#aeb5fc] to-orange-500 bg-clip-text text-transparent">R$ 250</span>
                    <span className="text-base sm:text-lg text-slate-500 font-medium">/mês</span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-[#aeb5fc]/5 border border-green-200/50 rounded-lg px-2 sm:px-3 py-1">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span className="text-green-700 font-medium text-xs">Sem fidelidade</span>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-[#aeb5fc]/5 to-orange-50/50 border border-[#aeb5fc]/15 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-4 sm:mb-6">
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[#aeb5fc]" />
                    <span className="text-[#aeb5fc] font-bold text-xs uppercase tracking-wide">Ideal Para</span>
                  </div>
                  <p className="text-slate-700 font-medium leading-relaxed text-xs sm:text-sm">
                    Experimentar por curto prazo, sem compromisso inicial.
                  </p>
                </div>
              </div>
              
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 flex-1">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3 group/item">
                    <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-br from-[#aeb5fc] to-green-500 rounded-full flex items-center justify-center shadow-sm">
                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                    </div>
                    <span className="text-slate-700 font-semibold group-hover/item:text-slate-900 transition-colors text-xs sm:text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Button className="relative w-full text-sm sm:text-base py-3 sm:py-4 bg-gradient-to-r from-primary to-orange-500 text-white font-bold rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 sm:gap-3" size="lg">
                  <CreditCard className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="hidden sm:inline">Assinar Plano Mensal</span>
                  <span className="sm:hidden">Plano Mensal</span>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Annual Plan */}
          <div className="group relative h-full">
            {/* Popular badge */}
            <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 z-20">
              <div className="bg-gradient-to-r from-[#aeb5fc] to-blue-600 text-white px-3 sm:px-6 py-1.5 sm:py-2 rounded-full font-bold text-xs flex items-center gap-1 sm:gap-2 shadow-lg shadow-[#aeb5fc]/30">
                <Crown className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="tracking-wide uppercase text-xs">40% de desconto</span>
                <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
              </div>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-br from-[#aeb5fc]/15 to-blue-200/15 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
            <div className="relative bg-white/95 backdrop-blur-sm border-2 border-[#aeb5fc]/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl shadow-[#aeb5fc]/20 hover:shadow-2xl hover:shadow-[#aeb5fc]/30 transition-all duration-500 hover:-translate-y-1 h-full flex flex-col">
              <div className="text-center mb-4 sm:mb-6 pt-1 sm:pt-2">
                <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
                  <div className="p-1.5 sm:p-2 bg-gradient-to-br from-[#aeb5fc] to-blue-600 rounded-lg shadow-sm">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-[#aeb5fc] to-blue-600 bg-clip-text text-transparent">Plano Anual</h3>
                    <p className="text-[#aeb5fc] font-medium text-xs tracking-wide uppercase">Máximo Benefício</p>
                  </div>
                </div>
                
                <div className="mb-4 sm:mb-6">
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#aeb5fc] to-blue-600 bg-clip-text text-transparent">R$ 150</span>
                    <span className="text-base sm:text-lg text-slate-500 font-medium">/mês</span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-blue-50 border border-blue-200/50 rounded-lg px-2 sm:px-3 py-1">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <span className="text-blue-700 font-medium text-xs">Fidelidade anual</span>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-[#aeb5fc]/10 to-blue-50/50 border border-[#aeb5fc]/20 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-4 sm:mb-6">
                  <div className="flex items-center gap-2 mb-1">
                    <Crown className="w-3 h-3 sm:w-4 sm:h-4 text-[#aeb5fc]" />
                    <span className="text-[#aeb5fc] font-bold text-xs uppercase tracking-wide">Ideal Para</span>
                  </div>
                  <p className="text-slate-700 font-medium leading-relaxed text-xs sm:text-sm">
                    Compromisso com a excelência, com maior economia e todos os benefícios.
                  </p>
                </div>
              </div>
              
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 flex-1">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3 group/item">
                    <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-br from-[#aeb5fc] to-blue-600 rounded-full flex items-center justify-center shadow-sm">
                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                    </div>
                    <span className="text-slate-700 font-semibold group-hover/item:text-slate-900 transition-colors text-xs sm:text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Button className="relative w-full text-sm sm:text-base py-3 sm:py-4 bg-gradient-to-r from-primary to-orange-500 text-white font-bold rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 sm:gap-3" size="lg">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="hidden sm:inline">Assinar Plano Anual e Economizar!</span>
                  <span className="sm:hidden">Plano Anual</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Free Trial CTA */}
        <div className="text-center">
          <div className="bg-white/90 backdrop-blur-sm border border-orange-100/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-700 bg-clip-text text-transparent mb-3 sm:mb-4 px-2">
               Quem já testou, não consegue mais atender sem.
             </h3>
            
            <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6 px-2">
              Experimente e entenda o porquê. Comece com nosso{" "}
              <span className="font-bold text-orange-600">Teste Gratuito de 14 Dias</span>.
            </p>
            
            <div className="flex justify-center">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-500 rounded-lg sm:rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Button size="lg" className="relative px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-primary to-orange-500 text-white font-bold rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                  Experimente Grátis
                </Button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
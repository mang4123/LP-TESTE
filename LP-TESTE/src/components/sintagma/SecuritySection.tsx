import { Shield, Lock, Eye, Database, UserCheck, FileX, Check, X, Sparkles, Star, ArrowRight, Award, Heart, Zap } from "lucide-react";

export const SecuritySection = () => {
  const neverDo = [
    {
      icon: FileX,
      text: "Não vamos armazenar seus áudios.",
      detail: "Processamento local e exclusão automática"
    },
    {
      icon: Eye,
      text: "Não vamos ter acesso aos seus conteúdos clínicos.",
      detail: "Criptografia end-to-end garantida"
    },
    {
      icon: Database,
      text: "Não vamos vender ou usar suas informações para outros fins.",
      detail: "Compromisso ético absoluto"
    }
  ];

  const guarantees = [
    {
      icon: Shield,
      title: "Criptografia de Ponta a Ponta",
      description: "Tudo que for gravado ou transcrito é criptografado e armazenado exclusivamente na sua conta, no seu dispositivo.",
      badge: "Militar",
      highlight: true
    },
    {
      icon: UserCheck,
      title: "Controle Total é Seu",
      description: "Você tem o poder de deletar sessões ou dados a qualquer momento. Um botão de encerramento de conta garante que todo o conteúdo será apagado do sistema, sob seu comando.",
      badge: "100%",
      highlight: false
    },
    {
      icon: Lock,
      title: "Conformidade Completa com a LGPD",
      description: "Desenvolvido para atender e superar os mais rigorosos padrões de proteção de dados.",
      badge: "Certificado",
      highlight: true
    },
    {
      icon: Database,
      title: "IA Responsável e Curada",
      description: "Nossa inteligência artificial não 'lê' o conteúdo como uma pessoa faria; ela processa para organizar e apoiar a interpretação. Além disso, nossa IA não é de fonte aberta e suas referências bibliográficas passam por curadoria para garantir a precisão e evitar 'alucinações'.",
      badge: "Ética",
      highlight: false
    }
  ];

  return (
    <section className="py-32 bg-section-5 section-transition relative overflow-hidden">
      {/* Advanced background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 border-2 border-primary/40 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 border-2 border-orange-400/30 rounded-lg rotate-45 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-r from-primary/20 to-orange-400/20 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 left-1/4 w-28 h-28 bg-gradient-to-r from-orange-400/20 to-primary/20 rounded-lg rotate-12 animate-pulse delay-700"></div>
      </div>
      
      {/* Floating security icons */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-primary/40 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-orange-400/60 rounded-full animate-bounce delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-2.5 h-2.5 bg-primary/50 rounded-full animate-bounce delay-1500"></div>
      </div>
      
      {/* Large floating elements with opacity */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating shield icons */}
        <div className="absolute top-16 left-20 opacity-5 animate-float">
          <Shield className="w-32 h-32 text-primary transform rotate-12" />
        </div>
        <div className="absolute top-40 right-16 opacity-4 animate-float-delayed">
          <Lock className="w-28 h-28 text-orange-500 transform -rotate-12" />
        </div>
        <div className="absolute bottom-32 left-16 opacity-6 animate-float-slow">
          <UserCheck className="w-24 h-24 text-primary transform rotate-45" />
        </div>
        <div className="absolute bottom-16 right-32 opacity-3 animate-float">
          <Database className="w-36 h-36 text-orange-400 transform -rotate-6" />
        </div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/3 left-1/2 opacity-8 animate-float-delayed">
          <div className="w-20 h-20 border-4 border-primary/30 rounded-full transform rotate-45"></div>
        </div>
        <div className="absolute bottom-1/2 right-1/3 opacity-5 animate-float-slow">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-400/20 to-primary/20 rounded-lg transform rotate-12"></div>
        </div>
        <div className="absolute top-2/3 left-1/5 opacity-7 animate-float">
          <div className="w-12 h-12 border-2 border-orange-400/40 transform rotate-45"></div>
        </div>
        
        {/* Floating text elements */}
        <div className="absolute top-1/4 right-1/5 opacity-4 animate-float-delayed transform rotate-12">
          <span className="text-6xl font-bold text-primary/20">LGPD</span>
        </div>
        <div className="absolute bottom-1/4 left-1/3 opacity-3 animate-float-slow transform -rotate-6">
          <span className="text-5xl font-bold text-orange-400/20">SSL</span>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto mb-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full px-8 py-3 mb-8 border border-primary/20 hover:shadow-2xl hover:shadow-[#aeb5fc]/30 transition-all duration-1000 ease-out hover:bg-gradient-to-r hover:from-[#aeb5fc]/30 hover:to-primary/15 hover:border-[#aeb5fc]/60 hover:scale-110 animate-[shimmer_4s_ease-in-out_infinite] before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-transparent before:via-[#aeb5fc]/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-1000 relative overflow-hidden backdrop-blur-sm">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Segurança Máxima</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Sua Confidencialidade Não É Um Detalhe. 
            <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent block mt-2">É a Base do SINTAGMA.</span>
          </h2>
          
          <div className="relative mb-8">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-orange-400/20 rounded-3xl blur-xl"></div>
            
            <div className="relative backdrop-blur-sm bg-gradient-to-r from-white/90 to-orange-50/90 rounded-3xl p-10 border-2 border-primary/20 shadow-2xl">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Heart className="w-6 h-6 text-primary animate-pulse" />
                <Sparkles className="w-6 h-6 text-orange-500 animate-pulse delay-300" />
                <Heart className="w-6 h-6 text-primary animate-pulse delay-600" />
              </div>
              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                Em uma profissão onde a <strong className="text-primary">confiança é tudo</strong>, a segurança dos seus dados e dos seus 
                pacientes é <strong className="text-orange-600">inegociável</strong>. Por isso, no SINTAGMA, a confidencialidade não é uma 
                promessa de marketing – é um <strong className="text-primary">requisito ético</strong> e a base do nosso sistema. Escolher uma IA hoje não é mais opcional, mas essa escolha precisa ser feita com <strong className="text-primary">muita responsabilidade</strong>.
              </p>
            </div>
          </div>
          

        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Compromissos Absolutos */}
          <div className="relative">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-red-200/40 shadow-lg h-full">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-red-50 rounded-full px-4 py-2 mb-4">
                  <X className="w-4 h-4 text-red-500" />
                  <span className="text-red-600 font-semibold text-xs uppercase tracking-wide">Compromissos Absolutos</span>
                </div>
                <h3 className="text-xl font-bold text-red-600 leading-tight">
                  O que <span className="text-red-700">NUNCA</span> faremos:
                </h3>
              </div>
              
              <div className="space-y-4">
                {neverDo.map((item, index) => (
                  <div key={index} className="group relative">
                    <div className="flex items-start gap-4 p-4 bg-red-50/50 rounded-xl border border-red-100 group-hover:border-red-200 transition-all duration-200">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                          <X className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      <div className="flex-1 min-h-0">
                        <p className="text-gray-800 font-medium text-sm mb-1 font-body">{item.text}</p>
                        <p className="text-red-600 text-xs font-body">{item.detail}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Suas Garantias */}
          <div className="relative">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-primary/30 shadow-lg h-full">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
                  <Check className="w-4 h-4 text-primary" />
                  <span className="text-primary font-semibold text-xs uppercase tracking-wide">Suas Garantias</span>
                </div>
                <h3 className="text-xl font-bold text-primary leading-tight font-body">
                  O que você <span className="text-orange-600">TEM</span>:
                </h3>
              </div>
              
              <div className="space-y-4">
                {guarantees.map((guarantee, index) => (
                  <div key={index} className="group relative">
                    <div className={`p-4 rounded-xl border transition-all duration-200 ${
                      guarantee.highlight 
                        ? 'bg-primary/5 border-primary/30 group-hover:border-primary/50' 
                        : 'bg-primary/5 border-primary/20 group-hover:border-primary/30'
                    }`}>
                      <div className="flex items-start gap-4">
                         <div className="flex-shrink-0">
                           <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                             guarantee.highlight 
                               ? 'bg-primary' 
                               : 'bg-primary/80'
                           }`}>
                             <Check className="w-4 h-4 text-white" />
                           </div>
                         </div>
                         
                         <div className="flex-1 min-h-0">
                           <div className="flex items-center justify-between mb-2">
                             <h4 className="text-sm font-bold text-gray-800 group-hover:text-primary transition-colors duration-200">{guarantee.title}</h4>
                             <div className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full ml-2">
                               {guarantee.badge}
                             </div>
                           </div>
                           <p className="text-gray-600 text-xs leading-relaxed">{guarantee.description}</p>
                         </div>
                       </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Informative Card */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="relative">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-orange-400/20 rounded-2xl blur-xl opacity-50"></div>
            
            <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 shadow-xl">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                  <Heart className="w-5 h-5 text-primary" />
                  <span className="text-primary font-semibold text-sm uppercase tracking-wide">Compromisso Ético</span>
                </div>
                
                <p className="text-lg text-gray-800 leading-relaxed font-medium">
                  Essa não é uma ferramenta genérica de tecnologia. É um apoio clínico criado por quem entende de{' '}
                  <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent font-bold">ética</span>,{' '}
                  <span className="bg-gradient-to-r from-orange-500 to-primary bg-clip-text text-transparent font-bold">escuta</span>{' '}e{' '}
                  <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent font-bold">confidencialidade</span>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom message */}
        <div className="text-center max-w-4xl mx-auto relative">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-orange-400/30 rounded-3xl blur-2xl opacity-30"></div>
          
          <div className="relative backdrop-blur-sm bg-gradient-to-r from-white/95 to-orange-50/95 rounded-3xl p-12 border-2 border-primary/30 shadow-2xl">
            {/* Floating icons animation */}
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="relative">
                <Shield className="w-10 h-10 text-primary animate-pulse" />
                <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
              </div>
              <div className="relative">
                <Heart className="w-10 h-10 text-orange-500 animate-pulse delay-300" />
                <div className="absolute inset-0 bg-orange-400/20 rounded-full animate-ping delay-300"></div>
              </div>
              <div className="relative">
                <Award className="w-10 h-10 text-primary animate-pulse delay-600" />
                <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping delay-600"></div>
              </div>
            </div>
            
            <p className="text-2xl text-gray-800 leading-relaxed font-medium mb-8">
              Quando você escolhe o <img src="/logosintagmaNOVO.png" alt="SINTAGMA" className="inline h-6 md:h-8 object-contain mx-1" />, não está apenas adotando uma ferramenta de IA. 
              Está escolhendo um <strong className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">parceiro</strong> que entende que a{' '}
              <strong className="bg-gradient-to-r from-orange-500 to-primary bg-clip-text text-transparent">confiança</strong>{' '}é 
              a base de tudo na área da saúde.
            </p>
            
            {/* Call to action */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-500 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <button className="relative bg-gradient-to-r from-primary to-orange-500 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3">
                  <span>Experimente com Segurança</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex items-center gap-2 text-gray-600">
                <Sparkles className="w-5 h-5 text-orange-500" />
                <span className="font-medium">100% Gratuito para Testar</span>
              </div>
            </div>
            
            {/* Trust indicators */}
            <div className="flex items-center justify-center gap-8 mt-8 pt-8 border-t border-primary/20">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-gray-600">LGPD Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-gray-600">End to end</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-gray-600">Certificado ISO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Add custom animations for floating elements
const floatingAnimations = `
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
  }
  
  @keyframes float-delayed {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-15px) rotate(-3deg); }
  }
  
  @keyframes float-slow {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-10px) rotate(2deg); }
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  .animate-float-delayed {
    animation: float-delayed 8s ease-in-out infinite 2s;
  }
  
  .animate-float-slow {
    animation: float-slow 10s ease-in-out infinite 1s;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = floatingAnimations;
  document.head.appendChild(styleSheet);
}
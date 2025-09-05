import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-section-1 section-transition overflow-hidden hero-floating-bg">
      {/* Futuristic background with animated gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent"></div>
      
      {/* Floating images without background - optimized for mobile */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/flutuante1.png"
          alt=""
          className="absolute top-20 left-4 lg:left-10 w-12 h-12 lg:w-20 lg:h-20 opacity-20 lg:opacity-30 animate-levitate"
        />
        <img
          src="/flutuante2.png"
          alt=""
          className="absolute top-32 right-4 lg:top-40 lg:right-20 w-10 h-10 lg:w-16 lg:h-16 opacity-15 lg:opacity-25 animate-float-medium"
          style={{ animationDelay: '1s' }}
        />
        <img
          src="/flutuante1.png"
          alt=""
          className="absolute bottom-32 left-1/4 w-8 h-8 lg:w-14 lg:h-14 opacity-10 lg:opacity-20 animate-fade-float"
          style={{ animationDelay: '2s' }}
        />
        <img
          src="/flutuante2.png"
          alt=""
          className="absolute bottom-20 right-4 lg:right-10 w-14 h-14 lg:w-24 lg:h-24 opacity-20 lg:opacity-35 animate-glow-pulse"
          style={{ animationDelay: '3s' }}
        />
        <img
          src="/flutuante1.png"
          alt=""
          className="absolute top-1/2 left-2 lg:left-5 w-8 h-8 lg:w-12 lg:h-12 opacity-10 lg:opacity-15 animate-float-slow"
          style={{ animationDelay: '4s' }}
        />
        <img
          src="/flutuante2.png"
          alt=""
          className="absolute top-1/3 right-1/4 w-10 h-10 lg:w-16 lg:h-16 opacity-15 lg:opacity-25 animate-levitate"
          style={{ animationDelay: '0.5s' }}
        />
        
        {/* New floating images - optimized for mobile */}
        <img
          src="/25@8x.png"
          alt=""
          className="absolute top-16 right-1/3 w-16 h-16 lg:w-28 lg:h-28 opacity-10 lg:opacity-15"
          style={{
            animation: 'float 8s ease-in-out infinite 1.5s'
          }}
        />
        <img
          src="/9@8x.png"
          alt=""
          className="absolute bottom-40 left-8 lg:left-16 w-12 h-12 lg:w-22 lg:h-22 opacity-15 lg:opacity-20"
          style={{
            animation: 'float 10s ease-in-out infinite 3.5s'
          }}
        />
        <img
          src="/5@8x.png"
          alt=""
          className="absolute top-2/3 right-6 lg:right-12 w-10 h-10 lg:w-18 lg:h-18 opacity-12 lg:opacity-18"
          style={{
            animation: 'float 12s ease-in-out infinite 2.5s'
          }}
        />
        <img
          src="/25@8x.png"
          alt=""
          className="absolute bottom-1/4 left-1/3 w-10 h-10 lg:w-16 lg:h-16 opacity-8 lg:opacity-12"
          style={{
            animation: 'float 9s ease-in-out infinite 4.5s'
          }}
        />
        <img
          src="/9@8x.png"
          alt=""
          className="absolute top-1/4 left-1/2 w-8 h-8 lg:w-14 lg:h-14 opacity-8 lg:opacity-10"
          style={{
            animation: 'float 11s ease-in-out infinite 1s'
          }}
        />
        
        {/* Additional floating particles */}
        <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-primary/30 rounded-full"></div>
        <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-secondary/40 rounded-full"></div>
        <div className="absolute top-1/2 right-1/2 w-2 h-2 bg-primary/20 rounded-full"></div>
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto text-center space-y-8 sm:space-y-12">
          {/* Content */}
          <div className="space-y-8 sm:space-y-12">
            <div className="space-y-6 sm:space-y-8">
              <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground leading-tight max-w-5xl mx-auto font-display px-2">
                Para Psicólogos e Psiquiatras
                <span className="block text-primary mt-3 sm:mt-4 font-display text-base sm:text-lg lg:text-xl xl:text-2xl">
                  Seu raciocínio clínico é seu maior ativo. <span className="text-gray-500">Liberte-se das horas gastas em anotações manuais pós-consulta, da preocupação em perder detalhes cruciais e da insegurança jurídica, tudo isso com a tranquilidade da privacidade e segurança de ponta a ponta do SINTAGMA.</span>
                </span>
              </h1>
              
              <div className="glass p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border border-primary/20 max-w-4xl mx-auto futuristic-card">
                <p className="text-sm sm:text-base text-foreground leading-relaxed font-body">
                  O futuro da sua clínica chegou. SINTAGMA: a Inteligência Artificial que 
                  eleva sua acurácia diagnóstica, blinda sua prática com segurança inabalável 
                  e redefine o que é ser um clínico <strong>confiante</strong>, <strong>ético</strong> e <strong>verdadeiramente presente</strong>.
                </p>
              </div>
            </div>
            

          </div>
          

        </div>
      </div>
    </section>
  );
};
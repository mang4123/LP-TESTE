import React from 'react';
import { ArrowRight, Star, Shield, Zap } from 'lucide-react';

const FinalCTASection = () => {
  return (
    <section className="py-24 bg-section-6 section-transition relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-primary/15 rounded-lg rotate-45"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-primary/10 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4 font-display">
              Chegou a Hora de Desbloquear a Próxima Fase da Sua <span className="text-primary font-medium">Excelência Clínica</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto font-body mb-4">
              Você já tem o conhecimento. Agora tenha a estrutura. Não permita que a burocracia limite seu potencial.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto font-body mb-4">
              Junte-se aos profissionais que já estão elevando sua excelência com o SINTAGMA.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto font-body font-medium">
              Organize o invisível. Dê forma ao essencial.
            </p>
          </div>

          {/* Main CTA Button */}
          <div className="flex justify-center">
            <button className="relative bg-gradient-to-r from-primary to-orange-500 text-white font-bold py-6 px-12 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 flex items-center gap-3 backdrop-blur-sm bg-white/10 border border-white/20">
              <span>Experimente com Segurança</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
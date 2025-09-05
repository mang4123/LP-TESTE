import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Zap, Shield, Users, TrendingUp } from 'lucide-react';

const SolutionSection = () => {
  const features = [
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "Transforme seu Prontuário em Ferramenta de Decisão",
      description: "Não é uma obrigação, é um aliado que te devolve clareza e sustenta seu raciocínio clínico."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Garanta Acuidade e Profundidade",
      description: "Tenha acesso a todos os detalhes e nuances da consulta, organizados e analisados por uma IA treinada com o melhor das expertises clínicas, aprimorando sua visão diagnóstica."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Blinde Sua Prática com Segurança Inabalável",
      description: "Com criptografia de ponta a ponta e total conformidade com a LGPD, seus registros são invioláveis."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Liberte Sua Mente para o Essencial",
      description: "A IA cuida dos registros, para que você possa focar 100% na escuta, no acolhimento e na relação terapêutica – o que você é insubstituível."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Atualize Sua Prática Automaticamente",
      description: "Imagine um sistema que, além de organizar, ainda te envia artigos, leituras e estudos com base nas queixas do seu paciente."
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-section-2 section-transition relative overflow-hidden">
      {/* Futuristic floating background with orange tones */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-primary/5"></div>
      
      {/* Enhanced orange side effects - mobile optimized */}
      <div className="absolute top-0 left-0 w-1 sm:w-2 h-32 sm:h-64 bg-gradient-to-b from-primary via-primary/70 to-transparent opacity-60 sm:opacity-80"></div>
      <div className="absolute top-0 left-0 w-24 sm:w-48 h-1 sm:h-2 bg-gradient-to-r from-primary via-primary/50 to-transparent opacity-50 sm:opacity-70"></div>
      <div className="absolute bottom-0 right-0 w-1 sm:w-2 h-32 sm:h-64 bg-gradient-to-t from-primary via-primary/70 to-transparent opacity-60 sm:opacity-80"></div>
      <div className="absolute bottom-0 right-0 w-24 sm:w-48 h-1 sm:h-2 bg-gradient-to-l from-primary via-primary/50 to-transparent opacity-50 sm:opacity-70"></div>
      
      {/* Orange geometric background elements - mobile optimized */}
      <div className="absolute inset-0 opacity-15 sm:opacity-25">
        <div className="absolute top-10 left-4 sm:top-20 sm:left-10 w-16 h-16 sm:w-32 sm:h-32 border border-primary/40 rounded-full"></div>
        <div className="absolute bottom-10 right-4 sm:bottom-20 sm:right-10 w-12 h-12 sm:w-24 sm:h-24 border border-primary/30 rounded-lg rotate-45"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 sm:w-16 sm:h-16 bg-primary/20 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-10 h-10 sm:w-20 sm:h-20 bg-primary/15 rounded-lg rotate-12"></div>
        <div className="absolute top-1/4 right-1/3 w-6 h-6 sm:w-12 sm:h-12 bg-primary/10 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/3 w-7 h-7 sm:w-14 sm:h-14 border border-primary/25 rounded-lg rotate-30"></div>
      </div>
      
      {/* Additional orange glow effects - mobile optimized */}
      <div className="absolute top-1/3 left-0 w-32 h-32 sm:w-64 sm:h-64 bg-primary/5 rounded-full blur-2xl sm:blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-primary/5 rounded-full blur-2xl sm:blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 font-body text-center leading-tight px-2">
          <strong>SINTAGMA</strong>: Onde a Inteligência Artificial Pensa COM Você,<br className="hidden sm:block" />
          <span className="sm:hidden">para que Você Possa Atender Melhor.</span>
          <span className="hidden sm:inline">para que Você Possa Atender Melhor.</span>
        </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-body px-2">
          <strong>SINTAGMA</strong> significa a arte de dar forma e sentido a conjuntos de palavras, transformando-as em unidades coesas que revelam a estrutura fundamental de uma ideia, de uma emoção, da própria narrativa de um ser. E é exatamente isso que nosso aplicativo faz com suas consultas.
          <br /><br />
          Desenvolvido por psicólogos e psiquiatras para psicólogos e psiquiatras. Cada funcionalidade foi pensada para otimizar seu fluxo de trabalho, por alguém que sabe exatamente como você atua.
          <br /><br />
          A tecnologia já não é mais 'futuro distante'. O teleatendimento, antes criticado, virou regra e impulsionou muitas práticas. <strong>A Inteligência Artificial é o presente</strong>, e sua adoção, uma questão de responsabilidade profissional. No entanto, é crucial escolher a ferramenta certa.
          <br /><br />
          Nós não criamos um lugar pra anotar. Criamos um <strong>espaço para raciocinar com ética, profundidade e direção</strong>. O <strong>SINTAGMA</strong> é a ferramenta que te eleva da <strong>operação à estratégia</strong>, permitindo que você:
        </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group glass hover:glass-orange transition-all duration-500 border-primary/10 hover:border-primary/30">
              <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
                <div className="mb-4 sm:mb-6 flex justify-center">
                  <div className="p-3 sm:p-4 bg-gradient-primary/10 rounded-full group-hover:bg-gradient-primary/20 transition-all duration-300 group-hover:shadow-glow">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 text-primary">
                      {React.cloneElement(feature.icon, { className: "w-6 h-6 sm:w-8 sm:h-8 text-primary" })}
                    </div>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 font-body">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-body">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
          <Card className="glass border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10">
            <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
              <p className="text-lg sm:text-xl text-gray-800 leading-relaxed font-body font-medium">
                Você não está sendo substituído, está ganhando um CO-PILOTO. O <strong>SINTAGMA</strong> não veio pra ocupar seu lugar, e sim pra devolver o seu tempo e sua atenção ao que importa.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="group relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Button 
              size="lg" 
              className="relative bg-gradient-to-r from-primary to-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Conheça Nossa Tecnologia
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
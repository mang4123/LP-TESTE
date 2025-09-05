import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Mic, Brain, FileText, Shield, Zap, Settings, FileCheck, Database, MessageCircle, RefreshCw } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Mic className="w-8 h-8 text-primary" />,
      title: "Sigilo do seu paciente respeitado!",
      description: "Inicie a gravação da sua consulta diretamente no aplicativo (presencial ou online via Zoom/Google Meet). A criptografia acontece de ponta a ponta, em tempo real, no seu dispositivo. Criptografia de ponta a ponta significa que nem mesmo os desenvolvedores e administradores do software tem acesso ao que está sendo registrado. É o sigilo do seu paciente sendo respeitado.",
      metric: "Criptografia em tempo real"
    },
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "De Áudio a Inteligência Clínica",
      description: "Ao finalizar a sessão, nossa IA transcreve o áudio e já começa a analisar as informações, identificando pontos cruciais e sugerindo insights para o seu prontuário.",
      metric: "IA avançada"
    },
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "Prontuário Impecável, insights poderosos",
      description: "O SINTAGMA gera o prontuário completo para você, com base em modelos personalizáveis e sugestões inteligentes para o próximo atendimento. A IA ajuda na interpretação, sugere formas de orientar o paciente de acordo com o modelo escolhido e a linguagem que você gosta, e organiza as orientações dadas ao longo da consulta para favorecer o aumento da adesão. Revise, complemente se desejar, e tenha tudo pronto em segundos! Ele não pensa por você, ele organiza para que você possa pensar melhor.",
      metric: "Prontuário completo"
    }
  ];

  return (
    <>
    <section className="py-24 bg-section-4 section-transition relative overflow-hidden">
      {/* Concentric Curved Lines Background */}
      <div className="absolute inset-0">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <defs>
            <radialGradient id="orangeGlow" cx="80%" cy="20%" r="60%">
              <stop offset="0%" stopColor="#ea580c" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#f97316" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#ea580c" stopOpacity="0.1" />
            </radialGradient>
            <linearGradient id="orangeLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ea580c" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#f97316" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#ea580c" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          
          {/* Concentric Curved Lines */}
          <path d="M0,100 Q300,80 600,90 Q900,100 1200,85" stroke="url(#orangeLine)" strokeWidth="1" fill="none" opacity="0.5" />
          <path d="M0,130 Q300,110 600,120 Q900,130 1200,115" stroke="url(#orangeLine)" strokeWidth="1" fill="none" opacity="0.4" />
          <path d="M0,160 Q300,140 600,150 Q900,160 1200,145" stroke="url(#orangeLine)" strokeWidth="1" fill="none" opacity="0.5" />
          <path d="M0,190 Q300,170 600,180 Q900,190 1200,175" stroke="url(#orangeLine)" strokeWidth="1" fill="none" opacity="0.4" />
          <path d="M0,220 Q300,200 600,210 Q900,220 1200,205" stroke="url(#orangeLine)" strokeWidth="1" fill="none" opacity="0.5" />
          <path d="M0,250 Q300,230 600,240 Q900,250 1200,235" stroke="url(#orangeLine)" strokeWidth="1" fill="none" opacity="0.4" />
          <path d="M0,280 Q300,260 600,270 Q900,280 1200,265" stroke="url(#orangeLine)" strokeWidth="1" fill="none" opacity="0.5" />
          <path d="M0,310 Q300,290 600,300 Q900,310 1200,295" stroke="url(#orangeLine)" strokeWidth="1" fill="none" opacity="0.4" />
          <path d="M0,340 Q300,320 600,330 Q900,340 1200,325" stroke="url(#orangeLine)" strokeWidth="1" fill="none" opacity="0.5" />
          <path d="M0,370 Q300,350 600,360 Q900,370 1200,355" stroke="url(#orangeLine)" strokeWidth="1" fill="none" opacity="0.4" />
          <path d="M0,400 Q300,380 600,390 Q900,400 1200,385" stroke="url(#orangeLine)" strokeWidth="1" fill="none" opacity="0.5" />
          <path d="M0,430 Q300,410 600,420 Q900,430 1200,415" stroke="url(#orangeLine)" strokeWidth="1" fill="none" opacity="0.4" />
          <path d="M0,460 Q300,440 600,450 Q900,460 1200,445" stroke="url(#orangeLine)" strokeWidth="1" fill="none" opacity="0.5" />
          <path d="M0,490 Q300,470 600,480 Q900,490 1200,475" stroke="url(#orangeLine)" strokeWidth="1" fill="none" opacity="0.4" />
          <path d="M0,520 Q300,500 600,510 Q900,520 1200,505" stroke="url(#orangeLine)" strokeWidth="1" fill="none" opacity="0.5" />
          <path d="M0,550 Q300,530 600,540 Q900,550 1200,535" stroke="url(#orangeLine)" strokeWidth="1" fill="none" opacity="0.4" />
          <path d="M0,580 Q300,560 600,570 Q900,580 1200,565" stroke="url(#orangeLine)" strokeWidth="1" fill="none" opacity="0.5" />
          <path d="M0,610 Q300,590 600,600 Q900,610 1200,595" stroke="url(#orangeLine)" strokeWidth="1" fill="none" opacity="0.4" />
          <path d="M0,640 Q300,620 600,630 Q900,640 1200,625" stroke="url(#orangeLine)" strokeWidth="1" fill="none" opacity="0.5" />
          <path d="M0,670 Q300,650 600,660 Q900,670 1200,655" stroke="url(#orangeLine)" strokeWidth="1" fill="none" opacity="0.4" />
          <path d="M0,700 Q300,680 600,690 Q900,700 1200,685" stroke="url(#orangeLine)" strokeWidth="1" fill="none" opacity="0.5" />
        </svg>
      </div>
      
      {/* Subtle geometric background */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-10 right-10 w-40 h-40 border border-primary/30 rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 border border-primary/20 rounded-lg rotate-12"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/10 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-28 h-28 bg-primary/10 rounded-lg rotate-45"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-body">
            SINTAGMA: Excelência Descomplicada – <span className="text-primary">Sua Clínica em 3 Passos Simples</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-body">
            Nós sabemos que você precisa de praticidade. O SINTAGMA foi pensado para se integrar à sua rotina sem esforço, liberando você para o que mais importa. Porque quem atende... sabe o que outro profissional precisa.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group glass hover:glass-orange transition-all duration-500 border-primary/10 hover:border-primary/30">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-gradient-primary/10 rounded-full group-hover:bg-gradient-primary/20 transition-all duration-300 group-hover:shadow-glow">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-body">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 font-body">
                  {benefit.description}
                </p>
                <div className="text-sm font-semibold text-primary bg-gradient-primary/10 px-3 py-1 rounded-full inline-block">
                  {benefit.metric}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="glass-orange rounded-2xl p-8 max-w-4xl mx-auto border border-primary/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-body">
              Transforme Sua Prática <span className="text-primary">Hoje</span>
            </h3>
            <p className="text-gray-600 text-lg font-body">
              Junte-se aos profissionais que já descobriram o poder da 
              tecnologia SINTAGMA para otimizar seus resultados.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Nova Seção de Tecnologia */}
    <section className="py-24 bg-section-3 section-transition relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/5 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-primary/5 rounded-lg rotate-12"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 border border-primary/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-body">
            Tecnologia Inteligente a Serviço da Sua Prática – <span className="text-primary">O Que Sustenta Seu Raciocínio Clínico</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-body">
            Por trás da simplicidade, o SINTAGMA entrega funcionalidades poderosas, desenhadas por quem entende de ética, escuta e confidencialidade:
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-4">
          {/* Gravação Criptografada P2P */}
          <Card className="group glass hover:glass-orange transition-all duration-500 border-primary/10 hover:border-primary/30 hover:scale-[1.02] hover:shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-gradient-primary/10 rounded-full group-hover:bg-gradient-primary/20 transition-all duration-300 flex-shrink-0">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1 font-body">
                    Transcrição Criptografada P2P
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed font-body">
                    Sua garantia de privacidade máxima.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Transcrição Automática */}
          <Card className="group glass hover:glass-orange transition-all duration-500 border-primary/10 hover:border-primary/30 hover:scale-[1.02] hover:shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-gradient-primary/10 rounded-full group-hover:bg-gradient-primary/20 transition-all duration-300 flex-shrink-0">
                  <Mic className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1 font-body">
                    Transcrição Automática
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed font-body">
                    Conversão automática de áudio em texto com alta precisão.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Modelos de Prontuário */}
          <Card className="group glass hover:glass-orange transition-all duration-500 border-primary/10 hover:border-primary/30 hover:scale-[1.02] hover:shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-gradient-primary/10 rounded-full group-hover:bg-gradient-primary/20 transition-all duration-300 flex-shrink-0">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1 font-body">
                    Modelos de Prontuário
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed font-body">
                    Estruturas prontas para diferentes especialidades.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Geração de Documentos */}
          <Card className="group glass hover:glass-orange transition-all duration-500 border-primary/10 hover:border-primary/30 hover:scale-[1.02] hover:shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-gradient-primary/10 rounded-full group-hover:bg-gradient-primary/20 transition-all duration-300 flex-shrink-0">
                  <FileCheck className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1 font-body">
                    Geração de Documentos
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed font-body">
                    Orientação humanizada ao paciente, encaminhamentos e atestados.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Armazenamento Seguro */}
          <Card className="group glass hover:glass-orange transition-all duration-500 border-primary/10 hover:border-primary/30 hover:scale-[1.02] hover:shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-gradient-primary/10 rounded-full group-hover:bg-gradient-primary/20 transition-all duration-300 flex-shrink-0">
                  <Database className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1 font-body">
                    Armazenamento Seguro e Busca Inteligente
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed font-body">
                    Acesse o histórico completo do paciente a qualquer momento, de forma rápida e segura.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Chat de Ajuda */}
          <Card className="group glass hover:glass-orange transition-all duration-500 border-primary/10 hover:border-primary/30 hover:scale-[1.02] hover:shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-gradient-primary/10 rounded-full group-hover:bg-gradient-primary/20 transition-all duration-300 flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1 font-body">
                    Chat de Ajuda com Conhecimento Científico
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed font-body">
                    Respostas baseadas em evidências para suas dúvidas clínicas, validadas por especialistas.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Atualizações Contínuas */}
          <Card className="group glass hover:glass-orange transition-all duration-500 border-primary/10 hover:border-primary/30 hover:scale-[1.02] hover:shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-gradient-primary/10 rounded-full group-hover:bg-gradient-primary/20 transition-all duration-300 flex-shrink-0">
                  <RefreshCw className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1 font-body">
                    Atualizações Contínuas
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed font-body">
                    Melhorias constantes e novas funcionalidades para sua prática.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
    </>
  );
};

export default BenefitsSection;
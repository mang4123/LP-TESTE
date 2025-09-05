import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "O SINTAGMA substitui meu julgamento clínico?",
      answer: "Absolutamente não! O SINTAGMA é seu copiloto inteligente. Ele organiza, estrutura e te dá insights, para que você possa pensar melhor, organizar melhor suas orientações e raciocinar com mais profundidade. Sua decisão, sua escuta, sua sensibilidade – isso é insubstituível."
    },
    {
      question: "Meus dados estarão seguros? E a LGPD?",
      answer: "Segurança não é promessa de marketing. É requisito ético. Seus dados são criptografados de ponta a ponta e permanecem exclusivamente no seu dispositivo. Nossa equipe não tem acesso ao seu conteúdo clínico. Você tem o controle total e completo."
    },
    {
      question: "O que diferencia o SINTAGMA dos 'geradores de lero-lero' de IA?",
      answer: "Não estamos falando de pedir para uma IA genérica 'organizar um atendimento para TDAH'. O SINTAGMA é um ambiente pensado em uma prática clínica validada e efetiva, com uma IA treinada com o melhor das expertises em saúde mental. Nossa IA não é de fonte aberta e suas referências bibliográficas passam por curadoria rigorosa para garantir a precisão e evitar 'alucinações', diferente de outras IAs genéricas. Ele entende a profundidade da sua clínica, não a rotina."
    },
    {
      question: "Preciso ser um expert em tecnologia para usar?",
      answer: "De jeito nenhum! O SINTAGMA foi desenhado para ser intuitivo e fácil de usar. Nosso objetivo é descomplicar a tecnologia, para que você possa focar no que faz de melhor."
    },
    {
      question: "Como o SINTAGMA me ajuda a ter mais tempo se eu já tenho uma agenda lotada?",
      answer: "Você atende. Você cuida. Você resolve. O SINTAGMA resolve por você a parte mais chata: a documentação. Liberando até 6 horas semanais, esse tempo não é para você atender mais, necessariamente. É para você estudar, criar, planejar, descansar, ou construir uma carreira de impacto. O benefício está na tela, mas a transformação real acontece nos bastidores da sua rotina."
    },
    {
      question: "Funciona para todas as especialidades da saúde mental?",
      answer: "Sim! O SINTAGMA foi desenvolvido especificamente para Psicólogos e Psiquiatras. Nossos modelos de prontuário são flexíveis e personalizáveis para se adaptar à sua abordagem específica, seja qual for sua linha teórica ou especialidade."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-section-6 section-transition">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4 sm:mb-6 font-body px-2">
            Suas Dúvidas, <span className="text-primary font-medium">Nossas Respostas</span>
          </h2>
          
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-body px-2">
            As perguntas mais frequentes de profissionais que buscam excelência na prática clínica.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl hover:shadow-[#aeb5fc]/15 transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-white hover:to-[#aeb5fc]/15 hover:border-[#aeb5fc]/40 relative">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-4 sm:p-6 flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 relative z-10 cursor-pointer"
                type="button"
              >
                <h3 className="text-base sm:text-lg font-medium text-gray-900 pr-3 sm:pr-4 font-body leading-tight">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  ) : (
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  )}
                </div>
              </button>
              
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-gray-100">
                  <div className="pt-3 sm:pt-4">
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-body">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Contact section */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 max-w-2xl mx-auto border border-gray-200">
            <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-3 sm:mb-4 font-body px-2">
              Ainda tem <span className="text-primary font-medium">dúvidas?</span>
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed font-body px-2">
              Nossa equipe está pronta para esclarecer qualquer questão sobre segurança, funcionalidades ou adequação à sua prática.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-500 rounded-lg sm:rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <a 
                  href="https://wa.me/5531998843388" 
                  className="relative inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-primary to-orange-500 text-white rounded-lg sm:rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                >
                  Falar com Especialista
                </a>
              </div>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-500 rounded-lg sm:rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <a 
                  href="mailto:contato@sintagma.com.br" 
                  className="relative inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-primary to-orange-500 text-white rounded-lg sm:rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                >
                  Vídeo demonstrativo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
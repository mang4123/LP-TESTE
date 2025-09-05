import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Dr. Pedro Freitas Melo",
      role: "Psiquiatra e Professor",
      company: "Criador do SINTAGMA",
      content: "Como psiquiatra e professor, eu vivia a dor dos prontuários. Perdendo tempo, detalhes cruciais e sentindo a energia drenar. O SINTAGMA nasceu dessa dor e é a ferramenta que eu, Pedro Freitas Melo, uso e confio para elevar minha prática ao máximo. Não é só um software, é a liberdade de ser o profissional que sempre quis ser: focado no paciente, seguro e com registros impecáveis.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Dra. Ana Carolina Silva",
      role: "Psicóloga Clínica",
      company: "Clínica Mente Saudável",
      content: "Com o SINTAGMA, recuperei 2 horas do meu dia! Agora, meus prontuários são completos e claros, e posso dedicar esse tempo para meus pacientes ou para minha família. A segurança dos dados é um alívio enorme.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Dr. Rafael Mendonça",
      role: "Psiquiatra",
      company: "Hospital das Clínicas",
      content: "A IA do SINTAGMA é incrível! Ela me ajuda a não perder nada e ainda me dá insights para a próxima sessão. Minha acurácia diagnóstica melhorou muito. É um divisor de águas.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face"
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-section-4 section-transition relative overflow-hidden">
      {/* Futuristic floating background */}
      <div className="floating-bg absolute inset-0"></div>
      
      {/* Subtle geometric background */}
      <div className="absolute inset-0 opacity-10 sm:opacity-15">
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-16 h-16 sm:w-32 sm:h-32 border border-primary/30 rounded-full"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-12 h-12 sm:w-24 sm:h-24 border border-primary/20 rounded-lg rotate-45"></div>
        <div className="absolute top-1/2 right-1/4 w-8 h-8 sm:w-16 sm:h-16 bg-primary/10 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/4 w-10 h-10 sm:w-20 sm:h-20 bg-primary/10 rounded-lg rotate-12"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 font-body px-2">
            O que Nossos <span className="text-primary">Clientes</span> Dizem
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-body px-2">
            Profissionais de saúde de todo o país já transformaram 
            suas práticas com a tecnologia <img src="/logosintagmaNOVO.png" alt="SINTAGMA" className="inline h-4 sm:h-5 md:h-6 object-contain mx-1" />.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative mb-8 sm:mb-12 lg:mb-16">
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-gray-600" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-gray-600" />
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden mx-8 sm:mx-12">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2 sm:px-4">
                  <Card className="group glass hover:glass-orange transition-all duration-500 border-primary/10 hover:border-primary/30 h-full">
                    <CardContent className="p-4 sm:p-6 lg:p-12 h-full flex flex-col">
                      <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mb-4 sm:mb-6 flex-1">
                        <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-primary/50 flex-shrink-0" />
                        <div className="flex-1">
                          <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-xl mb-4 sm:mb-6 lg:mb-8 font-body">
                            "{testimonial.content}"
                          </p>
                          
                          <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name}
                              className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full object-cover shadow-medium"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.nextElementSibling.style.display = 'flex';
                              }}
                            />
                            <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-primary rounded-full items-center justify-center text-white font-bold shadow-medium text-sm sm:text-base lg:text-lg" style={{display: 'none'}}>
                              {testimonial.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 text-sm sm:text-base lg:text-lg font-body">{testimonial.name}</h4>
                              <p className="text-gray-600 text-xs sm:text-sm lg:text-base font-body">{testimonial.role}</p>
                              <p className="text-gray-500 text-xs sm:text-sm lg:text-base font-body">{testimonial.company}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-primary scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="glass-orange rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto border border-primary/20">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 font-body px-2">
              Junte-se aos Profissionais de <span className="text-primary">Sucesso</span>
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 font-body px-2">
              Mais de 1.000 profissionais já confiam na <img src="/logosintagmaNOVO.png" alt="SINTAGMA" className="inline h-3 sm:h-4 md:h-5 object-contain mx-1" /> para 
              otimizar suas práticas e melhorar resultados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
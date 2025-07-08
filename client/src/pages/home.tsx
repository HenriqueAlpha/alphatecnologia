import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  MessageCircle, 
  Zap, 
  Smartphone, 
  Shield, 
  Clock, 
  Headphones,
  Star,
  User,
  Phone,
  ArrowRight
} from "lucide-react";

const whatsappNumber = "5566999420467";
const whatsappUrl = `https://wa.me/${whatsappNumber}`;

const WhatsAppButton = ({ 
  children, 
  className = "", 
  size = "default",
  variant = "default"
}: { 
  children: React.ReactNode;
  className?: string;
  size?: "default" | "lg" | "sm";
  variant?: "default" | "white";
}) => {
  const handleClick = () => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group";
  const sizeClasses = {
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    sm: "px-4 py-2 text-sm"
  };
  const variantClasses = {
    default: "bg-whatsapp-500 hover:bg-whatsapp-600 text-white",
    white: "bg-white text-whatsapp-500 hover:bg-gray-50"
  };

  return (
    <Button
      onClick={handleClick}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Button>
  );
};

const FloatingWhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <WhatsAppButton
        className="w-16 h-16 rounded-full animate-bounce-slow p-0"
        size="sm"
      >
        <MessageCircle className="w-8 h-8" />
      </WhatsAppButton>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-16 overflow-hidden bg-gradient-to-br from-whatsapp-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-whatsapp-500 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-whatsapp-300 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-whatsapp-400 rounded-full blur-xl"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* WhatsApp Icon */}
        <div className="inline-flex items-center justify-center w-24 h-24 bg-whatsapp-500 rounded-full mb-8 animate-float shadow-2xl">
          <MessageCircle className="text-white w-12 h-12" />
        </div>
        
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
          Vamos{" "}
          <span className="text-whatsapp-500">Conversar?</span>
        </h1>
        
        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Estamos aqui para ajudar você. Clique no botão abaixo e inicie uma conversa conosco pelo WhatsApp.
        </p>
        
        {/* Main WhatsApp Button */}
        <WhatsAppButton size="lg" className="mb-12">
          <MessageCircle className="w-6 h-6 mr-3 group-hover:animate-bounce-slow" />
          <span>Falar no WhatsApp</span>
          <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
        </WhatsAppButton>
        
        {/* Trust Indicators */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-gray-500">
          <div className="flex items-center">
            <Shield className="w-5 h-5 text-whatsapp-500 mr-2" />
            <span>100% Seguro</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-5 h-5 text-whatsapp-500 mr-2" />
            <span>Resposta Rápida</span>
          </div>
          <div className="flex items-center">
            <Headphones className="w-5 h-5 text-whatsapp-500 mr-2" />
            <span>Suporte 24h</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Resposta Imediata",
      description: "Receba respostas rápidas e eficientes para suas dúvidas e solicitações."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-white" />,
      title: "Fácil e Prático",
      description: "Use seu celular para conversar conosco de forma simples e intuitiva."
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "Seguro e Privado",
      description: "Suas conversas são protegidas com criptografia de ponta a ponta."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Por que escolher o WhatsApp?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A forma mais rápida e conveniente de entrar em contato conosco
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-6 bg-gradient-to-br from-whatsapp-50 to-white border-whatsapp-100 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-whatsapp-500 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      text: "Atendimento excepcional! Consegui resolver minha dúvida em poucos minutos pelo WhatsApp. Super recomendo!"
    },
    {
      name: "João Santos",
      text: "Muito prático e rápido! O WhatsApp tornou tudo mais fácil. Equipe muito atenciosa e profissional."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-whatsapp-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-600">
            Experiências reais de quem já conversou conosco
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg border-gray-100">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-whatsapp-500 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const CallToActionSection = () => {
  return (
    <section className="py-20 bg-whatsapp-500 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <MessageCircle className="w-24 h-24 mx-auto mb-6 animate-pulse-slow" />
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Pronto para começar?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Não perca tempo! Clique no botão abaixo e fale conosco agora mesmo.
        </p>
        
        <WhatsAppButton variant="white" size="lg">
          <MessageCircle className="w-6 h-6 mr-3 group-hover:animate-bounce-slow" />
          <span>Iniciar Conversa</span>
          <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
        </WhatsAppButton>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="flex justify-center items-center mb-4">
          <MessageCircle className="w-8 h-8 text-whatsapp-500 mr-3" />
          <span className="text-xl font-semibold">WhatsApp Contact</span>
        </div>
        <p className="text-gray-400 mb-4">
          Estamos sempre disponíveis para ajudar você.
        </p>
        <div className="flex justify-center items-center space-x-4 text-gray-400">
          <Phone className="w-5 h-5" />
          <span>(66) 99942-0467</span>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CallToActionSection />
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}

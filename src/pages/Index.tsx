
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();
  const handleBuyNow = () => {
    // Redirect to Kiwify payment link
    window.location.href = 'https://pay.kiwify.com.br/o7mPjMk';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-primary/90 text-secondary">
      {/* Hero Section */}
      <div className="container px-4 py-12 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-black/90 text-white inline-block px-6 py-2 rounded-full mb-6">
            eBook
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Liberdade Financeira Acelerada
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Conquiste sua independência financeira em 12 meses
          </p>
          <img
            src="/lovable-uploads/9a34bbac-9cce-4000-beb6-156c0fc1b57e.png"
            alt="Liberdade Financeira Acelerada eBook"
            className="w-full max-w-md mx-auto mb-8 rounded-lg shadow-2xl"
          />
        </div>
      </div>

      {/* Oferta com Timer */}
      <div className="bg-white py-12">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Oferta Especial por Tempo Limitado
          </h2>
          <div className="mb-6">
            <CountdownTimer />
          </div>
          <div className="flex flex-col items-center gap-2 mb-8">
            <span className="text-lg text-gray-500 line-through">De R$ 97,00</span>
            <div className="text-4xl font-bold text-primary">
              Por apenas R$ 9,90
            </div>
          </div>
          <Button
            onClick={handleBuyNow}
            className={`
              ${isMobile 
                ? 'w-full max-w-sm py-6 text-xl rounded-full' 
                : 'px-8 py-6 text-xl rounded-full'
              } 
              bg-primary hover:bg-primary/90 text-white animate-pulse-slow flex items-center justify-center gap-2
            `}
          >
            COMPRAR AGORA
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Benefícios */}
      <div className="bg-gray-50 py-16">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            O que você vai aprender
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              "Como criar múltiplas fontes de renda",
              "Estratégias de investimento comprovadas",
              "Gestão inteligente de despesas",
              "Mindset do sucesso financeiro",
              "Técnicas de economia prática",
              "Planejamento financeiro eficiente",
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <p className="text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="bg-secondary text-white py-16">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Não perca mais tempo!
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Comece sua jornada rumo à liberdade financeira hoje mesmo.
            Esta oferta especial é por tempo limitado!
          </p>
          <Button
            onClick={handleBuyNow}
            className={`
              ${isMobile 
                ? 'w-full max-w-sm py-6 text-xl rounded-full' 
                : 'px-8 py-6 text-xl rounded-full'
              } 
              bg-primary hover:bg-primary/90 text-white animate-pulse-slow flex items-center justify-center gap-2
            `}
          >
            GARANTIR MEU EBOOK AGORA
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Botão Flutuante */}
      {isMobile ? (
        <div className="fixed bottom-4 left-0 right-0 flex justify-center px-4 z-50">
          <Button
            onClick={handleBuyNow}
            className="w-full max-w-sm bg-primary hover:bg-primary/90 text-white text-lg py-4 rounded-full shadow-lg animate-pulse-slow"
          >
            COMPRAR AGORA - R$ 9,90
          </Button>
        </div>
      ) : (
        <div className="fixed bottom-4 left-0 right-0 flex justify-center px-4 z-50">
          <Button
            onClick={handleBuyNow}
            className="bg-primary hover:bg-primary/90 text-white text-lg px-6 py-4 rounded-full shadow-lg animate-pulse-slow"
          >
            COMPRAR AGORA - R$ 9,90
          </Button>
        </div>
      )}
    </div>
  );
};

export default Index;

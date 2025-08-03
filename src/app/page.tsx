"use client";

import type { FC, PropsWithChildren } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Rocket, Target, Clock, TrendingUp, GraduationCap, Focus, FileText, CheckCircle, ThumbsDown, ThumbsUp, ChevronRight, Star } from 'lucide-react';

const WhatsAppLink: FC<PropsWithChildren> = ({ children }) => {
  // ATENÇÃO: Atualize o número de telefone e a mensagem aqui.
  const phoneNumber = "5511999999999"; 
  const message = "Olá! Tenho interesse no compilado Foguete do ENEM e gostaria de saber mais.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

const WhatsAppButton: FC = () => {
  const phoneNumber = "5511999999999"; 
  const message = "Olá! Tenho interesse no compilado Foguete do ENEM e gostaria de saber mais.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const WhatsAppIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M16.75 13.96c.25.13.41.2.52.28.18.13.28.24.38.38.1.13.18.28.25.43.07.15.1.33.1.51 0 .23-.04.45-.14.65-.1.2-.24.38-.44.53-.2.15-.45.28-.75.38s-.63.15-1 .15c-.2 0-.4-.01-.6-.04a5.63 5.63 0 0 1-1.4-.46c-.5-.2-1-.48-1.5-.82s-.93-.75-1.3-1.22a8.38 8.38 0 0 1-1-1.48c-.22-.5-.38-.98-.47-1.45s-.14-.93-.14-1.38c0-.5.08-1 .23-1.45.15-.45.38-.85.68-1.2.3-.34.65-.6.9-.74.13-.07.28-.13.45-.18.18-.05.35-.08.5-.08.23 0 .45.03.65.1.2.07.4.18.55.35.15.17.28.4.35.65.08.25.13.5.13.75s-.05.5-.14.7a.9.9 0 0 1-.22.45c-.1.15-.2.28-.3.4a.75.75 0 0 1-.27.28c-.1.08-.2.13-.28.16-.1.03-.2.03-.28.03-.08 0-.17-.02-.27-.06a.85.85 0 0 1-.28-.18c-.1-.1-.18-.2-.25-.28-.07-.1-.13-.2-.18-.3-.05-.1-.08-.18-.08-.23 0-.05.01-.1.04-.15.03-.05.08-.1.13-.15s.12-.08.18-.08h.2c.07 0 .14.01.2.04.07.03.14.07.2.13.07.06.14.13.2.2.07.08.13.15.18.23l.1.15zM12 2a10 10 0 0 0-9.94 9.15c0 1.65.41 3.29 1.2 4.74L2 22l6.23-1.63c1.4.68 2.96 1.03 4.58 1.03h.17A10 10 0 0 0 12 2z"></path>
    </svg>
  );

  return (
    <a 
      href={whatsappUrl}
      target="_blank" 
      rel="noopener noreferrer" 
      className="fixed bottom-6 right-6 z-50 no-print"
    >
      <div className="bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 transition-all hover:scale-110">
        <WhatsAppIcon />
      </div>
    </a>
  );
};

const Header: FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 no-print">
      <div className="container mx-auto px-4 flex h-14 max-w-screen-2xl items-center justify-between">
        <a href="#home" className="flex items-center space-x-2">
          <Rocket className="w-8 h-8 text-primary" />
          <span className="text-xl font-bold font-headline">Foguete do <span className="text-primary">ENEM</span></span>
        </a>
        <WhatsAppLink>
          <Button className="font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow text-background">
            QUERO MINHA APROVAÇÃO
          </Button>
        </WhatsAppLink>
      </div>
    </header>
  );
};

const HeroSection: FC = () => {
  return (
    <section id="home" className="relative py-20 md:py-40 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
                <h1 className="text-5xl md:text-7xl font-extrabold font-headline leading-tight text-shadow">
                    Sua Aprovação no <span className="text-primary">ENEM</span> a um Foguete de Distância
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    O compilado definitivo com tudo que você precisa para decolar nos estudos e garantir sua vaga. Resumos, questões e muito mais!
                </p>
                <WhatsAppLink>
                  <Button size="lg" className="font-bold text-lg rounded-full shadow-lg shadow-primary/30 transition-all hover:scale-105 hover:shadow-primary/50 no-print text-background">
                      <Rocket className="mr-2" /> QUERO MEU COMPILADO
                  </Button>
                </WhatsAppLink>
            </div>
        </div>
    </section>
  );
};


const testimonials = [
  {
    name: "Jéssica R.",
    quote: "O material é incrível! Super organizado e direto ao ponto. Consegui revisar tudo em tempo recorde e minha nota em Humanas subiu 150 pontos.",
    image: "https://i.imgur.com/a6Bk915.png",
  },
  {
    name: "Clarisse M.",
    quote: "Finalmente um material que foca no que importa. Os mapas mentais salvaram minha vida em exatas! Passei em Engenharia na USP.",
    image: "https://i.imgur.com/jx6ORXU.png",
  },
  {
    name: "Rodrigo A.",
    quote: "Passei em Medicina! Sem esse compilado, eu estaria perdido com tanta matéria. Recomendo de olhos fechos, vale cada centavo.",
    image: "https://i.imgur.com/057pw1v.png",
  }
];

const SocialProofSection: FC = () => {
  return (
    <section id="social-proof" className="py-24 bg-card">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4 text-shadow">Milhares de Alunos Já Decolaram Rumo à Aprovação</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground mb-16">
                Veja o que alguns dos nossos estudantes foguete têm a dizer sobre o material.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <Card key={index} className="p-6 bg-background transform transition-all hover:scale-105 hover:shadow-primary/20 flex flex-col items-center text-center">
                        <div className="w-[120px] h-[120px] rounded-full bg-muted mb-4 flex items-center justify-center overflow-hidden border-2 border-primary/20">
                           <Image
                                src={testimonial.image}
                                alt={`Foto de ${testimonial.name}`}
                                width={120}
                                height={120}
                                className="object-cover"
                            />
                        </div>
                        <CardTitle className="mb-4">{testimonial.name}</CardTitle>
                        <CardContent className="p-0 flex-grow">
                            <div className="flex justify-center mb-4 text-primary">
                                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                            </div>
                            <p className="text-muted-foreground italic">&quot;{testimonial.quote}&quot;</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    </section>
  );
};


const benefits = [
  { icon: Target, title: "Conteúdo Direto ao Ponto", description: <>Sem enrolação. Foco total no que realmente cai na prova do <span className="text-primary font-semibold">ENEM</span>.</> },
  { icon: Clock, title: "Otimize seu Tempo", description: "Estude de forma inteligente com materiais organizados e prontos para o uso." },
  { icon: TrendingUp, title: "Estratégias Vencedoras", description: "Aprenda técnicas e dicas para maximizar sua nota e evitar pegadinhas." },
];

const BenefitsSection: FC = () => {
  return (
    <section id="benefits" className="py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4 text-shadow">Por que o Foguete do <span className="text-primary">ENEM</span> é a sua melhor escolha?</h2>
        <p className="max-w-2xl mx-auto text-muted-foreground mb-16">
          Deixe de lado a sobrecarga de informação e foque no que vai te levar à aprovação.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, index) => (
            <Card key={index} className="text-center p-6 border-2 border-transparent hover:border-primary transition-all hover:scale-105 bg-card">
              <div className="mb-4 inline-block p-4 bg-primary/10 rounded-full">
                <item.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-headline font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const targetAudience = [
    { icon: GraduationCap, title: "Vestibulando do 3º ano", description: <>Concilie o último ano da escola com uma preparação de alta performance para o <span className="text-primary font-semibold">ENEM</span>.</> },
    { icon: Clock, title: "Revisão Rápida", description: "Ideal para quem tem pouco tempo e precisa revisar todo o conteúdo de forma eficiente." },
    { icon: Focus, title: "Foco Estratégico", description: "Para estudantes que se sentem perdidos com tanto conteúdo e buscam um norte." },
];

const TargetAudienceSection: FC = () => {
  return (
    <section id="target-audience" className="py-24 bg-card">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-headline font-bold mb-16 text-shadow">Para Quem é o Foguete do <span className="text-primary">ENEM</span>?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {targetAudience.map((item, index) => (
            <div key={index} className="flex flex-col items-center p-4">
              <item.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-headline font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const contentItems = [
  { icon: FileText, text: "Resumos completos de todas as matérias" },
  { icon: CheckCircle, text: "Questões do ENEM com gabarito e resolução" },
  { icon: Rocket, text: "Dicas de estratégia de prova e controle de tempo" },
];

const ContentPreviewSection: FC = () => {
  return (
    <section id="content-preview" className="py-24">
        <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6 text-shadow">O que você vai encontrar no material?</h2>
                <p className="text-muted-foreground mb-8">
                    Um material de estudo completo e visualmente pensado para acelerar seu aprendizado.
                </p>
                <ul className="space-y-4 text-left inline-block">
                    {contentItems.map((item, index) => (
                        <li key={index} className="flex items-center text-lg">
                            <item.icon className="w-6 h-6 mr-4 text-primary shrink-0" />
                            <span>{item.text}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
  );
};

const ComparisonSection: FC = () => {
  return (
    <section id="comparison" className="py-24 bg-card">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4 text-shadow">Chega de se sentir perdido!</h2>
        <p className="max-w-3xl mx-auto text-muted-foreground mb-16">
          Veja a diferença entre estudar com materiais genéricos e ter um guia focado na sua aprovação.
        </p>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <Card className="p-8 bg-background border-destructive/30">
            <div className="flex flex-col items-center text-center">
              <h3 className="text-2xl font-headline font-bold mb-2">Estudante Perdido</h3>
              <div className="flex items-center text-destructive font-bold mb-6">
                <ThumbsDown className="mr-2"/>
                <span>Com Materiais Genéricos</span>
              </div>
              <ul className="space-y-3 text-left text-muted-foreground">
                <li className="flex items-start"><ChevronRight className="w-5 h-5 mr-2 text-destructive mt-1 shrink-0" /><span>Excesso de informação inútil.</span></li>
                <li className="flex items-start"><ChevronRight className="w-5 h-5 mr-2 text-destructive mt-1 shrink-0" /><span>Conteúdo desorganizado e confuso.</span></li>
                <li className="flex items-start"><ChevronRight className="w-5 h-5 mr-2 text-destructive mt-1 shrink-0" /><span>Perda de tempo procurando o que estudar.</span></li>
                <li className="flex items-start"><ChevronRight className="w-5 h-5 mr-2 text-destructive mt-1 shrink-0" /><span>Ansiedade e sentimento de sobrecarga.</span></li>
              </ul>
            </div>
          </Card>
          <Card className="p-8 bg-background border-primary/50 border-2 shadow-lg shadow-primary/20 scale-105">
            <div className="flex flex-col items-center text-center">
              <h3 className="text-2xl font-headline font-bold mb-2 text-primary">Estudante Foguete</h3>
               <div className="flex items-center text-primary font-bold mb-6">
                <ThumbsUp className="mr-2"/>
                <span>Com o Foguete do <span className="text-primary font-bold">ENEM</span></span>
              </div>
              <ul className="space-y-3 text-left text-muted-foreground">
                <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-2 text-primary mt-1 shrink-0" /><span>Foco total no que importa para o <span className="text-primary font-semibold">ENEM</span>.</span></li>
                <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-2 text-primary mt-1 shrink-0" /><span>Material organizado e de fácil consulta.</span></li>
                <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-2 text-primary mt-1 shrink-0" /><span>Mais tempo para resolver questões e revisar.</span></li>
                <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-2 text-primary mt-1 shrink-0" /><span>Confiança e clareza no caminho da aprovação.</span></li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};


const faqItems = [
    { question: "O acesso ao material é vitalício?", answer: "Sim! Após a compra, você terá acesso ilimitado e para sempre a todo o conteúdo e futuras atualizações." },
    { question: "Como receberei o compilado?", answer: "O acesso é imediato após a confirmação do pagamento. Você receberá um link por e-mail para baixar todo o material em formato PDF." },
    { question: "O material serve para quais cursos?", answer: <>Nosso compilado é focado nas quatro áreas de conhecimento do <span className="text-primary font-semibold">ENEM</span>, servindo como base para TODOS os cursos, incluindo os mais concorridos como Medicina, Direito e Engenharias.</> },
    { question: "Posso imprimir o material?", answer: "Com certeza! O PDF é de alta qualidade e formatado para impressão, para que você possa estudar da maneira que preferir." }
];

const FaqSection: FC = () => {
  return (
    <section id="faq" className="py-24">
        <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12 text-shadow">Perguntas Frequentes</h2>
            <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-lg font-bold hover:text-primary">{item.question}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base">
                            {item.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    </section>
  );
};

const CtaSection: FC = () => {
  return (
    <section id="cta" className="py-24 bg-gradient-to-t from-card">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-headline font-extrabold mb-6 text-shadow">Pronto para Lançar seu Futuro?</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground mb-8 text-lg">
                Não deixe sua aprovação para depois. Garanta agora o material que vai ser o seu maior aliado na jornada até a universidade.
            </p>
            <WhatsAppLink>
              <Button size="lg" className="font-bold text-xl rounded-full shadow-lg shadow-primary/30 transition-all hover:scale-105 hover:shadow-primary/50 h-16 px-10 no-print text-background">
                  <Rocket className="mr-3 w-6 h-6" /> GARANTIR MINHA VAGA AGORA
              </Button>
            </WhatsAppLink>
        </div>
    </section>
  );
};

const Footer: FC = () => {
  return (
    <footer className="py-8 border-t no-print">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
            <p className="text-sm">&copy; {new Date().getFullYear()} Foguete do <span className="text-primary font-bold">ENEM</span>. Todos os direitos reservados.</p>
            <p className="text-xs mt-2">Feito com 🚀 para acelerar seus estudos.</p>
        </div>
    </footer>
  );
};

export default function EnemRocketPage() {
  return (
    <div className="bg-background text-foreground font-body">
      <Header />
      <main>
        <HeroSection />
        <SocialProofSection />
        <BenefitsSection />
        <TargetAudienceSection />
        <ContentPreviewSection />
        <ComparisonSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

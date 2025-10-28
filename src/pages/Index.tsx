import { ArrowRight, Code2, Sparkles, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-block">
            <span className="px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium animate-glow-pulse">
              Disponível para novos projetos
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-foreground">Vitor Yoshii</span>
            <br />
            <span className="text-gradient-cyber">Desenvolvedor Back-End</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Codificando a lógica, os dados e a performance do futuro. Estudante
            de Back-End em jornada para dominar a arte de construir sistemas
            complexos e confiáveis.
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button variant="cyber" size="lg" asChild>
              <Link to="/projects">
                Ver Projetos
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/resume">Ver Currículo</Link>
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-40 left-10 w-20 h-20 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute top-60 right-20 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-40 left-1/3 w-24 h-24 bg-accent/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl font-bold text-foreground">Sobre Mim</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sou estudante de Sistemas de Informação e Engenharia de
                Software, apaixonado por resolver problemas complexos e
                construir sistemas eficientes.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Meu foco é construir projetos práticos que solidifiquem meu
                aprendizado. Combino minha dedicação acadêmica com a curiosidade
                de um desenvolvedor, sempre buscando a excelência em cada nova
                tecnologia que aprendo.
              </p>
              <Button variant="cyber" asChild>
                <Link to="/resume">
                  Saiba Mais
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6 animate-fade-in-slow">
              <Card className="p-6 border-glow hover:glow-effect transition-smooth group">
                <Code2 className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-smooth" />
                <h3 className="text-2xl font-bold text-foreground mb-2">3+</h3>
                <p className="text-muted-foreground">Projetos no GitHub</p>
              </Card>

              <Card className="p-6 border-glow hover:glow-accent-effect transition-smooth group">
                <Sparkles className="w-12 h-12 text-accent mb-4 group-hover:scale-110 transition-smooth" />
                <h3 className="text-2xl font-bold text-foreground mb-2">2</h3>
                <p className="text-muted-foreground">
                  Formações em Andamento (SI & Eng. Soft)
                </p>
              </Card>

              <Card className="p-6 border-glow hover:glow-effect transition-smooth group col-span-2">
                <Rocket className="w-12 h-12 text-secondary mb-4 group-hover:scale-110 transition-smooth" />
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  100%
                </h3>
                <p className="text-muted-foreground">
                  Comprometimento com o Aprendizado
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 p-12 rounded-2xl border-glow bg-gradient-card animate-fade-in-slow">
          <h2 className="text-4xl font-bold text-gradient-cyber">
            Pronto para o próximo desafio?
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Estou buscando ativamente por oportunidades de estágio ou projetos
            júnior onde eu possa aplicar meus conhecimentos em Back-End e
            contribuir para soluções reais. Vamos conversar!
          </p>
          <Button variant="cyber" size="lg">
            <a
              href="https://linktr.ee/vitoryoshii.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              Entre em Contato
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

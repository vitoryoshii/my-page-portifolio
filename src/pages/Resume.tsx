import { Download, Database, Zap, Users, Lightbulb } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TimelineItem from "@/components/TimelineItem";
import SkillCard from "@/components/SkillCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Resume = () => {
  const experiences = [
    {
      title: "IT Intern - Infraestrutura & Suporte",
      company: "BIOMM",
      period: "10/2025 - Presente",
      description:
        "Responsável pelo suporte técnico (Help Desk) presencial em SP e remoto para a unidade de Nova Lima. Atuo com a equipe de infraestrutura para garantir a estabilidade e conformidade do ambiente tecnológico.",
    },
    {
      title: "Jovem Aprendiz - IT",
      company: "A. Tonanni Construções e Serviços LTDA",
      period: "06/2024 - 10/2025",
      description:
        "Atuei no suporte ao usuário, gestão de ativos e resolução de incidentes. Implantei o MDM Pulsus para gerenciamento de dispositivos móveis e realizei a gestão de contas Microsoft 365. Experiência com GLPI, ERP TOTVS RM e manutenção de hardware.",
    },
  ];

  const skills = [
    {
      icon: Database,
      title: "Backend Development",
      description:
        "Java, Spring Boot, Python, SQL, Oracle DataBase, SQLite, PostgreSQL, APIs RESTful.",
    },
    {
      icon: Zap,
      title: "Infraestrutura & Suporte",
      description:
        "Help Desk, Suporte ao Usuário, Manutenção de Sistemas e Active Directory.",
    },
    {
      icon: Users,
      title: "Soft Skills",
      description:
        "Liderança técnica, comunicação efetiva, trabalho em equipe, aprendizado contínuo e proatividade.",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description:
        "Pensamento analítico, debugging avançado, otimização e refatoração.",
    },
  ];

  const education = [
    {
      title: "Bacharelado em Engenharia de Software",
      company: "UNICID - Universidade Cidade de São Paulo",
      period: "2025 - 2029 (Previsão de Conclusão)",
      description:
        "Formação que abrange todo o ciclo de desenvolvimento, desde a modelagem e requisitos até a implementação e manutenção de sistemas complexos.",
    },
    {
      title: "Bacharelado em Sistemas de Informação",
      company: "UniBTA - Instituto Brasileiro de Tecnologia Avançada",
      period: "2025 - 2028 (Previsão de Conclusão)",
      description:
        "Desenvolvendo base sólida em arquitetura de software, banco de dados, redes e análise de sistemas.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="text-center mb-16 space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-gradient-cyber">
            Currículo
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Minha jornada profissional, habilidades técnicas e formação
            acadêmica.
          </p>
          <br />
          <a
            href="/curriculo-caio-vitor-yoshii.pdf"
            download="Caio-Vitor-Yoshii-Curriculo.pdf"
          >
            <Button variant="cyber" size="lg">
              <Download className="mr-2" />
              Baixar PDF
            </Button>
          </a>
        </div>

        {/* Skills Section */}
        <section className="mb-20 animate-fade-in">
          <h2 className="text-3xl font-bold mb-8 text-foreground">
            Habilidades & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                style={{ animationDelay: `${index * 0.1}s` }}
                className="animate-fade-in"
              >
                <SkillCard {...skill} />
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-20 animate-fade-in-slow">
          <h2 className="text-3xl font-bold mb-8 text-foreground">
            Experiência Profissional
          </h2>
          <Card className="p-8 border-glow bg-gradient-card">
            {experiences.map((exp, index) => (
              <TimelineItem
                key={exp.title}
                {...exp}
                isLast={index === experiences.length - 1}
              />
            ))}
          </Card>
        </section>

        {/* Education Section */}
        <section className="mb-20 animate-fade-in-slow">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Formação</h2>
          <Card className="p-8 border-glow bg-gradient-card">
            {education.map((edu) => (
              <TimelineItem key={edu.title} {...edu} isLast />
            ))}
          </Card>
        </section>

        {/* Technologies */}
        <section className="animate-fade-in-slow">
          <h2 className="text-3xl font-bold mb-8 text-foreground">
            Tecnologias & Ferramentas
          </h2>
          <Card className="p-8 border-glow bg-gradient-card">
            <div className="flex flex-wrap gap-3">
              {[
                "Java",
                "Python",
                "SQL",
                "SQLite",
                "JSON",
                "POO",
                "GIT",
                "GITHUB",
                "Help Desk",
                "Suporte de TI",
                "IntelliJ IDEA",
                "VS Code",
                "Postman",
                "Oracle DataBase",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-smooth"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Resume;

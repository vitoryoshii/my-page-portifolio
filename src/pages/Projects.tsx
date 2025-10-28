import { Github } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import projectBank from "@/assets/project-bank.png";
import projectEcommercePm from "@/assets/project-ecommerce-pm.png";
import projectToDoList from "@/assets/project-to-do-list.png";
import projectChat from "@/assets/project-chat.jpg";
import projectAnalytics from "@/assets/project-analytics.jpg";
import projectFitness from "@/assets/project-fitness.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Sistema Bancario - DIO",
      description:
        "Aplicação de console para simular operações bancárias. O projeto aplica conceitos de Programação Orientada a Objetos (POO) para gerenciar contas, depósitos e saques. Implementando BD Oracle para persistência de dados.",
      image: projectBank,
      tags: ["Java", "Oracle DataBase", "SQL"],
      githubUrl: "https://github.com/vitoryoshii/sistema-bancario-simples-dio",
      liveUrl: "",
    },
    {
      title: "Comparador de Busca: Linear vs. Binária",
      description:
        "Aplicação Python com interface Tkinter que compara visualmente o desempenho da Busca Linear e Binária. O programa cronometra (ms) e conta os passos de cada algoritmo ao buscar um ID em um banco de dados SQLite simulado com **10 milhões de produtos**. Um projeto que demonstra na prática o impacto da complexidade de algoritmo (O(n) vs O(log n)).",
      image: projectEcommercePm,
      tags: ["Python", "Tkinter", "SQLite", "Algoritmos", "O(log n)"],
      githubUrl: "https://github.com/vitoryoshii/e-commerce-pmi-binario",
      liveUrl: "",
    },
    {
      title: "Gerenciador de Tarefas (To-Do List)",
      description:
        "Sistema CRUD (Criar, Ler, Atualizar, Deletar) de linha de comando para gerenciamento de tarefas. O projeto é escrito em Python e demonstra uma forte separação de responsabilidades: 'main.py' controla o menu e o fluxo do usuário, 'tarefas.py' contém toda a lógica de negócio (criar, editar, excluir, etc.), e 'manipulaJSON.py' gerencia a persistência dos dados. As tarefas são salvas em um arquivo 'tarefas.json', garantindo que os dados não sejam perdidos ao fechar o programa.",
      image: projectToDoList,
      tags: ["Python", "CRUD", "JSON"],
      githubUrl: "https://github.com/vitoryoshii/lista-de-tarefas",
      liveUrl: "",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="text-center mb-16 space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-gradient-cyber">
            Meus Projetos
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Uma coleção de trabalhos onde aplico meu conhecimento em Back-End
            para construir soluções e solidificar meu aprendizado.
          </p>
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://github.com/vitoryoshii"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2" />
              Ver Todos no GitHub
            </a>
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center space-y-6 p-12 rounded-2xl border-glow bg-gradient-card animate-fade-in-slow">
          <h2 className="text-3xl font-bold text-foreground">
            Gostou do que viu?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Estou buscando ativamente por oportunidades de estágio ou projetos
            júnior onde eu possa aplicar meu conhecimento. Se você tem um
            desafio em mente, vamos conversar!
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
      </main>

      <Footer />
    </div>
  );
};

export default Projects;

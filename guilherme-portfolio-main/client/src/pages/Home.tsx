import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { ArrowRight, Code2, Database, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'sobre', 'experiencia', 'projetos', 'contato'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout activeSection={activeSection}>
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/25nNzDoIhUpz1gELeeyd9t/sandbox/bkVCRhYkqBy50CImawdnbm-img-1_1770132052000_na1fn_aGVyby1iYWNrZ3JvdW5k.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMjVuTnpEb0loVXB6MWdFTGVleWQ5dC9zYW5kYm94L2JrVkNSaFlrcUJ5NTBDSW1hd2RuYm0taW1nLTFfMTc3MDEzMjA1MjAwMF9uYTFmbl9hR1Z5YnkxaVlXTnJaM0p2ZFc1ay5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=mH1dkWl-H-5tEo-RayTCxlTn7dtxwWqwLJm-LGLZo74mZ~iO0bhQPRKwypUbHJLtPZLkOLUJYJc-jPc8B7ZHRIiAk8XcHtPhWJ7jSaU1-tm9bzQyeVxb~wzHH7P4Md09tsgeg7Ho5nDqg2xBpCENk37UnKyXR13JjTIq~4BZO3OcKroRj-lkEDfNphh1ugDAn7NBqh1CkfwUA7cePiGNyow4qiLdhYqHG4-D9~RnvszQUp2dI3GnZ97GklDGOpWwTP4FH5PR5c29T3d0T8rdl0cVhEEr1vsdhpta1NXkbTZVRPaEswqE9mwr7WHK8Z~MPQ1ipr3ATWiZ5OVulNKuXA__')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div className="container relative z-10 py-20">
          <div className="max-w-2xl">
            <div className="mb-6 animate-fade-in">
              <span className="font-accent text-primary">Bem-vindo ao meu portfólio</span>
            </div>

            <h1 className="font-display mb-6 text-foreground">
              Olá, sou <span className="text-primary">Guilherme Rios</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Analista de Dados e Desenvolvedor Full Stack apaixonado por transformar dados em insights valiosos. Especializado em Python, Machine Learning e desenvolvimento web moderno.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#projetos" className="inline-flex">
                <Button size="lg" className="gap-2">
                  Ver Meus Projetos <ArrowRight size={20} />
                </Button>
              </a>
              <a href="#contato" className="inline-flex">
                <Button size="lg" variant="outline">
                  Entrar em Contato
                </Button>
              </a>
            </div>

            {/* Skills Preview */}
            <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: Code2, label: 'Full Stack' },
                { icon: Database, label: 'Data Analysis' },
                { icon: Shield, label: 'CyberSec' },
                { icon: Zap, label: 'ML/AI' },
              ].map((skill, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-card border border-border hover:border-primary transition-colors">
                  <skill.icon size={24} className="text-primary mb-2" />
                  <p className="font-accent text-sm text-foreground">{skill.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 md:py-32 bg-background">
        <div className="container">
          <h2 className="font-heading mb-12">Sobre Mim</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-body text-muted-foreground mb-6">
                Sou estudante de Ciência da Computação na Universidade de Brasília, dedicado a explorar as intersecções entre análise de dados, engenharia de software e segurança cibernética.
              </p>

              <p className="font-body text-muted-foreground mb-6">
                Tenho experiência prática em desenvolvimento Full Stack com tecnologias modernas como React, Node.js e Django. Minha paixão por dados me leva a criar soluções que transformam informações complexas em insights acionáveis.
              </p>

              <p className="font-body text-muted-foreground mb-8">
                Atualmente, busco minha primeira oportunidade profissional onde possa aplicar meus conhecimentos e crescer como desenvolvedor, contribuindo para projetos inovadores e impactantes.
              </p>

              <div className="flex gap-4">
                <div>
                  <p className="font-display text-primary text-2xl">3+</p>
                  <p className="font-accent text-muted-foreground">Projetos Completos</p>
                </div>
                <div>
                  <p className="font-display text-primary text-2xl">10+</p>
                  <p className="font-accent text-muted-foreground">Tecnologias</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-border overflow-hidden">
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/25nNzDoIhUpz1gELeeyd9t/sandbox/bkVCRhYkqBy50CImawdnbm-img-2_1770132045000_na1fn_cHJvamVjdHMtcGF0dGVybg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMjVuTnpEb0loVXB6MWdFTGVleWQ5dC9zYW5kYm94L2JrVkNSaFlrcUJ5NTBDSW1hd2RuYm0taW1nLTJfMTc3MDEzMjA0NTAwMF9uYTFmbl9jSEp2YW1WamRITXRjR0YwZEdWeWJnLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=cbzBBOAPSdhXginucW9rdHu1HT991FDp9W6q6Ia74Bww83FuZL0SEGaG-m7KZifqEvx25nHB7mtICO1Njb2ihHSjxWv-qnf4sm4ABv-0k8nqa-4snfMy~7uBffsyRL6iZXMyUs8bHGTcdyHyHKGGWuc24KQSOwFkfKLUN3M5mnmyAv8~O-O92~ZN4uVDFADHq~CFXE1rZ~C-Pwbo9Evcwst~feTClp98-rkblE05thsUf9qI5OBBNnoHM3mR7tXhkoTVDc3sTxX5g2pJkfEqTq3swyVSj7hRLBreTkAUfeybKoLIyK5OaWVyvfcQA0RVlqUq~ylObhAy51Z5tF96Ug__"
                  alt="Data visualization pattern"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiência Section */}
      <section id="experiencia" className="py-20 md:py-32 bg-secondary/30">
        <div className="container">
          <h2 className="font-heading mb-12">Experiência</h2>

          <div className="space-y-8">
            {[
              {
                company: 'CJR - Empresa Júnior de Computação',
                role: 'Full Stack Software Engineer Trainee',
                period: 'Mar. 2025 – Jul. 2025',
                description: 'Desenvolvimento Full Stack com Node.js, Next.js, Prisma e Postman. Criação de site de avaliação de professores.',
                skills: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'TailwindCSS', 'AWS'],
              },
              {
                company: 'OffSec - UnB',
                role: 'Red Team CyberSec',
                period: 'Mar. 2025 – Presente',
                description: 'Treinamento Red Team por meio de CTFs no Try Hack Me e Hack the Box.',
                skills: ['Try Hack Me', 'Kali-Linux', 'Hack the Box'],
              },
              {
                company: 'Instituto Eldorado / IBM - HackaTruck',
                role: 'Swift e Banco de Dados',
                period: 'Mar. 2025 – Julho 2025',
                description: 'Desenvolvimento de aplicativos em Swift e aprofundamento em Banco de Dados.',
                skills: ['Swift', 'PostgreSQL', 'Postman'],
              },
            ].map((exp, idx) => (
              <div key={idx} className="p-6 rounded-lg bg-card border border-border hover:border-primary transition-colors">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="font-subheading text-foreground">{exp.role}</h3>
                    <p className="font-accent text-primary">{exp.company}</p>
                  </div>
                  <p className="font-accent text-muted-foreground mt-2 md:mt-0">{exp.period}</p>
                </div>

                <p className="font-body text-muted-foreground mb-4">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, sidx) => (
                    <span
                      key={sidx}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary font-accent text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projetos Section */}
      <section id="projetos" className="py-20 md:py-32 bg-background">
        <div className="container">
          <h2 className="font-heading mb-12">Projetos em Destaque</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Pontoalidade',
                description: 'Aplicativo em Java para registro de horários de funcionários com cálculo automático da média salarial baseada no total de horas trabalhadas.',
                tech: ['Java', 'JavaFX'],
                icon: '📊',
              },
              {
                title: 'FaceRecon',
                description: 'Aplicativo que reconhece em tempo real rostos cadastrados no sistema usando bibliotecas cv2, mediapipe e sklearn com KNN.',
                tech: ['Python', 'OpenCV', 'Mediapipe', 'Sklearn'],
                icon: '👤',
              },
              {
                title: 'Spot Fake',
                description: 'Programa de análise de dados para identificar prováveis contas disseminadoras de Fake News no Twitter usando análise de grafos.',
                tech: ['Python', 'Igraph', 'Pandas'],
                icon: '🔍',
              },
              {
                title: 'Food-Where',
                description: 'Site feito em Django para procurar pequenos produtores mais pertos de você usando geopy e KNN para recomendações.',
                tech: ['Python', 'Django', 'Geopy', 'Pandas'],
                icon: '🍎',
              },
            ].map((project, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-lg bg-card border border-border hover:border-primary hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{project.icon}</div>

                <h3 className="font-subheading text-foreground mb-3">{project.title}</h3>

                <p className="font-body text-muted-foreground mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, tidx) => (
                    <span
                      key={tidx}
                      className="px-2 py-1 rounded text-xs font-accent bg-secondary text-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container">
          <h2 className="font-heading mb-12">Habilidades & Ferramentas</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: 'Linguagens',
                items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'Swift'],
              },
              {
                category: 'Frameworks & Libs',
                items: ['React', 'Next.js', 'Django', 'Node.js', 'Pandas', 'Sklearn'],
              },
              {
                category: 'Ferramentas',
                items: ['Git', 'Docker', 'PostgreSQL', 'AWS', 'Postman', 'Kali-Linux'],
              },
            ].map((skillGroup, idx) => (
              <div key={idx}>
                <h3 className="font-subheading text-foreground mb-6">{skillGroup.category}</h3>

                <div className="space-y-3">
                  {skillGroup.items.map((item, sidx) => (
                    <div key={sidx} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="font-body text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-20 md:py-32 bg-background">
        <div className="container max-w-2xl">
          <h2 className="font-heading mb-6">Vamos Conversar?</h2>

          <p className="font-body text-muted-foreground mb-12">
            Estou sempre aberto a novas oportunidades, colaborações e conversas interessantes. Sinta-se livre para entrar em contato comigo!
          </p>

          <div className="space-y-4">
            <a
              href="mailto:guilherme@example.com"
              className="block p-4 rounded-lg bg-card border border-border hover:border-primary hover:bg-primary/5 transition-colors"
            >
              <p className="font-accent text-primary mb-1">Email</p>
              <p className="font-body text-foreground">guilherme@example.com</p>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 rounded-lg bg-card border border-border hover:border-primary hover:bg-primary/5 transition-colors"
            >
              <p className="font-accent text-primary mb-1">LinkedIn</p>
              <p className="font-body text-foreground">linkedin.com/in/guilhermerios</p>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 rounded-lg bg-card border border-border hover:border-primary hover:bg-primary/5 transition-colors"
            >
              <p className="font-accent text-primary mb-1">GitHub</p>
              <p className="font-body text-foreground">github.com/guilhermerios</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/30 py-8">
        <div className="container">
          <p className="font-accent text-muted-foreground text-center">
            © 2025 Guilherme Rios. Desenvolvido com React, Tailwind CSS e ❤️
          </p>
        </div>
      </footer>
    </Layout>
  );
}

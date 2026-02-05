import { ReactNode } from 'react';
import { Link } from 'wouter';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
  activeSection?: string;
}

export default function Layout({ children, activeSection }: LayoutProps) {
  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'sobre', label: 'Sobre', href: '#sobre' },
    { id: 'experiencia', label: 'Experiência', href: '#experiencia' },
    { id: 'projetos', label: 'Projetos', href: '#projetos' },
    { id: 'contato', label: 'Contato', href: '#contato' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sidebar Navigation */}
      <aside className="fixed left-0 top-0 h-screen w-64 border-r border-border bg-sidebar p-8 flex flex-col justify-between md:flex md:flex-col hidden md:flex">
        {/* Logo and Navigation */}
        <div>
          <div className="mb-12">
            <h1 className="font-display text-2xl text-primary mb-2">GR</h1>
            <p className="font-accent text-muted-foreground">Analista de Dados</p>
          </div>

          <nav className="space-y-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`block font-subheading transition-colors duration-300 ${
                  activeSection === item.id
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          <a
            href="https://github.com/guilhermedelm"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/guilherme-delmonte-rios/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:guigadelmonterios@gmail.com"
            className="p-2 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          <a
            href="#"
            className="p-2 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
            aria-label="Currículo"
          >
            <FileText size={20} />
          </a>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="md:hidden sticky top-0 z-40 bg-sidebar border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <h1 className="font-display text-xl text-primary">GR</h1>
          <nav className="flex gap-4">
            {navItems.slice(0, 3).map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-sm font-accent text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="md:ml-64">
        {children}
      </main>
    </div>
  );
}

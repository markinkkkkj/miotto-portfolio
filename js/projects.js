/*
 * Dados dos projetos do portfólio.
 *
 * Para adicionar um projeto novo, basta acrescentar um objeto a um dos
 * arrays abaixo — o markup é gerado automaticamente por js/main.js.
 *
 * Campos:
 *   name      — nome do projeto
 *   tagline   — descrição curta (uma linha, aparece sob o nome)
 *   problem   — problema/contexto que o projeto resolve
 *   stack     — lista de tecnologias (vira as "pills" do card)
 *   architecture — resumo da arquitetura real do projeto (opcional)
 *   challenge — desafio técnico que vale destacar (opcional)
 *   diagram   — caminho para um SVG de arquitetura (opcional)
 *   diagramAlt— texto alternativo do diagrama (obrigatório se houver diagram)
 *   links     — { repo: url, demo: url } (ambos opcionais)
 */

// Projetos em destaque: cards grandes, com problema/arquitetura/desafio.
const FEATURED_PROJECTS = [
  {
    name: "Medicano",
    tagline: "Plataforma de gestão de clínicas e agendamentos médicos",
    problem:
      "Clínicas e profissionais autônomos precisam de agenda com controle de conflitos, " +
      "planos de assinatura e notificações — e pacientes precisam encontrar o especialista " +
      "certo. O Medicano cobre o fluxo completo, incluindo triagem assistida por IA que " +
      "recomenda a especialidade a partir dos sintomas relatados em conversa.",
    stack: ["NestJS", "TypeScript", "MongoDB", "Redis", "React", "AWS", "Docker", "CrewAI"],
    architecture:
      "Monorepo com API NestJS, frontend React e pacote de tipos compartilhados. " +
      "Configuração 100% via AWS Secrets Manager (sem .env), sessões revogáveis em Redis, " +
      "e-mails transacionais com AWS SES e chat de triagem com streaming SSE via Claude API.",
    challenge:
      "Além do produto, o repositório contém um pipeline de desenvolvimento com agentes de IA " +
      "(CrewAI + Aider): Architect, Developer, Documenter e Reviewer implementaram 14 sprints " +
      "a partir de specs versionadas — código gerado, revisado e auditado de forma reprodutível.",
    diagram: "assets/diagrams/medicano.svg",
    diagramAlt:
      "Diagrama de arquitetura do Medicano: frontend React chama a API NestJS, que usa " +
      "MongoDB e Redis; a API lê configuração do AWS Secrets Manager, envia e-mails pelo " +
      "AWS SES e faz streaming de triagem via Claude API.",
    links: {
      repo: "https://github.com/medicano/medicano",
      demo: "https://medicano.app",
    },
  },
  {
    name: "The Fellows Run",
    tagline: "App multiplataforma para organizar corridas em grupo",
    problem:
      "Grupos de corrida organizam eventos por planilha e mensagens soltas. O app centraliza " +
      "a criação de corridas, inscrições, metas e estatísticas dos participantes.",
    stack: ["Flutter", "Dart", "Firebase Auth", "Firestore", "Storage"],
    architecture:
      "Flutter multiplataforma com camadas bem separadas — models, repositories e UI. " +
      "Firestore como fonte de dados em tempo real, Firebase Auth para identidade e " +
      "Storage para fotos de perfil capturadas na hora com a câmera.",
    challenge:
      "Manter a UI reativa sem estourar o custo de leituras do Firestore: repositórios com " +
      "cache local de usuários e widgets enxutos, isolados por tela.",
    links: {
      repo: "https://github.com/markinkkkkj/the-fellows-run",
    },
  },
  {
    name: "Smart Locker",
    tagline: "Locação de armários inteligentes com destravamento por NFC e QR Code",
    problem:
      "Em praias, shows e eventos, guardar pertences com segurança é um problema real. " +
      "O Smart Locker permite alugar um armário automatizado pelo app e abri-lo " +
      "aproximando o celular da fechadura.",
    stack: ["Kotlin", "Android", "Firebase", "NFC", "Google Maps"],
    architecture:
      "App Android nativo com fluxos separados para cliente e gerente: mapa de unidades com " +
      "rotas (Google Maps), locação pelo app e liberação física do armário por tag NFC " +
      "(leitura, escrita e reset) ou QR Code, com Firebase como backend.",
    challenge:
      "A ponte entre software e mundo físico — gravar e validar tags NFC que destravam um " +
      "armário de verdade, tratando casos como perda de conexão, unidade fechada e " +
      "encerramento de locação. Projeto integrador de Engenharia de Software (PUC-Campinas).",
    links: {
      repo: "https://github.com/PI3-T7/PI3-ES-2024-T7",
    },
  }
];

// Outros projetos: cards compactos, só descrição + stack + links.
const OTHER_PROJECTS = [
  {
    name: "MongoChat",
    tagline: "Chat de terminal com mensagens criptografadas",
    problem:
      "Chat por linha de comando em que as mensagens são criptografadas com AES (PKCS#5) " +
      "antes de persistir no MongoDB. Desenvolvido para a disciplina de Banco de Dados 2.",
    stack: ["Python", "PyMongo", "MongoDB", "AES"],
    links: {
      repo: "https://github.com/markinkkkkj/MongoChat",
    },
  },
  {
    name: "linux-setup",
    tagline: "Setup de Arch Linux automatizado e reprodutível",
    problem:
      "Script de instalação + dotfiles versionados (Hyprland, Waybar, Kitty, Rofi, units " +
      "systemd) que levam uma máquina zerada ao ambiente completo de trabalho.",
    stack: ["Shell", "Arch Linux", "Hyprland", "systemd"],
    links: {
      repo: "https://github.com/markinkkkkj/linux-setup",
    },
  },
  {
    name: "miotto.dev",
    tagline: "Este site: hub de subdomínios no GitHub Pages",
    problem:
      "Landing, notas e portfólio servidos como sites estáticos em repositórios separados, " +
      "cada um com domínio customizado e HTTPS via GitHub Pages.",
    stack: ["HTML", "CSS", "JavaScript", "GitHub Pages", "DNS"],
    links: {
      repo: "https://github.com/markinkkkkj/miotto-dev",
      demo: "https://miotto.dev",
    },
  },
];

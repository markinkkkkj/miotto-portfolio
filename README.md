# marcos.miotto.dev

Portfólio pessoal — site estático (HTML/CSS/JS puro) hospedado no GitHub Pages.

## Estrutura

```
├── index.html              # markup das seções (hero, projetos, stack, sobre, contato)
├── css/style.css           # estilos (mobile-first, dark, tokens no :root)
├── js/projects.js          # DADOS dos projetos — edite aqui para adicionar/remover
├── js/main.js              # renderização dos cards e interações
├── assets/diagrams/        # diagramas de arquitetura em SVG
└── CNAME                   # domínio customizado do GitHub Pages
```

## Como adicionar um projeto

1. Abra `js/projects.js`.
2. Adicione um objeto a `FEATURED_PROJECTS` (card grande, com problema/arquitetura/desafio)
   ou a `OTHER_PROJECTS` (card compacto). Os campos estão documentados no topo do arquivo.
3. (Opcional) Para projetos cloud-heavy, crie um SVG em `assets/diagrams/` e aponte o campo
   `diagram` para ele — use `medicano.svg` como referência de cores e estilo.

## Rodar localmente

Qualquer servidor estático serve. Por exemplo:

```bash
python -m http.server 8000
# http://localhost:8000
```

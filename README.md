# ✅ To-Do List

Uma aplicação simples e elegante de lista de tarefas (To-Do List) desenvolvida com **Angular**, **TypeScript**, **HTML**, **SCSS** e **Local Storage**.  
Permite adicionar, marcar como concluída e remover tarefas, mantendo os dados salvos localmente no navegador.

🔗 **Deploy:** https://to-do-list-eight-sooty-33.vercel.app/

---

## 🚀 Tecnologias Utilizadas

| Tecnologia | Descrição |
|-------------|------------|
| **Angular** | Framework front-end moderno e escalável |
| **TypeScript** | Superset do JavaScript com tipagem estática |
| **HTML5** | Estrutura da aplicação |
| **SCSS (Sass)** | Estilização com variáveis e aninhamento |
| **Local Storage** | Armazenamento persistente no navegador |

---

## ⚙️ Funcionalidades

✅ Adicionar novas tarefas  
✅ Marcar tarefas como concluídas  
✅ Excluir tarefas individualmente  
✅ Persistência de dados via **Local Storage**  
✅ Interface responsiva e limpa  
✅ Feedback visual nas ações (hover, completed, etc.)

---

## 🧠 Estrutura do Projeto

src/
├── app/
│ ├── components/
│ │ └── todo/
│ │ ├── todo.component.ts
│ │ ├── todo.component.html
│ │ ├── todo.component.scss
│ ├── services/
│ │ └── storage.service.ts
│ ├── app.module.ts
│ └── app.component.ts
├── assets/
│ └── icons/
└── index.html


---

## 💾 Armazenamento Local

As tarefas são salvas e recuperadas do **Local Storage** automaticamente.  
Isso significa que, mesmo ao atualizar a página, suas tarefas permanecem salvas.  

```typescript
// Exemplo simples de uso
localStorage.setItem('tasks', JSON.stringify(this.tasks));
this.tasks = JSON.parse(localStorage.getItem('tasks') || '[]');

🎨 Estilo e Layout

O projeto utiliza SCSS com:

Variáveis e mixins para padronização de cores;

Layout flexível e responsivo;

Efeitos sutis de hover e transição.

👨‍💻 Autor 

Desenvolvido por Leonardo Silva
🔗 LinkedIn 
https://www.linkedin.com/in/leonardosilva-826083231/
💻 GitHub
https://github.com/lvsilvaa

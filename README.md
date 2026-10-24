# 🎬 FROMpedia

### Explore the mysteries. Discover the characters. Uncover the unknown.

**FROMpedia** is an interactive fan encyclopedia inspired by the supernatural horror television series *FROM*, streaming on MGM+ and in select regions on Netflix.

Built with **React, TypeScript, and Vite**, FROMpedia gives fans a centralized platform to explore characters, seasons, and frequently asked questions while providing a foundation for a future full-stack community experience.

This project also serves as a hands-on software engineering portfolio, demonstrating modern frontend development, component-based architecture, type safety, and practical web development workflows.

**🌐 Live Website:** [View FROMpedia](https://frompedia.vercel.app/)

**💻 Source Code:** [FromPedia Source Code](https://github.com/saminyc/FromPedia)

---

## ✨ Features

### ✅ Current Features

**Character Encyclopedia**
- Browse characters from the series.
- Filter characters by season.
- Search characters by name with case-insensitive matching.
- Combine season filtering and search functionality.
- View reusable character cards.

**Frequently Asked Questions**
- Interactive accordion interface.
- Expand and collapse answers.
- Single-open FAQ behavior using React state.

**Application Navigation**
- Client-side navigation using React Router.
- Dedicated Home, Characters, and FAQ pages.
- Reusable components and organized application structure.

**User Experience**
- Dynamic UI updates using React hooks.
- Clear search functionality.
- Empty-state messages when no characters match.
- TypeScript interfaces for structured data.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| JavaScript (ES6+) | Application logic |
| TypeScript | Static typing and type safety |
| React | Component-based user interface |
| Vite | Development server and build tool |
| React Router | Client-side routing |
| HTML5 / CSS3 | Page structure and styling |
| Git & GitHub | Version control |
| Vercel | Website deployment |

## 📁 Project Structure

```text
frompedia/
├── public/
├── src/
│   ├── components/
│   │   ├── CharacterCard.tsx
│   │   ├── CharacterSearch.tsx
│   │   ├── SeasonFilter.tsx
│   │   ├── FAQItem.tsx
│   │   └── FaqSection.tsx
│   ├── data/
│   │   ├── characters.ts
│   │   └── faqs.ts
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── CharactersPage.tsx
│   │   └── FaqPage.tsx
│   ├── types/
│   │   ├── character.ts
│   │   └── faq.ts
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── vite.config.ts
└── README.md
```

*Project structure may evolve as additional features are implemented.*

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

- Node.js (LTS version recommended)
- npm
- Git

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd frompedia
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

Open the local URL provided by Vite, typically:

`http://localhost:5173/`

### 4. Create a Production Build

```bash
npm run build
```

### 5. Preview the Production Build

```bash
npm run preview
```

## 🧠 Engineering Concepts Demonstrated

FROMpedia is built around practical software engineering principles:

- **Reusable Components:** Separating UI features into maintainable React components.
- **State Management:** Managing UI interactions using React `useState`.
- **Props and Callbacks:** Passing data and events between components.
- **Array Manipulation:** Using `map()`, `filter()`, and `includes()` to process data.
- **Type Safety:** Using TypeScript interfaces and typed component props.
- **Conditional Rendering:** Displaying content based on state and filtering results.
- **Routing:** Organizing application functionality into separate pages.
- **Version Control:** Tracking project development using Git and GitHub.

## 🗺️ Development Roadmap

The long-term goal is to transform FROMpedia into a production-ready full-stack web application.

### Phase 1 — Frontend Foundation
- [x] React + TypeScript setup
- [x] Reusable character cards
- [x] Season-based character filtering
- [x] Character name search
- [x] FAQ accordion
- [x] Client-side routing
- [ ] Individual character profile pages
- [ ] Responsive UI refinements

### Phase 2 — Expanded Content
- [ ] Episode guides and summaries
- [ ] Character relationships
- [ ] Mystery and theory categories
- [ ] Spoiler-aware content controls
- [ ] Advanced search and filtering

### Phase 3 — Backend Development
- [ ] Node.js and Express REST API
- [ ] PostgreSQL database
- [ ] Database modeling and migrations
- [ ] API validation and error handling
- [ ] Server-side content management

### Phase 4 — Community Features
- [ ] User registration and authentication
- [ ] Fan theory submissions
- [ ] Comments and discussions

### Phase 5 — Production Readiness
- [ ] Unit and integration testing
- [ ] End-to-end testing
- [ ] GitHub Actions CI/CD
- [ ] Accessibility improvements
- [ ] Performance and SEO optimization
- [ ] Production monitoring

## 🤝 Contributing

Suggestions, bug reports, and contributions are welcome.

To contribute:

1. Fork the repository.
2. Create a feature branch.
3. Make and test your changes.
4. Commit with a descriptive message.
5. Open a pull request explaining your changes.

Please avoid submitting unauthorized copyrighted images, scripts, or other protected materials.

## ⚠️ Disclaimer

FROMpedia is an independent, unofficial fan-created project.

It is not affiliated with, endorsed by, or sponsored by MGM+, Netflix, or the creators and rights holders of *FROM*.

All trademarks, characters, and related intellectual property belong to their respective owners. Any opinions or fan theories featured on the platform are unofficial.

## 👨‍💻 About the Developer

FROMpedia is developed as an independent software engineering project with a focus on JavaScript, React, TypeScript, frontend architecture, and future full-stack development.

The project is continuously evolving as new features and engineering concepts are implemented.

**GitHub:** [Samin C](https://github.com/saminyc)

**LinkedIn:** [Samin C](https://www.linkedin.com/in/sychowdhury)

---

**⭐ If you find FROMpedia interesting, consider starring the repository!**

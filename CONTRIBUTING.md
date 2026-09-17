# 🤝 Contributing Guidelines

Thank you for considering contributing to **Yenuli Munasinghe's Personal Web Portfolio**! Contributions, feature enhancements, bug fixes, and documentation updates are welcome.

---

## 🚀 Getting Started

### 1. Fork & Clone

1. Fork the repository on GitHub.
2. Clone your forked copy locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/personal-portfolio.git
   cd personal-portfolio
   ```

### 2. Set Up Environment

Install the project dependencies:
```bash
npm install
```

Start the local development server:
```bash
npm run dev
```

---

## 🛠️ Development Guidelines

### Code Style & Quality

- **Linting**: Ensure code adheres to ESLint rules by running:
  ```bash
  npm run lint
  ```
- **Formatting**: Use clean ES6+ JavaScript, functional React components, and proper JSX indentation.
- **Styling**: Utilize Tailwind CSS classes for UI styling. Avoid unnecessary custom raw CSS unless writing reusable utility classes in `src/index.css`.

### Testing

Run the Vitest suite before submitting changes:
```bash
npm test
```
Make sure all existing unit tests pass, and add new unit tests for any new features or components under `src/__tests__/`.

---

## 📌 Commit Message Conventions

Follow standard imperative commit message patterns:
- `feat: add project filter search bar`
- `fix: resolve mobile navigation backdrop overflow`
- `docs: update deployment instructions in DEPLOYMENT.md`
- `test: add unit test for ProjectModal component`

---

## 📬 Submitting Pull Requests (PRs)

1. Create a feature branch off `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Commit your changes.
3. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
4. Open a Pull Request against the `main` branch of `YenuliMunasinghe/personal-portfolio`.
5. Ensure the automated CI checks (`npm run lint`, `npm test`, `npm run build`) pass successfully.

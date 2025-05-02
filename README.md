# 🗂 Project Overview
[![Development Tools](https://skillicons.dev/icons?i=vscode,windows,apple,github)](https://skillicons.dev)

- Live Link: [hunterstevenshaw-la-choza.netlify.app/](hunterstevenshaw-la-choza.netlify.app/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/a2f31cd2-d1cf-4292-a933-c6116074808b/deploy-status)](https://app.netlify.com/sites/hunterstevenshaw-la-choza/deploys)

Repository made to create/develop a _Store Management System for Perú_. I will develop a the store management system using the MERN tech stack connecting the data to my API and then from there, storing the data into MongoDB. This app is built using _**npm create vite@latest**_ for the frontend. The new tech stack is designed for simplicity, performance, and ease of content management for future development and maintenance.

## 🖥️ Current Preview - La Choza

<img src="https://github.com/user-attachments/assets/81dd84cb-b251-4b89-8cc6-1cc9f8aa70be" width="800" />

<img src="https://github.com/user-attachments/assets/5e3d67da-66d7-4164-ba8b-ad7f6a44cc16" width="800" />

# ⚛️ **Tech Stack Overview (MERN)** 

[![Tech Stack Icons](https://skillicons.dev/icons?i=js,html,css,react)](https://skillicons.dev)

[![Tech Stack Icons](https://skillicons.dev/icons?i=nodejs,express,tailwindcss,vite)](https://skillicons.dev)

[![Tech Stack Icons](https://skillicons.dev/icons?i=mongodb,npm,postman,netlify)](https://skillicons.dev)

### 📘 **Frontend**

- **ReactJS**: For building a dynamic, responsive, and component-based UI.

- **TailwindCSS**: For styling with ease for CSS classes, maintaining a consistent and clean design for UI/UX.

### 📖 **Backend & Asset Management**

- **NodeJS/Express**: Developing and creating an API using the MERN stack to update backend.

- **MongoDB/Mongoose**: Storing critical data as structured records.

- **Render**: Alternative to Heroku, this option is easier to setup for deploying and hosting my API.

### 🧪 **Testing/development**

- **Postman**: For testing and developing the endpoints for backend development.

- **Nodemon**: For restarting server on save.

- **Netlify**: For frontend development, testing on _live_ server.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

# Foodies

A modern web application built with [Next.js](https://nextjs.org/) and React, designed for high performance and a clean development experience.

## 🚀 Project Overview

**Foodies** is a full-stack Next.js application leveraging SQLite (via `better-sqlite3`) for a lightweight, embedded database solution. This project prioritizes secure content rendering using the `xss` library and clean URL handling via `slugify`.

## 📦 Tech Stack

- [Next.js](https://nextjs.org/) `v14.0.3`
- [React](https://reactjs.org/) `v18`
- [better-sqlite3](https://github.com/WiseLibs/better-sqlite3) - Fast, simple SQLite3 module
- [slugify](https://github.com/simov/slugify) - Clean URL slugs
- [xss](https://github.com/leizongmin/js-xss) - Sanitizes input to prevent XSS attacks
- Linting and formatting with ESLint + Prettier

## 🛠️ Scripts

| Command       | Description                    |
|---------------|--------------------------------|
| `npm run dev` | Start development server       |
| `npm run build` | Build the application        |
| `npm run start` | Start the production server  |
| `npm run lint` | Run ESLint checks             |

## 💾 Database

This project uses `better-sqlite3` for server-side, file-based SQLite support. It is fast, efficient, and synchronous by default.

> Made with ❤️ using Next.js

<div align="center">

# mjml. Email Starter Package

[![mjml.](https://img.shields.io/badge/mjml.-4-FF7F00?style=flat-square)](https://mjml.io/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20-339933?style=flat-square&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![NPM](https://img.shields.io/badge/NPM-8-CB3837?style=flat-square&logo=npm&logoColor=white)](https://www.npmjs.com/)

![Preview](preview.png)

</div>

## 📖 About

An email templating starter package using [mjml.](https://mjml.io/) for templating and [Vite](https://vitejs.dev/) for development.

**Useful resources:**

- [mjml. Documentation](https://mjml.io/documentation/)
- [Can I email](https://www.caniemail.com/)
- [Litmus Email Testing (paid)](https://www.litmus.com/email-testing)

### 🔧 Requirements

**Node.js 20 installed on your machine**

See [Node.js](https://nodejs.org/) or preferably use [NVM (Node Version manager)](https://github.com/nvm-sh/nvm)

## 🚀 Quick Start

Install Node.js dependencies

```bash
npm i
```

Start the development server and mjml. watcher (typically on [localhost:5173](http://localhost:5173))

```bash
npm run dev
```

Start templating your email in the `src` directory.

## 📦 Build

Build the email template to the `dist` directory

```bash
npm run build
```

Preview the email build in the browser

```bash
npm run preview
```

## 🧰 Tools

Run the TypeScript test

```bash
npm run test
```

Format code with Prettier

```bash
npm run prettier
```

To allow Prettier to format your code on save, configure your editor:<br>
[Prettier Editor Integration](https://prettier.io/docs/en/editors)

ℹ️ **Ensure to include `.mjml` files in your editor's Prettier configuration**

## 📤 Sending Test Emails with SMTP

It is possible to send test emails of a build. It requires to set up a `.env` according to the `.env.example` file.

```bash
cp .env.example .env
```

**Fill in the required SMTP credentials, and email addresses.**

Then run the following command to send a test email:

```bash
npm run send:mail
```

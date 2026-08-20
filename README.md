# Project Management System

An Angular 16 project management application for managing team work through separate authenticated dashboard experiences for employees and managers.

## Features

- Authentication, registration, account verification, and password recovery
- Protected dashboard routes with authentication and logged-in guards
- Employee and manager dashboard modules
- Shared profile, password, file upload, dialog, loading, and layout components
- Charts with ApexCharts and notifications with `ngx-toastr`

## Tech Stack

- Angular 16 and TypeScript 5.1
- Angular Material 16 and Bootstrap 5.3
- SCSS with Montserrat and Inter fonts
- Font Awesome, ApexCharts, RxJS, and `ngx-file-drop`

## Requirements

- Node.js 18.x
- npm 9 or later

Angular CLI is included as a project dependency, so a global Angular CLI installation is not required.

## Installation

```bash
git clone https://github.com/esraaabuhalawa/pms-angular.git
cd pms-angular
npm install
```

## Development

Start the development server:

```bash
npm run start
```

Open `http://localhost:4200/` in a browser. The root route redirects to the authentication flow.

## Available Scripts

| Command         | Description                                     |
| --------------- | ----------------------------------------------- |
| `npm run start` | Start the development server                    |
| `npm run build` | Create a production build                       |
| `npm run watch` | Build in development mode and watch for changes |
| `npm run test`  | Run the Angular unit tests with Karma           |

## Application Routes

- `/auth/login` - Sign in
- `/auth/register` - Create an account
- `/auth/forget-password` - Request a password reset
- `/auth/reset-password` - Reset a password
- `/auth/verify-account` - Verify an account
- `/dashboard` - Authenticated dashboard area

The authentication and dashboard areas are lazy-loaded. Dashboard access requires authentication.

## Configuration

API settings are stored in:

- `src/environments/environment.ts` for development
- `src/environments/environment.prod.ts` for production builds

The current API base URL is:

```text
https://upskilling-egypt.com:3003/api/v1/
```

Production builds replace the development environment automatically through the Angular configuration in `angular.json`.

## Project Structure

```text
src/app/
├── core/                 # Guards, interceptors, and core services
├── features/
│   ├── auth/             # Authentication and account flows
│   └── dashboard/        # Employee and manager dashboards
└── shared/               # Reusable components, validators, and services
```

Static assets, fonts, global styles, and environment files are under `src/assets`, `src/styles.scss`, and `src/environments`.

## API Documentation

The application uses the Upskilling Egypt API. API documentation is available at [Swagger Docs](https://upskilling-egypt.com:3003/docs/).

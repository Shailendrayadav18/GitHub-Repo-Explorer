# 🚀 GitHub Repo Explorer

A full-stack GitHub Repository Explorer built as **Exercise 3** for the Full Stack Developer Assessment. The application allows users to search for any public GitHub profile, view user information, browse repositories, sort repositories by different criteria, search within repositories, analyze language usage, and load additional repositories using pagination. The project focuses on responsive UI design, performance optimization, backend caching, and a clean developer experience.

---

# 🌐 Live Demo Links

### Frontend (Vercel)

https://git-hub-repo-explorer-virid.vercel.app/

### Backend API (Render)

https://github-repo-explorer-9d1s.onrender.com

### GitHub Repository

https://github.com/Shailendrayadav18/GitHub-Repo-Explorer

---

# ✨ Features

## Must Have Features

* Search GitHub users
* View GitHub profile information
* View public repositories
* Repository pagination
* Loading states
* Error handling
* Responsive design

## Should Have Features

* Repository sorting
* Recent search history
* Backend caching
* Language statistics
* Optimized API requests

## Nice To Have Features

* Repository filtering
* Expandable repository cards
* Last updated repository information
* GitHub profile shortcuts
* Modern UI with Tailwind CSS

---

# 🛠 Tech Stack

## Frontend

### React.js

Used to build reusable and interactive UI components.

### Vite

Provides fast development server and optimized production builds.

### Tailwind CSS

Utility-first CSS framework for responsive and modern UI development.

### TanStack Query (React Query)

Handles server state management, caching, loading states, and pagination.

### Axios

Used for HTTP requests between frontend and backend.

### Lucide React

Provides modern SVG icons.

---

## Backend

### Node.js

JavaScript runtime for backend development.

### Express.js

Minimal web framework for building REST APIs.

### Axios

Used to communicate with GitHub REST API.

### Node Cache

Provides in-memory caching to reduce GitHub API requests and improve performance.

### CORS

Handles cross-origin requests between frontend and backend.

### Dotenv

Loads environment variables securely.

---

# 📦 How to Run Locally

## Prerequisites

Install:

* Node.js (v18+ recommended)
* Git

---

## Clone Repository

```bash
git clone https://github.com/Shailendrayadav18/GitHub-Repo-Explorer.git

cd GitHub-Repo-Explorer
```

---

## Backend Setup

```bash
cd GitHub-Repo-Explorer/server

npm install
```

Create a `.env` file:

// GitHub Account -> Settings -> Developer Settings -> Personal Access Token -> Fine-grained token -> Generate Token

```env
PORT=5000
GITHUB_TOKEN=your_github_personal_access_token     

```


Start backend:

```bash
npm start
```

Backend will run on:

```text
http://localhost:5000
```

---

## Frontend Setup

Open a second terminal:

```bash
cd GitHub-Repo-Explorer/client

npm install
```

Create `.env`:

```env
VITE_API_URL=http://localhost:5000
```

Start frontend:

```bash
npm run dev
```

Frontend will run on:

```text
http://localhost:5173
```

---

# 📖 API Documentation

## Get GitHub User Profile

### Request

```http
GET /api/github/:username
```

### Example

```http
GET /api/github/octocat
```

### Query Parameters

| Parameter | Type   | Description                     |
| --------- | ------ | ------------------------------- |
| page      | number | Repository page number          |
| perPage   | number | Number of repositories per page |

---

### Response

```json
{
  "success": true,
  "cached": false,
  "data": {
    "user": {
      "id": 1,
      "login": "octocat",
      "name": "The Octocat",
      "avatar_url": "...",
      "bio": "...",
      "followers": 100,
      "following": 20,
      "public_repos": 8,
      "html_url": "https://github.com/octocat"
    },
    "repos": [
      {
        "id": 123,
        "name": "hello-world",
        "description": "My first repository",
        "language": "JavaScript",
        "stargazers_count": 100
      }
    ],
    "pagination": {
      "page": 1,
      "perPage": 10,
      "totalRepos": 8,
      "hasMore": false
    }
  }
}
```

---

### Error Response

```json
{
  "success": false,
  "message": "GitHub user not found"
}
```

---

# 📁 Project Structure

```text
GitHub-Repo-Explorer
│
├── client
│   ├── src
│   │   ├── api
│   │   ├── components
│   │   │   ├── common
│   │   │   ├── profile
│   │   │   ├── repository
│   │   │   └── search
│   │   ├── hooks
│   │   ├── pages
│   │   ├── utils
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── public
│   └── package.json
│
├── server
│   ├── cache
│   ├── controllers
│   ├── routes
│   ├── services
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# ⚡ Performance Optimizations

* Backend caching using Node Cache
* React Query request caching
* Memoized repository sorting
* Memoized language statistics
* Optimized API pagination
* Reduced unnecessary re-renders
* Lazy loading additional repositories

---

# 🚀 Deployment

## Frontend

* Hosted on Vercel

## Backend

* Hosted on Render

---

# 🔮 Next Steps

Given additional time, the following improvements would be implemented:

### Authentication

* GitHub OAuth login
* Personalized repository exploration

### Advanced Analytics

* Repository activity charts
* Commit statistics
* Contribution heatmaps

### Improved Caching

* Redis-based distributed caching
* Persistent cache storage

### Infinite Scrolling

* Replace button-based pagination with automatic infinite scroll

### Testing

* Unit tests using Jest
* Integration tests
* End-to-end testing using Cypress

### Accessibility

* Improved keyboard navigation
* Enhanced screen reader support
* WCAG compliance improvements

---

# 👨‍💻 Author

**Shailendra Yadav**

GitHub: https://github.com/Shailendrayadav18

Thank you for reviewing this submission.
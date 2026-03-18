# Antigravity Cinema 🎬

Experience the world of movies like never before. Antigravity Cinema is a full-fledged cinematic recommendation application that allows users to discover trending masterpieces, browse curated genres, and save their ultimate favorites—all packaged within a stunning, premium UI ecosystem.

## ✨ Features

- **Authentication Tiers**: Seamlessly enter the platform securely or utilize our optimized **Guest Flow** to start discovering immediately.
- **Dynamic Content Rails**: Browse endless, horizontally-scrolling rows populated directly by dynamic TMDB endpoints (Trending, Top Rated, Action, Comedy, Horror).
- **Personal Watchlist**: Build your curated library. Simply hit the heart icon on any poster to instantly sync it to your personal `Favorites` dashboard.
- **Profile Analytics**: Monitor your active session tier and keep track of your saved item metrics at a glance.
- **Glassmorphic Design**: An ultra-modern visual aesthetic utilizing deep gradients, blurred backdrops, and interactive, fluid hover animations.

## 🚀 Technologies Used

Built entirely with a cutting-edge, modern front-end stack:

- **Core Framework**: [React 19](https://react.dev/) integrated with [Vite](https://vitejs.dev/) for lightning-fast module replacement and builds.
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) running via the new `@tailwindcss/vite` plugin architecture.
- **Global State Management**: [Redux Toolkit](https://redux-toolkit.js.org/) handling independent slices for User Authorization, Favorites Mapping, and TMDB Async Thunks.
- **Routing Engine**: [React Router DOM](https://reactrouter.com/) enforcing structured Single Page App (SPA) architecture with `<ProtectedRoute />` components.
- **Iconography**: [Lucide React](https://lucide.dev/) for crisp, scalable SVG icons.
- **Data Layer**: [TMDB API](https://developer.themoviedb.org/) for real-time aggregation of global cinema and television statistics.

## ⚙️ Local Setup Instructions

Launch Antigravity Cinema on your local machine in seconds:

### 1. Clone & Enter the Project
```bash
git clone <your-repository-url>
cd antigravity_checking
```

### 2. Install Dependencies
```bash
npm install
```

### 3. API Configuration
*Note: The TMDB bearer token is natively accessible within `src/utils/constants.js`. For a production environment, it is highly recommended to extract these tokens securely to a `.env` file:*
```env
VITE_TMDB_READ_TOKEN=your_jwt_read_access_token_here
```

### 4. Boot the Vite Server
```bash
npm run dev
```
Navigate to `http://localhost:5173` or your CLI's specified port to explore the live application!

## 📸 File Architecture Overview

- `/src/components/` - Global, atomic UI fragments including the Navigation Header, Footer, and responsive Movie Cards.
- `/src/pages/` - Core root renders for routing (`Home`, `Login`, `Favorites`, `Profile`).
- `/src/store/` - The comprehensive Redux store compiling `auth`, `movies`, and `favorites` state logic.
- `/src/utils/` - Global TMDB connection constants.

## 🤝 Contributing
Contributions, issues, and creative feature pull-requests are welcome!

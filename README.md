# Biscuits n Groovy

A modern music streaming service built with React and Vite, featuring artist collections, event
management, and seamless payment integration.

## 🎵 About

Biscuits n Groovy is a comprehensive music streaming platform that connects artists with fans.
Discover new music, explore artist collections, stay updated on events, and support your favorite
musicians through integrated payment features.

## ✨ Features

- **Artist Discovery**: Browse and explore music collections from various artists
- **Music Streaming**: Stream high-quality audio with an intuitive player interface
- **Event Management**: Stay informed about upcoming concerts and music events
- **User Authentication**: Secure login and signup with password recovery
- **Payment Integration**: Seamless purchases through Stripe integration
- **Responsive Design**: Optimized for desktop and mobile devices
- **Mailchimp Integration**: Newsletter subscriptions and updates
- **SEO Optimized**: Built-in SEO utilities for better discoverability

## 🛠️ Tech Stack

### Frontend

- **React 18** - Modern JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **Redux Toolkit** - State management for complex application state
- **Material-UI (MUI)** - React components implementing Google's Material Design
- **React Router** - Declarative routing for React applications
- **Framer Motion** - Production-ready motion library for React
- **Sass/SCSS** - CSS extension language for enhanced styling

### Payments & Integrations

- **Stripe** - Payment processing and checkout
- **React Query** - Powerful data synchronization for React
- **Axios** - HTTP client for API requests
- **React Helmet Async** - Document head management for SEO

### Development Tools

- **Vitest** - Fast unit test framework powered by Vite
- **ESLint** - Code linting and formatting
- **TypeScript** - Type-safe JavaScript (configured via jsconfig.json)

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd biscuitsngroovy
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup** Create a `.env` file in the root directory and add your environment
   variables:

   ```env
   VITE_API_BASE_URL=your_api_url
   VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_key
   VITE_GOOGLE_ANALYTICS_ID=your_ga_id
   # Add other required environment variables
   ```

4. **Start the development server**

   ```bash
   npm start
   ```

   The application will be available at `http://localhost:3000`

## 📜 Available Scripts

- `npm start` - Start the development server
- `npm run build` - Build the application for production
- `npm test` - Run tests in watch mode with UI
- `npm run coverage` - Run tests with coverage report

## 🏗️ Project Structure

```
src/
├── common/
│   ├── components/     # Reusable UI components
│   ├── hooks/         # Custom React hooks
│   ├── redux/         # Redux store and reducers
│   ├── UI/           # UI-specific components
│   └── utils/        # Utility functions and helpers
├── pages/            # Page components
│   ├── Home/         # Homepage
│   ├── Artists/      # Artist listings
│   ├── Collection/   # Music collections
│   ├── Events/       # Event management
│   ├── Login/        # Authentication
│   └── ...
├── Routes/           # Routing configuration
└── theme/            # Theme and styling configuration
```

## 🎨 Styling

The project uses a combination of:

- **Sass/SCSS** for component-specific styles
- **Material-UI** for consistent design system
- **CSS Modules** for scoped styling
- **Framer Motion** for animations

## 🔧 Development

### Code Quality

- ESLint for code linting
- Prettier for code formatting (via ESLint)
- TypeScript for type checking (configured)

### Testing

- Vitest for unit testing
- React Testing Library for component testing
- Coverage reporting with Istanbul

## 🚀 Deployment

1. **Build the application**

   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting provider (Netlify, Vercel, etc.)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 📞 Contact

For questions or support, please contact the development team.

---

**Made with ❤️ for music lovers everywhere**

---

## Images

![Description of image](src\common\assets\showcase\site-capture.png)

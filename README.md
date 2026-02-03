# PopX Mobile App Interface

A pixel-perfect mobile app interface built with React, TypeScript, and styled-components, recreating the PopX app design from Adobe XD. The design features a centered mobile frame with seamless navigation between screens.

## 🚀 Live Demo

- **GitHub Repository**: https://github.com/hardikmishra0910/Mobile-App-Interface
- **Live Demo**: mobile-app-interface-nine.vercel.app

## 📱 App Screens

### 1. Landing Screen
- Welcome message with "Welcome to PopX"
- Animated numbered circles (1-7) in a decorative pattern
- "Create Account" and "Already Registered? Login" buttons
- Clean, modern design with orange accent colors

### 2. Login Screen  
- "Signin to your PopX account" form
- Email address and password input fields
- Responsive login button
- Clean form validation and user experience

### 3. Signup Screen
- "Create your PopX account" registration form
- Full name, phone number, email, password, and company fields
- "Are you an Agency?" radio button selection
- Form validation and user-friendly interface

### 4. Profile Screen
- "Account Settings" header with breadcrumb navigation
- User profile display with avatar and online status indicator
- User information: "Marry Doe" with email "Marry@Gmail.Com"
- Lorem ipsum description text
- Clean card-based layout

## 🛠 Technologies Used

- **React 19.2.4**: Modern React with hooks and functional components
- **TypeScript**: Type-safe development for better code quality
- **Styled Components**: CSS-in-JS styling for component-based design
- **React Router DOM**: Client-side routing between screens
- **React Icons**: Beautiful icon library (Feather Icons)

## 🎨 Design Features

- **Mobile Frame**: 375x812px iPhone-style mobile frame
- **Centered Layout**: Mobile interface centered on webpage
- **Status Bar**: Realistic iOS-style status bar with time and battery
- **Color Scheme**: 
  - Primary: #7B68EE (Purple)
  - Accent: #FFA500 (Orange)
  - Background: #f8f8f8 (Light Gray)
- **Typography**: Clean, readable fonts with proper hierarchy
- **Animations**: Smooth hover effects and transitions
- **Responsive**: Optimized for mobile-first design

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation & Setup

1. **Clone the repository:**
```bash
git clone https://github.com/hardikmishra0910/Mobile-App-Interface.git
cd Mobile-App-Interface
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm start
```

4. **Open in browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 🌐 Deployment

The app is configured for easy deployment to:

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload `build` folder to Netlify
3. Configure redirects for SPA routing

### Other Platforms
- GitHub Pages
- Firebase Hosting
- AWS S3 + CloudFront

## 📱 Navigation Flow

```
Landing Screen (/) 
    ↓
    ├── Create Account → Signup Screen (/signup) → Profile Screen (/profile)
    └── Login → Login Screen (/login) → Profile Screen (/profile)
```

## 🎯 Key Features

- **Pixel Perfect**: Matches Adobe XD design specifications exactly
- **Responsive Design**: Mobile-first approach with centered frame
- **Smooth Navigation**: Seamless transitions between screens
- **Form Handling**: Interactive forms with state management
- **Modern UI/UX**: Clean, intuitive user interface
- **TypeScript**: Full type safety and better developer experience

## 📂 Project Structure

```
src/
├── pages/
│   ├── LandingScreen.tsx    # Welcome screen with numbered circles
│   ├── LoginScreen.tsx      # User login form
│   ├── SignupScreen.tsx     # User registration form
│   └── ProfileScreen.tsx    # User profile and account settings
├── styles/
│   └── GlobalStyles.ts      # Global CSS styles
├── App.tsx                  # Main app component with routing
└── index.tsx               # App entry point
```

## 🔧 Customization

The app uses styled-components for easy customization:

- **Colors**: Update color variables in styled components
- **Typography**: Modify font families and sizes
- **Layout**: Adjust mobile frame dimensions
- **Animations**: Customize hover effects and transitions

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)  
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is created for interview/assessment purposes and demonstrates modern React development practices.

---

**Made with ❤️ using React, TypeScript, and Styled Components**

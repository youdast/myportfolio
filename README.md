# Portfolio Website - Yuda Satria

A modern, premium React.js portfolio website showcasing projects, skills, and professional experience. Built with Vite, featuring smooth animations, responsive design, and API integration.

## 🚀 Features

- **Modern Design**: Clean Cleanfolio-inspired layout with enhanced animations
- **Responsive**: Fully responsive design for all devices
- **Animated**: Smooth animations using Framer Motion
- **API Integration**: Connects to local core-public-api for dynamic content
- **Dark Mode**: Toggle between light and dark themes
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Project Showcase**: Display projects with images, descriptions, and tech stacks
- **Skills Grid**: Animated skill cards with categories
- **Contact Section**: Easy ways to get in touch

## 🛠️ Tech Stack

- **React 18+** - UI library
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library
- **Axios** - HTTP client for API calls
- **React Icons** - Icon library
- **CSS3** - Custom styling with CSS variables

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Running instance of core-public-api on `http://127.0.0.1:8888`

## 🔧 Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd "c:\OneDrive - Sykou Corporation\Services\portfolio"
   ```

2. **Install dependencies** (already done)
   ```bash
   npm install
   ```

3. **Configure environment variables**
   - The `.env` file is already configured with:
     ```
     VITE_API_BASE_URL=http://127.0.0.1:8888
     ```
   - Update if your API runs on a different port

## 🚀 Running the Application

### Development Mode
```bash
npm run dev
```
The application will start at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Header/          # Navigation header with theme toggle
│   │   ├── Hero/            # Hero section with typing animation
│   │   ├── About/           # About section
│   │   ├── Skills/          # Skills grid with API integration
│   │   ├── Projects/        # Projects showcase with images
│   │   ├── Contact/         # Contact information
│   │   └── Footer/          # Footer with social links
│   ├── services/
│   │   ├── api.js           # Axios instance configuration
│   │   └── portfolioService.js  # API service methods
│   ├── App.jsx              # Main application component
│   ├── App.css              # Global styles and design system
│   └── main.jsx             # Application entry point
├── .env                     # Environment variables
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
└── vite.config.js           # Vite configuration
```

## 🎨 Design Features

### Color Palette
- Primary: `#5e60ce` (Purple)
- Secondary: `#48cae4` (Cyan)
- Accent: `#f72585` (Pink)
- Gradients: Multiple gradient combinations for visual appeal

### Animations
- Typing effect in hero section
- Smooth scroll navigation
- Hover effects on cards and buttons
- Staggered animations for lists
- Gradient background animations

### Responsive Breakpoints
- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

## 🔌 API Integration

The portfolio connects to your core-public-api with the following endpoints:

- `GET /api/v1/portfolio/projects` - Fetch all projects
- `GET /api/v1/portfolio/skills` - Fetch all skills
- `GET /api/v1/portfolio/about` - Fetch about information (optional)

### Expected API Response Format

**Projects:**
```json
{
  "data": [
    {
      "id": 1,
      "title": "Project Name",
      "description": "Project description",
      "image": "image_url",
      "category": "Web",
      "tech_stack": ["React", "Node.js"],
      "github_url": "https://github.com/...",
      "demo_url": "https://demo.com"
    }
  ]
}
```

**Skills:**
```json
{
  "data": [
    {
      "id": 1,
      "name": "Go Language",
      "category": "Backend"
    }
  ]
}
```

### Fallback Data
If the API is unavailable, the application will display sample data to ensure the portfolio remains functional.

## 🎯 Key Components

### Hero Section
- Animated typing effect showing different roles
- Gradient background with animation
- Call-to-action buttons
- Social media links

### Projects Section
- Image-based project cards
- Category filtering (All, Web, App & Web)
- Hover effects revealing project links
- Tech stack tags

### Skills Section
- Grid layout with animated cards
- Icon-based skill representation
- Category labels

### Contact Section
- Contact information cards
- Social media links
- Call-to-action for collaboration

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Customization

### Update Personal Information
Edit the following files to customize:
- `src/components/Hero/Hero.jsx` - Name, roles, description
- `src/components/About/About.jsx` - About information
- `src/components/Contact/Contact.jsx` - Contact details
- `src/components/Footer/Footer.jsx` - Footer information

### Change Colors
Update CSS variables in `src/App.css`:
```css
:root {
  --primary-color: #5e60ce;
  --secondary-color: #48cae4;
  --accent-color: #f72585;
}
```

## 🐛 Troubleshooting

### API Connection Issues
1. Ensure core-public-api is running on `http://127.0.0.1:8888`
2. Check browser console for CORS errors
3. Verify API endpoints are accessible

### Build Issues
1. Clear node_modules and reinstall: `rm -rf node_modules && npm install`
2. Clear Vite cache: `rm -rf .vite`
3. Ensure Node.js version is 18+

## 📄 License

This project is created for personal portfolio use.

## 👤 Author

**Yuda Satria**
- Email: yudasign@gmail.com
- GitHub: [@youdast](https://github.com/youdast)

---

Built with ❤️ using React and Vite

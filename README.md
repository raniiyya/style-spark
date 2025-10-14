# Style Spark

A React-based style generator application that works entirely in the frontend without any backend server or database dependencies.

## 🎨 Features

- **9 Distinct Styles**: Old Money Style, Stockholm Style, Streetwear, Office Siren, Soft Girl, Bohemian, Classy, Preppy, 90s Style
- **Interactive Wheel**: Spin to get a random style recommendation
- **Style Quiz**: 10-question quiz to discover your personal style
- **Style Gallery**: Browse all 9 styles with detailed information
- **Pinterest-style Modal**: Detailed style information with inspiration images
- **Responsive Design**: Works on desktop, tablet, and mobile

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Open your browser:**
   Visit `http://localhost:3000`

## 📁 Project Structure

```
style-spark/
├── public/                # Static assets
│   ├── images/           # Style images and placeholders
│   ├── index.html        # Main HTML file
│   └── manifest.json     # PWA manifest
├── src/
│   ├── components/       # Reusable React components
│   │   ├── Wheel.jsx     # Style wheel component
│   │   ├── Quiz.jsx      # Style quiz component
│   │   ├── StyleModal.jsx # Style detail modal
│   │   ├── Navbar.jsx    # Navigation component
│   │   └── Footer.jsx    # Footer component
│   ├── sections/         # Page sections
│   │   ├── HeroSection.jsx    # Landing section
│   │   ├── IdeaSection.jsx    # Project idea section
│   │   └── StylesSection.jsx  # Styles gallery
│   ├── App.js            # Main application component
│   ├── App.css           # Main styles
│   └── index.js          # Application entry point
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
└── postcss.config.js     # PostCSS configuration
```

## 🎯 Components Overview

### **Wheel Component**
- Interactive spinning wheel with all 9 styles
- Random style selection
- Smooth animations and transitions

### **Quiz Component**
- 10-question style preference quiz
- Intelligent style matching based on answers
- Results displayed in modal with detailed information

### **StylesSection Component**
- Grid layout displaying all 9 styles
- Responsive design (3 columns desktop, 2 tablet, 1 mobile)
- Hover animations and click-to-view details
- Back to top smooth scroll functionality

### **StyleModal Component**
- Pinterest-style image layout
- Detailed style descriptions
- Centered title design
- Clean, focused interface

## 🎨 The 9 Styles

1. **Old Money Style** - Classic, sophisticated fashion inspired by traditional wealth
2. **Stockholm Style** - Minimalist Scandinavian aesthetic with clean lines
3. **Streetwear** - Urban fashion influenced by hip-hop culture and street art
4. **Office Siren** - Professional yet alluring workwear that commands attention
5. **Soft Girl** - Sweet, romantic aesthetic with pastel colors and feminine silhouettes
6. **Bohemian** - Free-spirited, artistic style with flowing fabrics and earthy tones
7. **Classy** - Timeless, elegant fashion that never goes out of style
8. **Preppy** - Traditional American collegiate style with clean lines and classic patterns
9. **90s Style** - Nostalgic fashion inspired by the 1990s decade with grunge elements

## 🛠️ Technologies Used

- **React** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript ES6+** - Modern JavaScript features
- **CSS Grid & Flexbox** - Layout systems
- **CSS Animations** - Smooth transitions and hover effects

## 📱 Responsive Design

- **Desktop**: 3-column grid layout
- **Tablet**: 2-column grid layout  
- **Mobile**: Single column layout
- **Touch-friendly**: Optimized for mobile interactions

## 🎯 No Backend Required

This application is completely self-contained:
- ✅ No server setup needed
- ✅ No database configuration required
- ✅ No API endpoints to maintain
- ✅ All data stored in frontend components
- ✅ Works offline after initial load

## 🚀 Deployment

Simply build and deploy the React app:

```bash
npm run build
```

The `build` folder contains all static files ready for deployment to any static hosting service (Netlify, Vercel, GitHub Pages, etc.).

## 🎨 Customization

All styles and data are stored in the frontend components, making it easy to:
- Add new styles
- Modify existing style descriptions
- Update images and assets
- Customize the design and layout
- Add new quiz questions

The application maintains the exact same functionality as before, but now works entirely in the frontend!

# 🤖 Electronics Engineer Portfolio

> A **futuristic, sleek, and highly interactive portfolio website** for Electronics and Robotics Engineers, powered by React, Vite, Framer Motion, and Sanity CMS.

![Status](https://img.shields.io/badge/status-production%20ready-brightgreen)
![React](https://img.shields.io/badge/React-19-blue)
![Vite](https://img.shields.io/badge/Vite-7-blueviolet)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Key Features

### 🎯 Pages

- **HOME** - Animated hero with featured projects
- **PROJECTS** - Searchable/filterable project portfolio
- **LAB** - Interactive skills showcase by category
- **BLOG** - Technical articles and engineering notes
- **CONTACT** - Contact form with animated radar background

### 🎨 Design

- **Futuristic Lab Interface** - Styled like a digital robotics laboratory
- **Animated Circuit Background** - Dynamic signal pulses and glowing traces
- **Neon Color Scheme** - Cyan, green, amber on dark navy background
- **Responsive Design** - Works on all devices
- **Smooth Animations** - Framer Motion throughout

### 🎮 Interactive Elements

- **Terminal Easter Egg** (Ctrl + `) with 6+ commands
- **Konami Code** activation for debug mode
- **Project Filtering** by technology and search
- **Skill Modules** with hover animations
- **Radar Sweep** background (contact page)

### 📊 CMS Integration

- **Sanity CMS** for easy content management
- **GROQ Queries** for type-safe content fetching
- **Rich Text Editor** for blog posts
- **Image Management** with Sanity's CDN
- **Pre-built Schemas** (Project, Skill, BlogPost, SiteSettings)

### ⚡ Performance

- Lazy-loaded images
- Code splitting
- ~150KB gzipped bundle
- Target load time: < 2 seconds
- Optimized animations (60 FPS)

## 🛠️ Tech Stack

**Frontend:**

- React 19
- Vite 7 + SWC (fast refresh)
- Tailwind CSS 4 (styling)
- Framer Motion (animations)
- React Router (navigation)
- Lucide React (icons)

**Backend:**

- Sanity CMS (headless content management)
- GROQ (query language)
- Sanity Studio (content editor UI)

**Deployment:**

- Vercel, Netlify, or GitHub Pages (frontend)
- Sanity.io (backend)

## 🚀 Quick Start

### 1. Prerequisites

```bash
Node.js 18+, npm/yarn, Sanity account (free)
```

### 2. Install Dependencies

```bash
cd NithinPortfolio
npm install
```

### 3. Set Up Sanity CMS

```bash
# Create new Sanity project or use existing
npm run sanity init

# Add environment variables to .env.local
VITE_SANITY_PROJECT_ID=your_project_id
VITE_SANITY_DATASET=production
```

### 4. Run Development Server

```bash
# Terminal 1 - Frontend
npm run dev

# Terminal 2 - Sanity Studio
npm run studio
```

**Frontend**: http://localhost:5173
**Sanity Studio**: http://localhost:3333

### 5. Build for Production

```bash
npm run build
```

## 📋 Project Structure

```
NithinPortfolio/
├── sanity/
│   └── schemaTypes/
│       ├── project.js
│       ├── skill.js
│       ├── blogPost.js
│       └── siteSettings.js
├── src/
│   ├── components/
│   │   ├── CircuitBackground.jsx    # Animated background
│   │   ├── Hero.jsx                 # Landing hero
│   │   ├── Navbar.jsx               # Navigation
│   │   ├── Terminal.jsx             # Easter egg
│   │   ├── AnimatedButton.jsx       # Button component
│   │   ├── ProjectCard.jsx          # Project card
│   │   └── SkillModule.jsx          # Skill module
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectDetail.jsx
│   │   ├── Lab.jsx
│   │   ├── Blog.jsx
│   │   └── Contact.jsx
│   ├── lib/
│   │   └── sanity.js                # Client & queries
│   ├── App.jsx
│   └── main.jsx
├── sanity.config.js
├── vite.config.js
├── tailwind.config.js
└── .env.example
```

## 🎮 Easter Eggs

### Terminal Mode

Press \*\*Ctrl + `` to open terminal

**Commands:**

- `help` - Show commands
- `whoami` - Engineer info
- `projects` - List projects
- `skills` - Skill categories
- `contact` - Contact info
- `easter` - Unlock secret

### Konami Code

**Sequence**: ↑ ↑ ↓ ↓ ← → ← → B A

Activates Debug Mode with green neon theme

### Hidden Easter Egg

`easter` command unlocks secret projects section

## 📖 Documentation

- [**SETUP_GUIDE.md**](./SETUP_GUIDE.md) - Comprehensive setup instructions
- [**SANITY_SETUP.md**](./SANITY_SETUP.md) - CMS configuration guide
- [**FEATURES.md**](./FEATURES.md) - Features & animations guide

## 🎨 Customization

### Change Colors

Edit `tailwind.config.js`:

```js
colors: {
  cyan: '#00e5ff',      // Primary
  lime: '#00ff41',      // Secondary
  amber: '#ffb700',     // Accent
}
```

### Modify Animations

Edit animation delays in component files:

```jsx
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
```

### Update Terminal Commands

Edit `src/components/Terminal.jsx` commands object

## 🚀 Deployment

### Frontend (Vercel - Recommended)

```bash
# Connect GitHub repo to Vercel
# Auto-deploys on push
# Set environment variables in Vercel dashboard
```

### Frontend (Netlify)

```bash
# Or drag and drop build folder
# Set environment variables in Netlify settings
```

### Sanity Studio

```bash
npm run sanity deploy
# Creates hosted studio at project.sanity.studio
```

## 📊 Sanity Schemas

### Project

- title, slug, description, technologies
- images, architecture diagram
- GitHub/demo links, featured flag
- published date

### Skill

- skill name, category
- icon (lucide-react name)
- proficiency level (expert/advanced/intermediate/learning)

### BlogPost

- title, slug, content (rich text)
- author, category, images
- published date

### SiteSettings

- hero title/subtitle, bio
- contact email
- GitHub, LinkedIn, Twitter URLs
- resume file

## 🐛 Troubleshooting

**Sanity connection failed**

- Verify `VITE_SANITY_PROJECT_ID` in `.env.local`
- Check project ID is correct
- Ensure dataset is public or authenticated

**Module not found**

```bash
rm -rf node_modules
npm install
```

**Animations laggy**

- Close unnecessary browser tabs
- Check GPU acceleration is enabled
- Reduce animation complexity

## 📊 Performance Tips

- Optimize images before uploading to Sanity
- Use WEBP format for images
- Limit animations on mobile
- Cache responses with service workers
- Monitor bundle size: `npm run build --analyze`

## 🔗 Environment Variables

```env
VITE_SANITY_PROJECT_ID=your_project_id    # Required
VITE_SANITY_DATASET=production             # Required
```

Get from [sanity.io/manage](https://www.sanity.io/manage)

## 📚 Resources

- [React Docs](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Sanity Docs](https://www.sanity.io/docs)
- [GROQ Reference](https://www.sanity.io/docs/groq)

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to branch
5. Open a pull request

## 📄 License

MIT License - feel free to use this project!

## 👨‍💻 Author

**Nithin** - Electronics Engineer

- GitHub: [github.com/yourprofile](https://github.com)
- LinkedIn: [linkedin.com/in/yourprofile](https://linkedin.com)

## 🎯 Roadmap

- [ ] 3D scene with Three.js
- [ ] Dark/Light theme toggle
- [ ] Multi-language support
- [ ] Comment section on blog posts
- [ ] Newsletter subscription
- [ ] Analytics dashboard
- [ ] Testimonials section
- [ ] Video project demos

## 💡 Tips

1. **Keep content fresh** - Update blog posts regularly
2. **Add high-quality images** - Use Sanity's asset management
3. **Optimize for SEO** - Add descriptions to all projects
4. **Mobile testing** - Test on various devices
5. **Monitor performance** - Use lighthouse & web vitals

## 🆘 Support

Need help? Check the documentation files or create an issue on GitHub.

---

**Built with ❤️ for engineers who build amazing things. Let's create the future! 🚀**

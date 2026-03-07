# 🤖 Electronics Engineer Portfolio - Modern Interactive Site

A **futuristic, sleek, and highly interactive portfolio website** for an Electronics and Robotics Engineer, featuring an integrated Sanity CMS headless content management system.

## 🌟 Features

### Visual Design

- **Futuristic Lab Interface**: Styled like a digital robotics laboratory with circuit board animations
- **Animated Circuit Background**: Dynamic signal pulses flowing across glowing traces
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Neon Color Palette**:
  - Background: Very dark navy/black
  - Primary: Neon cyan
  - Secondary: Electric green
  - Accent: Amber

### Pages

1. **HOME** - Hero section with animated circuit background and featured projects
2. **PROJECTS** - Grid of projects with filtering and detailed project pages
3. **LAB** - Skills organized by categories with interactive module animations
4. **BLOG** - Engineering notes and technical articles
5. **CONTACT** - Contact form with animated radar sweep background

### Content Management

- **Sanity CMS Integration**: Headless CMS for easy content management
- **Schemas**: Project, Skill, BlogPost, and SiteSettings documents
- **GROQ Queries**: Type-safe content fetching
- **Rich Text Support**: Full rich text editor for blog posts

### Interactive Elements

- **Easter Eggs**:
  - Terminal Mode (Ctrl + `)
  - Konami Code activation for Debug Mode
  - Secret project unlocking
- **Smooth Animations**: Framer Motion throughout
- **Signal Pulse Effects**: Animated data flowing across circuits

## 🛠️ Tech Stack

### Frontend

- **React 19** with **Vite** + **SWC**
- **Tailwind CSS** 4
- **Framer Motion** for animations
- **Three.js** / **React Three Fiber** (optional 3D scenes)
- **Lucide React** for icons
- **React Router** for navigation

### Backend

- **Sanity CMS** (headless content management)
- **GROQ** query language for content
- **Sanity Studio** for content editing

### Deployment Ready

- Optimized for performance (lazy loading, code splitting)
- 3D asset optimization
- Responsive image handling

## 📋 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- Sanity.io account (free)

### 1. Clone & Install

```bash
cd NithinPortfolio
npm install
```

### 2. Set Up Sanity CMS

#### Option A: Create a new Sanity project

```bash
npm run sanity init
```

#### Option B: Link to existing project

1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Create a new project or use existing
3. Copy your `projectId` and `dataset`
4. Add to `.env.local`:

```env
VITE_SANITY_PROJECT_ID=your_project_id
VITE_SANITY_DATASET=production
```

### 3. Run Development Server

**Frontend:**

```bash
npm run dev
```

**Sanity Studio (separate terminal):**

```bash
npm run studio
```

Sanity Studio will run at `http://localhost:3333`

### 4. Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
NithinPortfolio/
├── sanity/
│   └── schemaTypes/
│       ├── project.js           # Project schema
│       ├── skill.js             # Skill schema
│       ├── blogPost.js          # Blog post schema
│       └── siteSettings.js       # Site configuration
├── src/
│   ├── components/
│   │   ├── CircuitBackground.jsx   # Animated background
│   │   ├── Hero.jsx                # Landing hero
│   │   ├── Navbar.jsx              # Navigation
│   │   ├── Terminal.jsx            # Easter egg terminal
│   │   ├── AnimatedButton.jsx      # Reusable button
│   │   ├── ProjectCard.jsx         # Project card
│   │   └── SkillModule.jsx         # Skill module
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectDetail.jsx
│   │   ├── Lab.jsx
│   │   ├── Blog.jsx
│   │   └── Contact.jsx
│   ├── lib/
│   │   └── sanity.js           # Sanity client setup & GROQ queries
│   ├── App.jsx                 # Main app component
│   └── main.jsx
├── sanity.config.js            # Sanity configuration
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind configuration
└── .env.example               # Environment variables template
```

## 🎨 Sanity Schemas

### Project Schema

- `title` (string)
- `slug` (slug)
- `shortDescription` (string)
- `fullDescription` (rich text)
- `technologies` (array of objects)
- `architectureDiagramImage` (image)
- `projectImages` (array of images)
- `githubLink` (URL)
- `demoLink` (URL)
- `featured` (boolean)
- `publishedDate` (datetime)

### Skill Schema

- `skillName` (string)
- `category` (string: microcontrollers, robotics, etc.)
- `icon` (lucide-react icon name)
- `proficiency` (expert, advanced, intermediate, learning)
- `order` (number)

### BlogPost Schema

- `title` (string)
- `slug` (slug)
- `author` (string)
- `content` (rich text with images and code blocks)
- `heroImage` (image)
- `publishedDate` (datetime)
- `category` (string)

### SiteSettings Schema

- `siteName` (string)
- `heroTitle` (string)
- `heroSubtitle` (string)
- `heroImage` (image)
- `bio` (rich text)
- `contactEmail` (string)
- `github` (URL)
- `linkedin` (URL)
- `twitter` (URL)
- `instagram` (URL)
- `resumeFile` (PDF file)

## 🎮 Easter Eggs

### 1. Terminal Mode

Press `Ctrl + `` to open terminal overlay

**Available Commands:**

- `help` - Show all commands
- `whoami` - Display engineer info
- `projects` - List projects
- `skills` - Show skill categories
- `contact` - Display contact info
- `clear` - Clear terminal
- `easter` - Unlock secret content

### 2. Konami Code

Enter the Konami code (↑ ↑ ↓ ↓ ← → ← → B A) to activate **Debug Mode** with neon green interface

### 3. Hidden Easter Egg

Triggering the easter command in terminal unlocks a secret projects section

### 4. Console Message

Check browser console on page load for system startup message

## 🚀 Deployment

### Frontend Deployment Options

- **Vercel** (recommended): Connect GitHub repo, auto-deploy on push
- **Netlify**: Drag and drop or connect GitHub
- **AWS Amplify**: Full CI/CD pipeline
- **GitHub Pages**: Static hosting

### Sanity Studio Deployment

```bash
npm run deploy
```

or manually via [sanity.io/manage](https://www.sanity.io/manage)

### Example Vercel Deployment

```bash
npm install -g vercel
vercel
```

## 📊 Performance Optimizations

- ✅ Lazy-loaded images with next-gen formats
- ✅ Code splitting for pages
- ✅ Optimized 3D assets
- ✅ Compressed animations
- ✅ CDN-ready image serving via Sanity
- ✅ Target load time: < 2 seconds

## 🔐 Environment Variables

Create `.env.local` file:

```env
VITE_SANITY_PROJECT_ID=your_project_id
VITE_SANITY_DATASET=production
```

Get these from [Sanity.io Dashboard](https://www.sanity.io/manage)

## 📝 Content Management Workflow

1. Go to Sanity Studio: `http://localhost:3333`
2. Create/Edit documents using visual editors
3. Changes auto-publish to production dataset
4. Frontend fetches latest content via GROQ queries
5. Sites rebuilds with new content

## 🎯 Customization

### Change Color Palette

Edit Tailwind colors in `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      cyan: '#00e5ff',    // Primary
      lime: '#00ff41',    // Secondary
      amber: '#ffb700',   // Accent
    }
  }
}
```

### Modify Terminal Commands

Edit `src/components/Terminal.jsx` commands object

### Adjust Animations

Edit animation delays and durations in component files

## 🐛 Troubleshooting

### Sanity Connection Issues

- Verify `VITE_SANITY_PROJECT_ID` is correct
- Check dataset name is public or authenticated
- Ensure API token has proper permissions

### Build Errors

```bash
# Clear cache and reinstall
rm -rf node_modules yarn.lock
npm install
```

### Module Not Found

```bash
# Install missing dependencies
npm install [module-name]
```

## 📚 Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite Guide](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Nithin** - Electronics Engineer specializing in Robotics and Embedded Systems

---

## 🎯 Next Steps

1. ✅ Clone repository
2. ✅ Install dependencies
3. ✅ Set up Sanity CMS
4. ✅ Create sample content
5. ✅ Customize colors and content
6. ✅ Deploy to Vercel/Netlify
7. ✅ Share with the world! 🚀

---

**Happy building! Let's create amazing engineering experiences together! 🤖⚙️**

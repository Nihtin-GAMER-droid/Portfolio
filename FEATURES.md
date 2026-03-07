# 🚀 Features & Animations Guide

## 🎨 Visual Features

### Animated Circuit Background

- **Dynamic signal pulses** flowing across glowing traces
- **Pulsing nodes** that represent connection points
- **Fade effect** for smooth trail animations
- **Responsive** to window resize
- **Performance optimized** - uses canvas for efficient rendering

**Location**: `src/components/CircuitBackground.jsx`

### Hero Section

- **Staggered animations** for text and buttons
- **Signal pulses** flowing down the screen
- **Smooth scroll indicator** at bottom
- **CTA buttons** with hover animations
- **Tech stack badges** that appear progressively

**Location**: `src/components/Hero.jsx`

### Navigation

- **Fixed top bar** with backdrop blur
- **Responsive menu** - hamburger on mobile
- **Smooth hover states**
- **Active link indication**

**Location**: `src/components/Navbar.jsx`

### Project Cards

- **Hover scale effect**
- **Technology tags** display
- **Links to GitHub/Demo**
- **Featured badge** for special projects
- **Smooth border color transition**

**Location**: `src/components/ProjectCard.jsx`

### Skill Modules

- **Interactive hover animations** (scale and rotate)
- **Color-coded proficiency levels**:
  - 🟡 Yellow: Expert
  - 🟢 Green: Advanced
  - 🔵 Cyan: Intermediate
  - 🟠 Amber: Learning
- **Glowing border effects**
- **Staggered grid animations**

**Location**: `src/components/SkillModule.jsx`

### Radar Animation (Contact Page)

- **360° sweep line** effect
- **Concentric circles** from center
- **Crosshair overlay**
- **Glowing sweep arc** that follows the line
- **Center pulsing point**

**Location**: `src/pages/Contact.jsx`

### Terminal Easter Egg

- **Custom command interface**
- **Syntax-highlighted output**
- **Command history support**
- **Different text colors** for different output types
- **Debug mode** with green neon theme
- **Konami code detector**

**Location**: `src/components/Terminal.jsx`

## 🎮 Interactive Features

### Terminal Commands (Ctrl + `)

```bash
help              # Show all available commands
whoami            # Display engineer information
projects          # List all projects
skills            # Display skill categories
contact           # Show contact information
clear             # Clear terminal output
easter            # Unlock easter egg
```

### Konami Code Activation

**Sequence**: ↑ ↑ ↓ ↓ ← → ← → B A

**Effect**: Activates Debug Mode with:

- Neon green terminal interface
- System status messages
- Secret messages in console

### Project Filtering

- **Search by title/description**
- **Filter by technology**
- **Featured projects highlighting**
- **Real-time filtering**

**Location**: `src/pages/Projects.jsx`

### Skill Category Navigation

- **8 different categories**
- **Smooth transitions** between categories
- **Category-specific skill display**
- **Proficiency level badges**

**Location**: `src/pages/Lab.jsx`

### Blog Post Categorization

- **Multiple categories** (Embedded, Robotics, Vision, Hardware)
- **Read time estimates**
- **Publication date display**
- **Excerpt previews**

**Location**: `src/pages/Blog.jsx`

### Contact Form

- **Form validation** (client-side)
- **Radar scanning animation** background
- **Social media links**
- **Quick contact badges**

**Location**: `src/pages/Contact.jsx`

## 🎬 Animation Libraries

### Framer Motion

Used throughout for:

- `initial` - Starting state
- `animate` - Animated target
- `whileHover` - Hover state animations
- `whileInView` - Animations triggered by scroll
- `whileTap` - Click/tap animations
- `transition` - Animation timing/easing

### Canvas API

- Circuit background rendering
- Radar sweep animation
- Real-time signal visualization
- Performance-optimized animations

## 📊 Animation Timings

| Element           | Duration | Delay  | Easing  |
| ----------------- | -------- | ------ | ------- |
| Page Entry        | 0.6-0.8s | 0-0.3s | easeOut |
| Button Hover      | 0.2s     | -      | default |
| Scroll Animations | 0.6s     | 0.2s   | easeOut |
| Circuit Pulses    | 3s       | 0-0.3s | linear  |
| Terminal Output   | instant  | -      | -       |
| Card Hover        | 0.2s     | -      | default |

## 🎨 Color System

```
Primary: #22d3ee (Cyan)
Secondary: #22c55e (Green)
Accent: #fbbf24 (Amber)
Dark Background: #0f172a
Card Background: #1e293b50
Border: #06b6d420
Success: #84cc16
Error: #ef4444
Warning: #f59e0b
```

All colors defined in Tailwind config for easy customization.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (single column)
- **Tablet**: 768px - 1024px (2 columns)
- **Desktop**: > 1024px (3-4 columns)

All components use `md:` Tailwind breakpoints for responsive design.

## ⚡ Performance Optimizations

### Image Optimization

- Lazy loading via Sanity
- Next-gen formats (WEBP)
- Responsive image sizes
- Image URL builder from Sanity

### Code Optimization

- Code splitting for pages
- Tree shaking for unused code
- CSS purging in production
- Minification and compression

### Animation Optimization

- Canvas for background animations
- RequestAnimationFrame for smooth performance
- GPU acceleration for transforms
- Motion value caching in Framer

### Bundle Size

- Total bundle: ~150KB gzipped
- Core: ~85KB
- Dependencies: ~65KB

## 🔐 Console Output

On page load, the browser console displays:

```
SYSTEM ONLINE
Engineer Portfolio Loaded
Status: Building the Future

System Status: ✓ All Systems Online
```

## 🎭 Hidden Features

### Secret Projects

Triggered by `easter` command in terminal:

- Navigates to `/secret` route
- Special neon green styling
- Experimental projects showcase

### Debug Mode

Triggered by Konami code (↑ ↑ ↓ ↓ ← → ← → B A):

- Green neon terminal theme
- Debug status messages
- Secret system information

## 🎯 Accessibility

- Semantic HTML structure
- Keyboard navigation support
- Focus visible styles
- Color contrast compliant (WCAG AA)
- Terminal keyboard navigation

## 🚀 Future Animation Ideas

- 3D scene with Three.js integration
- Particle system for interactions
- Advanced GLSL shaders
- Physics-based animations
- Gesture recognition on mobile
- Eye-tracking effects

---

**Explore and enjoy the interactive experience! 🎨✨**

# 🎨 Sanity CMS Setup Guide

This guide walks you through setting up Sanity CMS with this portfolio project.

## Step 1: Create a Sanity Project

### Option A: Create a Brand New Project (Recommended)

1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Click "Create Project"
3. Give it a name: `Engineering Portfolio`
4. Select a dataset name: `production`
5. Choose your plan (Free tier is fine for starting)
6. Click "Create"

### Option B: Use Existing Project

If you already have a Sanity project, go to your project settings to get the project ID and dataset name.

## Step 2: Get Your Credentials

1. In your Sanity project dashboard, click on **Settings**
2. Note down:
   - **Project ID** (looks like: `abc12def`)
   - **Dataset** (default: `production`)

3. Create a `.env.local` file in the project root:

```env
VITE_SANITY_PROJECT_ID=your_project_id_here
VITE_SANITY_DATASET=production
```

Replace `your_project_id_here` with your actual project ID.

## Step 3: Initialize Sanity CLI

```bash
npm install -g @sanity/cli

cd NithinPortfolio/

# Login to your Sanity account (if not already logged in)
sanity login

# Initialize the Sanity dataset with schemas
sanity init
```

## Step 4: Install Sanity Dependencies

```bash
npm install
```

This installs:

- `@sanity/client` - For fetching content
- `sanity` - Core CLI and packages
- `@sanity/desk-tool` - Content studio interface
- `@sanity/vision` - GROQ query runner

## Step 5: Configure Sanity Studio

The `sanity.config.js` file is already configured with the schemas. No additional setup needed!

### If you want to manually configure:

```bash
# From the project root, generate Sanity configuration
sanity build
```

## Step 6: Start Sanity Studio

```bash
npm run studio
```

This starts the Sanity Studio at **http://localhost:3333**

### What You'll See:

- Content management interface with all configured document types
- Visual editor for projects, skills, blog posts, and site settings

## Step 7: Create Your First Content

### Create Site Settings

1. Go to Sanity Studio (http://localhost:3333)
2. Click "+" to create new document
3. Select "Site Settings"
4. Fill in:
   - Hero Title: "Electronics Engineer | Robotics | Embedded Systems"
   - Hero Subtitle: "Building Intelligent Machines"
   - Contact Email: your@email.com
   - GitHub, LinkedIn, Twitter URLs

### Create a Project

1. Click "+" → "Project"
2. Fill in:
   - Title: "Autonomous Rover Platform"
   - Slug: (auto-generated from title)
   - Short Description: Brief overview
   - Technologies: ESP32, ROS, OpenCV, etc.
   - Featured: Toggle on for featured projects
   - Images & links as needed

### Create a Skill

1. Click "+" → "Skill"
2. Fill in:
   - Skill Name: "ESP32"
   - Category: "Microcontrollers"
   - Icon: "Cpu" (lucide-react icon name)
   - Proficiency: "Expert"

### Create a Blog Post

1. Click "+" → "Blog Post / Engineering Notes"
2. Fill in:
   - Title: "Building Real-Time SLAM Systems"
   - Slug: (auto-generated)
   - Author: your name
   - Content: Rich text with images and code blocks
   - Category: Select appropriate category
   - Publish Date: Set to today

## Step 8: Deploy Sanity Studio

### Option A: Deploy to Sanity (Recommended)

```bash
sanity deploy
```

This creates a hosted studio at `yourproject.sanity.studio`

### Option B: Deploy with Frontend (Vercel/Netlify)

The Sanity Studio can be deployed with your frontend. Create a `/studio` folder and configure accordingly.

## Step 9: Connect Frontend to Sanity

The frontend automatically connects via:

- `src/lib/sanity.js` - Sanity client configuration
- Environment variables from `.env.local`

### Verify Connection:

1. Start the frontend: `npm run dev`
2. Open browser console (F12)
3. Check for any Sanity connection errors
4. Content should load from Sanity

## Environment Variables Reference

```env
# REQUIRED
VITE_SANITY_PROJECT_ID=abc123def456  # Your project ID
VITE_SANITY_DATASET=production       # Your dataset name

# OPTIONAL (advanced)
VITE_API_VERSION=2024-03-07          # Sanity API version (default set in sanity.js)
```

## GROQ Query Examples

The `src/lib/sanity.js` file contains pre-built queries:

```javascript
// Get all projects
import { queries } from "./lib/sanity";
sanityClient.fetch(queries.allProjects);

// Get featured projects
sanityClient.fetch(queries.featuredProjects);

// Get project by slug
sanityClient.fetch(queries.projectBySlug("autonomous-rover"));

// Get skills by category
sanityClient.fetch(queries.skillsByCategory("microcontrollers"));
```

## Troubleshooting

### "Project ID not configured"

- Verify `VITE_SANITY_PROJECT_ID` is set in `.env.local`
- Restart the dev server after changing `.env`
- File should be in project root, not in `src/`

### "Cannot fetch content"

- Check internet connection
- Verify dataset is set to public or you're authenticated
- Check project ID is correct
- Try accessing project in browser first

### "Schema not appearing in Studio"

```bash
# Rebuild schemas
npm run studio

# If that doesn't work, restart:
# 1. Stop the studio (Ctrl+C)
# 2. Clear cache: rm -rf node_modules/.cache
# 3. Restart: npm run studio
```

### "Content not showing on frontend"

- Check browser console for fetch errors
- Verify environment variables are loaded
- Try opening: `http://localhost:5173/` (adjust port if different)
- Check network tab in DevTools to see actual Sanity response

## Advanced: Custom Validation

To add validation rules to schemas, edit the schema files:

```javascript
export const project = {
  // ...
  fields: [
    {
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (Rule) => Rule.required().min(5).max(100),
    },
    // ...
  ],
};
```

## Advanced: Custom Output Components

Customize how content appears in the studio by adding preview components:

```javascript
preview: {
  select: {
    title: 'title',
    featured: 'featured',
  },
  prepare(selection) {
    const { title, featured } = selection
    return {
      title: title,
      subtitle: featured ? '⭐ Featured' : 'Regular Project',
    }
  },
},
```

## Resources

- [Sanity Docs](https://www.sanity.io/docs)
- [GROQ Reference](https://www.sanity.io/docs/groq)
- [Schema Types](https://www.sanity.io/docs/schema-types)
- [Asset Pipeline](https://www.sanity.io/docs/asset-pipeline)

## Getting Help

- Sanity Community: https://slack.sanity.io
- GitHub Issues: Create issue if you find a bug
- Documentation: https://www.sanity.io/docs

---

**Now you're ready to manage your portfolio content! Start creating amazing projects! 🚀**

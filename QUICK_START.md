# ⚡ Quick Start Checklist

Use this checklist to get your portfolio live in 30 minutes!

## Phase 1: Setup (5 minutes)

- [ ] Clone/download repository
- [ ] Run `npm install`
- [ ] Create Sanity account at [sanity.io](https://www.sanity.io)
- [ ] Create new Sanity project
- [ ] Copy Project ID from Sanity dashboard
- [ ] Create `.env.local` file with credentials:
  ```env
  VITE_SANITY_PROJECT_ID=your_id_here
  VITE_SANITY_DATASET=production
  ```

## Phase 2: Local Development (10 minutes)

- [ ] Start frontend: `npm run dev`
- [ ] Start Sanity Studio: `npm run studio` (new terminal)
- [ ] Open http://localhost:5173 in browser
- [ ] Open Sanity Studio at http://localhost:3333
- [ ] Verify both are running without errors

## Phase 3: Content Creation (10 minutes)

In Sanity Studio:

- [ ] Create "Site Settings" document:
  - [ ] Add your name/title
  - [ ] Add hero subtitle
  - [ ] Add contact email
  - [ ] Add GitHub/LinkedIn URLs

- [ ] Create at least 1 "Project":
  - [ ] Add title and description
  - [ ] Add technologies
  - [ ] Toggle "Featured" to true

- [ ] Create at least 1 "Skill":
  - [ ] Add skill name
  - [ ] Select category
  - [ ] Choose proficiency level

- [ ] Create at least 1 "Blog Post":
  - [ ] Add title and content
  - [ ] Select category
  - [ ] Add excerpt

## Phase 4: Customization (5 minutes)

In code:

- [ ] Update site title in `index.html`
- [ ] Update colors in `tailwind.config.js` (optional)
- [ ] Test terminal easter egg: Press `Ctrl + `` and type `help`
- [ ] Test Konami code: ↑ ↑ ↓ ↓ ← → ← → B A

## Phase 5: Testing (5 minutes)

- [ ] Check home page loads
- [ ] Check projects page displays your content
- [ ] Check lab page shows your skills
- [ ] Check blog page shows your posts
- [ ] Check contact page works
- [ ] Test on mobile (F12 → toggle device)
- [ ] Run Lighthouse audit (DevTools → Lighthouse)

## Phase 6: Deployment (Advanced - Optional)

### Deploy to Vercel (Recommended)

- [ ] Push code to GitHub (create repo if needed)
- [ ] Go to [vercel.com](https://vercel.com)
- [ ] Click "New Project"
- [ ] Select your GitHub repo
- [ ] Add environment variables:
  - `VITE_SANITY_PROJECT_ID`
  - `VITE_SANITY_DATASET`
- [ ] Click "Deploy"
- [ ] Wait 2-3 minutes
- [ ] Access your live site!

### Deploy Sanity Studio

- [ ] From project root run: `npm run sanity deploy`
- [ ] This creates admin interface at `yourproject.sanity.studio`

## 🎉 Success! You're Done!

Your portfolio is ready! Here's what's next:

### Immediate (Today)

- [ ] Share link with friends/colleagues
- [ ] Add your first blog post
- [ ] Update social links
- [ ] Double-check all content

### Short Term (This Week)

- [ ] Add more projects
- [ ] Improve project descriptions
- [ ] Add project images
- [ ] Write technical blog post
- [ ] Set up custom domain (optional)

### Long Term (This Month+)

- [ ] Add video demos
- [ ] Write 1 blog post per week
- [ ] Update projects as you build new things
- [ ] Engage with visitors
- [ ] Monitor analytics

## 📚 Helpful Commands

Keep these bookmarked:

```bash
npm run dev              # Start frontend (localhost:5173)
npm run studio          # Start Sanity Studio (localhost:3333)
npm run build           # Build for production
npm run lint            # Check code quality
npm run preview         # Preview production build locally
npm run sanity deploy   # Deploy Sanity Studio
```

## 🆘 Common Issues

### "Module not found error"

```bash
# Solution: Reinstall dependencies
rm -rf node_modules
npm install
```

### "Cannot connect to Sanity"

- Check `.env.local` file exists
- Verify `VITE_SANITY_PROJECT_ID` is correct
- Restart dev server (Ctrl+C, then npm run dev)

### "Port already in use"

```bash
# Frontend on different port:
npm run dev -- --port 3000

# Or kill process on port 5173:
# Windows: netstat -ano | findstr :5173
# Mac/Linux: lsof -i :5173
```

### "Sanity Studio not loading"

```bash
# Clear cache and restart:
rm -rf node_modules/.cache
npm run studio
```

## 📖 Documentation Files

- **README.md** - Overview and features
- **SETUP_GUIDE.md** - Detailed setup instructions
- **SANITY_SETUP.md** - CMS configuration guide
- **FEATURES.md** - Features & animations explained
- **DEPLOYMENT.md** - Production deployment guide

## 🎯 Pro Tips

1. **Keep content fresh** - Update at least once a week
2. **Use high-quality images** - Good visuals matter
3. **Write detailed project descriptions** - Sell your work
4. **Link to GitHub/demos** - Show your code
5. **Interact with visitors** - Respond to messages
6. **Monitor analytics** - Understand who visits
7. **Update regularly** - Shows you're active
8. **Test on mobile** - Most visitors use phones

## 🚀 What to Highlight

Create content for:

- [ ] Your best projects
- [ ] Technologies you know well
- [ ] Problems you've solved
- [ ] Skills rare in your industry
- [ ] Unique approach/philosophy

## 💡 Content Ideas

### Projects

- Real-world robotics builds
- IoT solutions you've created
- Open-source contributions
- Interesting experiments
- Case studies from work

### Blog Posts

- Technical tutorials
- Problem-solving approaches
- Project breakdowns
- Industry insights
- Learning experiences

### Skills

- Programming languages
- Tools and frameworks
- Hardware platforms
- Design/documentation skills
- Communication skills

## 🎨 Visual Checklist

- [ ] Images are high quality (compress first!)
- [ ] Colors are consistent with theme
- [ ] Text is readable (good contrast)
- [ ] Buttons are clickable (good size)
- [ ] No broken links
- [ ] All page load quickly
- [ ] No console errors

## ✅ Final Pre-Launch Checklist

- [ ] All pages working
- [ ] Content is accurate
- [ ] Links are correct
- [ ] No typos
- [ ] Mobile responsive
- [ ] Fast loading
- [ ] Looks professional
- [ ] Ready to share!

---

## 🎊 You're Ready!

Your portfolio is now live! Time to share it with the world.

**Next Step:** Create your first blog post or add more projects.

Good luck! 🚀✨

---

**Need help?** Check the documentation files or reach out to the community!

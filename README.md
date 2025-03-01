# Project: Prerendering web resources

On over over the link, we will prerender the page we will be going to.
This should be lighting fast. 


OVERVIEW
A modern, responsive website showcasing renewable energy solutions with a focus on performance and user experience.

KEY FEATURES
• Modern frosted glass design
• Responsive layout
• Performance optimizations:
  - Image preloading
  - Prerendering
  - Font optimization
  - Blur effect loading states
• Cross-browser compatible
• Mobile-first approach

TECHNICAL STACK
• HTML5
• CSS3 Features:
  - CSS Grid
  - Flexbox
  - CSS Variables
  - Backdrop Filter
  - CSS Transitions
• Google Fonts (Poppins & Space Grotesk)
• Speculation Rules API

FILE STRUCTURE
index.html          # Main landing page with hero section
about.html         # About page with service cards
contact.html       # Contact page with details
style.css         # Shared styles and animations
script.js         # JavaScript functionality
img/              # Image assets directory
  ├── home.png    # Hero image for landing
  ├── about.png   # Hero image for about
  └── contact.png # Hero image for contact

IMPLEMENTATION HIGHLIGHTS

1. Prerendering (Speculation Rules API)
   ```json
   {
       "prerender": [
           {
               "urls": ["/","/about.html", "/contact.html"],
               "eagerness": "moderate"
           }
       ]
   }
   ```

2. Performance Optimizations
   • Hero images use fetchpriority="high"
   • Font preconnect for Google Fonts
   • Optimized asset loading order
   • Minimal CSS with shared components

3. Frosted Glass Effect
   • backdrop-filter: blur(12px)
   • Semi-transparent backgrounds
   • Hardware-accelerated animations

4. Responsive Design
   • Mobile-first approach
   • Flexible grid system
   • Adaptive typography
   • Collapsible navigation

Also for CSS - let's fake SPA transitions

```css
@view-transition {
    navigation: auto;
}
```



BROWSER SUPPORT
• Modern browsers (Chrome, Firefox, Safari, Edge)
• Required features:
  - CSS Grid
  - Backdrop Filter
  - CSS Custom Properties
  - Speculation Rules API (Chrome/Edge 120+)

SETUP
1. Clone repository
2. Place images in img/ directory
3. Serve via web server
4. No build process needed

LICENSE: MIT 
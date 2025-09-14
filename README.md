# Md. Rabiul Islam - Portfolio Website

A modern, responsive portfolio website showcasing my skills as a Full Stack Developer. Built with clean HTML, CSS, JavaScript, and TailwindCSS following modern web development best practices.

## 🌟 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, minimal design with smooth animations and transitions
- **Dynamic Content**: All content loaded from JSON files for easy updates
- **Performance Optimized**: Fast loading times with optimized assets
- **SEO Friendly**: Proper meta tags and semantic HTML structure
- **Accessible**: Built with accessibility best practices
- **Cross-browser Compatible**: Works across all modern browsers

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: TailwindCSS with custom CSS
- **Icons**: Font Awesome & Heroicons
- **Fonts**: Google Fonts (Inter)
- **Data Management**: JSON files for dynamic content
- **Deployment**: GitHub Pages ready

## 📁 Project Structure

```
rabiulpmp.github.io/
├── index.html                 # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css         # Custom CSS styles
│   ├── js/
│   │   └── script.js         # JavaScript functionality
│   └── images/               # Static images
├── static/
│   └── db/                   # JSON data files
│       ├── personal.json     # Personal information
│       ├── skills.json       # Technical skills
│       ├── projects.json     # Portfolio projects
│       ├── experience.json   # Work experience
│       ├── education.json    # Educational background
│       ├── services.json     # Services offered
│       ├── testimonials.json # Client testimonials
│       └── blog.json         # Blog posts
├── resume.pdf                # Downloadable resume
├── coverletter.pdf           # Cover letter
└── README.md                 # This file
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- Basic knowledge of HTML/CSS/JavaScript (for customization)
- Text editor (VS Code recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rabiulpmp/rabiulpmp.github.io.git
   cd rabiulpmp.github.io
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local development server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```

3. **View the website**
   - Open your browser and navigate to `http://localhost:8000`

## 📝 Customization

### Updating Personal Information

Edit the JSON files in the `static/db/` directory:

1. **Personal Info** (`personal.json`):
   ```json
   {
     "name": "Your Name",
     "title": "Your Title",
     "email": "your.email@example.com",
     "phone": "+1234567890",
     "location": "Your City, Country",
     "about": {
       "description": "Your description here..."
     }
   }
   ```

2. **Skills** (`skills.json`):
   ```json
   {
     "languages": ["JavaScript", "Python", "Java"],
     "frameworks": ["React", "Node.js", "Django"],
     "databases": ["MongoDB", "PostgreSQL", "MySQL"]
   }
   ```

3. **Projects** (`projects.json`):
   ```json
   [
     {
       "title": "Project Name",
       "description": "Project description...",
       "image": "project-image-url",
       "technologies": ["React", "Node.js"],
       "github": "github-url",
       "demo": "demo-url"
     }
   ]
   ```

### Adding New Sections

1. Add the HTML structure to `index.html`
2. Create corresponding JSON data file
3. Update the JavaScript to load and populate the new section
4. Add CSS styling as needed

### Styling Customization

1. **Colors**: Update CSS custom properties in `assets/css/style.css`:
   ```css
   :root {
     --primary-color: #3b82f6;
     --primary-dark: #1d4ed8;
     /* Add your colors here */
   }
   ```

2. **Fonts**: Change Google Fonts import in `index.html` and update CSS

3. **Layout**: Modify TailwindCSS classes or add custom CSS

## 🌐 Deployment

### GitHub Pages

1. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll down to Pages section
   - Select source: Deploy from a branch
   - Select branch: main
   - Select folder: / (root)

2. **Custom Domain** (optional):
   - Add your domain in the custom domain field
   - Create a CNAME file in the root directory with your domain name

### Other Hosting Platforms

The website is static and can be hosted on:
- **Netlify**: Drag and drop the folder or connect GitHub repo
- **Vercel**: Import GitHub repository
- **Firebase Hosting**: Use Firebase CLI
- **Surge.sh**: Use surge CLI
- **Any web hosting service**: Upload files via FTP

## 📱 Browser Support

- ✅ Chrome (last 2 versions)
- ✅ Firefox (last 2 versions)
- ✅ Safari (last 2 versions)
- ✅ Edge (last 2 versions)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Development

### Local Development

1. **Make changes** to HTML, CSS, or JSON files
2. **Refresh browser** to see changes
3. **Test responsiveness** using browser dev tools
4. **Validate HTML** using W3C validator
5. **Test performance** using Lighthouse

### Code Quality

- **HTML**: Semantic markup, proper accessibility attributes
- **CSS**: Mobile-first approach, CSS custom properties
- **JavaScript**: ES6+ features, modular code, error handling
- **Performance**: Optimized images, minified assets, lazy loading

## 📊 Performance Optimization

- **Images**: Use WebP format when possible, proper sizing
- **CSS**: Critical CSS inlined, non-critical CSS loaded asynchronously
- **JavaScript**: Minified and compressed
- **Fonts**: Preloaded critical fonts
- **Caching**: Proper cache headers for static assets

## 🔒 Security

- **HTTPS**: Always use HTTPS in production
- **Content Security Policy**: Implement CSP headers
- **Form Security**: Client-side validation with server-side backup
- **Dependencies**: Regularly update CDN resources

## 🐛 Troubleshooting

### Common Issues

1. **JSON not loading**:
   - Check file paths are correct
   - Ensure JSON syntax is valid
   - Check browser console for errors

2. **Styles not applying**:
   - Clear browser cache
   - Check CSS file path
   - Verify TailwindCSS CDN is loading

3. **Mobile layout issues**:
   - Test with browser dev tools
   - Check viewport meta tag
   - Verify responsive CSS rules

### Getting Help

If you encounter issues:
1. Check the browser console for errors
2. Validate your HTML and CSS
3. Test in different browsers
4. Check GitHub issues for similar problems

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Contact

- **Email**: rabiulpmp@gmail.com
- **LinkedIn**: [linkedin.com/in/rabiulpmp](https://linkedin.com/in/rabiulpmp)
- **GitHub**: [github.com/rabiulpmp](https://github.com/rabiulpmp)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from Font Awesome and Heroicons
- Images from Unsplash
- Fonts from Google Fonts
- Built with TailwindCSS

---

**Built with ❤️ by Md. Rabiul Islam**
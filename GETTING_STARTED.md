# Getting Started - Portfolio Website

Your portfolio website is ready! Follow these steps to get it running.

## Quick Start (Windows)

### Option 1: Automatic Setup (Recommended)
1. Double-click `setup.bat` in the Portfolio folder
2. Follow the onscreen instructions
3. The website will open automatically at `http://localhost:3000`

### Option 2: Manual Setup

#### Step 1: Install Node.js
1. Visit: **https://nodejs.org/**
2. Download the **LTS (Long Term Support)** version
3. Run the installer and follow the prompts
4. Restart your computer or terminal

#### Step 2: Open Terminal
1. Open **Command Prompt** or **PowerShell**
2. Navigate to your Portfolio folder:
   ```cmd
   cd "c:\Users\naren\OneDrive\Desktop\Portfolio"
   ```

#### Step 3: Install Dependencies
   ```cmd
   npm install
   ```
   This will download and install all required packages.

#### Step 4: Start the Server
   ```cmd
   npm start
   ```
   
   You should see:
   ```
   🚀 Portfolio website is running on http://localhost:3000
   ```

#### Step 5: View Your Website
1. Open your browser and go to: **http://localhost:3000**
2. Explore and enjoy!

---

## Quick Start (Mac/Linux)

1. Open Terminal
2. Navigate to the Portfolio folder:
   ```bash
   cd "~/Desktop/Portfolio"
   ```
3. Make setup script executable:
   ```bash
   chmod +x setup.sh
   ```
4. Run setup:
   ```bash
   ./setup.sh
   ```

Or manually:
```bash
npm install
npm start
```

---

## Verifying Installation

After running `npm install`, you should see:
- A folder named `node_modules/` created
- A file named `package-lock.json` created

If you don't see these, the installation may have failed. Try running `npm install` again.

---

## Features to Test

### 1. **Hero Section**
- Scroll to the top and see the gradient background
- Click "View my portfolio" to scroll to portfolio section
- Click "Get in touch" to scroll to contact section

### 2. **Navigation**
- Click "Home", "Portfolio", "About", "Contact" in the header
- Each should smoothly scroll to the corresponding section

### 3. **Portfolio Cards**
- Hover over project cards to see them lift and change color
- Click "Live" and "Code" buttons (currently placeholders)

### 4. **Contact Form**
- Fill in the form with your details
- Click "Send Message"
- You should see a success message
- Check the terminal/console for the submitted data

### 5. **Responsive Design**
- Resize your browser window to mobile size
- The layout should adapt automatically

---

## Submitting Contact Form Messages

When someone submits the contact form:

1. **In the browser**: They see a success message
2. **In the terminal**: The message is logged to the console
3. **In the file system**: The message is saved to `messages.json`

To view all submitted messages, visit:
```
http://localhost:3000/api/messages
```

To view them in your terminal:
1. While the server is running, open a new terminal window
2. Navigate to the Portfolio folder
3. Run:
   ```cmd
   type messages.json
   ```
   (Windows)
   
   or
   
   ```bash
   cat messages.json
   ```
   (Mac/Linux)

---

## Customization

### Update Your Information

**Edit `index.html` to change:**
- Your name
- Your email (in multiple places)
- Your phone number
- Your location
- Project descriptions
- Skills and technologies

**Look for these sections:**
- `<h1>Building digital experiences that matter</h1>` - Hero title
- `<span class="first-name">Narendra</span>` - Your first name
- Portfolio project cards with `<h3>` tags
- Skills in the `.skills-grid` section
- Contact info in the `.contact-info` section

### Change Colors

**Edit `style.css` at the top:**
```css
:root {
  --cyan: #06b6d4;        /* Primary color (blue) */
  --orange: #f59e0b;      /* Accent color */
  --dark: #0f172a;        /* Dark background */
  --muted: #64748b;       /* Text color */
  --bg-light: #fafafa;    /* Light background */
  --border: #f1f5f9;      /* Border color */
}
```

### Update Project Links

In each project card, update the `href` attributes:
```html
<a href="YOUR_LIVE_PROJECT_URL" class="btn btn-primary">Live</a>
<a href="YOUR_GITHUB_LINK" class="btn btn-outline">Code</a>
```

---

## Troubleshooting

### "npm: command not found"
- **Solution**: Node.js is not installed or not in PATH
- Install Node.js from https://nodejs.org/
- Restart your terminal after installation

### Port 3000 already in use
- **Solution**: Another program is using port 3000
- Either:
  - Close the other program
  - Or change the port in `.env`:
    ```
    PORT=3001
    ```
  - Then restart the server

### "Cannot find module" error
- **Solution**: Dependencies not installed properly
- Run: `npm install`
- Delete `node_modules` folder and try again:
  ```cmd
  rmdir /s /q node_modules
  npm install
  ```

### Server stops when I close terminal
- **Solution**: That's normal!
- The server only runs while the terminal is open
- To keep it running in the background:
  - Windows: Use a tool like PM2: `npm install -g pm2` then `pm2 start server.js`
  - Mac/Linux: Use `nohup npm start &`

### Contact form not sending
- **Solution**: Backend might not be running
- Make sure you're running `npm start` and see the "🚀" message
- Check browser console (F12 → Console tab) for errors

---

## Next Steps

### To Deploy Your Site Online:

1. **Heroku** (Easiest for beginners)
   - Sign up at https://heroku.com
   - Install Heroku CLI
   - Run: `heroku create` then `git push heroku main`

2. **Vercel or Netlify** (For frontend only)
   - Upload HTML, CSS, JS files directly
   - Use Vercel Serverless Functions or AWS Lambda for backend

3. **Traditional Hosting**
   - Get a web host that supports Node.js
   - Upload your files and run `npm install && npm start`

### To Add More Features:

- **Email notifications**: Add nodemailer to send emails on form submit
- **Database**: Switch from JSON file to MongoDB or PostgreSQL
- **Admin dashboard**: Create a page to manage submitted messages
- **Blog section**: Add a blog with posts
- **SEO**: Add meta tags for better search engine visibility
- **Dark mode**: Add a toggle in the UI

---

## Help & Support

If you encounter issues:

1. Check the terminal output for error messages
2. See the Troubleshooting section above
3. Verify all files exist in the Portfolio folder:
   - index.html
   - style.css
   - script.js
   - server.js
   - package.json
   - .env

4. Try restarting everything:
   - Stop the server (Ctrl+C)
   - Delete `node_modules` folder
   - Run `npm install` again
   - Run `npm start`

---

## File Structure

```
Portfolio/
├── index.html              ← Main webpage
├── style.css               ← Styling and animations
├── script.js               ← Frontend interactivity
├── server.js               ← Backend server
├── package.json            ← Dependencies list
├── package-lock.json       ← Dependency versions (auto-generated)
├── .env                    ← Configuration file
├── .gitignore              ← Git ignore rules
├── messages.json           ← Saved contact form messages
├── setup.bat               ← Windows setup script
├── setup.sh                ← Mac/Linux setup script
├── README.md               ← Project documentation
└── GETTING_STARTED.md      ← This file
```

---

## That's It! 🎉

Your portfolio website is ready to go. Enjoy showcasing your work!

**Remember to:**
- Keep the server running while you test
- Check the browser console (F12) for any errors
- Update the content with your real information
- Test the contact form regularly

Happy coding! 🚀

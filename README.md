# Narendra Jagtap - Portfolio Website

A fully functional portfolio website with a modern design and backend API for contact form submissions.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Hero Section**: Eye-catching hero section with gradient background
- **Portfolio Showcase**: Display of projects with tech stack and links
- **About Section**: Professional bio and skills showcase
- **Contact Form**: Fully functional contact form with validation and API integration
- **Smooth Animations**: CSS animations and transitions for a polished feel
- **Backend API**: Node.js/Express server to handle form submissions

## Project Structure

```
Portfolio/
├── index.html          # Main HTML file
├── style.css           # Styling and animations
├── script.js           # Frontend JavaScript with form handling
├── server.js           # Node.js/Express backend server
├── package.json        # NPM dependencies
├── .env                # Environment variables
├── .gitignore          # Git ignore file
├── messages.json       # Stored contact form messages
└── README.md           # This file
```

## Technologies Used

### Frontend
- HTML5
- CSS3 (with animations and gradients)
- JavaScript (ES6+)
- Responsive Design

### Backend
- Node.js
- Express.js
- CORS
- Body Parser

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup

1. **Clone or download the project**
   ```bash
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   npm start
   ```

   The website will be available at `http://localhost:3000`

## Usage

### Accessing the Website
- Open your browser and navigate to `http://localhost:3000`
- Explore the different sections: Home, Portfolio, About, and Contact

### Contact Form
- Fill in your name, email, and message in the contact section
- Click "Send Message" to submit
- The message will be stored and logged to the console
- Messages are also saved to `messages.json` file

### Viewing Submitted Messages
- Access the API at `http://localhost:3000/api/messages` to view all submissions

## API Endpoints

### POST `/api/contact`
Submit a contact form message

**Request body:**
```json
{
  "name": "Your Name",
  "email": "your@email.com",
  "message": "Your message here"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Your message has been received successfully!",
  "data": {
    "id": 1234567890,
    "name": "Your Name",
    "email": "your@email.com",
    "message": "Your message here",
    "timestamp": "2026-04-01T12:00:00.000Z"
  }
}
```

### GET `/api/messages`
Retrieve all submitted messages (for demo/admin purposes)

**Response:**
```json
{
  "total": 5,
  "messages": [...]
}
```

## Customization

### Update Portfolio Projects
Edit the project cards in `index.html` in the `#portfolio` section:
```html
<div class="card">
  <h3>Project Name</h3>
  <p>Project description...</p>
  <div class="tech-stack">
    <span class="tag">Technology</span>
  </div>
  <div class="card-actions">
    <a href="your-live-link" class="btn btn-primary">Live</a>
    <a href="your-code-link" class="btn btn-outline">Code</a>
  </div>
</div>
```

### Modify Colors
Edit the CSS variables in `style.css`:
```css
:root {
  --cyan: #06b6d4;
  --orange: #f59e0b;
  --dark: #0f172a;
  --muted: #64748b;
  --bg-light: #fafafa;
  --border: #f1f5f9;
}
```

### Update Contact Information
Edit the contact information in the `#contact` section of `index.html`:
```html
<a href="mailto:your-email@example.com">your-email@example.com</a>
```

## Development

### Running in Development Mode
```bash
npm run dev
```

### Viewing Messages
Check the console output when messages are submitted, or open `http://localhost:3000/api/messages` in your browser.

## Deployment

To deploy this website:

1. **Heroku**
   - Push to Heroku using Git
   - Set environment variables in Heroku dashboard

2. **Vercel/Netlify** (Frontend only)
   - Deploy the HTML, CSS, and JS files
   - Configure serverless functions for the API

3. **Traditional Hosting**
   - Upload files to your hosting provider
   - Ensure Node.js support (or use serverless backend alternative)

## Future Enhancements

- [ ] Add database (MongoDB, PostgreSQL) for message storage
- [ ] Implement email notifications when form is submitted
- [ ] Add admin dashboard to view and manage messages
- [ ] Implement authentication for admin panel
- [ ] Add blog section
- [ ] Integrate with social media APIs
- [ ] Add dark mode toggle
- [ ] Implement analytics tracking

## License

MIT License - feel free to use this template for your portfolio

## Contact

For questions or feedback, reach out via:
- Email: narendra1jagtap@gmail.com
- Phone: +91 8657557138
- Location: Mumbai, India

---

**Last Updated:** April 2026

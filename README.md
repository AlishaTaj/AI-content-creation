# AI Content Curation Platform – MERN Stack

This is a full-stack AI-powered content curation platform built using the MERN stack (MongoDB, Express, React, Node.js). The platform allows users to generate, analyze, and manage content using GPT integration, sentiment and SEO scoring, and real-time trend analysis.

The goal is to help users create high-quality, optimized content based on current trends with minimal effort.

---

## Key Technologies

- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **AI Integration:** OpenAI GPT (via API)
- **Analytics:** Sentiment analysis, SEO scoring, Google Trends API
- **Authentication:** JWT (JSON Web Token)

---

## Features

### User Management
- Signup and login with email and password
- Secure authentication using JWT
- Persistent login with token-based session storage

### Content Generation
- Generate AI-powered content using OpenAI API
- Select content type (blog, caption, tweet, etc.)
- Customize input prompt to tailor content style

### Sentiment & SEO Analysis
- Analyze generated content for tone and sentiment
- Get basic SEO scores and suggestions

### Saved Content Dashboard
- View all saved content in a clean dashboard
- Edit, delete, or export content
- Track usage or token limits

### Trend Insights
- Search for trending keywords using Google Trends
- Get related queries and regional data
- Use trends to generate relevant content

---

## Folder Structure

/client # React frontend
├── components/
├── pages/
├── hooks/
├── styles/
└── main.jsx

/server # Node.js + Express backend
├── controllers/
├── routes/
├── models/
├── middleware/
└── server.js

.env # Environment variables


---

## How to Run the Project

### Prerequisites

- Node.js and npm
- MongoDB (local or cloud)
- OpenAI API key
- Google Trends API or `google-trends-api` package

### Steps

1. Clone the repository

git clone https://github.com/your-username/ai-content-curation-platform.git

cd server
npm install
Create a .env file with your MongoDB URI and OpenAI key
npm start

cd ../client
npm install
npm run dev

Access the app at http://localhost:5173

Future Enhancements
Content scheduling and export

Custom tone or writing style presets

PDF or Markdown export of generated content

Real-time SEO feedback

Maintainer
Alisha Taj
Email: alishataj72@gmail.com
LinkedIn: linkedin.com/in/alisha-taj



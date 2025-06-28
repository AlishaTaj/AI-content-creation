const { OpenAI } = require('openai');
const SavedContent = require('../models/SavedContent');
const natural = require('natural');
const afinn = require('afinn-165');

// Initialize OpenAI with proper error handling
let openai;
try {
  openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  });
} catch (err) {
  console.error('OpenAI initialization error:', err);
  process.exit(1); // Exit if OpenAI can't initialize
}

// Generate LinkedIn-style content
exports.generateContent = async (req, res) => {
  try {
    const { prompt, tone } = req.body;
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: `Generate a LinkedIn post in a ${tone} tone.` },
        { role: 'user', content: prompt }
      ]
    });

    res.json({ content: response.choices[0].message.content });
  } catch (err) {
    console.error('Content generation error:', err);
    res.status(500).json({ error: 'AI generation failed.' });
  }
};

// Analyze SEO & Sentiment
exports.analyzeContent = async (req, res) => {
  try {
    const { content } = req.body;

    // Sentiment analysis using AFINN
    const words = content.toLowerCase().split(/\W+/);
    let sentimentScore = 0;
    words.forEach(word => {
      if (afinn[word]) sentimentScore += afinn[word];
    });

    // Keyword extraction using TF-IDF
    const tfidf = new natural.TfIdf();
    tfidf.addDocument(content);
    const keywords = tfidf.listTerms(0).map(term => term.term).slice(0, 5);

    res.json({
      sentiment: sentimentScore > 0 ? 'Positive' : sentimentScore < 0 ? 'Negative' : 'Neutral',
      keywords
    });
  } catch (err) {
    console.error('Analysis error:', err);
    res.status(500).json({ error: 'Error analyzing content.' });
  }
};

// Save Content
exports.saveContent = async (req, res) => {
  try {
    const { userId, content, sentiment, keywords } = req.body;
    const saved = await SavedContent.create({ userId, content, sentiment, keywords });
    res.status(201).json(saved);
  } catch (err) {
    console.error('Save error:', err);
    res.status(500).json({ error: 'Error saving content.' });
  }
};

// Get Saved Content
exports.getSavedContent = async (req, res) => {
  try {
    const saved = await SavedContent.find({ userId: req.userId });
    res.json(saved);
  } catch (err) {
    console.error('Fetch error:', err);
    res.status(500).json({ error: 'Error fetching saved content.' });
  }
};

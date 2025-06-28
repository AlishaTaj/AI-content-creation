const BASE_URL = "http://localhost:5000/api";

// 🔐 Get JWT token
const getToken = () => localStorage.getItem("token");

// 📦 Auth headers for POST/PUT/DELETE
const authHeaders = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${getToken()}`,
});

// 📦 Headers for GET
const getHeaders = () => ({
  Authorization: `Bearer ${getToken()}`,
});

//
// 🔮 Content Generation
//
export const generateContent = async ({ prompt, type, tone, keywords, platform, wordCount }) => {
  const res = await fetch(`${BASE_URL}/content/generate`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify({ prompt, type, tone, keywords, platform, wordCount }),
  });
  if (!res.ok) throw new Error("Failed to generate content");
  return res.json();
};

//
// 🖼️ Image Generation
//
export const generateImage = async (prompt) => {
  const res = await fetch(`${BASE_URL}/content/generate-image`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify({ prompt }),
  });
  if (!res.ok) throw new Error("Failed to generate image");
  return res.json();
};

//
// 😊 Sentiment Analysis
//
export const analyzeSentiment = async (text) => {
  const res = await fetch(`${BASE_URL}/analyze`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify({ text }),
  });
  if (!res.ok) throw new Error("Failed to analyze sentiment");
  return res.json();
};

//
// 📈 Fetch Google Trends
//
export const fetchTrends = async (keyword = "", geo = "US") => {
  const url = `${BASE_URL}/trends?keyword=${encodeURIComponent(keyword)}&geo=${geo}`;
  const res = await fetch(url, {
    method: "GET",
    headers: getHeaders(),
  });
  if (!res.ok) throw new Error("Failed to fetch trends");
  return res.json();
};

//
// 💡 Explain Why Trend is Trending (GPT)
//
export const explainTrend = async (trend) => {
  const res = await fetch(`${BASE_URL}/trends/explain`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify({ trend }),
  });
  if (!res.ok) throw new Error("Failed to explain trend");
  return res.json(); // Should return { summary }
};

//
// 💾 Get All Saved Content
//
export const getSavedContent = async () => {
  const res = await fetch(`${BASE_URL}/saved`, {
    method: "GET",
    headers: getHeaders(),
  });
  if (!res.ok) throw new Error("Failed to fetch saved content");
  return res.json();
};

//
// 💾 Save New Content
//
export const saveContent = async (title, body, imageUrl = "") => {
  const res = await fetch(`${BASE_URL}/saved`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify({ title, body, imageUrl }),
  });
  if (!res.ok) throw new Error("Failed to save content");
  return res.json();
};

//
// ✏️ Update Saved Content
//
export const updateSavedContent = async (id, updatedFields) => {
  const res = await fetch(`${BASE_URL}/saved/${id}`, {
    method: "PUT",
    headers: authHeaders(),
    body: JSON.stringify(updatedFields),
  });
  if (!res.ok) throw new Error("Failed to update content");
  return res.json();
};

//
// 🗑️ Delete Saved Content
//
export const deleteSavedContent = async (id) => {
  const res = await fetch(`${BASE_URL}/saved/${id}`, {
    method: "DELETE",
    headers: getHeaders(),
  });
  if (!res.ok) throw new Error("Failed to delete content");
  return res.json();
};

//
// 🔐 Auth - Login
//
export const login = async (data) => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Login failed");
  return res.json();
};

//
// 🔐 Auth - Signup
//
export const signup = async (data) => {
  const res = await fetch(`${BASE_URL}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Signup failed");
  return res.json();
};

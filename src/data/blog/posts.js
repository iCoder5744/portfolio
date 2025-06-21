//src/data/blog/posts.js
export const blogPosts = [

  // =========== Frontend Development ========== //

  {
  id: 1,
  slug: "introduction-to-frontend",
  title: "Introduction to Frontend Development",
  excerpt: "Understand the basics of frontend development and how it shapes user experiences on the web.",
  category: "frontend",
  categoryName: "Frontend Development",
  date: "2025-01-18",
  readTime: "7 min read",
  tags: ["HTML", "CSS", "JavaScript", "Frontend"],
  author: "Frontend Pro",
  featured: false,
  content: {
    introduction: "Frontend development is the process of building the visual part of a website or web application that users interact with. It involves technologies like HTML, CSS, JavaScript, and frameworks like React and Vue.",
    sections: [
      {
        title: "1. What is Frontend Development?",
        content: "Frontend development focuses on everything users see on their browser screen. It combines structure (HTML), design (CSS), and interactivity (JavaScript) to build engaging user interfaces.",
        code: `<!-- Basic HTML Structure -->
<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
  </head>
  <body>
    <h1>Welcome to My Website</h1>
  </body>
</html>`,
        language: "html"
      },
      {
        title: "2. HTML: Structure of the Web",
        content: "HTML (HyperText Markup Language) provides the structure of web pages using elements like headings, paragraphs, images, and links."
      },
      {
        title: "3. CSS: Styling the Interface",
        content: "CSS (Cascading Style Sheets) is used to style HTML elements — adding colors, layouts, spacing, and responsive design.",
        code: `/* Simple CSS Styling */
body {
  font-family: Arial, sans-serif;
  background-color: #f8f8f8;
  color: #333;
}

h1 {
  color: #007BFF;
}`,
        language: "css"
      },
      {
        title: "4. JavaScript: Adding Interactivity",
        content: "JavaScript is used to add dynamic behavior to websites like form validation, modals, animations, and API calls.",
        code: `// JavaScript Example
document.getElementById("btn").addEventListener("click", () => {
  alert("Button Clicked!");
});`,
        language: "javascript"
      }
    ],
    conclusion: "Frontend development is essential for building modern, user-friendly web applications. Mastering HTML, CSS, and JavaScript opens the door to powerful frameworks and career opportunities in UI/UX engineering."
  }
  },

  {
    id: 2,
    slug: "css-grid-vs-flexbox",
    title: "CSS Grid vs Flexbox: When to Use What",
    excerpt: "Learn the differences and best use cases for CSS Grid and Flexbox layouts",
    category: "frontend",
    categoryName: "Frontend Development",
    date: "2024-12-10",
    readTime: "6 min read",
    tags: ["CSS", "Layout", "Design"],
    author: "CSS Master",
    featured: false,
    content: {
      introduction: "CSS Grid and Flexbox are both powerful layout systems, but they serve different purposes. Understanding when to use each one will make you a more effective frontend developer.",
      sections: [
        {
          title: "Flexbox: One-Dimensional Layout",
          content: "Flexbox is designed for one-dimensional layouts - either a row or a column. It's perfect for components and small-scale layouts.",
          code: `.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.flex-item {
  flex: 1;
  padding: 1rem;
  background: #f0f0f0;
}

/* Responsive Navigation */
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}

@media (max-width: 768px) {
  .nav {
    flex-direction: column;
  }
  
  .nav-links {
    flex-direction: column;
    width: 100%;
  }
}`,
          language: "css"
        },
        {
          title: "CSS Grid: Two-Dimensional Layout",
          content: "CSS Grid is designed for two-dimensional layouts. It's perfect for page layouts and complex component arrangements.",
          code: `.grid-container {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: 
    "header header header"
    "sidebar main aside"
    "footer footer footer";
  min-height: 100vh;
  gap: 1rem;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }

/* Card Grid Layout */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

.card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}`,
          language: "css"
        },
        {
          title: "Practical Examples",
          content: "Here are real-world examples showing when to use Grid vs Flexbox.",
          code: `<!-- HTML Structure -->
<div class="page-layout">
  <header class="header">
    <nav class="nav">
      <div class="logo">Logo</div>
      <ul class="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
  
  <main class="main">
    <section class="hero">
      <div class="hero-content">
        <h1>Welcome</h1>
        <p>This is a hero section</p>
        <div class="hero-buttons">
          <button>Get Started</button>
          <button>Learn More</button>
        </div>
      </div>
    </section>
    
    <section class="features">
      <div class="feature-grid">
        <div class="feature">Feature 1</div>
        <div class="feature">Feature 2</div>
        <div class="feature">Feature 3</div>
      </div>
    </section>
  </main>
  
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; 2024 Company Name</p>
    </div>
  </footer>
</div>

<style>
/* Use Grid for page layout */
.page-layout {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

/* Use Flexbox for navigation */
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}

/* Use Flexbox for hero content */
.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 4rem 2rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

/* Use Grid for feature layout */
.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 4rem 2rem;
}

/* Use Flexbox for footer */
.footer-content {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}
</style>`,
          language: "html"
        }
      ],
      conclusion: "Use Flexbox for component-level layouts and one-dimensional arrangements. Use CSS Grid for page layouts and complex two-dimensional designs. Often, you'll use both together in the same project!"
    }
  },

  {
    id: 3,
    slug: "react-hooks-complete-guide",
    title: "React Hooks: A Complete Guide",
    excerpt: "Deep dive into useState, useEffect, and custom hooks with practical examples",
    category: "frontend",
    categoryName: "Frontend Development",
    date: "2024-12-15",
    readTime: "8 min read",
    tags: ["React", "JavaScript", "Hooks"],
    author: "Dev Expert",
    featured: true,
    content: {
      introduction: "React Hooks revolutionized the way we write React components. In this comprehensive guide, we'll explore useState, useEffect, and custom hooks with real-world examples.",
      sections: [
        {
          title: "What are React Hooks?",
          content: "React Hooks are functions that let you use state and other React features in functional components. They were introduced in React 16.8 and have become the standard way to write React components.",
          code: `// Before Hooks (Class Component)
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

// With Hooks (Functional Component)
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`,
          language: "javascript"
        },
        {
          title: "useState Hook",
          content: "useState is the most commonly used hook. It allows you to add state to functional components.",
          code: `import React, { useState } from 'react';

function UserProfile() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    age: 0
  });

  const updateUser = (field, value) => {
    setUser(prevUser => ({
      ...prevUser,
      [field]: value
    }));
  };

  return (
    <div className="user-profile">
      <input 
        type="text" 
        placeholder="Name"
        value={user.name}
        onChange={(e) => updateUser('name', e.target.value)}
      />
      <input 
        type="email" 
        placeholder="Email"
        value={user.email}
        onChange={(e) => updateUser('email', e.target.value)}
      />
      <input 
        type="number" 
        placeholder="Age"
        value={user.age}
        onChange={(e) => updateUser('age', parseInt(e.target.value))}
      />
      
      <div className="user-display">
        <h3>User Info:</h3>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Age: {user.age}</p>
      </div>
    </div>
  );
}`,
          language: "javascript"
        },
        {
          title: "useEffect Hook",
          content: "useEffect lets you perform side effects in functional components. It's like componentDidMount, componentDidUpdate, and componentWillUnmount combined.",
          code: `import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data when component mounts
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const result = await response.json();
        setData(result.slice(0, 5)); // Get first 5 posts
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this runs once on mount

  // Cleanup effect
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Timer running...');
    }, 1000);

    // Cleanup function
    return () => {
      clearInterval(timer);
    };
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Posts</h2>
      {data.map(post => (
        <div key={post.id} className="post">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}`,
          language: "javascript"
        },
        {
          title: "Custom Hooks",
          content: "Custom hooks allow you to extract and reuse stateful logic between components.",
          code: `// Custom Hook for API calls
import { useState, useEffect } from 'react';

function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch');
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (url) fetchData();
  }, [url]);

  return { data, loading, error };
}

// Custom Hook for Local Storage
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  };

  return [storedValue, setValue];
}

// Using Custom Hooks
function App() {
  const { data: users, loading, error } = useApi('https://jsonplaceholder.typicode.com/users');
  const [favorites, setFavorites] = useLocalStorage('favorites', []);

  const toggleFavorite = (userId) => {
    setFavorites(prev => 
      prev.includes(userId) 
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  if (loading) return <div>Loading users...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Users</h1>
      {users?.map(user => (
        <div key={user.id} className="user-card">
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <button 
            onClick={() => toggleFavorite(user.id)}
            className={favorites.includes(user.id) ? 'favorited' : ''}
          >
            {favorites.includes(user.id) ? '❤️ Favorited' : '🤍 Add to Favorites'}
          </button>
        </div>
      ))}
    </div>
  );
}`,
          language: "javascript"
        }
      ],
      conclusion: "React Hooks provide a more direct API to the React concepts you already know. They make components easier to understand and test, and enable better code reuse through custom hooks."
    }
  },

  // =========== Backend Development ========== //

  {
  id: 4,
  slug: "introduction-to-backend",
  title: "Introduction to Backend Development",
  excerpt: "Explore the world of backend development and how it powers websites behind the scenes.",
  category: "backend",
  categoryName: "Backend Development",
  date: "2025-01-20",
  readTime: "7 min read",
  tags: ["Node.js", "Backend", "Server", "API"],
  author: "Backend Pro",
  featured: false,
  content: {
    introduction: "Backend development refers to server-side programming that handles data processing, logic, and communication between the database and frontend of a web application.",
    sections: [
      {
        title: "1. What is Backend Development?",
        content: "Backend development manages how the website works behind the scenes. It involves managing databases, servers, APIs, and application logic."
      },
      {
        title: "2. Technologies in Backend",
        content: "Popular backend technologies include Node.js, Python (Django, Flask), Ruby (Rails), Java (Spring), and PHP (Laravel).",
        code: `// Simple Node.js Server using Express
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(PORT, () => {
  console.log(\`Server running on http://localhost:\${PORT}\`);
});`,
        language: "javascript"
      },
      {
        title: "3. Working with Databases",
        content: "Backends store and retrieve data from databases like MongoDB, PostgreSQL, MySQL, and Firebase. Data is accessed using queries or ORMs (Object Relational Mappers)."
      },
      {
        title: "4. REST APIs and Communication",
        content: "RESTful APIs allow communication between the frontend and backend. Backend servers expose endpoints for the frontend to send or receive data.",
        code: `// Example REST Endpoint
app.get('/api/users', (req, res) => {
  const users = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];
  res.json(users);
});`,
        language: "javascript"
      }
    ],
    conclusion: "Backend development is crucial for building scalable, secure, and dynamic web applications. It handles data, authentication, and business logic that drive modern web apps."
  }
  },

  {
    id: 5,
    slug: "nodejs-performance-optimization",
    title: "Node.js Performance Optimization",
    excerpt: "Techniques to make your Node.js applications faster and more efficient",
    category: "backend",
    categoryName: "Backend Development",
    date: "2024-12-12",
    readTime: "10 min read",
    tags: ["Node.js", "Performance", "Optimization"],
    author: "Backend Pro",
    featured: false,
    content: {
      introduction: "Performance optimization is crucial for Node.js applications. Learn practical techniques to make your Node.js apps faster, more efficient, and capable of handling higher loads.",
      sections: [
        {
          title: "Asynchronous Programming Best Practices",
          content: "Node.js shines with asynchronous operations. Here's how to optimize them.",
          code: `// ❌ Bad: Blocking synchronous operations
const fs = require('fs');

function badReadFiles() {
  const file1 = fs.readFileSync('file1.txt', 'utf8');
  const file2 = fs.readFileSync('file2.txt', 'utf8');
  const file3 = fs.readFileSync('file3.txt', 'utf8');
  return [file1, file2, file3];
}

// ✅ Good: Non-blocking asynchronous operations
const fsPromises = require('fs').promises;

async function goodReadFiles() {
  try {
    const [file1, file2, file3] = await Promise.all([
      fsPromises.readFile('file1.txt', 'utf8'),
      fsPromises.readFile('file2.txt', 'utf8'),
      fsPromises.readFile('file3.txt', 'utf8')
    ]);
    return [file1, file2, file3];
  } catch (error) {
    console.error('Error reading files:', error);
    throw error;
  }
}

// ✅ Better: With error handling for individual files
async function robustReadFiles() {
  const filePromises = ['file1.txt', 'file2.txt', 'file3.txt'].map(async (filename) => {
    try {
      return await fsPromises.readFile(filename, 'utf8');
    } catch (error) {
      console.error(\`Error reading \${filename}:\`, error.message);
      return null; // or default content
    }
  });

  return await Promise.all(filePromises);
}`,
          language: "javascript"
        },
        {
          title: "Database Query Optimization",
          content: "Optimize database interactions to reduce latency and improve throughput.",
          code: `// Database connection with connection pooling
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'username',
  password: 'password',
  database: 'mydb',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  acquireTimeout: 60000,
  timeout: 60000
});

// ❌ Bad: N+1 Query Problem
async function getUsersWithPostsBad() {
  const users = await pool.execute('SELECT * FROM users');
  
  for (let user of users[0]) {
    const posts = await pool.execute('SELECT * FROM posts WHERE user_id = ?', [user.id]);
    user.posts = posts[0];
  }
  
  return users[0];
}

// ✅ Good: Single optimized query with JOIN
async function getUsersWithPostsGood() {
  const query = \`
    SELECT 
      u.id as user_id,
      u.name,
      u.email,
      p.id as post_id,
      p.title,
      p.content,
      p.created_at
    FROM users u
    LEFT JOIN posts p ON u.id = p.user_id
    ORDER BY u.id, p.created_at DESC
  \`;
  
  const [rows] = await pool.execute(query);
  
  // Group posts by user
  const usersMap = new Map();
  
  rows.forEach(row => {
    if (!usersMap.has(row.user_id)) {
      usersMap.set(row.user_id, {
        id: row.user_id,
        name: row.name,
        email: row.email,
        posts: []
      });
    }
    
    if (row.post_id) {
      usersMap.get(row.user_id).posts.push({
        id: row.post_id,
        title: row.title,
        content: row.content,
        created_at: row.created_at
      });
    }
  });
  
  return Array.from(usersMap.values());
}

// ✅ Best: With caching
const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 300 }); // 5 minutes cache

async function getUsersWithPostsCached() {
  const cacheKey = 'users_with_posts';
  let users = cache.get(cacheKey);
  
  if (!users) {
    users = await getUsersWithPostsGood();
    cache.set(cacheKey, users);
  }
  
  return users;
}`,
          language: "javascript"
        },
        {
          title: "Memory Management and Caching",
          content: "Implement effective caching strategies and manage memory efficiently.",
          code: `const Redis = require('redis');
const client = Redis.createClient();

// Multi-level caching strategy
class CacheManager {
  constructor() {
    this.memoryCache = new Map();
    this.maxMemoryItems = 1000;
  }

  async get(key) {
    // Level 1: Memory cache (fastest)
    if (this.memoryCache.has(key)) {
      return this.memoryCache.get(key);
    }

    // Level 2: Redis cache
    try {
      const redisValue = await client.get(key);
      if (redisValue) {
        const parsed = JSON.parse(redisValue);
        // Store in memory cache for faster access
        this.setMemoryCache(key, parsed);
        return parsed;
      }
    } catch (error) {
      console.error('Redis error:', error);
    }

    return null;
  }

  async set(key, value, ttl = 300) {
    // Set in memory cache
    this.setMemoryCache(key, value);

    // Set in Redis cache
    try {
      await client.setEx(key, ttl, JSON.stringify(value));
    } catch (error) {
      console.error('Redis set error:', error);
    }
  }

  setMemoryCache(key, value) {
    // Implement LRU eviction
    if (this.memoryCache.size >= this.maxMemoryItems) {
      const firstKey = this.memoryCache.keys().next().value;
      this.memoryCache.delete(firstKey);
    }
    this.memoryCache.set(key, value);
  }

  clear() {
    this.memoryCache.clear();
    client.flushDb();
  }
}

// Usage in Express middleware
const cache = new CacheManager();

const cacheMiddleware = (duration = 300) => {
  return async (req, res, next) => {
    const key = \`cache:\${req.method}:\${req.url}\`;
    
    try {
      const cached = await cache.get(key);
      if (cached) {
        return res.json(cached);
      }
    } catch (error) {
      console.error('Cache error:', error);
    }

    // Override res.json to cache the response
    const originalJson = res.json;
    res.json = function(data) {
      cache.set(key, data, duration);
      originalJson.call(this, data);
    };

    next();
  };
};

// Use in routes
app.get('/api/users', cacheMiddleware(300), async (req, res) => {
  const users = await getUsersWithPostsCached();
  res.json(users);
});`,
          language: "javascript"
        },
        {
          title: "Load Balancing and Clustering",
          content: "Scale your Node.js application using clustering and load balancing.",
          code: `// cluster.js - Master/Worker pattern
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const express = require('express');

if (cluster.isMaster) {
  console.log(\`Master \${process.pid} is running\`);

  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Handle worker exit
  cluster.on('exit', (worker, code, signal) => {
    console.log(\`Worker \${worker.process.pid} died\`);
    console.log('Starting a new worker...');
    cluster.fork();
  });

  // Graceful shutdown
  process.on('SIGTERM', () => {
    console.log('Master received SIGTERM, shutting down gracefully');
    for (const id in cluster.workers) {
      cluster.workers[id].kill();
    }
  });

} else {
  // Worker process
  const app = express();
  const PORT = process.env.PORT || 3000;

  // Middleware
  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true, limit: '10mb' }));

  // Health check endpoint
  app.get('/health', (req, res) => {
    res.json({ 
      status: 'OK', 
      pid: process.pid,
      uptime: process.uptime(),
      memory: process.memoryUsage()
    });
  });

  // Your application routes
  app.get('/api/data', async (req, res) => {
    try {
      // Simulate some work
      const data = await processData();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  const server = app.listen(PORT, () => {
    console.log(\`Worker \${process.pid} started on port \${PORT}\`);
  });

  // Graceful shutdown for worker
  process.on('SIGTERM', () => {
    console.log(\`Worker \${process.pid} received SIGTERM\`);
    server.close(() => {
      console.log(\`Worker \${process.pid} closed server\`);
      process.exit(0);
    });
  });
}

// PM2 Configuration (ecosystem.config.js)
module.exports = {
  apps: [{
    name: 'my-app',
    script: './app.js',
    instances: 'max', // Use all CPU cores
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    max_memory_restart: '1G',
    node_args: '--max-old-space-size=4096'
  }]
};`,
          language: "javascript"
        }
      ],
      conclusion: "Node.js performance optimization involves asynchronous programming, efficient database queries, smart caching, and proper scaling strategies. Monitor your application's performance regularly and optimize based on real metrics."
    }
  },

  {
  id: 6,
  slug: "express-api-best-practices",
  title: "Building REST APIs with Express: Best Practices",
  excerpt: "Secure, modular, and scalable API design using Express.js.",
  category: "backend",
  categoryName: "Backend Development",
  date: "2025-01-06",
  readTime: "9 min read",
  tags: ["Express", "REST API", "Node.js"],
  author: "Backend Pro",
  featured: false,
  content: {
    introduction: "Express.js is a popular web framework for Node.js, known for its simplicity and flexibility. In this guide, we’ll explore best practices to build scalable, secure, and maintainable REST APIs using Express.",
    sections: [
      {
        title: "1. Project Structure",
        content: "A well-organized folder structure helps keep your codebase scalable. Separate routes, controllers, models, and middlewares for clarity.",
        code: `project/
│
├── controllers/
│   └── userController.js
├── models/
│   └── userModel.js
├── routes/
│   └── userRoutes.js
├── middleware/
│   └── authMiddleware.js
├── utils/
│   └── logger.js
├── app.js
└── server.js`,
        language: "plaintext"
      },
      {
        title: "2. Using Middlewares Effectively",
        content: "Express middlewares allow modular handling of logic such as authentication, error handling, and logging.",
        code: `// middleware/logger.js
const logger = (req, res, next) => {
  console.log(\`\${req.method} \${req.path}\`);
  next();
};

module.exports = logger;

// app.js
const express = require('express');
const logger = require('./middleware/logger');
const app = express();

app.use(express.json());
app.use(logger);`,
        language: "javascript"
      },
      {
        title: "3. Routing and Controllers",
        content: "Separate business logic from routing by using controllers. Keep routes clean and manageable.",
        code: `// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { getUsers } = require('../controllers/userController');

router.get('/', getUsers);
module.exports = router;

// controllers/userController.js
const getUsers = (req, res) => {
  res.json([{ id: 1, name: 'John Doe' }]);
};

module.exports = { getUsers };`,
        language: "javascript"
      },
      {
        title: "4. Error Handling",
        content: "Centralized error handling improves consistency across your API.",
        code: `// middleware/errorHandler.js
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message });
};

module.exports = errorHandler;

// app.js
const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);`,
        language: "javascript"
      },
      {
        title: "5. Environment Configuration",
        content: "Use environment variables for configuration to avoid hardcoding sensitive data.",
        code: `// .env
PORT=3000
DB_URI=mongodb://localhost:27017/myapp

// config/config.js
require('dotenv').config();

module.exports = {
  port: process.env.PORT,
  dbUri: process.env.DB_URI
};`,
        language: "javascript"
      }
    ],
    conclusion: "Express.js makes building REST APIs simple and efficient. By following best practices such as modular structure, proper routing, error handling, and configuration management, you can create robust and scalable APIs."
  }
  },

  // =========== DevOps & Deployment ========== //

  {
  id: 7,
  slug: "intro-to-devops",
  title: "Introduction to DevOps Principles",
  excerpt: "Discover the core principles of DevOps and how it helps bridge the gap between development and operations.",
  category: "devops",
  categoryName: "DevOps & Deployment",
  date: "2025-02-03",
  readTime: "8 min read",
  tags: ["DevOps", "CI/CD", "Agile"],
  author: "Ops Engineer",
  featured: false,
  content: {
    introduction: "DevOps is a set of practices that brings together development and IT operations to shorten the development lifecycle and provide continuous delivery. This article explains the foundational principles of DevOps, its benefits, and how teams can adopt it effectively.",
    sections: [
      {
        title: "1. What is DevOps?",
        content: "DevOps is a culture and set of practices that promote collaboration between software developers and operations teams. It aims to automate and integrate the processes of software development and IT operations.",
        code: `# DevOps mindset: Build, Test, Deploy, Monitor (Cycle)
devops_cycle = ["Plan", "Develop", "Build", "Test", "Release", "Deploy", "Operate", "Monitor"]`,
        language: "python"
      },
      {
        title: "2. Core Principles of DevOps",
        content: `- **Automation**: Automate testing, building, and deployment processes.\n- **Continuous Integration (CI)**: Automatically integrate code changes into the main branch.\n- **Continuous Delivery/Deployment (CD)**: Deliver features and fixes to production frequently and reliably.\n- **Collaboration**: Break down silos between teams.\n- **Monitoring and Feedback**: Act on real-time monitoring to improve stability and user experience.`
      },
      {
        title: "3. DevOps Toolchain",
        content: "Popular tools used in DevOps workflows:\n\n- **Version Control**: Git, GitHub, GitLab\n- **CI/CD**: Jenkins, GitHub Actions, GitLab CI\n- **Infrastructure as Code**: Terraform, Ansible\n- **Monitoring**: Prometheus, Grafana\n- **Containerization**: Docker, Kubernetes"
      },
      {
        title: "4. Benefits of Adopting DevOps",
        content: `- Faster software delivery cycles\n- Improved deployment success rates\n- More stable operating environments\n- Early detection and correction of defects\n- Enhanced team collaboration and accountability`
      }
    ],
    conclusion: "DevOps is not just about tools, but about transforming culture and processes to enable faster, more reliable software delivery. By embracing DevOps principles, organizations can innovate faster, reduce risk, and better serve their users."
  }
  },

  {
  id: 8,
  slug: "deploy-react-on-netlify",
  title: "Deploying a React App on Netlify",
  excerpt: "Learn how to deploy your React project on Netlify in just a few easy steps.",
  category: "devops",
  categoryName: "DevOps & Deployment",
  date: "2025-01-15",
  readTime: "6 min read",
  tags: ["React", "Netlify", "Deployment"],
  author: "Frontend Pro",
  featured: false,
  content: {
    introduction: "Once you've built a React application, the next step is to share it with the world. Netlify makes it incredibly easy to deploy modern web apps with continuous deployment support.",
    sections: [
      {
        title: "1. Build Your React App",
        content: "Make sure your React app is production-ready by running the build command.",
        code: `npm run build`,
        language: "bash"
      },
      {
        title: "2. Push to GitHub",
        content: "Ensure your project is pushed to a GitHub repository. Netlify will pull directly from there."
      },
      {
        title: "3. Connect Netlify to GitHub",
        content: "Go to [https://app.netlify.com](https://app.netlify.com) and click 'New site from Git'. Select your GitHub repo and deploy settings. Netlify will auto-detect React and configure the build.",
        code: `# Build command
npm run build

# Publish directory
build/`,
        language: "bash"
      },
      {
        title: "4. Set Up Environment Variables (Optional)",
        content: "If your React app uses environment variables (e.g., API keys), define them in Netlify’s site settings under 'Environment variables'."
      }
    ],
    conclusion: "Netlify provides a seamless CI/CD pipeline for frontend developers. With Git integration and automatic builds, your app updates every time you push code to GitHub."
  }
  },

  {
  id: 9,
  slug: "docker-for-beginners",
  title: "Docker for Beginners: Containerize Your App",
  excerpt: "Learn the basics of Docker and how to containerize your Node.js application.",
  category: "devops",
  categoryName: "DevOps & Deployment",
  date: "2025-01-13",
  readTime: "8 min read",
  tags: ["Docker", "Containers", "DevOps"],
  author: "DevOps Guru",
  featured: false,
  content: {
    introduction: "Docker simplifies application deployment by packaging code and dependencies into containers. In this guide, we'll explain how Docker works and how you can use it to containerize a simple Node.js app.",
    sections: [
      {
        title: "1. What is Docker?",
        content: "Docker is a platform for developing, shipping, and running applications in isolated environments called containers. These containers ensure consistency across different environments (dev, staging, production).",
        code: "",
        language: "plaintext"
      },
      {
        title: "2. Install Docker",
        content: "First, install Docker Desktop from [https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop). Verify the installation using:",
        code: `docker --version`,
        language: "bash"
      },
      {
        title: "3. Create a Simple Node.js App",
        content: "Here's a basic Express.js application we'll containerize.",
        code: `// app.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Docker!');
});

app.listen(port, () => {
  console.log(\`App running on port \${port}\`);
});`,
        language: "javascript"
      },
      {
        title: "4. Create Dockerfile",
        content: "A Dockerfile defines how the image for your app is built.",
        code: `# Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]`,
        language: "docker"
      },
      {
        title: "5. Build and Run Docker Image",
        content: "Now build and run your Docker container:",
        code: `# Build the Docker image
docker build -t my-node-app .

# Run the container
docker run -p 3000:3000 my-node-app`,
        language: "bash"
      }
    ],
    conclusion: "Docker makes it easy to build, ship, and run applications across environments. With just a few commands, you can containerize your app and ensure it behaves the same everywhere. As you grow, you can add multi-stage builds, volumes, and Docker Compose to handle complex setups."
  }
  },

  // =========== Data Structures & Algorithms ========== //

  {
  id: 10,
  slug: "sorting-algorithms-explained",
  title: "Sorting Algorithms Explained Visually",
  excerpt: "Understand Bubble Sort, Selection Sort, and Quick Sort with diagrams and animations.",
  category: "algorithms",
  categoryName: "Data Structures & Algorithms",
  date: "2025-01-15",
  readTime: "10 min read",
  tags: ["Algorithms", "Sorting", "Computer Science"],
  author: "Algo Wizard",
  featured: false,
  content: {
    introduction: "Sorting algorithms are essential in computer science. They are used in search, optimization, and organizing data. In this article, we'll walk through popular sorting algorithms using diagrams and explain how they work.",
    sections: [
      {
        title: "1. Bubble Sort",
        content: "Bubble Sort compares adjacent items and swaps them if they are in the wrong order. This process repeats until the array is sorted.",
        code: `function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// Example
bubbleSort([5, 2, 4, 1, 3]);`,
        language: "javascript"
      },
      {
        title: "2. Selection Sort",
        content: "Selection Sort repeatedly finds the minimum element and moves it to the front of the unsorted part of the array.",
        code: `function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}

// Example
selectionSort([5, 2, 4, 1, 3]);`,
        language: "javascript"
      },
      {
        title: "3. Quick Sort",
        content: "Quick Sort is a divide-and-conquer algorithm. It picks a pivot and partitions the array such that smaller elements come before the pivot and larger ones after. It then recursively sorts the partitions.",
        code: `function quickSort(arr) {
  if (arr.length < 2) return arr;

  const pivot = arr[0];
  const left = arr.slice(1).filter(el => el < pivot);
  const right = arr.slice(1).filter(el => el >= pivot);

  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example
quickSort([5, 2, 4, 1, 3]);`,
        language: "javascript"
      }
    ],
    conclusion: "Sorting algorithms are the backbone of many systems. Bubble and Selection Sort are easier to understand but less efficient. Quick Sort is much faster for large datasets. Learning these will sharpen your problem-solving skills and prepare you for coding interviews."
  }
  },

  {
  id: 11,
  slug: "mastering-recursion-javascript",
  title: "Mastering Recursion in JavaScript",
  excerpt: "Learn the power of recursion with examples like factorial, Fibonacci, and nested structures.",
  category: "algorithms",
  categoryName: "Data Structures & Algorithms",
  date: "2025-01-18",
  readTime: "9 min read",
  tags: ["Recursion", "JavaScript", "Algorithms"],
  author: "Algo Wizard",
  featured: false,
  content: {
    introduction: "Recursion is a fundamental concept in programming where a function calls itself to solve a problem. It's a powerful tool for breaking down complex problems into smaller, manageable parts.",
    sections: [
      {
        title: "1. What is Recursion?",
        content: "A recursive function solves a problem by calling itself with a simpler input. Every recursive function needs a base case to stop the recursion.",
        code: `// General Recursive Structure
function recurse(parameters) {
  if (base condition) {
    return result;
  } else {
    // Call itself with a smaller input
    return recurse(smaller problem);
  }
}`,
        language: "javascript"
      },
      {
        title: "2. Factorial Example",
        content: "Factorial is a classic example of recursion. n! = n × (n-1)!",
        code: `function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

// Example
factorial(5); // 120`,
        language: "javascript"
      },
      {
        title: "3. Fibonacci Series",
        content: "Fibonacci series: 0, 1, 1, 2, 3, 5, 8... Each number is the sum of the two before it.",
        code: `function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Example
fibonacci(6); // 8`,
        language: "javascript"
      },
      {
        title: "4. Recursion with Nested Structures",
        content: "Recursion is very useful when working with nested arrays or objects.",
        code: `// Sum of all numbers in a nested array
function sumNestedArray(arr) {
  return arr.reduce((sum, item) => {
    if (Array.isArray(item)) {
      return sum + sumNestedArray(item);
    }
    return sum + item;
  }, 0);
}

// Example
sumNestedArray([1, [2, [3, 4], 5]]); // 15`,
        language: "javascript"
      }
    ],
    conclusion: "Recursion allows you to solve problems elegantly by thinking in terms of sub-problems. While it's powerful, always be careful with base cases and call stack depth. Once mastered, recursion opens doors to solving complex algorithmic challenges with clean logic."
  }
  },

  {
  id: 12,
  slug: "understanding-big-o-notation",
  title: "Understanding Big O Notation: A Practical Guide",
  excerpt: "Demystify Big O with real examples and learn how to analyze code efficiency.",
  category: "algorithms",
  categoryName: "Data Structures & Algorithms",
  date: "2025-01-20",
  readTime: "7 min read",
  tags: ["Big O", "Complexity", "Algorithms"],
  author: "Algo Wizard",
  featured: false,
  content: {
    introduction: "Big O notation helps us understand how code performs as input size grows. It describes the upper bound of an algorithm’s time or space complexity. This guide makes Big O approachable with relatable examples.",
    sections: [
      {
        title: "1. What is Big O Notation?",
        content: "Big O describes how performance scales with input size. It ignores constants and focuses on the dominant term. It's a worst-case estimate.",
        code: `// O(n): Linear time
function printItems(arr) {
  for (let item of arr) {
    console.log(item);
  }
}`,
        language: "javascript"
      },
      {
        title: "2. Common Time Complexities",
        content: "Here's a breakdown of common complexities and what they mean:",
        code: `O(1)   → Constant: access by index
O(log n) → Logarithmic: binary search
O(n)   → Linear: one loop
O(n^2) → Quadratic: nested loops
O(2^n) → Exponential: recursive combinations`,
        language: "plaintext"
      },
      {
        title: "3. Analyzing Code",
        content: "Understand how loops and nested operations affect complexity.",
        code: `// O(n^2) Example
function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}

// O(log n) Example - Binary Search
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}`,
        language: "javascript"
      },
      {
        title: "4. Space Complexity",
        content: "Big O also applies to memory usage. Recursive calls and data structures impact space usage.",
        code: `// O(n) space for call stack
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}`,
        language: "javascript"
      }
    ],
    conclusion: "Understanding Big O is crucial for writing efficient code. It helps you identify bottlenecks and scale your solutions. With practice, analyzing time and space complexity becomes second nature and sharpens your problem-solving skills."
  }
  },

  // =========== Mobile Development ========== //

  {
  id: 13,
  slug: "getting-started-react-native",
  title: "Getting Started with React Native",
  excerpt: "Build your first cross-platform mobile app using React Native.",
  category: "mobile",
  categoryName: "Mobile Development",
  date: "2025-01-22",
  readTime: "9 min read",
  tags: ["React Native", "Mobile", "Cross-platform"],
  author: "Mobile Dev",
  featured: false,
  content: {
    introduction: "React Native lets you build mobile apps using React and JavaScript. It's cross-platform, meaning you can write code once and deploy it on both Android and iOS. In this guide, you'll build your first React Native app.",
    sections: [
      {
        title: "1. Install React Native CLI",
        content: "You can use either the React Native CLI or Expo. Here, we'll use Expo for easier setup. Install it globally:",
        code: `npm install -g expo-cli`,
        language: "bash"
      },
      {
        title: "2. Create a New Project",
        content: "Initialize your app using the Expo CLI.",
        code: `expo init MyFirstApp
cd MyFirstApp
expo start`,
        language: "bash"
      },
      {
        title: "3. Basic App Structure",
        content: "Let’s update `App.js` with a simple screen layout using React Native components.",
        code: `import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hello, React Native!</Text>
      <Button title="Click Me" onPress={() => alert('Button pressed!')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  }
});`,
        language: "javascript"
      },
      {
        title: "4. Platform Specific Code",
        content: "React Native supports platform-specific rendering using the `Platform` module.",
        code: `import { Platform, Text } from 'react-native';

<Text>
  {Platform.OS === 'ios' ? 'Running on iOS' : 'Running on Android'}
</Text>`,
        language: "javascript"
      }
    ],
    conclusion: "React Native is a powerful way to build mobile apps using familiar tools like JavaScript and React. Once you're comfortable with the basics, explore navigation, native modules, and performance tuning for production-ready apps."
  }
  },

  {
  id: 14,
  slug: "flutter-vs-react-native",
  title: "Flutter vs React Native: Which to Choose?",
  excerpt: "Compare Flutter and React Native to decide the best framework for your mobile app project.",
  category: "mobile",
  categoryName: "Mobile Development",
  date: "2025-01-24",
  readTime: "8 min read",
  tags: ["Flutter", "React Native", "Mobile"],
  author: "Mobile Dev",
  featured: false,
  content: {
    introduction: "Flutter and React Native are two leading frameworks for building cross-platform mobile apps. Both offer native performance and strong community support, but they differ in architecture, development experience, and ecosystem. Let's compare them.",
    sections: [
      {
        title: "1. Language",
        content: "React Native uses JavaScript (and optionally TypeScript), while Flutter uses Dart, a language developed by Google.",
        code: `// React Native (JavaScript)
function Greet() {
  return <Text>Hello</Text>;
}

// Flutter (Dart)
Widget Greet() {
  return Text('Hello');
}`,
        language: "javascript"
      },
      {
        title: "2. Performance",
        content: "Flutter compiles to native ARM code using Dart and its own rendering engine. React Native uses a bridge to communicate with native modules, which may affect performance in complex UI scenarios.",
        code: `// No specific code; key difference lies in runtime architecture.`,
        language: "plaintext"
      },
      {
        title: "3. UI Components",
        content: "Flutter provides a complete set of custom widgets, whereas React Native uses native components and often relies on third-party libraries.",
        code: `// Flutter - Customizable from scratch
Scaffold(
  appBar: AppBar(title: Text('Home')),
  body: Center(child: Text('Hello')),
);

// React Native - Native look & feel
<View>
  <Text>Hello</Text>
</View>`,
        language: "dart"
      },
      {
        title: "4. Developer Experience",
        content: "React Native supports hot reloading and has a lower learning curve for web developers. Flutter offers faster compilation with 'hot reload' but may require learning Dart and its own widget tree structure."
      }
    ],
    conclusion: "Choose React Native if you're already comfortable with JavaScript and want strong integration with native features. Choose Flutter for more control over UI and performance in complex apps. Both are excellent choices — your pick should depend on team skills, app complexity, and future scalability."
  }
  },

  {
  id: 15,
  slug: "responsive-ui-in-flutter",
  title: "Building Responsive UIs in Flutter",
  excerpt: "Learn how to make beautiful Flutter apps that adapt to all screen sizes and orientations.",
  category: "mobile",
  categoryName: "Mobile Development",
  date: "2025-01-26",
  readTime: "10 min read",
  tags: ["Flutter", "Responsive Design", "UI"],
  author: "Mobile Dev",
  featured: false,
  content: {
    introduction: "Responsive design is crucial for modern mobile apps, ensuring your UI looks great on all devices. Flutter provides powerful tools like `MediaQuery`, `LayoutBuilder`, and `Flexible` to build adaptive layouts. Let's dive in.",
    sections: [
      {
        title: "1. Using MediaQuery",
        content: "`MediaQuery` gives you access to screen dimensions, padding, orientation, and more.",
        code: `import 'package:flutter/material.dart';

class ResponsiveScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final screenWidth = MediaQuery.of(context).size.width;
    final isTablet = screenWidth > 600;

    return Scaffold(
      appBar: AppBar(title: Text('Responsive')),
      body: Center(
        child: Text(isTablet ? 'Tablet Layout' : 'Phone Layout'),
      ),
    );
  }
}`,
        language: "dart"
      },
      {
        title: "2. LayoutBuilder and Constraints",
        content: "`LayoutBuilder` gives you access to constraints during widget layout, enabling conditional rendering based on width or height.",
        code: `LayoutBuilder(
  builder: (context, constraints) {
    if (constraints.maxWidth > 800) {
      return WideLayout();
    } else {
      return NarrowLayout();
    }
  },
);`,
        language: "dart"
      },
      {
        title: "3. Flex and Expanded Widgets",
        content: "Use `Row`, `Column`, `Expanded`, and `Flexible` for scalable layouts.",
        code: `Row(
  children: [
    Expanded(child: Container(color: Colors.blue)),
    Expanded(child: Container(color: Colors.green)),
  ],
);`,
        language: "dart"
      },
      {
        title: "4. OrientationBuilder",
        content: "`OrientationBuilder` helps you change layout depending on portrait or landscape mode.",
        code: `OrientationBuilder(
  builder: (context, orientation) {
    return GridView.count(
      crossAxisCount: orientation == Orientation.portrait ? 2 : 4,
      children: List.generate(8, (index) {
        return Card(
          child: Center(child: Text('Item \$index')),
        );
      }),
    );
  },
);`,
        language: "dart"
      }
    ],
    conclusion: "Flutter makes it easy to build responsive layouts with a variety of tools and widgets. By understanding screen constraints, orientation, and flex-based layouts, you can deliver consistent, beautiful UI experiences across all devices."
  }
  },

  // =========== AI & Machine Learning ========== //

  {
  id: 16,
  slug: "intro-to-ai-ml",
  title: "Introduction to AI and Machine Learning",
  excerpt: "Understand the basics of Artificial Intelligence and Machine Learning, with real-world examples.",
  category: "ai",
  categoryName: "AI & Machine Learning",
  date: "2025-01-28",
  readTime: "7 min read",
  tags: ["AI", "Machine Learning", "Beginner"],
  author: "AI Guide",
  featured: false,
  content: {
    introduction: "Artificial Intelligence (AI) and Machine Learning (ML) are revolutionizing how we interact with technology. From recommendation systems to autonomous cars, ML is everywhere. This article introduces the core concepts and practical examples.",
    sections: [
      {
        title: "1. What is Artificial Intelligence?",
        content: "AI is the simulation of human intelligence in machines. It allows machines to perform tasks like learning, reasoning, and problem-solving.",
        code: `// Example: AI-based decision logic (simplified)
function decideAction(input) {
  if (input.includes('hungry')) return 'Suggest food';
  if (input.includes('tired')) return 'Suggest rest';
  return 'Suggest activity';
}`,
        language: "javascript"
      },
      {
        title: "2. What is Machine Learning?",
        content: "Machine Learning is a subset of AI that enables systems to learn from data and improve over time without explicit programming.",
        code: `# Example using Python and scikit-learn
from sklearn.linear_model import LinearRegression

X = [[1], [2], [3], [4]]
y = [2, 4, 6, 8]

model = LinearRegression()
model.fit(X, y)

prediction = model.predict([[5]])  # Output: 10`,
        language: "python"
      },
      {
        title: "3. Types of Machine Learning",
        content: "ML is commonly divided into three categories:\n\n- Supervised Learning: Learns from labeled data\n- Unsupervised Learning: Finds patterns in unlabeled data\n- Reinforcement Learning: Learns via trial and error in an environment",
        code: `// Supervised example: predicting house prices
// Unsupervised example: customer segmentation
// Reinforcement example: AI playing a game`,
        language: "plaintext"
      },
      {
        title: "4. Real-World Use Cases",
        content: "Here are some applications of ML and AI:\n\n- Recommendation engines (e.g., Netflix, YouTube)\n- Spam detection in emails\n- Image and speech recognition\n- Self-driving cars\n- Fraud detection in banking"
      }
    ],
    conclusion: "AI and Machine Learning are not just buzzwords—they're actively shaping industries and our daily lives. With a solid understanding of the basics, you can begin your journey into the exciting world of intelligent systems."
  }
  },

  {
  id: 17,
  slug: "supervised-vs-unsupervised",
  title: "Supervised vs Unsupervised Learning Explained",
  excerpt: "Understand the key differences between supervised and unsupervised learning with examples and use cases.",
  category: "ai",
  categoryName: "AI & Machine Learning",
  date: "2025-01-30",
  readTime: "9 min read",
  tags: ["Machine Learning", "Supervised", "Unsupervised"],
  author: "AI Guide",
  featured: false,
  content: {
    introduction: "Machine Learning can be broadly classified into Supervised and Unsupervised Learning. Both techniques use data to enable systems to learn, but they differ in how the data is labeled and how the learning process works.",
    sections: [
      {
        title: "1. What is Supervised Learning?",
        content: "Supervised learning involves training a model on a labeled dataset. The algorithm learns to map inputs to known outputs.",
        code: `# Python example using labeled data
from sklearn.linear_model import LogisticRegression

X = [[0], [1], [2], [3]]
y = [0, 0, 1, 1]

model = LogisticRegression()
model.fit(X, y)

print(model.predict([[1.5]]))  # Output: [1] or [0] depending on decision boundary`,
        language: "python"
      },
      {
        title: "2. What is Unsupervised Learning?",
        content: "In unsupervised learning, the model receives input data without labeled responses. It tries to find hidden patterns or groupings.",
        code: `# Example using KMeans clustering
from sklearn.cluster import KMeans

X = [[1], [2], [10], [12]]
kmeans = KMeans(n_clusters=2)
kmeans.fit(X)

print(kmeans.labels_)  # Output: [1, 1, 0, 0] (or vice versa)`,
        language: "python"
      },
      {
        title: "3. Key Differences",
        content: `- Supervised: Uses labeled data, goal is prediction
- Unsupervised: Uses unlabeled data, goal is pattern discovery
- Supervised algorithms: Regression, classification (e.g., Decision Trees, SVMs)
- Unsupervised algorithms: Clustering, association (e.g., KMeans, PCA)`
      },
      {
        title: "4. Use Cases",
        content: `**Supervised Learning:**
- Spam email detection
- Sentiment analysis
- Credit scoring

**Unsupervised Learning:**
- Customer segmentation
- Market basket analysis
- Anomaly detection`
      }
    ],
    conclusion: "Supervised learning is ideal when historical data is labeled and you want predictions. Unsupervised learning is best for exploring unknown data patterns. Both are essential tools in a machine learning practitioner's toolkit."
  }
  },

  {
  id: 18,
  slug: "first-ml-model-python",
  title: "Building Your First Machine Learning Model with Python",
  excerpt: "Step-by-step guide to building and evaluating your first ML model using Python and scikit-learn.",
  category: "ai",
  categoryName: "AI & Machine Learning",
  date: "2025-02-01",
  readTime: "10 min read",
  tags: ["Python", "Machine Learning", "Scikit-learn"],
  author: "AI Guide",
  featured: false,
  content: {
    introduction: "Getting started with machine learning can seem overwhelming, but Python and scikit-learn make it beginner-friendly. In this tutorial, you'll load a dataset, train a model, evaluate it, and make predictions in just a few lines of code.",
    sections: [
      {
        title: "1. Install Required Libraries",
        content: "You'll need scikit-learn and pandas. Install them via pip if you haven't already:",
        code: `pip install scikit-learn pandas`,
        language: "bash"
      },
      {
        title: "2. Load and Explore Dataset",
        content: "We'll use the built-in Iris dataset for simplicity. It contains features of iris flowers and their species.",
        code: `from sklearn.datasets import load_iris
import pandas as pd

iris = load_iris()
df = pd.DataFrame(iris.data, columns=iris.feature_names)
df['target'] = iris.target
print(df.head())`,
        language: "python"
      },
      {
        title: "3. Train a Classifier",
        content: "Split your data and train a classification model like DecisionTreeClassifier.",
        code: `from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier

X = df.drop('target', axis=1)
y = df['target']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

model = DecisionTreeClassifier()
model.fit(X_train, y_train)`,
        language: "python"
      },
      {
        title: "4. Evaluate the Model",
        content: "Use accuracy score to evaluate how well the model performs on test data.",
        code: `from sklearn.metrics import accuracy_score

predictions = model.predict(X_test)
accuracy = accuracy_score(y_test, predictions)

print(f"Accuracy: {accuracy * 100:.2f}%")`,
        language: "python"
      },
      {
        title: "5. Make Predictions",
        content: "Now you're ready to make predictions with new data.",
        code: `new_sample = [[5.1, 3.5, 1.4, 0.2]]  # Sample input
predicted_class = model.predict(new_sample)
print(f"Predicted class: {iris.target_names[predicted_class[0]]}")`,
        language: "python"
      }
    ],
    conclusion: "You’ve just built and evaluated a machine learning model from scratch using Python! As you gain experience, you can explore other models, tune hyperparameters, and try larger datasets for real-world projects."
  }
  },




];

export const categories = [
  { id: "frontend", name: "Frontend Development", icon: "🎨", count: 2 },
  { id: "backend", name: "Backend Development", icon: "⚙️", count: 1 },
  { id: "devops", name: "DevOps & Deployment", icon: "🚀", count: 0 },
  { id: "algorithms", name: "Data Structures & Algorithms", icon: "🧮", count: 0 },
  { id: "mobile", name: "Mobile Development", icon: "📱", count: 0 },
  { id: "ai", name: "AI & Machine Learning", icon: "🤖", count: 0 }
];

export function getPostBySlug(slug) {
  return blogPosts.find(post => post.slug === slug);
}

export function getPostsByCategory(category) {
  return blogPosts.filter(post => post.category === category);
}

export function getFeaturedPosts() {
  return blogPosts.filter(post => post.featured);
}

export function getAllPosts() {
  return blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
}
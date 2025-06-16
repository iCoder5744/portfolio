//src/data/blog/posts.js
export const blogPosts = [
  {
    id: 1,
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
  }
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
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function BlogPage() {
  const blogCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      description: "Master the art of creating beautiful, interactive user interfaces",
      posts: [
        {
          title: "React Hooks: A Complete Guide",
          excerpt: "Deep dive into useState, useEffect, and custom hooks with practical examples",
          date: "2024-12-15",
          readTime: "8 min read",
          tags: ["React", "JavaScript", "Hooks"]
        },
        {
          title: "CSS Grid vs Flexbox: When to Use What",
          excerpt: "Learn the differences and best use cases for CSS Grid and Flexbox layouts",
          date: "2024-12-10",
          readTime: "6 min read",
          tags: ["CSS", "Layout", "Design"]
        },
        {
          title: "Next.js 14: App Router Deep Dive",
          excerpt: "Explore the new App Router features and migration strategies",
          date: "2024-12-05",
          readTime: "12 min read",
          tags: ["Next.js", "React", "SSR"]
        }
      ]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      description: "Build robust, scalable server-side applications and APIs",
      posts: [
        {
          title: "Node.js Performance Optimization",
          excerpt: "Techniques to make your Node.js applications faster and more efficient",
          date: "2024-12-12",
          readTime: "10 min read",
          tags: ["Node.js", "Performance", "Optimization"]
        },
        {
          title: "Database Design Patterns",
          excerpt: "Essential patterns for designing scalable and maintainable databases",
          date: "2024-12-08",
          readTime: "15 min read",
          tags: ["Database", "SQL", "Design Patterns"]
        },
        {
          title: "RESTful API Best Practices",
          excerpt: "Guidelines for building clean, maintainable, and secure APIs",
          date: "2024-12-03",
          readTime: "9 min read",
          tags: ["API", "REST", "Backend"]
        }
      ]
    },
    {
      title: "DevOps & Deployment",
      icon: "🚀",
      description: "Streamline your development workflow and deployment processes",
      posts: [
        {
          title: "Docker for Developers",
          excerpt: "Containerize your applications for consistent development and deployment",
          date: "2024-12-14",
          readTime: "11 min read",
          tags: ["Docker", "DevOps", "Containers"]
        },
        {
          title: "CI/CD with GitHub Actions",
          excerpt: "Automate your testing and deployment pipeline with GitHub Actions",
          date: "2024-12-07",
          readTime: "13 min read",
          tags: ["CI/CD", "GitHub", "Automation"]
        }
      ]
    },
    {
      title: "Data Structures & Algorithms",
      icon: "🧮",
      description: "Master the fundamentals of computer science and problem-solving",
      posts: [
        {
          title: "Big O Notation Explained",
          excerpt: "Understand time and space complexity with visual examples",
          date: "2024-12-11",
          readTime: "7 min read",
          tags: ["Algorithms", "Big O", "Computer Science"]
        },
        {
          title: "Dynamic Programming Patterns",
          excerpt: "Common DP patterns and how to recognize when to use them",
          date: "2024-12-06",
          readTime: "14 min read",
          tags: ["Dynamic Programming", "Algorithms", "Problem Solving"]
        }
      ]
    },
    {
      title: "Mobile Development",
      icon: "📱",
      description: "Build native and cross-platform mobile applications",
      posts: [
        {
          title: "React Native vs Flutter: 2024 Comparison",
          excerpt: "Which framework should you choose for your next mobile app?",
          date: "2024-12-09",
          readTime: "10 min read",
          tags: ["React Native", "Flutter", "Mobile"]
        },
        {
          title: "Mobile App Performance Tips",
          excerpt: "Optimize your mobile apps for better user experience",
          date: "2024-12-04",
          readTime: "8 min read",
          tags: ["Mobile", "Performance", "UX"]
        }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: "🤖",
      description: "Explore the world of artificial intelligence and machine learning",
      posts: [
        {
          title: "Getting Started with Machine Learning",
          excerpt: "A beginner's guide to ML concepts and first projects",
          date: "2024-12-13",
          readTime: "12 min read",
          tags: ["Machine Learning", "AI", "Python"]
        },
        {
          title: "Building ChatGPT-like Applications",
          excerpt: "Integrate AI APIs into your web applications",
          date: "2024-12-02",
          readTime: "16 min read",
          tags: ["AI", "APIs", "ChatGPT"]
        }
      ]
    }
  ];

  const featuredPost = {
    title: "The Complete Full-Stack Developer Roadmap 2024",
    excerpt: "A comprehensive guide to becoming a full-stack developer in 2024. From frontend frameworks to backend technologies, databases, and deployment strategies.",
    date: "2024-12-16",
    readTime: "20 min read",
    tags: ["Full-Stack", "Career", "Roadmap", "Web Development"],
    image: "🎯"
  };

  return (
    <div className="rounded-[2rem] sm:rounded-[4rem] border-4 border-gray-100 max-w-[1000px] mx-2 sm:mx-4 md:mx-6 lg:mx-auto my-4 sm:my-8 md:my-20
          bg-gray-800 transition-all duration-300">
      <Header />

      <div className="p-3 sm:p-6 md:p-10 text-white">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 mt-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Programming Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your go-to resource for modern web development, programming tutorials, and tech insights
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">📌 Featured Article</h2>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-4 sm:p-8 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 cursor-pointer transform hover:scale-105">
            <div className="text-6xl mb-4 text-center">{featuredPost.image}</div>
            <h3 className="text-2xl font-bold mb-3">{featuredPost.title}</h3>
            <p className="text-gray-100 mb-4 leading-relaxed">{featuredPost.excerpt}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {featuredPost.tags.map((tag, index) => (
                <span key={index} className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-black text-sm">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center text-sm text-gray-200">
              <span>{featuredPost.date}</span>
              <span>{featuredPost.readTime}</span>
            </div>
          </div>
        </div>

        {/* Blog Categories */}
        <div className="space-y-12">
          {blogCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="border-b border-gray-600 pb-12 last:border-b-0">
              <div className="flex flex-col items-start gap-4 mb-6">
                <div className="flex gap-2 items-center">
                  <span className="text-4xl">{category.icon}</span>
                  <h2 className="text-2xl md:text-3xl font-bold">{category.title}</h2>
                </div>
                <p className="text-gray-400 pl-2 ">{category.description}</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.posts.map((post, postIndex) => (
                  <article key={postIndex} className="bg-gray-700 rounded-xl p-6 hover:bg-gray-600 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-lg">
                    <h3 className="text-xl font-bold mb-3 text-blue-300 hover:text-blue-200">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-blue-600 px-2 py-1 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-400">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">📬 Stay Updated</h3>
          <p className="text-gray-100 mb-6">
            Get the latest programming tutorials and tech insights delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-100 border-2 border-white focus:outline-none   focus:ring-white"
            />
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>

        {/* Popular Tags */}
        <div className="mt-12 text-center  sm:mx-6">
          <h3 className="text-xl font-bold mb-4">🏷️ Popular Tags</h3>
          <div className="flex flex-wrap justify-center gap-3 max-sm:text-sm">
            {['JavaScript', 'React', 'Node.js', 'Python', 'CSS', 'Database', 'API', 'DevOps', 'Mobile', 'AI', 'Web Development', 'Full-Stack'].map((tag, index) => (
              <span key={index} className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-full cursor-pointer transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
// data/blog/posts.js

import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/lib/firebase';


// No longer using this
export const blogPosts = [];

export async function getAllPosts() {
  const snapshot = await getDocs(collection(db, 'blogPosts'));
  const posts = snapshot.docs.map(doc => doc.data());
  return posts;
}

export async function getPostBySlug(slug) {
  const q = query(collection(db, 'blogPosts'), where('slug', '==', slug));
  const snapshot = await getDocs(q);
  return snapshot.docs[0]?.data() || null;
}

export async function getPostsByCategory(category) {
  const q = query(collection(db, 'blogPosts'), where('category', '==', category));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => doc.data());
}

export async function getFeaturedPosts() {
  const q = query(collection(db, 'blogPosts'), where('featured', '==', true));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => doc.data());
}


export const categories = [
{ id: "frontend", name: "Frontend Development", icon: "🎨", count: 2 },
{ id: "backend", name: "Backend Development", icon: "⚙️", count: 1 },
{ id: "devops", name: "DevOps & Deployment", icon: "🚀", count: 0 },
{ id: "algorithms", name: "Data Structures & Algorithms", icon: "🧮", count: 0 },
{ id: "mobile", name: "Mobile Development", icon: "📱", count: 0 },
{ id: "ai", name: "AI & Machine Learning", icon: "🤖", count: 0 }
];

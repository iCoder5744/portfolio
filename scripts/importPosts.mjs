// scripts/importPosts.js

import admin from 'firebase-admin';
import fs from 'fs';
import path from 'path';

// Load service account key
const serviceAccount = JSON.parse(
  fs.readFileSync(path.join('./firebase-key.json'), 'utf-8')
);

// Initialize Firebase Admin
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = admin.firestore();

// Load posts from firestore-data/blogPosts.json
const posts = JSON.parse(
  fs.readFileSync(path.join('./firestore-data/blogPosts.json'), 'utf-8')
);

async function importPosts() {
  const collectionRef = db.collection('blogPosts');

  for (const post of posts) {
    try {
      // You can use post.slug or post.id as the doc ID (slug is better for readability)
      await collectionRef.doc(post.slug).set(post);
      console.log(`✅ Imported: ${post.title}`);
    } catch (error) {
      console.error(`❌ Failed to import ${post.title}`, error);
    }
  }

  console.log('\n✅✅ All posts imported successfully!');
  process.exit();
}

importPosts();

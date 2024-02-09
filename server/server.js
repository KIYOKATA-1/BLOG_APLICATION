const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5120;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/BLOG', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a MongoDB schema and model
const postSchema = new mongoose.Schema({
  title: String,
  text: String,
  author: String,
});

const Post = mongoose.model('Post', postSchema);

app.use(cors());
app.use(express.json());

// Define API endpoint to get all posts
app.get('/api/posts', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/posts', async (req, res) => {
  const { title, text, author } = req.body;
  try {
    const newPost = new Post({ title, text, author });
    await newPost.save();
    res.json({ message: 'Post added successfully', post: newPost });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.delete('/api/posts/:postId', async (req, res) => {
    const postId = req.params.postId;

    try {
      const deletedPost = await Post.findByIdAndDelete(postId);

      if (deletedPost) {
        console.log('Post deleted successfully', deletedPost)
        res.json({ message: 'Post deleted successfully', post: deletedPost });
      } else {
        res.status(404).json({ error: 'Post not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.put('/api/posts/:postId', async (req, res) => {
    const postId = req.params.postId;
    const { title, text, author } = req.body;
  
    try {
      const updatedPost = await Post.findByIdAndUpdate(
        postId,
        { title, text, author },
        { new: true } // This option returns the modified document
      );
  
      if (updatedPost) {
        console.log('Post updated successfully', updatedPost);
        res.json({ message: 'Post updated successfully', post: updatedPost });
      } else {
        res.status(404).json({ error: 'Post not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

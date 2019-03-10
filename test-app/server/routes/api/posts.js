const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Posts
router.get('/', async (req, res) => {
  // res.send('hello');
  const posts = await loadPostsCollection();
  res.send(await posts.find({}).toArray());
});

// Add Posts
router.post('/', async (req, res) => {
  const posts = await loadPostsCollection();
  await posts.insertOne({
    text: req.body.text,
    address: req.body.address,
    createdAt: new Date()
  });
  res.status(201).send();
});

// Delete Posts
router.delete('/:id', async (req, res) => {
  const posts = await loadPostsCollection();
  await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
  res.status(200).send();
});

async function loadPostsCollection() {
  const client = await mongodb.MongoClient.connect
  ('mongodb+srv://user1:banan@cluster0-2zvjs.mongodb.net/test?retryWrites=true', {
    useNewUrlParser: true
  });
  return client.db('godega').collection('bodegas');
}

module.exports = router;
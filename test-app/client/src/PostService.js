import axios from 'axios';

const url = 'api/posts/';

class PostService {
  // Get Posts
  static getPosts() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        const data = res.data;
        resolve(
          data.map(post => ({
            ...post,
            createdAt: new Date(post.createdAt)
          }))
        );
      } catch(err) {
        reject(err);
      }
    })
  }

  // Create Post
  static insertPost(text, address) {
    return axios.post(url, {
      text, address
    });
  }

  // Delete Post
  static deletePost(id) {
    return axios.delete(`${url}${id}`); // variable syntax
  }
}

export default PostService;
// We can use PostService without instantiating because of its 'static'
<template>
  <div class="container">
    <h1>Latest Posts</h1>
    <div class="create-post">
      <div class="input-block">
        <label for="create-post">Name</label>
        <input type="text" id="create-post" v-model="name" placeholder="Hvad hedder bodegaen?">
      </div>
      <div class="input-block">
        <label for="create-post">Adress</label>
        <input type="text" id="create-post" v-model="address" placeholder="Adresse">
      </div>
      <button v-on:click="createPost">Create post</button>
    </div>
    <hr>
    <p class="error" v-if="error">{{ error }}</p>
    <div class="posts-container">
      <div class="post" 
        v-for="(post, index) in posts"
        v-bind:item="post"
        v-bind:index="index"
        v-bind:key="post._id"
        v-on:dblclick="deletePost(post._id)"
      >
        {{ `${post.createdAt.getDate()}/${post.createdAt.getMonth()}/${post.createdAt.getFullYear()}` }}
        <p class="text">{{ post.text }}</p>
        <div class="close-btn" v-on:click="deletePost(post._id)"></div>
      </div>
    </div>
  </div>
</template>

<script>

import PostService from '../PostService';

export default {
  name: 'PostComponent',
  data() {
    return {
      posts: [],
      error: '',
      name: '',
      address: ''
    }
  },
  async created() {
    try {
      this.posts = await PostService.getPosts()
    } catch(err) {
      this.error = err.message;
    }
  },
  methods: {
    async createPost() {
      await PostService.insertPost(this.name, this.address);
      this.posts = await PostService.getPosts();
    },
    async deletePost(id) {
      await PostService.deletePost(id);
      this.posts = await PostService.getPosts();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div.container {
 max-width: 800px;
 margin: 0 auto; 
}

.input-block {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px;
}

div.post {
  position: relative;
  border: 1px solid #5bd658;
  background-color: #bcffb8;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
}

div.created-at {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px 5px 15px;
  background-color: darkgreen;
  color: white;
  font-size: 13px;
}

p.text {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}

.close-btn {
  width: 12px;
  height: 12px;
  background: red;
  position: absolute;
  top: 12px;
  right: 12px;
  /*background: url('~/svg/icons/hide-icon.svg') no-repeat;
  background-size: contain;
  background-position: center;*/
}

</style>

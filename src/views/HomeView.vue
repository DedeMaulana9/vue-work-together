<template>
  <div class="home">
    <h1>List Berita</h1>
    <div class="news" v-for="(message, index) in newsList" :key="index">
      <img :src="message.urlToImage" alt="gambar" />
      <div class="author">
        <p v-if="newsList[index].author === null">anonymous</p>
        <p v-else>{{ message.author }}</p>
      </div>
      <div class="title">
        <h3>{{ message.title }}</h3>
      </div>
      <div class="publishTime">
        <p>{{ message.publishedAt }}</p>
      </div>
      <v-btn elevation="4" color="deep-purple" dark class="button" @click="comeback(index)">Read More</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  mounted() {
    this.$store.dispatch('fetchNews');
  },
  methods: {
    comeback(index) {
      this.$router.push({ name: 'Deskripsi', params: { id: index } });
    },
  },
  computed: {
    newsList() {
      console.log(this.$store.state.list);
      return this.$store.state.list;
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: rgb(0, 0, 0);
}
h1 {
  text-align: center;
  margin: 20px 0;
}
.home {
  width: 50%;
  margin: 0 auto;
  padding: 30px;
  padding-top: 1px;
}
.news {
  background-color: #eaeaea;
  margin: 10px;
  padding: 10px;
  text-align: center;
}
.news img {
  width: 200px;
  height: 100px;
}
.news .button {
  color: white;
}

a {
  text-decoration: none;
  color: rgb(28, 27, 32);
}

.author {
  font-size: 14px;
  margin: 12px 0;
}
.title h3 {
  font-size: 15px;
  margin: 12px;
}
.news .publishTime {
  font-size: 12px;
  margin-top: 12px;
}
</style>

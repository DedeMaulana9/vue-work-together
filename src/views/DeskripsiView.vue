<template>
  <div class="detail">
    <v-btn outlined color="light"><router-link to="/">kembali</router-link></v-btn>
    <img :src="news[$route.params.id].urlToImage" alt="" width="100%" />
    <div class="newsDetail">
      <h3>{{ news[$route.params.id].title }}</h3>
    </div>
    <div class="author">
      <h3>{{ news[$route.params.id].author }}</h3>
    </div>
    <div class="publishTime">
      <h3>{{ news[$route.params.id].publishedAt }}</h3>
    </div>
    <div class="deskripsi">
      <h3>{{ news[$route.params.id].desciption }}</h3>
    </div>

    <p class="link">Lanjutkan baca ke <a :href="news[$route.params.id].url">sini</a></p>
  </div>
</template>

<script>
export default {
  name: 'DeskripsiView',
  computed: {
    index() {
      return this.$router.params.id.slice(2);
    },
    news() {
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
  color: rgb(28, 27, 32);
}

.detail {
  width: 50%;
  margin: 0 auto;
  padding: 30px;
}

.newsDetail {
  width: 40%;
  margin: 20px auto;
}

h3 {
  font-size: 17px;
  text-align: center;
  margin-bottom: 15px;
}

.author {
  font-size: 14px;
}

.publishTime {
  font-size: 14px;
}
.deskripsi {
  font-size: 18px;
  margin: 10px 0;
}
.link {
  font-size: 14px;
  margin-bottom: 10px;
  text-align: center;
}
.link a {
  color: rgb(68, 68, 196);
}

v-btn {
  margin-bottom: 20px;
}

a {
  text-decoration: none;
}
</style>

<template>
  <article
    v-if="content"
    class="article"
  >
    <h1 class="article__ttl">
      {{ content.title }}
    </h1>
    <div
      v-html="content.body"
      class="article__body"
    />
  </article>
</template>

<script>
import axios from "axios";
import "ress";

export default {
  components: {},
  data() {
    return {
      content: null
    };
  },
  methods: {
    fetchArticle() {
      axios
        .get(`https://kenarai.microcms.io/api/v1/blog/${this.$route.params['id']}`, {
          headers: { "X-API-KEY": "436d07d8-81b3-459b-a8b5-111fca11855a" }
        })
        .then(res => {
          console.log(res.data);
          this.content = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.fetchArticle();
  }
};
</script>

<style lang="scss" scoped>
.article {
  margin: 32px auto;
  width: 600px;
  &__ttl {
    margin-bottom: 16px;
    font-weight: bold;
    font-size: 1.8rem;
  }
  &__body {
    font-size: 1.3rem;
    /deep/ h2 {
      margin-bottom: 16px;
      font-size: 1.4rem;
    }
    /deep/ h3 {
      margin-bottom: 16px;
      font-size: 1.3rem;
    }
    /deep/ p {
      margin-bottom: 48px;
      font-size: 1.2rem;
    }
  }
}
</style>

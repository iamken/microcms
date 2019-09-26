<template>
  <section>
    <ul class="blog">
      <li class="blog__article" v-for="article in articles" :key="article.id">
        <router-link
          :to="{name: 'Article', params: {id: article.id}}"
          class="blog__anchor"
        >
          <div
            :style="{ 'background-image': `url( ${article.mainVisual.url} )`}"
            class="blog__thumb"
          />
          <div class="blog__info">
            <h1 class="blog__infoTtl">
              {{ article.title }}
            </h1>
            <p class="blog__infoSub">
              {{ modifyDatetime(article.createdAt) }}
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
import axios from "axios";
import "ress";

export default {
  components: {},
  data() {
    return {
      articles: null
    };
  },
  methods: {
    fetchArticles() {
      axios
        .get("https://kenarai.microcms.io/api/v1/blog", {
          headers: { "X-API-KEY": "436d07d8-81b3-459b-a8b5-111fca11855a" }
        })
        .then(res => {
          console.log(res.data);
          this.articles = res.data.contents;
        })
        .catch(err => {
          console.log(err);
        });
    },
    modifyDatetime(date) {
      const Ymd = date.split("T")[0];
      const His = date.split("T")[1].split(".")[0];

      return Ymd + " " + His;
    }
  },
  mounted() {
    this.fetchArticles();
  }
};
</script>

<style lang="scss" scoped>
.blog {
  margin: 0 auto;
  width: 600px;
  list-style: none;
  &__article {
    & + .blog__article {
      border-top: 1px solid #eee;
    }
  }
  &__anchor {
    display: flex;
    align-items: center;
    padding: 12px 0;
    color: #444;
    text-decoration: none;
  }
  &__thumb {
    margin-right: 12px;
    width: 160px;
    height: 90px;
    background-size: cover;
    background-position: center;
  }
  &__info {
    flex: 1;
    &Ttl {
      font-size: 1.2rem;
      margin-bottom: 8px;
    }
    &Sub {
      color: #999;
      font-size: 1rem;
    }
  }
}
</style>

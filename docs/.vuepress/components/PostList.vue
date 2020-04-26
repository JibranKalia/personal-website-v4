<template>
  <section>
    <post-detail v-for="post in posts" :key="post.key" :post="post" />
  </section>
</template>
<script>
import PostDetail from './PostDetail'
export default {
  components: { PostDetail},
  computed: {
    posts() {
      console.log("This Site:", this.$site);
      const path = this.$page.path
      const posts = this.$site.pages
        .filter(p => p.path && p.path.startsWith(path) && p.path !== path)
        .sort((a, b) => {
          let b_date = b.frontmatter.date || b.lastUpdated;
          let a_date = a.frontmatter.date || a.lastUpdated;
          return new Date(b_date) - new Date(a_date)
        });
      return posts;
    }
  }
}
</script>

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
      const path = this.$page.path
      return this.$site.pages
        .filter(p => p.path && p.path.startsWith(path) && p.path !== path)
        .sort((a, b) => {
          return new Date(a.frontmatter.date) < new Date(b.frontmatter.date)
        });
    }
  }
}
</script>

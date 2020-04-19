<template>
  <section>
    <ul v-for="post in posts" :key="post.key">
      <li>
        {{ post.title }}
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  computed: {
    posts() {
      const path = this.$page.path
      return this.$site.pages
        .filter(p => p.path && p.path.startsWith(path) && p.path !== path);
    }
  }
}
</script>

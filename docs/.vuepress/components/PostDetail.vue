<template>
  <div>
    <div class="last-updated">{{updatedAt}}</div>
    <h3>
      <router-link :to="post.path">{{title}} </router-link>
    </h3>
    <p>
      <template v-if="description">
        {{description}}
        <br />
      </template>
    </p>
    <hr />
  </div>
</template>
<script>
export default {
  props: { post: Object },
  computed: {
    title() {
      if (this.post.frontmatter && this.post.frontmatter.title) {
        return this.post.frontmatter.title;
      } else {
        return this.post.title;
      }
    },
    description() {
      return this.post.frontmatter.description;
    },
    updatedAt() {
      if (this.post.frontmatter && this.post.frontmatter.date) {
        return new Date(this.post.frontmatter.date).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
      } else {
        return this.post.lastUpdated;
      }
    },
  },
}
</script>
<style scoped>
.last-updated {
  float: right;
  color: #aaa;
}
</style>
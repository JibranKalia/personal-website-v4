<template>
  <div>
    <div class="last-updated">{{updatedAt}}</div>
    <h3>
      <router-link :to="post.path">{{post.title}} </router-link>
    </h3>
    <p>
      {{description}}
      <br />
    </p>
    <hr />
  </div>
</template>
<script>
export default {
  props: { post: Object },
  computed: {
    description() {
      return this.post.frontmatter.description
    },
    updatedAt() {
      return new Date(this.post.frontmatter.date).toDateString()
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
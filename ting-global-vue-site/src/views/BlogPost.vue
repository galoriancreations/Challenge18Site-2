<template>
  <Page :title="post.title">
    <BlogPostHeading>{{ post.title }}</BlogPostHeading>
    <main class="section-white post-content" v-html="post.content" />
  </Page>
</template>

<script>
import posts from "../data/blog";
import BlogPostHeading from "../components/layout/BlogPostHeading";

export default {
  components: { BlogPostHeading },
  props: {
    postId: String,
  },
  data() {
    return {
      post: posts.find((post) => post.id === this.postId),
    };
  },
};
</script>

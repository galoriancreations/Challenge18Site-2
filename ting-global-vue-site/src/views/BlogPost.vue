<template>
  <Page v-if="post" :title="post.title" name="blogpost">
    <BlogPostHeading>{{ post.title }}</BlogPostHeading>
    <WhiteSection tag="main" class="post-content" v-html="post.content" />
  </Page>
  <NotFound v-else />
</template>

<script>
import posts from "../data/blog";
import BlogPostHeading from "../components/layout/BlogPostHeading";
import NotFound from "./404";

export default {
  components: { BlogPostHeading, NotFound },
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

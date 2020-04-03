<template>
  <div>
    <Layout>
      <g-image :src="$page.post.cover_image" style="width: 100%"> </g-image>
      <div v-html="$page.post.content" />
      <vue-disqus
        shortname="ndenesene"
        :identifier="$page.post.id"
      ></vue-disqus>
    </Layout>
  </div>
</template>
<page-query>
query($path: String!) {
  post(path: $path) {
    id
    content
    cover_image(width: 1000, height: 300)
  }
}
</page-query>
<script>
export default {};
</script>

<style lang="scss" scoped></style>

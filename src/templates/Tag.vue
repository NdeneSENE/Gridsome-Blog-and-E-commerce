<template>
  <div>
    <Layout>
      <h1>#{{ $page.tag.title }}</h1>
      <article
        v-for="edge in $page.tag.belongsTo.edges"
        :key="edge.node.id"
        style="margin-bottom: 2em;"
      >
        <!-- <div v-html="edge.node.content" /> -->
        <g-image :src="edge.node.cover_image" style="width: 100%"> </g-image>
        <h1>{{ edge.node.title }}</h1>
        <p>
          {{ edge.node.excerpt }}
        </p>
        <p>
          Posted {{ edge.node.date }} - {{ edge.node.timeToRead }} min(s) read
        </p>
        <div>
          <g-link
            style="padding-right: .25em"
            v-for="tag in edge.node.tags"
            :key="tag.id"
            :to="tag.path"
          >
            #{{ tag.id }}
          </g-link>
        </div>
        <g-link :to="edge.node.path">Read Post</g-link>
      </article>
    </Layout>
  </div>
</template>

<page-query>
query($id: String) {
  tag(id: $id){
    title
    belongsTo{
      edges{
        node{
          ...on Post{
            id
        title
        excerpt
        tags{
            id
            path 
        }
        date(format: "Do MMMM, YYYY")
        timeToRead
        path
        cover_image(width: 1000, height: 300)
          }
        }
      }
    }
  }
}
</page-query>

<script>
export default {};
</script>

<style lang="scss" scoped></style>

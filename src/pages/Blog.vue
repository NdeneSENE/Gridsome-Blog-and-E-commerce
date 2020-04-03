<template>
  <div>
    <Layout>
      <h1>Blog Section</h1>
      <article
        v-for="edge in $page.allPost.edges"
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
      <Pager :info="$page.allPost.pageInfo" linkClass="pager" />
    </Layout>
  </div>
</template>

<page-query>
query($page: Int) {
  allPost(perPage: 2, page: $page) @paginate {
      pageInfo{
      currentPage
      totalPages
      isLast
      isFirst
    }
  	edges{
      node{
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
</page-query>

<script>
import { Pager } from "gridsome";
export default {
  components: {
    Pager
  }
};
</script>

<style>
.pager {
  font-size: 1.5rem;
  letter-spacing: 0.5px;
  padding: 40px 20px;
}
</style>

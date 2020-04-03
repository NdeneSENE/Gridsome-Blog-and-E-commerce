<template>
  <div>
    <Layout>
      <h1>Products Page</h1>
      <div
        style="text-align: center;"
        v-for="edge in $page.allContentfulProduct.edges"
        :key="edge.node.id"
      >
        <h2 style="margin-bottom: 0.25em;">{{ edge.node.nom }}</h2>
        <button
          class="snipcart-add-item cart-button"
          :data-item-id="edge.node.id"
          :data-item-name="edge.node.nom"
          :data-item-image="edge.node.image.file.url"
          :data-item-price="edge.node.prix"
          :data-item-url="edge.node.path"
        >
          Acheter pour {{ edge.node.prix }}
        </button>
        <g-image
          :src="edge.node.image.file.url"
          style="width: 100%; height: 300px; object-fit: contain;"
          :alt="edge.node.image.title"
        />
        <p>{{ edge.node.description }}</p>
      </div>
      <Pager :info="$page.allContentfulProduct.pageInfo" linkClass="pager" />
    </Layout>
  </div>
</template>

<page-query>
query($page: Int) {
  allContentfulProduct(perPage: 2, page: $page) @paginate {
    pageInfo{
      currentPage
      totalPages
      isLast
      isFirst
    }
    edges{
      node {
        id
        title
        path
        nom
        prix
        image {
          title
          file{
            url
          }
        }
        description
      }
    }
  }
}
</page-query>

<script>
import { Pager } from "gridsome";
export default {
  metaInfo: {
    title: "Products",
    meta: [
      { charset: "utf-8" },
      { name: "author", content: "Ndéné SENE" },
      { name: "description", content: "Ndéné SENE Full Stack Developer" },
      {
        name: "keywords ",
        content: "Developpement, Programmation, Reseaux & Systemes, etc ..."
      }
    ]
  },
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
.cart-button {
  background-color: forestgreen;
  border: none;
  border-radius: 5px;
  color: white;
  padding: 8px 16px;
  margin-bottom: 10px;
  text-decoration: none;
  font-size: 1rem;
}
</style>

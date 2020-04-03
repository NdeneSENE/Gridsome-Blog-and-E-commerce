<template>
  <footer>
    Copyright {{getCurrentYear}} by
    <a :href="href ">Ndéné SENE</a>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      href: "http://ndenesene.com"
    };
  },
  computed: {
    getCurrentYear() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style>
footer {
  text-align: center;
  color: #00a672;
  letter-spacing: 0.5px;
  padding: 20px;
}
</style>
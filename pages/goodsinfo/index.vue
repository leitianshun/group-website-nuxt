<template>
  <div>商品详情</div>
</template>
<script>
  export default {
    // name: "component_name",

    async asyncData({ query }) {
      try {
        const { id } = await query;
        console.log(id);
      } catch (e) {
        console.log(e);
      }
    },
    data() {
      return {};
    },
    created() {
      this.con();
    },
    methods: {
      con() {
        // console.log(this.$route.query.id);
      },
    },
  };
</script>
<style scoped></style>

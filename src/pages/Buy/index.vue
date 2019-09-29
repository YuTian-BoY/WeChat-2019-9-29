<template>
  <div class="container">
    <swiper class="goodsimgs" indicator-dots="true" autoplay="true" interval="3000" duration="1000">
      <swiper-item></swiper-item>
    </swiper>
  </div>
</template>
<script>
export default {
  data() {
    return {
      recommend: {}, //读取数据商品到空对象
      gallery: [],
      index: 0
    }
  },
  mounted() {
    const recommend = this.$mp.query.recommend
    this.index = this.$mp.query.index
    this.recommend = JSON.parse(recommend)
    console.log(this.recommend)
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus'></style>

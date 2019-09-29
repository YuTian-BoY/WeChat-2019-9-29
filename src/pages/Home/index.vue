<template>
  <div class="banner">
    <!-- banner轮播图 -->
    <swiper indicator-dots="true" autoplay="true" circular="true">
      <swiper-item v-for="(item, index) in banners" :key="index">
        <img :src="item.url" />
      </swiper-item>
    </swiper>
    <!-- 优惠卷 -->
    <div class="content">
      <div class="quan">
        <div class="quan-item" v-for="(item, index) in couponLists" :key="index">
          <div class="money">{{item.discount}}</div>
          <div class="text">优惠券</div>
          <div class="condition">满{{item.min}}使用</div>
          <div class="get-btn" @click="go">领取</div>
        </div>
      </div>
    </div>
    <!-- 商品列表 -->
    <div class="commiditys">
      <div class="recommend">
        <div class="label">推荐商品</div>
        <div class="recommend-item">
          <div
            v-for="(recommend, index) in newGoodsLists"
            :key="index"
            @click="goBuy(recommend,index)"
          >
            <div class="pic">
              <img :src="recommend.picUrl" />
            </div>
            <div class="title">{{recommend.name}}</div>
            <div class="info">
              <div class="price">{{recommend.retailPrice}}</div>
            </div>
          </div>
        </div>
        <div class="hot">
          <div class="label">热卖商品</div>
          <div class="hot-wrap">
            <div class="hot-item" v-for="(item, index) in hotGoods" :key="index">
              <div>
                <img :src="item.picUrl" />
                <div class="title">{{item.name}}</div>
                <div class="info">
                  <div class="price">{{item.retailPrice}}</div>
                  <div class="count">{{item.sortOrder}}{{item.unit}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      banners: [],
      newGoodsLists: [],
      hotGoods: [],
      couponLists: []
    }
  },
  async mounted() {
    var reqTask = await wx.request({
      url: 'https://test-api.firefac.cn/openapi/home/index',
      data: {},
      // header: { 'content-type': 'application/json' },
      method: 'GET',
      success: res => {
        this.banners = res.data.data.banner
        this.newGoodsLists = res.data.data.newGoodsList
        this.hotGoods = res.data.data.hotGoodsList
        this.couponLists = res.data.data.couponList
        console.log(res.data.data)
      }
    })
  },
  methods: {
    go() {
      wx.navigateTo({
        url: '/pages/Login/main'
      })
    },
    goBuy(recommend, index) {
      wx.navigateTo({
        url:
          '/pages/Buy/main?recommend=' +
          JSON.stringify(recommend) +
          '&index=' +
          index
      })
    }
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus'>
::-webkit-scrollbar
  width 0
  height 0
  color transparent
.banner
  width 100%
  height 375rpx
  swiper
    width 100%
    height 375rpx
    img
      width 100%
      height 375rpx
.content
  font-size 30rpx
  background-color #efeff4
  .quan
    display flex
    padding 34rpx 20rpx 40rpx 20rpx
    flex-wrap wrap
    .quan-item
      background-color #fe7494
      margin 0 4rpx
      flex 1
      text-align center
      padding 24rpx 0
      min-width 150rpx
      color #fff
      &.quan-item:nth-child(1)
        background -moz-linear-gradient(left top, #fe7494, #fd75db)
        background -webkit-linear-gradient(left top, #fe7494, #fd75db)
        background -o-linear-gradient(left top, #fe7494, #fd75db)
      &.quan-item:nth-child(2)
        background -moz-linear-gradient(left top, #71e1e9, #64e3b5)
        background -webkit-linear-gradient(left top, #71e1e9, #64e3b5)
        background -o-linear-gradient(left top, #71e1e9, #64e3b5)
      &.quan-item:nth-child(3)
        background -moz-linear-gradient(left top, #fddf7c, #fba557)
        background -webkit-linear-gradient(left top, #fddf7c, #fba557)
        background -o-linear-gradient(left top, #fddf7c, #fba557)
      &.quan-item:nth-child(4)
        background -moz-linear-gradient(left top, #e17cfd, #9a79f2)
        background -webkit-linear-gradient(left top, #e17cfd, #9a79f2)
        background -o-linear-gradient(left top, #e17cfd, #9a79f2)
    .money
      color #fff
      font-size 48rpx
    .text
      margin 10rpx 0
      font-size 36rpx
      color #000
    .condition
      margin 10rpx 0 20rpx 0
      font-size 24rpx
      color #000
    .get-btn
      margin 0 auto
      color #fff
      border 2rpx #fff solid
      width 120rpx
      height 60rpx
      line-height 60rpx
      border-radius 6rpx
      font-size 26rpx
.commiditys .recommend
  background-color #fff
  margin-bottom 20rpx
.commiditys .recommend .recommend-item
  box-sizing border-box
  padding 30rpx
  border-top 1rpx #e5e5e5 solid
.recommend .recommend-item .pic
  text-align center
.recommend .recommend-item image
  width 600rpx
  height 600rpx
.recommend-item .title
  height 72rpx
  display flex
  line-height 35rpx
  flex-direction column
  justify-content center
  text-overflow -o-ellipsis-lastline
  overflow hidden
  text-overflow ellipsis
  display -webkit-box
  -webkit-line-clamp 2
  -webkit-box-orient vertical
.recommend-item .price
  color #e04904
  padding 16rpx 0
.recommend-item .price::before
  content '¥'
.recommend-item .info
  position relative
.recommend-item .info .count::before
  content '已售'
.recommend-item .info .count
  position absolute
  right 0
  bottom 20rpx
  font-size 24rpx
  color #999999
.commiditys .hot
  background-color #fff
.commiditys .label
  height 84rpx
  width 100%
  line-height 84rpx
  padding 0 30rpx
  font-size 26rpx
  color #999999
.content .hot
  background-color #fff
.content .hot .label
  height 84rpx
  width 100%
  line-height 84rpx
  padding 0 30rpx
  font-size 26rpx
  color #999999
.hot .label
  width 750rpx
  border-bottom 1rpx #e5e5e5 solid
.hot-item
  width 50%
  box-sizing border-box
  padding 22rpx
  border-bottom 1rpx #e5e5e5 solid
  flex 1
  float left
.hot-item:nth-child(2n-1)
  border-right 1rpx #e5e5e5 solid
.hot-item .pic
  text-align center
.hot-item image
  width 335rpx
  height 335rpx
.hot-item .title
  height 72rpx
  display flex
  line-height 35rpx
  flex-direction column
  justify-content center
  text-overflow -o-ellipsis-lastline
  overflow hidden
  text-overflow ellipsis
  display -webkit-box
  -webkit-line-clamp 2
  -webkit-box-orient vertical
.hot-item .price
  color #e04904
  padding 16rpx 0
.hot-item .price::before
  content '¥'
.hot-item .info
  position relative
.hot-item .info .count::before
  content '已售'
.hot-item .info .count
  position absolute
  right 0
  bottom 20rpx
  font-size 24rpx
  color #999999
</style>

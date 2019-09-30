<template>
  <div class="container">
    <div class="search">
      <div class="input" @click="goSearch">
        <img class="icon" />
        <text class="txt">商品搜索, 共238款好物</text>
      </div>
    </div>
    <div class="catalog">
      <ul class="nav">
        <li class="item" v-for="(item, index) in classifys" :key="item.id" @click="goList(index)" :class="{'active':index==isList}">{{item.name}}</li>
      </ul>
      <div class="cate">
        <div url="url" class="banner">
          <img class="image" :src="lines.picUrl"/>
        </div>
        <text class="line"></text>
        <div class="hd">
          <text class="line"></text>
          <text class="txt">{{lines.name}}分类</text>
          <text class="line"></text>
        </div>
        <ul class="bd">
          <li  class="item" >
            <image class="icon"/>
            <text class="txt">居家</text>
          </li>
      </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      classifys:{},
      lines:{},
      datats:{},
      contents:[],
      isList:0,
      isId:1005000
    }
  },
  async mounted() {
    var reqTask = await wx.request({
      // url: 'https://test-api.firefac.cn/openapi/home/index',
      url: 'https://test-api.firefac.cn/openapi/catalog/index',
      data: {},
      // header: { 'content-type': 'application/json' },
      method: 'GET',
      success: res => {
        this.classifys = res.data.data.categoryList
        this.contents = res.data.data.currentSubCategory
        // this.datas = res.data.data
        this.lines = this.classifys[this.isList]
        this.isId = this.classifys[this.isList].id
      }
    })
  },
  methods: {
    goSearch() {
      wx.navigateTo({
        url: '/pages/Search/main'
      })
    },
    goList(index){
      this.isList = index,
      // this.isId = id,
      this.lines = this.classifys[this.isList]
      this.isId = this.classifys[this.isList].id
      console.log(this.lines)
      console.log(this.isId)
    }
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus'>
page
  height 100%
.container
  background #f9f9f9
  height 100%
  width 100%
  display flex
  flex-direction column
.search
  height 88rpx
  width 100%
  padding 0 30rpx
  background #fff
  display flex
  align-items center
  .input
    width 690rpx
    height 56rpx
    background #ededed
    border-radius 8rpx
    display flex
    align-items center
    justify-content center
  .icon
    background url('http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png') center no-repeat
    background-size 100%
    width 28rpx
    height 28rpx
  .txt
    height 42rpx
    line-height 42rpx
    color #666
    padding-left 10rpx
    font-size 30rpx
.catalog
  flex 1
  width 100%
  background #fff
  display flex
  border-top 1px solid #fafafa
  .nav 
    width: 162rpx
    height: 100%
    .item
      text-align: center
      line-height: 90rpx
      width: 162rpx
      height: 90rpx
      color: #333
      font-size: 28rpx
      border-left: 6rpx solid #fff
    .item.active 
      color: #158447
      font-size: 36rpx
      border-left: 6rpx solid #158447
  .cate 
    border-left: 1px solid #fafafa
    flex: 1
    height: 100%
    padding: 0 30rpx 0 30rpx
    .banner
      display: block
      height: 222rpx
      width: 100%
      position: relative
      .image 
        position: absolute
        top: 30rpx
        left: 0
        border-radius: 4rpx
        height: 192rpx
        width: 100%
      .txt 
        position: absolute
        top: 30rpx
        text-align: center
        color: #fff
        font-size: 28rpx
        left: 0
        height: 192rpx
        line-height: 192rpx
        width: 100%
    .hd
      height: 108rpx
      width: 100%
      display: flex
      justify-content: center
      align-items: center
      .txt 
        font-size: 24rpx
        text-align: center
        color: #333
        padding: 0 10rpx
        width: auto
      .line 
        width: 40rpx
        height: 1px
        background: #d9d9d9
    .hd 
      height: 108rpx
      width: 100%
      display: flex
      justify-content: center
      align-items: center
      .txt 
        font-size: 24rpx
        text-align: center
        color: #333
        padding: 0 10rpx
        width: auto
      .line 
        width: 40rpx
        height: 1px
        background: #d9d9d9
    .bd 
        height: auto
        width: 100%
        overflow: hidden
      .item 
        display: block
        float: left
        height: 216rpx
        width: 144rpx
        margin-right: 34rpx
        
        .icon 
          height: 144rpx
          width: 144rpx
        .txt 
          display: block
          text-align: center
          font-size: 24rpx
          color: #333
          height: 72rpx
          width: 144rpx
      .item:nth-child(3n+0)
        margin-right: 0
</style>

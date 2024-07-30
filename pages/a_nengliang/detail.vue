<template>
  <view class="container">
    <unicloud-db ref="udb" v-slot:default="{data, loading, error, options}" :options="options" :collection="collectionList" :getone="true" :manual="true">
      <view v-if="error">{{error.message}}</view>
      <view v-else-if="loading">
        <uni-load-more :contentText="loadMore" status="loading"></uni-load-more>
      </view>
      <view v-else-if="data">
        <view>
          <text>用户名</text>
          <text>{{data.user_id && data.user_id[0] && data.user_id[0].text}}</text>
        </view>
        <view>
          <text>appid_id</text>
          <text>{{data.appid_id && data.appid_id[0] && data.appid_id[0].text}}</text>
        </view>
        <view>
          <text>到期时间</text>
          <uni-dateformat :threshold="[0, 0]" :date="data.daoqi_date"></uni-dateformat>
        </view>
        <view>
          <text>chongdian</text>
          <text>{{data.chongdian == true ? '✅' : '❌'}}</text>
        </view>
        <view>
          <text>register_date</text>
          <uni-dateformat :threshold="[0, 0]" :date="data.register_date"></uni-dateformat>
        </view>
      </view>
    </unicloud-db>
    <view class="btns">
      <button type="primary" @click="handleUpdate">修改</button>
      <button type="warn" class="btn-delete" @click="handleDelete">删除</button>
    </view>
  </view>
</template>

<script>
  // 由schema2code生成，包含校验规则和enum静态数据
  import { enumConverter } from '../../js_sdk/validator/a_nengliang.js'
  const db = uniCloud.database()

  export default {
    data() {
      return {
        queryWhere: '',
        collectionList: [ db.collection('a_nengliang').field('user_id,appid_id,daoqi_date,chongdian,register_date').getTemp(),db.collection('uni-id-users').field('username as text, _id').getTemp(),db.collection('opendb-app-list').field('name as text, appid').getTemp() ],
        loadMore: {
          contentdown: '',
          contentrefresh: '',
          contentnomore: ''
        },
        options: {
          // 将scheme enum 属性静态数据中的value转成text
          ...enumConverter
        }
      }
    },
    onLoad(e) {
      this._id = e.id
    },
    onReady() {
      if (this._id) {
        this.collectionList = [ db.collection('a_nengliang').where('_id=="' + this._id + '"').field('user_id,appid_id,daoqi_date,chongdian,register_date').getTemp(),db.collection('uni-id-users').field('username as text, _id').getTemp(),db.collection('opendb-app-list').field('name as text, appid').getTemp() ]
      }
    },
    methods: {
      handleUpdate() {
        // 打开修改页面
        uni.navigateTo({
          url: './edit?id=' + this._id,
          events: {
            // 监听修改页面成功修改数据后, 刷新当前页面数据
            refreshData: () => {
              this.$refs.udb.loadData({
                clear: true
              })
            }
          }
        })
      },
      handleDelete() {
        this.$refs.udb.remove(this._id, {
          success: (res) => {
            // 删除数据成功后跳转到list页面
            uni.navigateTo({
              url: './list'
            })
          }
        })
      }
    }
  }
</script>

<style>
  .container {
    padding: 10px;
  }

  .btns {
    margin-top: 10px;
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    flex-direction: row;
  }

  .btns button {
    flex: 1;
  }

  .btn-delete {
    margin-left: 10px;
  }
</style>

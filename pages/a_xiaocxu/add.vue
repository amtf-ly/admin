<template>
  <view class="uni-container">
    <uni-forms ref="form" :model="formData" validateTrigger="bind">
      <uni-forms-item name="biaoti" label="标题">
        <uni-easyinput v-model="formData.biaoti" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="link" label="link">
        <uni-easyinput v-model="formData.link" trim="both"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="type" label="type">
        <uni-data-checkbox v-model="formData.type" :localdata="formOptions.type_localdata" trim="both"></uni-data-checkbox>
      </uni-forms-item>
      <uni-forms-item name="lanmu" label="栏目">
        <uni-data-checkbox v-model="formData.lanmu" :localdata="formOptions.lanmu_localdata" trim="both"></uni-data-checkbox>
      </uni-forms-item>
      <uni-forms-item name="xuhao" label="序号">
        <uni-number-box type="number" v-model="formData.xuhao"></uni-number-box>
      </uni-forms-item>
      <view class="uni-button-group">
        <button type="primary" class="uni-button" style="width: 100px;" @click="submit">提交</button>
        <navigator open-type="navigateBack" style="margin-left: 15px;">
          <button class="uni-button" style="width: 100px;">返回</button>
        </navigator>
      </view>
    </uni-forms>
  </view>
</template>

<script>
  import { validator } from '../../js_sdk/validator/a_xiaocxu.js';

  const db = uniCloud.database();
  const dbCmd = db.command;
  const dbCollectionName = 'a_xiaocxu';

  function getValidator(fields) {
    let result = {}
    for (let key in validator) {
      if (fields.includes(key)) {
        result[key] = validator[key]
      }
    }
    return result
  }

  

  export default {
    data() {
      let formData = {
        "biaoti": "",
        "link": "",
        "type": "link",
        "lanmu": "置顶",
        "xuhao": 9
      }
      return {
        formData,
        formOptions: {
          "type_localdata": [
            {
              "value": "link",
              "text": "link"
            },
            {
              "value": "button",
              "text": "button"
            },
            {
              "value": "其他",
              "text": "其他"
            }
          ],
          "lanmu_localdata": [
            {
              "value": "置顶",
              "text": "置顶"
            },
            {
              "value": "最新消息",
              "text": "最新消息"
            },
            {
              "value": "广告",
              "text": "广告"
            },
            {
              "value": "其他",
              "text": "其他"
            }
          ]
        },
        rules: {
          ...getValidator(Object.keys(formData))
        }
      }
    },
    onReady() {
      this.$refs.form.setRules(this.rules)
    },
    methods: {
      
      /**
       * 验证表单并提交
       */
      submit() {
        uni.showLoading({
          mask: true
        })
        this.$refs.form.validate().then((res) => {
          return this.submitForm(res)
        }).catch(() => {
        }).finally(() => {
          uni.hideLoading()
        })
      },

      /**
       * 提交表单
       */
      submitForm(value) {
        // 使用 clientDB 提交数据
        return db.collection(dbCollectionName).add(value).then((res) => {
          uni.showToast({
            title: '新增成功'
          })
          this.getOpenerEventChannel().emit('refreshData')
          setTimeout(() => uni.navigateBack(), 500)
        }).catch((err) => {
          uni.showModal({
            content: err.message || '请求服务失败',
            showCancel: false
          })
        })
      }
    }
  }
</script>

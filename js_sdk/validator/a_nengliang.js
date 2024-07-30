// 表单校验规则由 schema2code 生成，不建议直接修改校验规则，而建议通过 schema2code 生成, 详情: https://uniapp.dcloud.net.cn/uniCloud/schema


const validator = {
  "user_id": {
    "rules": [
      {
        "required": true
      },
      {
        "format": "string"
      }
    ],
    "title": "用户名",
    "defaultValue": {
      "$env": "uid"
    },
    "label": "用户名"
  },
  "appid_id": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "title": "appid_id",
    "label": "appid_id"
  },
  "chongdian": {
    "rules": [
      {
        "format": "bool"
      }
    ],
    "title": "充电",
    "defaultValue": false,
    "label": "充电"
  },
  "gengshangcenglou": {
    "rules": [
      {
        "format": "bool"
      }
    ],
    "title": "更上层楼",
    "defaultValue": false,
    "label": "更上层楼"
  },
  "chongdianjine": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "title": "充电金额",
    "defaultValue": 8800,
    "label": "充电金额"
  },
  "tuiguanggongxian": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "title": "推广贡献值",
    "defaultValue": 0,
    "label": "推广贡献值"
  },
  "daoqi_date": {
    "rules": [
      {
        "format": "timestamp"
      }
    ],
    "title": "到期时间",
    "defaultValue": {
      "$env": "now"
    },
    "label": "到期时间"
  }
}

const enumConverter = {}

function filterToWhere(filter, command) {
  let where = {}
  for (let field in filter) {
    let { type, value } = filter[field]
    switch (type) {
      case "search":
        if (typeof value === 'string' && value.length) {
          where[field] = new RegExp(value)
        }
        break;
      case "select":
        if (value.length) {
          let selectValue = []
          for (let s of value) {
            selectValue.push(command.eq(s))
          }
          where[field] = command.or(selectValue)
        }
        break;
      case "range":
        if (value.length) {
          let gt = value[0]
          let lt = value[1]
          where[field] = command.and([command.gte(gt), command.lte(lt)])
        }
        break;
      case "date":
        if (value.length) {
          let [s, e] = value
          let startDate = new Date(s)
          let endDate = new Date(e)
          where[field] = command.and([command.gte(startDate), command.lte(endDate)])
        }
        break;
      case "timestamp":
        if (value.length) {
          let [startDate, endDate] = value
          where[field] = command.and([command.gte(startDate), command.lte(endDate)])
        }
        break;
    }
  }
  return where
}

export { validator, enumConverter, filterToWhere }

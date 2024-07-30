// 表单校验规则由 schema2code 生成，不建议直接修改校验规则，而建议通过 schema2code 生成, 详情: https://uniapp.dcloud.net.cn/uniCloud/schema


const validator = {
  "biaoti": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "title": "标题",
    "label": "标题"
  },
  "link": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "title": "link",
    "label": "link"
  },
  "type": {
    "rules": [
      {
        "format": "string"
      },
      {
        "range": [
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
        ]
      }
    ],
    "title": "type",
    "defaultValue": "link",
    "label": "type"
  },
  "lanmu": {
    "rules": [
      {
        "format": "string"
      },
      {
        "range": [
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
      }
    ],
    "title": "栏目",
    "defaultValue": "置顶",
    "label": "栏目"
  },
  "xuhao": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "title": "序号",
    "defaultValue": 9,
    "label": "序号"
  }
}

const enumConverter = {
  "type_valuetotext": {
    "link": "link",
    "button": "button",
    "其他": "其他"
  },
  "lanmu_valuetotext": {
    "置顶": "置顶",
    "最新消息": "最新消息",
    "广告": "广告",
    "其他": "其他"
  }
}

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

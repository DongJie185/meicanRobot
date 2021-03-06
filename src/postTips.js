import config from '../config'
import post from '../utils/fetch'

export default function postTips (text) {
  // 大群
  if (process.env.NODE_ENV === 'prod') {
    postAction(config.JARVIS, text)
  }
  postAction(config.LQS469_ROBOT, text)
}

function postAction (url, text) {
  post(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      actionCard: {
        title: '可以订餐了亲～ ',
        text:
          '![screenshot](http://lorempixel.com/400/200)' +
          '\n### 可以订餐了亲～ \n' +
          '---\n' +
          text,
        hideAvatar: '0',
        btnOrientation: '0',
        btns: [
          {
            title: '在线点餐(手机钉钉中打开)',
            actionURL: 'https://meican.com/preorder'
          }
        ]
      },
      msgtype: 'actionCard'
    })
  }).then(res => {
    console.log(res)
  })
}

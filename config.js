// 配置文件

const basic = { // 基础设置
    favicon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👻</text></svg>', // 页面图标
    title: '(～￣▽￣)～', // 页面标题
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=1625468474&spec=640&img_type=jpg', // 头像 URL
    name: '川岛莉莉子', // 头像下的昵称
    sign: ' ( •̀ ω •́ )✧', // 个性签名或提示文字，可使用 HTML 格式
    user_page: 'https://sherrys7.github.io', // 点击头像或名字时跳转的链接，留空或删除则不跳转
    footer: '', // 页脚文字，可使用 HTML 格式
    uri_redirect: false // 若收款码 URL 是网址，是否直接跳转而不显示二维码
}

const theme = { // 主题设置
    page_bg: '#d7f3f8', // 网页背景（十六进制，或图片 URL）
    card_bg: '#ffffffcc', // 卡片背景色（十六进制，可带透明度，不能是 URL）
    qrcode_bg: '#eaeffde6', // 二维码背景色（十六进制，可带透明度，不能是 URL）
    qrcode_fg: '#335eea' // 二维码颜色（十六进制，可带透明度，不能是 URL）
}

const tools = { // 右上角小工具设置
    dl_btn: true, // 二维码下载
    badge_generator: true // 徽章生成器
}

const urls = [ // 付款方式列表
    {
        name: '支付宝', // 名称
        ua: 'Alipay', // User-Agent 正则表达式
        addr: 'https://qr.alipay.com/fkx19679b5cgqbmv53om170' // 收款码 URL
    },
    {
        name: '微信',
        ua: 'MicroMessenger\/',
        img: 'wechat.jpg' // 使用 img 而非 addr 参数以使用小程序码
    },
    {
        name: 'QQ', 
        ua: 'QQ\/',
        img: 'qqsk.png'
    }
]

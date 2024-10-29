import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "Hakutaku_Air",
      children: [
        {
          text: "用户端使用教程",
          link: "/Air/JC/UserCenter.md",
        },
        {
          text: "获取框架",
          link: "/Air/JC/GetKJ.md",
        },
        {
          text: "获取充值卡",
          link: "/Air/JC/GetCadr.md",
        },
        {
          text: "注册账号并登录",
          link: "/Air/JC/LoginAndregeist.md",
        },
        {
          text: "常见问题与解决方案",
          link: "/Air/JC/FAQ.md",
        },
      ],
    },
  ],
});

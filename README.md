# Dokploy 简体中文汉化

通过 Tampermonkey 在浏览器端汉化 Dokploy 管理面板，不修改 Dokploy 服务端文件。

当前脚本基于 Dokploy `v0.30.2` 制作。

## 安装

1. 安装 [Tampermonkey](https://www.tampermonkey.net/)
2. 点击[安装 Dokploy 汉化脚本](https://raw.githubusercontent.com/f3liiix/dokploy-zh/main/dokploy-zh.user.js)
3. 在 Tampermonkey 安装页面中确认安装
4. 打开或刷新 Dokploy 面板

## 域名匹配

脚本默认只汉化使用 HTTPS 且主机名以 `d.` 开头的页面，例如：

```text
https://d.example.com/
https://d.example.co.uk/dashboard/home
```

以下地址默认不会汉化：

```text
http://d.example.com/
https://panel.example.com/
https://example.com/
```

脚本通过两层规则限制运行范围：

```js
// @match        https://*/*
```

```js
if (!location.hostname.toLowerCase().startsWith("d.")) return;
```

非 `d.` 域名会立即退出，不会创建翻译词典或监听页面变化。

### 使用其他域名

例如 Dokploy 地址为 `https://panel.example.com/`，需要同时修改以下两处：

```js
// @match        https://panel.example.com/*
```

```js
if (location.hostname !== "panel.example.com") return;
```

保存脚本并刷新页面即可生效。

## 更新

脚本已配置自动更新地址。发布新版本后，Tampermonkey 会按照扩展设置的检查周期自动更新。

也可以在 Tampermonkey 管理面板中手动执行“检查用户脚本更新”。

## 反馈

发现漏译或翻译不准确时，请提交 [Issue](https://github.com/f3liiix/dokploy-zh/issues)。

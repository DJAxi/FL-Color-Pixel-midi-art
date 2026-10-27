---
AIGC:
    Label: "1"
    ContentProducer: 001191440300708461136T1XGW3
    ProduceID: 0a71da3aae3ac49f966b5b87b1beedfd_54fd47f6d1cc11f1a301525400cd780f
    ReservedCode1: KDvqhzjsC6x7DiK13gXXl4G0EWdnW39nBQGyldE4yv+dBj4wwzGhSvpWiSdZPcV5Q1IcJRFQItEiTtdzdgicLWxMDLlwNp65VInj+Yg9EMMmsjtpkV2yC3uZWgjfnDm0HPlhrgb7UfD46PV/JIA9l0L/TDcKkIZlsPE5BVfgFCDZnS74xajgxzD1ppA=
    ContentPropagator: 001191440300708461136T1XGW3
    PropagateID: 0a71da3aae3ac49f966b5b87b1beedfd_54fd47f6d1cc11f1a301525400cd780f
    ReservedCode2: KDvqhzjsC6x7DiK13gXXl4G0EWdnW39nBQGyldE4yv+dBj4wwzGhSvpWiSdZPcV5Q1IcJRFQItEiTtdzdgicLWxMDLlwNp65VInj+Yg9EMMmsjtpkV2yC3uZWgjfnDm0HPlhrgb7UfD46PV/JIA9l0L/TDcKkIZlsPE5BVfgFCDZnS74xajgxzD1ppA=
---

# 彩色音符画 · FL Pixel MIDI Art

把任意图片变成 FL Studio 钢琴卷帘里的彩色像素画 MIDI。
An image-to-FL-Studio pixel art MIDI converter. Drop in an image, get a colorful pixel-art MIDI.

全程本地处理，图片不会上传到任何服务器。Everything runs locally in your browser; no image is ever uploaded.

## 在线体验 / Live Demo

开启 GitHub Pages 后，通过以下地址在线使用：

```
https://<你的用户名>.github.io/fl-pixel-midi-art/
```

也可以直接下载本仓库，双击 `index.html` 在浏览器中打开使用（无需安装任何东西）。

## 功能特性 / Features

- 图片上传即转换：支持 PNG / JPG / WebP，拖拽或点击上传
- 自动提取 16 色自适应调色板（中位切割算法）
- 可调网格宽高（最高 132 行）、亮度 / 饱和度 / 对比度
- 4 种老游戏机风格抖动降色：2×2 / 4×4 有序抖动、蓝噪声、误差扩散
- 钢琴卷帘实时预览，支持独奏单通道、纵向平移
- 一键导出：16 通道 MIDI、FL Studio 调色盘 .ncp、ZIP 打包（含 .mid + .ncp）
- 中 / 英文界面，深色 / 浅色主题
- 纯前端零依赖，单页应用，可离线使用

## 使用方法 / How to Use

1. 上传一张图片；
2. 在「调整像素画」页设置网格大小、亮度 / 饱和度 / 对比度与抖动模式；
3. 在「预览 MIDI」页检查钢琴卷帘效果，可独奏某个颜色通道；
4. 在「导出」页选择导出方式：

| 导出项 | 说明 |
| ------ | ---- |
| 导出单个 16 通道 MIDI | 每个颜色对应一个 MIDI 通道，直接可用 |
| 导出调色盘 .ncp | FL Studio 音符颜色预设，导入后音符颜色与画面对应 |
| 一键打包 ZIP | 同时打包 .mid 与 .ncp，方便分发 |

**FL Studio 导入方法**：将 `.mid` 直接拖入钢琴卷帘窗口；再点击钢琴卷帘窗口左上角三角 > 视图 > 音符颜色 > 浏览预设值，导入 `.ncp` 文件，即可看到彩色像素画。

## 项目结构 / Structure

```
fl-pixel-midi-art/
├── index.html       # 页面入口（双击即可在浏览器打开）
├── css/
│   └── style.css    # 全部样式（Material Design 3 主题）
├── js/
│   └── app.js       # 全部逻辑（图片处理 / MIDI 生成 / ZIP 打包）
├── README.md        # 项目说明
└── LICENSE          # 开源协议（MIT）
```

## 技术原理 / Tech Notes

- 采样：等比缩放原图后按网格中心点采样
- 调色板：中位切割（Median Cut）提取 16 色
- 降色：Bayer 有序抖动 / 蓝噪声 / Floyd–Steinberg 误差扩散
- MIDI：PPQN 480，每像素占 1 拍（480 tick），每小节约 4 像素；16 通道对应 16 色
- 打包：纯 JS 手写 ZIP（STORE 存储）+ CRC32

## 开源协议 / License

[MIT](LICENSE)
*（内容由AI生成，仅供参考）*

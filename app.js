
"use strict";

/* ========== i18n 国际化 ========== */
var LANG_KEY = 'md-lang';
var I18N = {
  zh: {
    doc_title: '图片转 FL Studio 像素画 MIDI 工具（Material 版）',
    appbar_badge: 'MIDI',
    appbar_title: 'FL彩色MIDI像素画工具',
    theme_toggle_title: '切换深色/浅色模式',
    theme_toggle_aria: '切换深色/浅色模式',
    step1_title: '请上传图片',
    upload_big_hint: '点击选择图片，或将图片拖到此处',
    upload_sub_hint: '支持 PNG / JPG / WebP 等常见格式，全程本地处理，不会上传到任何服务器',
    step2_title: '调整像素画',
    param_title: '参数设置',
    param_grid_w: '网格宽度',
    param_grid_h: '网格高度（上限 132）',
    param_bright: '亮度',
    param_sat: '饱和度',
    param_cont: '对比度',
    param_dither: '抖动',
    dither_none: '无',
    dither_bayer2: '2×2 有序抖动',
    dither_bayer4: '4×4 有序抖动',
    dither_blue: '蓝噪声',
    dither_fs: '误差扩散',
    step2_hint: '将从图片中自适应提取16种颜色',
    preview_title: '像素画预览',
    step3_title: '预览MIDI',
    piano_controls_title: '卷帘控制',
    param_offset: '纵向平移',
    btn_offset_down: '下移 -1',
    btn_offset_up: '上移 +1',
    offset_range_label: '范围 0 ~',
    btn_solo_all: '显示全部通道',
    piano_title: '钢琴卷帘仿真（固定视野，容器内缩放/平移）',
    piano_range_hint: '音域为C0到B10,可拖动滚动条查看全部内容。',
    export_title: '导出操作',
    btn_export_single: '导出单个 16 通道 MIDI',
    btn_export_ncp: '导出调色盘 .ncp',
    btn_export_zip: '一键打包 ZIP',
    export_ncp_hint: '请将.mid直接拖入钢琴卷帘，再点击钢琴卷帘窗口左上角三角>视图>音符颜色>浏览预设值，导入.ncp文件。',
    swatches_title: '颜色（按 FL 钢琴卷帘颜色编辑器顺序）',
    btn_prev: '返回',
    btn_next: '下一步',
    btn_next_export: '导出',
    alert_read_fail: '读取文件失败，请换一张图片重试。',
    alert_img_invalid: '无法解析该图片，请确认文件是有效的图片格式（PNG / JPG / WebP 等）。',
    swatch_color_label: '颜色 {n}',
    btn_solo: '独奏',
    btn_unsolo: '取消独奏',
    btn_copy: '复制',
    copy_text_midi_ch: 'MIDI 通道: {n}',
    copy_text_fl_ch: 'FL 通道: {n}',
    alert_copy_fail: '复制失败，请手动复制：{text}',
    copy_success: '已复制',
    alert_upload_first: '请先上传图片。',
    filename_midi: '像素MIDI画_单文件.mid',
    filename_ncp: '调色盘.ncp',
    filename_zip: '像素MIDI画_打包.zip'
  },
  en: {
    doc_title: 'Image to FL Studio Pixel Art MIDI Tool',
    appbar_badge: 'MIDI',
    appbar_title: 'FL Color Pixel Art MIDI Tool',
    theme_toggle_title: 'Toggle dark/light mode',
    theme_toggle_aria: 'Toggle dark/light mode',
    step1_title: 'Please upload an image',
    upload_big_hint: 'Click to select an image, or drag and drop it here',
    upload_sub_hint: 'Supports common formats such as PNG / JPG / WebP. Everything is processed locally and never uploaded to any server',
    step2_title: 'Adjust the pixel art',
    param_title: 'Parameters',
    param_grid_w: 'Grid width',
    param_grid_h: 'Grid height (max 132)',
    param_bright: 'Brightness',
    param_sat: 'Saturation',
    param_cont: 'Contrast',
    param_dither: 'Dithering',
    dither_none: 'None',
    dither_bayer2: '2×2 Ordered',
    dither_bayer4: '4×4 Ordered',
    dither_blue: 'Blue Noise',
    dither_fs: 'Error Diffusion',
    step2_hint: '16 colors will be automatically extracted from the image',
    preview_title: 'Pixel art preview',
    step3_title: 'Preview MIDI',
    piano_controls_title: 'Piano roll controls',
    param_offset: 'Vertical offset',
    btn_offset_down: 'Move down -1',
    btn_offset_up: 'Move up +1',
    offset_range_label: 'Range 0 ~',
    btn_solo_all: 'Show all channels',
    piano_title: 'Piano roll simulation (fixed viewport, zoom/pan within container)',
    piano_range_hint: 'The pitch range is C0 to B10; drag the scroll bar to view all content.',
    export_title: 'Export',
    btn_export_single: 'Export a single 16-channel MIDI',
    btn_export_ncp: 'Export palette .ncp',
    btn_export_zip: 'One-click ZIP package',
    export_ncp_hint: 'Drag the .mid file directly into the piano roll, then click the triangle at the top-left corner of the piano roll window > View > Note Colors > Browse presets, and import the .ncp file.',
    swatches_title: 'Colors (in FL piano roll color editor order)',
    btn_prev: 'Back',
    btn_next: 'Next',
    btn_next_export: 'Export',
    alert_read_fail: 'Failed to read the file. Please try another image.',
    alert_img_invalid: 'Could not parse the image. Please make sure the file is a valid image format (PNG / JPG / WebP, etc.).',
    swatch_color_label: 'Color {n}',
    btn_solo: 'Solo',
    btn_unsolo: 'Unsolo',
    btn_copy: 'Copy',
    copy_text_midi_ch: 'MIDI channel: {n}',
    copy_text_fl_ch: 'FL channel: {n}',
    alert_copy_fail: 'Copy failed, please copy manually: {text}',
    copy_success: 'Copied',
    alert_upload_first: 'Please upload an image first',
    filename_midi: 'PixelMIDIArt_Single.mid',
    filename_ncp: 'Palette.ncp',
    filename_zip: 'PixelMIDIArtPack.zip'
  }
};
var currentLang = (function () {
  try {
    var s = localStorage.getItem(LANG_KEY);
    if (s === 'zh' || s === 'en') { return s; }
  } catch (e) {}
  var nav = (navigator.language || navigator.userLanguage || '').toLowerCase().replace(/_/g, '-');
  return (nav === 'zh' || nav.indexOf('zh-cn') === 0 || nav.indexOf('zh-hans') === 0) ? 'zh' : 'en';
})();

function t(key, params) {
  var dict = I18N[currentLang] || I18N.zh;
  var s = (key in dict) ? dict[key] : key;
  if (params) {
    for (var k in params) {
      if (Object.prototype.hasOwnProperty.call(params, k)) {
        s = s.split('{' + k + '}').join(String(params[k]));
      }
    }
  }
  return s;
}

/* 颜色标签：译文含 {n} 序号，渲染时把末尾数字加粗（兼容中英文） */
function swatchLabel(n) {
  var s = t('swatch_color_label', { n: n });
  var m = s.match(/^(.*?)(\d+)$/);
  return m ? m[1] + '<b>' + m[2] + '</b>' : s;
}

function applyI18n() {
  document.title = t('doc_title');
  var els = document.querySelectorAll('[data-i18n]');
  for (var i = 0; i < els.length; i++) {
    var el = els[i];
    el.textContent = t(el.getAttribute('data-i18n'));
  }
  var tt = document.getElementById('themeToggle');
  if (tt) { tt.title = t('theme_toggle_title'); tt.setAttribute('aria-label', t('theme_toggle_aria')); }
  var next = document.getElementById('btnNext');
  if (next) { next.textContent = (currentStep === 3) ? t('btn_next_export') : t('btn_next'); }
  if (palette && palette.length) {
    var w3 = document.getElementById('swatchList3');
    if (w3) { renderSwatches3(); }
    var w4 = document.getElementById('swatchList4');
    if (w4) { renderSwatches4(); }
  }
  var menu = document.getElementById('langMenu');
  if (menu) {
    var items = menu.querySelectorAll('.lang-item');
    for (var j = 0; j < items.length; j++) {
      items[j].classList.toggle('active', items[j].getAttribute('data-lang') === currentLang);
    }
  }
}

function setLang(lang) {
  if (lang !== 'zh' && lang !== 'en') { return; }
  currentLang = lang;
  try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
  applyI18n();
}

function bindLangToggle() {
  var btn = document.getElementById('langToggle');
  var menu = document.getElementById('langMenu');
  if (!btn || !menu) { return; }
  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    menu.hidden = !menu.hidden;
  });
  var items = menu.querySelectorAll('.lang-item');
  for (var i = 0; i < items.length; i++) {
    (function (it) {
      it.addEventListener('click', function (e) {
        e.stopPropagation();
        setLang(it.getAttribute('data-lang'));
        menu.hidden = true;
      });
    })(items[i]);
  }
  document.addEventListener('click', function (e) {
    var wrap = btn.parentNode;
    if (wrap && !wrap.contains(e.target)) { menu.hidden = true; }
  });
}

/* ========== 全局状态 ========== */
var midCanvas = null;      // 中间画布（最长边 <= 2048）
var midCtx = null;
var srcImg = null;         // 原始图片 Image
var params = { w: 128, h: 128, bright: 0, sat: 0, cont: 0, offset: 0, zoom: 6, solo: -1, dither: 'none' };
var palette = [];          // [{r,g,b,hex}]
var gridIdx = null;        // Uint8Array: 每个格子的色板索引
var currentW = 0, currentH = 0;
var lastPaletteKey = '';
var currentStep = 1;

/* ========== 步骤切换（向导式：右下角返回 / 下一步） ========== */
function showStep(n) {
  currentStep = n;
  var secs = document.querySelectorAll('.step-section');
  for (var i = 0; i < secs.length; i++) { secs[i].style.display = 'none'; }
  document.getElementById('step' + n).style.display = 'flex';
  var prev = document.getElementById('btnPrev');
  var next = document.getElementById('btnNext');
  if (prev) { prev.disabled = (n === 1); prev.style.display = (n === 1) ? 'none' : ''; }
  if (next) {
    next.disabled = (n === 4);
    next.textContent = (n === 3) ? t('btn_next_export') : t('btn_next');
    next.style.display = (n === 1 || n === 4) ? 'none' : '';
  }
  var nav = document.getElementById('wizardNav');
  if (nav) { nav.style.display = (n === 1) ? 'none' : ''; }
  if (n === 3) { updatePaletteUI(); drawPiano(); }
  if (n === 4) { updatePaletteUI(); }
}

/* ========== 工具函数 ========== */
function toHex(r, g, b) {
  function h2(v) { var s = v.toString(16).toUpperCase(); return s.length < 2 ? '0' + s : s; }
  return '#' + h2(r) + h2(g) + h2(b);
}
/* 统一输出标准 6 位 #RRGGBB：若意外出现 8 位 #AARRGGBB（Alpha 在前），剥离前两位 AA，仅保留 RRGGBB */
function stdHex(h) {
  if (/^#[0-9A-Fa-f]{8}$/.test(h)) { return '#' + h.substr(3); }
  if (/^#[0-9A-Fa-f]{6}$/.test(h)) { return h; }
  return '#000000';
}
function clamp255(v) { return v < 0 ? 0 : (v > 255 ? 255 : Math.round(v)); }

/* ========== 第 1 步：上传图片 ========== */
function bindUpload() {
  var zone = document.getElementById('dropZone');
  var input = document.getElementById('fileInput');
  zone.addEventListener('click', function () { input.click(); });
  zone.addEventListener('dragover', function (e) { e.preventDefault(); zone.classList.add('dragover'); });
  zone.addEventListener('dragleave', function () { zone.classList.remove('dragover'); });
  zone.addEventListener('drop', function (e) {
    e.preventDefault();
    zone.classList.remove('dragover');
    var files = e.dataTransfer.files;
    if (files && files.length > 0) { handleFile(files[0]); }
  });
  input.addEventListener('change', function () {
    if (input.files && input.files.length > 0) { handleFile(input.files[0]); }
  });
}

function handleFile(file) {
  if (!file) { return; }
  var reader = new FileReader();
  reader.onload = function (e) { loadImage(e.target.result); };
  reader.onerror = function () { alert(t('alert_read_fail')); };
  reader.readAsDataURL(file);
}

function loadImage(dataUrl) {
  var img = new Image();
  img.onload = function () {
    srcImg = img;
    prepareMidCanvas();
    params.w = Math.min(128, img.naturalWidth || img.width);
    params.h = Math.min(128, img.naturalHeight || img.height);
    if (params.w < 1) { params.w = 1; }
    if (params.h < 1) { params.h = 1; }
    if (params.h > 132) { params.h = 132; }
    syncSliders();
    regenerate();
    showStep(2);
  };
  img.onerror = function () { alert(t('alert_img_invalid')); };
  img.src = dataUrl;
}

/* 中间画布：先把原图等比缩到最长边 <= 2048 */
function prepareMidCanvas() {
  var iw = srcImg.naturalWidth || srcImg.width;
  var ih = srcImg.naturalHeight || srcImg.height;
  var scale = Math.min(1, 2048 / Math.max(iw, ih));
  var mw = Math.max(1, Math.round(iw * scale));
  var mh = Math.max(1, Math.round(ih * scale));
  midCanvas = document.createElement('canvas');
  midCanvas.width = mw;
  midCanvas.height = mh;
  midCtx = midCanvas.getContext('2d');
  midCtx.drawImage(srcImg, 0, 0, mw, mh);
}

/* ========== 滑块绑定 ========== */
function syncSliders() {
  document.getElementById('wSlider').value = params.w;
  document.getElementById('hSlider').value = params.h;
  document.getElementById('wVal').textContent = params.w;
  document.getElementById('hVal').textContent = params.h;
}

function bindSliders() {
  var ids = ['wSlider', 'hSlider', 'brightSlider', 'satSlider', 'contSlider'];
  var valIds = { wSlider: 'wVal', hSlider: 'hVal', brightSlider: 'brightVal', satSlider: 'satVal', contSlider: 'contVal' };
  for (var i = 0; i < ids.length; i++) {
    (function (id) {
      var el = document.getElementById(id);
      el.addEventListener('input', function () {
        var v = parseInt(el.value, 10);
        document.getElementById(valIds[id]).textContent = v;
        if (id === 'wSlider') { params.w = v; }
        else if (id === 'hSlider') { params.h = v; }
        else if (id === 'brightSlider') { params.bright = v; }
        else if (id === 'satSlider') { params.sat = v; }
        else if (id === 'contSlider') { params.cont = v; }
        regenerate();
      });
    })(ids[i]);
  }

  var dSel = document.getElementById('ditherSel');
  if (dSel) {
    dSel.value = params.dither;
    dSel.addEventListener('change', function () {
      params.dither = dSel.value;
      regenerate();
    });
  }

  document.getElementById('btnOffsetDown').addEventListener('click', function () { nudgeOffset(-1); });
  document.getElementById('btnOffsetUp').addEventListener('click', function () { nudgeOffset(1); });
  document.getElementById('btnSoloAll').addEventListener('click', function () {
    params.solo = -1;
    updatePaletteUI();
    drawPiano();
  });
  document.getElementById('btnPrev').addEventListener('click', function () {
    if (currentStep > 1) {
      if (currentStep === 2) { resetUpload(); }
      showStep(currentStep - 1);
    }
  });
  document.getElementById('btnNext').addEventListener('click', function () { if (currentStep < 4) { showStep(currentStep + 1); } });
}

/* 返回第一步时清空上传状态，恢复到未上传 */
function resetUpload() {
  srcImg = null;
  midCanvas = null; midCtx = null;
  palette = [];
  gridIdx = null;
  currentW = 0; currentH = 0;
  lastPaletteKey = '';
  params.w = 128; params.h = 128;
  params.bright = 0; params.sat = 0; params.cont = 0;
  params.offset = 0; params.zoom = 6; params.solo = -1; params.dither = 'none';
  var dSelR = document.getElementById('ditherSel'); if (dSelR) { dSelR.value = 'none'; }
  syncSliders();
  var m;
  m = document.getElementById('brightVal'); if (m) { m.textContent = 0; }
  m = document.getElementById('satVal'); if (m) { m.textContent = 0; }
  m = document.getElementById('contVal'); if (m) { m.textContent = 0; }
  m = document.getElementById('offsetVal'); if (m) { m.textContent = 0; }
  m = document.getElementById('offsetMaxVal'); if (m) { m.textContent = 0; }
  var f = document.getElementById('fileInput'); if (f) { f.value = ''; }
  var pc = document.getElementById('previewCanvas');
  if (pc) { pc.width = 0; pc.height = 0; }
  var pn = document.getElementById('pianoCanvas');
  if (pn) { pn.width = 0; pn.height = 0; }
  var s3 = document.getElementById('swatchList3'); if (s3) { s3.innerHTML = ''; }
  var s4 = document.getElementById('swatchList4'); if (s4) { s4.innerHTML = ''; }
}

function nudgeOffset(d) {
  var max = Math.max(0, 132 - currentH);
  var v = params.offset + d;
  if (v < 0) { v = 0; }
  if (v > max) { v = max; }
  params.offset = v;
  document.getElementById('offsetVal').textContent = v;
  drawPiano();
}

function updateOffsetRange() {
  var max = Math.max(0, 132 - currentH);
  if (params.offset > max) { params.offset = max; }
  if (params.offset < 0) { params.offset = 0; }
  document.getElementById('offsetVal').textContent = params.offset;
  document.getElementById('offsetMaxVal').textContent = max;
}

/* 小节数：每列 480 tick，每小节 1920 tick（PPQN 480） */
function updateBarCount() {
  var bars = currentW > 0 ? Math.ceil((currentW * 480) / 1920) : 0;
  var el = document.getElementById('barCount');
  if (el) { el.textContent = bars; }
}

/* ========== 核心：采样 / 调整 / 中位切割 / 最近色 ========== */
function sampleGrid(w, h) {
  var mw = midCanvas.width, mh = midCanvas.height;
  var d = midCtx.getImageData(0, 0, mw, mh).data;
  var out = new Uint8ClampedArray(w * h * 3);
  for (var r = 0; r < h; r++) {
    var sy = Math.min(mh - 1, Math.floor((r + 0.5) * mh / h));
    for (var c = 0; c < w; c++) {
      var sx = Math.min(mw - 1, Math.floor((c + 0.5) * mw / w));
      var si = (sy * mw + sx) * 4;
      var oi = (r * w + c) * 3;
      out[oi] = d[si];
      out[oi + 1] = d[si + 1];
      out[oi + 2] = d[si + 2];
    }
  }
  return out;
}

function adjustColor(r, g, b, bright, sat, cont) {
  var nr = r + bright / 100 * 255;
  var ng = g + bright / 100 * 255;
  var nb = b + bright / 100 * 255;
  var cf = (259 * (cont + 255)) / (255 * (259 - cont));
  nr = cf * (nr - 128) + 128;
  ng = cf * (ng - 128) + 128;
  nb = cf * (nb - 128) + 128;
  var s = 1 + sat / 100;
  var gray = 0.299 * nr + 0.587 * ng + 0.114 * nb;
  nr = gray + (nr - gray) * s;
  ng = gray + (ng - gray) * s;
  nb = gray + (nb - gray) * s;
  return [clamp255(nr), clamp255(ng), clamp255(nb)];
}

function colorRange(bk) {
  var minR = 255, maxR = 0, minG = 255, maxG = 0, minB = 255, maxB = 0;
  for (var i = 0; i < bk.length; i++) {
    var c = bk[i];
    if (c.r < minR) { minR = c.r; } if (c.r > maxR) { maxR = c.r; }
    if (c.g < minG) { minG = c.g; } if (c.g > maxG) { maxG = c.g; }
    if (c.b < minB) { minB = c.b; } if (c.b > maxB) { maxB = c.b; }
  }
  return Math.max(maxR - minR, maxG - minG, maxB - minB);
}

function rangeChannel(bk) {
  var minR = 255, maxR = 0, minG = 255, maxG = 0, minB = 255, maxB = 0;
  for (var i = 0; i < bk.length; i++) {
    var c = bk[i];
    if (c.r < minR) { minR = c.r; } if (c.r > maxR) { maxR = c.r; }
    if (c.g < minG) { minG = c.g; } if (c.g > maxG) { maxG = c.g; }
    if (c.b < minB) { minB = c.b; } if (c.b > maxB) { maxB = c.b; }
  }
  var dr = maxR - minR, dg = maxG - minG, db = maxB - minB;
  if (dr >= dg && dr >= db) { return 'r'; }
  if (dg >= db) { return 'g'; }
  return 'b';
}

function medianCut(px, w, h, maxColors) {
  var counts = new Map();
  var n = w * h;
  for (var i = 0; i < n; i++) {
    var o = i * 3;
    var key = (px[o] << 16) | (px[o + 1] << 8) | px[o + 2];
    counts.set(key, (counts.get(key) || 0) + 1);
  }
  var colors = [];
  counts.forEach(function (cnt, key) {
    colors.push({ r: (key >> 16) & 255, g: (key >> 8) & 255, b: key & 255, count: cnt });
  });
  if (colors.length === 0) { colors.push({ r: 0, g: 0, b: 0, count: 1 }); }
  if (colors.length <= 1) {
    var c0 = colors[0];
    return [{ r: c0.r, g: c0.g, b: c0.b, hex: toHex(c0.r, c0.g, c0.b) }];
  }
  var buckets = [colors];
  while (buckets.length < maxColors) {
    var bi = -1, bestRange = -1;
    for (var b = 0; b < buckets.length; b++) {
      var bk = buckets[b];
      if (bk.length < 2) { continue; }
      var rng = colorRange(bk);
      if (rng > bestRange) { bestRange = rng; bi = b; }
    }
    if (bi < 0) { break; }
    var bucket = buckets[bi];
    var ch = rangeChannel(bucket);
    bucket.sort(function (a, b2) { return a[ch] - b2[ch]; });
    var mid = Math.floor(bucket.length / 2);
    var left = bucket.slice(0, mid);
    var right = bucket.slice(mid);
    if (left.length === 0 || right.length === 0) { break; }
    buckets.splice(bi, 1, left, right);
  }
  var out = [];
  for (var k = 0; k < buckets.length; k++) {
    var bk2 = buckets[k];
    var sr = 0, sg = 0, sb = 0, sc = 0;
    for (var m = 0; m < bk2.length; m++) {
      sr += bk2[m].r * bk2[m].count;
      sg += bk2[m].g * bk2[m].count;
      sb += bk2[m].b * bk2[m].count;
      sc += bk2[m].count;
    }
    var ar = Math.round(sr / sc), ag = Math.round(sg / sc), ab = Math.round(sb / sc);
    out.push({ r: ar, g: ag, b: ab, hex: toHex(ar, ag, ab) });
  }
  return out;
}

function nearestColorIndex(r, g, b, pal) {
  var best = 0, bestD = Infinity;
  for (var i = 0; i < pal.length; i++) {
    var dr = r - pal[i].r, dg = g - pal[i].g, db = b - pal[i].b;
    var d = 2 * dr * dr + 4 * dg * dg + 3 * db * db;
    if (d < bestD) { bestD = d; best = i; }
  }
  return best;
}

/* ========== 抖动（Dithering）：老游戏机式降色 ========== */
var BAYER2 = [[0, 2], [3, 1]];
var BAYER4 = [[0, 8, 2, 10], [12, 4, 14, 6], [3, 11, 1, 9], [15, 7, 13, 5]];
/* 64×64 蓝噪声表（0~255），频谱高通生成，用于无规则均匀抖动 */
var BLUE_NOISE = [
  130,162,101,193,119,119,155,128,186,103,126,129,88,210,95,84,
  222,70,134,141,119,148,132,174,135,113,93,133,86,148,36,230,
  23,220,41,193,61,187,58,124,155,164,104,192,67,63,188,24,
  228,76,142,94,131,162,159,61,194,57,203,64,84,161,194,99,
  195,41,200,78,98,202,76,172,44,176,77,171,115,129,113,174,
  39,149,129,114,123,178,85,133,118,151,166,123,132,117,215,58,
  222,19,194,110,171,109,186,117,135,70,224,52,177,177,116,228,
  43,140,169,129,126,114,131,159,130,135,108,102,223,77,88,117,
  78,180,102,112,129,107,125,119,137,163,145,98,120,125,139,154,
  166,125,139,160,98,87,143,114,152,88,124,85,150,123,51,152,
  112,199,79,128,101,115,89,141,150,119,67,155,116,60,142,29,
  206,124,107,140,97,184,72,132,105,136,159,141,74,143,154,162,
  89,162,152,142,154,104,152,138,153,61,132,148,128,137,114,98,
  108,151,96,96,157,182,99,118,174,124,148,140,164,148,152,156,
  103,101,178,124,141,143,151,152,107,132,188,108,84,230,97,224,
  52,148,124,177,58,163,151,139,91,147,122,95,150,140,125,104,
  207,48,142,62,207,46,181,107,109,146,183,55,217,33,196,130,
  127,120,139,201,47,145,78,200,71,89,163,102,61,155,101,137,
  143,149,67,167,99,154,89,124,149,153,51,165,148,87,131,62,
  185,65,203,26,221,110,83,126,175,162,86,191,71,187,122,108,
  120,172,110,161,91,163,119,103,163,118,108,120,101,182,138,72,
  174,92,183,50,208,59,223,91,127,161,136,134,204,64,147,121,
  90,124,214,87,87,195,70,184,76,136,117,210,49,193,111,194,
  56,220,39,244,27,186,144,119,71,112,168,83,201,41,134,141,
  108,158,88,103,204,61,198,95,156,135,142,92,228,10,168,158,
  89,159,108,143,123,181,55,116,162,152,68,155,22,227,113,143,
  182,91,73,148,194,69,199,43,197,124,122,76,150,113,143,47,
  206,28,172,86,155,121,119,154,177,130,103,139,74,221,85,134,
  115,145,123,226,0,231,40,174,112,103,176,127,52,221,118,80,
  173,80,135,103,148,108,158,160,96,99,195,111,233,36,135,123,
  111,151,158,97,121,88,106,198,83,113,136,188,85,128,137,183,
  105,185,155,107,112,150,99,85,127,104,160,140,122,99,191,89,
  141,140,89,53,249,25,221,56,128,163,98,94,221,22,187,110,
  146,181,94,150,86,157,84,148,146,95,126,108,43,212,82,138,
  117,154,118,145,146,165,172,70,112,198,88,90,147,129,169,41,
  162,77,118,125,162,88,202,105,177,147,102,141,113,148,110,158,
  101,107,176,178,35,216,33,244,47,157,160,109,107,164,94,165,
  79,131,121,172,123,193,66,172,103,144,149,133,172,114,154,69,
  215,63,84,184,99,120,69,195,116,100,152,146,162,128,81,196,
  103,135,167,97,144,175,52,174,65,142,131,130,141,81,144,85,
  181,137,65,179,97,145,124,94,168,139,75,113,184,62,172,102,
  119,150,124,114,129,51,206,53,191,123,100,170,45,189,102,229,
  27,203,155,90,117,183,129,103,83,208,102,106,75,194,85,195,
  67,153,112,127,126,92,183,144,139,151,62,164,96,189,150,140,
  110,76,217,77,155,109,201,89,141,142,132,184,96,192,137,116,
  181,75,130,152,98,233,32,211,73,129,139,105,183,81,131,62,
  165,139,35,229,70,129,80,202,120,72,162,146,121,94,148,80,
  175,87,128,156,127,113,129,57,175,130,154,165,123,67,126,126,
  150,167,58,178,104,138,90,86,179,102,119,94,142,66,105,140,
  107,179,108,120,125,66,151,155,90,161,104,154,110,168,73,244,
  30,169,160,99,110,191,131,91,144,183,105,151,112,213,64,202,
  85,177,86,179,104,146,128,178,86,114,87,125,97,173,149,93,
  100,101,180,85,178,90,194,151,105,127,181,109,151,142,199,100,
  151,37,184,149,98,186,121,102,178,111,142,141,85,164,128,43,
  226,67,134,154,166,24,192,101,135,73,150,137,87,92,123,101,
  144,119,165,68,139,167,103,83,188,122,189,118,172,68,172,134,
  176,111,106,145,108,138,45,169,93,204,33,215,88,130,72,123,
  160,163,120,108,163,61,173,117,84,172,91,149,167,119,95,232,
  43,165,161,42,156,201,46,211,71,166,115,125,187,131,127,182,
  117,126,110,146,159,65,193,136,94,124,92,151,111,136,90,130,
  133,137,99,183,67,201,135,152,88,78,174,78,116,100,216,74,
  156,79,175,88,208,77,185,90,158,95,125,139,103,125,158,58,
  130,184,64,209,91,117,146,111,148,114,126,124,85,177,95,95,
  138,136,158,89,123,147,60,135,161,104,208,89,104,131,199,105,
  185,87,216,48,201,15,197,88,194,145,142,133,207,112,81,145,
  151,92,163,85,94,145,87,188,108,145,116,139,89,164,97,185,
  152,77,156,71,196,101,73,191,76,194,123,132,104,131,168,117,
  110,120,128,126,167,76,228,88,143,104,90,117,184,119,83,99,
  81,110,127,84,179,171,70,162,64,158,77,110,86,78,214,97,
  115,163,95,173,167,89,189,40,183,111,156,113,181,84,123,121,
  108,160,87,167,67,164,180,101,150,59,195,84,169,136,65,173,
  155,111,164,90,103,186,41,169,142,127,203,123,123,81,210,111,
  179,147,106,189,58,121,158,167,92,131,175,135,194,161,71,182,
  77,169,65,133,112,134,124,191,62,185,37,182,83,175,168,95,
  165,91,151,149,126,152,35,190,84,175,67,131,132,110,138,151,
  78,120,108,138,215,43,227,50,174,76,81,155,78,200,62,144,
  81,148,160,110,178,129,112,82,204,87,163,63,107,102,160,130,
  125,130,166,183,73,157,125,60,181,98,187,116,82,155,88,138,
  64,221,68,199,88,74,239,57,144,117,188,101,179,123,163,55,
  185,161,120,183,27,152,114,151,63,189,159,89,179,112,140,133,
  158,115,72,166,57,116,174,124,73,192,43,198,160,93,98,158,
  120,114,95,57,204,47,203,122,154,85,164,97,198,94,164,145,
  175,54,134,69,146,186,62,160,153,91,131,130,102,64,189,127,
  161,60,168,66,243,59,183,102,227,47,146,151,110,128,88,165,
  66,182,202,44,205,164,92,177,123,109,177,104,130,156,147,112,
  175,109,191,176,79,205,82,104,174,88,153,155,53,153,75,162,
  73,183,139,149,151,49,219,89,86,176,124,103,170,195,43,187,
  47,178,67,162,35,207,94,90,85,159,95,162,101,131,190,85,
  236,36,95,187,101,95,152,57,204,90,151,89,163,89,183,58,
  105,148,35,171,92,89,143,156,100,154,70,130,173,110,157,125,
  89,157,117,150,80,209,45,153,162,95,136,126,84,143,133,111,
  187,95,197,119,185,72,164,176,176,111,166,77,218,23,174,71,
  93,164,167,78,142,136,122,141,91,145,134,104,129,152,68,226,
  124,107,200,107,154,181,87,120,82,149,153,153,136,104,154,117,
  188,92,147,72,228,43,202,111,135,94,170,128,153,90,175,74,
  159,99,126,74,144,99,152,41,116,135,130,105,79,222,113,154,
  106,147,62,188,76,200,79,161,149,99,157,102,197,53,244,12,
  174,82,134,149,90,151,130,181,168,126,128,82,129,135,113,153,
  110,101,129,145,60,140,146,113,139,169,133,84,111,134,131,152,
  140,102,183,141,145,115,180,146,160,125,94,198,123,89,86,193,
  124,170,168,84,191,32,162,104,163,88,183,108,130,103,75,174,
  124,158,92,177,75,111,118,106,53,170,110,150,139,135,115,114,
  107,171,146,111,220,56,122,123,120,90,119,176,99,205,83,130,
  138,101,120,65,187,88,84,136,94,160,141,110,87,229,83,98,
  150,64,113,127,138,164,148,122,142,115,125,97,130,196,143,101,
  176,97,118,96,213,130,124,156,182,130,102,105,151,101,171,111,
  134,148,78,144,70,230,93,172,135,140,173,102,118,107,79,184,
  82,201,71,209,97,159,130,169,133,63,137,172,119,80,156,149,
  104,138,203,86,170,81,140,145,82,148,56,243,76,93,118,141,
  103,99,209,70,103,111,140,123,96,108,180,120,162,73,160,110,
  140,136,117,145,125,85,129,128,103,140,77,154,154,107,200,80,
  180,85,162,97,76,168,104,114,118,197,121,119,106,176,99,146,
  118,166,65,121,77,152,130,71,193,107,204,48,128,188,59,172,
  113,177,84,181,153,118,137,111,182,90,104,158,134,127,153,127,
  97,160,104,172,82,171,77,195,80,145,157,72,152,167,54,199,
  53,212,44,191,169,118,117,119,184,26,209,63,205,63,134,150,
  117,90,159,171,205,81,151,135,153,106,139,111,163,95,178,129,
  104,154,97,96,136,105,140,111,132,165,182,45,192,78,154,102,
  146,141,98,131,139,137,164,91,177,117,123,163,79,127,174,62,
  221,32,231,40,139,96,177,116,100,189,101,114,115,170,130,138,
  212,127,114,82,76,149,145,144,129,74,153,121,188,91,114,124,
  186,49,183,155,137,128,92,172,123,62,151,149,63,197,88,135,
  175,62,161,155,117,108,55,206,43,202,109,137,167,120,69,188,
  69,156,73,164,154,117,117,168,122,91,150,157,72,146,126,76,
  73,115,150,165,127,139,74,112,82,217,78,129,103,89,192,112,
  114,182,75,117,143,153,155,86,145,173,77,105,185,107,130,179,
  51,209,106,87,162,150,193,65,206,57,128,147,101,114,183,139,
  129,151,121,160,109,131,114,105,152,135,118,163,159,110,198,101,
  179,137,115,157,100,165,152,178,140,99,170,97,156,149,104,103,
  159,64,217,71,156,74,130,122,158,115,160,153,104,136,96,148,
  115,139,52,207,70,122,93,174,56,211,96,77,176,113,105,84,
  171,137,133,49,186,121,126,126,157,69,192,45,136,125,85,147,
  127,111,157,103,78,172,47,157,81,158,139,142,101,183,101,160,
  107,189,43,157,170,125,106,159,108,112,145,85,181,120,118,131,
  142,140,166,153,128,114,166,152,120,88,154,180,143,115,156,111,
  117,79,163,185,106,118,148,127,68,188,41,194,167,49,206,74,
  143,117,113,126,179,104,192,81,184,67,130,109,141,108,106,133,
  73,163,164,117,62,201,100,148,116,95,166,80,162,98,168,76,
  170,101,93,127,85,142,117,80,131,174,88,107,101,122,148,151,
  132,176,74,123,90,111,178,95,193,112,206,83,128,198,62,146,
  143,128,189,107,166,57,139,106,100,168,130,171,93,102,181,153,
  152,96,152,112,182,65,153,119,114,187,96,190,92,101,151,147,
  118,154,174,109,169,141,112,185,98,139,179,92,167,138,134,83,
  126,151,122,134,193,142,109,75,143,127,84,122,142,86,179,125,
  92,139,74,127,136,135,178,167,133,145,72,156,144,135,113,110,
  120,126,118,98,90,174,142,127,163,92,132,70,183,134,105,154,
  86,121,73,147,121,126,121,131,145,101,80,177,107,113,148,156,
  88,131,118,149,58,108,147,202,97,90,200,96,172,101,105,140,
  60,201,109,129,189,67,108,85,111,154,160,82,165,110,134,119,
  125,135,154,174,125,149,75,145,126,116,157,138,121,128,125,119,
  181,92,212,76,149,120,89,188,65,213,86,179,91,146,94,148,
  106,207,51,188,133,189,99,77,150,172,90,134,99,158,88,199,
  135,112,108,186,37,191,147,158,124,77,168,81,162,84,165,119,
  155,50,204,18,217,44,182,116,171,78,177,59,189,80,211,87,
  126,150,110,99,183,101,155,105,120,93,127,124,136,176,71,179,
  128,65,198,70,107,88,173,177,81,122,152,106,171,173,95,148,
  142,122,174,63,169,132,84,122,156,133,167,104,170,150,117,151,
  97,187,78,196,96,144,180,57,168,108,119,130,163,95,95,106,
  186,57,215,105,75,179,131,161,187,96,163,134,85,100,224,18,
  209,84,142,151,151,164,81,135,129,118,182,115,86,55,192,117,
  109,147,102,187,111,80,197,115,174,62,145,92,127,92,121,130,
  134,168,91,88,149,132,74,183,88,153,137,146,96,152,180,151,
  44,215,38,144,180,54,130,76,84,146,159,78,237,59,123,136,
  151,98,179,76,181,52,179,84,140,128,44,169,180,185,64,100,
  102,131,121,83,149,172,67,107,118,152,113,186,88,179,163,93,
  128,89,175,149,93,119,191,50,197,70,174,34,218,85,63,198,
  107,136,168,120,141,152,162,175,121,152,108,96,85,158,152,156,
  51,188,101,103,135,181,93,157,184,78,229,101,65,113,149,209,
  107,195,72,193,67,173,117,163,155,85,189,41,209,46,161,95,
  160,133,104,115,185,165,73,194,76,164,167,149,125,108,190,32,
  165,168,47,181,44,170,68,112,129,138,131,209,118,155,96,118,
  183,75,164,152,127,72,164,74,108,156,58,143,194,67,195,46,
  157,78,167,163,96,115,152,138,116,127,87,200,37,188,113,142,
  149,166,152,101,108,63,191,83,129,134,60,120,90,185,89,199,
  112,107,125,160,158,137,175,87,133,158,81,42,186,35,217,77,
  156,169,54,163,73,240,41,204,136,139,142,144,81,198,50,195,
  80,222,71,108,157,127,130,65,182,109,178,51,217,105,145,111,
  89,85,78,178,124,163,137,101,171,116,187,107,181,78,118,129,
  115,146,143,116,107,97,88,165,156,65,204,163,145,155,89,171,
  74,156,132,160,134,70,164,112,44,212,36,177,95,163,104,134,
  111,96,121,134,117,153,107,178,79,103,172,121,119,101,124,123,
  198,128,235,51,155,39,227,61,188,86,94,189,53,205,108,137,
  96,145,101,130,168,137,188,137,80,207,54,140,74,143,117,138,
  99,160,43,176,56,205,102,129,226,69,175,159,73,138,153,122,
  172,146,125,152,127,121,159,111,192,78,127,160,107,122,206,80,
  109,115,44,183,83,224,39,174,63,152,195,77,148,149,69,153,
  129,143,136,127,120,93,68,161,96,93,154,177,115,166,110,142,
  146,153,187,77,209,72,118,165,40,146,95,104,155,162,96,121,
  97,156,90,123,122,97,147,94,166,110,182,80,153,116,85,146,
  141,140,168,105,209,5,212,71,190,152,58,124,167,64,179,172,
  95,155,58,219,47,198,161,114,130,218,71,75,168,107,156,93,
  154,76,74,214,79,142,175,42,228,100,144,171,95,83,169,117,
  137,94,162,153,146,148,70,197,65,142,114,123,133,121,147,133,
  145,105,144,163,56,222,125,108,139,65,235,94,149,162,54,116,
  121,146,135,84,197,53,122,183,106,54,173,191,76,167,105,138,
  123,157,143,67,145,96,155,166,65,195,75,90,168,187,63,158,
  162,111,108,91,165,35,227,72,181,96,111,187,80,168,72,136,
  114,166,89,92,165,46,155,142,132,128,77,129,109,126,165,195,
  50,196,77,213,79,202,97,84,165,181,76,112,134,68,166,82,
  203,44,209,89,204,76,129,89,177,69,173,142,109,76,193,120,
  149,118,170,113,126,224,34,167,124,144,139,82,169,62,215,135,
  120,136,150,156,103,195,100,105,143,116,160,149,102,151,117,67,
  208,100,108,105,87,149,106,157,87,136,143,129,156,171,110,162,
  86,171,77,174,62,196,135,113,97,185,110,118,144,128,123,56,
  117,150,98,179,147,45,196,95,86,166,87,137,151,136,99,68,
  164,82,140,92,133,72,167,136,120,139,122,82,176,74,142,197,
  34,174,131,164,124,173,117,162,118,149,126,173,68,135,129,148,
  120,127,160,86,154,64,196,129,178,78,140,194,69,221,68,220,
  144,104,103,87,83,160,111,194,101,177,118,161,113,93,189,157,
  133,126,151,135,132,149,135,143,157,84,162,156,107,202,78,68,
  223,57,125,126,93,119,106,170,46,169,70,129,123,112,127,138,
  113,79,191,84,165,130,70,116,82,194,106,52,168,50,146,85,
  79,191,159,188,147,145,122,86,135,98,151,83,156,172,42,152,
  106,128,138,102,136,136,134,73,123,185,30,193,75,96,181,125,
  138,145,137,129,180,94,122,147,155,160,142,133,157,177,97,170,
  103,205,39,219,85,95,228,94,197,83,123,212,111,188,110,149,
  150,91,96,66,159,60,163,175,101,145,168,66,181,77,178,156,
  143,110,97,172,143,130,87,187,117,143,163,117,133,158,128,107,
  108,164,80,189,55,177,129,130,98,84,131,143,84,116,118,130,
  127,99,169,95,107,216,7,172,89,137,126,62,171,59,200,99,
  119,175,147,150,186,92,180,32,224,43,140,171,90,144,164,53,
  119,163,168,109,52,191,83,171,65,138,141,103,194,63,103,158,
  126,92,195,68,183,78,165,162,121,150,134,162,129,96,174,124,
  108,101,166,99,164,49,254,58,211,92,144,150,158,105,97,149,
  123,82,173,67,104,156,102,163,93,176,113,135,68,208,23,237,
  91,115,77,177,154,134,121,106,205,61,160,82,104,174,177,120,
  117,119,124,118,172,84,131,59,216,29,197,87,106,151,125,108,
  178,176,101,106,195,109,90,126,115,155,83,133,65,181,118,143,
  172,106,109,194,116,110,161,109,121,143,136,101,209,47,184,92,
  134,172,161,82,110,162,141,85,127,185,82,200,103,151,39,158,
  122,135,155,99,140,159,123,143,60,193,83,149,136,135,133,150,
  59,109,94,201,69,102,175,148,88,95,180,134,174,102,123,96,
  175,138,92,133,130,88,180,107,173,85,110,172,85,163,157,79,
  185,97,52,225,75,141,82,220,79,113,181,19,212,47,228,115,
  136,165,45,220,71,134,112,161,183,67,173,123,168,77,162,90,
  204,134,136,99,132,191,73,130,171,185,95,123,100,131,175,97,
  85,123,146,170,117,160,121,84,180,104,182,91,168,82,84,211,
  76,116,195,75,162,91,204,35,194,118,146,180,82,200,45,142,
  131,90,170,100,132,98,123,131,85,197,97,129,99,173,100,185,
  82,114,126,152,126,92,153,153,68,78,134,111,146,162,103,136,
  192,139,116,51,206,37,158,110,150,95,76,168,121,148,147,81,
  127,162,91,166,132,146,87,164,88,127,103,112,143,136,99,220,
  45,207,73,163,124,176,152,61,181,102,91,162,134,94,99,111,
  150,126,149,101,163,136,121,111,198,176,110,168,91,65,209,70,
  76,191,63,236,38,194,163,76,162,131,176,119,129,139,153,103,
  169,118,128,87,128,123,183,103,115,193,96,156,118,136,166,15,
  250,11,218,57,206,15,192,162,120,77,216,75,145,185,135,181,
  76,164,63,164,121,92,129,127,91,72,151,116,183,146,103,127,
  184,48,173,122,97,180,60,191,75,188,65,144,106,116,149,122,
  122,122,134,201,87,184,22,236,78,148,105,120,93,138,49,255,
  9,248,28,194,64,215,72,94,155,170,70,184,109,70,134,59,
  203,113,148,145,112,189,145,84,199,144,125,85,86,149,147,150,
  90,150,153,59,180,90,125,141,73,169,102,159,125,114,86,214,
  38,207,88,127,102,113,182,32,168,101,173,141,157,155,173,59,
  179,95,176,97,144,97,138,195,68,138,92,129,153,185,122,163,
  84,116,171,62,212,11,182,121,73,183,67,231,128,130,61,145
];

function bayerValue(n, x, y) {
  if (n === 2) { return BAYER2[y % 2][x % 2] / 3; }
  return BAYER4[y % 4][x % 4] / 15;
}

/* 找最近与次近的两个色板索引（感知加权距离，与 nearestColorIndex 一致） */
function nearestTwoIndices(r, g, b, pal) {
  var best = -1, bestD = Infinity, second = -1, secondD = Infinity;
  for (var i = 0; i < pal.length; i++) {
    var dr = r - pal[i].r, dg = g - pal[i].g, db = b - pal[i].b;
    var d = 2 * dr * dr + 4 * dg * dg + 3 * db * db;
    if (d < bestD) { second = best; secondD = bestD; best = i; bestD = d; }
    else if (d < secondD) { second = i; secondD = d; }
  }
  return { best: best, bestD: bestD, second: second, secondD: secondD };
}

/* 根据抖动模式生成格子 -> 色板索引映射 */
function buildGridIdx(adj, w, h, pal, mode) {
  var idx = new Uint8Array(w * h);
  if (mode !== 'bayer2' && mode !== 'bayer4' && mode !== 'blue' && mode !== 'fs') {
    for (var i0 = 0; i0 < w * h; i0++) {
      var o0 = i0 * 3;
      idx[i0] = nearestColorIndex(adj[o0], adj[o0 + 1], adj[o0 + 2], pal);
    }
    return idx;
  }
  if (mode === 'bayer2' || mode === 'bayer4' || mode === 'blue') {
    /* 有序抖动：Bayer 阈值矩阵，在两色之间按比例交错，产生棋盘格/网点效果 */
    var n = mode === 'bayer2' ? 2 : 4;
    for (var r0 = 0; r0 < h; r0++) {
      for (var c0 = 0; c0 < w; c0++) {
        var j0 = r0 * w + c0;
        var q0 = j0 * 3;
        var rr = adj[q0], gg = adj[q0 + 1], bb = adj[q0 + 2];
        var near = nearestTwoIndices(rr, gg, bb, pal);
        if (near.second < 0) { idx[j0] = near.best; continue; }
        var t = near.bestD / (near.bestD + near.secondD);
        var th = (mode === 'blue') ? (BLUE_NOISE[(r0 % 64) * 64 + (c0 % 64)] / 255) : bayerValue(n, c0, r0);
        idx[j0] = (th > t) ? near.best : near.second;
      }
    }
    return idx;
  }
  /* Floyd–Steinberg 误差扩散 */
  var work = new Float64Array(adj.length);
  for (var k0 = 0; k0 < adj.length; k0++) { work[k0] = adj[k0]; }
  for (var r1 = 0; r1 < h; r1++) {
    for (var c1 = 0; c1 < w; c1++) {
      var j1 = r1 * w + c1;
      var q1 = j1 * 3;
      var rv = clamp255(work[q1]), gv = clamp255(work[q1 + 1]), bv = clamp255(work[q1 + 2]);
      var bi = nearestColorIndex(rv, gv, bv, pal);
      idx[j1] = bi;
      var er = rv - pal[bi].r, eg = gv - pal[bi].g, eb = bv - pal[bi].b;
      if (c1 + 1 < w) {
        var qr = (j1 + 1) * 3;
        work[qr] += er * 7 / 16; work[qr + 1] += eg * 7 / 16; work[qr + 2] += eb * 7 / 16;
      }
      if (r1 + 1 < h) {
        if (c1 > 0) {
          var qbl = (j1 + w - 1) * 3;
          work[qbl] += er * 3 / 16; work[qbl + 1] += eg * 3 / 16; work[qbl + 2] += eb * 3 / 16;
        }
        var qb = (j1 + w) * 3;
        work[qb] += er * 5 / 16; work[qb + 1] += eg * 5 / 16; work[qb + 2] += eb * 5 / 16;
        if (c1 + 1 < w) {
          var qbr = (j1 + w + 1) * 3;
          work[qbr] += er / 16; work[qbr + 1] += eg / 16; work[qbr + 2] += eb / 16;
        }
      }
    }
  }
  return idx;
}

function pad2(n) { return n < 10 ? '0' + n : '' + n; }

/* ========== 重新生成（第 2 步核心） ========== */
function regenerate() {
  if (!midCanvas) { return; }
  var w = params.w, h = params.h;
  var px = sampleGrid(w, h);
  var adj = new Uint8ClampedArray(w * h * 3);
  for (var i = 0; i < w * h; i++) {
    var o = i * 3;
    var c = adjustColor(px[o], px[o + 1], px[o + 2], params.bright, params.sat, params.cont);
    adj[o] = c[0]; adj[o + 1] = c[1]; adj[o + 2] = c[2];
  }
  var pal = medianCut(adj, w, h, 16);
  palette = pal;
  gridIdx = buildGridIdx(adj, w, h, pal, params.dither);
  currentW = w; currentH = h;
  updateOffsetRange();
  updateBarCount();
  drawPreview();
  updatePaletteUI();
  if (currentStep === 3) { drawPiano(); }
}

/* 预览：每个格子 10px，物理画布 w*10 × h*10，CSS 等比缩放完整显示 */
function drawPreview() {
  var cell = 10;
  var cvs = document.getElementById('previewCanvas');
  cvs.width = currentW * cell;
  cvs.height = currentH * cell;
  var ctx = cvs.getContext('2d');
  var img = ctx.createImageData(cvs.width, cvs.height);
  var data = img.data;
  for (var r = 0; r < currentH; r++) {
    for (var c = 0; c < currentW; c++) {
      var p = palette[gridIdx[r * currentW + c]];
      for (var dy = 0; dy < cell; dy++) {
        var base = ((r * cell + dy) * cvs.width + c * cell) * 4;
        for (var dx = 0; dx < cell; dx++) {
          var o = base + dx * 4;
          data[o] = p.r; data[o + 1] = p.g; data[o + 2] = p.b; data[o + 3] = 255;
        }
      }
    }
  }
  ctx.putImageData(img, 0, 0);
}

/* ========== 色板 UI（第 3 / 4 步） ========== */
function updatePaletteUI() {
  var key = palette.map(function (p) { return p.hex; }).join(',');
  if (key !== lastPaletteKey) {
    lastPaletteKey = key;
  }
  renderSwatches3();
  renderSwatches4();
}

/* 第 3 步：列表 + 独奏 */
function renderSwatches3() {
  var wrap = document.getElementById('swatchList3');
  if (!wrap) { return; }
  var html = '';
  for (var i = 0; i < palette.length; i++) {
    var p = palette[i];
    var soloClass = (params.solo === i) ? ' solo-active' : '';
    html += '<div class="swatch-row' + soloClass + '" data-chrow="' + i + '">'
      + '<div class="swatch-color" style="background:' + stdHex(p.hex) + '"></div>'
      + '<div class="swatch-info"><div class="hex">' + stdHex(p.hex) + '</div><div class="ch">' + swatchLabel(i + 1) + '</div></div>'
      + '<div class="swatch-actions"><button class="btn secondary small" data-solo="' + i + '">' + (params.solo === i ? t('btn_unsolo') : t('btn_solo')) + '</button></div>'
      + '</div>';
  }
  wrap.innerHTML = html;
  bindSolo(wrap);
}

/* 第 4 步：网格（FL 颜色编辑器顺序，列优先）+ 复制按钮 */
function renderSwatches4() {
  var wrap = document.getElementById('swatchList4');
  if (!wrap) { return; }
  var html = '';
  for (var i = 0; i < palette.length; i++) {
    var p = palette[i];
    html += '<div class="swatch-card" data-chrow="' + i + '">'
      + '<div class="swatch-color" style="background:' + stdHex(p.hex) + '"></div>'
      + '<div class="swatch-info"><div class="hex">' + stdHex(p.hex) + '</div><div class="ch">' + swatchLabel(i + 1) + '</div></div>'
      + '<button class="btn secondary small copy-btn" data-copy="' + i + '">' + t('btn_copy') + '</button>'
      + '</div>';
  }
  wrap.innerHTML = html;
  bindCopy(wrap);
}

function bindSolo(wrap) {
  var soloBtns = wrap.querySelectorAll('[data-solo]');
  for (var k = 0; k < soloBtns.length; k++) {
    (function (btn) {
      btn.addEventListener('click', function () {
        var idx = parseInt(btn.getAttribute('data-solo'), 10);
        params.solo = (params.solo === idx) ? -1 : idx;
        updatePaletteUI();
        drawPiano();
      });
    })(soloBtns[k]);
  }
}

function bindCopy(wrap) {
  var btns = wrap.querySelectorAll('.copy-btn');
  for (var k = 0; k < btns.length; k++) {
    (function (btn) {
      btn.addEventListener('click', function () {
        var idx = parseInt(btn.getAttribute('data-copy'), 10);
        copyText(colorInfoText(idx), btn);
      });
    })(btns[k]);
  }
}

function colorInfoText(i) {
  var p = palette[i];
  return stdHex(p.hex) + '\r\n' + t('copy_text_midi_ch', { n: i }) + '\r\n' + t('copy_text_fl_ch', { n: i + 1 });
}

function copyText(text, btn) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(function () { flashCopy(btn); }, function () { legacyCopy(text, btn); });
  } else {
    legacyCopy(text, btn);
  }
}

function legacyCopy(text, btn) {
  var ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand('copy'); flashCopy(btn); } catch (e) { alert(t('alert_copy_fail', { text: text })); }
  document.body.removeChild(ta);
}

function flashCopy(btn) {
  var old = btn.textContent;
  btn.textContent = t('copy_success');
  setTimeout(function () { btn.textContent = old; }, 1200);
}

/* ========== 钢琴卷帘绘制 ========== */
function drawPiano() {
  if (!gridIdx || currentW === 0) { return; }
  updateBarCount();
  var w = currentW, h = currentH;
  var zoom = params.zoom;
  var cellH = 16;
  var cvs = document.getElementById('pianoCanvas');
  cvs.width = Math.max(2, w * zoom);
  cvs.height = 132 * cellH;
  var ctx = cvs.getContext('2d');

  /* 主题色（随深浅色切换重绘） */
  var isDark = currentTheme() === 'dark';
  var bgBlack = isDark ? '#0d1017' : '#DAE2EC';
  var bgWhite = isDark ? '#131823' : '#F1F5F9';
  var gridLine = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)';
  var labelColor = isDark ? 'rgba(77,163,255,0.5)' : 'rgba(11,87,208,0.7)';
  var edgeLine = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.12)';

  /* 背景：黑白键网格 */
  for (var n = 0; n < 132; n++) {
    var y = (131 - n) * cellH;
    var isBlack = (n % 12 === 1 || n % 12 === 3 || n % 12 === 6 || n % 12 === 8 || n % 12 === 10);
    ctx.fillStyle = isBlack ? bgBlack : bgWhite;
    ctx.fillRect(0, y, cvs.width, cellH);
    if (n % 12 === 0) {
      ctx.fillStyle = gridLine;
      ctx.fillRect(0, y, cvs.width, 1);
      ctx.fillStyle = labelColor;
      ctx.font = '10px Consolas, monospace';
      ctx.fillText('C' + Math.floor(n / 12), 3, y + cellH - 3);
    }
  }

  /* 音符 */
  for (var r = 0; r < h; r++) {
    var note = (h - 1 - r) + params.offset;
    for (var c = 0; c < w; c++) {
      var idx = gridIdx[r * w + c];
      if (params.solo >= 0 && params.solo !== idx) { continue; }
      var p = palette[idx];
      ctx.fillStyle = stdHex(p.hex);
      ctx.fillRect(c * zoom, (131 - note) * cellH + 1, zoom, cellH - 2);
    }
  }

  /* 边界线 */
  ctx.fillStyle = edgeLine;
  ctx.fillRect(0, cvs.height - 1, cvs.width, 1);
}

/* ========== MIDI 生成 ========== */
function vlq(n) {
  var b = [];
  b.push(n & 0x7F);
  n >>>= 7;
  while (n > 0) {
    b.push((n & 0x7F) | 0x80);
    n >>>= 7;
  }
  b.reverse();
  return b;
}

function collectEventsForChannel(ch, offset) {
  var w = currentW, h = currentH;
  var evs = [];
  for (var r = 0; r < h; r++) {
    var note = (h - 1 - r) + offset;
    for (var c = 0; c < w; c++) {
      if (gridIdx[r * w + c] === ch) {
        var tick = c * 480;
        evs.push({ tick: tick, type: 'on', note: note });
        evs.push({ tick: tick + 480, type: 'off', note: note });
      }
    }
  }
  evs.sort(function (a, b) {
    if (a.tick !== b.tick) { return a.tick - b.tick; }
    return (a.type === 'on' ? 0 : 1) - (b.type === 'on' ? 0 : 1);
  });
  return evs;
}

function buildChannelTrack(ch, evs) {
  var bytes = [];
  var last = 0;
  function pushEv(delta, status, d1, d2) {
    var v = vlq(delta);
    for (var i = 0; i < v.length; i++) { bytes.push(v[i]); }
    bytes.push(status, d1, d2);
  }
  /* Program Change：只有 1 个数据字节（程序编号 = 通道索引 0~15），不能多写 */
  var vPc = vlq(0);
  for (var iPc = 0; iPc < vPc.length; iPc++) { bytes.push(vPc[iPc]); }
  bytes.push(0xC0 | ch, ch);
  for (var i = 0; i < evs.length; i++) {
    var e = evs[i];
    var delta = e.tick - last;
    last = e.tick;
    if (e.type === 'on') {
      pushEv(delta, 0x90 | ch, e.note, 100);   // NOTE ON, velocity 100
    } else {
      pushEv(delta, 0x80 | ch, e.note, 0);     // NOTE OFF
    }
  }
  bytes.push(0x00, 0xFF, 0x2F, 0x00);  // End of Track（delta=0 + EOT）
  return bytes;
}

function buildMidi(tracks) {
  var header = [0x4D, 0x54, 0x68, 0x64, 0, 0, 0, 6, 0, 1, (tracks.length >> 8) & 255, tracks.length & 255, 0x01, 0xE0];
  var out = header.slice();
  for (var i = 0; i < tracks.length; i++) {
    var tr = tracks[i];
    out.push(0x4D, 0x54, 0x72, 0x6B);
    out.push((tr.length >>> 24) & 255, (tr.length >>> 16) & 255, (tr.length >>> 8) & 255, tr.length & 255);
    for (var j = 0; j < tr.length; j++) { out.push(tr[j]); }
  }
  return new Uint8Array(out);
}

function buildSingleMidiBytes() {
  var tracks = [];
  for (var ch = 0; ch < palette.length; ch++) {
    var evs = collectEventsForChannel(ch, params.offset);
    tracks.push(buildChannelTrack(ch, evs));
  }
  if (tracks.length === 0) { tracks.push([0x00, 0xFF, 0x2F, 0x00]); }
  return buildMidi(tracks);
}

function buildColorsNcp() {
  /* FL Studio 调色盘 .ncp：固定 16 行 Color0~Color15=00BBGGRR（前 2 位 Alpha=00，后 6 位为 BGR 字节顺序，
     与 FL Studio 实际保存格式一致；palette 中 hex 为 #RRGGBB，导出时 R 与 B 互换）。
     0~15 对应颜色通道；palette 不足 16 色时缺失通道以黑色 000000 填充。 */
  var lines = [];
  for (var i = 0; i < 16; i++) {
    var c = (i < palette.length) ? palette[i] : { hex: '#000000' };
    var h = c.hex; /* #RRGGBB */
    lines.push('Color' + i + '=00' + h.substr(5, 2) + h.substr(3, 2) + h.substr(1, 2));
  }
  return new TextEncoder().encode(lines.join('\r\n') + '\r\n');
}

/* ========== ZIP 生成（STORE，纯 JS） ========== */
var crcTable = (function () {
  var t = [];
  for (var n = 0; n < 256; n++) {
    var c = n;
    for (var k = 0; k < 8; k++) {
      c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    }
    t[n] = c >>> 0;
  }
  return t;
})();

function crc32(bytes) {
  var c = 0xFFFFFFFF;
  for (var i = 0; i < bytes.length; i++) {
    c = crcTable[(c ^ bytes[i]) & 0xFF] ^ (c >>> 8);
  }
  return (c ^ 0xFFFFFFFF) >>> 0;
}

function utf8(str) {
  var bytes = [];
  for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i);
    if (c < 0x80) { bytes.push(c); }
    else if (c < 0x800) { bytes.push(0xC0 | (c >> 6), 0x80 | (c & 0x3F)); }
    else if (c < 0xD800 || c > 0xDFFF) { bytes.push(0xE0 | (c >> 12), 0x80 | ((c >> 6) & 0x3F), 0x80 | (c & 0x3F)); }
    else {
      i++;
      var c2 = str.charCodeAt(i);
      var cp = 0x10000 + ((c - 0xD800) << 10) + (c2 - 0xDC00);
      bytes.push(0xF0 | (cp >> 18), 0x80 | ((cp >> 12) & 0x3F), 0x80 | ((cp >> 6) & 0x3F), 0x80 | (cp & 0x3F));
    }
  }
  return bytes;
}

function buildZip(entries) {
  var parts = [];
  var offsets = [];
  var total = 0;
  var i, j, k, m;
  for (i = 0; i < entries.length; i++) {
    var name = entries[i].name;
    var data = entries[i].data;
    var nameBytes = utf8(name);
    var crc = crc32(data);
    var lh = new Uint8Array(30);
    var dv = new DataView(lh.buffer);
    dv.setUint32(0, 0x04034b50, true);
    dv.setUint16(4, 20, true);
    dv.setUint16(6, 0x800, true);  // flags: bit11 = UTF-8 文件名（不设加密位）
    dv.setUint16(8, 0, true);
    dv.setUint16(10, 0, true);
    dv.setUint16(12, 0x21, true);
    dv.setUint32(14, crc, true);
    dv.setUint32(18, data.length, true);
    dv.setUint32(22, data.length, true);
    dv.setUint16(26, nameBytes.length, true);
    dv.setUint16(28, 0, true);
    parts.push(lh, nameBytes, data);
    offsets.push(total);
    total += lh.length + nameBytes.length + data.length;
  }
  var cdParts = [];
  var cdSize = 0;
  for (j = 0; j < entries.length; j++) {
    var nm = utf8(entries[j].name);
    var dt = entries[j].data;
    var ch = new Uint8Array(46);
    var cvd = new DataView(ch.buffer);
    cvd.setUint32(0, 0x02014b50, true);
    cvd.setUint16(4, 20, true);
    cvd.setUint16(6, 20, true);
    cvd.setUint16(8, 0x800, true);  // flags: bit11 = UTF-8 文件名
    cvd.setUint32(16, crc32(dt), true);
    cvd.setUint32(20, dt.length, true);
    cvd.setUint32(24, dt.length, true);
    cvd.setUint16(28, nm.length, true);
    cvd.setUint16(30, 0, true);
    cvd.setUint16(32, 0, true);
    cvd.setUint16(34, 0, true);
    cvd.setUint16(36, 0, true);
    cvd.setUint32(38, 0, true);   // external attributes（偏移 38~41 写 0）
    cvd.setUint32(42, offsets[j], true);
    cdParts.push(ch, nm);
    cdSize += ch.length + nm.length;
  }
  var cdOffset = total;
  var eocd = new Uint8Array(22);
  var edv = new DataView(eocd.buffer);
  edv.setUint32(0, 0x06054b50, true);
  edv.setUint16(4, 0, true);
  edv.setUint16(6, 0, true);
  edv.setUint16(8, entries.length, true);
  edv.setUint16(10, entries.length, true);
  edv.setUint32(12, cdSize, true);
  edv.setUint32(16, cdOffset, true);
  edv.setUint16(20, 0, true);
  var all = parts.concat(cdParts);
  all.push(eocd);
  var size = 0;
  for (k = 0; k < all.length; k++) { size += all[k].length; }
  var out = new Uint8Array(size);
  var pos = 0;
  for (m = 0; m < all.length; m++) { out.set(all[m], pos); pos += all[m].length; }
  return out;
}

/* ========== 下载 ========== */
function downloadBytes(name, bytes, mime) {
  var blob = new Blob([bytes], { type: mime || 'application/octet-stream' });
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  setTimeout(function () {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 1500);
}

/* ========== 第 4 步：导出按钮（仅三种：单 MIDI / TXT / ZIP） ========== */
function bindExport() {
  document.getElementById('btnExportSingle').addEventListener('click', function () {
    if (!gridIdx) { alert(t('alert_upload_first')); return; }
    downloadBytes(t('filename_midi'), buildSingleMidiBytes(), 'audio/midi');
  });

  document.getElementById('btnExportNcp').addEventListener('click', function () {
    if (!gridIdx) { alert(t('alert_upload_first')); return; }
    downloadBytes(t('filename_ncp'), buildColorsNcp(), 'text/plain;charset=utf-8');
  });

  document.getElementById('btnExportZip').addEventListener('click', function () {
    if (!gridIdx) { alert(t('alert_upload_first')); return; }
    var entries = [];
    entries.push({ name: 'single.mid', data: buildSingleMidiBytes() });
    entries.push({ name: 'colors.ncp', data: buildColorsNcp() });
    var zip = buildZip(entries);
    downloadBytes(t('filename_zip'), zip, 'application/zip');
  });
}

/* ========== 初始化 ========== */
/* ========== 主题切换（深色/浅色） ========== */
function getStoredTheme() {
  try { var t = localStorage.getItem('md-theme'); return (t === 'light' || t === 'dark') ? t : null; } catch (e) { return null; }
}
function systemDark() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}
function currentTheme() {
  var s = getStoredTheme();
  return s ? s : (systemDark() ? 'dark' : 'light');
}
function toggleTheme() {
  var next = currentTheme() === 'dark' ? 'light' : 'dark';
  try { localStorage.setItem('md-theme', next); } catch (e) {}
  document.documentElement.setAttribute('data-theme', next);
  if (currentStep === 3 && gridIdx) { drawPiano(); }
}
function bindThemeToggle() {
  var btn = document.getElementById('themeToggle');
  if (btn) { btn.addEventListener('click', toggleTheme); }
}
function init() {
  bindUpload();
  bindSliders();
  bindExport();
  bindThemeToggle();
  bindLangToggle();
  showStep(1);
  applyI18n();
}
document.addEventListener('DOMContentLoaded', init);

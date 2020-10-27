# vue-ripples

Vue 水波纹指令，只需简单安装配置，即可拥有 Material Design 风格水波纹效果。

## Usage

### 下载安装

``` bash
npm install @typeofnan/vue-ripples

// or

yarn add @typeofnan/vue-ripples
```

### 在Vue中使用

``` js
// main.js
import Vue from 'vue'
import { ripples } from '@typeofnan/vue-ripples'

import App from './App.vue'

Vue.directive('ripples', ripples)

new Vue({
  render: h => h(App)
}).$mount('#app')
```

``` html
<!-- template -->
<template>
  <div>
    <div v-ripples>这是内容</div>

    <button v-ripples>按钮</button>
  </div>
</template>
```

只需要在需要点击出发水波纹效果的html元素上加上 v-ripples 这个自定义指令即可。

### 配置项Options

v-ripples 指令可传入一个对象作为配置项，具体配置为：

| key | 描述 | 数据类型 | 默认值 |
| :----: | :---- | :----: | :----: |
| type | 水波扩散开始方式，hit 为从点击点向四周扩散，center 为从元素中心向四周扩散 | string | hit |
| color | 水波颜色 | string | rgba(0, 0, 0, 0.15) |

例如：

``` html
<!-- template -->
<template>
  <div>
    <button v-ripples="options">按钮</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        type: 'center',  // 设置从元素中心向四周扩散
        color: 'yellow'  // 设置水波颜色为黄色
      }
    }
  }
}
</script>
```

## License

[MIT](https://opensource.org/licenses/MIT)

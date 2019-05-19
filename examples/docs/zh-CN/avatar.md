<script>
  const list = [
    {
      color: "#f56a00",
      user: "U"
    },
    {
      color: "#7265e6",
      user: "Spaas"
    },
    {
      color: "#ffbf00",
      user: "Tom"
    },
    {
      color: "#00a2ae",
      user: "Edward"
    }
  ];
  export default {
    data() {
      return {
        avatar: 'http://img0.imgtn.bdimg.com/it/u=656590422,1550932878&fm=26&gp=0.jpg',
        currentIndex: 0
      };
    },
    computed: {
      current() {
        return list[this.currentIndex];
      }
    },
    methods: {
      handleChange() {
        this.currentIndex = this.currentIndex + 1 > list.length - 1 ? 0 : this.currentIndex + 1;
      }
    }
  }
</script>
<style>
  .demo-avatar {
    margin-top: 16px;
    margin-right: 16px;
  }
  .demo-avatar .el-avatar {
    display: inline-block;
    margin-left: 20px;
  }
  .demo-avatar-change .el-avatar {
    display: inline-block;
    margin-right: 20px;
  }
</style>

## Avatar 头像

用来代表用户或事物，支持图片、图标或字符展示。

### 基本用法

头像有四种尺寸，两种形状可选。

:::demo size 为 medium, small, mini 或者不填分别对应四种不同的尺寸

```html
<template>
  <div class="demo-avatar">
    <el-avatar icon="el-icon-service"></el-avatar>
    <el-avatar icon="el-icon-service" size="medium"></el-avatar>
    <el-avatar icon="el-icon-service" size="small"></el-avatar>
    <el-avatar icon="el-icon-service" size="mini"></el-avatar>
  </div>
  <div class="demo-avatar">
    <el-avatar is-square icon="el-icon-service"></el-avatar>
    <el-avatar is-square icon="el-icon-service" size="medium"></el-avatar>
    <el-avatar is-square icon="el-icon-service" size="small"></el-avatar>
    <el-avatar is-square icon="el-icon-service" size="mini"></el-avatar>
  </div>
</template>
<script>
  export default {};
</script>
```

:::

### 类型

类型用法

:::demo 一共有三种类型 图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色

```html
<template>
  <el-avatar icon="el-icon-service" size="medium"></el-avatar>
  <el-avatar size="medium">U</el-avatar>
  <el-avatar size="medium">USER</el-avatar>
  <el-avatar :src="avatar" size="medium"></el-avatar>
  <el-avatar size="medium" style="color:#f56a00;background-color:#fde3cf">U</el-avatar>
  <el-avatar
    icon="el-icon-service"
    size="medium"
    style="background-color: #87d068"
  ></el-avatar>
</template>
<script>
  export default {
    data() {
      return {
        avatar: 'http://img0.imgtn.bdimg.com/it/u=656590422,1550932878&fm=26&gp=0.jpg'
      }
    }
  };
</script>
```

:::

### 徽章

带徽章的头像

:::demo 通常用于消息提示。

```html
<template>
  <el-badge :value="1">
    <el-avatar size="medium" is-square>USER</el-avatar>
  </el-badge>
  <el-badge is-dot>
    <el-avatar size="medium" is-square>USER</el-avatar>
  </el-badge>
</template>

<script>
  export default {};
</script>
```

:::

### 自动调整

自动调整字符大小

:::demo 对于字符型的头像，当字符串较长时，字体大小可以根据头像宽度自动调整。

```html
<template>
  <div class="demo-avatar-change">
    <el-avatar :style="{background: current.color}" size="medium">{{ current.user }}</el-avatar>
    <el-button size="small" @click="handleChange">Change</el-button>
  </div>
</template>

<script>
  const list = [
    {
      color: "#f56a00",
      user: "U"
    },
    {
      color: "#7265e6",
      user: "Spaas"
    },
    {
      color: "#ffbf00",
      user: "Tom"
    },
    {
      color: "#00a2ae",
      user: "Edward"
    }
  ];

  export default {
    data() {
      return {
        index: 0
      };
    },
    computed: {
      current() {
        return list[this.index];
      }
    },
    methods: {
      handleChange() {
        this.index = this.index + 1 > list.length - 1 ? 0 : this.index + 1;
      }
    }
  };
</script>

<style>
  .demo-avatar-change .el-avatar {
    display: inline-block;
    margin-right: 20px;
  }
</style>
```

:::


### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| isSquare     | 是否正方形           | boolean | — | false |
| size | 尺寸 | string | medium/small/mini | — |
| src | 图片src | string | — | — |
| icon | 图标 icon, 可选用 element-ui 自带，也可以传入自定义的 | string | — | — |


### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| on-error | 图片加载失败时候触发 | Error 对象 |
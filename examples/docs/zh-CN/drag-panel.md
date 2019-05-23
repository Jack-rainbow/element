<script>
  const list = [
          { name: '标签一', type: '' },
          { name: '标签二', type: 'success' },
          { name: '标签三', type: 'info' },
          { name: '标签四', type: 'warning' },
          { name: '标签五', type: 'danger' }
        ]
  export default {
    data() {
      return { 
        tags: list,  
        headerText:'header' 
      }
    },
    methods:{
      dragEnd(data){
        console.log('拖拽后数据---',data)
      }
    }
  };
</script>

<style>
  
  .demo-drag-panel_item{
    padding:10px;
    list-style: none;
  }
</style>

## DragPanel 拖拽面板



### 基本用法

DragPanel 对列表进行拖拽。

:::demo 拖拽面板

```html
<template>
  <el-drag-panel 
   :content-list = "tags" 
   @drag-end = "dragEnd"
  >
    <li v-for="(item,index) of tags" :key="index" class="demo-drag-panel_item">
      {{item.name}}
    </li>
  </el-drag-panel>
</template>
<script>
  
  const list = [
          { name: '标签一', type: '' },
          { name: '标签二', type: 'success' },
          { name: '标签三', type: 'info' },
          { name: '标签四', type: 'warning' },
          { name: '标签五', type: 'danger' }
        ]
  export default {
    data() {
      return {
        tags: list 
      }
    },
    methods:{
      dragEnd(data){
        console.log('拖拽后数据---',data)
      }
    }
  };

</script>
<style>
  .demo-drag-panel {
    width: 480px;
  }
  
  .demo-drag-panel_item{
    padding:10px;
    list-style: none;
  }
  
</style>
```
:::



### 自定义头部

对头部内容进行自定义。

:::demo 拖拽面板

```html
<template>
  <el-drag-panel 
   :content-list = "tags" 
   @drag-end = "dragEnd"
  >
    <div slot="headerText">{{headerText}}</div>
    <li v-for="(item,index) of tags" :key="index" class="demo-drag-panel_item">
      {{item.name}}
    </li>
  </el-drag-panel>
</template>
<script>
  
  const list = [
          { name: '标签一', type: '' },
          { name: '标签二', type: 'success' },
          { name: '标签三', type: 'info' },
          { name: '标签四', type: 'warning' },
          { name: '标签五', type: 'danger' }
        ]
  export default {
    data() {
      return {
        tags: list 
      }
    },
    methods:{
      dragEnd(data){
        console.log('拖拽后数据---',data)
      }
    }
  };

</script>
<style>
  .demo-drag-panel {
    width: 480px;
  }
  
  .demo-drag-panel_item{
    padding:10px;
    list-style: none;
  }
  
</style>
```
:::


### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| content-list | 显示的数据 | Array | — | [] |
| header-text | 显示的数据 | String | — | '' |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| drag-start | 节点开始拖拽时触发的事件 | 共两个参数,依次为:返回拖拽前data数组、拖拽事件(包含拖拽元素,拖入元素的index,拖动元素的index) |  
| drag-end | 拖拽结束时（可能未成功）触发的事件 | 共两个参数:返回拖拽后的数组(注：数据格式已发生变化)、拖拽事件(包含拖拽元素,拖入元素的index,拖动元素的index) | 

### Scoped Slot
| name | 说明 |
|------|--------|
| — | 自定义列表内容 |
| headerText | 自定义头部内容，参数为 {}|
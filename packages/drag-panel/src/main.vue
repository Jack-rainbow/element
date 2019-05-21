<template>
  <div class="el-drag-panel">
    <div class="el-drag-panel__header" v-if="$slots.headerText ||  header">
      <slot name="headerText" ></slot>
    </div>
    <ElScrollbar
      tag="ul"
      wrap-class="el-drag-panel__wrap"
      view-class="el-drag-panel__list"
      v-if="contentList.length"
    >
      <Draggable
        :list="contentList"
        class="el-drag-panel__content"
        @start = "dragStart"
        @end = "dragEnd"
        :set-data="setData"
      >
          <slot></slot>
      </Draggable>
    </ElScrollbar>
  </div>
</template>

<script>
  import ElScrollbar from 'element-ui/packages/scrollbar';
  import Draggable from 'vuedraggable';
  export default {
    name: 'ElDragPanel',
    props: {
      headerText: {},
      contentList: {
        type: Array,
        default: ()=>[]
      }
    },
    components: {
      Draggable,
      ElScrollbar
    },
    methods: {
      setData(dataTransfer) {
        dataTransfer.setData('Text', '');
      },
      dragStart(v) {
        this.$emit('drag-start', {
          contentList: this.contentList,
          event: v
        });
      },
      dragEnd(v) {
        this.$emit('drag-end', {
          contentList: this.contentList,
          event: v
        });
      }
    }
  };
</script>

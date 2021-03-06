<style>
  .demo-color-box {
    border-radius: 4px;
    padding: 20px;
    margin: 5px 0;
    height: 74px;
    box-sizing: border-box;
    color: #fff;
    font-size: 14px;

    & .value {
      font-size: 12px;
      opacity: 0.69;
      line-height: 24px;
    }
  }
  .demo-color-box-group {
    .demo-color-box {
      border-radius: 0;
      margin: 0;
    }
    .demo-color-box:first-child {
      border-radius: 4px 4px 0 0;
    }
    .demo-color-box:last-child {
      border-radius: 0 0 4px 4px;
    }
  }
  .bg-blue {
    background-color: #5D81F9; /* #409EFF */
  }

  .bg-success {
    background-color: #02C5E2; /* #67C23A */
  }
  .bg-warning {
    background-color: #F5A623; /* #E6A23C */
  }
  .bg-danger {
    background-color: #E24156; /* #F56C6C */
  }
  .bg-info {
    background-color: #6A6E7B; /* #909399 */
  }

  .bg-text-primary {
    background-color: #2D303B; /* #303133 */
  }
  .bg-text-regular {
    background-color: #2D303B; /* #606266 */
  }
  .bg-text-secondary {
    background-color: #93959b; /* #909399 */
  }
  .bg-text-placeholder {
    background-color: #9CA6C7; /* #c0c4cc */
  }

  .bg-border-base {
    background-color: #CAD1E8; /* #dcdfe6 */
  }
  .bg-border-light {
    background-color: #CAD1E8; /* #e4e7ed */
  }
  .bg-border-lighter {
    background-color: #EBEEF5; /* #ebeef5 */
  }
  .bg-border-extra-light {
    background-color: #F2F6FC; /* #f2f6fc */
  }

  [class*=" bg-border-"] {
    color: #303133;
  }
</style>

## Color 色彩

Element 为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受。

### 主色

Element 主要品牌颜色是鲜艳、友好的蓝色。

<el-row :gutter="12">
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box bg-blue">Blue<div class="value">#5D81F9</div></div>
  </el-col>
</el-row>

### 辅助色

除了主色外的场景色，需要在不同的场景中使用（例如危险色表示危险的操作）。

<el-row :gutter="12">
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box bg-success">Success<div class="value">#02C5E2</div></div>
  </el-col>
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box bg-warning">Warning<div class="value">#F5A623</div></div>
  </el-col>
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box bg-danger">Danger<div class="value">#E24156</div></div>
  </el-col>
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box bg-info">Info<div class="value">#6A6E7B</div></div>
  </el-col>
</el-row>

### 中性色

中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。

<el-row :gutter="12">
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box-group">
      <div class="demo-color-box bg-text-primary">主要文字<div class="value">#2D303B</div></div>
      <div class="demo-color-box bg-text-regular">常规文字<div class="value">#2D303B</div></div>
      <div class="demo-color-box bg-text-secondary">次要文字<div class="value">#93959b</div></div>
      <div class="demo-color-box bg-text-placeholder">占位文字<div class="value">#9CA6C7</div></div>
    </div>
  </el-col>
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box-group">
      <div class="demo-color-box bg-border-base">一级边框<div class="value">#CAD1E8</div></div>
      <div class="demo-color-box bg-border-light">二级边框<div class="value">#CAD1E8</div></div>
      <div class="demo-color-box bg-border-lighter">三级边框<div class="value">#EBEEF5</div></div>
      <div class="demo-color-box bg-border-extra-light">四级边框<div class="value">#F2F6FC</div></div>
    </div>
  </el-col>
</el-row>

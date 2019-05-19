<template>
  <span class="el-avatar" :class="classes">
    <img :src="src" v-if="src" @error="handlError">
    <i :class="icon" v-else-if="icon"></i>
    <span ref="children" class="el-avatar-string" :style="childrenStyle" v-else>
      <slot/>
    </span>
  </span>
</template>

<script>
export default {
  name: 'ElAvatar',
  props: {
    isSquare: Boolean,
    size: String,
    src: String,
    icon: String
  },

  data() {
    return {
      scale: 1,
      childrenWitdh: 0,
      iSlotShow: false
    };
  },

  computed: {
    avatarSize() {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
    },
    classes() {
      return [
        {
          'is-square': this.isSquare,
          'is-icon': this.icon,
          'el-avatar--image': this.src
        },
        `el-avatar--${this.size || 'default'}`
      ];
    },
    childrenStyle() {
      let style = {};
      if (this.iSlotShow) {
        style = {
          msTransform: `scale(${this.scale})`,
          WebkitTransform: `scale(${this.scale})`,
          transform: `scale(${this.scale})`,
          position: 'absolute',
          display: 'inline-block',
          left: `calc(50% - ${Math.round(this.childrenWidth / 2)}px)`
        };
      }
      return style;
    }
  },

  methods: {
    setScale() {
      this.iSlotShow = !this.src && !this.icon;

      if (this.$refs.children) {
        // 重新设置子组件的宽度以达到居中效果
        this.childrenWidth = this.$refs.children.offsetWidth;
        const avatarWitdth = this.$el.getBoundingClientRect().width;
        // 为2边增加 4px 的间隙以获得更好的体验。
        if (avatarWitdth - 8 < this.childrenWidth) {
          this.scale = (avatarWitdth - 8) / this.childrenWidth;
        } else {
          this.scale = 1;
        }
      }
    },
    handlError(e) {
      this.$emit('on-error', e);
    }
  },

  mounted() {
    this.setScale();
  },

  updated() {
    this.setScale();
  }
};
</script>

<template>
  <button class="vue-btn" :class="{'use-load': useLoading}"
          :style="style" @click.stop="click" :disabled="disabled" ref="btn">
    <slot v-if="!$slots.lock||!disabled"/>
    <slot v-else name="lock"/>
  </button>
</template>

<script>
export default {
  name: 'BtnOnce',
  props: {
    clickFn: {
      required: true,
      type: Function,
    },
    errorFn: Function,
    canUseAgain: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      disabled: false,
      size: {},
    }
  },
  computed: {
    style() {
      const { width, height } = this.size
      return { minWidth: `${width}px`, minHeight: `${height}px` }
    },
  },
  watch: {
    disabled: {
      handler(val) {
        if (!val) this.getSize()
      },
      immediate: true,
    },
  },
  methods: {
    click(ev) {
      this.disabled = true
      const result = this.clickFn(ev)
      if (!result || !result.then) {
        this.disabled = false
        throw new Error('The result of clickFn should be a instance of Promise')
      }
      result.then(() => {
        this.disabled = !this.canUseAgain
      }).catch((e) => {
        if (this.errorFn) this.errorFn(e)
        else console.error(e)
        this.disabled = false
      })
    },
    getSize() {
      this.$nextTick(() => {
        this.size = {
          width: this.$refs.btn.clientWidth,
          height: this.$refs.btn.clientHeight,
        }
      })
    },
  },
}
</script>

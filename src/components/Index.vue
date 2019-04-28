<template>
  <button class="vue-btn"
          ref="btn"
          :style="style"
          :disabled="disabled"
          @click.stop="click">
    <slot v-if="$slots.lock&&disabled"
          name="lock"/>
    <slot v-else/>
  </button>
</template>

<script>
export default {
  name: 'VueButton',
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
      if (!this.disabled) return {}
      const height = `${this.size.height}px`
      return { width: `${this.size.width}px`, height, lineHeight: height }
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
      result
        .then(() => {
          this.disabled = !this.canUseAgain
        })
        .catch((e) => {
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

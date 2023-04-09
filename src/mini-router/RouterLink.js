import { defineComponent, h, unref } from "vue";

export default defineComponent({
  props: {
    to: {
      type: String,
      required: true,
    },
  },
  setup(props, { slots }) {
    // 可能是动态的 响应式。需要脱壳
    return () => {
      const to = unref(props.to);
      return h("a", { href: "#" + to }, slots.default());
    };
  },
});

<template>
  <div id="micro-vue"></div>
</template>
<script>
import { start } from "qiankun";
export default {
  mounted() {
    if (!window.qiankunStarted) {
      window.qiankunStarted = true;
      start();
    }
  },
};
</script>

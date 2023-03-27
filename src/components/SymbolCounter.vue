<template>
<p>{{store.state.inputLength}}/1000</p>
</template>

<script>
import {useStore} from "vuex";

export default {
  name: "SymbolCounter",
  setup() {
    const store = useStore();

    return {
      store,
    }
  }
}
</script>

<style scoped>

</style>

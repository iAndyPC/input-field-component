<template>
  <div>
    <h3>Текст перед полем ввода</h3>
  <textarea v-model="inputValue"
            v-bind:class="store.state.limitReached ? 'textareaError' : ''"
            class="form-input" rows="5" required>
  </textarea>
    <label class="label">Название поля</label>
    <p v-if="store.state.limitReached" class="textError">Ошибка</p>
    <SymbolCounter />
    <button @click="inputValue = ''">Очистить</button>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {ref, watch} from "vue";
import SymbolCounter from "@/components/SymbolCounter.vue";

export default {
  name: "TextArea",
  components: {SymbolCounter},
  setup() {
    const store = useStore();
    const inputValue = ref('');

    watch(inputValue, () => {
      store.commit('changeInputLength', inputValue.value.length);
      store.commit('changeLimitReached', inputValue.value.length > 1000)
    })

    return {
      inputValue,
      store
    }
  }
}
</script>

<style scoped>
h3 {
  font-weight: 500;
}
textarea {
  resize: none;
  border: 0;
  border-radius: 7px;
  background-color: rgba(128,128,128,0.2);
  padding: 5px 15px;
}
.label {
  position: absolute;
  pointer-events: none;
  left: 15px;
  right: 15px;
  top: 28px;
  white-space: nowrap;
  overflow: hidden;
  line-height: 40px;
  transition: .2s;
}
textarea:focus~.label,
textarea:not(:focus):valid~.label {
  top: 15px;
  font-size: 10px;
}
.textareaError {
  background-color: rgba(240,128,128,0.3);
}
.textError {
  color: rgba(255,0,0,0.8);
}
button {
  color: deepskyblue;
  border: 0;
  background-color: transparent;
}
</style>

import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  const ratings = ref({})
  const profile = ref({})
 const score = ref(0)

  return { count, doubleCount, increment,ratings, profile, score }
})

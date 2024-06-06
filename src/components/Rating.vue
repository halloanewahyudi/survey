<template>
  <div class="description rating-description italic font-semibold lg:hidden block">
    {{ ratingDescription }}
  </div>
  <div class="rating flex gap-6 items-center transition-all duration-150 ease-in-out" :class="ratingClass">
    <span
      class="w-9 h-9 rounded-full bg-neutral-50 border-secondary border-2 cursor-pointer hover:scale-110 duration-300"
      v-for="number in 5" :key="number" :class="{ 'selected': number <= selectedNumber }" @click="setRating(number)">
      <!--  {{ number }} -->
    </span>
    <div class="description rating-description italic font-semibold hidden lg:block">
      {{ ratingDescription }}
    </div>
  </div>
</template>

<script setup>
import { animate } from 'motion';
import { ref, computed, defineProps, defineEmits, watch, onMounted } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['update:modelValue']);
const selectedNumber = ref(0);

const ratingDescription = computed(() => {
  switch (selectedNumber.value) {
    case 1:
      return 'Sangat Puas';
    case 2:
      return 'Puas';
    case 3:
      return 'Netral';
    case 4:
      return 'Tidak Puas';
    case 5:
      return 'Sangat Tidak Puas';
    default:
      return '';
  }
});

const ratingClass = computed(() => {
  switch (ratingDescription.value) {
    case 'Sangat Puas':
      return 'very-satisfied';
    case 'Puas':
      return 'satisfied';
    case 'Netral':
      return 'neutral';
    case 'Tidak Puas':
      return 'dissatisfied';
    case 'Sangat Tidak Puas':
      return 'very-dissatisfied ';
    default:
      return '';
  }
});

const setRating = (number) => {
  selectedNumber.value = number;
  emit('update:modelValue', ratingDescription.value);
};

watch(() => props.modelValue, (newVal) => {
  selectedNumber.value = ['Sangat Puas', 'Puas', 'Netral', 'Tidak Puas', 'Sangat Tidak Puas'].indexOf(newVal) + 1;
}, { immediate: true });


onMounted(() => {
  animate('.description', {
    scale: [.5, 1.2],
    opacity: [0, 1]
  }, {
    duration: 1,
    delay:2
  })

})

</script>

<style scoped>
.rating span {
  background-color: #f4f4f4;
  transition: background-color 0.3s;
}

.very-satisfied span.selected {
  background-color: #4CAF50;
  /* Green */
}

.satisfied span.selected {
  background-color: #8BC34A;
  /* Light Green */
}

.neutral span.selected {
  background-color: #FFEB3B;
  /* Yellow */
}

.dissatisfied span.selected {
  background-color: #FF9800;
  /* Orange */
}

.very-dissatisfied span.selected {
  background-color: #F44336;
  /* Red */
}
</style>
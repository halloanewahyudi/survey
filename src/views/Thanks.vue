<script setup>
import { useCounterStore } from '@/stores/counter';
import { animate, timeline, stagger } from "motion"
import { onMounted } from 'vue';
const counter = useCounterStore()

onMounted(() => {
    const sequence = [
        [".thanks h2", { y:[50,0], scale:[.3,1] , opacity:[0,1]}, { duration: 0.05 }],
        [".thanks p", { opacity:[0,1], scale:[1.3,1]}, { duration: 0.05, delay: stagger(0.1) }],
    ]
    timeline(sequence, { duration: 2 })
})
</script>
<template>
    <div class="thanks bg-secondary text-white min-h-screen flex flex-col justify-center items-center">
        <h2 class=" text-2xl lg:text-4xl font-semibold scale-105 transition-all duration-200 delay-500">Terimakasih
            {{ counter.profile.nama }}</h2>
        <p class="thaks-text">Terimakasih telah mengikuti survey kepuasan pelanggan. </p>
    </div>

</template>
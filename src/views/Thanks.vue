<script setup>
import { useCounterStore } from '@/stores/counter';
const counter = useCounterStore()

</script>
<template>
    <div class="bg-secondary text-white min-h-screen flex flex-col justify-center items-center">
        <h2 class="text-2xl lg:text-4xl font-semibold scale-105 transition-all duration-200 delay-500">Terimakasih {{ counter.profile.nama }}</h2>
        <p>Terimakasih telah mengikuti survey kepuasan pelanggan. </p>
    </div>
</template>
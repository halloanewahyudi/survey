
<script setup>
import { animate } from "motion";
import { onMounted } from "vue";

const intro = () => {
    animate('.intro',{
        opacity:[0,1],
        scale:[0.5, 1],
    },{
        duration:2,
    })
}
onMounted(()=>{
    intro()
})
</script>
<template>
    <div class=" min-h-screen flex flex-col justify-center items-center">
        <div class="p-6 intro">
            <img class="img" src="@/assets/new-logo-KID.png" alt="">
        </div>
    </div>
</template>
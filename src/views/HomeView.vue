
<script setup>
import { computed, reactive } from 'vue';
import Rating from '@/components/Rating.vue';
import IconMobilVue from '@/components/icons/IconMobil.vue';
import IconClean from '@/components/icons/IconClean.vue';
import { useCounterStore } from '@/stores/counter';
import { useRouter } from 'vue-router';
import IconStaf from '@/components/icons/IconStaf.vue';
import IconSecurity from '@/components/icons/iconSecurity.vue';

const router = useRouter()
const counter =  useCounterStore()

const ratingValues = {
  'Sangat Puas': 5,
  'Puas': 4,
  'Netral': 3,
  'Tidak Puas': 2,
  'Sangat Tidak Puas': 1,
};

const totalScore = computed(() => {
  return Object.values(counter.ratings).reduce((total, rating) => {
    return total + (ratingValues[rating] || 0);
  }, 0);
});

const nilai = ['Sangat Puas','Puas', 'Netral','Tidak Puas', 'Sangat Tidak Puas']

const submitForm = () => {
  counter.score = totalScore.value
  router.push('/about')
 
  // Lakukan sesuatu dengan data ratings, misalnya mengirim ke server
};
</script>
<template>
   <header class="container mx-auto bg-primary text-white flex flex-col gap-4 pb-6">
      <div class="flex justify-between  w-full ">
        <div class="p-4 rounded-r-full bg-white text-primary font-semibold h-max">
          INDUSTRIALESTATE DEPARTEMENT
        </div>
        <div class="p-4 bg-white rounded-l-full ">
          <img src="@/assets/new-logo-KID.png" alt="" srcset="" class="w-28">
        </div>
      </div>
      <div class="p-4 text-center">
        <h1 class="text-3xl lg:text-5xl font-semibold"> SURVEY KEPUASAN PELANGGAN</h1>
        <h3 class=" text-xl lg:text-3xl font-semibold italic text-gray-300">
          CUSTOMERS SATISFACTION SURVEY
        </h3>
      </div>
      <div class="text-center font-semibold">
        <p>Terimakasih telah mengikuti survey kepuasan pelanggan. Survei ini akan memakan waktu kurang dari 5 menit dari
          waktu anda mengisi survey.</p>
        <p>
          Silakan menilai tingkat kepuasan anda pada setiap pernyataan berikut.
        </p>
      </div>
    </header>
  <div class="bg-secondary container mx-auto">
    <form @submit.prevent="submitForm" class="flex flex-col gap-2">
      <div class="rating-field grid grid-cols-1 lg:grid-cols-2 items-center pt-4 lg:pt-10">
        <div class="rt-text bg-primary text-white">
          <IconMobilVue class="shrink-0 text-5xl" />
          <p class="font-semibold">
            Nilai Kepuasan anda terhadap akses lokasi Kawasan Industri Dumai, (waktu tempuh, akses transportasi umum dan tempat parkir)?
          </p>
          <p>

          </p>
        </div>
        <div class="lg:-top-7 relative">
          <div class="  hidden lg:flex items-end gap-5 p-3 pl-1 text-white">
          <div v-for="item in nilai" :key="item" class="w-10 text-center text-sm font-semibold ">
              {{ item }}
            </div>
          </div>
            <div class="rt-val bg-white ">
          <Rating v-model:modelValue="counter.ratings.akses_lokasi" id="rating-quality" />
        </div>
        </div>
       
      </div>

      <div class="rating-field grid grid-cols-1 lg:grid-cols-2 items-center">
        <div class="rt-text bg-white text-primary">
          <IconClean class="shrink-0 text-5xl" />
          <p class="font-semibold">
           Bagaimana peniaian anda terhadap keseluruhan kebersihan area dan fasilitas kami?
          </p>
        </div>
        <div class="rt-val bg-primary text-white">
          <Rating v-model:modelValue="counter.ratings.kebersiham" id="rating-quality" />
        </div>
      </div>

      <div class="rating-field grid grid-cols-1 lg:grid-cols-2 items-center">
        <div class="rt-text bg-primary text-white">
          <IconSecurity class="shrink-0 text-5xl" />
          <p class="font-semibold">
           Bagaimana anda menilai pelayanan keamanan kami?
          </p>
        </div>
        <div class="rt-val bg-white ">
          <Rating v-model:modelValue="counter.ratings.keamanan" id="rating-quality" />
        </div>
      </div>

      <div class="rating-field grid grid-cols-1 lg:grid-cols-2 items-center">
        <div class="rt-text bg-white text-primary">
          <IconStaf class="shrink-0 text-5xl" />
          <p class="font-semibold">
           Seberapa puaskah anda dengan profesionalisme staff dan perwakilan kami
          </p>
        </div>
        <div class="rt-val bg-primary text-white">
          <Rating v-model:modelValue="counter.ratings.profesional_staf" id="rating-quality" />
        </div>
      </div>
      
      <button type="submit" class="bg-primary text-white py-3 px-9 max-w-max rounded-lg hover:scale-105 duration-300 m-6">Selesai</button>
    </form>
  </div>

</template>
<style scoped>
.rt-text{
  @apply flex gap-4 items-center p-6 text-lg z-10;
  clip-path: polygon(0% 0%, 95% 0%, 100% 50%, 95% 100%, 0% 100%);
  
}
.rt-val{
  @apply py-3 pl-14  relative -left-12 right-0 z-0 w-[calc(100%+48px)];
}
</style>


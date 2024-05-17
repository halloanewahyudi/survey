<script setup>
import { useCounterStore } from '@/stores/counter';
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import emailjs from '@emailjs/browser';
import IconLoading from '@/components/icons/Icon.Loading.vue';

const loading = ref(false)
const router = useRouter()
const counter = useCounterStore()
const data = ref({
  nama: '',
  company: '',
  email: '',
  akses_lokasi: counter.ratings.akses_lokasi,
  kebersiham: counter.ratings.kebersiham,
  keamanan: counter.ratings.keamanan,
  profesional_staf: counter.ratings.profesional_staf
})

//menandakakn element form
const myform = ref(null)

const formSubmit = () => {
  loading.value = true
  counter.profile = {
    nama: data.value.nama,
    company: data.value.company,
    email: data.value.email
  }
  axios.post('https://sheetdb.io/api/v1/dth2tlmjvowha', data.value)
    .then(function (response) {
      emailjs.sendForm('service_krk960s', 'template_ksnl9n8', myform.value, 'eFAz2Dv-jc3hsdCfb')
        .then(() => {
          btn.value = 'Send Email';
          alert('Sent!');
        }, (err) => {
          btn.value = 'Send Email';
          alert(JSON.stringify(err));
        });
      setTimeout(() => {
        router.push('/thanks')
      }, 300);
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
</script>
<template>
  <div class="about container mx-auto min-h-screen flex flex-col justify-center items-center bg-secondary text-white">
    <div class="p-6">

      <div>
        <h1 class="text-xl lg:text-3xl font-medium text-center mb-5">Silakan isi profile anda </h1>
        <form ref="myform" @submit.prevent="formSubmit" action=""
          class="flex flex-col gap-4 lg:w-[400px] min-w-[280px] mx-auto w-full bg-primary p-6 lg:p-10 rounded-lg">
          <div class="field-group ">
            <label for="nama">Nama</label>
            <input name="nama" type="text" class="form-control" v-model="data.nama">
          </div>
          <div class="field-group">
            <label for="company">Company</label>
            <input name="company" type="text" class="form-control" v-model="data.company">
          </div>
          <div class="field-group">
            <label for="company">Email</label>
            <input name="email" type="text" class="form-control" v-model="data.email">
          </div>
          <input type="hidden" name="score" :value="counter.score">
          <button type="submit" class="btn flex items-center justify-center gap-2"> Kirim   <span v-if="loading">
        <icon-loading></icon-loading></span></button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.field-group {
  @apply flex flex-col gap-2;
}

.form-control {
  @apply py-3 px-2 rounded-lg border w-full bg-opacity-25 bg-secondary ring-1 ring-secondary border-none;
}

.btn {
  @apply py-3 px-10 rounded-lg hover:scale-105 duration-300 bg-secondary mt-5
}
</style>

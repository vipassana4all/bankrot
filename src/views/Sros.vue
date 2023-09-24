<script setup>
    import { ref, computed } from 'vue';
    import { storeToRefs } from 'pinia'
    import { useSrosStore } from '@/stores/sros'
    import Sro from '@/components/Sro.vue'

    const { sros, loading, error } = storeToRefs(useSrosStore())
    const { fetchSros } = useSrosStore()
    let showSro = ref(false)
    let showSroId = ref(0)
    let showSroData = ref({})
    let filterSro = ref('')
    fetchSros('null')

    const filteredSros = computed(() => {
        if(filterSro.value.length < 2 ) return sros.value
        return sros.value.filter(s=>s.name.toLowerCase().includes(filterSro.value.toLowerCase()) || s.regnumber.toLowerCase().includes(filterSro.value.toLowerCase()))
    })
</script>

<template>
  <div class="min-w-screen min-h-screen mx-auto dark:bg-slate-800 dark:text-slate-300">

    <div v-if="loading" class="text-center h-screen flex items-center justify-center">
        <div role="status">
            <svg aria-hidden="true" class="inline w-20 h-20 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span class="sr-only text-4xl">Загрузка списка...</span>
        </div>
    </div>

    <p v-if="error">{{ error.message }}</p>

    <div v-if="sros.length > 0" class="flex flex-col items-center max-x-sm mx-auto">
        <h1 class="text-4xl p-10 font-bold">СРО</h1>
        <Sro v-if='showSro' :sro="showSroData" @close="showSro = false; router.push('/')" />
        <input v-show="!showSro" type="search" v-model="filterSro" class="bg-slate-500 rounded-xl p-2 px-5 m-2 bg-clip-padding text-xl text-slate-900 font-normal leading-[1.6] outline-none transition duration-200 ease-in-out focus:border-2  focus:border-slate-400 focus:text-slate-300 focus:outline-none" placeholder="Найти" />
        <p v-show="!showSro && filterSro.length > 0" class="text-slate-400 m-2">Показано: {{ filteredSros.length }} из {{ sros.length }}</p>
        <ul v-show="!showSro" class="list-outside hover:list-inside w-5/6 place-self-center select-none">
            <li 
                class="rounded-lg cursor-pointer odd:bg-slate-600 even:bg-slate-700 hover:bg-slate-500 px-5 py-2 m-1"
                v-for="sro in filteredSros" 
                :key="sro.id"
                @click="(e)=>{showSroId=(e.target.id==''?e.target.parentNode.id:e.target.id);showSroData=sros.filter(s=>s.id===+showSroId)[0];showSro=!!showSroData;}"
                >
                <span :id="sro.id" class="flex flex-row -indent-2 justify-between">
                    <span class="mr-10 font-serif text-md">{{sro.name}}</span>
                    <span class="whitespace-nowrap self-center text-xs text-slate-400 text-end">{{ sro.regnumber }}</span>
                </span>
            </li>
        </ul>
    </div>
  </div>
</template>

<style>

</style>
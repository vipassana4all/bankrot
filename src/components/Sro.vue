<script setup>
    defineProps(['sro'])
</script>

<template>
    <button type="button" @click="$emit('close')" class="raunded-lg shadow-lg px-5 bg-slate-600 text-lg">Назад</button>
    <div class="flex flex-col items-center max-x-sm mx-auto w-5/6">
        <h3 class="text-xl p-10 font-bold place-self-center bg-slate-700 m-2" id="page-title">{{ sro.name }} </h3>
    <table class="table-auto border-collapse border border-slate-500 m-5  place-self-center">
        <tbody>
            <tr v-if="sro.name" class="">
                <th class="bg-slate-600 border border-slate-500 p-2">Название</th>
                <td class="border border-slate-500 p-2">{{ sro.name }}</td>
            </tr>
            <tr class="">
                <th class="bg-slate-600 border border-slate-500">Регистрационный номер</th>
                <td class="border border-slate-500 p-2">{{ sro.regnumber }}</td>
            </tr>
            <tr class="">
                <th class="bg-slate-600 border border-slate-500 p-2">Дата регистрации</th>
                <td class="border border-slate-500 p-2">{{ sro.datereg }}</td>
            </tr>
            <tr class="">
                <th class="bg-slate-600 border border-slate-500 p-2">ИНН</th>
                <td class="border border-slate-500 p-2">{{ sro.inn }}</td>
            </tr>
            <tr class="">
                <th class="bg-slate-600 border border-slate-500 p-2">Юридический адрес по данным СРО </th>
                <td class="border border-slate-500 p-2">{{ sro.ur_address_sro }} </td>
            </tr>
            <tr class="">
                <th class="bg-slate-600 border border-slate-500 p-2">Юридический адрес по данным Росреестра </th>
                <td class="border border-slate-500 p-2">{{ sro.ur_address }} </td>
            </tr>
            <tr class="">
                <th class="bg-slate-600 border border-slate-500 p-2">Почтовый адрес </th>
                <td class="border border-slate-500 p-2">{{ sro.address }} </td>
            </tr>
            <tr class="">
                <th class="bg-slate-600 border border-slate-500 p-2">Телефон/Факс </th>
                <td class="border border-slate-500 p-2">{{ sro.phone }} </td>
            </tr>
            <tr class="">
                <th class="bg-slate-600 border border-slate-500 p-2">Адрес электронной почты </th>
                <td class="border border-slate-500 p-2">{{ sro.email }}
                </td>
            </tr>
            <tr v-if="sro.url != ''" class="">
                <th class="bg-slate-600 border border-slate-500 p-2">Адрес в интернете </th>
                <td class="border border-slate-500 p-2 hover:bg-slate-500">
                    <a :href="`${sro.url}`" target="_blank" rel="nofollow">{{ sro.url }}</a>
                </td>
            </tr>
            <tr v-if="sro.fond_sro != '0'" class="">
                <th class="bg-slate-600 border border-slate-500 p-2">Размер компенсационного фонда (по данным СРО) </th>
                <td class="border border-slate-500 p-2">{{ sro.fond_sro }} </td>
            </tr>
            <tr v-if="sro.date_fond_change != '1888-01-01'" class="">
                <th class="bg-slate-600 border border-slate-500 p-2">Дата изменения размера комп. фонда (по данным СРО) </th>
                <td class="border border-slate-500 p-2">{{ sro.date_fond_change }}</td>
            </tr>
            <tr class="">
                <th class="bg-slate-600 border border-slate-500 p-2">Размер компенсционного фонда (по данным Росреестра) </th>
                <td class="border border-slate-500 p-2">{{ sro.fond }} </td>
            </tr>
            <tr class="">
                <th class="bg-slate-600 border border-slate-500 p-2">Руководитель </th>
                <td class="border border-slate-500 p-2">{{ sro.fio }} </td>
            </tr>
            <tr v-if="sro.face != ''" class="">
                <th class="bg-slate-600 border border-slate-500 p-2">Контактное лицо </th>
                <td class="border border-slate-500 p-2">{{ sro.face }} </td>
            </tr>
            <tr v-if="sro.dateout != '1888-01-01'" class="">
                <th class="bg-slate-600 border border-slate-500 p-2">Дата исключения </th>
                <td class="border border-slate-500 p-2">{{ sro.dateout }}</td>
            </tr>
            <tr v-if="sro.osnovanie != ''" class="">
                <th class="bg-slate-600 border border-slate-500 p-2">Основание исключения </th>
                <td class="border border-slate-500 p-2">{{ sro.osnovanie }} </td>
            </tr>
            <tr class="">
                <th class="bg-slate-600 border border-slate-500 p-2">Адрес СРО на федресурсе </th>
                <td class="border border-slate-500 p-2 hover:bg-slate-500">
                    <a :href="`${sro.efrsb}`" target="_blank" rel="nofollow">{{ sro.efrsb }}</a>
                </td>
            </tr>
        </tbody>
    </table>
    </div>
    <button type="button" @click="$emit('close')" class="raunded-lg shadow-lg px-5 bg-slate-600 text-lg">Назад</button>
</template>

<style>
</style>
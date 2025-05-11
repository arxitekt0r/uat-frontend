<template>
  <div class="bg-white rounded shadow p-4">
    <h2 class="text-xl font-semibold text-primary mb-4">All Drivers</h2>

    <table class="min-w-full text-left text-sm">
      <thead class="border-b border-gray-300 text-gray-600">
        <tr>
          <th class="p-2">Name</th>
          <th class="p-2">Phone</th>
          <th class="p-2">Rating</th>
          <th class="p-2">Active</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="driver in drivers" :key="driver.id" class="border-b border-gray-100">
          <td class="p-2">{{ driver.name }}</td>
          <td class="p-2">{{ driver.phone }}</td>
          <td class="p-2">{{ driver.rating }}</td>
          <td class="p-2">
            <span :class="driver.active ? 'text-green-600' : 'text-red-500'">
              {{ driver.active ? 'Yes' : 'No' }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from '../services/axios'

const drivers = ref([])

onMounted(async () => {
  const res = await axios.get('/drivers/all')
  drivers.value = res.data
})
</script>

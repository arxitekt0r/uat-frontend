<template>
  <div
    class="w-screen h-screen bg-cover bg-center flex items-center justify-center"
    style="background-image: url('/pagedesign.png')"
  >
    <div class="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-8 w-full max-w-md shadow-2xl">
      <img src="/logo.png" class="w-40 mx-auto mb-6" alt="UAT Logo" />
      <h2 class="text-2xl font-bold text-center text-black mb-4">Login</h2>

      <input
        v-model="username"
        type="text"
        placeholder="Username"
        class="w-full mb-3 p-3 rounded border border-gray-300 text-black"
      />

      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="w-full mb-4 p-3 rounded border border-gray-300 text-black"
      />

      <button
        @click="login"
        class="w-full bg-primary text-white py-2 rounded hover:opacity-90 transition"
      >
        Login
      </button>

      <p v-if="error" class="text-red-600 text-center mt-3">{{ error }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from '../services/axios'
import { useUserStore } from '../stores/user'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()
const userStore = useUserStore()

const login = async () => {
  error.value = ''
  try {
    const payload = new URLSearchParams()
    payload.append('username', username.value)
    payload.append('password', password.value)

    const res = await axios.post('https://api.uatsystems.dev/users/login', payload, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })

    userStore.setToken(res.data.access_token)
    await userStore.fetchUser()
    router.push('/dashboard')
  } catch (err) {
    error.value = err.response?.data?.detail || 'Login failed'
  }
}


</script>

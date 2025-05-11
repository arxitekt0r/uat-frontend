<template>
  <div class="min-h-screen flex">
    <!-- Sidebar -->
    <aside class="w-64 bg-black text-white flex flex-col p-4">
      <img src="/logo.png" alt="UAT Logo" class="w-32 mx-auto mb-6" />
      <nav class="flex flex-col gap-3">
        <RouterLink to="/dashboard" class="hover:text-primary">Dashboard</RouterLink>
        <RouterLink to="/drivers" class="hover:text-primary">Drivers</RouterLink>
        <RouterLink to="/loads" class="hover:text-primary">Loads</RouterLink>
        <button @click="logout" class="text-left text-red-400 mt-auto">Logout</button>
      </nav>
    </aside>

    <!-- Main content -->
    <main class="flex-1 p-6 bg-gray-100">
      <slot />
    </main>
  </div>
</template>

<script setup>
import { useUserStore } from '../stores/user'
import { useRouter } from 'vue-router'

const router = useRouter()
const userStore = useUserStore()

const logout = () => {
  userStore.logout()
  router.push('/login')
}
</script>

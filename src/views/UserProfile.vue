<script setup>
import { useAuthStore } from "@/stores/AuthUserStore";
const store = useAuthStore()
</script>
<template>
  <div class="card" v-if="store.user">
    <div class="card-body">
      <div class="flex items-center gap-5">
        <div class="avatar">
          <div class="w-24 rounded-full">
            <img :src="store.user.avatar" />
          </div>
        </div>
        <div>
          <h1 class="text-2xl">{{ store.user.name }}</h1>
          <h2 class="text-lg">{{ store.user.username }}</h2>
          <button @click="store.logout" class="mt-3 btn btn-xs btn-outline">
            Logout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

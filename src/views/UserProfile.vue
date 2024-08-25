<script setup>
import { useAuthUser } from "@/composables/useAuthUser";
const { user, logout } = useAuthUser();
</script>
<template>
  <div class="card" v-if="user">
    <div class="card-body">
      <div class="flex items-center gap-5">
        <div class="avatar">
          <div class="w-24 rounded-full">
            <img :src="user.avatar" />
          </div>
        </div>
        <div>
          <h1 class="text-2xl">{{ user.name }}</h1>
          <h2 class="text-lg">{{ user.username }}</h2>
          <button @click="logout" class="mt-3 btn btn-xs btn-outline">
            Logout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

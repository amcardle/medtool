<template>
  <Head>
    <title>MedTool</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>

  <main>
    <div className="flex flex-col h-screen md:px-4 px-1 mx-auto md:container text-sm md:text-base">
      <div className="pb-2 border-b-2"><!-- Header -->MedTool</div>

      <div className="flex-grow">
        <!-- Body -->
        <router-view />
      </div>

      <div className="border-t-2 text-sm"><!-- Footer -->{{ REF }}#{{ SHA }}</div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  setup() {
    return { REF: process.env.VUE_APP_GIT_COMMIT_REF, SHA: process.env.VUE_APP_GIT_COMMIT_SHA };
  }
});
</script>

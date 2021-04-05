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

      <div className="border-t-2 text-sm">
        <!-- Footer -->

        <p>
          {{ process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF }}#{{
            process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA
          }}
        </p>
      </div>
    </div>
  </main>
</template>

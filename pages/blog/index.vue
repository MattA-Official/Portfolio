<template>
    <ContentList path="/blog">
        <template #default="{ list }">
            <div v-for="post in list" :key="post._path">
                <NuxtLink :to="post._path">
                    <Card v-for="post in list" :key="post.slug" :url="post._path" :title="post.title"
                        :body="post.description" />
                </NuxtLink>
            </div>
        </template>
        <template #not-found>
            <p>No articles found.</p>
        </template>
    </ContentList>
</template>
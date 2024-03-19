<template>
    <ContentList path="/blog">
        <template #default="{ list }">
            <CardGrid :items="list" />
        </template>
        <template #not-found>
            <p>No articles found.</p>
        </template>
    </ContentList>
</template>
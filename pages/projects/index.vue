<template>
    <ContentList path="/projects">
        <template #default="{ list }">
            <CardGrid :items="list" />
        </template>
        <template #not-found>
            <p>No articles found.</p>
        </template>
    </ContentList>
</template>
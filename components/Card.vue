<script setup lang="ts">
defineProps({
    title: String,
    body: String,
    url: String,
    // image.src: String,
    // image.alt: String,
});
</script>

<template>
    <NuxtLink :to="url">
        <div>
            <img src="~/assets/img/placeholder.png" />
        </div>
        <h3>
            {{ title }}
        </h3>
        <p>
            {{ body }}
        </p>
    </NuxtLink>
</template>

<style scoped lang="scss">
a {
    width: 100%;
    text-decoration: none;
    line-height: 1.4;
    border-radius: 8px;
    color: var(--text);
}

img {
    border-radius: 16px;
}

h3 {
    margin: 0;
    font-family: var(--body);
    font-size: 1.5rem;
    font-weight: normal;
    text-align: center;
}

p {
    font-size: 1rem;
    line-height: 1.5;
    text-indent: 0;
    text-align: center;
    margin: 0.5rem 0 0;
}

a:hover {
    transform: scale(1.05);
}
</style>

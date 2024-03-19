<script setup lang="ts">
defineProps({
    title: String,
    body: String,
    url: String,
    image: {
        type: Object,
        default: () => ({ src: '', alt: '' }),
    }
});
</script>

<template>
    <li>
        <div>
            <img :src="image.src" :alt="image.alt">
        </div>
        <h3 class="card__title">
            {{ title }}
        </h3>
        <p class="card__txt">
            {{ body }}
        </p>
    </li>
</template>
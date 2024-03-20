<script setup>
const colorMode = useColorMode()

const toggleColorMode = () => {
    colorMode.value = colorMode.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
    <button type="button" name="Toggle color mode" aria-label="Toggle color mode" @click="toggleColorMode">
        <Icon v-if="colorMode.value == 'light'" name="material-symbols:light-mode-rounded" />
        <Icon v-else name="material-symbols:dark-mode-rounded" />
    </button>
</template>

<style scoped lang="scss">
button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    margin: auto 0;
    font-size: 1.5rem;
    color: var(--text);
    width: 2rem;
    height: 2rem;
}
</style>
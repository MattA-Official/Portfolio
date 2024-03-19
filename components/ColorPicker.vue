<script setup>
const colorMode = useColorMode()

const toggleColorMode = () => {
    colorMode.value = colorMode.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
    <div>
        <Icon v-if="colorMode.value == 'light'" name="material-symbols:light-mode-rounded" @click="toggleColorMode" />
        <Icon v-else name="material-symbols:dark-mode-rounded" @click="toggleColorMode" />
    </div>
</template>
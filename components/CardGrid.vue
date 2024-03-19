<script setup>
defineProps({
    items: Array,
});
</script>

<template>
    <ul>
        <li v-for="item in items" :key="item._path">
            <Card :url="item._path" :title="item.title" :body="item.description" />
        </li>
    </ul>
</template>

<style scoped lang="scss">
ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(38ch, 1fr));
    gap: 1rem;
    padding: 0;
}

li {
    list-style: none;
    display: flex;
    background-size: 400%;
    padding: 20px;
}
</style>
<template>
    <header>
        <h1>Matt Adcock</h1>
        <Navigation />
        <ColorPicker />
    </header>
</template>

<style scoped lang="scss">
header {
    display: flex;
    justify-content: space-between;
    margin-top: 0.8rem;
}

h1 {
    font-family: var(--header);
    font-size: 1.3rem;
    padding: 0;
    margin: auto 0;
}

h1,
div {

    a:hover,
    a:focus {
        text-decoration: underline var(--underline);
        text-decoration-thickness: 2px;
        text-underline-offset: 6px;
    }
}
</style>

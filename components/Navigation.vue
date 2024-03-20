<template>
    <nav>
        <ul>
            <li>
                <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/about">About</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/blog">Blog</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/projects">Projects</NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<style scoped lang="scss">
nav {
    font-family: var(--body);
    font-size: 1.1rem;
    text-align: right;
}

nav {
    a {
        color: var(--text);
        text-decoration: none;
        margin: 0 10px;
    }

    a:hover,
    a:focus {
        text-decoration: underline var(--underline);
        text-decoration-thickness: 2px;
        text-underline-offset: 6px;
    }

    ul {
        list-style: none;
        padding: 0;
        display: flex;
    }
}
</style>
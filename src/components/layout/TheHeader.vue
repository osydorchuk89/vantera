<script setup lang="ts">
const navLinks = [
    { name: "About company", path: "/about" },
    { name: "Service", path: "/" },
    { name: "Portfolio", path: "/" },
    { name: "Contacts", path: "/" },
];
</script>

<template>
    <header>
        <img src="../../assets/logo.png" width="137" height="100" alt="Vantera logo" />
        <ul>
            <li v-for="link in navLinks" :key="link.name">
                <RouterLink :to="link.path">{{ link.name }}</RouterLink>
            </li>
        </ul>
        <p>EN</p>
    </header>
</template>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 120px;
    background-color: var(--green);
}
ul {
    display: flex;
    list-style: none;
    justify-content: space-between;
    gap: 40px;
}
a {
    text-decoration: none;
    font-size: 18px;
    color: black;
}
a:hover {
    text-decoration: underline;
}
p {
    font-size: 18px;
}
</style>

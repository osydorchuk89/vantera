<script setup lang="ts">
import { watch } from "vue";
import { useWindowSize } from "@vueuse/core";
import { useRouter, useRoute } from "vue-router";
import { storeToRefs } from "pinia";

import { menuNavLinks } from "@/lib/data";
import { useDrawerStore } from "@/stores/store";
import DrawerMenu from "../DrawerMenu.vue";
import LanguageDropdown from "../LanguageDropdown.vue";
import { useLanguage } from "@/hooks/useLanguage";
import MenuIcon from "../icons/MenuIcon.vue";

const router = useRouter();
const route = useRoute();
const language = useLanguage();

// side drawer menu logic
// const { width } = useWindowSize();
const drawerStore = useDrawerStore();
// const { drawerOpen } = storeToRefs(drawerStore);
// watch(drawerOpen, (newValue) => {
//     document.body.style.overflow = newValue ? "hidden" : "auto";
// });
</script>

<template>
    <header class="header-container">
        <img
            class="logo"
            src="../../assets/images/logo.png"
            width="137"
            height="100"
            alt="Vantera logo"
            @click="router.push('/')"
        />
        <ul class="menu-nav">
            <li v-for="link in menuNavLinks" :key="link.name.en">
                <RouterLink
                    class="nav-link"
                    :style="route.path === link.path && 'background-color: var(--yellow)'"
                    :to="link.path"
                    >{{ language === "en" ? link.name.en : link.name.cz }}</RouterLink
                >
            </li>
        </ul>
        <LanguageDropdown parent="header" />
        <MenuIcon class="menu-button" @click="drawerStore.openDrawer" />
        <!-- <DrawerMenu v-if="drawerOpen && width <= 1024" /> -->
    </header>
</template>

<style scoped>
.header-container {
    position: sticky;
    top: 0;
    z-index: 5;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    background-color: var(--green);
}

.logo {
    cursor: pointer;
}

.menu-nav {
    display: none;
    list-style: none;
    justify-content: space-between;
    gap: 40px;
}

.menu-button {
    display: block;
    cursor: pointer;
}

@media (min-width: 1024px) {
    .container {
        padding: 0 40px;
    }

    .menu-nav {
        display: flex;
        flex-direction: row;
    }

    .menu-button {
        display: none;
    }
}

@media (min-width: 1280px) {
    .header-container {
        padding: 0 120px;
    }
}
</style>

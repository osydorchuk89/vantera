<script setup lang="ts">
import { menuNavLinks } from "@/lib/data";
import { useDrawerStore } from "@/stores/store";
import LanguageDropdown from "./LanguageDropdown.vue";
import { useLanguage } from "@/hooks/useLanguage";
import BaseDialog from "./BaseDialog.vue";
import CloseIcon from "./icons/CloseIcon.vue";

const language = useLanguage();
const drawerStore = useDrawerStore();
</script>

<template>
    <BaseDialog
        :onClose="drawerStore.closeDrawer"
        :justify-content="'flex-end'"
        dialog-class="drawer-menu"
    >
        <CloseIcon class="close-icon" @click="drawerStore.closeDrawer" />
        <ul class="menu-nav">
            <li v-for="link in menuNavLinks" :key="link.name.en">
                <RouterLink class="nav-link" :to="link.path">{{
                    language === "en" ? link.name.en : link.name.cz
                }}</RouterLink>
            </li>
        </ul>
        <LanguageDropdown parent="drawer" />
        <img
            class="logo"
            src="../assets/images/logo.png"
            width="110"
            height="80"
            alt="Vantera logo"
        />
    </BaseDialog>
</template>

<style scoped>
.menu-nav {
    display: flex;
    list-style: none;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    gap: 48px;
}
.language-button {
    font-size: 18px;
}
.logo {
    position: absolute;
    bottom: 40px;
    right: 16px;
}

.language-dropdown {
    display: flex;
    position: relative;
    flex-direction: column;
    width: 49px;
}

.language-active {
    font-size: 18px;
    padding: 8px 12px;
    border: none;
    /* box-shadow: none; */
    background-color: transparent;
    cursor: pointer;
}

.language-active:hover {
    box-shadow: 0 3px 0 0 var(--yellow);
}

.language-passive {
    position: absolute;
    width: 100%;
    top: 42px;
    font-size: 18px;
    background-color: var(--yellow);
    padding: 8px 12px;
    border: none;
    box-shadow: 0 0 0 3px var(--yellow);
    z-index: 1;
    cursor: pointer;
}

.close-icon {
    top: 32px;
    right: 32px;
}

@media (min-width: 1024px) {
    .language-dropdown {
        display: none;
    }
}
</style>

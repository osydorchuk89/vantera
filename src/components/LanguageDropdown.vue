<script setup lang="ts">
import { useLanguageStore } from "@/stores/store";
import { onClickOutside } from "@vueuse/core";
import { storeToRefs } from "pinia";
import { ref, useTemplateRef } from "vue";

// header or drawer
const props = defineProps<{
    parent: string;
}>();

// language logic
const languageStore = useLanguageStore();
const { language } = storeToRefs(languageStore);

// language dropdown logic
const langugeDropdownOpen = ref(false);
const triggerLanguageDropdown = () => {
    langugeDropdownOpen.value = !langugeDropdownOpen.value;
};
const changeLanguage = () => {
    languageStore.changeLanguage();
    langugeDropdownOpen.value = false;
};
const target = useTemplateRef<HTMLElement>("target");
onClickOutside(target, () => (langugeDropdownOpen.value = false));
</script>

<template>
    <div
        :class="props.parent === 'header' ? 'language-dropdown-header' : 'language-dropdown-drawer'"
        ref="target"
    >
        <button
            class="language-active"
            :style="langugeDropdownOpen && 'box-shadow: 0 0 0 1px var(--yellow)'"
            @click="triggerLanguageDropdown"
        >
            {{ language == "en" ? "EN" : "CZ" }}
        </button>
        <button class="language-passive" v-if="langugeDropdownOpen" @click="changeLanguage">
            {{ language == "en" ? "CZ" : "EN" }}
        </button>
    </div>
</template>

<style scoped>
.language-dropdown-header {
    display: none;
}

.language-dropdown-drawer {
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
    box-shadow: 0 1px 0 0 var(--yellow);
}

.language-passive {
    position: absolute;
    width: 100%;
    top: 38px;
    font-size: 18px;
    background-color: var(--yellow);
    padding: 8px 12px;
    border: none;
    box-shadow: 0 0 0 1px var(--yellow);
    z-index: 1;
    cursor: pointer;
}

@media (min-width: 1024px) {
    .language-dropdown-header {
        display: flex;
        position: relative;
        flex-direction: column;
        width: 49px;
    }

    .language-dropdown-drawer {
        display: none;
    }
}
</style>

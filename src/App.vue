<script setup lang="ts">
import { watch } from "vue";
import { RouterView, useRoute } from "vue-router";
import { useWindowSize } from "@vueuse/core";
import { storeToRefs } from "pinia";

import { useDrawerStore, useQuestionDialogStore, useSuccessDialogStore } from "./stores/store";
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";
import SuccessDialog from "./components/SuccessDialog.vue";
import QuestionDialog from "./components/QuestionDialog.vue";
import DrawerMenu from "./components/DrawerMenu.vue";

const { width } = useWindowSize();

const route = useRoute();
const drawerStore = useDrawerStore();
watch(route, () => {
    drawerStore.closeDrawer();
});

const successDialogStore = useSuccessDialogStore();
const questionDialogStore = useQuestionDialogStore();
const { dialogOpen: questionDialogOpen } = storeToRefs(questionDialogStore);
const { dialogOpen: successDialogOpen } = storeToRefs(successDialogStore);
const { drawerOpen } = storeToRefs(drawerStore);
</script>

<template>
    <TheHeader />
    <RouterView />
    <TheFooter />
    <SuccessDialog v-if="successDialogOpen" />
    <QuestionDialog v-if="questionDialogOpen" />
    <DrawerMenu v-if="drawerOpen && width <= 1024" />
</template>

<style></style>

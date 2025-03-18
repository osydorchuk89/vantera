<script setup lang="ts">
import MapSection from "@/components/layout/contacts/MapSection.vue";
import ContactsSection from "@/components/layout/contacts/ContactsSection.vue";
import QuestionSection from "@/components/QuestionSection.vue";
</script>

<template>
    <main>
        <MapSection />
        <ContactsSection />
        <QuestionSection :is-disclosure="false" />
    </main>
</template>

<style scoped></style>

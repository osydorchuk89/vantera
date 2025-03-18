<script setup lang="ts">
import AdditionalContacts from "@/components/AdditionalContacts.vue";
import ContactInfo from "@/components/ContactInfo.vue";
</script>

<template>
    <div class="contact-container section-container">
        <ContactInfo icon-fill="white" />
        <AdditionalContacts />
    </div>
</template>

<style scoped>
.contact-container {
    display: flex;
    flex-direction: column;
    gap: 40px;
    justify-content: space-between;
    background-color: var(--grey);
    color: white;
}

@media (min-width: 430px) {
    .contact-container {
        flex-direction: row;
    }
}
</style>

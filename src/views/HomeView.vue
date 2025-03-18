<script setup lang="ts">
import HeroSection from "@/components/layout/home/HeroSection.vue";
import FeaturesSection from "@/components/layout/home/FeaturesSection.vue";
import QuestionSection from "@/components/QuestionSection.vue";
import ProjectsSection from "@/components/layout/ProjectsSection.vue";
import ContactSection from "@/components/layout/ContactSection.vue";
</script>

<template>
    <main>
        <HeroSection />
        <FeaturesSection />
        <QuestionSection :is-disclosure="true" />
        <ProjectsSection />
        <ContactSection />
    </main>
</template>

<style scoped></style>

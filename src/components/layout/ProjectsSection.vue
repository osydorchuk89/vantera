<script setup lang="ts">
// import ProjectCard from "@/components/ProjectCard.vue";
import { useLanguage } from "@/hooks/useLanguage";
import { projectsText } from "@/lib/data";

const language = useLanguage();
</script>

<template>
    <div class="projects-fallback section-container">
        <h2 class="section-title projects-title">
            {{ language === "en" ? projectsText.title.en : projectsText.title.cz }}
        </h2>
        <p class="fallback-text">
            {{ language === "en" ? projectsText.fallbackText.en : projectsText.fallbackText.cz }}
        </p>
        <!-- <ul class="project-list">
            <ProjectCard
                v-for="(project, index) in projectsText.projects"
                :key="project.image"
                :title="language === 'en' ? project.title.en : project.title.cz"
                :period="language === 'en' ? project.period.en : project.period.cz"
                :description="language === 'en' ? project.description.en : project.description.cz"
                :image="project.image"
                :reversed="index % 2 !== 0"
            />
        </ul> -->
    </div>
</template>

<style scoped>
.projects-container {
    display: flex;
    flex-direction: column;
    gap: 32px;
    background-color: var(--grey);
}

.projects-fallback {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.projects-fallback::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("../../assets/images/projects-fallback.png");
    background-position: center;
    background-size: cover;
    filter: grayscale(1) brightness(50%);
    z-index: -1;
}

.projects-title,
.fallback-text {
    color: white;
}

.fallback-text {
    font-size: 18px;
    line-height: 23px;
}

.project-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

@media (min-width: 640px) {
    .projects-container {
        gap: 40px;
    }

    .fallback-text {
        font-size: 24px;
        line-height: 31px;
    }
}

@media (min-width: 1024px) {
    .project-list {
        gap: 40px;
    }
}
</style>

<script setup lang="ts">
import { useLanguage } from "@/hooks/useLanguage";
import { footerText } from "@/lib/data";

const language = useLanguage();
</script>

<template>
    <footer class="footer-container">
        <img
            class="logo"
            src="../../assets/images/logo.png"
            width="137"
            height="100"
            alt="Vantera logo"
        />
        <div class="footer-content">
            <h2 class="footer-title">
                {{ language === "en" ? footerText.title.en : footerText.title.cz }}
            </h2>
            <p class="footer-description">
                {{ language === "en" ? footerText.description.en : footerText.description.cz }}
            </p>
            <p class="footer-copyright">2025 designer</p>
        </div>
    </footer>
</template>

<style scoped>
.footer-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 32px 16px;
    background-color: var(--green);
}

.footer-content {
    display: flex;
    flex-direction: column;
}

.footer-title {
    font-size: 24px;
    font-weight: 600;
    margin-top: 24px;
    line-height: 32px;
}

.footer-description {
    font-size: 18px;
    margin-top: 8px;
    margin-bottom: 16px;
    line-height: 23px;
}

.footer-copyright {
    font-size: 18px;
    line-height: 23px;
}

@media (min-width: 640px) {
    .footer-container {
        padding: 40px 40px 80px 40px;
    }

    .footer-title {
        font-size: 40px;
        line-height: 52px;
        margin-top: 32px;
    }

    .footer-description {
        margin-top: 16px;
    }
}

@media (min-width: 1280px) {
    .footer-container {
        padding: 80px 120px 40px 120px;
        flex-direction: row;
        justify-content: space-between;
    }

    .footer-content {
        width: 50%;
        align-items: flex-end;
    }

    .footer-title {
        margin-top: 0;
    }

    .footer-description {
        text-align: right;
    }
}
</style>

<script setup lang="ts">
const props = defineProps<{
    text: string;
    backgroundColor: string;
    borderStyle: string;
}>();
</script>

<template>
    <button>
        <p class="button-text">{{ props.text }}</p>
    </button>
</template>

<style scoped>
button {
    background-color: v-bind("props.backgroundColor");
    border: v-bind("props.borderStyle");
    width: 100%;
    padding: 12px 32px;
    cursor: pointer;
    color: black;
}

button:hover {
    box-shadow: 0px 2px 4px 0px #22452533;
    box-shadow: 0px -2px 4px 0px #22452533;
}

button:active {
    box-shadow: 0px 2px 4px 0px #22452533 inset;
    box-shadow: 0px -2px 4px 0px #22452533 inset;
    animation-timing-function: ease-out;
    animation-duration: 300ms;
}

.button-text {
    font-size: 18px;
}

@media (min-width: 640px) {
    button {
        width: auto;
        align-self: flex-start;
    }
}
</style>

<script setup lang="ts">
const features = [
    { title: "Integrated approach", description: 'We carry out all the stages of construction, from design to delivery "key"' },
    { title: "Modern technologies", description: "We reduce the time and costs through innovative methods" },
    { title: "Durability", description: "We use cutting-edge materials to make buildings work for decades" },
    { title: "Style and reliability", description: "Thoughtfulness in everything from foundation to finishing" },
    { title: "Quality assurance", description: "We provide warranty for operation and maintenance" },
    { title: "Professional team", description: "Engineers, architects and builders with many years of experience and high standards" },
];
</script>

<template>
    <div class="container">
        <div class="features">
            <h2>Unique features of VANTERA</h2>
            <div class="features-columns">
                <ul>
                    <li v-for="feature in features.slice(0, 3)" :key="feature.title">
                        <h3>{{ feature.title }}</h3>
                        <p>{{ feature.description }}</p>
                    </li>
                </ul>
                <ul>
                    <li v-for="feature in features.slice(3)" :key="feature.title">
                        <h3>{{ feature.title }}</h3>
                        <p>{{ feature.description }}</p>
                    </li>
                </ul>
            </div>
        </div>
        <img width="488" height="447" src="../../assets/construction-site.png" alt="A construction site" />
    </div>
</template>

<style scoped>
.container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    background-color: var(--grey);
    padding: 120px;
    color: white;
}
.features {
    display: flex;
    flex-direction: column;
    gap: 40px;
    height: 430px;
}
.features-columns {
    display: flex;
    gap: 80px;
    height: 100%;
}
h2 {
    font-size: 40px;
    font-weight: 600;
}
ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* gap: 24px; */
}
li {
    display: flex;
    flex-direction: column;
    gap: 12px;
}
h3 {
    font-size: 24px;
    font-weight: 500;
}
p {
    font-size: 18px;
    line-height: 23px;
}
img {
    object-fit: cover; /* Do not scale the image */
    object-position: center;
}
</style>

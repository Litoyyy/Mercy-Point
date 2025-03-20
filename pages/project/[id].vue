<script lang="ts" setup>
    import { infoProjects } from '/_nuxt/composables/info/projects';

    const route = useRoute()

    const { projectsArray } = infoProjects();
    
    const selectedProject = projectsArray.value.find(project=>project.id === Number(route.params.id));
</script>

<template>
    <section>
        <div class="news-page-section">
            <div class="news-page-section__container container">
                <div class="news-page-section__banner">
                    <img :src="selectedProject.image" alt="Projects Banner" v-if="selectedProject && !!selectedProject.image">
                    <img src="/_nuxt/assets/images/stub.webp" alt="Projects Banner" v-else>
                </div>
                <div class="news-page-section__text" v-if="selectedProject && !!selectedProject.text">
                    <div class="news-page-section__text__container">
                        <h1>{{ selectedProject.title }}</h1>
                        <div v-html="selectedProject.text"></div>
                        <ElementLink
                            color="accent"
                            link="/projects/"
                        >Посмотреть другие проекты
                        </ElementLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

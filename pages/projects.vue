<script lang="ts" setup>
    import { infoProjects } from '~/composables/info/projects';

    const { projectsArray } = infoProjects();

    const paginationVal = ref(4);

    const cutProjectsArr = computed(() => projectsArray.value.slice(0, paginationVal.value));
</script>

<template>
    <section>
        <div class="projects-all-section">
            <div class="projects-all-section__container container">
                <div class="title-block">
                    <div class="title-block__title">
                        <div class="breadcrumbs">
                            <ElementLink link="/"
                            >Главная
                            </ElementLink>
                            <span>/</span>
                            <ElementLink link="/projects/"
                            >Проекты
                            </ElementLink>
                        </div>
                        <span class="heading">Проекты фонда</span>
                    </div>
                </div>
                <div class="projects-all-section__info-block">
                    <CardProject :info="project" v-for="project in cutProjectsArr"/>
                </div>
                <div class="projects-all-section__btn-block">
                    <ElementButton
                        v-if="cutProjectsArr.length < projectsArray.length"
                        @click="paginationVal += 4"
                    >Загрузить еще
                    </ElementButton>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    .projects-all-section {
        &__info-block {
            @include grid(2, 3rem);
            @include mobile {
                @include grid(1, 1.5rem);
            }
        }
        &__btn-block {
            @include df_ac_jcc;
            .button {
                max-width: 20rem;
                width: 100%;
            }
        }
    }
</style>
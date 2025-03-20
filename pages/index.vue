<script lang="ts" setup>
    import { infoPrograms } from '~/composables/info/programs';
    import { infoProjects } from '~/composables/info/projects';

    const { projectsArray } = infoProjects();
    const { programsArray } = infoPrograms();

    const shortProjectsArr = computed(() => projectsArray.value.slice(0, 4));

    const programsSliderRef = ref(null)
    const programsSlider = useSwiper(programsSliderRef, {
        slidesPerView: 1.3,
        spaceBetween: 12,
        breakpoints: {
            769: {
                slidesPerView: 5,
                spaceBetween: 32,
            }
        }
    });

    const membersSliderRef = ref(null)
    const membersSlider = useSwiper(membersSliderRef, {
        slidesPerView: 4,
        spaceBetween: 24,
        slidesOffsetBefore: 240,
        slidesOffsetAfter: 240
    });

</script>

<template>
    <section>
        <div class="projects-section">
            <div class="projects-section__container container">
                <div class="title-block">
                    <div class="title-block__title">
                        <span class="heading">Проекты</span>
                    </div>
                    <ElementButton
                        color="bordered"
                        link="projects"
                    >Все проекты
                    </ElementButton>
                </div>
                <div class="projects-section__lists">
                    <CardProject :info="project" v-for="project in shortProjectsArr"/>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="programs-section">
            <div class="programs-section__container container">
                <div class="title-block">
                    <div class="title-block__title">
                        <span class="heading">Программы</span>
                    </div>
                </div>
                <div class="programs-section__slider">
                    <ClientOnly>
                        <swiper-container ref="programsSliderRef" :init="false">
                            <swiper-slide
                                v-for="(slide, idx) in programsArray"
                            >
                            <CardProgram
                                :info="slide"
                            />
                            </swiper-slide>
                        </swiper-container>
                    </ClientOnly>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="members-section">
            <div class="members-section__container">
                <div class="title-block">
                    <div class="title-block__title">
                        <span class="heading">Лица фонда</span>
                    </div>
                </div>
                <div class="members-section__slider">
                    <ClientOnly>
                        <swiper-container ref="membersSliderRef" :init="false">
                            <swiper-slide
                                v-for="(slide, idx) in programsArray"
                            >
                            <CardProgram
                                :info="slide"
                            />
                            </swiper-slide>
                        </swiper-container>
                    </ClientOnly>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    .projects-section {
        &__lists {
            @include grid(2, 3rem);
            @include mobile {
                @include grid(1, 1.5rem);
            }
        }
    }
    .programs-section {
        &__slider {
            swiper-slide {
                height: unset !important;
            }
        }
    }
    .members-section {
        &__container {
            @include df_fdc;
            gap: 3rem;
            padding: 3rem 0;
        }
        .title-block {
            padding: 0 15rem;
        }
    }
</style>
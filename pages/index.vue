<script lang="ts" setup>
    import { Swiper } from 'swiper';
    import { Autoplay } from 'swiper/modules';
    import 'swiper/swiper-bundle.css';

    Swiper.use([Autoplay]);

    import { infoProjects } from '~/composables/info/projects';
    import { infoPrograms } from '~/composables/info/programs';
    import { infoMembers } from '~/composables/info/members';
    import { infoNews } from '~/composables/info/news';

    const { projectsArray } = infoProjects();
    const { programsArray } = infoPrograms();
    const { membersArray } = infoMembers();
    const { newsArray } = infoNews();

    const shortProjectsArr = computed(() => projectsArray.value.slice(0, 4));
    const shortNewsArr = computed(() => newsArray.value.slice(0, 2));

    const programsSliderRef = ref(null);
    const programsSlider = useSwiper(programsSliderRef, {
        slidesPerView: 1.4,
        spaceBetween: 12,
        slidesOffsetBefore: 16,
        slidesOffsetAfter: 16,
        breakpoints: {
            769: {
                slidesPerView: 5,
                spaceBetween: 32,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
            }
        }
    });

    const membersSliderRef = ref(null);
    const membersSlider = useSwiper(membersSliderRef, {
        slidesPerView: 1.24,
        spaceBetween: 12,
        slidesOffsetBefore: 16,
        slidesOffsetAfter: 16,
        breakpoints: {
            769: {
                slidesPerView: 4,
                spaceBetween: 24,
                slidesOffsetBefore: 240,
                slidesOffsetAfter: 240,
            }
        }
    });

    const heroSliderRef = ref(null);
    const heroSlider = useSwiper(heroSliderRef, {
        slidesPerView: 1
    });


    const partnersArray = ref([
        '~/assets/images/partners/partners-1.png',
        '~/assets/images/partners/partners-2.png',
        '~/assets/images/partners/partners-3.png',
        '~/assets/images/partners/partners-4.png',
        '~/assets/images/partners/partners-5.png',
        '~/assets/images/partners/partners-6.png',
        '~/assets/images/partners/partners-7.png',
        '~/assets/images/partners/partners-8.png',
        '~/assets/images/partners/partners-9.png',
        '~/assets/images/partners/partners-10.png',
    ]);

    const breakpoints = {
        0: {
            spaceBetween: 12,
        },
        769: {
            spaceBetween: 100,
        }
    };
</script>

<template>
    <section>
        <div class="hero-block-section">
            <div class="hero-block-section__container">
                <ClientOnly>
                    <swiper-container ref="heroSliderRef">
                        <swiper-slide>
                            <div class="hero-block-section__slide">
                                <div class="hero-block-section__slide__info-block">
                                    <div class="hero-block-section__slide__text-block">
                                        <span class="heading">
                                            Помогаем детям по всей России
                                        </span>
                                        <span class="text">
                                            Мы заботимся о благополучии множества детей из различных семей
                                        </span>
                                    </div>
                                    <ElementButton
                                        link="projects"
                                    >Наши проекты
                                    </ElementButton>
                                </div>
                                <div class="hero-block-section__slide__image-block">
                                    <img src="/_nuxt/assets/images/hero-block-image.svg" alt="Hero image">
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="hero-block-section__slide">
                                <div class="hero-block-section__slide__info-block">
                                    <div class="hero-block-section__slide__text-block">
                                        <span class="heading">
                                            Помогаем детям по всей России
                                        </span>
                                        <span class="text">
                                            Мы заботимся о благополучии множества детей из различных семей
                                        </span>
                                    </div>
                                    <ElementButton
                                        link="projects"
                                    >Наши проекты
                                    </ElementButton>
                                </div>
                                <div class="hero-block-section__slide__image-block">
                                    <img src="/_nuxt/assets/images/hero-block-image.svg" alt="Hero image">
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="hero-block-section__slide">
                                <div class="hero-block-section__slide__info-block">
                                    <div class="hero-block-section__slide__text-block">
                                        <span class="heading">
                                            Помогаем детям по всей России
                                        </span>
                                        <span class="text">
                                            Мы заботимся о благополучии множества детей из различных семей
                                        </span>
                                    </div>
                                    <ElementButton
                                        link="projects"
                                    >Наши проекты
                                    </ElementButton>
                                </div>
                                <div class="hero-block-section__slide__image-block">
                                    <img src="/_nuxt/assets/images/hero-block-image.svg" alt="Hero image">
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper-container>
                </ClientOnly>
                <button class="hero-block-section__nav-btn left" @click="heroSlider.prev()">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 5L9 12L15 19" stroke="#212121" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <button class="hero-block-section__nav-btn right" @click="heroSlider.next()">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 5L15 12L9 19" stroke="#212121" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
    </section>
    <section>
        <div class="projects-section">
            <div class="projects-section__container container">
                <div class="title-block">
                    <div class="title-block__title">
                        <span class="heading">Проекты</span>
                    </div>
                    <ElementButton
                        color="bordered"
                        link="/projects/"
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
        <div class="partners-section">
            <div class="partners-section__container">
                <ClientOnly>
                    <swiper-container 
                        loop="true"
                        slides-per-view="auto"
                        space-between="100"
                        autoplay-delay="0"
                        autoplay-disable-on-interaction="false"
                        speed="5000"
                    >
                        <swiper-slide v-for="slide in partnersArray">
                            <img :src="slide" alt="Partners image">
                        </swiper-slide>
                    </swiper-container>
                </ClientOnly>
                <ClientOnly>
                    <swiper-container 
                        loop="true"
                        slides-per-view="auto"
                        space-between="100"
                        autoplay-delay="0"
                        autoplay-disable-on-interaction="false"
                        autoplay-reverse-direction="true"
                        speed="5000"
                    >
                        <swiper-slide v-for="slide in partnersArray">
                            <img :src="slide" alt="Partners image">
                        </swiper-slide>
                    </swiper-container>
                </ClientOnly>
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
                                v-for="(slide, idx) in membersArray"
                            >
                            <CardMember
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
        <div class="news-section">
            <div class="news-section__container container">
                <div class="title-block">
                    <div class="title-block__title">
                        <span class="heading">Новости</span>
                    </div>
                    <ElementButton
                        color="bordered"
                        link="/news/"
                    >Все новости
                    </ElementButton>
                </div>
                <div class="news-section__lists">
                    <CardNews v-for="news in shortNewsArr"
                        :info="news"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    .hero-block-section {
        background-color: $accent-subdued-16;
        &__container {
            position: relative;
            padding: 0 21.875rem;
            height: 36.25rem;
            @include mobile {
                padding: 0;
                height: 30.25rem;
            }
            swiper-container {
                height: 100%;
            }
        }
        &__slide {
            @include df_ac;
            position: relative;
            padding: 0 10.25rem;
            height: 100%;
            @include mobile {
                align-items: flex-start;
                padding: 1rem 1.5rem;
            }
            &__info-block {
                @include df_fdc;
                gap: 2rem;
                max-width: 28.75rem;
                @include mobile {
                    max-width: none;
                }
                .button {
                    width: fit-content;
                    @include mobile {
                        position: absolute;
                        z-index: 2;
                        width: calc(100% - 3rem);
                        left: 1.5rem;
                        bottom: 1rem;
                    }
                }
            }
            &__text-block {
                @include df_fdc;
                gap: 1.5rem;
                @include mobile {
                    gap: .75rem;
                }
                .heading {
                    @include heading_1;
                }
                .text {
                    @include subheading;
                    max-width: 21rem;
                    @include mobile {
                        max-width: none;
                    }
                }
            }
            &__image-block {
                position: absolute;
                right: 7.5rem;
                bottom: 0;
                display: flex;
                height: 30.125rem;
                width: 37rem;
                @include mobile {
                    right: 0;
                    aspect-ratio: 75 / 61;
                    height: auto;
                    width: 100%;
                }
                img {
                    @include image_contain;
                    @include mobile {
                        aspect-ratio: 75 / 61;
                    }
                }
            }
        }
        &__nav-btn {
            z-index: 1;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
            @include df_ac_jcc;
            width: 4rem;
            height: 4rem;
            background-color: $white;
            border-radius: 50%;
            border-width: 1px;
            border-style: solid;
            border-color: $dark-subdued-16;
            @include mobile {
                height: 2.75rem;
                width: 2.75rem;
            }
            svg {
                width: 1.5rem;
                height: 1.5rem;
                @include mobile {
                    width: 1.25rem;
                    height: 1.25rem;
                }
            }
            &.left {
                left: 25.125rem;
                @include mobile {
                    left: 1rem;
                }
            }
            &.right {
                right: 25.125rem;
                @include mobile {
                    right: 1rem;
                }
            }
        }
    }
    .projects-section {
        &__lists {
            @include grid(2, 3rem);
            @include mobile {
                @include grid(1, 1.5rem);
            }
        }
    }
    .programs-section {
        &__container {
            @include mobile {
                padding: 1.5rem 0;
            }
            .title-block {
                @include mobile {
                    padding: 0 1rem;
                }
            }
        }
        &__slider {
            swiper-slide {
                height: unset !important;
            }
        }
    }
    .partners-section {
        &__container {
            padding: 3rem 0;
            @include mobile {
                padding: 1.5rem 0;
            }
        }
        swiper-slide {
            width: fit-content !important;
        }
    }
    .members-section {
        &__container {
            @include df_fdc;
            gap: 3rem;
            padding: 3rem 0;
            @include mobile {
                gap: 1.5rem;
                padding: 1.5rem 0;
            }
        }
        .title-block {
            padding: 0 15rem;
            @include mobile {
                padding: 0 1rem;
            }
        }
    }
    .news-section {
        &__lists {
            @include grid(2, 3rem);
            @include mobile {
                @include grid(1, 1.5rem);
            }
        }
    }
</style>
<script lang="ts" setup>
    import { infoNews } from '/_nuxt/composables/info/news';

    const route = useRoute()

    const { newsArray } = infoNews();
    
    const selectedNews = newsArray.value.find(news=>news.id === Number(route.params.id));
</script>

<template>
    <section>
        <div class="news-page-section">
            <div class="news-page-section__container container">
                <div class="news-page-section__banner">
                    <img :src="selectedNews.image" alt="News Banner" v-if="selectedNews && !!selectedNews.image">
                    <img src="/_nuxt/assets/images/stub.webp" alt="News Banner" v-else>
                </div>
                <div class="news-page-section__text" v-if="selectedNews && !!selectedNews.text">
                    <div class="news-page-section__text__container">
                        <h1>{{ selectedNews.title }}</h1>
                        <div v-html="selectedNews.text"></div>
                        <ElementLink
                            color="accent"
                            link="/news/"
                        >Прочитать другие новости
                        </ElementLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    .news-page-section {
        &__banner {
            display: flex;
            aspect-ratio: 4 / 1;
            border-radius: 2rem;
            overflow: hidden;
            @include mobile {
                border-radius: .75rem;
                aspect-ratio: 57 / 25;
            }
            img {
                @include image_cover;
            }
        }
        &__text {
            @include df_fdc_ac;
            padding-top: 4rem;
            @include mobile {
                padding-top: 1.5rem;
            }
            &__container {
                @include df_fdc;
                gap: 3rem;
                max-width: 53.375rem;
                @include mobile {
                    gap: 1.5rem;
                }
                h1 {
                    @include heading_1;
                }
                h2 {
                    @include heading_2;
                }
                p {
                    @include text_1;
                }
            }
        }
    }
</style>
<script lang="ts" setup>
    const props = defineProps<{
        info: Object
    }>();
</script>

<template>
    <NuxtLink :to="'/news-page/' + info.id + '/'" class="news-card">
        <div class="news-card__image-block">
            <img :src="info.image" alt="News image" v-if="!!info.image">
            <img src="/images/stub.webp" alt="News image" v-else>
        </div>
        <div class="news-card__info-block">
            <div class="news-card__info-block__tags">
                <span>{{ info.category }}</span>
                <span>{{ info.date }}</span>
            </div>
            <div class="news-card__info-block__title">
                {{ info.title }}
            </div>
            <div class="news-card__info-block__text" v-html="info.text"></div>
        </div>
    </NuxtLink>
</template>

<style lang="scss">
    .news-card {
        border-radius: 1rem;
        overflow: hidden;
        border-width: 1px;
        border-style: solid;
        border-color: rgba(255, 255, 255, 0);
        @include transition(border-color);
        &:hover {
            border-color: $dark-subdued-16;
        }
        &__image-block {
            margin-bottom: -1rem;
            width: 100%;
            aspect-ratio: 29 / 8;
            @include mobile {
                aspect-ratio: 57 / 17;
            }
            img {
                @include image_cover;
                aspect-ratio: 29 / 8;
                @include mobile {
                    aspect-ratio: 57 / 17;
                }
            }
        }
        &__info-block {
            position: relative;
            z-index: 1;
            @include df_fdc;
            gap: 1rem;
            padding: 2rem 3rem;
            background-color: $white;
            border-radius: 1rem;
            @include mobile {
                padding: 1rem 1.5rem;
            }
            &__tags {
                @include df_ac;
                gap: .75rem;
                @include text_2;
                color: $dark-subdued-32;
            }
            &__title {
                @include heading_2;
                @include mobile {
                    @include strong_1;
                }
            }
            &__text {
                @include text_2;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
                overflow: hidden;
            }
        }
    }
</style>
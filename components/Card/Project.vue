<script lang="ts" setup>
    const props = defineProps<{
        info: Object,
    }>();
</script>

<template>
    <NuxtLink :to="'project/' + info.id + '/'" class="project-card">
        <div class="project-card__image-block">
            <img :src="info.image" alt="Project image" v-if="!!info.image">
            <img src="/_nuxt/assets/images/stub.webp" alt="Project image" v-else>
        </div>
        <div class="project-card__info-block">
            <div class="project-card__title-block">
                <span>{{ info.title }}</span>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15" cy="15" r="12.5" stroke="#01B41C" stroke-width="1.5"/>
                    <path d="M10 15C15.8579 15 14.1421 15 20 15M20 15L16.25 11.25M20 15L16.25 18.75" stroke="#01B41C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div class="project-card__text">
                {{ info.text }}
            </div>
        </div>
    </NuxtLink>
</template>

<style lang="scss">
    .project-card {
        display: flex;
        border-radius: .375rem;
        overflow: hidden;
        height: fit-content;
        background-color: $white;
        border-width: 1px;
        border-style: solid;
        border-color: rgba(255, 255, 255, 0);
        @include transition(border-color);
        &:hover {
            border-color: $dark-subdued-16;
        }
        @include mobile {
            flex-direction: column;
        }
        &__image-block {
            display: flex;
            aspect-ratio: 1;
            height: 11.75rem;
            @include mobile {
                height: 7.5rem;
                aspect-ratio: 57 / 20;
            }
            img {
                @include image_cover;
            }
        }
        &__info-block {
            @include df_fdc;
            gap: 1rem;
            padding: 1.5rem 1.75rem;
            width: 100%;
            @include mobile {
                gap: .75rem;
                padding: 1rem 1.5rem;
            }
        }
        &__title-block {
            @include df_ac;
            justify-content: space-between;
            gap: 1.5rem;
            span {
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
                overflow: hidden;
                max-width: 20rem;
                @include subheading;
                @include mobile {
                    max-width: none;
                }
            }
        }
        &__text {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 4;
            overflow: hidden;
            max-width: 22.5rem;
            @include text_2;
            color: $dark-subdued-32;
            @include mobile {
                -webkit-line-clamp: 3;
                max-width: none;
            }
        }
    }
</style>
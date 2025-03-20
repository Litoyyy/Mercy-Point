<script lang="ts" setup>
    const props = defineProps<{
        info: Object
    }>();
</script>

<template>
    <div class="member-card">
        <div class="member-card__image-block">
            <img :src="info.image" alt="Member image" v-if="!!info.image">
            <img src="/_nuxt/assets/images/stub.webp" alt="Member image" v-else>
        </div>
        <div class="member-card__info-block">
            <div class="member-card__info-block__title">
                {{ info.name }}
                <span>{{ info.jobTitle }}</span>
            </div>
            <div class="member-card__info-block__text">
                {{ info.description }}
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .member-card {
        @include df_fdc;
        border-radius: .375rem;
        overflow: hidden;
        &__image-block {
            display: flex;
            width: 100%;
            aspect-ratio: 166 / 139;
            @include mobile {
                aspect-ratio: 30 / 25;
            }
            img {
                @include image_cover;
                aspect-ratio: 166 / 139;
                @include mobile {
                    aspect-ratio: 30 / 25;
                }
            }
        }
        &__info-block {
            @include df_fdc;
            gap: .75rem;
            padding: 1rem 1.5rem;
            &__title {
                @include df_fdc;
                gap: .25rem;
                @include subheading;
                span {
                    @include text_1;
                    color: $dark-subdued-32;
                }
            }
            &__text {
                @include text_2;
                color: $dark-subdued-32;
            }
        }
    }
</style>
<script lang="ts" setup>
    const props = defineProps<{
        info: Object,
    }>();
</script>


<template>
    <div class="programm-card">
        <div class="programm-card__info-block">
            <div class="programm-card__image-block">
                <img :src="info.image" alt="Project image" v-if="!!info.image">
                <img src="/_nuxt/assets/images/stub.webp" alt="Project image" v-else>
            </div>
            <div class="programm-card__text-block">
                <span class="programm-card__text-block__title">{{ info.title }}</span>
                <div class="programm-card__text-block__progress-bar" :style="{ '--progress-width': `${info.moneyCur / (info.moneyGoal / 100)}%` }"></div>
                <span class="programm-card__text-block__text">Собрано: {{ info.moneyCur }} / {{ info.moneyGoal }}</span>
            </div>
        </div>
        <ElementButton
            color="bordered"
            link="/donation/"
        >
            Учавствовать
        </ElementButton>
    </div>
</template>

<style lang="scss">
    .programm-card {
        @include df_fdc;
        gap: 2rem;
        border-radius: .375rem;
        height: 100%;
        overflow: hidden;
        &__info-block {
            @include df_fdc;
            gap: .5rem;
            height: 100%;
        }
        &__image-block {
            display: flex;
            width: 100%;
            aspect-ratio: 52 / 35;
            img {
                @include image_cover;
                aspect-ratio: 52 / 35;
            }
        }
        &__text-block {
            @include df_fdc;
            gap: .375rem;
            height: 100%;
            &__title {
                @include subheading;
                height: 100%;
            }
            &__progress-bar {
                position: relative;
                content: '';
                background-color: $accent-subdued-16;
                height: .25rem;
                width: 100%;
                &::after {
                    position: absolute;
                    content: '';
                    top: 0;
                    left: 0;
                    background-color: $accent;
                    width: var(--progress-width, 0%);
                    height: .25rem;
                }
            }
            &__text {
                @include text_2;
                color: $dark-subdued-32;
            }
        }
    }
</style>
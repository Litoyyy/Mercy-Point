<script lang="ts" setup>
    const props = defineProps<{
        info: Object
    }>();
</script>

<template>
    <div class="member-card">
        <div class="member-card__image-block">

        </div>
        <div class="member-card__info-block">
            <div class="member-card__info-block__title">
                Павел Дуров
                <span>Лидер фонда</span>
            </div>
            <div class="member-card__info-block__text">

            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .member-card {
        @include df_fdc;
        &__image-block {
            display: flex;
            width: 100%;
            aspect-ratio: 166 / 139;
            img {
                @include image_cover;
            }
        }
        &__info-block {
            @include df_fdc;
            gap: .75rem;
            &__title {
                @include df_fdc;
                @include subheading;
                span {
                    @include text_1;
                    color: $dark-subdued-32;
                }
            }
        }
    }
</style>
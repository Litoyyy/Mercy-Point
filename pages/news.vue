<script lang="ts" setup>
    import { infoNews } from '/_nuxt/composables/info/news';

    const { newsArray } = infoNews();

    const paginationVal = ref(4);

    const cutNewsArr = computed(() => newsArray.value.slice(0, paginationVal.value));
</script>

<template>
    <section>
        <div class="news-all-section">
            <div class="news-all-section__container container">
                <div class="title-block">
                    <div class="title-block__title">
                        <div class="breadcrumbs">
                            <ElementLink link="/"
                            >Главная
                            </ElementLink>
                            <span>/</span>
                            <ElementLink link="/news/"
                            >Новости
                            </ElementLink>
                        </div>
                        <span class="heading">Новости и события фонда</span>
                    </div>
                </div>
                <div class="news-all-section__info-block">
                    <CardNews :info="news" v-for="news in cutNewsArr"/>
                </div>
                <div class="news-all-section__btn-block">
                    <ElementButton
                        v-if="cutNewsArr.length < cutNewsArr.length"
                        @click="paginationVal += 4"
                    >Загрузить еще
                    </ElementButton>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    .news-all-section {
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
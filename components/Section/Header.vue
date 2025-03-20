<template>
    <header>
        <div class="header-section">
            <div class="header-section__container">
                <ElementLogo/>
                <div class="header-section__links">
                    <ElementLink
                        link="news"
                    >Новости
                    </ElementLink>
                    <ElementLink
                        link="projects"
                    >Проекты
                    </ElementLink>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss">
    .header-section {
        background-color: $white;
        &__container {
            @include df_ac;
            justify-content: space-between;
            padding: 1rem 10rem;
            @include mobile {
                padding: .5rem 1rem;
            }
        }
        &__links {
            @include df_ac;
            gap: 1rem;
            @include mobile {
                gap: .75rem;
            }
        }
    }
</style>
<script lang="ts" setup>
    const props = defineProps<{
        size?: 'basic' | 'small',
        color?: 'primary' | 'accent' | 'dark',
        link?: string,
    }>();
</script>

<template>
    <NuxtLink class="link"
        :to="link"
        :color="color || 'primary'"
        :size="size || 'basic'"
    ><slot />
    </NuxtLink>
</template>

<style lang="scss">
    a {
        cursor: pointer;
        border: none;
        background: none;
        padding: 0;
        color: $dark;
        font-family: "Exo 2", sans-serif;
    }
    .link {
        @include df_ac;
        cursor: pointer;
        @include transition(color);

        &[size="basic"] {
            @include text_1;
        }
        &[size="small"] {
            @include text_2;
        }

        &[color="primary"] {
            color: $dark;
        }
        &[color="accent"] {
            color: $accent;
        }
        &[color="dark"] {
            color: $white;
        }

        &:hover {
            &[color="primary"] {
                color: $accent;
            }
            &[color="accent"] {
                color: $dark;
            }
            &[color="dark"] {
                color: $accent;
            }
        }
    }
</style>
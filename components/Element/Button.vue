<script lang="ts" setup>
    const props = defineProps<{
        size?: 'basic' | 'small',
        color?: 'subdued' | 'bordered',
        link?: string,
        active?: boolean,
    }>()
</script>

<template>
    <NuxtLink :to="link" v-if="link"
        class="button"
        :size="size || 'basic'"
        :color="color || 'subdued'"
        :active="active"
    ><slot />
    </NuxtLink>
    <button v-else
        class="button"
        :size="size || 'basic'"
        :color="color || 'subdued'"
        :active="active"
    ><slot />
    </button>
</template>

<style lang="scss">
    button {
        cursor: pointer;
        border: none;
        background: none;
        padding: 0;
        color: $dark;
        font-family: "Exo 2", sans-serif;
    }
    .button {
        @include df_ac_jcc;
        box-sizing: border-box;
        @include transition(background-color, color, border-color);

        &[size="basic"] {
            padding: .75rem 1.5rem;
            @include strong_1;
            border-radius: .375rem;
            @include mobile {
                padding: .5rem .75rem;
                @include strong_2;
            }
        }
        &[size="small"] {
            padding: .5rem .75rem;
            @include strong_2;
            border-radius: .375rem;
        }

        &[color="subdued"] {
            color: $white;
            background-color: $accent-subdued-64;
        }
        &[color="bordered"] {
            border-width: 1px;
            border-style: solid;
            border-color: $accent-subdued-32;
            color: $accent;
            background-color: $white;
        }

        &[data-state="disabled"] {
            pointer-events: none;
            background-color: $dark-subdued-32;
            color: $white;
        }

        &:hover {
            &[color="subdued"] {
                background-color: $accent;
            }
            &[color="bordered"] {
                border-color: $accent;
            }
        }
        &:active,
        &[active="true"] {
            &[color="subdued"] {
                background-color: $dark;
            }
            &[color="bordered"] {
                border-color: $accent;
                background-color: $accent;
                color: $white;
            }
        }
    }
</style>
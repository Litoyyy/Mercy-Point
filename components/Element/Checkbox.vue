<script lang="ts" setup>
    const props = defineProps<{
        id?: string,
        onUpdate?: (event: MouseEvent) => void,
        checked?: boolean,
    }>();
</script>

<template>
    <label :for="id || 'custom-checkbox'" class="custom-checkbox-label">
        <input type="checkbox" 
            :id="id || 'custom-checkbox'"
            :checked="checked"
            @click="onUpdate"
        ><slot/>
    </label>
</template>

<style lang="scss">
    .custom-checkbox-label {
        position: relative;
        @include df_ac;
        gap: .75rem;
        cursor: pointer;
        @include mobile {
            gap: .375rem;
        }
        @include text_3;
        input {
            height: 1rem;
            aspect-ratio: 1;
            opacity: 0;
        }
        &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            border-radius: .25rem;
            @include transition(background-color, border-color);

            height: 1rem;
            aspect-ratio: 1;
            border-width: 2px;
            border-style: solid;
            border-color: $dark-subdued-16;
        }
        &::after {
            content: '';
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            @include transition(opacity);
            opacity: 0;
            background-color: $accent;

            left: 2px;
            height: 1rem;
            aspect-ratio: 1;
            @include mobile {
                height: .5rem;
            }
        }

        &:hover {
            &::before {
                border-color: $dark-subdued-64;
            }
        }
        &:has(input:checked) {
            &::before {
                border-color: $accent;
            }
            &::after {
                opacity: .32;
            }
        }
    }
</style>
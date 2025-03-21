<script lang="ts" setup>
    import IMask from 'imask'

    const props = defineProps<{
        id?: string,
        title?: string,
        name?: string,
        newValue?: string,
        placeholder?: string,
        state?: string,
        mask?: string | number,
        onInput?: Function
    }>();

    let localValue = ref('');

    watch(
        () => props.newValue,
        (newValue) => {
            localValue.value = newValue || '';
        },
        { immediate: true }
    );

    const inputFunc = (event: Event) =>{
        const input = (event.target as HTMLInputElement);
        localValue.value = input.value;

        if(props.onInput) props.onInput(event);
    };

    const inputRef = ref<HTMLDivElement | null>(null);
    onMounted(() => {
        if (props.mask && inputRef.value) {
            IMask(inputRef.value as HTMLInputElement,  { mask: props.mask });
        };
        if (inputRef.value && props.name == 'phone') {
            IMask(inputRef.value as HTMLInputElement, { mask: '+{7} (000) 000 00-00' });
        };
    });

</script>

<template>
    <div class="field">
        <div class="field__title" v-if="title">
            {{ title }}
        </div>
        <label :for="id || 'input-id'" class="input-label">
            <input type="text"
                ref="inputRef"
                :value="localValue"
                :id="id || 'input-id'"
                :name="name"
                :placeholder="placeholder"
                @input="inputFunc"
            >
        </label>
    </div>
</template>

<style lang="scss">
    input[type="text"],
    input[type="password"],
    input[type="email"],
    textarea {
        background-color: unset;
        width: 100%;
        outline: unset;
        border: unset;
        padding: 0;
        font-family: "Exo 2", sans-serif;
        &::placeholder {
            @include transition(color);
        }
    }
    .field {
        @include df_fdc;
        gap: .75rem;
        @include mobile {
            gap: .25rem;
        }
        &__title {
            @include text_1;
            color: $dark-subdued-64;
        }
        .input-label {
            @include df_ac;
            padding: .75rem 1rem;
            border-radius: .375rem;
            border-width: 1px;
            border-style: solid;
            border-color: $dark-subdued-16;
            @include transition(border-color);
            input {
                @include text_1;
                &::placeholder {
                    color: $dark-subdued-32;
                }
            }
            &:hover {
                border-color: $dark-subdued-64;
            }
            &:has(input.error) {
                border-color: red;
            }
        }
    }
</style>
<script lang="ts" setup>
    import { z } from 'zod';

    definePageMeta({
        layout: false
    });

    
    const donationFormRef = ref<HTMLFormElement | null>(null);
    const donationSchema = z.object({
        summary: z.string().min(1).refine(value => value !== "0"),
        last_name: z.string().min(1),
        first_name: z.string().min(1),
        email: z.string()
            .email({message: "Invalid email address"}),
        link: z.string(),
        phone: z.string().min(18),
    });
    const validateDonation=()=>{
        setTimeout(() => {
            if(!!donationFormRef.value) {
                validate(donationFormRef.value, donationSchema,
                    (body: any)=>{
                        console.log('111');
                    }
                );
            };
        }, 50);
    };

    onMounted(()=>{
        validateDonation();
    });

    const summaryValue = ref('');

    const showLinkInput = ref(false);
    const checkForShowLink=(evt: Event)=>{
        const target = evt.target as HTMLInputElement;
        showLinkInput.value = target.checked;
    }

    const currentActiveBtn = ref(1)
</script>

<template>
    <section>
        <div class="donation-section">
            <div class="donation-section__container">
                <form class="donation-section__info-block"
                    ref="donationFormRef"
                    id="donation-form"
                >
                    <div class="donation-section__info-block__main">
                        <div class="donation-section__form">
                            <div class="donation-section__form__title-block">
                                <span>Выберите план платежа</span>
                                <div class="donation-section__form__title-block__btns">
                                    <ElementButton
                                        color="bordered"
                                        @click="currentActiveBtn = 1"
                                        :active="currentActiveBtn === 1"
                                    >Разовый
                                    </ElementButton>
                                    <ElementButton
                                        color="bordered"
                                        @click="currentActiveBtn = 2"
                                        :active="currentActiveBtn === 2"
                                    >Ежемесячный
                                    </ElementButton>
                                </div>
                            </div>
                            <div class="donation-section__form__main">
                                <div class="donation-section__form__main__inputs">
                                    <ElementInput
                                        id="last-name-input"
                                        title="Фамилия"
                                        placeholder="Введите фамилию..."
                                        name="last_name"
                                        :on-input="()=>{validateDonation()}"
                                    />
                                    <ElementInput
                                        id="first-name-input"
                                        title="Имя"
                                        placeholder="Введите имя..."
                                        name="first_name"
                                        :on-input="()=>{validateDonation()}"
                                    />
                                    <ElementInput
                                        id="email-input"
                                        title="E-mail"
                                        placeholder="Example@mail.com"
                                        name="email"
                                        :on-input="()=>{validateDonation()}"
                                    />
                                    <ElementInput
                                        id="phone-input"
                                        title="Телефон"
                                        placeholder="+7 (___) ___ __-__"
                                        name="phone"
                                        :on-input="()=>{validateDonation()}"
                                    />
                                </div>
                                <div class="donation-section__form__main__checkboxes">
                                    <ElementCheckbox
                                        id="first-checkbox"
                                    >Я согласен с условиями договра присоединения при публичном сборе пожертвования.
                                    </ElementCheckbox>
                                    <ElementCheckbox
                                        id="second-checkbox"
                                        :on-update="(evt)=>{checkForShowLink(evt)}"
                                    >Хочу получать персональное фото с благодарностью в соц. сетях 
                                    </ElementCheckbox>
                                </div>
                            </div>
                            <div class="donation-section__form__link" v-if="showLinkInput">
                                <ElementInput
                                    id="link-input"
                                    title="Ссылка"
                                    placeholder="example.com"
                                    name="link"
                                    :on-input="()=>{validateDonation()}"
                                />
                            </div>
                        </div>
                        <div class="donation-section__summary-block">
                            <ElementInput
                                id="summary-name-input"
                                title="Сумма пожертвования"
                                placeholder="Введите сумму..."
                                name="summary"
                                :new-value="summaryValue"
                                :on-input="()=>{validateDonation()}"
                            />
                            <div class="donation-section__summary-block__btns">
                                <ElementButton
                                    size="small"
                                    color="bordered"
                                    @click="summaryValue = '100'"
                                >100
                                </ElementButton>
                                <ElementButton
                                    size="small"
                                    color="bordered"
                                    @click="summaryValue = '500'"
                                >500
                                </ElementButton>
                                <ElementButton
                                    size="small"
                                    color="bordered"
                                    @click="summaryValue = '1000'"
                                >1000
                                </ElementButton>
                                <ElementButton
                                    size="small"
                                    color="bordered"
                                    @click="summaryValue = '3000'"
                                >3000   
                                </ElementButton>
                            </div>
                        </div>
                    </div>
                    <div class="donation-section__btn-block">
                        <ElementButton
                            form="donation-form"
                            name="button"
                        >Перейти к оплате    
                        </ElementButton>
                        <span class="text">
                            Внимание! Соглашаясь с политикой и условиями платежей, вы официально предоставляете всю вашу банковскую  информацию фонду, а так же даете в наш доступ ваши банковские и кредитные карты, заранее спасибо!
                        </span>
                    </div>
                </form>
                <div class="donation-section__logo-block">
                    <ElementLogo />
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    .donation-section {
        width: 100dvw;
        height: 100dvh;
        background-color: $dark-subdued-16;
        @include mobile {
            height: auto;
            background-color: $white;
        }
        &__container {
            @include df_fdc;
            height: 100%;
            padding-bottom: 3rem;
            @include mobile {
                gap: 1.5rem;
            }
        }
        &__info-block {
            @include df_fdc;
            justify-content: space-between;
            height: 100%;
            gap: 1.5rem;
            padding: 3rem 6rem;
            margin: 3rem 15rem 1.5rem;
            background-color: $white;
            border-radius: 1rem;
            @include mobile {
                margin: 0;
                padding: 1.5rem 1rem;
                border-radius: 0;;
            }
            &__main {
                display: flex;
                justify-content: space-between;
                gap: 1.5rem;
                width: 100%;
                @include mobile {
                    flex-direction: column;
                }
            }
        }
        &__form {
            @include df_fdc;
            gap: 1.5rem;
            width: 45.5rem;
            @include mobile {
                gap: 1rem;
                width: auto;
            }
            &__title-block {
                @include df_fdc;
                gap: 1rem;
                span {
                    @include heading_2;
                }
                @include mobile {
                    padding-bottom: 1rem;
                }
                &__btns {
                    display: flex;
                    gap: .5rem;
                    .button {
                        width: 15rem;
                    }
                }
            }
            &__main {
                @include df_fdc;
                gap: 1rem;
                &__inputs {
                    @include grid(2, 1rem);
                    column-gap: .5rem;
                    @include mobile {
                        @include grid(1, .375rem)
                    }
                }
                &__checkboxes {
                    @include df_fdc;
                    gap: .75rem;
                    max-width: 21.875rem;
                }
            }
            &__link {
                max-width: 26.5rem;
            }
        }
        &__summary-block {
            @include df_fdc;
            gap: 1rem;
            @include mobile {
                gap: .5rem;
            }
            &__btns {
                @include grid(2, 1rem);
                column-gap: .5rem;
                @include mobile {
                    gap: .5rem;
                    column-gap: .25rem;
                }
            }
        }
        &__btn-block {
            display: flex;
            justify-content: space-between;
            gap: 1rem;
            width: 100%;
            @include mobile {
                flex-direction: column;
            }
            .button {
                width: 20rem;
                @include mobile {
                    width: 100%;
                }
            }
            .text {
                @include text_3;
                color: $dark-subdued-32;
                max-width: 27.875rem;
                @include mobile {
                    max-width: none;
                    text-align: center;
                }
            }
        }
        &__logo-block {
            @include df_ac_jcc;
            width: 100%;
        }
    }
</style>
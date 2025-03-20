<template>
    <footer>
        <div class="footer-section">
            <div class="footer-section__container">
                <div class="footer-section__logo-block">
                    <ElementLogo variant="dark"/>
                    <div class="footer-section__logo-block__links">
                        <ElementLink
                            color="dark"
                        >Политика конфиденциальности
                        </ElementLink>
                        <span>@ 2012 - 2025 Пункт Милосердия</span>
                    </div>
                </div>
                <div class="footer-section__contact-block">
                    <div class="footer-section__contact-block__address">
                        Ул. Лизы Чайкиной 76
                    </div>
                    <div class="footer-section__contact-block__links">
                        <a href="tel:+7 (999) 123 45-67" class="footer-section__contact-block__links__link">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 7.33333C4 18.7472 13.2528 28 24.6667 28C25.1816 28 25.6922 27.9812 26.1977 27.9441C26.7778 27.9017 27.0679 27.8804 27.332 27.7284C27.5506 27.6025 27.7581 27.3793 27.8677 27.152C28 26.8776 28 26.5575 28 25.9173V22.1609C28 21.6226 28 21.3534 27.9114 21.1226C27.8331 20.9188 27.706 20.7373 27.5412 20.5941C27.3546 20.432 27.1017 20.34 26.5957 20.156L26.5957 20.156L22.3199 18.6012C21.7313 18.3871 21.437 18.2801 21.1577 18.2983C20.9115 18.3143 20.6746 18.3983 20.4733 18.541C20.245 18.7029 20.0838 18.9714 19.7616 19.5085L19.7616 19.5085L18.6667 21.3333C15.1335 19.7332 12.2692 16.8652 10.6667 13.3333L12.4915 12.2384C13.0286 11.9162 13.2971 11.755 13.459 11.5267C13.6017 11.3254 13.6857 11.0885 13.7017 10.8423C13.7199 10.563 13.6129 10.2687 13.3988 9.68006L11.844 5.40428C11.66 4.89835 11.568 4.64538 11.4059 4.4588C11.2627 4.29399 11.0812 4.16686 10.8774 4.0886C10.6466 4 10.3774 4 9.83909 4H6.08268C5.4425 4 5.12241 4 4.84797 4.13234C4.62067 4.24194 4.39752 4.44935 4.2716 4.66804C4.11958 4.93209 4.09833 5.22216 4.05585 5.8023C4.01883 6.30781 4 6.81837 4 7.33333Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            +7 (999) 123 45-67
                        </a>
                        <a href="mailto:punkt-miloserdiya@gmail.com" class="footer-section__contact-block__links__link">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.03714 10.6873L8.74773 13.3043C11.3947 14.7749 12.7182 15.5101 14.1198 15.7984C15.3603 16.0535 16.6397 16.0535 17.8802 15.7984C19.2818 15.5101 20.6053 14.7748 23.2523 13.3043L27.9629 10.6873M4.03714 10.6873C4 11.3122 4 12.081 4 13.0667V18.9334C4 21.1736 4 22.2937 4.43597 23.1493C4.81947 23.902 5.43139 24.5139 6.18404 24.8974C7.03969 25.3334 8.15979 25.3334 10.4 25.3334H21.6C23.8402 25.3334 24.9603 25.3334 25.816 24.8974C26.5686 24.5139 27.1805 23.902 27.564 23.1493C28 22.2937 28 21.1736 28 18.9334V13.0667C28 12.081 28 11.3122 27.9629 10.6873M4.03714 10.6873C4.0844 9.892 4.19182 9.3299 4.43597 8.85073C4.81947 8.09808 5.43139 7.48615 6.18404 7.10266C7.03969 6.66669 8.15979 6.66669 10.4 6.66669H21.6C23.8402 6.66669 24.9603 6.66669 25.816 7.10266C26.5686 7.48615 27.1805 8.09808 27.564 8.85073C27.8082 9.3299 27.9156 9.892 27.9629 10.6873" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            punkt-miloserdiya@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss">
    .footer-section {
        background-color: $dark;
        &__container {
            display: flex;
            justify-content: space-between;
            padding: 3rem 10rem;
            height: 27.5rem;
            @include mobile {
                gap: 2rem;
                padding: 1.5rem 1rem;
                height: auto;
                flex-direction: column;
            }
        }
        &__logo-block {
            @include df_fdc;
            justify-content: space-between;
            gap: 1rem;
            &__links {
                @include df_fdc;
                gap: 1rem;
                span {
                    @include strong_1;
                    color: $white;
                }
            }
        }
        &__contact-block {
            @include df_fdc;
            justify-content: space-between;
            gap: 1.5rem;
            width: 23.625rem;
            @include mobile {
                width: auto;
            }
            &__address {
                @include heading_1;
                color: $white;
            }
            &__links {
                @include df_fdc;
                gap: .75rem;
                @include mobile {
                    gap: .5rem;
                }
                &__link {
                    @include df_ac;
                    gap: .75rem;
                    @include subheading;
                    color: $white;
                    @include transition(color);
                    @include mobile {
                        gap: .5rem;
                    }
                    svg {
                        height: 2rem;
                        width: 2rem;
                        path {
                            @include transition(stroke);
                        }
                        @include mobile {
                            height: 1.75rem;
                            width: 1.75rem;
                        }
                    }
                    &:hover {
                        color: $accent;
                        svg path{
                            stroke: $accent;
                        }
                    }
                }
            }
        }
    }
</style>
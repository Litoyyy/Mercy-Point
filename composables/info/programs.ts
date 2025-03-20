export function infoPrograms() {
    const programsArray = ref([
        {
            id: 1,
            image: '',
            title: 'Операции детям',
            moneyGoal: 800000,
            moneyCur: 396000,
        },
        {
            id: 2,
            image: '',
            title: 'Операции детям',
            moneyGoal: 800000,
            moneyCur: 120000,
        },
        {
            id: 3,
            image: '',
            title: 'Операции детям',
            moneyGoal: 800000,
            moneyCur: 300,
        },
        {
            id: 4,
            image: '',
            title: 'Покупка технических средств реабилитации',
            moneyGoal: 800000,
            moneyCur: 50000,
        },
        {
            id: 5,
            image: '',
            title: 'Проведение благотворительных мероприятий',
            moneyGoal: 800000,
            moneyCur: 54000,
        },
    ]);

    return {
        programsArray,
    }
}
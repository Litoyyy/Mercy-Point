export function infoPrograms() {
    const programsArray = ref([
        {
            id: 1,
            image: '/images/programs/program-image-1.png',
            title: 'Операции больным детям',
            moneyGoal: 800000,
            moneyCur: 550000,
        },
        {
            id: 2,
            image: '/images/programs/program-image-2.png',
            title: 'Покупка тех. средств реабилитации',
            moneyGoal: 300000,
            moneyCur: 200000,
        },
        {
            id: 3,
            image: '/images/programs/program-image-3.png',
            title: 'Концерт для сирот на открытом воздухе',
            moneyGoal: 600000,
            moneyCur: 200000,
        },
        {
            id: 4,
            image: '/images/programs/program-image-4.png',
            title: 'Проведение мастер-класса по лепке',
            moneyGoal: 400000,
            moneyCur: 300000,
        },
        {
            id: 5,
            image: '/images/programs/program-image-5.png',
            title: 'Средства гигиены в детские дома',
            moneyGoal: 300000,
            moneyCur: 150000,
        },
    ]);

    return {
        programsArray,
    }
}
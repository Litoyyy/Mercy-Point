export function infoMembers() {
    const membersArray = ref([
        {
            image: '/images/members/members-image-1.png',
            name: 'Павел Подвохов',
            jobTitle: 'Лидер фонда',
            description: 'Управляет фондом и ведет переговоры с другими фондами по поводу сотрудничества.',
        },
        {
            image: '/images/members/members-image-2.png',
            name: 'Мария Подушкина',
            jobTitle: 'Солидер фонда',
            description: 'Помогает лидеру фонда с проведением переговоров, сотрудничества и организацией.',
        },
        {
            image: '/images/members/members-image-3.png',
            name: 'Катержина Простынкина',
            jobTitle: 'Волонтер',
            description: 'Самый активный волонтер команды, проводящая мероприятия с детьми и пожертвования.',
        },
        {
            image: '/images/members/members-image-4.png',
            name: 'Дженни Ким',
            jobTitle: 'Программный координатор',
            description: 'Специалист по социальным программам с детьми в трудной жизненной ситуации',
        },
        {
            image: '/images/members/members-image-5.png',
            name: 'Чон Чонгук',
            jobTitle: 'Финансовый менеджер',
            description: 'Отвечает за бюджетирование, финансовый анализ и отчетность фонда',
        },
    ]);

    return {
        membersArray,
    }
}
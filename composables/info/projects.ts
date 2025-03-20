export function infoProjects() {
    const projectsArray = ref([
        {
            id: 1,
            image: '',
            title: 'Светлый старт',
            text: 'Проект направлен на поддержку детей из малообеспеченных семей в начале учебного года. Мы обеспечиваем школьников всем необходимым для учебы: рюкзаками, канцелярскими принадлежностями, учебниками и формой. Кроме того, организуем бесплатные подготовительные курсы для первоклассников, чтобы помочь им адаптироваться к школе. Наша цель — дать каждому ребенку равные возможности для успешного старта в образовании',
        },
        {
            id: 2,
            image: '',
            title: 'Тепло в каждом доме',
            text: 'Этот проект помогает детям из неблагополучных семей пережить холодное время года. Мы собираем и распределяем теплую одежду, обувь, одеяла и другие необходимые вещи. Также организуем пункты обогрева, где дети могут получить горячее питание и временное убежище. Наша миссия — сделать так, чтобы ни один ребенок не остался без тепла и заботы зимой.',
        },
        {
            id: 3,
            image: '',
            title: 'Мир возможностей',
            text: 'Проект создан для детей с ограниченными возможностями здоровья. Мы организуем инклюзивные мастер-классы, спортивные мероприятия и творческие кружки, чтобы помочь детям раскрыть свои таланты и социализироваться. Также предоставляем бесплатные консультации для родителей и помогаем с приобретением специализированного оборудования. Наша цель — показать, что каждый ребенок уникален и способен на большие достижения.',
        },
        {
            id: 4,
            image: '',
            title: 'Книга мечты',
            text: 'Этот проект направлен на развитие любви к чтению у детей из детских домов и малоимущих семей. Мы создаем мобильные библиотеки, которые доставляем в отдаленные регионы, а также проводим литературные вечера и встречи с писателями. Каждый ребенок может выбрать книгу своей мечты и забрать ее себе. Наша миссия — открыть детям мир знаний и вдохновения через книги.',
        },
        {
            id: 5,
            image: '',
            title: 'Яркие краски детства',
            text: 'Проект создан для развития творческого потенциала детей из детских домов и малообеспеченных семей. Мы проводим мастер-классы по рисованию, лепке, музыке и театральному искусству, а также организуем выставки и концерты, где дети могут показать свои работы. Наша миссия — подарить детям радость творчества и помочь им поверить в свои силы.',
        },
        {
            id: 6,
            image: '',
            title: 'Здоровое будущее',
            text: 'Этот проект направлен на поддержку детей, страдающих хроническими заболеваниями или находящихся в трудной жизненной ситуации. Мы организуем бесплатные медицинские обследования, обеспечиваем лекарствами и необходимым оборудованием, а также проводим образовательные программы по здоровому образу жизни. Наша цель — помочь каждому ребенку получить доступ к качественной медицинской помощи и заботе.',
        },
        {
            id: 7,
            image: '',
            title: 'Дорога к мечте',
            text: 'Этот проект помогает подросткам из детских домов и неблагополучных семей подготовиться к самостоятельной жизни. Мы проводим тренинги по профориентации, учим финансовой грамотности, помогаем с трудоустройством и поступлением в учебные заведения. Также организуем наставничество, где каждый ребенок может получить поддержку от успешного взрослого. Наша цель — дать подросткам инструменты для построения счастливого будущего.',
        },
        {
            id: 4,
            image: '',
            title: 'Книга мечты',
            text: 'Этот проект направлен на развитие любви к чтению у детей из детских домов и малоимущих семей. Мы создаем мобильные библиотеки, которые доставляем в отдаленные регионы, а также проводим литературные вечера и встречи с писателями. Каждый ребенок может выбрать книгу своей мечты и забрать ее себе. Наша миссия — открыть детям мир знаний и вдохновения через книги.',
        },
        {
            id: 5,
            image: '',
            title: 'Яркие краски детства',
            text: 'Проект создан для развития творческого потенциала детей из детских домов и малообеспеченных семей. Мы проводим мастер-классы по рисованию, лепке, музыке и театральному искусству, а также организуем выставки и концерты, где дети могут показать свои работы. Наша миссия — подарить детям радость творчества и помочь им поверить в свои силы.',
        },
        {
            id: 6,
            image: '',
            title: 'Здоровое будущее',
            text: 'Этот проект направлен на поддержку детей, страдающих хроническими заболеваниями или находящихся в трудной жизненной ситуации. Мы организуем бесплатные медицинские обследования, обеспечиваем лекарствами и необходимым оборудованием, а также проводим образовательные программы по здоровому образу жизни. Наша цель — помочь каждому ребенку получить доступ к качественной медицинской помощи и заботе.',
        },
        {
            id: 7,
            image: '',
            title: 'Дорога к мечте',
            text: 'Этот проект помогает подросткам из детских домов и неблагополучных семей подготовиться к самостоятельной жизни. Мы проводим тренинги по профориентации, учим финансовой грамотности, помогаем с трудоустройством и поступлением в учебные заведения. Также организуем наставничество, где каждый ребенок может получить поддержку от успешного взрослого. Наша цель — дать подросткам инструменты для построения счастливого будущего.',
        }
    ]);

    return {
        projectsArray,
    }
}
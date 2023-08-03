import hackathonLogo from './Assets/hackathonLogo.png';

// Importing all sponsors logos from Assets
/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */

import uji from './Assets/sponsorsLogos/uji-logo.png';
import ediploma from './Assets/sponsorsLogos/ediploma-logo.png';
import init from './Assets/sponsorsLogos/init-logo.png';

/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */

// Importing all Team members images  from Assets

import alex from './Assets/teami/alex.png';
import ague from './Assets/teami/agueda.jpeg';
import boy from './Assets/boy.png'
import ric from './Assets/teami/ricardo.jpeg';

const TOP_SECTION = {
  TITLE: 'EduHackFest',
  Typed_effect: ['24 horas de creación', 'Gana premios increíbles'],
  SHORT_DESCRIPTION:
    'Únete a nosotros el 11 y 12 de Noviembre de 2023 para remodelar el futuro de la educación a distancia gracias al uso de tecnologías emergentes.',
  IMG_SRC: boy,
  DISCORD_LINK: '',
  JUDGES_FORM_LINK: '',
  HACKERS_REGISTRATION_FORM_LINK: 'https://digieduhack.com/challenges/eduhackfest-beyond-education-with-xr-and-ai'
};

const SOCIALS = {
  instagram: 'https://www.instagram.com/eduhackfest/',
  discord: '',
  linkedin: '',
  twitter: 'https://twitter.com/eduhackfest',
  devpost: '',
  email: 'mailto:eduhackfestinit@gmail.com',
  mail: 'eduhackfestinit@gmail.com'
};

const MIDDLE_SECTION = {
  TITLE: 'Que es EduHackFest?',
  LONG_DESCRIPTION:
    'EduHackFest es un hackathon de 24 horas que se lelvará a cabo el 11 y 12 de noviembre de 2023. Este hackathon forma parte de la fase de codiseño del proyecto Horizonte Europa e-DIPLOMA, cuyo propósito es mejorar el ecostistema del aprendizaje a distancia, haciendo uso de Realidad Aumentada / Realidad Virtual, Inteligencia Artificial (Machine Learning/Deep Learning), Tecnologías Interactivas, chatbots y gamificación en una nueva plataforma de e-learning. Además este hackahton se lleva a cabo bajo el paraguas del proyecto europeo DigiEduHack.',
  LOGO: hackathonLogo
};

const FOOTER = {
  VOLUNTEERING_FORM: {
    required: true,
    src: 'https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUNFBQME44TzJZWDc2UFgwTUtLN0xDQVYyUi4u'
  },
  JOIN_TEAM: {
    required: true,
    src: 'https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUOUhEQkJSRk02OEU4SlBMTUdYOFIxOTNZSy4u'
  },
  Privacy_policy: {
    required: true,
    src: ''
  },
  Terms_of_use: {
    required: true,
    src: ''
  }
};

/** SCHEDULE
 *
 * INSTRUCTIONS
 *
 * Date format : 8-11-2021, 18-11-2021 (without trailing zeros)
 */

const calenderStartingDate = {
  month: 11,
  year: 2023
};

const schedule = [
  {
    day: '11-11-2023',
    events: [
      {
        title: 'EduHackFest empieza',
        timings: '8 AM',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '12-11-2023',
    events: [
      {
        title: 'Se anuncian los ganadores',
        timings: '8 PM',
        link: 'https://google.com'
      }
    ]
  }
];

/** ICON
 *
 * icons are from fontawesome visit = https://fontawesome.com
 * and just copy paste icon links and update icon in Prizeinfo
 *
 * INSTRUCTIONS
 *
 * Insert only 3 or less then 3 prizes per array in `Prizeinfo`, you can
 * create as many arrays you want all prizes will be rendered
 * in a group of 3.
 */

const Prizeinfo = [
  [
    //Array 1
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: 'Ganador Local',
      content:
        'Premio dado al equipo con la mejor solución para el reto de EduHackFest'
    },
    {
      icon: <i className=" second fas fa-4x fa-medal"></i>,
      type: 'Mejor Presentación',
      content:
        'Premio dado al equipo con la mejor presentación de su proyecto'
    },
    {
      icon: <i className=" third fa-4x fas fa-book-open"></i>,
      type: 'Gamificador de oro',
      content:
        'Premio dado al equipo con mejor sistema de gamificación'
    }
  ]
];

const PrizeinfoDigi = [
  [
    {},
    //Array 1
    {
      icon: <i className="first fas fa-5x fa-trophy"></i>,
      type: 'Ganador Europeo',
      content:
        'Premio dado al equipo con mejor proyecto en toda Europa'
    }
  ]
];

/** Instructions
 * Insert only 3 or less then 3 members per array in `TeamInfo`, you can
 * create as many arrays you want all team members will be rendered
 * in a group of 3.
 */

const TeamInfo = [
  [
    //Array 1
    {
      Name: 'Rubén García',
      role: 'Rubén García',
      github: '',
      linkedin: '',
      img: boy
    },
    {
      Name: 'Águeda Gómez',
      role: 'Águeda Gómez',
      github: '',
      linkedin: '',
      img: boy
    },
    {
      Name: 'Alex Martínez',
      role: 'Alex Martínez',
      github: '',
      linkedin: '',
      img: boy
    }
  ],
  [
    //Array 2
    {
      Name: 'Jon Andoni Fernández',
      role: 'Jon Andoni Fernández',
      github: '',
      linkedin: '',
      img: boy
    },
    {
      Name: 'Ricardo Pardo',
      role: 'Ricardo Pardo',
      github: '',
      linkedin: '',
      img: boy
    },
    {
      Name: 'Anna Tonda',
      role: 'Anna Tonda',
      github: '',
      linkedin: '',
      img: boy
    }
  ]
];

const JudgesInfo = [
  [
    //Array 1
    {
      Name: 'Inmaculada Remolar',
      role: 'Inmaculada Remolar',
      github: '',
      linkedin: '',
      img: boy
    },
    {
      Name: 'Increa',
      role: 'Increa',
      github: '',
      linkedin: '',
      img: boy
    },
    {
      Name: 'A decidir',
      role: 'A decidir',
      github: '',
      linkedin: '',
      img: boy
    }
  ]
];

/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const sponsorLogos = [
  [{src: uji}, {src: ediploma}, {src: init}], //Array 1
];

/** Instructions
 * Follow the strcuture provided below to add as many as FAQ's you want
 */
const frequentlyAskedQuestions = [
  [
    [
      {
        label: '¿Qué es un hackathon?',
        content:
          'Un hackathon es un evento de 24 horas en el que "hackers" colaboran para crear / diseñar un software y / o un hardware que funcionen al final del evento.'
      },
      {
        label: '¿Quién puede asistir?',
        content:
          'EduHackFest está abierto a universitarios, estudiantes de FP, investigadores, profesionales de la educación, innovadores e entusiastas de la educación digital. Si no te identificas bajo alguno de estos perfiles no te preocupes, ¡también puedes participar! Queremos que este hackathon sea un evento inclusivo y diverso.'
      },
      {
        label: 'Nunca he participado en un hackathon, ¿Qué debo hacer?',
        content:
          'No te preocupes si nunca has asistido a este tipo de eventos. Durante la ejecución del evento siempre tendrás a tu disposición a nuestro equipo para resolver cualquier tipo de duda. No obstante, no dudes en contactarnos al correo electrónico o a nuestras redes si lo necesitas.'
      },
      {
        label: '¿Cómo funcionan los equipos?',
        content:
          "Durante el registro se te pedirá indicar el nombre de tu equipo. Podrás formar un equipo antes de la competición y todos los miembros deberán introducir el mismo nombre. Si no tienes equipo tendrás que dejar esa opción en blanco, antes de que comience el evento nosotros te asignaremos a algún equipo."
      }
    ],
    [
      {
        label: '¿Qué necesito para participar?',
        content:
          'No necesitas nada en especial, solo muchas ganas de aprender y pasarlo bien. Los miembros del equipo serán los encargadas de traer todo el material necesario para el desarrollo de las actividades. Las posibles herramientas de software que empleemos serán gratuitas y daremos un breve curso para poder utilizarlas.'
      },
      {
        label: '¿Tienes más preguntas?',
        content:
          'Contactanos (eduhackfestinit@gmail.com) o por cualquiera de nuestras redes sociales. ¡Te ayudaremos en lo que necesites!'
      },
      {
        label: '¿Qué es e-DIPLOMA?',
        content:
          "e-DIPLOMa es un proyecto Horizonte Europa (número de proyecto 101061424), que busca revolucionar el e-learning aplicando tecnologías emergentes. Si quieres saber más visita la web del proyecto <a href='https://e-diplomaproject.eu/' target='_blank'>e-DIPLOMA</a>."
      },
      {
        label: '¿Cuál es el premio?',
        content: 'En este momento se están preparando diferentes premios para los ganadores. ¡Pronto tednremos más información! El ganador de este evento pasará a formar parte de los posibles ganadores de la competición de DigiEduHack, dondré obtarán a 5000€ de premio.'
      }
    ]
  ]
];

export {
  TOP_SECTION,
  MIDDLE_SECTION,
  SOCIALS,
  FOOTER,
  Prizeinfo,
  PrizeinfoDigi,
  sponsorLogos,
  TeamInfo,
  JudgesInfo,
  frequentlyAskedQuestions,
  schedule,
  calenderStartingDate
};

// Activités
import Noel from "../assets/images/noel.jpg";
import Paque from "../assets/images/paque.jpg";
import Weekend from "../assets/images/weekendBranche.jpg";
import Vacance from "../assets/images/vacance.jpg";

export const activities = [
    {
        id: 1,
        title: 'Camp de Nöel',
        date: '26-30 Décembre',
        description: 'Quatre jours de pleine nature, de jeux et d\'apprentissage des techniques scoutes au sein du groupe.',
        imageUrl: Noel,
    },
    {
        id: 2,
        title: 'Camp de Pâques',
        date: 'En Avril',
        description: 'Un camp d\'éducation, de formation et de partage avec tous les scouts du district',
        imageUrl: Paque,
    },
    {
        id: 3,
        title: 'Week-end de branche',
        date: 'En Juin',
        description: 'Une VSD de camping avec au programme des activités compétitives entre les différentes régions.',
        imageUrl: Weekend,
    },
    {
        id: 4,
        title: 'Camp de Vacance',
        date: 'En Août',
        description: 'Un grand rassemblement qui détermine les cibles en fonctions des années',
        imageUrl: Vacance,
    }
];

// Branches
import Rose from "../assets/images/rose.jpeg";
import Jaune from "../assets/images/jaune.jpeg";
import Vert from "../assets/images/vert.jpeg";
import Orange from "../assets/images/orange.jpeg";
import Rouge from "../assets/images/rouge.jpeg";

export const branches = [
    {
        name: 'Oisillons',
        ageRange: '3–7 ans',
        color: 'pink',
        description: 'Les plus jeunes découvrent le monde du scoutisme à travers des jeux, des chants et des activités adaptées.',
        imageUrl: Rose
    },
    {
        name: 'Louveteaux',
        ageRange: '8–11 ans',
        color: 'yellow',
        description: 'Inspirés par le "Livre de la Jungle", les louveteaux apprennent la vie en communauté et les premiers savoir-faire.',
        imageUrl: Jaune
    },
    {
        name: 'Éclaireurs',
        ageRange: '12–14 ans',
        color: 'green',
        description: 'L\'aventure et l\'exploration sont au cœur des activités des éclaireurs, qui développent leur autonomie.',
        imageUrl: Vert
    },
    {
        name: 'Cheminots',
        ageRange: '15–17 ans',
        color: 'orange',
        description: 'Les adolescents perpétuent les traditions scoutes tout en relevant des défis qui forgent leur caractère et leur sens des responsabilités.',
        imageUrl: Orange
    },
    {
        name: 'Routiers',
        ageRange: '18–21 ans',
        color: 'red',
        description: 'Les jeunes adultes se préparent à devenir les futurs chefs en menant des projets de service.',
        imageUrl: Rouge
    }
];

// Témoignages
import David from "../assets/images/david.jpg";
import Andre from "../assets/images/andré.jpg";
import Ghibli from "../assets/images/ghibli.jpg";

export const temoignages = [
    {
        name: 'David Kouaho',
        role: 'Parent',
        testimonial: 'Le scoutisme a transformé mon fils. Il est devenu plus responsable, plus courageux et plus serviable à la maison.',
        avatar: David
    },
    {
        name: 'André Kouaho',
        role: 'Ancien scout',
        testimonial: 'Les années passées chez Les Mohicans m\'ont donné des compétences et des amitiés pour la vie. Une expérience inoubliable!',
        avatar: Andre
    },
    {
        name: 'Ghibli ChatGpt',
        role: 'Chef d\'unité',
        testimonial: 'Voir les jeunes grandir et s\'épanouir au fil des activités est la plus belle récompense pour un chef scout.',
        avatar: Ghibli
    }
];
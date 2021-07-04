import { faBlogger } from '@fortawesome/free-brands-svg-icons';
import carouselIcone from './carouselIcone.png';
import { faAddressBook, faBriefcase, faBuilding, faCalendarCheck, faChalkboardTeacher, faClock, faImages, faList, faNewspaper, faPlay, faUser, faUserGraduate, faUsersCog } from '@fortawesome/free-solid-svg-icons';

const navigationData = [
    {
        "name": "Carousels",
        "path": "/admin",
        "image": carouselIcone
    },
    {
        "name": "Articles",
        "path": "/admin/article",
        "icon": faNewspaper
    },
    {
        "name": "Vidéos",
        "path": "/admin/video",
        "icon": faPlay
    },
    {
        "name": "Evenements",
        "path": "/admin/evenement",
        "icon": faCalendarCheck
    },
    {
        "name": "Rendez-vous",
        "path": "/admin/rendez-vous",
        "icon": faClock
    },
    {
        "name": "Offres",
        "path": "/admin/mission",
        "icon": faBriefcase
    },
    {
        "name": "Gallerie",
        "path": "/admin/gallerie",
        "icon": faImages
    },
    {
        "name": "Les réservations",
        "path": "/admin/reservation",
        "icon": faBuilding
    },
    {
        "name": "Adhérents",
        "path": "/admin/adherent",
        "icon": faAddressBook
    },
    {
        "name": "Service civique",
        "path": "/admin/service-civique",
        "icon": faUserGraduate
    },
    {
        "name": "Associations",
        "path": "/admin/association",
        "icon": faUser
    },
    {
        "name": "Admin",
        "path": "/admin/liste-administrateur",
        "icon": faUsersCog
    },
    /*{
        "name": "Reprographie",
        "path": "/admin/reprographie"
    },*/
]
export default navigationData;
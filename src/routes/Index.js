import DemandeAdhesion from '../layout/DemandeAdhesion';
import InterfaceClient from '../layout/InterfaceClient';
import Login from '../layout/Login';
import Service from '../layout/Service';
import CestQuoi from '../component/CestQuoi';
import Contact from '../component/Contact';
import Accueil from '../layout/Accueil';
import Mission from '../layout/Mission';
import PageError from '../layout/PageError';
import QuiSommeNous from '../layout/QuiSommeNous';
import Postulez from '../layout/Postulez';
import Reservation from '../layout/Reservation';
import Faq from '../layout/Faq';
import EnConstruction from '../layout/EnConstruction';
import CreatePassword from '../layout/CreatePassword';
import FormAdmin from '../component/reservation/FormAdmin';
import Ressources from '../component/Ressources';
import Gallerie from '../component/Gallerie';
import Test from '../component/Test';
import RendezVous from '../layout/RendezVous';

const Routes = [
    {
        path: "/",
        component: Accueil,
        needsAuth: true,
    },
    {
        path: "/contact",
        component: Contact,
        needsAuth: true,
    },
    {
        path: "/services",
        component: Service,
        needsAuth: true,
    },
    {
        path: "/c-est-quoi",
        component: CestQuoi,
        needsAuth: true,
    },
    {
        path: "/postuler",
        component: Postulez,
        needsAuth: true,
    },
    {
        path: "/mission",
        component: Mission,
        needsAuth: true,
    },
    {
        path: "/reservation",
        component: Reservation,
        needsAuth: true,
    },
    {
        path: "/declaration-association",
        component: DemandeAdhesion,
        needsAuth: true,
    },
    {   path:"/erreur404",
        component: PageError,
        needsAuth: false,
    },
    {
        path: "/login",
        component: Login,
        needsAuth: false,
    },
    {
        path: "/mon-espace",
        component: InterfaceClient,
        needsAuth: true,
    },
    {
        path: "/qui-somme-nous",
        component: QuiSommeNous,
        needsAuth: true,
    },
    {
        path: "/faq",
        component: Faq,
        needsAuth:true
    },
    {
        path:"/page-en-construction",
        component: EnConstruction,
        needsAuth:true
    },
    {
        path: "/password",
        component: CreatePassword,
        needsAuth: false,
    },
    {
        path:"/listReservation/:id",
        component: FormAdmin,
        needsAuth:true
    },
    {
        path:"/ressource",
        component: Ressources,
        needsAuth:true
    },
    {
        path:"/gallerie",
        component: Gallerie,
        needsAuth:true
    },
    {
        path:"/test",
        component: Test,
        needsAuth:true
    },
    {
        path:"/rendez-vous",
        component: RendezVous,
        needsAuth:true
    }
]

export default Routes;
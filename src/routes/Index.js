import DemandeAdhesion from '../layout/DemandeAdhesion';
import Login from '../layout/Login';
import Service from '../layout/Service';
import CestQuoi from '../component/CestQuoi';
import Contact from '../layout/Contact';
import Accueil from '../layout/Accueil';
import Mission from '../layout/Mission';
import PageError from '../layout/PageError';
import QuiSommeNous from '../layout/QuiSommeNous';
import Postulez from '../layout/Postulez';
import Reservation from '../layout/Reservation';
import Faq from '../layout/Faq';
import CreatePassword from '../layout/CreatePassword';
import FormAdmin from '../component/reservation/FormAdmin';
import Ressources from '../layout/Ressources';
import Gallerie from '../layout/Gallerie';
import RendezVous from '../layout/RendezVous';
import CarouselAdmin from '../component/Admin/CarouselAdmin';
import ArticlesAdmin from '../component/Admin/ArticlesAdmin';
import VideoAdmin from '../component/Admin/VideoAdmin';
import EvenementAdmin from '../component/Admin/EvenementAdmin';
import RendezVousAdmin from '../component/Admin/RendezVousAdmin';
import AssociationAdmin from '../component/Admin/AssociationAdmin';
import OffreAdmin from '../component/Admin/OffreAdmin';
import ServiceCiviqueAdmin from '../component/Admin/ServiceCiviqueAdmin';
import ReservationAdmin from '../component/Admin/ReservationAdmin';
import ReprographieAdmin from '../component/Admin/ReprographieAdmin';
import GallerieAdmin from '../component/Admin/GallerieAdmin';
import AdherentsAdmin from '../component/Admin/AdherentsAdmin';
import LoginSC from '../component/ActualisationServiceCivique/LoginSC';
import DashboardSC from '../component/ActualisationServiceCivique/DashboardSC';
import MaSemaineSC from '../component/ActualisationServiceCivique/MaSemaineSC';
import MesPartenaires from '../component/ActualisationServiceCivique/MesPartenaires';
import ComingSoon from '../component/comingsoon/ComingSoon';
import MesBilans from '../component/ActualisationServiceCivique/MesBilans';
import CalendrierMissions from '../component/ActualisationServiceCivique/CalendrierMissions';
import RecapitulatifMensuel from '../component/ActualisationServiceCivique/RecapitulatifMensuel';
import BilanIntegration from '../component/ActualisationServiceCivique/BilanIntegration';
import BilanMiParcours from '../component/ActualisationServiceCivique/BilanMiParcours';
import BilanNominatif from '../component/ActualisationServiceCivique/BilanNominatif';
import InscriptionSV from '../component/ActualisationServiceCivique/InscriptionSV';
import contenuArticle from '../component/contenu/contenuArticle';
import contenuAgenda from '../component/contenu/contenuAgenda';
import Redirect404 from '../component/Redirect404';
import ToutArticle from '../layout/ToutArticle';
import ToutEvenement from '../layout/ToutEvenement';
import ToutVideo from '../layout/ToutVideo';
import Main from '../component/vitrineAssociation/Main';
import Dashboard from '../layout/Dashboard';
import DashboardAdherent from '../component/AdherentDashboard/DashboardAdherent';
import ContenuGallerie from '../component/Gallerie/ContenuGallerie';
import ContenuGallerieAdmin from '../component/Admin/ContenuGallerieAdmin';
import ListeAdmin from '../component/Admin/ListeAdmin';

const Routes = [
    {
        path: "/",
        component: Accueil,
        needsAuth: true,
    },
    {
        path:'/coming-soon',
        component: ComingSoon,
        needsAuth: false
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
    {
        path: "/login",
        component: Login,
        needsAuth: false,
    },
    {
        path:"/association/:name",
        component: Main,
        needsAuth: true,
    },
    {
        path:"/article",
        component: ToutArticle,
        needsAuth: true,
    },
    {
        path:"/article/:titre",
        component: contenuArticle,
        needsAuth: true,
    },
    {
        path:"/agenda",
        component: ToutEvenement,
        needsAuth: true,
    },
    {
        path:"/agenda/:titre",
        component: contenuAgenda,
        needsAuth: true,
    },
    {
        path:"/video",
        component: ToutVideo,
        needsAuth: true,
    },
    {
        path:"/dashboard",
        component: Dashboard,
        needsAuth: true
    },
    {
        path: "/admin",
        component: CarouselAdmin,
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
        path: "/password",
        component: CreatePassword,
        needsAuth: true,
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
        path:"/gallerie/:name",
        component: ContenuGallerie,
        needsAuth: true
    },
    {
        path:"/admin/gallerie/:name",
        component: ContenuGallerieAdmin,
        needsAuth: true
    },
    {
        path:"/rendez-vous",
        component: RendezVous,
        needsAuth:true
    },
    {
        path:"/service-civique",
        component: LoginSC,
        needsAuth:true
    },
    {
        path:"/service-civique/inscription",
        component:InscriptionSV,
        needsAuth:true
    },
    {
        path:"/service-civique/dashboard",
        component: DashboardSC,
        needsAuth:true
    },
    {
        path:"/service-civique/ma-semaine",
        component: MaSemaineSC,
        needsAuth:true
    },
    {
        path: "/service-civique/mes-partenaire",
        component: MesPartenaires,
        needsAuth:true
    },
    {
        path: "/service-civique/mes-bilans",
        component: MesBilans,
        needsAuth: true
    },
    {
        path: "/service-civique/calendrier-missions",
        component: CalendrierMissions,
        needsAuth: true
    },
    {
        path: "/service-civique/recapitulatif-mensuel",
        component: RecapitulatifMensuel,
        needsAuth: true
    },
    {
        path: "/service-civique/bilan-integration",
        component: BilanIntegration,
        needsAuth: true
    },
    {
        path: "/service-civique/bilan-a-mi-parcours",
        component: BilanMiParcours,
        needsAuth: true
    },
    {
        path: "/service-civique/bilan-nominatif",
        component: BilanNominatif,
        needsAuth: true
    },
    {
        path: "/admin/article",
        component: ArticlesAdmin,
        needsAuth: true
    },
    {
        path: "/admin/video",
        component: VideoAdmin,
        needsAuth: true
    },
    {
        path:"/admin/evenement",
        component: EvenementAdmin,
        needsAuth: true
    },
    {
        path:"/admin/rendez-vous",
        component: RendezVousAdmin,
        needsAuth: true
    },
    {
        path:"/admin/association",
        component: AssociationAdmin,
        needsAuth: true
    },
    {
        path:"/admin/mission",
        component: OffreAdmin,
        needsAuth: true
    },
    {
        path:"/admin/liste-administrateur",
        component: ListeAdmin,
        needsAuth: true
    },
    {
        path:"/admin/service-civique",
        component: ServiceCiviqueAdmin,
        needsAuth: true
    },
    {
        path:"/admin/reservation",
        component: ReservationAdmin,
        needsAuth: true
    },
    {
        path:"/admin/reprographie",
        component: ReprographieAdmin,
        needsAuth: true
    },
    {
        path:"/admin/gallerie",
        component: GallerieAdmin,
        needsAuth: true
    },
    {
        path:"/admin/adherent",
        component: AdherentsAdmin,
        needsAuth: true
    },
    {   path: '/404',
        component: PageError,
        needsAuth: true,
    },
    {
        path: '/adherent/:email',
        component: DashboardAdherent,
        needsAuth: true,
    }
]

export default Routes;
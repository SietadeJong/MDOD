import Home from "@/pages/Home.vue";
import NonExistingPage from "@/pages/NonExistingPage";
import Intro from "@/pages/Intro";
import InAg from "@/pages/InAg";
import InAgAg from "@/pages/InAgAg";
import InAgAgAg from "@/pages/InAgAgAg";
import InAgAgAs from "@/pages/InAgAgAs";
import InAgAgPa from "@/pages/InAgAgPa";
import InAgAs from "@/pages/InAgAs";
import InAgAsAg from "@/pages/InAgAsAg";
import InAgAsAs from "@/pages/InAgAsAs";
import InAgAsPa from "@/pages/InAgAsPa";
import InAs from "@/pages/InAs";
import InAsAs from "@/pages/InAsAs";
import InAsPa from "@/pages/InAsPa";
import InAsPaAg from "@/pages/InAsPaAg";
import InPa from "@/pages/InPa";
import InPaAg from "@/pages/InPaAg";
import InPaAgPa from "@/pages/InPaAgPa";
import InPaAs from "@/pages/InPaAs";
import InPaAsPa from "@/pages/InPaAsPa";
import InPaPa from "@/pages/InPaPa";
import InPaPaAs from "@/pages/InPaPaAs";
import InPaPaPa from "@/pages/InPaPaPa";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
        meta: {title: "Minder drank of drugs"}
    },
	{
        path: "/intro",
        name: "intro",
        component: Intro,
        meta: {title: "Minder drank of drugs"}
    },
	{
        path: "/InAg",
        name: "InAg",
        component: InAg,
        meta: {title: "Minder drank of drugs"}
    },
	{
        path: "/InAgAg",
        name: "InAgAg",
        component: InAgAg,
        meta: {title: "Minder drank of drugs"}
    },
	{
        path: "/InAgAgAg",
        name: "InAgAgAg",
        component: InAgAgAg,
        meta: {title: "Minder drank of drugs"}
    },
	{
        path: "/InAgAgAs",
        name: "InAgAgAs",
        component: InAgAgAs,
        meta: {title: "Minder drank of drugs"}
    },
	{
        path: "/InAgAgPa",
        name: "InAgAgPa",
        component: InAgAgPa,
        meta: {title: "Minder drank of drugs"}
    },
	{
        path: "/InAgAs",
        name: "InAgAs",
        component: InAgAs,
        meta: {title: "Minder drank of drugs"}
    },
	{
        path: "/InAgAsAg",
        name: "InAgAsAg",
        component: InAgAsAg,
        meta: {title: "Minder drank of drugs"}
    },
	{
        path: "/InAgAsAs",
        name: "InAgAsAs",
        component: InAgAsAs,
        meta: {title: "Minder drank of drugs"}
    },
	{
        path: "/InAgAsPa",
        name: "InAgAsPa",
        component: InAgAsPa,
        meta: {title: "Minder drank of drugs"}
    },
	{
        path: "/InAs",
        name: "InAs",
        component: InAs,
        meta: {title: "Minder drank of drugs"}
    },
	{
        path: "/InAsAs",
        name: "InAsAs",
        component: InAsAs,
        meta: {title: "Minder drank of drugs"}
    },
	{
        path: "/InAsPa",
        name: "InAsPa",
        component: InAsPa,
        meta: {title: "Minder drank of drugs"}
    },
	{
        path: "/InAsPaAg",
        name: "InAsPaAg",
        component: InAsPaAg,
        meta: {title: "Minder drank of drugs"}
    },
	{
        path: "/InPa",
        name: "InPa",
        component: InPa,
        meta: {title: "Minder drank of drugs"}
    },
	{
        path: "/InPaAg",
        name: "InPaAg",
        component: InPaAg,
        meta: {title: "Minder drank of drugs"}
    },
	{
        path: "/InPaAgPa",
        name: "InPaAgPa",
        component: InPaAgPa,
        meta: {title: "Minder drank of drugs"}
    },
	{
        path: "/InPaAs",
        name: "InPaAs",
        component: InPaAs,
        meta: {title: "Minder drank of drugs"}
    },
	{
        path: "/InPaAsPa",
        name: "InPaAsPa",
        component: InPaAsPa,
        meta: {title: "Minder drank of drugs"}
    },
	{
        path: "/InPaPa",
        name: "InPaPa",
        component: InPaPa,
        meta: {title: "Minder drank of drugs"}
    },
	{
        path: "/InPaPaAs",
        name: "InPaPaAs",
        component: InPaPaAs,
        meta: {title: "Minder drank of drugs"}
    },
	{
        path: "/InPaPaPa",
        name: "InPaPaPa",
        component: InPaPaPa,
        meta: {title: "Minder drank of drugs"}
    },
    {
        path: '*',
        component: NonExistingPage,
        meta: {title: "404 | " + process.env.VUE_APP_TITLE}
    },
]

export default routes

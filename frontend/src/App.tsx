import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import SiteLayout from './components/SiteLayout';
import TrustedElectricalContractorsPage from './pages/TrustedElectricalContractorsPage';
import ServicesPage from './pages/ServicesPage';
import QualitySafetyPolicyPage from './pages/QualitySafetyPolicyPage';
import MajorClientsPage from './pages/MajorClientsPage';
import MajorProjectsPage from './pages/MajorProjectsPage';
import GalleryPage from './pages/GalleryPage';
import EnquiryPage from './pages/EnquiryPage';

const rootRoute = createRootRoute({
  component: SiteLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: TrustedElectricalContractorsPage,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services',
  component: ServicesPage,
});

const qualitySafetyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/quality-safety',
  component: QualitySafetyPolicyPage,
});

const clientsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/clients',
  component: MajorClientsPage,
});

const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/projects',
  component: MajorProjectsPage,
});

const galleryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/gallery',
  component: GalleryPage,
});

const enquiryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/enquiry',
  component: EnquiryPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  servicesRoute,
  qualitySafetyRoute,
  clientsRoute,
  projectsRoute,
  galleryRoute,
  enquiryRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}

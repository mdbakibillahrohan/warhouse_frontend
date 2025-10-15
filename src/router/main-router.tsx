import { lazy, Suspense } from "react";
import Skeleton from "react-loading-skeleton";
import type { RouteObject } from "react-router";

const PickingPage = lazy(() => import("../pages/PickingPage"));
const PutawayPage = lazy(() => import("../pages/PutawayPage"));
const ReportsPage = lazy(() => import("../pages/ReportPage"));
const ShippingPage = lazy(() => import("../pages/ShippingPage"));
const PackingPage = lazy(() => import("../pages/PackingPage"));

const DashboardPage = lazy(() => import("../pages/DashboardPage"));
const ReceivingConsignmentPage = lazy(
  () => import("../pages/ReceivingConsignmentPage")
);
const QualityControlPage = lazy(() => import("../pages/QualityControlPage"));
const InventoryManagementPage = lazy(
  () => import("../pages/InventoryMangementPage")
);

const MainRouter: RouteObject[] = [
  {
    path: "*",
    element: <div>Module will be loaded here</div>,
  },
  {
    path: "dashboard",
    element: (
      <Suspense
        fallback={
          <div>
            <Skeleton count={70} />
          </div>
        }
      >
        <DashboardPage />
      </Suspense>
    ),
  },
  {
    path: "receiving",
    element: (
      <Suspense
        fallback={
          <div>
            <Skeleton count={70} />
          </div>
        }
      >
        <ReceivingConsignmentPage />
      </Suspense>
    ),
  },
  {
    path: "quality-control",
    element: (
      <Suspense
        fallback={
          <div>
            <Skeleton count={70} />
          </div>
        }
      >
        <QualityControlPage />
      </Suspense>
    ),
  },
  {
    path: "inventory",
    element: (
      <Suspense
        fallback={
          <div>
            <Skeleton count={70} />
          </div>
        }
      >
        <InventoryManagementPage />
      </Suspense>
    ),
  },
  {
    path: "picking",
    element: (
      <Suspense
        fallback={
          <div>
            <Skeleton count={70} />
          </div>
        }
      >
        <PickingPage />
      </Suspense>
    ),
  },
  {
    path: "putaway",
    element: (
      <Suspense
        fallback={
          <div>
            <Skeleton count={70} />
          </div>
        }
      >
        <PutawayPage />
      </Suspense>
    ),
  },
  {
    path: "reports",
    element: (
      <Suspense
        fallback={
          <div>
            <Skeleton count={70} />
          </div>
        }
      >
        <ReportsPage />
      </Suspense>
    ),
  },
  {
    path: "shipping",
    element: (
      <Suspense
        fallback={
          <div>
            <Skeleton count={70} />
          </div>
        }
      >
        <ShippingPage />
      </Suspense>
    ),
  },
  {
    path: "packing",
    element: (
      <Suspense
        fallback={
          <div>
            <Skeleton count={70} />
          </div>
        }
      >
        <PackingPage />
      </Suspense>
    ),
  },
];

export default MainRouter;

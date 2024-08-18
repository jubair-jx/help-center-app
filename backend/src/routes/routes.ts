import { Router } from "express";
import cardRoutes from "../app/modules/Card/Card.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/cards",
    route: cardRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;

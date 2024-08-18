import { Router } from "express";
import { CardControllers } from "./Card.controller";

const cardRoutes = Router();

cardRoutes.post("/", CardControllers.CreateCard);
cardRoutes.get("/", CardControllers.getAllCard);
cardRoutes.get("/:title", CardControllers.getCard);

export default cardRoutes;

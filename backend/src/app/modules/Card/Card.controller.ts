import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import pickFilterData from "../../../shared/pick";
import sendResponse from "../../../shared/sendResponse";
import { cardFilterAbleData } from "./Card.constant";
import { CardServices } from "./Card.services";

const CreateCard = catchAsync(async (req, res) => {
  const result = await CardServices.CreateCardIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Card is created successfully",
    data: result,
  });
});
const getAllCard = catchAsync(async (req, res) => {
  const filters = pickFilterData(req.query, cardFilterAbleData);

  const result = await CardServices.getAllCardFromDB(filters);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Cards retrieved successfully",
    data: result,
  });
});
const getCard = catchAsync(async (req, res) => {
  const result = await CardServices.getCardByTitle(req.params.title);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Card retrieved successfully",
    data: result,
  });
});

export const CardControllers = {
  CreateCard,
  getAllCard,
  getCard,
};

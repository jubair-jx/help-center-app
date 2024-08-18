import { Prisma } from "@prisma/client";
import prisma from "../../../shared/prisma";
import { cardSearchAbleData } from "./Card.constant";

type TData = {
  title: string;
  description: string;
};

const CreateCardIntoDB = async (body: TData) => {
  const result = await prisma.card.create({
    data: body,
  });
  return result;
};

const getAllCardFromDB = async (params: any) => {
  const { searchTerm, ...filterData } = params;

  const andCondition: Prisma.CardWhereInput[] = [];
  //This condition for only search any items
  if (params.searchTerm) {
    andCondition.push({
      OR: cardSearchAbleData.map((field) => ({
        [field]: {
          contains: params.searchTerm,
          mode: "insensitive",
        },
      })),
    });
  }

  //This condition for specific field, for example name, email, contactnumber, etc
  if (Object.keys(filterData).length > 0) {
    andCondition.push({
      AND: Object.keys(filterData).map((key) => ({
        [key]: {
          equals: (filterData as any)[key],
        },
      })),
    });
  }

  const whereCondition: Prisma.CardWhereInput =
    andCondition.length > 0 ? { AND: andCondition } : {};

  const result = await prisma.card.findMany({
    where: whereCondition,

    orderBy:
      sortBy && sortOrder
        ? {
            [sortBy]: sortOrder,
          }
        : {
            createdAt: "desc",
          },
    select: {
      id: true,
      email: true,
      role: true,
      needPasswordChange: true,
      status: true,
      createdAt: true,
      updatedAt: true,
      admin: true,
      patient: true,
    },
  });

  const totalCount = await prisma.user.count({
    where: whereCondition,
  });
  return {
    meta: {
      page,
      limit,
      totalCount,
    },

    data: result,
  };
};
const getCardByTitle = async (title: string) => {
  const result = await prisma.card.findFirstOrThrow({
    where: {
      title,
    },
  });
  return result;
};

export const CardServices = {
  CreateCardIntoDB,
  getCardByTitle,
  getAllCardFromDB,
};

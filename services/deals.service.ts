// Api
import api from "./api";

// Utils
import applyQuery from "../utils/applyQuery";

export type SortBy = 
  "Deal Rating" 
  | 
  "Title" 
  | 
  "Savings" 
  | 
  "Price" 
  | 
  "Metacritic" 
  | 
  "Reviews" 
  | 
  "Release" 
  | 
  "Store" 
  | 
  "recent"
  |
  string;

type getListDealsProps = {
  storeID?: string;
  pageSize?: number;
  sortBy?: SortBy;
}

const getListDeals = async ({
  storeID,
  pageSize = 10,
  sortBy = "recent"
}: getListDealsProps) => (
  api.get(
    `deals?pageSize=${pageSize}`
    +
    applyQuery(storeID, "storeID")
    +
    applyQuery(sortBy, "sortBy")
  )
)

export const dealsService = {
  getListDeals,
}
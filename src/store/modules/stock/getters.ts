import { GetterTree } from "vuex";
import OrderState from "./StockState";
import RootState from "../../RootState";

const getters: GetterTree<OrderState, RootState> = {
  getStockItems(state) {
    return JSON.parse(JSON.stringify(state.items));
  },
  getShopifyShops(state) {
    return state.shopifyShops
  },
  getScheduledJobs(state) {
    return state.jobs
  }
};
export default getters;   
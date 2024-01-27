import { useStore } from "vuex";

const store = useStore();

function getStoreContent(getItem: string) {
  let storeItems = store.state.find(getItem);
  return storeItems;
}

function changeStoreContent(where: string, what: any) {
  store.dispatch(where, what);
}

export { getStoreContent, changeStoreContent };

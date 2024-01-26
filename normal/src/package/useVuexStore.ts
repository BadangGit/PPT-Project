import { useStore } from "vuex";

const store = useStore();

function getStoreContent(item: string) {
  let storeItems = store.state.find(item);
  return storeItems;
}

export { getStoreContent };

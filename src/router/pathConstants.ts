export const PathConstants = {
  HOME: "/",
  COLLECTION: "/collections",
  get COLLECTION_ID() {
    return this.buildCollectionID(":code");
  },

  buildCollectionID(code: string) {
    return `${this.COLLECTION}/${code}/booster`;
  },
};

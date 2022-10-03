import create from "zustand";
import { devtools, persist } from "zustand/middleware";

const courceStore = (set) => ({
  cources: [],
  addCource: (cource) => {
    set((state) => ({
      cources: [cource, ...state.cources],
    }));
  },
  removeCource: (courceId) => {
    set((state) => ({
      cources: state.cources.filter((c) => c.id !== courceId),
    }));
  },
  toggleCourceStatus: (courceId) => {
    set((state) => ({
      cources: state.cources.map((c) =>
        c.id === courceId ? { ...c, complited: !c.complited } : c
      ),
    }));
  },
});

const useCourceStore = create(
  devtools(
    persist(courceStore, {
      name: "cources",
    })
  )
);

export default useCourceStore;

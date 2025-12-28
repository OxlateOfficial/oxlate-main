import { create } from "zustand";
import { ServiceId } from "@/lib/constants/services";

type State = {
  service: ServiceId | "";
  setService: (service: ServiceId) => void;
};

export const useServiceSelection = create<State>((set) => ({
  service: "",
  setService: (service) => set({ service }),
}));
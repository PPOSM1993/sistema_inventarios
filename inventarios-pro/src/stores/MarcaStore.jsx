import { create } from "zustand";
import {
  BuscarMarca,
  EditarMarca,
  EliminarMarca,
  InsertarMarca,
  MostrarMarca,
} from "../index";

export const useMarcaStore = create((set, get) => ({
  buscador: "",
  setBuscador: (p) => {
    set({ buscador: p });
  },
  datamarca: [],
  marcaItemSelect: [],
  paramentos: {},
  mostrarMarca: async (p) => {
    const reponse = await MostrarMarca(p);
    set({ paramentos: p });
    set({ datamarca: reponse });
    set({ marcaItemSelect: reponse[0] });
    return reponse;
  },
  selectMarca: (p) => {
    set({ marcaItemSelect: p });
  },
  insertarMarca: async (p) => {
    await InsertarMarca(p);
    const { mostrarMarca } = get();
    const { paramentos } = get();
    set(mostrarMarca(paramentos));
  },
  editarMarca: async (p) => {
    await EditarMarca(p);
    const { mostrarMarca } = get();
    const { parametros } = get();
    set(mostrarMarca(parametros));
  },
  buscarMarca: async (p) => {
    const response = await BuscarMarca(p);
    set({ datamarca: response });
  },
}));

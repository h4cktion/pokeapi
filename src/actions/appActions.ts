import { createAsyncThunk } from "@reduxjs/toolkit";
import services from "../services/pokemonServices";

export const fetchPokemons = createAsyncThunk(
  "admin/fetchClientList",
  async (url: string) => {
    return await services.fetchDataFromUrl(url);
  }
);

import type { Modalidades } from "../auxiliares";
import {type BaseSearchParams } from "./BaseSearchParams";

export interface CapacitacionSearchParams extends BaseSearchParams {
  modalidad: Modalidades | ''
}



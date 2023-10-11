import { InjectionToken } from "@angular/core";
import { environment } from "src/environments/environment.prod";

export const baseUrl = environment.baseUrl;
export const BASE_URL_TOKEN = new InjectionToken('BASE_URL_TOKEN');
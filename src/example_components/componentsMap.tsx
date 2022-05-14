import { Counter } from "./Counter";
import { SelectCity } from "./SelectCity";

export const componentsMap: any = [];
// key is field "nameComponent" in Contentful, value is corresponding React component
componentsMap["counter"] = Counter;
componentsMap["select_city"] = SelectCity;

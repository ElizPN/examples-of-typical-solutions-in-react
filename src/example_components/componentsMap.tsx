import { AddElementFromInput } from "./AddElementFromInput";
import { ArrayList } from "./ArrayList";
import { Counter } from "./Counter";
import { DeleteElementByIndex } from "./DeleteElementByIndex";
import { IncreaseArray } from "./IncreaseArray";
import { SelectCity } from "./SelectCity";

export const componentsMap: any = [];
// key is field "nameComponent" in Contentful, value is corresponding React component
componentsMap["counter"] = Counter;
componentsMap["select_city"] = SelectCity;
componentsMap["increase_array"] = IncreaseArray;
componentsMap["delete_element_by_index"] = DeleteElementByIndex;
componentsMap["add_element_from_input"] = AddElementFromInput;

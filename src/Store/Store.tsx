import { action, autorun, computed, observable, reaction } from "mobx";
import { listtype } from "../interface/interface";

class Country {
  @observable List: listtype[] = [];
  allList: listtype[] = [];
  isFetch = false;

  @action
  fetchList = async () => {
    const response = await fetch("https://apis.ccbp.in/countries-data");
    const Data = await response.json();
    this.List = Data;
    this.allList = Data;
  };

  AllCountryList = () => {
    this.List = this.allList;
  };

  @action
  filterDataList = (value: string) => {
    const filterList: listtype[] = [];
    this.allList.forEach((obj) => {
      if (obj.name.toLowerCase().includes(value)) {
        filterList.push(obj);
      }
    });
    this.List = filterList;
  };

  @computed
  get totalCount(): number {
    return this.List.length;
  }
}

export const CountryLists = new Country();

autorun(() => {
  CountryLists.fetchList();
});

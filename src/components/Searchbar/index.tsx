import { Input } from "../../StyledComponents/styledcomponent";
import { CountryLists } from "../../Store/Store";

const Searchbar = () => {
  const handleFilterData = (e: any) => {
    if (e.target.value === "all") {
      CountryLists.AllCountryList();
      (document.getElementById("input") as HTMLInputElement).value = "";
    }
  };

  const handleSearchData = (e: any) => {
    CountryLists.filterDataList(e.target.value);
  };

  return (
    <>
      <Input id="input" onChange={handleSearchData}></Input>
      <select id="country" name="county" onClick={handleFilterData}>
        <option value="none">Choose A Option</option>
        <option value="all">All</option>
      </select>
    </>
  );
};

export default Searchbar;

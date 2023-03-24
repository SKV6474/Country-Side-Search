// import React, { Component } from "react";
import { inject, observer } from "mobx-react";
// import {inject} from "mobx-react";
import { Countries } from "../../StyledComponents/styledcomponent";
import Card from "../Card/Card";
import { CountryLists } from "../../Store/Store";
// import * as mobx from "mobx";
// import { listtype } from "../../interface/interface";

// @observer
// class Countrylist extends Component {
//   render() {
//     let CountryObject = mobx.toJS(CountryLists);
//     const { List } = CountryObject;

//     const newlist = List.map((object) => (
//       <Card
//         key={object.name}
//         name={object.name}
//         flag={object.flag}
//         population={object.population}
//       />
//     ));
//     return <Countries>{newlist}</Countries>;
//   }
// }

// export default Countrylist;

const Countrylist = inject("CountryLists")(
  observer(() => {
    // use when u dont want use import for multiple stores
    // inject("CountryLists")()
    // console.log(mobx.toJS(CountryLists).List);
    // const {CountryLists}=props;

    // let CountryObject = mobx.toJS(CountryLists);
    const { List } = CountryLists;

    const newlist = List.map((object) => (
      <Card
        key={object.name}
        name={object.name}
        flag={object.flag}
        population={object.population}
      />
    ));

    return <Countries>{newlist}</Countries>;
  })
);

export default Countrylist;

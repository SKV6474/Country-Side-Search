import React from "react";
import { Props } from "../../interface/interface";
import {
  CardContainer,
  CardDiv,
  ChildDiv,
  Flag,
  FlagDiv,
} from "../../StyledComponents/styledcomponent";

const Card = (props: Props) => {
  const { flag, name, population } = props;

  return (
    <CardContainer>
      <CardDiv>
        <FlagDiv>
          <Flag src={flag} alt="Flag"></Flag>
        </FlagDiv>
        <ChildDiv>
          <h2 style={{ margin: "0 0 5px" }}>{name}</h2>
          <p style={{ margin: 0 }}>{population}</p>
        </ChildDiv>
      </CardDiv>
    </CardContainer>
  );
};

export default Card;

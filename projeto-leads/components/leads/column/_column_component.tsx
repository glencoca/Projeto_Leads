import React, { Children } from "react";
import {
  ColumnAppBar,
  ColumnAppBarText,
  ColumnBody,
  ColumnFooter,
  ColumnFooterText,
  ColumnMain,
} from "./_column_style";

interface Props {
    data: Array<any>
    children: any
}

const ColumnComponent =  ({data}: Props,) => {
  return (
    <ColumnBody className="column">
      <ColumnAppBar>
        <ColumnAppBarText>Inicial</ColumnAppBarText>
      </ColumnAppBar>
      <ColumnFooter>
        <ColumnFooterText>Arraste o cartão para adicionar</ColumnFooterText>
      </ColumnFooter>
      <ColumnMain>
        {data}
      </ColumnMain>
    </ColumnBody>
  );
};

export default ColumnComponent;

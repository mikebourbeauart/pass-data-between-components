import React from "react";
import { Button } from "semantic-ui-react";

export default function Child({ childToParent }: any) {
  const data = "This is data from Child Component to the Parent Component.";

  const onClickHandler = () => {
    childToParent(data);
  };

  return (
    <div>
      <Button primary onClick={onClickHandler}>
        Click Child
      </Button>
    </div>
  );
}

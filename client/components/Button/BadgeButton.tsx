import { TBadgeButton } from "@/types/Button/BadgeButtonType";
import { Badge, Button } from "@mui/material";
import React from "react";

const BadgeButton = ({ count, data, handleClick }: TBadgeButton) => {
  return (
    <Badge badgeContent={count ? count : 0} color="primary">
      <Button variant={"contained"} onClick={() => handleClick(data)}>
        Open Setup
      </Button>
    </Badge>
  );
};

export default BadgeButton;

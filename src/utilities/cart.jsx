import { useState } from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    top: 5,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function Cart() {
  const [badgeContent, setbadgeContent] = useState(0);
  function increment() {
    setbadgeContent((c) => c + 1);
  }
  return (
    <div>
      <div className="cart-wrapper">
        <IconButton aria-label="cart" onClick={() => increment()}>
          <StyledBadge badgeContent={badgeContent} color="primary">
            <ShoppingCartSharpIcon fontSize="large" color="primary" />
          </StyledBadge>
        </IconButton>
      </div>
    </div>
  );
}

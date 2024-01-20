import { TMenuSub } from "@/types/navigation";
import {
  Collapse,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  List,
  Button,
  Menu,
  MenuItem,
  Stack,
  Paper,
  MenuList,
  Popper,
  Grow,
  ClickAwayListener,
  Typography,
  Fade,
  ListItem,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

// Inside MenuSubmenu component
const MenuSubmenu = ({ menuSub, openMainMenu }: TMenuSub) => {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (!openMainMenu) {
      setOpen(false);
    }
  }, [openMainMenu]);
  return (
    <>
      <ListItemButton
        onClick={handleToggle}
        sx={{
          width: "100%",
          minHeight: 48,
          justifyContent: openMainMenu ? "initial" : "center",
          px: 2.5,
          textTransform: "none", // Prevent automatic uppercase transformation
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: openMainMenu ? 3 : "auto",
            justifyContent: "center",
          }}
        >
          {menuSub.icon}
        </ListItemIcon>
        <ListItemText
          primaryTypographyProps={{
            color: "text.secondary",
            fontWeight: "medium",
          }}
          primary={menuSub.name}
          sx={{ opacity: openMainMenu ? 1 : 0 }}
        />
        {openMainMenu && (open ? <ExpandLess /> : <ExpandMore />)}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List>
          {menuSub.subMenu &&
            menuSub.subMenu.map((subMenuItem, index) => (
              <ListItem key={index} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  key={index}
                  onClick={() => {
                    router.push(`${subMenuItem.href}`);
                  }}
                  sx={{
                    width: "100%",
                    minHeight: 48,
                    justifyContent: openMainMenu ? "initial" : "center",
                    px: openMainMenu ? 3.5 : 2.5,
                    textTransform: "none", // Prevent automatic uppercase transformation
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: openMainMenu ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {subMenuItem.icon}
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      color: "text.secondary",
                      fontWeight: "small",
                    }}
                    primary={subMenuItem.name}
                    sx={{ opacity: openMainMenu ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
        </List>
      </Collapse>
    </>
  );
};

export default MenuSubmenu;

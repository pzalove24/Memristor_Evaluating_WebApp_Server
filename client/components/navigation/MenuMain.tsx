import { TMenuMain } from "@/types/navigation";
import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  PopperPlacementType,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import MenuSubmenu from "./MenuSubmenu";

const MenuMain = ({ menuMain, openMainMenu }: TMenuMain) => {
  const router = useRouter();

  return (
    <>
      <List>
        {menuMain.mainMenu.map((menu, index: number) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            {menu.subMenu ? (
              <MenuSubmenu menuSub={menu} openMainMenu={openMainMenu} />
            ) : (
              <ListItemButton
                key={index}
                onClick={() => {
                  router.push(`${menu.href}`);
                }}
                // // onMouseDown={(event) => handleClick(event, menu.subMenu)}
                // onMouseEnter={(event) =>
                //   menu.subMenu && handleClick(event, menu.subMenu)
                // }
                // onMouseLeave={handleMouseLeave}
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
                  {menu.icon}
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{
                    color: "text.secondary",
                    fontWeight: "medium",
                  }}
                  primary={menu.name}
                  sx={{ opacity: openMainMenu ? 1 : 0 }}
                />
              </ListItemButton>
            )}
          </ListItem>
        ))}
      </List>
      <Divider />
    </>
  );
};

export default MenuMain;

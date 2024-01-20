"use client";

import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import BiotechIcon from '@mui/icons-material/Biotech';
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import DockIcon from "@mui/icons-material/Dock";
import AssessmentIcon from "@mui/icons-material/Assessment";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ScienceIcon from "@mui/icons-material/Science";
// import ArticleIcon from "@mui/icons-material/Article";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  AlgorithmPageItemProps,
  ResearchPageItemProps,
  SideBarProps,
} from "@/types";
import { PageModule, TListMenuNavigationProps } from "@/types/navigation";
import MenuMain from "./MenuMain";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function SideBar({ children }: SideBarProps) {
  const theme = useTheme();
  const [openDrawer, setOpenDrawer] = React.useState<boolean>(false);
  const router = useRouter();

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const listMenuNavigation: TListMenuNavigationProps[] = [
    {
      module: PageModule.RESEARCH,
      mainMenu: [
        {
          name: "Dashboard",
          icon: <DashboardIcon />,
          href: "/dashboard",
          description: "Dashboard Description",
        },
        {
          name: "Hardware",
          icon: <DockIcon />,
          href: "/hardware",
          description: "Page for organizing hardware",
        },
        {
          name: "Benchmark",
          icon: <BiotechIcon />,
          description: "Page for organizing hardware",
          subMenu: [
            {
              name: "Benchmark Setup",
              icon: <SettingsSuggestIcon />,
              href: "/benchmark-setup",
              pageAt: "benchmark-setup",
              description: "setup benchmark",
            },
            {
              name: "Benchmark Operation",
              icon: <AssessmentIcon />,
              href: "/benchmark",
              pageAt: "benchmark",
              description: "performing benchmark operation",
            },
            {
              name: "Benchmark review",
              icon: <AutoGraphIcon />,
              href: "/benchmark-review",
              pageAt: "benchmark-review",
              description: "review benchmark result",
            },
          ],
        },
      ],
    },
    {
      module: PageModule.ALGORITHM,
      mainMenu: [
        {
          name: "research",
          icon: <ScienceIcon />,
          href: "/research",
          description: "Dashboard Description",
        },
      ],
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar color="primary" position="fixed" open={openDrawer}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(openDrawer && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            The Memristor Evaluation Board
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={openDrawer}>
        <DrawerHeader>
          {openDrawer ? (
            <Image
              src="/AMPlogo.png"
              alt="AMP"
              width={86}
              height={50}
              className="object-contain"
              style={{ marginRight: 38 }}
            />
          ) : (
            <></>
          )}
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {listMenuNavigation.map((listAllMenu) => (
          <MenuMain
            key={listAllMenu.module}
            menuMain={listAllMenu}
            openMainMenu={openDrawer}
          />
        ))}
      </Drawer>
      <Box
        sx={{
          display: "block",
          p: 3,
          marginTop: 10,
          width: "100%",
          overflow: "auto",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

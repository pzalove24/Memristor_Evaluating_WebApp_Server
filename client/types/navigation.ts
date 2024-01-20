import React from "react";

export type TListMenuNavigationProps = {
  module: PageModule;
  mainMenu: {
    name: string;
    icon: React.JSX.Element;
    href?: string;
    description: string;
    subMenu?: {
      name: string;
      icon: React.JSX.Element;
      href: string;
      pageAt: string;
      description: string;
    }[];
  }[];
};

export enum PageModule {
  RESEARCH = "research",
  ALGORITHM = "algorithm",
}

export type TMenuMain = {
  menuMain: TListMenuNavigationProps;
  openMainMenu: boolean;
};

export type TMenuSub = {
  menuSub: {
    name: string;
    icon: React.JSX.Element;
    href?: string;
    description: string;
    subMenu?: {
      name: string;
      icon: React.JSX.Element;
      href: string;
      pageAt: string;
      description: string;
    }[];
  };
  openMainMenu: boolean
  // menuSubMenu: TListMenuNavigationProps["mainMenu"];
  // openSubMenu : any;
};

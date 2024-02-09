import React, { useState } from "react";
import { increment } from "../redux/appReducer";
import {
  AppstoreOutlined,
  CalendarOutlined,
  LinkOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Divider, Menu, Switch } from "antd";
import type { GetProp, MenuProps } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setGlobalMenuOpt } from "../redux/appReducer";

type MenuTheme = GetProp<MenuProps, "theme">;
type MenuItem = GetProp<MenuProps, "items">[number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  /*   getItem("Unum AI", "1", <MailOutlined />),
  getItem("Navigation Two", "2", <CalendarOutlined />), */
  getItem("DocumentAI", "sub1", <AppstoreOutlined />, [
    getItem("Gnosis", "Gnosis"),
    getItem("Barcode", "Barcode"),
    /*     getItem("Submenu", "sub1-2", null, [
      getItem("Option 5", "5"),
      getItem("Option 6", "6"),
    ]), */
  ]),
  /*   getItem("Navigation Three", "sub2", <SettingOutlined />, [
    getItem("Option 7", "7"),
    getItem("Option 8", "8"),
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
  ]),
  getItem(
    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
      Ant Design
    </a>,
    "link",
    <LinkOutlined />
  ), */
];

const App: React.FC = () => {
  const [mode, setMode] = useState<"vertical" | "inline">("inline");
  const [theme, setTheme] = useState<MenuTheme>("light");

  const dispatch = useDispatch();

  const changeMode = (value: boolean) => {
    setMode(value ? "vertical" : "inline");
  };

  const changeTheme = (value: boolean) => {
    setTheme(value ? "dark" : "light");
  };

  return (
    <>
      {/*       <Switch onChange={changeMode} /> Change Mode
      <Divider type="vertical" />
      <Switch onChange={changeTheme} /> Change Style */}
      {/*       <br />
      <br /> */}
      <Menu
        style={{ width: 'auto' }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode={mode}
        theme={theme}
        items={items}
        onClick={(e) => dispatch(setGlobalMenuOpt(e.key))}
      />
    </>
    
  );
};

export default App;

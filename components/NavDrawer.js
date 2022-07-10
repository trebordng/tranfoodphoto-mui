import {
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import WidgetsIcon from "@mui/icons-material/Widgets";
import en from "../locales/en";
import vie from "../locales/vie";
import { useRouter } from "next/router";
import Link from "next/link";
import Switch, { SwitchProps } from "@mui/material/Switch";
import { setGlobalState, useGlobalState } from "../state/index";
import logo from "../public/page-image/logo.png";
import Image from "next/image";
import logoDark from "../public/page-image/logo-dark.png";

const NavDrawer = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [checked, setChecked] = useState(false);
  const [currentMode] = useGlobalState("mode");

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    setDrawer(false);
  };
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : vie;
  const [drawer, setDrawer] = useState(false);
  const navList = [
    { name: t.home, slug: "/" },
    { name: t.about, slug: "/about" },
    { name: t.album, slug: "/album" },
    { name: t.recipe, slug: "/recipe" },
    { name: t.blog, slug: "/blog" },
    { name: t.contact, slug: "/contact" },
  ];
  function switchLanguage(e) {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  }
  function switchMode(event) {
    setChecked(event.target.checked);
    currentMode === "light"
      ? setGlobalState("mode", "dark")
      : setGlobalState("mode", "light");
  }
  useEffect(() => {
    const myIndex = navList.findIndex((el) => el.slug === router.route);

    setSelectedIndex(myIndex);
  }, [router.asPath]);
  return (
    <React.Fragment>
      <Drawer open={drawer} onClose={() => setDrawer(false)}>
        <List>
          <ListItem>
            <ListItemText>
              {currentMode === "light" ? (
                <Image
                  alt="diep-tran-photography"
                  title="diep-tran-photography"
                  src={logo.src}
                  width={100}
                  height={80}
                  objectFit="contain"
                  quality={100}
                  priority
                />
              ) : (
                <Image
                  alt="diep-tran-photography"
                  title="diep-tran-photography"
                  src={logoDark.src}
                  width={100}
                  height={80}
                  objectFit="contain"
                  quality={100}
                  priority
                />
              )}
            </ListItemText>
          </ListItem>
          {navList.map((page, index) => (
            <Link href={page.slug} key={index} passHref>
              <ListItem
                button
                onClick={(event) => handleListItemClick(event, index)}
                selected={selectedIndex === index}
                components="a"
              >
                <ListItemText>{page.name}</ListItemText>
              </ListItem>
            </Link>
          ))}
          <ListItem>
            <ListItemText>
              <select
                defaultValue={locale}
                className="select-language"
                onChange={switchLanguage}
              >
                <option value="en">English</option>
                <option value="vie">Tiếng Việt</option>
              </select>
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
              <Switch
                checked={checked}
                onChange={switchMode}
                inputProps={{ "aria-label": "controlled" }}
              />
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <WidgetsIcon className="menu" onClick={() => setDrawer(!drawer)} />
    </React.Fragment>
  );
};

export default NavDrawer;

import React, { useEffect, useState } from "react";
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/router";
import en from "../locales/en";
import vie from "../locales/vie";
import CottageIcon from "@mui/icons-material/Cottage";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import CollectionsIcon from "@mui/icons-material/Collections";
import BookIcon from "@mui/icons-material/Book";
import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import { lightTheme, darkTheme } from "./Theme";
import { setGlobalState, useGlobalState } from "../state/index";
import NavDrawer from "./NavDrawer";
import Image from "next/image";
import logo from "../public/page-image/logo.png";
import logoDark from "../public/page-image/logo-dark.png";
import Switch, { SwitchProps } from "@mui/material/Switch";
const Header = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : vie;
  const [navbar, setNavbar] = useState(1);
  const [currentMode] = useGlobalState("mode");
  const [checked, setChecked] = useState(false);
  const theme = useTheme();
  const isMed = useMediaQuery(theme.breakpoints.down("md"));
  const pages = ["", "/", "/about", "/album", "/blog", "/recipe", "/contact"];
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
  const LinkTab = (props) => {
    const router = useRouter();

    const handleTabChange = (e) => {
      e.preventDefault();
      if (e.target.href === undefined) {
        return;
      }
      router.push(e.target.href);
    };

    return <Tab component="a" onClick={(e) => handleTabChange(e)} {...props} />;
  };
  useEffect(() => {
    setNavbar(pages.indexOf(router.route));
  }, []);
  return (
    <AppBar className="nav glass">
      <Toolbar>
        {isMed ? (
          <React.Fragment>
            <Typography className="text-logo">TRAN PHOTOGRAPHY</Typography>
            <NavDrawer />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Tabs value={navbar} onChange={(e, value) => setNavbar(value)}>
              {currentMode === "light" ? (
                <LinkTab
                  disabled
                  className="logo"
                  icon={
                    <Image
                      alt="diep-tran-photography"
                      title="diep-tran-photography"
                      src={logo.src}
                      width={100}
                      height={80}
                      objectFit="contain"
                      quality={100}
                    />
                  }
                ></LinkTab>
              ) : (
                <LinkTab
                 className="logo"
                  disabled
                  icon={
                    <Image
                      alt="diep-tran-photography"
                      title="diep-tran-photography"
                      src={logoDark.src}
                      width={100}
                      height={80}
                      objectFit="contain"
                      quality={100}
                    />
                  }
                ></LinkTab>
              )}

              <LinkTab href="/" icon={<CottageIcon />} label={t.home}></LinkTab>

              <LinkTab
                href="/about"
                icon={<AccountBoxIcon />}
                label={t.about}
              ></LinkTab>

              <LinkTab
                href="/album"
                icon={<CollectionsIcon />}
                label={t.album}
              ></LinkTab>

              <LinkTab
                href="/blog"
                icon={<BookIcon />}
                label={t.blog}
              ></LinkTab>
              <LinkTab
                href="/recipe"
                icon={<OutdoorGrillIcon />}
                label={t.recipe}
              ></LinkTab>
              <LinkTab
                href="/contact"
                icon={<ContactPhoneIcon />}
                label={t.contact}
              ></LinkTab>
            </Tabs>
            <div className="right-nav">
              <select
                defaultValue={locale}
                className="select-language"
                onChange={switchLanguage}
              >
                <option value="en">English</option>
                <option value="vie">Tiếng Việt</option>
              </select>
              <Switch
                checked={checked}
                onChange={switchMode}
                inputProps={{ "aria-label": "controlled" }}
              />
            </div>
          </React.Fragment>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;

import { Drawer, List, ListItemButton } from "@mui/material";
import React, { useState } from "react";
import WidgetsIcon from '@mui/icons-material/Widgets';
const NavDrawer = () => {
  const [drawer, setDrawer] = useState(false);
  return (
    <React.Fragment>
      <Drawer open={drawer} onClose={() => setDrawer(false)}>
        <List>
          <ListItemButton></ListItemButton>
        </List>
      </Drawer>
      <WidgetsIcon className="menu" onClick={()=>setDrawer(!drawer)}/>
    </React.Fragment>
  );
};

export default NavDrawer;

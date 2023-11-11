// import { useState } from 'react';
// import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
// // import 'react-pro-sidebar/dist/css/styles.css';
// import { Box, Icon, IconButton, Typography, useTheme } from '@mui/material';
// import { Link } from 'react-router-dom';
// import { tokens } from '../../theme';
// import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
// import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
// import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
// import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
// import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
// import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
// import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
// import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
// import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
// import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
// import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
// import MapOutlinedIcon from '@mui/icons-material/MapOutlined';

// const Sidebar2 = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const [selected, setSelected] = useState('Dashboard');
//   return (
//     <Box
//       sx={{
//         '& .pro-sidebar-inner': {
//           background: `${colors.primary[400]} !important`,
//         },
//         '& .pro-icon-wrapper': {
//           backgroundColor: 'transparent !important',
//         },
//         '& .pro-inner-item': {
//           padding: '5px 35px 5px 20px !important',
//         },
//         '& .pro-inner-item:hover': {
//           color: '#868dfb !important ',
//         },
//         '& .pro-menu-item.active': {
//           color: '#6870fa !important',
//         },
//       }}
//     >
//       <Sidebar collapsed={isCollapsed}>
//         <Menu iconShape="square">
//           {/* Logo and menu item */}
//           <MenuItem
//             onClick={() => setIsCollapsed(!isCollapsed)}
//             icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
//             style={{
//               margin: '10px 0 20px 0',
//               color: colors.grey[100],
//             }}
//           >
//             {!isCollapsed && (
//               <Box
//                 display="flex"
//                 justifyContent="space-between"
//                 alignItems="center"
//                 ml="15px"
//               >
//                 <Typography variant="h3" color={colors.grey[100]}>
//                   ADMINS
//                 </Typography>
//                 <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
//                   <MenuOutlinedIcon />
//                 </IconButton>
//               </Box>
//             )}
//           </MenuItem>
//         </Menu>
//       </Sidebar>
//     </Box>
//   );
// };

// export default Sidebar2;

import { useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
// import 'react-pro-sidebar/dist/css/styles.css';
import { tokens } from '../../theme';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar2 = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState('Dashboard');

  return (
    <Box
      sx={{
        position: 'sticky',
        display: 'flex',
        height: '100vh',
        top: 0,
        bottom: 0,
        zIndex: 10000,
        '& .sidebar': {
          border: 'none',
        },
        '& .menu-icon': {
          backgroundColor: 'transparent !important',
        },
        '& .menu-item': {
          // padding: "5px 35px 5px 20px !important",
          backgroundColor: 'transparent !important',
        },
        '& .menu-anchor': {
          color: 'inherit !important',
          backgroundColor: 'transparent !important',
        },
        '& .menu-item:hover': {
          color: `${colors.blueAccent[500]} !important`,
          backgroundColor: 'transparent !important',
        },
        '& .menu-item.active': {
          color: `${colors.greenAccent[500]} !important`,
          backgroundColor: 'transparent !important',
        },
      }}
      // rootStyles={{
      //   `& .pro-sidebar-inner`: {
      //     backgroundColor: 'red',
      //   },
      // }}

      // backgroundColor="green"
      // sx={{
      //   '& .ps-sidebar-container': {
      //     background: `${colors.primary[200]} !important`,
      //   },
      //   '& .ps-menu-root': {
      //     backgroundColor: 'transparent !important',
      //   },
      //   '& .pro-inner-item': {
      //     padding: '5px 35px 5px 20px !important',
      //   },
      //   '& .pro-inner-item:hover': {
      //     color: '#868dfb !important',
      //   },
      //   '& .pro-menu-item.active': {
      //     color: '#6870fa !important',
      //   },
      // }}
    >
      <Sidebar collapsed={isCollapsed} backgroundColor={colors.primary[400]}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: '10px 0 20px 0',
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMIN
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="20px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="70px"
                  height="70px"
                  src={`../../assets/user.png`}
                  style={{ cursor: 'pointer', borderRadius: '50%' }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h3"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: '10px 0 0 0' }}
                >
                  Maksym
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  {/* Admin */}
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : '10%'}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: '15px 0 5px 20px' }}
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: '15px 0 5px 20px' }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: '15px 0 5px 20px' }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default Sidebar2;

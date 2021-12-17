import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import DashbaordHome from '../DashboardHome/DashbaordHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageOrders from '../ManageOrders/ManageOrders';
import Purchase from '../Purchase/Purchase';
import AddReview from '../AddReview/AddReview';
import useAuth from '../../../hooks/useAuth';

const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { logout, admin } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <NavLink to="/home" style={{ textDecoration: 'none', display: 'block' }}>
                <Button variant="text" sx={{ color: 'black', mt: 10 }}>Home</Button>
            </NavLink>
            {!admin && <Box>
                <NavLink to="/programs" style={{ textDecoration: 'none', display: 'block' }}>
                    <Button variant="text" sx={{ color: 'black' }}>Programs</Button>
                </NavLink>
                <NavLink to={`${url}`} style={{ textDecoration: 'none', display: 'block' }}>
                    <Button variant="text" sx={{ color: 'black', m: 1 }}>Dashboard</Button>
                </NavLink>
                <NavLink to={`${url}/purchase`} style={{ textDecoration: 'none', display: 'block' }}>
                    <Button variant="text" sx={{ color: 'black' }}>Purchase Payment</Button>
                </NavLink>
                <NavLink to={`${url}/review`} style={{ textDecoration: 'none', display: 'block', m: 1 }}>
                    <Button variant="text" sx={{ color: 'black' }}>Add Review</Button>
                </NavLink>
            </Box>}
            {admin && <Box>
                <NavLink to={`${url}/makeAdmin`} style={{ textDecoration: 'none', display: 'block' }}>
                    <Button variant="text" sx={{ color: 'black' }}>Make Admin</Button>
                </NavLink>
                <NavLink to={`${url}/manageOrders`} style={{ textDecoration: 'none', display: 'block' }}>
                    <Button variant="text" sx={{ color: 'black', m: 1 }}>Manage Orders</Button>
                </NavLink>
            </Box >}
            <Button sx={{ m: 1 }} onClick={logout} variant='outlined' color="inherit">Logout</Button>
        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    background: '#d2d2d9', color: 'black', pl: '35%',
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <DashbaordHome />
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin />
                    </Route>
                    <Route path={`${path}/manageOrders`}>
                        <ManageOrders />
                    </Route>
                    <Route path={`${path}/purchase`}>
                        <Purchase />
                    </Route>
                    <Route path={`${path}/review`}>
                        <AddReview />
                    </Route>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;

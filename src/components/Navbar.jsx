"use client";
import React, { useState } from "react";
import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Box,
    Divider,
    Typography,
    IconButton,
    useMediaQuery,
} from "@mui/material";
import {
    ChevronLeft,
    Dashboard,
    Person2,
    Visibility,
    Work,
    PermMedia,
    Logout,
    DomainVerification,
    ContactPage,
    RequestQuote,
    ModelTraining,
    Menu as MenuIcon,
} from "@mui/icons-material";
import { usePathname, useRouter } from "next/navigation";

const drawerWidth = 240;

const menuItems = [
    { label: "Dashboard", icon: <Dashboard />, path: "/admin" },
    { label: "Users", icon: <Person2 />, path: "/admin/collections/users" },
    { label: "Reviews", icon: <Visibility />, path: "/admin/collections/reviews" },
    { label: "Jobs", icon: <Work />, path: "/admin/collections/jobs" },
    { label: "Media", icon: <PermMedia />, path: "/admin/collections/media" },
    { label: "Applications", icon: <DomainVerification />, path: "/admin/collections/applications" },
    { label: "Contact", icon: <ContactPage />, path: "/admin/collections/contact" },
    { label: "Quote", icon: <RequestQuote />, path: "/admin/collections/quote" },
    { label: "Training", icon: <ModelTraining />, path: "/admin/collections/training" },
];

function Navbar() {
    const pathname = usePathname();
    const router = useRouter();
    const isMobile = useMediaQuery("(max-width:600px)");
    const [open, setOpen] = useState(false);

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    const handleLogout = async () => {
        try {
            await fetch("/api/admin/logout", {
                method: "POST",
                credentials: "include",
            });
            window.location.href = "/admin/logout";
        } catch (err) {
            console.error("Logout failed", err);
        }
    };

    const drawerContent = (
        <Box sx={{ overflow: "auto", p: 2 }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="h6" fontWeight="bold">Maker's Mind</Typography>
                <IconButton onClick={handleDrawerToggle}>
                    <ChevronLeft />
                </IconButton>
            </Box>
            <List>
                {menuItems.map((item) => {
                    const isActive = pathname === item.path;
                    return (
                        <ListItem key={item.label} disablePadding>
                            <ListItemButton
                                onClick={() => {
                                    router.push(item.path);
                                    if (isMobile) setOpen(false); // Close on mobile after navigation
                                }}
                                sx={{
                                    borderRadius: 2,
                                    mb: 1,
                                    backgroundColor: isActive ? "#FFD3C6" : "transparent",
                                    "&:hover": { backgroundColor: "#FFE4D4" },
                                }}
                            >
                                <ListItemIcon sx={{ color: "black" }}>{item.icon}</ListItemIcon>
                                <ListItemText
                                    primary={item.label}
                                    primaryTypographyProps={{ fontSize: 14, fontWeight: isActive ? "bold" : 500 }}
                                />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
            <Divider sx={{ my: 2 }} />
            <ListItemButton onClick={handleLogout}>
                <ListItemIcon>
                    <Logout sx={{ color: "red" }} />
                </ListItemIcon>
                <ListItemText primary="Logout" primaryTypographyProps={{ color: "red", fontSize: 14 }} />
            </ListItemButton>
        </Box>
    );

    return (
        <>
            {isMobile && (
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ position: "fixed", top: 10, left: 10, zIndex: 1300 }}
                >
                    <MenuIcon />
                </IconButton>
            )}
            <Drawer
                variant={isMobile ? "temporary" : "permanent"}
                open={isMobile ? open : true}
                onClose={handleDrawerToggle}
                sx={{
                    width: open ? drawerWidth : 60,
                    flexShrink: 0,
                    whiteSpace: "nowrap",
                    [`& .MuiDrawer-paper`]: {
                        width: open ? drawerWidth : 60,
                        transition: "width 0.3s",
                        overflowX: "hidden",
                        boxSizing: "border-box",
                        backgroundColor: "#FFF1E5",
                    },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: "auto", p: 1 }}>
                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                        {open ? (
                            <Typography variant="h6" fontWeight="bold">
                                Maker's Mind
                            </Typography>
                        ) : (
                            <Typography variant="h6" fontWeight="bold">M</Typography>
                        )}
                        {!isMobile && (
                            <IconButton onClick={handleDrawerToggle}>
                                <ChevronLeft />
                            </IconButton>
                        )}
                    </Box>

                    <List>
                        {menuItems.map((item) => {
                            const isActive = pathname === item.path;
                            return (
                                <ListItem key={item.label} disablePadding sx={{ display: "block" }}>
                                    <ListItemButton
                                        onClick={() => router.push(item.path)}
                                        sx={{
                                            justifyContent: open ? "initial" : "center",
                                            px: 2.5,
                                            borderRadius: 2,
                                            mb: 1,
                                            backgroundColor: isActive ? "#FFD3C6" : "transparent",
                                            "&:hover": { backgroundColor: "#FFE4D4" },
                                        }}
                                    >
                                        <ListItemIcon sx={{ color: "black", minWidth: 0, mr: open ? 3 : "auto", justifyContent: "center" }}>
                                            {item.icon}
                                        </ListItemIcon>
                                        {open && (
                                            <ListItemText
                                                primary={item.label}
                                                primaryTypographyProps={{
                                                    fontSize: 14,
                                                    fontWeight: isActive ? "bold" : 500,
                                                }}
                                            />
                                        )}
                                    </ListItemButton>
                                </ListItem>
                            );
                        })}
                    </List>

                    <Divider sx={{ my: 2 }} />

                    <ListItemButton onClick={handleLogout} sx={{ justifyContent: open ? "initial" : "center", px: 2.5 }}>
                        <ListItemIcon sx={{ color: "red", minWidth: 0, mr: open ? 3 : "auto", justifyContent: "center" }}>
                            <Logout />
                        </ListItemIcon>
                        {open && <ListItemText primary="Logout" primaryTypographyProps={{ color: "red", fontSize: 14 }} />}
                    </ListItemButton>
                </Box>
            </Drawer>

        </>
    );
}

export default Navbar;

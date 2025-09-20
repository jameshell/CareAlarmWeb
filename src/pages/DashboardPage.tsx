import React from 'react';
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
  IconButton,
  Fab,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  Notifications as NotificationsIcon,
  People as PeopleIcon,
  Assessment as ReportsIcon,
  Settings as SettingsIcon,
  Warning as WarningIcon,
  Share as ShareIcon,
  Add as AddIcon,
} from '@mui/icons-material';

const drawerWidth = 240;

const DashboardPage: React.FC = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, active: true },
    { text: 'Gestión de Alarmas', icon: <WarningIcon />, active: false },
    { text: 'Usuarios', icon: <PeopleIcon />, active: false },
    { text: 'Notificaciones', icon: <NotificationsIcon />, active: false },
    { text: 'Reportes', icon: <ReportsIcon />, active: false },
    { text: 'Configuración', icon: <SettingsIcon />, active: false },
  ];

  const recentActivity = [
    {
      patient: 'Paciente 1',
      description: 'Se han enviado 3 Alarmas',
      time: 'Today • 23 min',
    },
    {
      patient: 'Paciente 2',
      description: 'Se han enviado 4 Alarmas',
      time: 'Today • 34 min',
    },
    {
      patient: 'Paciente 1',
      description: 'Se han enviado 2 Alarmas',
      time: 'Today • 45 min',
    },
  ];

  const drawer = (
    <Box>
      <List sx={{ pt: 2 }}>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              sx={{
                mx: 1,
                borderRadius: 1,
                backgroundColor: item.active ? 'primary.main' : 'transparent',
                color: item.active ? 'white' : 'text.primary',
                '&:hover': {
                  backgroundColor: item.active ? 'primary.dark' : 'action.hover',
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: item.active ? 'white' : 'text.secondary',
                  minWidth: 40,
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.text}
                primaryTypographyProps={{
                  fontSize: '0.875rem',
                  fontWeight: item.active ? 600 : 400,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: 'white',
          color: 'primary.main',
          boxShadow: 1,
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
          <Typography variant="h6" noWrap component="div" sx={{ fontWeight: 600 }}>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
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
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          backgroundColor: '#f5f5f5',
          minHeight: '100vh',
        }}
      >
        <Toolbar />
        
        {/* Dashboard Cards */}
        <Box sx={{ display: 'flex', gap: 2, mb: 4, flexWrap: 'wrap' }}>
          {[1, 2, 3].map((index) => (
            <Card
              key={index}
              sx={{
                minWidth: 200,
                flex: 1,
                backgroundColor: '#e8e4f3',
                boxShadow: 1,
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      backgroundColor: '#b8b0c7',
                      borderRadius: '50% 50% 0 0',
                    }}
                  />
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Box
                      sx={{
                        width: 30,
                        height: 30,
                        backgroundColor: '#b8b0c7',
                        borderRadius: '50%',
                      }}
                    />
                    <Box
                      sx={{
                        width: 30,
                        height: 30,
                        backgroundColor: '#b8b0c7',
                        borderRadius: 1,
                      }}
                    />
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Recent Activity Section */}
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main' }}>
              Actividad Reciente
            </Typography>
            <IconButton size="small" sx={{ ml: 1 }}>
              <ShareIcon fontSize="small" />
            </IconButton>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {recentActivity.map((activity, index) => (
              <Card key={index} sx={{ boxShadow: 1 }}>
                <CardContent sx={{ p: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        backgroundColor: '#e8e4f3',
                        borderRadius: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Box
                        sx={{
                          width: 30,
                          height: 30,
                          backgroundColor: '#b8b0c7',
                          borderRadius: '50% 50% 0 0',
                        }}
                      />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                        {activity.patient}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        {activity.description}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <AddIcon fontSize="small" />
                        <Typography variant="caption" color="text.secondary">
                          {activity.time}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        {/* Floating Action Button */}
        <Fab
          color="primary"
          aria-label="share"
          sx={{
            position: 'fixed',
            bottom: 16,
            right: 16,
          }}
        >
          <ShareIcon />
        </Fab>
      </Box>
    </Box>
  );
};

export default DashboardPage;
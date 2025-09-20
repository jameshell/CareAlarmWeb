import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Toolbar,
  Fab,
} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import Navbar from '../components/Navbar';

const UsuariosPage: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - 240px)` },
          backgroundColor: '#f5f5f5',
          minHeight: '100vh',
        }}
      >
        <Toolbar />

        <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
          Usuarios
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, mb: 4, flexWrap: 'wrap' }}>
          {[1, 2, 3].map((index) => (
            <Card
              key={index}
              sx={{
                minWidth: 300,
                flex: 1,
                backgroundColor: '#e8e4f3',
                boxShadow: 1,
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Usuario {index}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Rol: Administrador
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Estado: Activo
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        <Fab
          color="primary"
          aria-label="add"
          sx={{
            position: 'fixed',
            bottom: 16,
            right: 16,
          }}
        >
          <AddIcon />
        </Fab>
      </Box>
    </Box>
  );
};

export default UsuariosPage;
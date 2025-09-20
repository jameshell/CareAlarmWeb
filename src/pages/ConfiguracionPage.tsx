import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Toolbar,
} from '@mui/material';
import Navbar from '../components/Navbar';

const ConfiguracionPage: React.FC = () => {
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
          Configuración
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {[1, 2, 3].map((index) => (
            <Card
              key={index}
              sx={{
                backgroundColor: '#e8e4f3',
                boxShadow: 1,
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Configuración {index}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Tipo: Sistema
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Estado: Activo
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ConfiguracionPage;
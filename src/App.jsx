import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActionArea from '@mui/material/CardActionArea'
import Container from '@mui/material/Container'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

// Import project components here as you create them
import NotificationCenterDemo from '../projects/notification-center/components/NotificationCenterDemo'

function App() {
  const [currentDesign, setCurrentDesign] = useState(null)

  // Add new designs to this list
  const designs = [
    { id: 'notification-center', name: 'Notification Center', component: NotificationCenterDemo },
  ]

  const activeDesigns = designs.filter(d => d.component !== null)

  if (currentDesign) {
    const design = designs.find(d => d.id === currentDesign)
    if (design?.component) {
      const DesignComponent = design.component
      return (
        <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
          <Box sx={{ p: 2 }}>
            <Button
              startIcon={<ArrowBackIcon />}
              onClick={() => setCurrentDesign(null)}
              variant="text"
            >
              Back to Gallery
            </Button>
          </Box>
          <DesignComponent />
        </Box>
      )
    }
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Project Studio
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Material Design Edition
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
          {activeDesigns.length > 0 ? (
            activeDesigns.map(design => (
              <Card key={design.id} sx={{ width: 280 }}>
                <CardActionArea onClick={() => setCurrentDesign(design.id)}>
                  <Box
                    sx={{
                      height: 140,
                      bgcolor: 'grey.100',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography color="text.secondary">Preview</Typography>
                  </Box>
                  <CardContent>
                    <Typography variant="h6">{design.name}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))
          ) : (
            <Card sx={{ maxWidth: 400, textAlign: 'center' }}>
              <CardContent sx={{ py: 4 }}>
                <Typography variant="h5" gutterBottom>
                  Ready to design!
                </Typography>
                <Typography color="text.secondary" paragraph>
                  Create a new project to get started.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Say: "Create a new project called [Name]"
                </Typography>
              </CardContent>
            </Card>
          )}
        </Box>

        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="caption" color="text.secondary">
            Prototypes are saved in <code>projects/</code>
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default App

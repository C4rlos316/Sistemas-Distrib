import { Grid2, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

//grid maximo seran 12 columnas 
export default function About() {
  return (
    <Container maxWidth="xl" sx={{ border: '2px solid black' }}>
      <Grid2 container spacing={4} alignContent={'center'}>
        <Grid2 size={{ xs: 12, md: 6 }}
          sx={{
            border: '2px solid yellow',
            padding: { xs: 0, md: '0 0 0 100px' }
          }} >
          <Typography variant="h3"
            gutterBottom
            sx={{ fontWeight: 'bold' }} > Our Story  </Typography>
          <Box sx={{
            borderBottom: '4px solid red',
            width: '50px',
            mb: 2,
          }}> </Box>
        </Grid2>


      </Grid2>

    </Container>
  );
}
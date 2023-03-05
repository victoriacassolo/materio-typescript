// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { styled, useTheme } from '@mui/material/styles'

// Styled component for the triangle shaped background image
const TriangleImg = styled('img')({
  right: 0,
  bottom: 0,
  height: 170,
  position: 'absolute'
})

// Styled component for the trophy image
const TrophyImg = styled('img')({
  right: 36,
  bottom: 20,
  height: 98,
  position: 'absolute'
})

const Goals = () => {
  // ** Hook
  const theme = useTheme()

  const imageSrc = theme.palette.mode === 'light' ? 'triangle-light.png' : 'triangle-dark.png'

  async function handleSchedule() {

  };

  return (
    <Card sx={{ position: 'relative' }}>
      <CardContent>
        <Typography variant='h5' sx={{ marginBottom: 3 }}>Project Be a Hero</Typography>
        <Typography variant='body2' sx={{ letterSpacing: '0.25px' }}>
          Seguir uma rotina de treinos | seguir a dieta a risca | acordar todos os dias às 0540 e dormir às 22:00 | estudar o livro de Mateus inteiro e gravar os vídeos | andar de bicicleta aos fins de semana | não usar as redes sociais
        </Typography>
        <Typography variant='h5' sx={{ my: 4, color: 'primary.main' }}>
          at least 30 days until done (number days 30)
        </Typography>
        <Button size='small' variant='contained' onClick={() => handleSchedule()}>
          View Schedule
        </Button>
        <TriangleImg alt='triangle background' src={`/images/misc/${imageSrc}`} />
        <TrophyImg alt='trophy' src='/images/misc/trophy.png' />
      </CardContent>
    </Card>
  )
}

export default Goals

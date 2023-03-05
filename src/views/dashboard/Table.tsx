// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'

// ** Types Imports
import { ThemeColor } from 'src/@core/layouts/types'

interface RowType {
  name: string
  stream: string
  status: string
}

interface StatusObj {
  [key: string]: {
    color: ThemeColor
  }
}

const rows: RowType[] = [
  {

    name: 'O Mistério de D.B. Cooper 2020',
    stream: 'HBO MAX',
    status: 'professional'
  },
  {

    name: 'Kill Chain: a Ciberguerra nas Eleições Americanas',
    stream: 'HBO MAX',
    status: 'professional'
  },
  {

    name: 'X-Men Evolutiom',
    stream: 'HBO MAX',
    status: 'professional'
  },
  {

    name: 'A Arma Perfeita',
    stream: 'HBO MAX',
    status: 'professional'
  },
  {

    name: 'A Mulher Mais Rápida do Planeta',
    stream: 'HBO MAX',
    status: 'professional'
  },
  {

    name: 'A Última Hora',
    stream: 'HBO MAX',
    status: 'professional'
  },
  {

    name: 'Life According to Sam',
    stream: 'HBO MAX',
    status: 'professional'
  },
  {

    name: 'The Truth About Killers Robot',
    stream: 'HBO MAX',
    status: 'professional'
  },
  {

    name: 'Ali Cavet A História das Fitas',
    stream: 'HBO MAX',
    status: 'professional'
  },
  {

    name: 'Ano Um Uma Odisseia na Política',
    stream: 'HBO MAX',
    status: 'professional'
  },
  {

    name: 'Como Surgiu o Evangelho de Mateus',
    stream: 'https://www.youtube.com/watch?v=RmFVZFkHEE0',
    status: 'professional'
  },
  {

    name: 'Sally Quinn',
    stream: 'eebsworth2m@sbwire.com',
    status: 'professional'
  },
]

const statusObj: StatusObj = {
  applied: { color: 'info' },
  rejected: { color: 'error' },
  current: { color: 'primary' },
  resigned: { color: 'warning' },
  professional: { color: 'success' }
}

const DashboardTable = () => {
  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell>Filme</TableCell>
              <TableCell>Streaming</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: RowType) => (
              <TableRow hover key={row.name} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.name}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{row.stream}</TableCell>
                <TableCell>
                  <Chip
                    label={row.status}
                    color={statusObj[row.status].color}
                    sx={{
                      height: 24,
                      fontSize: '0.75rem',
                      textTransform: 'capitalize',
                      '& .MuiChip-label': { fontWeight: 500 }
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default DashboardTable

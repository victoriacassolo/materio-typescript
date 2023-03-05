// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports
import Book from 'mdi-material-ui/Book'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Goals from 'src/views/dashboard/Goals'
import TotalEarning from 'src/views/dashboard/TotalEarning'
import StatisticsCard from 'src/views/dashboard/StatisticsCard'
import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'
import DepositWithdraw from 'src/views/dashboard/DepositWithdraw'
import SalesByCountries from 'src/views/dashboard/SalesByCountries'
import Table from 'src/views/dashboard/Table'

const Dashboard = () => {

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12} lg={12}>
          <Goals />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <CardStatisticsVerticalComponent
            stats='7,14%'
            icon={<Book />}
            color='success'
            trendNumber='concluído'
            title='Estudo Livro de Mateus'
            subtitle=''
          />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <SalesByCountries />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <DepositWithdraw />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Table />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard

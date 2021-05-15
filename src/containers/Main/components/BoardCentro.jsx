/* eslint-disable no-unused-vars */
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Grid, Skeleton } from '../../../components'


import CardBairro from './CardBairro'


function Board({ data }) {
  const { cases, todayDeaths, recovered, deaths, todayCases } = data

  const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={60} />
 
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <CardBairro value={83} label="Confirmados" color="#5d78ff" />
      </Grid>      
    </Grid>
  )
}

export default memo(Board)
/* eslint-disable no-unused-vars */
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Grid, Skeleton } from '../../../components'


import Card from './Card'
import CardMedical from './CardMedical'
import CardProcedures from './CardProcedures'
import CardDead from './CardDead'
import CardHeart from './CardHeart'





function Board({ data }) {
  const { cases, todayDeaths, recovered, deaths, todayCases } = data

  const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={60} />

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={3}>
      <Card value={12} label="Confirmados" color="#5d78ff" />
      </Grid>
      <Grid item xs={12} md={3}>
        <CardMedical value={94} label="Isolamento" color="#F7B829" />
      </Grid>
      <Grid item xs={12} md={3}>
        <CardProcedures value={32} label="Internados" color="#000" />
      </Grid>
      <Grid item xs={12} md={3}>
        <CardDead value={13} label="Óbitos" color="#E95078" />
      </Grid>
      <Grid item xs={12} md={3}>
        <CardHeart value={53} label="Recuperados" color="#67C887" />
      </Grid>
    </Grid>
  )
}

export default memo(Board)
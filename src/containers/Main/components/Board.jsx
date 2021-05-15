/* eslint-disable no-unused-vars */
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Grid, Skeleton } from '../../../components'


import Card from './Card'
import CardMedical from './CardMedical'
import CardProcedures from './CardProcedures'
import CardDead from './CardDead'
import CardHeart from './CardHeart'
import CardDescart from './CardDescart'
import CardData from './CardData'







function Board({ data }) {
  const { cases, todayDeaths, recovered, deaths, todayCases } = data

  const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={60} />
 
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <Card value={1.349} label="Confirmados" color="#5d78ff" />
      </Grid>
      <Grid item xs={12} md={4}>
        <CardDescart value={4.599} label="Descartados" color="#FF4F33" />
      </Grid>
      <Grid item xs={12} md={4}>
        <CardMedical value={21} label="Isolamento" color="#F7B829" />
      </Grid>
      <Grid item xs={12} md={4}>
        <CardProcedures value={27} label="Suspeitos" color="#E95078" />
      </Grid>      
      <Grid item xs={12} md={4}>
        <CardHeart value={1.293} label="Recuperados" color="#67C887" />
      </Grid>
      <Grid item xs={12} md={4}>
        <CardData value={34} label="Dados Gerais" color="#678" />
      </Grid>
      <Grid item xs={12} md={4}>
        <CardDead value={34} label="Óbitos" color="#000" />
      </Grid>     
    </Grid>
  )
}

export default memo(Board)
/* eslint-disable no-unused-vars */
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Card as CardUI } from '../../../components'
import {
  LabelStyled,
  ValueStyled,
  CardContentStyled
} from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPercentage } from '@fortawesome/free-solid-svg-icons';

function CardDead({ value, label, color }) {
  return (
    <CardUI>
      <CardContentStyled color={color}>       
        <LabelStyled><FontAwesomeIcon icon={faPercentage}/> {label}</LabelStyled>
        <div style={{fontSize:'20px', fontWeight:'bold', marginTop:'5%'}}>Curados: 95,84%</div>
        <div style={{fontSize:'20px', fontWeight:'bold', marginTop:'5%'}}>Internados: 4,54%</div>
        <div style={{fontSize:'20px', fontWeight:'bold', marginTop:'5%'}}>Òbitos: 2,52%</div>
      </CardContentStyled>
    </CardUI>
  )
}

export default memo(CardDead)
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
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function Card({ value, label, color }) {
  return (
    <CardUI>
      <CardContentStyled color={color}>       
        <ValueStyled> <FontAwesomeIcon icon={faCheck}/> {value}</ValueStyled>
        <LabelStyled>{label}</LabelStyled>
        <div style={{fontSize:'20px', fontWeight:'bold', marginTop:'5%'}}>Bairros: 1944</div>
        <div style={{fontSize:'20px', fontWeight:'bold', marginTop:'5%'}}>Penitenciárias: 405</div>
      </CardContentStyled>
    </CardUI>
  )
}

export default memo(Card)
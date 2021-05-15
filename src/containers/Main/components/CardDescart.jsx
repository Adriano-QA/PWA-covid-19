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
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function Card({ value, label, color }) {
  return (
    <CardUI>
      <CardContentStyled color={color}>       
        <ValueStyled> <FontAwesomeIcon icon={faTimes}/> {value}</ValueStyled>
        <LabelStyled>{label}</LabelStyled>
        <div style={{fontSize:'20px', fontWeight:'bold', marginTop:'5%'}}>Bairros: 1.614</div>
        <div style={{fontSize:'20px', fontWeight:'bold', marginTop:'5%'}}>Penitenciaria: 2.985</div>
      </CardContentStyled>
    </CardUI>
  )
}

export default memo(Card)
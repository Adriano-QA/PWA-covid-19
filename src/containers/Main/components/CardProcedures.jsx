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
import { faProcedures } from '@fortawesome/free-solid-svg-icons';

function CardProcedures({ value, label, color }) {
  return (
    <CardUI>
      <CardContentStyled color={color}>       
        <ValueStyled> <FontAwesomeIcon icon={faProcedures}/> {value}</ValueStyled>
        <LabelStyled>{label}</LabelStyled>
        <div style={{fontSize:'20px', fontWeight:'bold', marginTop:'5%'}}>Monitorados: 26</div>
        <div style={{fontSize:'20px', fontWeight:'bold', marginTop:'5%'}}>Internados: 1</div>
      </CardContentStyled>
    </CardUI>
  )
}

export default memo(CardProcedures)
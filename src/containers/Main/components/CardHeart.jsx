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
import {faHeartbeat } from '@fortawesome/free-solid-svg-icons';

function CardHeart({ value, label, color }) {
  return (
    <CardUI>
      <CardContentStyled color={color}>       
        <ValueStyled> <FontAwesomeIcon icon={faHeartbeat}/> {value}</ValueStyled>
        <LabelStyled>{label}</LabelStyled>
      </CardContentStyled>
    </CardUI>
  )
}

export default memo(CardHeart)
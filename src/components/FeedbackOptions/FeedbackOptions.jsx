import React from 'react';
import PropTypes from 'prop-types';
import { BtnOp } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => {
        return (
          <BtnOp type="button" onClick={() => onLeaveFeedback(option)} key={option}>
            {option}
          </BtnOp>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};

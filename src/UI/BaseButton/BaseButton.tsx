import React from 'react';
import './baseButton.scss';

interface IbaseBtn {
  styles?: string;
  children: any;
}

const BaseButton = ({ styles, children, ...props }: IbaseBtn) => {
  return (
    <button className={styles ? `${styles} baseButton` : 'baseButton'} {...props}>
      {children}
    </button>
  );
};

export default BaseButton;

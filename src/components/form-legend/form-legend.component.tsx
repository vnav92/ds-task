import React from 'react';
import { Text } from '../';

import styles from './form-legend.module.scss';

type FormLegendProps = {
  marginBottom?: number;
};

export const FormLegend: React.FC<FormLegendProps> = ({ marginBottom }) => (
  <Text
    style={{ marginBottom: marginBottom ? `${marginBottom}px` : 0 }}
    className={styles.formLegend}
  >
    <span className={styles.coloredText}>(</span>Fields marked with{' '}
    <span className={styles.requiredMarker}>*</span> are required
    <span className={styles.coloredText}>)</span>
  </Text>
);

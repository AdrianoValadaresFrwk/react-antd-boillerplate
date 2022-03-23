import { css } from 'glamor';
import React, { useMemo } from 'react';
import { ReactSVG } from 'react-svg';

import images from '../../../assets/img/index';
import './svg.css';

interface IProps {
  icon: string;
  size?: 'small' | 'large' | 'medium' | 'xxxlarge';
  className?: string;
  color?: string;
  onClick?: any;
}

const sizeOptions = {
  xxxlarge: '59px',
  large: '24px',
  medium: '18px',
  small: '16px',
};

const SvgIcon: React.FC<IProps> = ({
  icon,
  size = 'medium',
  className,
  color,
  onClick,
}) => {
  const requireIcon = useMemo(() => images[`./icons/${icon}.svg`], [icon]);

  const createClass = (svg: SVGSVGElement) =>
    className &&
    className
      .split(' ')
      .forEach((element) => svg.classList.add(element.trim()));

  const styles = css({
    ' svg': {
      height: sizeOptions[size],
      width: sizeOptions[size],
    },
    ' svg path': {
      fill: color,
      PointerEvent: 'none',
    },
  });

  return (
    <ReactSVG
      src={requireIcon}
      {...styles}
      title=""
      className="svg-wrapper"
      onClick={onClick}
      useRequestCache
      beforeInjection={(svg) => {
        svg.classList.add('svg-class');
        createClass(svg);
      }}
      afterInjection={(error, svg) => {
        if (error) {
          console.error(
            `Icon error on icon: ${icon} - svg: ${svg} | Error: ${error}`
          );
        }
      }}
    />
  );
};

export default SvgIcon;

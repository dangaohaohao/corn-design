import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';
import { withStatics, noop } from '../../_utils';
import { CollapsePanel } from './CollapsePanel';
import { CollapseContext } from './CollapseContext';
import { CollapseProps } from './types';
import './Collapse.less';

const CollapseWrap: React.FC<PropsWithChildren<CollapseProps>> = (props) => {
  const {
    activeIds = [],
    onActive = noop,
    className = '',
    style = {},
    children,
  } = props;

  return (
    <div className={classNames('Collapse', className)} style={style}>
      <CollapseContext.Provider
        value={{
          activeIds,
          onActive,
        }}
      >
        {children}
      </CollapseContext.Provider>
    </div>
  );
};

const Collapse = withStatics(CollapseWrap, { Panel: CollapsePanel });

export { Collapse, CollapseProps };

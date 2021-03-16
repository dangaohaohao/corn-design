import React, { PropsWithChildren, useContext } from 'react';
import classNames from 'classnames';
import { isFunction } from '../../_utils';
import { CollapseContext } from './CollapseContext';
import { CollapsePanelProps } from './types';
import './Collapse.less';

const CollapsePanel: React.FC<PropsWithChildren<CollapsePanelProps>> = (
  props
) => {
  const { id, title = '', children } = props;

  const { activeIds, onActive } = useContext(CollapseContext);

  const active = activeIds?.includes(id);

  const handleClick = (event: React.MouseEvent) => {
    const context = { event };

    // 如果为 true, 点击了需要去掉, 否则需要进行追加
    if (active) {
      const tempActiveIds = activeIds?.filter((activeId) => activeId !== id);
      onActive(tempActiveIds, context);
    } else {
      onActive([...activeIds, id], context);
    }
  };

  return (
    <div className={'collapse-panel'}>
      <div
        className={classNames('collapse-panel-topPanel', {
          ['collapse-panel-topPanel-borderB']: active,
        })}
        onClick={handleClick}
      >
        <div className={'collapse-panel-topPanel-title'}>
          {isFunction(title) ? title(active) : title}
        </div>
        <div className={'collapse-panel-topPanel-click'}>
          <span className={'collapse-panel-topPanel-click-text'}>
            {active ? '收起' : '展开'}
          </span>
          <span className={'collapse-panel-topPanel-click-icon'}>
            {active
              ? // <Icon.ArrawUp size={12} color="#333333" />
                'ArrawUp'
              : // <Icon.ArrawDown size={12} color="#333333" />
                'ArrawDown'}
          </span>
        </div>
      </div>
      <div
        className={classNames('collapse-panel-children', {
          ['collapse-panel-children-none']: !active,
        })}
      >
        {children}
      </div>
    </div>
  );
};

export { CollapsePanel, CollapsePanelProps };

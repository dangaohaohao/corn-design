import { StyleProps } from '../../_types';

export interface CollapseProps extends StyleProps {
  /**
   * 当前激活的面板 ID 组
   */
  activeIds?: CollapseContextProps['activeIds'];

  /**
   * 面板激活变化回调
   */
  onActive?: CollapseContextProps['onActive'];
}

export interface CollapsePanelProps {
  /**
   * 面板唯一标识
   */
  id: string;

  /**
   * 头部标题
   * @docType React.ReactNode | ((active: boolean) => React.ReactNode)
   */
  title?: React.ReactNode | ((active: boolean) => React.ReactNode);
}

export interface CollapseContextProps {
  /**
   * 当前激活的面板 ID
   */
  activeIds: string[];

  /**
   * 面板激活变化回调
   */
  onActive: (
    activeIds: string[],
    context: { event: React.SyntheticEvent }
  ) => void;
}

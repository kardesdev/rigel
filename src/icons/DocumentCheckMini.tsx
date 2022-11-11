import type { Component } from 'solid-js';

import { Icon, IconProps } from '@hope-ui/solid';
import { mergeProps } from 'solid-js';

const DocumentCheck: Component<IconProps> = (props) => {
  const iconProps = mergeProps(
    { w: '20px', h: '20px', viewBox: '0 0 20 20', fill: 'currentColor' },
    props,
  );
  return (
    <Icon {...iconProps}>
      <path fill-rule="evenodd" d="M3 3.5A1.5 1.5 0 014.5 2h6.879a1.5 1.5 0 011.06.44l4.122 4.12A1.5 1.5 0 0117 7.622V16.5a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 013 16.5v-13zm10.857 5.691a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 00-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
    </Icon>

  );
};

export default DocumentCheck;

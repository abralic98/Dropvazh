import React from 'react';

interface DropdownProps {
  kita?: string;
}
export const Dropvazh = (props: DropdownProps) => {
  return <button>{props.kita} k</button>;
};

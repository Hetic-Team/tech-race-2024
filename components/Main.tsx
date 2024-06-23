import React, { ReactNode } from 'react';
import { View} from 'react-native';

interface MainContainerProps {
  children: ReactNode;
}

export default function Main({
  children,
  ...props
}: MainContainerProps & { styles: any }) {
  return <View style={props.styles}>{children}</View>;
}
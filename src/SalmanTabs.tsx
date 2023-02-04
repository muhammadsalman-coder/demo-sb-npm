// import styled from '@emotion/styled';
import React from 'react';
import { styled } from '@mui/system';
export interface ItemInterface {
  text: string;
  icon?: React.ReactElement;
}
export interface TabsInterface {
  item: ItemInterface[];
  onChange?: (activeIndex: number) => void;
  iconSize?: string;
  fontSize?: string;
  maxWidth?: string;
  activecolor?: string;
  color?: string;
  activeUnderline?: boolean;
  scrollThumbColor?: string;
  iconColor?: string;
}
export interface TabsButtonInterface {
  bbColor: string | boolean;
  iconSize?: string;
  fontSize?: string;
  activeUnderline?: boolean;
  iconColor?: string;
}

const TabsButton = styled('button')<TabsButtonInterface>(
  ({ bbColor, iconSize, fontSize, activeUnderline, iconColor }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingBottom: activeUnderline ? '10px' : '0',
    margin: '0 10px',
    border: 'none',
    cursor: 'pointer',
    borderBottom: `2px solid ${
      bbColor && activeUnderline ? bbColor : 'transparent'
    }`,
    '& span': {
      fontSize: fontSize,
      fontWeight: 600,
    },
    '& svg': {
      fontSize: iconSize,
      color: iconColor ? iconColor : 'inherit',
    },
  })
);

const SalmanTabs = ({
  item,
  onChange,
  iconSize = '16px',
  fontSize = '22px',
  maxWidth = '500px',
  activecolor = '#353840',
  activeUnderline = true,
  color = '#707a83',
  scrollThumbColor,
  iconColor,
}: TabsInterface) => {
  const [activeIndex, setActiveIndex] = React.useState<number>(0);
  console.log('activeIndex', activeIndex);

  React.useEffect(() => {
    if (onChange) {
      onChange(activeIndex);
    }
  }, [activeIndex]);
  var thumbColor = `${scrollThumbColor ? scrollThumbColor : '#707a83'} #dadaec`;
  return (
    <ul
      style={{
        listStyle: 'none',
        fontFamily: "'Poppins', sans-serif",
        display: 'flex',
        fontWeight: 'bold',
        width: '100%',
        maxWidth,
        overflow: 'auto',
        paddingBottom: '10px',
        scrollbarColor: thumbColor,
        scrollbarWidth: 'thin',
      }}
    >
      {item.length > 0 &&
        item.map((x, index) => (
          <li key={index}>
            <TabsButton
              style={
                index === activeIndex
                  ? { color: activecolor }
                  : { color: color }
              }
              iconSize={iconSize}
              fontSize={fontSize}
              iconColor={iconColor}
              activeUnderline={activeUnderline}
              bbColor={index === activeIndex ? activecolor : false}
              onClick={() => setActiveIndex(index)}
              key={index}
            >
              {x?.icon}
              <span style={{ margin: '0 5px' }}>{x.text}</span>
            </TabsButton>
          </li>
        ))}
    </ul>
  );
};

export { SalmanTabs };

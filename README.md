# salman-sb-demo

my aim is to make codding fast and simple....

## installation..

```bash

   npm i salman-sb-demo

```

## module..

thats all are the module which is exported from this package...

```bash
SalmanButton
SalmanCounter
SalmanImageDragDrop
SalmanInput
SalmanTabs
SalmanCountDownTimmer
SalmanCountDownStartEnd
```

## SalmanImageDragDrop

example

```javascript
<SalmanImageDragDrop
  onChange={file => {
    console.log('file', file);
  }}
/> // on change return file
```

### some of props of SalmanImageDragDrop

```bash
  onchange,
  onBlur,
  helperText,
  error = false,
  minHeight,
  height = '204px',
```

## SalmanInput

```javascript
    <SalmanInput  onChange={} type="text" placeholder={"enter text"} borderRadius="20px">
```

### SalmanInput props

```bash
  padding?: string;
  type: string;
  placeholder: string;
  borderRadius: string;
  width?: string;
  and any HTML input element args...
```

## SalmanTabs

Example default

```javascript
<SalmanTabs
  item={[
    { text: 'Home', icon: <HomeIcon /> }, //Mui icon is used here
    { text: 'About', icon: <HomeIcon /> }, //Mui icon is used here
    { text: 'Contact', icon: <HomeIcon /> }, //Mui icon is used here
  ]}
  {...args}
/>
```

```bash

onChange function return tabs index value that array you passed


some of arguments or props of this module
item, // item is liste this [{text: Home, icon: <HomeIcon>}] in this module is use Material ui Icons
onChange, // this function return a tabs index value
maxWidth = '500px',
fontSize = '22px',
iconSize = '16px',
color = '#707a83',
iconColor,
activecolor = '#353840',
scrollThumbColor,
activeUnderline = true,



```

## SalmanCountDownTimmer

SalmanCountDownTimmer element just have endDateTime props once the current time is equal or greater than endDateTime that you passed it will automatically stop and showing the endText...

```javascript
//example

<SalmanCountDownTimmer endDateTime={2657092278} />
```

### SalmanCountDownTimmer props

```bash
  endDateTime?: string;
  timerEndText?: string;
  endTextSize?: string;
  gap?: number;
  color?: string;
  timeHeadinSize?: string;
  timeTextSize?: string;
```

## SalmanCountDownStartEnd

in SalmanCountDownStartEnd element there is two things startDateTime or endDateTime user should pass start and End DateTime so that if the start DateTime is greater than current time then it shows timerStartText and if start DateTime is less than the current time then there shows counter after if the counter ends then it shows timerEndText automatically...

```javascript
// example

<SalmanCountDownStartEnd startDateTime={1557092278} endDateTime={2657092278} />
```

### SalmanCountDownTimmer props

```bash
  endDateTime?: number | string;
  startDateTime?: number | string;
  timerEndText?: string;
  timerStartText?: string;
  timerStartSize?: string;
  gap?: number;
  color?: string;
  timeHeadinSize?: string;
  timeTextSize?: string;
  timerEndSize?: string;
```

## MSG

Keep working and hardworking to become a successful developer :). if you want any other element or module so please drop tweet and tag me @itsshanshaikh ...

## Contributor

Muhammad Salman github muhammadsalman-coder

## License

[MIT](https://choosealicense.com/licenses/mit/)

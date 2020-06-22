import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio, { RadioProps } from '@material-ui/core/Radio';
import { RadioButtan } from 'src/interfaces/RadioButton';

type Props = {
  List: RadioButtan[]
}
const GreenRadio = withStyles({
  root: {
    color: green[200],
    '&$checked': {
      color: green[400],
    },
  },
  checked: {},
})((props: RadioProps) => <Radio color="default" {...props} />);

export default function RadioButtons({ List }: Props) {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div  className='divDivRadio'>
      {List.map((item) => (
        <div key={item.name} className='divRadio'>
        <GreenRadio
          checked={selectedValue === item.name}
          onChange={handleChange}
          value={item.name}
          name="radio-button-demoeee"
          inputProps={{ 'aria-label': 'A' }}
          className='radio'
        />
        <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
}
import { SpinnerWrapper } from './Spinner.styles';

const spinnerColours = {
  default: 'rgb(68 64 60)',
  green: 'rgb(4 108 78)',
  red: 'rgb(200 30 30)',
  yellow: 'rgb(227 160 8)',
  purple: 'rgb(108 43 217)',
};

const spinnerSizes = {
  s: '30px',
  m: '50px',
  l: '70px',
};

type SpinnerProps = {
  colour?: 'default' | 'green' | 'red' | 'yellow' | 'purple';
  size?: 's' | 'm' | 'l';
};

function Spinner({ colour = 'default', size = 'm' }: SpinnerProps) {
  const colourClass = spinnerColours[colour];
  const sizeClass = spinnerSizes[size];

  return <SpinnerWrapper $colour={colourClass} $size={sizeClass} />;
}

export default Spinner;

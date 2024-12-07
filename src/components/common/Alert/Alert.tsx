import {
  MdClose,
  MdCheckCircleOutline,
  MdInfoOutline,
  MdWarningAmber,
  MdErrorOutline,
} from 'react-icons/md';
import { AlertWrapper } from './Alert.styles';

const severityColour = {
  success: 'rgb(3 84 63)',
  info: 'rgb(30 66 159)',
  warning: 'rgb(114 59 19)',
  danger: 'rgb(155 28 28)',
};

const severityBackgroundColour = {
  success: 'rgb(243 250 247)',
  info: 'rgb(235 245 255)',
  warning: 'rgb(253 253 234)',
  danger: 'rgb(253 242 242)',
};

export type AlertProps = {
  text: string;
  severity: 'success' | 'info' | 'warning' | 'danger';
  bordered?: boolean;
  showAlert: boolean;
  onCloseClick: () => void;
};

const Alert = ({
  text,
  severity = 'success',
  bordered = false,
  showAlert,
  onCloseClick,
}: AlertProps) => {
  let icon;
  const severityColourClass = severityColour[severity];
  const severityBgClass = severityBackgroundColour[severity];

  switch (severity) {
    case 'success':
      icon = <MdCheckCircleOutline />;
      break;
    case 'info':
      icon = <MdInfoOutline />;
      break;
    case 'warning':
      icon = <MdWarningAmber />;
      break;
    case 'danger':
      icon = <MdErrorOutline />;
      break;
    default:
      break;
  }

  return (
    showAlert && (
      <AlertWrapper
        role='alert'
        $severityColour={severityColourClass}
        $severityBgClass={severityBgClass}
        $bordered={bordered}
      >
        <div className='icon'>{icon}</div>
        <p className='text'>
          <span>{severity} alert!</span> {text}
        </p>
        <button className='close-btn' onClick={onCloseClick}>
          <MdClose />
        </button>
      </AlertWrapper>
    )
  );
};

export default Alert;

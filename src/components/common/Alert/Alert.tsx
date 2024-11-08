import { MdClose } from 'react-icons/md';

const alertVariants = {
  info: 'text-blue-800 bg-blue-50',
  danger: 'text-red-800 bg-red-50',
  success: 'text-green-800 bg-green-50',
  warning: 'text-yellow-800 bg-yellow-50',
};

const borderedVariants = {
  info: 'border border-blue-300',
  danger: 'border border-red-300',
  success: 'border border-green-300',
  warning: 'border border-yellow-300',
};

const borderAccentVariants = {
  info: 'border-t-4 border-blue-300',
  danger: 'border-t-4 border-red-300',
  success: 'border-t-4 border-green-300',
  warning: 'border-t-4 border-yellow-300',
};

export type AlertProps = {
  variant?: 'info' | 'danger' | 'success' | 'warning';
  border?: 'bordered' | 'borderAccent';
  message: string;
  icon?: React.ReactNode;
  showAlert: boolean;
  onCloseClick: () => void;
};

function Alert({
  variant = 'info',
  border,
  message,
  icon,
  showAlert,
  onCloseClick,
}: AlertProps) {
  const variantClass = alertVariants[variant];
  const borderClass =
    border === 'bordered'
      ? borderedVariants[variant]
      : border === 'borderAccent'
      ? borderAccentVariants[variant]
      : '';

  return (
    showAlert && (
      <div
        className={`w-full flex items-center p-4 mb-4 text-sm rounded-lg ${variantClass} ${borderClass}`}
        role='alert'
      >
        {icon && icon}
        <div>
          <span className='font-medium capitalize'>{variant}!</span> {message}
        </div>
        <button
          type='button'
          onClick={onCloseClick}
          className='ms-auto -my-1.5 rounded-lg inline-flex items-center justify-end h-8 w-8'
          aria-label='Close'
        >
          <div className='sr-only'>Close</div>
          <MdClose className='w-4 h-4' />
        </button>
      </div>
    )
  );
}

export default Alert;

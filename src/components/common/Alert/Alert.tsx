import { MdClose } from 'react-icons/md';

const alertVariants = {
  info: 'text-blue-800 bg-blue-50',
  danger: 'text-red-800 bg-red-50',
  success: 'text-green-800 bg-green-50',
  warning: 'text-yellow-800 bg-yellow-50',
};

export type AlertProps = {
  variant?: 'info' | 'danger' | 'success' | 'warning';
  message: string;
  icon?: React.ReactNode;
  showAlert: boolean;
  onCloseClick: () => void;
};

function Alert({
  variant = 'info',
  message,
  icon,
  showAlert,
  onCloseClick,
}: AlertProps) {
  const variantClass = alertVariants[variant];
  return (
    showAlert && (
      <div
        className={`w-full flex items-center p-4 mb-4 text-sm rounded-lg ${variantClass}`}
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
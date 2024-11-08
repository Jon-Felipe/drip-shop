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
};

function Alert({ variant = 'info', message, icon }: AlertProps) {
  const variantClass = alertVariants[variant];
  return (
    <div
      className={`w-full flex items-center p-4 mb-4 text-sm rounded-lg ${variantClass}`}
      role='alert'
    >
      {icon && icon}
      <div>
        <span className='font-medium capitalize'>{variant}!</span> {message}
      </div>
    </div>
  );
}

export default Alert;

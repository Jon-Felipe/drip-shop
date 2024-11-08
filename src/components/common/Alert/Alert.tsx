const alertVariants = {
  info: 'text-blue-800 bg-blue-50',
  danger: 'text-red-800 bg-red-50',
  success: 'text-green-800 bg-green-50',
  warning: 'text-yellow-800 bg-yellow-50',
};

type AlertProps = {
  variant?: 'info' | 'danger' | 'success' | 'warning';
  message: string;
};

function Alert({ variant = 'info', message }: AlertProps) {
  const variantClass = alertVariants[variant];
  return (
    <div className={`p-4 mb-4 text-sm rounded-lg ${variantClass}`} role='alert'>
      <span className='font-medium capitalize'>{variant}!</span> {message}
    </div>
  );
}

export default Alert;

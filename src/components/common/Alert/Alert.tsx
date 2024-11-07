type Props = {};

function Alert({}: Props) {
  return (
    <div
      className='p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50'
      role='alert'
    >
      <span className='font-medium'>Info alert!</span> Change a few things up
      and try submitting again.
    </div>
  );
}

export default Alert;

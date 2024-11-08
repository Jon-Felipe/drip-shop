const colourVariants = {
  blue: 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300',
  light:
    'text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-gray-100',
  dark: 'text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300',
  green: 'text-white bg-green-700 hover:bg-green-800 focus:ring-green-300',
  red: 'text-white bg-red-700 hover:bg-red-800 focus:ring-red-300',
  yellow: 'text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300',
};

const sizeVariants = {
  xs: 'px-3 py-2 text-xs',
  s: 'px-3 py-2 text-sm',
  m: 'px-5 py-2.5 text-sm',
  l: 'px-5 py-3 text-base',
  xl: 'px-6 py-3.5 text-base',
};

const disabledVariants = {
  blue: 'text-white bg-blue-400 hover:bg-blue-500',
  light: 'text-gray-400 bg-white border border-gray-300 hover:bg-gray-50',
  dark: 'text-white bg-gray-500 hover:bg-gray-600',
  green: 'text-white bg-green-400 hover:bg-green-500',
  red: 'text-white bg-red-400 hover:bg-red-500',
  yellow: 'text-white bg-yellow-300 hover:bg-yellow-400',
};

const outlinedVariants = {
  blue: 'text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-blue-300',
  light:
    'text-gray-700 hover:text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-gray-100',
  dark: 'text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-gray-300',
  green:
    'text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-green-300',
  red: 'text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-red-300',
  yellow:
    'text-yellow-700 hover:text-white border border-yellow-700 hover:bg-yellow-800 focus:ring-yellow-300',
};

type ButtonProps = {
  text: string;
  colour?: 'blue' | 'light' | 'dark' | 'green' | 'red' | 'yellow';
  size?: 'xs' | 's' | 'm' | 'l' | 'xl';
  outlined?: boolean;
  pill?: boolean;
  disabled?: boolean;
  loading?: boolean;
};

function Button({
  text = 'Button',
  colour = 'blue',
  size = 'm',
  outlined = false,
  pill = false,
  disabled = false,
  loading = false,
}: ButtonProps) {
  let colourClasses = `${
    disabled
      ? disabledVariants[colour]
      : outlined
      ? outlinedVariants[colour]
      : colourVariants[colour]
  }`;
  let sizeClasses = sizeVariants[size];

  let spinnerClassSize = '';
  switch (size) {
    case 'xs':
      spinnerClassSize = 'w-3 h-3';
      break;
    case 'l':
    case 'xl':
      spinnerClassSize = 'w-5 h-5';
      break;
    default:
      spinnerClassSize = 'w-4 h-4';
      break;
  }

  return (
    <button
      type='button'
      className={`font-medium text-center ${
        pill ? 'rounded-full' : 'rounded-lg'
      } focus:ring-4 focus:outline-none ${colourClasses} ${sizeClasses} ${
        disabled ? 'cursor-not-allowed' : ''
      }`}
      disabled={loading || disabled}
    >
      {loading && (
        <svg
          aria-hidden='true'
          role='status'
          className={`inline ${spinnerClassSize} me-3 text-white animate-spin`}
          viewBox='0 0 100 101'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
            fill={colour === 'light' || outlined ? '#A6A6A6' : '#E5E7EB'}
          />
          <path
            d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
            fill='currentColor'
          />
        </svg>
      )}
      {loading ? 'Loading...' : text}
    </button>
  );
}

export default Button;

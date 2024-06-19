type Props = {};

function Login({}: Props) {
  return (
    <div className='p-4 w-full max-w-xl max-h-full mx-auto'>
      <div className='bg-white rounded-lg border'>
        <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t'>
          <h3 className='text-xl font-semibold text-gray-900'>
            Sign in to our platform
          </h3>
        </div>
        <div className='p-4 md:p-5'>
          <form className='space-y-4'>
            <div>
              <label
                htmlFor='email'
                className='block mb-2 text-sm font-medium text-gray-900'
              >
                Your email
              </label>
              <input
                type='email'
                name='email'
                id='email'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                placeholder='name@example.com'
                required
              />
            </div>
            <div>
              <label
                htmlFor='password'
                className='block mb-2 text-sm font-medium text-gray-900'
              >
                Your password
              </label>
              <input
                type='password'
                name='password'
                id='password'
                placeholder='••••••••'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                required
              />
            </div>
            <div className='flex justify-between'>
              <div className='flex items-start'>
                <div className='flex items-center h-5'>
                  <input
                    id='remember'
                    type='checkbox'
                    value=''
                    className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300'
                    required
                  />
                </div>
                <label
                  htmlFor='remember'
                  className='ms-2 text-sm font-medium text-gray-900'
                >
                  Remember me
                </label>
              </div>
              <a href='#' className='text-sm text-blue-700 hover:underline'>
                Lost Password?
              </a>
            </div>
            <button
              type='submit'
              className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
            >
              Login to your account
            </button>
            <div className='text-sm font-medium text-gray-500'>
              Not registered?{' '}
              <a href='#' className='text-blue-700 hover:underline'>
                Create account
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

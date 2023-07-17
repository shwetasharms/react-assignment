import { useGoogleLogin } from '@react-oauth/google';

const GoogleLoginButton = () => {
  const { signIn } = useGoogleLogin({
    clientId: 'YOUR_CLIENT_ID',
    onSuccess: (response) => {
      console.log('Google login successful:', response);
    },
    onFailure: (error) => {
      console.error('Google login failed:', error);
    },
  });

  return (
    <button onClick={signIn}>Login with Google</button>
  );
};

export default GoogleLoginButton;
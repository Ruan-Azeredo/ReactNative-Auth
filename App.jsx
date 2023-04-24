import { NativeBaseProvider } from 'native-base';
import { Router } from './src/routes/Router';
import { AuthProvider } from './src/contexts/Auth';

export default function App() {
  return (
    <NativeBaseProvider>
      <AuthProvider>
        <Router/>
      </AuthProvider>
    </NativeBaseProvider>
  );
}
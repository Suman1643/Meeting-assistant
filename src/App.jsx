import AppLayout from "./AppLayout"
import AuthProvider from "./context/AuthProvider";

const App = () => {
  return (
    <AuthProvider>
       <AppLayout/>
    </AuthProvider>
  );
};

export default App;

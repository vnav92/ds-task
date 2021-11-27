import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { MainLayout } from './components';
import { ApplicationRoutes } from './components/navigation/navigation.const';
import { Form, Profile } from './modules';

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
        <Route
            path="/"
            element={<Navigate replace to={ApplicationRoutes.PROFILE} />}
          />
          <Route path={ApplicationRoutes.FORM} element={<Form />} />
          <Route path={ApplicationRoutes.PROFILE} element={<Profile />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;

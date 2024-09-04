import React, { createContext } from 'react';


export default AuthContext = createContext();



// export const useAuth = (): AuthContextType => {
//   const context = React.useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };
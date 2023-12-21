import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThirdwebProvider } from "@thirdweb-dev/react";

import { Layout } from "../../layout/index"; 
import { Page404 } from "../../page/Page404"; 

export const Router: React.FC = () => {
  return (
    <ThirdwebProvider
    activeChain="ethereum"
    clientId='9faaa293a8c1938f51351d57a62632f6'> 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}> 
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </ThirdwebProvider>
  );
};

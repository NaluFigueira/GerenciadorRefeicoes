import React, { Suspense } from "react";

const ShoppingListMFE = React.lazy(() => import("shopping_list/App"));

const ShoppingList: React.FC = () => {
  return (
    <Suspense fallback={<span>Carregando...</span>}>
      <ShoppingListMFE />
    </Suspense>
  );
};

export default ShoppingList;

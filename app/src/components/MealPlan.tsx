import React, { Suspense } from "react";

const MealPlanMFE = React.lazy(() => import("meal_plan/App"));

const MealPlan: React.FC = () => {
  return (
    <Suspense fallback={<span>Carregando...</span>}>
      <MealPlanMFE />
    </Suspense>
  );
};

export default MealPlan;

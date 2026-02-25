"use client";

import Button from "@/components/button/Button";
import LoadingScreen from "@/components/dashboard/LoadingScreen";
import LeavesBackground from "@/components/general/LeavesBackground";
import Sign from "@/components/general/Sign";
import ARCardsSlider from "@/components/home/ARCardsSlider";
import CustomMain from "@/components/layout/CustomMain";
import PaddingWrapper from "@/components/layout/PaddingWrapper";
import { homeCardsData } from "@/data/homeCardsData";
import { useUserStore } from "@/zustand/useUserStore";

export default function Cells() {
  const { user, loading } = useUserStore();

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <CustomMain>
      <section className="min-h-[calc(75vh)]">
        <LeavesBackground />
        <div className="relative bottom-4">
          <Sign label="Edugami AR" />
        </div>
        {(user && !loading) || true ? (
          <ARCardsSlider data={homeCardsData} />
        ) : (
          <PaddingWrapper>
            <div className="flex flex-col items-center gap-4">
              <Button href="/login" hierarchy="primary">
                Iniciar sesión
              </Button>
            </div>
          </PaddingWrapper>
        )}
      </section>
    </CustomMain>
  );
}

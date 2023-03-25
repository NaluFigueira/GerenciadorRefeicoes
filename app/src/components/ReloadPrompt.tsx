import React from "react";

import { useRegisterSW } from "virtual:pwa-register/react";
import ReloadPromptButton from "./ReloadPromptButton";

function ReloadPrompt() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      console.log("SW Registered: " + r);
    },
    onRegisterError(error) {
      console.log("SW registration error", error);
    },
  });

  const close = () => {
    setOfflineReady(false);
    setNeedRefresh(false);
  };

  return (
    <div className="p-0 m-0 w-0 h-0">
      {(offlineReady || needRefresh) && (
        <div className="fixed right-0 bottom-0 m-4 p-3 border border-solid rounded border-black z-10 text-left shadow-md bg-white">
          <div className="mb-2 text-black">
            {offlineReady ? (
              <span>Aplicação pronta para ficar offline</span>
            ) : (
              <span>
                Novo conteúdo disponível, clique no botão de recarregar para
                atualizar.
              </span>
            )}
          </div>
          {needRefresh && (
            <ReloadPromptButton
              onClick={() => updateServiceWorker(true)}
              title={"Recarregar"}
            />
          )}
          <ReloadPromptButton onClick={() => close()} title={"Fechar"} />
        </div>
      )}
    </div>
  );
}

export default ReloadPrompt;

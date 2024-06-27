// This is a skeleton starter React component generated by Plasmic.
import { observer } from "mobx-react";
// Feel free to edit as you see fit.
import React, { useEffect } from "react";
import { assert } from "@/wab/shared/common";
import { U } from "@/wab/client/cli-routes";
import { StudioCtx } from "@/wab/client/studio-ctx/StudioCtx";
import { createDarkMask } from "@/wab/client/components/darkMask";
import {
  PlasmicAlertBanner,
  PlasmicAlertBanner__VariantsArgs,
} from "@/wab/client/components/widgets/plasmic/PlasmicAlertBanner";

export interface AlertData {
  stateVariant: PlasmicAlertBanner__VariantsArgs["state"];
  actionFn: (studioCtx: StudioCtx) => Promise<void>;
}

export const AlertSpec = {
  ReadOnly: {
    stateVariant: "readOnly",
    actionFn: async (studioCtx: StudioCtx) => {
      const { projectId: newProjectId } =
        await studioCtx.appCtx.api.cloneProject(studioCtx.siteInfo.id);
      assert(window.top, "Unexpected null reference");
      window.top.location.href = U.project({
        projectId: newProjectId,
      });
    },
  },

  ConcurrentEdit: {
    stateVariant: "concurrentEdit",
    actionFn: async (studioCtx: StudioCtx) => {
      return studioCtx.appCtx.api.reloadLocation();
    },
  },

  SaveFailed: {
    stateVariant: "saveFailed",
    actionFn: async (studioCtx: StudioCtx) => {},
  },

  ViewOld: {
    stateVariant: "viewOld",
    actionFn: async (studioCtx: StudioCtx) => {
      // Passing in undefined means load latest
      await studioCtx.switchToBranchVersion(undefined);
    },
  },

  AuthError: {
    stateVariant: "authError",
    actionFn: async (studioCtx: StudioCtx) => {
      return studioCtx.appCtx.api.reloadLocation();
    },
  },

  OutOfDate: {
    stateVariant: "outOfDate",
    actionFn: async (studioCtx: StudioCtx) => {
      return studioCtx.appCtx.api.reloadLocation();
    },
  },

  Unlogged: {
    stateVariant: "unlogged",
    actionFn: async (studioCtx: StudioCtx) => {
      assert(window.top, "Unexpected null reference");
      window.top.location.href = U.signup({});
    },
  },

  PermError: {
    stateVariant: "permError",
    actionFn: async (studioCtx: StudioCtx) => {
      return studioCtx.appCtx.api.reloadLocation();
    },
  },

  Watch: {
    stateVariant: "watch",
    actionFn: async (studioCtx: StudioCtx) => {
      return studioCtx.appCtx.api.reloadLocation();
    },
  },

  InvariantError: {
    stateVariant: "invariantError",
    actionFn: async (studioCtx: StudioCtx) => {
      return studioCtx.appCtx.api.reloadLocation();
    },
  },

  ProtectedMainBranch: {
    stateVariant: "protectedMainBranch",
    actionFn: async (studioCtx: StudioCtx) => {},
  },
} as const;

(window as any).alertspec = AlertSpec;

interface AlertBannerProps {
  studioCtx: StudioCtx;
}

export const AlertBanner = observer(function AlertBanner_({
  studioCtx,
}: AlertBannerProps) {
  const alertState = studioCtx.alertBannerState.get();

  useEffect(() => {
    if (studioCtx.blockChanges && !studioCtx.isAtTip) {
      createDarkMask(studioCtx);
    }
  }, [studioCtx.blockChanges, studioCtx.isAtTip]);

  // If no state defined, hide the element
  if (!alertState) {
    return <></>;
  }

  return (
    <PlasmicAlertBanner
      root={{
        className: "over-dark-mask",
      }}
      variants={{ state: alertState.stateVariant }}
      overrides={{
        actionBtn: {
          onClick: () => alertState.actionFn(studioCtx),
        },

        dismissBtn: {
          "data-test-id": "alert-banner-dismiss",
          onClick: (event) => {
            event.stopPropagation();
            studioCtx.alertBannerState.set(null);
          },
        } as any,

        watchBtn: {
          onClick: () => studioCtx.enterWatchMode(),
        },
      }}
    />
  );
});

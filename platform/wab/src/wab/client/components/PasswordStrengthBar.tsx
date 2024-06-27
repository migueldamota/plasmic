// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import {
  DefaultPasswordStrengthBarProps,
  PlasmicPasswordStrengthBar,
} from "@/wab/client/plasmic/plasmic_kit_user_settings/PlasmicPasswordStrengthBar";
import { spawn } from "@/wab/shared/common";
import { ratePasswordStrength } from "@/wab/shared/password-strength";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { debounce } from "lodash";
import * as React from "react";

export type PasswordStrengthBarProps = DefaultPasswordStrengthBarProps;

function PasswordStrengthBar_(
  props: PasswordStrengthBarProps,
  ref: HTMLElementRefOf<"div">
) {
  const { password } = props;
  const [passwordStrength, setPasswordStrength] = React.useState(0);
  const ratePasswordStrengthDebounce = React.useCallback(
    debounce(
      async (newPassword) =>
        setPasswordStrength(await ratePasswordStrength(newPassword)),
      500
    ),
    []
  );
  React.useEffect(() => {
    const asyncSetPasswordStrength = async () => {
      await ratePasswordStrengthDebounce(password);
    };
    spawn(asyncSetPasswordStrength());
  }, [password]);
  return (
    <PlasmicPasswordStrengthBar
      root={{ ref }}
      {...props}
      passwordStrength={`_${Math.min(passwordStrength, 4)}` as any}
    />
  );
}

const PasswordStrengthBar = React.forwardRef(PasswordStrengthBar_);
export default PasswordStrengthBar;

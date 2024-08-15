// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aukbrhkegRkQ6KizvhdUPT
// Component: eS_Bw5U3wr

import * as React from "react";

import {
  Flex as Flex__,
  StrictProps,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  renderPlasmicSlot,
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_deprecated_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import projectcss from "../PP__plasmickit_left_pane.module.css"; // plasmic-import: aukbrhkegRkQ6KizvhdUPT/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import plasmic_plasmic_kit_new_design_system_former_style_controls_css from "../plasmic_kit_style_controls/plasmic_plasmic_kit_styles_pane.module.css"; // plasmic-import: gYEVvAzCcLMHDVPvuYxkFh/projectcss
import sty from "./PlasmicPreset.module.css"; // plasmic-import: eS_Bw5U3wr/css

createPlasmicElementProxy;

export type PlasmicPreset__VariantMembers = {};
export type PlasmicPreset__VariantsArgs = {};
type VariantPropType = keyof PlasmicPreset__VariantsArgs;
export const PlasmicPreset__VariantProps = new Array<VariantPropType>();

export type PlasmicPreset__ArgsType = {
  screenshot?: React.ReactNode;
  name?: React.ReactNode;
};
type ArgPropType = keyof PlasmicPreset__ArgsType;
export const PlasmicPreset__ArgProps = new Array<ArgPropType>(
  "screenshot",
  "name"
);

export type PlasmicPreset__OverridesType = {
  root?: Flex__<"div">;
  freeBox?: Flex__<"div">;
  nameContainer?: Flex__<"div">;
};

export interface DefaultPresetProps {
  screenshot?: React.ReactNode;
  name?: React.ReactNode;
  className?: string;
}

const $$ = {};

function PlasmicPreset__RenderFunc(props: {
  variants: PlasmicPreset__VariantsArgs;
  args: PlasmicPreset__ArgsType;
  overrides: PlasmicPreset__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants,
  };

  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_plasmic_kit_design_system_deprecated_css.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        plasmic_plasmic_kit_new_design_system_former_style_controls_css.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        {renderPlasmicSlot({
          defaultContents: null,
          value: args.screenshot,
        })}
      </div>
      {false ? (
        <div
          data-plasmic-name={"nameContainer"}
          data-plasmic-override={overrides.nameContainer}
          className={classNames(projectcss.all, sty.nameContainer)}
        >
          {renderPlasmicSlot({
            defaultContents: "Name",
            value: args.name,
            className: classNames(sty.slotTargetName),
          })}
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "nameContainer"],
  freeBox: ["freeBox"],
  nameContainer: ["nameContainer"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  nameContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPreset__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPreset__VariantsArgs;
    args?: PlasmicPreset__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPreset__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPreset__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicPreset__ArgProps,
          internalVariantPropNames: PlasmicPreset__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicPreset__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPreset";
  } else {
    func.displayName = `PlasmicPreset.${nodeName}`;
  }
  return func;
}

export const PlasmicPreset = Object.assign(
  // Top-level PlasmicPreset renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    nameContainer: makeNodeComponent("nameContainer"),

    // Metadata about props expected for PlasmicPreset
    internalVariantProps: PlasmicPreset__VariantProps,
    internalArgProps: PlasmicPreset__ArgProps,
  }
);

export default PlasmicPreset;
/* prettier-ignore-end */

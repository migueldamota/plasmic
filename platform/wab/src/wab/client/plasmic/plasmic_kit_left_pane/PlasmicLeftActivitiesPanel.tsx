// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aukbrhkegRkQ6KizvhdUPT
// Component: yc4AfGXkNH

import * as React from "react";

import {
  Flex as Flex__,
  StrictProps,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_deprecated_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import projectcss from "../PP__plasmickit_left_pane.module.css"; // plasmic-import: aukbrhkegRkQ6KizvhdUPT/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import plasmic_plasmic_kit_new_design_system_former_style_controls_css from "../plasmic_kit_style_controls/plasmic_plasmic_kit_styles_pane.module.css"; // plasmic-import: gYEVvAzCcLMHDVPvuYxkFh/projectcss
import sty from "./PlasmicLeftActivitiesPanel.module.css"; // plasmic-import: yc4AfGXkNH/css

createPlasmicElementProxy;

export type PlasmicLeftActivitiesPanel__VariantMembers = {};
export type PlasmicLeftActivitiesPanel__VariantsArgs = {};
type VariantPropType = keyof PlasmicLeftActivitiesPanel__VariantsArgs;
export const PlasmicLeftActivitiesPanel__VariantProps =
  new Array<VariantPropType>();

export type PlasmicLeftActivitiesPanel__ArgsType = {};
type ArgPropType = keyof PlasmicLeftActivitiesPanel__ArgsType;
export const PlasmicLeftActivitiesPanel__ArgProps = new Array<ArgPropType>();

export type PlasmicLeftActivitiesPanel__OverridesType = {
  root?: Flex__<"div">;
  content?: Flex__<"div">;
};

export interface DefaultLeftActivitiesPanelProps {
  className?: string;
}

const $$ = {};

function PlasmicLeftActivitiesPanel__RenderFunc(props: {
  variants: PlasmicLeftActivitiesPanel__VariantsArgs;
  args: PlasmicLeftActivitiesPanel__ArgsType;
  overrides: PlasmicLeftActivitiesPanel__OverridesType;
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
        data-plasmic-name={"content"}
        data-plasmic-override={overrides.content}
        className={classNames(projectcss.all, sty.content)}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "content"],
  content: ["content"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  content: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLeftActivitiesPanel__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLeftActivitiesPanel__VariantsArgs;
    args?: PlasmicLeftActivitiesPanel__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLeftActivitiesPanel__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicLeftActivitiesPanel__ArgsType,
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
          internalArgPropNames: PlasmicLeftActivitiesPanel__ArgProps,
          internalVariantPropNames: PlasmicLeftActivitiesPanel__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicLeftActivitiesPanel__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLeftActivitiesPanel";
  } else {
    func.displayName = `PlasmicLeftActivitiesPanel.${nodeName}`;
  }
  return func;
}

export const PlasmicLeftActivitiesPanel = Object.assign(
  // Top-level PlasmicLeftActivitiesPanel renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    content: makeNodeComponent("content"),

    // Metadata about props expected for PlasmicLeftActivitiesPanel
    internalVariantProps: PlasmicLeftActivitiesPanel__VariantProps,
    internalArgProps: PlasmicLeftActivitiesPanel__ArgProps,
  }
);

export default PlasmicLeftActivitiesPanel;
/* prettier-ignore-end */

// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aukbrhkegRkQ6KizvhdUPT
// Component: bobcNPtaTq

import * as React from "react";

import {
  Flex as Flex__,
  SingleChoiceArg,
  StrictProps,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  hasVariant,
  useDollarState,
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_deprecated_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import projectcss from "../PP__plasmickit_left_pane.module.css"; // plasmic-import: aukbrhkegRkQ6KizvhdUPT/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import plasmic_plasmic_kit_new_design_system_former_style_controls_css from "../plasmic_kit_style_controls/plasmic_plasmic_kit_styles_pane.module.css"; // plasmic-import: gYEVvAzCcLMHDVPvuYxkFh/projectcss
import sty from "./PlasmicCollapseToggle.module.css"; // plasmic-import: bobcNPtaTq/css

import ChevronDownsvgIcon from "../q_4_icons/icons/PlasmicIcon__ChevronDownsvg"; // plasmic-import: xZrB9_0ir/icon
import ChevronUpsvgIcon from "../q_4_icons/icons/PlasmicIcon__ChevronUpsvg"; // plasmic-import: i9D87DzsX/icon

createPlasmicElementProxy;

export type PlasmicCollapseToggle__VariantMembers = {
  collapseState: "collapsed" | "expanded";
};
export type PlasmicCollapseToggle__VariantsArgs = {
  collapseState?: SingleChoiceArg<"collapsed" | "expanded">;
};
type VariantPropType = keyof PlasmicCollapseToggle__VariantsArgs;
export const PlasmicCollapseToggle__VariantProps = new Array<VariantPropType>(
  "collapseState"
);

export type PlasmicCollapseToggle__ArgsType = {};
type ArgPropType = keyof PlasmicCollapseToggle__ArgsType;
export const PlasmicCollapseToggle__ArgProps = new Array<ArgPropType>();

export type PlasmicCollapseToggle__OverridesType = {
  root?: Flex__<"div">;
};

export interface DefaultCollapseToggleProps {
  collapseState?: SingleChoiceArg<"collapsed" | "expanded">;
  className?: string;
}

const $$ = {};

function PlasmicCollapseToggle__RenderFunc(props: {
  variants: PlasmicCollapseToggle__VariantsArgs;
  args: PlasmicCollapseToggle__ArgsType;
  overrides: PlasmicCollapseToggle__OverridesType;
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "collapseState",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.collapseState,
      },
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs,
  });

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
        sty.root,
        {
          [sty.rootcollapseState_expanded]: hasVariant(
            $state,
            "collapseState",
            "expanded"
          ),
        }
      )}
    >
      <ChevronDownsvgIcon
        className={classNames(projectcss.all, sty.svg__tRn5M, {
          [sty.svgcollapseState_expanded__tRn5M4HqP]: hasVariant(
            $state,
            "collapseState",
            "expanded"
          ),
        })}
        role={"img"}
      />

      <ChevronUpsvgIcon
        className={classNames(projectcss.all, sty.svg__fDuU1, {
          [sty.svgcollapseState_expanded__fDuU14HqP]: hasVariant(
            $state,
            "collapseState",
            "expanded"
          ),
        })}
        role={"img"}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCollapseToggle__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCollapseToggle__VariantsArgs;
    args?: PlasmicCollapseToggle__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCollapseToggle__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCollapseToggle__ArgsType,
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
          internalArgPropNames: PlasmicCollapseToggle__ArgProps,
          internalVariantPropNames: PlasmicCollapseToggle__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicCollapseToggle__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCollapseToggle";
  } else {
    func.displayName = `PlasmicCollapseToggle.${nodeName}`;
  }
  return func;
}

export const PlasmicCollapseToggle = Object.assign(
  // Top-level PlasmicCollapseToggle renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicCollapseToggle
    internalVariantProps: PlasmicCollapseToggle__VariantProps,
    internalArgProps: PlasmicCollapseToggle__ArgProps,
  }
);

export default PlasmicCollapseToggle;
/* prettier-ignore-end */

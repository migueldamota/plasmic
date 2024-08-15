// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aukbrhkegRkQ6KizvhdUPT
// Component: TqAPn0srTq

import * as React from "react";

import {
  Flex as Flex__,
  SingleBooleanChoiceArg,
  Stack as Stack__,
  StrictProps,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  hasVariant,
  useDollarState,
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";

import FilterButton from "../../components/widgets/FilterButton"; // plasmic-import: 93uVZfRMCA/component
import Searchbox from "../../components/widgets/Searchbox"; // plasmic-import: po7gr0PX4_gWo/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_deprecated_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import projectcss from "../PP__plasmickit_left_pane.module.css"; // plasmic-import: aukbrhkegRkQ6KizvhdUPT/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import plasmic_plasmic_kit_new_design_system_former_style_controls_css from "../plasmic_kit_style_controls/plasmic_plasmic_kit_styles_pane.module.css"; // plasmic-import: gYEVvAzCcLMHDVPvuYxkFh/projectcss
import sty from "./PlasmicLeftSearchPanel.module.css"; // plasmic-import: TqAPn0srTq/css

createPlasmicElementProxy;

export type PlasmicLeftSearchPanel__VariantMembers = {
  hasFilter: "hasFilter";
};
export type PlasmicLeftSearchPanel__VariantsArgs = {
  hasFilter?: SingleBooleanChoiceArg<"hasFilter">;
};
type VariantPropType = keyof PlasmicLeftSearchPanel__VariantsArgs;
export const PlasmicLeftSearchPanel__VariantProps = new Array<VariantPropType>(
  "hasFilter"
);

export type PlasmicLeftSearchPanel__ArgsType = {};
type ArgPropType = keyof PlasmicLeftSearchPanel__ArgsType;
export const PlasmicLeftSearchPanel__ArgProps = new Array<ArgPropType>();

export type PlasmicLeftSearchPanel__OverridesType = {
  searchPanel?: Flex__<"div">;
  searchbox?: Flex__<typeof Searchbox>;
  filterButton?: Flex__<typeof FilterButton>;
};

export interface DefaultLeftSearchPanelProps {
  hasFilter?: SingleBooleanChoiceArg<"hasFilter">;
  className?: string;
}

const $$ = {};

function PlasmicLeftSearchPanel__RenderFunc(props: {
  variants: PlasmicLeftSearchPanel__VariantsArgs;
  args: PlasmicLeftSearchPanel__ArgsType;
  overrides: PlasmicLeftSearchPanel__OverridesType;
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
        path: "hasFilter",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.hasFilter,
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
    <Stack__
      as={"div"}
      data-plasmic-name={"searchPanel"}
      data-plasmic-override={overrides.searchPanel}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_plasmic_kit_design_system_deprecated_css.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        plasmic_plasmic_kit_new_design_system_former_style_controls_css.plasmic_tokens,
        sty.searchPanel,
        {
          [sty.searchPanelhasFilter]: hasVariant(
            $state,
            "hasFilter",
            "hasFilter"
          ),
        }
      )}
    >
      <Searchbox
        data-plasmic-name={"searchbox"}
        data-plasmic-override={overrides.searchbox}
        className={classNames("__wab_instance", sty.searchbox)}
      />

      {(hasVariant($state, "hasFilter", "hasFilter") ? true : false) ? (
        <FilterButton
          data-plasmic-name={"filterButton"}
          data-plasmic-override={overrides.filterButton}
          className={classNames("__wab_instance", sty.filterButton, {
            [sty.filterButtonhasFilter]: hasVariant(
              $state,
              "hasFilter",
              "hasFilter"
            ),
          })}
        />
      ) : null}
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  searchPanel: ["searchPanel", "searchbox", "filterButton"],
  searchbox: ["searchbox"],
  filterButton: ["filterButton"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  searchPanel: "div";
  searchbox: typeof Searchbox;
  filterButton: typeof FilterButton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLeftSearchPanel__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLeftSearchPanel__VariantsArgs;
    args?: PlasmicLeftSearchPanel__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLeftSearchPanel__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicLeftSearchPanel__ArgsType,
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
          internalArgPropNames: PlasmicLeftSearchPanel__ArgProps,
          internalVariantPropNames: PlasmicLeftSearchPanel__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicLeftSearchPanel__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "searchPanel") {
    func.displayName = "PlasmicLeftSearchPanel";
  } else {
    func.displayName = `PlasmicLeftSearchPanel.${nodeName}`;
  }
  return func;
}

export const PlasmicLeftSearchPanel = Object.assign(
  // Top-level PlasmicLeftSearchPanel renders the root element
  makeNodeComponent("searchPanel"),
  {
    // Helper components rendering sub-elements
    searchbox: makeNodeComponent("searchbox"),
    filterButton: makeNodeComponent("filterButton"),

    // Metadata about props expected for PlasmicLeftSearchPanel
    internalVariantProps: PlasmicLeftSearchPanel__VariantProps,
    internalArgProps: PlasmicLeftSearchPanel__ArgProps,
  }
);

export default PlasmicLeftSearchPanel;
/* prettier-ignore-end */

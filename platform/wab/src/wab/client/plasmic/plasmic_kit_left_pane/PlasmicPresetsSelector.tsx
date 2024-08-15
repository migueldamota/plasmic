// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aukbrhkegRkQ6KizvhdUPT
// Component: neIW4UOiRU

import * as React from "react";

import {
  Flex as Flex__,
  Stack as Stack__,
  StrictProps,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";

import Preset from "../../components/Preset"; // plasmic-import: eS_Bw5U3wr/component
import PresetGroup from "../../components/PresetGroup"; // plasmic-import: kZ3Ar3RnLt/component
import LeftSearchPanel from "../../components/studio/LeftSearchPanel"; // plasmic-import: TqAPn0srTq/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_deprecated_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import projectcss from "../PP__plasmickit_left_pane.module.css"; // plasmic-import: aukbrhkegRkQ6KizvhdUPT/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import plasmic_plasmic_kit_new_design_system_former_style_controls_css from "../plasmic_kit_style_controls/plasmic_plasmic_kit_styles_pane.module.css"; // plasmic-import: gYEVvAzCcLMHDVPvuYxkFh/projectcss
import sty from "./PlasmicPresetsSelector.module.css"; // plasmic-import: neIW4UOiRU/css

createPlasmicElementProxy;

export type PlasmicPresetsSelector__VariantMembers = {};
export type PlasmicPresetsSelector__VariantsArgs = {};
type VariantPropType = keyof PlasmicPresetsSelector__VariantsArgs;
export const PlasmicPresetsSelector__VariantProps =
  new Array<VariantPropType>();

export type PlasmicPresetsSelector__ArgsType = {};
type ArgPropType = keyof PlasmicPresetsSelector__ArgsType;
export const PlasmicPresetsSelector__ArgProps = new Array<ArgPropType>();

export type PlasmicPresetsSelector__OverridesType = {
  root?: Flex__<"div">;
  freeBox?: Flex__<"div">;
  search?: Flex__<typeof LeftSearchPanel>;
  text?: Flex__<"div">;
  groups?: Flex__<"div">;
  example16?: Flex__<"div">;
  example162?: Flex__<"div">;
};

export interface DefaultPresetsSelectorProps {
  className?: string;
}

const $$ = {};

function PlasmicPresetsSelector__RenderFunc(props: {
  variants: PlasmicPresetsSelector__VariantsArgs;
  args: PlasmicPresetsSelector__ArgsType;
  overrides: PlasmicPresetsSelector__OverridesType;
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
        <LeftSearchPanel
          data-plasmic-name={"search"}
          data-plasmic-override={overrides.search}
          className={classNames("__wab_instance", sty.search)}
        />

        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text
          )}
        >
          {"All Presets"}
        </div>
      </div>
      <Stack__
        as={"div"}
        data-plasmic-name={"groups"}
        data-plasmic-override={overrides.groups}
        hasGap={true}
        className={classNames(projectcss.all, sty.groups)}
      >
        <PresetGroup
          className={classNames("__wab_instance", sty.presetGroup__u3B9Z)}
        >
          <Preset
            className={classNames("__wab_instance", sty.preset__nQhS)}
            screenshot={
              <div
                data-plasmic-name={"example16"}
                data-plasmic-override={overrides.example16}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.example16
                )}
              >
                {"Screenshot1"}
              </div>
            }
          />

          <Preset
            className={classNames("__wab_instance", sty.preset__uqDw3)}
            screenshot={
              <div
                data-plasmic-name={"example162"}
                data-plasmic-override={overrides.example162}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.example162
                )}
              >
                {"Screenshot"}
              </div>
            }
          />
        </PresetGroup>
        <PresetGroup
          className={classNames("__wab_instance", sty.presetGroup__tGpD)}
        >
          <Preset
            className={classNames("__wab_instance", sty.preset__v9F1P)}
            screenshot={
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__xg93C
                )}
              >
                {"Screenshot1"}
              </div>
            }
          />

          <Preset
            className={classNames("__wab_instance", sty.preset__xvSNl)}
            screenshot={
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___0Pi7O
                )}
              >
                {"Screenshot1"}
              </div>
            }
          />
        </PresetGroup>
      </Stack__>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "freeBox",
    "search",
    "text",
    "groups",
    "example16",
    "example162",
  ],
  freeBox: ["freeBox", "search", "text"],
  search: ["search"],
  text: ["text"],
  groups: ["groups", "example16", "example162"],
  example16: ["example16"],
  example162: ["example162"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  search: typeof LeftSearchPanel;
  text: "div";
  groups: "div";
  example16: "div";
  example162: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPresetsSelector__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPresetsSelector__VariantsArgs;
    args?: PlasmicPresetsSelector__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPresetsSelector__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPresetsSelector__ArgsType,
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
          internalArgPropNames: PlasmicPresetsSelector__ArgProps,
          internalVariantPropNames: PlasmicPresetsSelector__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicPresetsSelector__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPresetsSelector";
  } else {
    func.displayName = `PlasmicPresetsSelector.${nodeName}`;
  }
  return func;
}

export const PlasmicPresetsSelector = Object.assign(
  // Top-level PlasmicPresetsSelector renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    search: makeNodeComponent("search"),
    text: makeNodeComponent("text"),
    groups: makeNodeComponent("groups"),
    example16: makeNodeComponent("example16"),
    example162: makeNodeComponent("example162"),

    // Metadata about props expected for PlasmicPresetsSelector
    internalVariantProps: PlasmicPresetsSelector__VariantProps,
    internalArgProps: PlasmicPresetsSelector__ArgProps,
  }
);

export default PlasmicPresetsSelector;
/* prettier-ignore-end */

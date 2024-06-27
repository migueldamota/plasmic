// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import { AddItem } from "@/wab/client/definitions/insertables";
import { PlasmicAddDrawerSection } from "@/wab/client/plasmic/plasmic_kit_left_pane/PlasmicAddDrawerSection";
import { HostLessPackageInfo } from "@/wab/shared/devflags";
import * as React from "react";
import { useListBoxSection } from "react-aria";

export interface AddItemGroup {
  key: string;
  familyKey?: string;
  familyLabel?: string;
  sectionKey?: string;
  sectionLabel?: string;
  label: string;
  items: AddItem[];
  codeName?: string;
  codeLink?: string;
  hostLessPackageInfo?: HostLessPackageInfo;
  isHeaderLess?: boolean;
}

interface AddDrawerSectionProps {
  group: AddItemGroup;
  children?: React.ReactNode;
  isLast?: boolean;
}

function AddDrawerSection(props: AddDrawerSectionProps) {
  const { group, children, isLast } = props;
  const { itemProps, headingProps, groupProps } = useListBoxSection({
    heading: group.label,
    "aria-label": group.label,
  });

  return (
    <PlasmicAddDrawerSection
      isLast={isLast}
      root={{
        as: "li",
        props: {
          ...itemProps,
        },
      }}
      title={group.label}
      header={{
        ...headingProps,
      }}
      sectionBody={{
        as: "ul",
        props: {
          ...groupProps,
        },
      }}
      children={children}
    />
  );
}

export default AddDrawerSection;

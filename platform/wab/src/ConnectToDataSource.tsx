// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import { useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import {
  DefaultConnectToDataSourceProps,
  PlasmicConnectToDataSource,
} from "@/wab/client/plasmic/plasmic_kit_data_queries/PlasmicConnectToDataSource";
import {
  BuiltinDataSource,
  BuiltinDataSourceName,
  dataSourceNameToHumanName,
} from "@/wab/shared/data/DataSources";

// Your component props start with props for variants and slots you defined
// in Plasmic, but you can add more here, like event handlers that you can
// attach to named nodes in your component.
//
// If you don't want to expose certain variants or slots as a prop, you can use
// Omit to hide them:
//
// interface ConnectToDataSourceProps extends Omit<DefaultConnectToDataSourceProps, "hideProps1"|"hideProp2"> {
//   // etc.
// }
//
// You can also stop extending from DefaultConnectToDataSourceProps altogether and have
// total control over the props for your component.
interface ConnectToDataSourceProps extends DefaultConnectToDataSourceProps {
  sourceName: BuiltinDataSourceName;
  onCancel: () => void;
  onNext: (source: BuiltinDataSource) => void;
}

function ConnectToDataSource({
  sourceName,
  onCancel,
  onNext,
  ...props
}: ConnectToDataSourceProps) {
  const [key, setKey] = useState("");
  return (
    <PlasmicConnectToDataSource
      {...props}
      keyInput={{
        value: key,
        onChange: (e) => setKey(e.target.value),
      }}
      title={`Connect to ${dataSourceNameToHumanName[sourceName]}`}
      picker={{ render: () => null }}
      nextButton={{
        onClick: () =>
          onNext({
            type: "ShopifySource",
            storefrontApiKey: key,
          }),
      }}
    />
  );
}

export default ConnectToDataSource;

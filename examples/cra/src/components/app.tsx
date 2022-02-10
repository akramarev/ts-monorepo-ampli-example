import React from "react";
import { Button } from "@nighttrax/components/button";
import { meaningOfLife } from "@nighttrax/foo";
import { useTest } from "@hooks/test";
import { ampli } from "@nighttrax/ampli";

export const App = () => {
  useTest();

  ampli.load({ environment: "production" });
  ampli.identify("user-id");

  ampli.appLoaded({ appName: "MyApp" });

  return (
    <div>
      {meaningOfLife}
      <Button />
    </div>
  );
};

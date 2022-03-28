import React from "react";
import Application from "./Application";
import Dashboard from "./Dashboard";

export default function AppDashSelect({
  appOrDash,
  preLoadedValues,
  resumeOnFileOgName,
  resumeOnFileDownloadLink,
  resumeOnFileButtonColor,
  resumeOnFileButtonDisable,
}) {
  return appOrDash ? (
    <Dashboard
      preLoadedValues={preLoadedValues}
      resumeOnFileOgName={resumeOnFileOgName}
      resumeOnFileDownloadLink={resumeOnFileDownloadLink}
      resumeOnFileButtonColor={resumeOnFileButtonColor}
      resumeOnFileButtonDisable={resumeOnFileButtonDisable}
    />
  ) : (
    <Application />
  );
}

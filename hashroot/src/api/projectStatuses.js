import http from "./http";
import { PROJECT_STATUS_KEYS } from "../constants";

export const moveToReadyToBeAssignedToGCApi = async (projectId) => {
  const {
    data: { project },
  } = await http.patch(
    `/projects/${projectId}/status/${PROJECT_STATUS_KEYS.READY_TO_BE_ASSIGNED_TO_GC}`
  );

  return project;
};

export const moveToAssignedToGCApi = async (
  projectId,
  { generalContractorId }
) => {
  const {
    data: { project },
  } = await http.patch(
    `/projects/${projectId}/status/${PROJECT_STATUS_KEYS.ASSIGNED_TO_GC}`,
    { generalContractorId }
  );

  return project;
};

export const moveToGCAcceptedApi = async (projectId) => {
  const {
    data: { project },
  } = await http.patch(
    `/projects/${projectId}/status/${PROJECT_STATUS_KEYS.GC_ACCEPTED}`
  );

  return project;
};

export const gcRejectProposalApi = async (projectId, { comment }) => {
  const {
    data: { project },
  } = await http.patch(
    `/projects/${projectId}/status/${PROJECT_STATUS_KEYS.READY_TO_BE_ASSIGNED_TO_GC}/rejected`,
    { comment }
  );

  return project;
};

export const moveToOnSiteInspectionScheduledApi = async (
  projectId,
  { onSiteInspectionDate }
) => {
  const {
    data: { project },
  } = await http.patch(
    `/projects/${projectId}/status/${PROJECT_STATUS_KEYS.ON_SITE_INSPECTION_SCHEDULED}`,
    {
      onSiteInspectionDate,
    }
  );

  return project;
};

export const moveToOnSiteInspectionInProgressApi = async (
  projectId,
  { onSiteInspectionStartedOn }
) => {
  const {
    data: { project },
  } = await http.patch(
    `/projects/${projectId}/status/${PROJECT_STATUS_KEYS.ON_SITE_INSPECTION_IN_PROGRESS}}`,
    {
      onSiteInspectionStartedOn,
    }
  );

  return project;
};

export const moveToReadyForInstallationApi = async (
  projectId,
  { scheduledInstallationDate }
) => {
  const {
    data: { project },
  } = await http.patch(
    `/projects/${projectId}/status/${PROJECT_STATUS_KEYS.READY_FOR_INSTALLATION}`,
    {
      scheduledInstallationDate,
    }
  );

  return project;
};

export const moveToStartInstallationApi = async (
  projectId,
  { installationStartedOn }
) => {
  const {
    data: { project },
  } = await http.patch(
    `/projects/${projectId}/status/${PROJECT_STATUS_KEYS.INSTALLATION_IN_PROGRESS}`,
    {
      installationStartedOn,
    }
  );

  return project;
};

export const moveToValidatingPermitsApi = async (
  projectId,
  { installationCompletedOn }
) => {
  const {
    data: { project },
  } = await http.patch(
    `/projects/${projectId}/status/${PROJECT_STATUS_KEYS.VALIDATING_PERMITS}`,
    {
      installationCompletedOn,
    }
  );

  return project;
};
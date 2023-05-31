/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: { input: any; output: any; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type AcceptedFeedbackModel = {
  __typename?: 'AcceptedFeedbackModel';
  initial_version: Scalars['String']['output'];
  updated_version: Scalars['String']['output'];
};

export enum Acl {
  Public = 'PUBLIC',
  Secure = 'SECURE'
}

export type AmApiKeyModel = {
  __typename?: 'AmApiKeyModel';
  createdAt: Scalars['Date']['output'];
  deletedAt?: Maybe<Scalars['Date']['output']>;
  hasClientSecret: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  key: Scalars['String']['output'];
  ownerId: Scalars['Int']['output'];
  ownerType: ApiKeyOwnerType;
  puppetUserId: Scalars['Int']['output'];
  role?: Maybe<IdentityPermissionRole>;
  updatedAt: Scalars['Date']['output'];
  usageRecord: Array<ApiKeyUsageRecordModel>;
};

export type Answer = {
  __typename?: 'Answer';
  field?: Maybe<Field>;
  fieldId?: Maybe<Scalars['Int']['output']>;
  form?: Maybe<Form>;
  formId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  respondantId: Scalars['Int']['output'];
  response?: Maybe<Scalars['String']['output']>;
  responseType: ResponseType;
};

export enum ApiKeyOwnerType {
  Company = 'COMPANY',
  User = 'USER'
}

export type ApiKeyUsageRecordModel = {
  __typename?: 'ApiKeyUsageRecordModel';
  count: Scalars['Int']['output'];
  route: Scalars['String']['output'];
};

export type ApiUserModel = {
  __typename?: 'ApiUserModel';
  clientId: Scalars['String']['output'];
  clientSecret?: Maybe<Scalars['String']['output']>;
  companyId: Scalars['Int']['output'];
  createdAt: Scalars['Date']['output'];
  deletedAt?: Maybe<Scalars['Date']['output']>;
  hasClientSecret: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  ownerId: Scalars['Int']['output'];
  ownerType: ApiUserOwnerType;
  puppetUserId: Scalars['Int']['output'];
  role?: Maybe<IdentityPermissionRole>;
  updatedAt: Scalars['Date']['output'];
};

export enum ApiUserOwnerType {
  Company = 'COMPANY',
  User = 'USER'
}

export type AssessmentDataAnswerGqlModel = {
  optionSubId?: InputMaybe<Scalars['String']['input']>;
  questionSubId: Scalars['String']['input'];
};

export type AssessmentDataAnswerModel = {
  __typename?: 'AssessmentDataAnswerModel';
  inTime?: Maybe<Scalars['Boolean']['output']>;
  isCorrect: Scalars['Boolean']['output'];
  timestamp: Scalars['Date']['output'];
};

export type AssessmentDataModel = {
  __typename?: 'AssessmentDataModel';
  allowedTimePerSection?: Maybe<Scalars['Int']['output']>;
  answers: Array<Maybe<AssessmentDataAnswerModel>>;
  completedAt?: Maybe<Scalars['Date']['output']>;
  createdAt: Scalars['Date']['output'];
  deletedAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['Int']['output'];
  manuallyCreated: Scalars['Boolean']['output'];
  nQuestionsPerTrait?: Maybe<Scalars['Int']['output']>;
  normGroupType: NormGroupType;
  questions: Array<Maybe<AssessmentDataQuestionModel>>;
  roleLevel?: Maybe<ContentRoleLevel>;
  startingAbilityLowerBound: Scalars['Float']['output'];
  startingAbilityUpperBound: Scalars['Float']['output'];
  startingQuestions?: Maybe<Array<Maybe<AssessmentDataQuestionModel>>>;
  testCandidateId: Scalars['Int']['output'];
  traitIds?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  updatedAt: Scalars['Date']['output'];
};

export type AssessmentDataQuestionModel = {
  __typename?: 'AssessmentDataQuestionModel';
  questionSubId: Scalars['String']['output'];
  timestamp: Scalars['Date']['output'];
  traitId?: Maybe<Scalars['Int']['output']>;
};

export type AuthenticationResult = {
  __typename?: 'AuthenticationResult';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
};

export type AuthenticationResultCookie = {
  __typename?: 'AuthenticationResultCookie';
  accessToken: Scalars['String']['output'];
  mfaCookie: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
};

export type AuthenticationResultE2eCookie = {
  __typename?: 'AuthenticationResultE2eCookie';
  mfaCookie: Scalars['String']['output'];
};

export type BaseMethodTest = {
  __typename?: 'BaseMethodTest';
  id: Scalars['Int']['output'];
  score: Scalars['Float']['output'];
  someEnum: BaseMethodTestSomeEnum;
  someFlag: Scalars['Boolean']['output'];
  subId: Scalars['String']['output'];
};

export type BaseMethodTestCreateOneArgs = {
  someEnum: BaseMethodTestSomeEnum;
  someFlag: Scalars['Boolean']['input'];
};

export enum BaseMethodTestSomeEnum {
  Arsalan = 'ARSALAN',
  Ian = 'IAN',
  Sufyan = 'SUFYAN',
  Tamas = 'TAMAS',
  Victor = 'VICTOR'
}

export type BaseMethodTestUpdateOneArgs = {
  id: Scalars['Int']['input'];
  someEnum?: InputMaybe<BaseMethodTestSomeEnum>;
  someFlag?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BasicScoreModel = {
  __typename?: 'BasicScoreModel';
  id: Scalars['Int']['output'];
  score: ScoreModel;
  type: BasicScoreType;
};

export enum BasicScoreType {
  SoftSkill = 'SOFT_SKILL',
  SuccessProfile = 'SUCCESS_PROFILE',
  Trait = 'TRAIT'
}

export type BehaviourContentModel = {
  __typename?: 'BehaviourContentModel';
  behaviourId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  negativeSummary: Scalars['String']['output'];
  positiveSummary: Scalars['String']['output'];
  roleLevel?: Maybe<ContentRoleLevel>;
};

export type BehaviourModel = {
  __typename?: 'BehaviourModel';
  content?: Maybe<BehaviourContentModel>;
  contents: Array<BehaviourContentModel>;
  contexts: Array<TraitSoftSkillContextModel>;
  id: Scalars['Int']['output'];
  internalName: Scalars['String']['output'];
};

export type Blob = {
  __typename?: 'Blob';
  acl: Acl;
  bucket: Scalars['String']['output'];
  contentEncoding?: Maybe<Scalars['String']['output']>;
  contentType?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  deletedAt?: Maybe<Scalars['String']['output']>;
  extension: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  ownerService: Scalars['String']['output'];
  publishedName: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type BulkUpdateSoftSkillTraitArgsSingle = {
  addEmptyContent?: InputMaybe<Scalars['Boolean']['input']>;
  isAdded?: InputMaybe<Scalars['Boolean']['input']>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  isUpdated?: InputMaybe<Scalars['Boolean']['input']>;
  orientation: Orientation;
  softSkillId: Scalars['Int']['input'];
  traitId: Scalars['Int']['input'];
  weight: Scalars['Float']['input'];
};

export enum CalculationMethod {
  PercentileWeightedAverage = 'PERCENTILE_WEIGHTED_AVERAGE',
  RoleSkillsProfile = 'ROLE_SKILLS_PROFILE',
  StenWeightedAverage = 'STEN_WEIGHTED_AVERAGE',
  StenWeightedAverageWithAdjustemt = 'STEN_WEIGHTED_AVERAGE_WITH_ADJUSTEMT',
  TrCustomCalculator = 'TR_CUSTOM_CALCULATOR',
  ZWeightedAverageWithAdjustment = 'Z_WEIGHTED_AVERAGE_WITH_ADJUSTMENT',
  ZWeightedAverageWithSmarterAdjustment = 'Z_WEIGHTED_AVERAGE_WITH_SMARTER_ADJUSTMENT',
  ZWeightedAverageWithSmarterAdjustmentAndLimit = 'Z_WEIGHTED_AVERAGE_WITH_SMARTER_ADJUSTMENT_AND_LIMIT'
}

export type CalibrationCandidateModel = {
  __typename?: 'CalibrationCandidateModel';
  createdAt: Scalars['Date']['output'];
  deletedAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['Int']['output'];
  lastAdjustedById?: Maybe<Scalars['Int']['output']>;
  stageCandidate: SmStageCandidateModel;
  stageCandidateId: Scalars['Int']['output'];
  status: CalibrationCandidateStatus;
  subId: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};

export enum CalibrationCandidateStatus {
  HrSubmitted = 'HR_SUBMITTED',
  ManagerSubmitted = 'MANAGER_SUBMITTED',
  NotStarted = 'NOT_STARTED',
  SignedOff = 'SIGNED_OFF',
  TalentTeamSubmitted = 'TALENT_TEAM_SUBMITTED'
}

export type CalibrationCardModel = {
  __typename?: 'CalibrationCardModel';
  calibrationCandidate: CalibrationCandidateModel;
  isAllowed: Scalars['Boolean']['output'];
  /** @deprecated Please use `calibrationCandidate { status }` instead!-T@25/11/2022 */
  status: CalibrationCandidateStatus;
};

export type CalibrationConfigExtendedModel = {
  __typename?: 'CalibrationConfigExtendedModel';
  gradeBands: Array<GradeBandUnion>;
  softSkillEntries: Array<CalibrationConfigSoftSkillEntryModel>;
  technicalSkillEntries: Array<CalibrationConfigTechnicalSkillEntryModel>;
  totalEntry: CalibrationConfigTotalEntryModel;
};

export type CalibrationConfigModel = {
  __typename?: 'CalibrationConfigModel';
  gradeBands: Array<GradeBandUnion>;
  softSkillIds: Array<Scalars['Int']['output']>;
  successProfileId: Scalars['Int']['output'];
};

export type CalibrationConfigSoftSkillEntryModel = {
  __typename?: 'CalibrationConfigSoftSkillEntryModel';
  latestResult?: Maybe<ResultModel>;
  originalResult?: Maybe<ResultModel>;
  softSkill: SoftSkill;
  softSkillId: Scalars['Int']['output'];
};

export type CalibrationConfigTechnicalSkillEntryModel = {
  __typename?: 'CalibrationConfigTechnicalSkillEntryModel';
  latestResult?: Maybe<ResultModel>;
  originalResult?: Maybe<ResultModel>;
  technicalSkill: SoftSkill;
  technicalSkillId: Scalars['Int']['output'];
};

export type CalibrationConfigTotalEntryModel = {
  __typename?: 'CalibrationConfigTotalEntryModel';
  latestResult?: Maybe<ResultModel>;
  originalResult?: Maybe<ResultModel>;
  successProfileId: Scalars['Int']['output'];
};

export type CalibrationFileUploadArgs = {
  projectId: Scalars['Int']['input'];
  signOff: Scalars['Boolean']['input'];
};

export type CalibrationFileUploadLineModel = {
  __typename?: 'CalibrationFileUploadLineModel';
  directReportEmployeeId: Scalars['String']['output'];
  directReportName: Scalars['String']['output'];
  managerEmployeeId: Scalars['String']['output'];
  managerName: Scalars['String']['output'];
  overallResult: TrCustomEvaluation;
  overallResultAdjustment: TrCustomEvaluation;
  overallResultId: Scalars['Int']['output'];
  softSkillResult1: TrCustomEvaluation;
  softSkillResult1Adjustment: TrCustomEvaluation;
  softSkillResult1PreviousId: Scalars['Int']['output'];
  softSkillResult2: TrCustomEvaluation;
  softSkillResult2Adjustment: TrCustomEvaluation;
  softSkillResult2PreviousId: Scalars['Int']['output'];
  softSkillResult3: TrCustomEvaluation;
  softSkillResult3Adjustment: TrCustomEvaluation;
  softSkillResult3PreviousId: Scalars['Int']['output'];
  stageCandidateId: Scalars['Int']['output'];
};

export type CalibrationFileUploadModel = {
  __typename?: 'CalibrationFileUploadModel';
  apply: Scalars['Boolean']['output'];
  creates?: Maybe<Array<CalibrationFileUploadLineModel>>;
  deletes?: Maybe<Array<CalibrationFileUploadLineModel>>;
  errorMessage?: Maybe<Scalars['String']['output']>;
  errorMessages?: Maybe<Array<Scalars['String']['output']>>;
  errors?: Maybe<Array<CalibrationFileUploadLineModel>>;
  noChanges?: Maybe<Array<CalibrationFileUploadLineModel>>;
  projectId: Scalars['Int']['output'];
  signOff: Scalars['Boolean']['output'];
  updates?: Maybe<Array<CalibrationFileUploadLineModel>>;
};

export enum ClientDomainType {
  AdminAppDomain = 'ADMIN_APP_DOMAIN',
  CandidateAppDomain = 'CANDIDATE_APP_DOMAIN',
  CompanyAppDomain = 'COMPANY_APP_DOMAIN'
}

export enum ClientType {
  Admin = 'ADMIN',
  Candidate = 'CANDIDATE',
  Company = 'COMPANY',
  Pdf = 'PDF'
}

export type CmAllowedArea = {
  __typename?: 'CmAllowedArea';
  allowed?: Maybe<Array<CmAllowedAreaType>>;
  defaultArea?: Maybe<CmAllowedAreaType>;
};

export enum CmAllowedAreaType {
  CompanyEmployee = 'COMPANY_EMPLOYEE',
  Hiring = 'HIRING',
  TalentReview = 'TALENT_REVIEW'
}

export type CmAllowedCompanyModel = {
  __typename?: 'CmAllowedCompanyModel';
  allowedAreas: CmAllowedArea;
  company: Company;
};

export type CmAllowedProject = {
  __typename?: 'CmAllowedProject';
  allowed?: Maybe<Array<CmAllowedProjectType>>;
};

export enum CmAllowedProjectType {
  CreateReviewRequest = 'CREATE_REVIEW_REQUEST',
  ExportView = 'EXPORT_VIEW',
  FullAccess = 'FULL_ACCESS',
  RequestTalentReview = 'REQUEST_TALENT_REVIEW',
  UploadCalibrations = 'UPLOAD_CALIBRATIONS',
  UploadReviewRequests = 'UPLOAD_REVIEW_REQUESTS'
}

export type CmAllowedResultActionsHiringModel = {
  __typename?: 'CmAllowedResultActionsHiringModel';
  hiring?: Maybe<Array<CmAllowedResultActionsHiringType>>;
};

export enum CmAllowedResultActionsHiringType {
  DeleteAssessment = 'DELETE_ASSESSMENT',
  ReopenRssAssessment = 'REOPEN_RSS_ASSESSMENT',
  ResendInvite = 'RESEND_INVITE',
  ResetAssessment = 'RESET_ASSESSMENT',
  ViewReport = 'VIEW_REPORT'
}

export type CmAllowedResultActionsTalentReviewModel = {
  __typename?: 'CmAllowedResultActionsTalentReviewModel';
  tr?: Maybe<Array<CmAllowedResultActionsTalentReviewType>>;
};

export enum CmAllowedResultActionsTalentReviewType {
  Calibrate = 'CALIBRATE',
  CancelReview = 'CANCEL_REVIEW',
  ContinueReview = 'CONTINUE_REVIEW',
  DeleteReview = 'DELETE_REVIEW',
  ResendInvite = 'RESEND_INVITE',
  ResetReview = 'RESET_REVIEW',
  StartReview = 'START_REVIEW',
  ViewForm = 'VIEW_FORM'
}

export type CmCandidateDetailedScoreModel = {
  __typename?: 'CmCandidateDetailedScoreModel';
  resultName: Scalars['String']['output'];
  resultScore?: Maybe<Scalars['String']['output']>;
};

export type CmCandidateFormResponeModel = {
  __typename?: 'CmCandidateFormResponeModel';
  fieldName: Scalars['String']['output'];
  value?: Maybe<Scalars['String']['output']>;
};

export type CmCandidateResult = {
  allowedResultActions?: Maybe<AllowedResultActions>;
  avatarUrl?: Maybe<Scalars['String']['output']>;
  candidateDetailedScores?: Maybe<Array<CmCandidateDetailedScoreModel>>;
  candidateFormResponses?: Maybe<Array<CmCandidateFormResponeModel>>;
  candidateId: Scalars['Int']['output'];
  candidateSub: Scalars['String']['output'];
  companyId: Scalars['Int']['output'];
  displayResultScores?: Maybe<Array<Maybe<DisplayResultScoreModel>>>;
  doneBy: Scalars['Int']['output'];
  doneFor: Scalars['Int']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  interviewGuideId?: Maybe<Scalars['Int']['output']>;
  invitedDate?: Maybe<Scalars['Date']['output']>;
  invitedStatus?: Maybe<InvitationStatusCode>;
  invitedType: InviteType;
  lastDateOfCandidateAction?: Maybe<Scalars['Date']['output']>;
  lastName: Scalars['String']['output'];
  moduleType: ProjectModuleType;
  projectCandidateGroupedStatus: ProjectCandidateGroupedStatus;
  projectCandidateStatus: ProjectCandidateStatus;
  projectCandidateStatusMessage?: Maybe<Scalars['String']['output']>;
  projectId: Scalars['Int']['output'];
  projectName?: Maybe<Scalars['String']['output']>;
  reports?: Maybe<Array<CmReportModel>>;
  resultScore?: Maybe<ResultScoreUnion>;
  stageCandidate: SmStageCandidateModel;
  stageCandidateId: Scalars['Int']['output'];
  stageCandidateStatus: StageCandidateStatus;
  stageCandidateSub: Scalars['String']['output'];
  stageId: Scalars['Int']['output'];
};

export type CmCandidateResultModel = CmCandidateResult & {
  __typename?: 'CmCandidateResultModel';
  allowedResultActions?: Maybe<AllowedResultActions>;
  avatarUrl?: Maybe<Scalars['String']['output']>;
  candidateDetailedScores?: Maybe<Array<CmCandidateDetailedScoreModel>>;
  candidateFormResponses?: Maybe<Array<CmCandidateFormResponeModel>>;
  candidateId: Scalars['Int']['output'];
  candidateSub: Scalars['String']['output'];
  companyId: Scalars['Int']['output'];
  displayResultScores?: Maybe<Array<Maybe<DisplayResultScoreModel>>>;
  doneBy: Scalars['Int']['output'];
  doneFor: Scalars['Int']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  interviewGuideId?: Maybe<Scalars['Int']['output']>;
  invitedDate?: Maybe<Scalars['Date']['output']>;
  invitedStatus?: Maybe<InvitationStatusCode>;
  invitedType: InviteType;
  lastDateOfCandidateAction?: Maybe<Scalars['Date']['output']>;
  lastName: Scalars['String']['output'];
  moduleType: ProjectModuleType;
  projectCandidateGroupedStatus: ProjectCandidateGroupedStatus;
  projectCandidateStatus: ProjectCandidateStatus;
  projectCandidateStatusMessage?: Maybe<Scalars['String']['output']>;
  projectId: Scalars['Int']['output'];
  projectName?: Maybe<Scalars['String']['output']>;
  reports?: Maybe<Array<CmReportModel>>;
  resultScore?: Maybe<ResultScoreUnion>;
  stageCandidate: SmStageCandidateModel;
  stageCandidateId: Scalars['Int']['output'];
  stageCandidateStatus: StageCandidateStatus;
  stageCandidateSub: Scalars['String']['output'];
  stageId: Scalars['Int']['output'];
};

export type CmCandidateResultModelPaginated = {
  __typename?: 'CmCandidateResultModelPaginated';
  data?: Maybe<Array<CmCandidateResult>>;
  pageInfo?: Maybe<Pageinfo>;
};

export type CmCandidateResultOrderByArgs = {
  candidateId?: InputMaybe<OrderByArgs>;
  department?: InputMaybe<OrderByArgs>;
  email?: InputMaybe<OrderByArgs>;
  firstName?: InputMaybe<OrderByArgs>;
  hrManagerEmail?: InputMaybe<OrderByArgs>;
  hrManagerFirstName?: InputMaybe<OrderByArgs>;
  hrManagerLastName?: InputMaybe<OrderByArgs>;
  invitedDate?: InputMaybe<OrderByArgs>;
  lastDateOfCandidateAction?: InputMaybe<OrderByArgs>;
  lastName?: InputMaybe<OrderByArgs>;
  managerEmail?: InputMaybe<OrderByArgs>;
  managerFirstName?: InputMaybe<OrderByArgs>;
  managerLastName?: InputMaybe<OrderByArgs>;
  resultScore?: InputMaybe<OrderByArgs>;
};

export type CmHiringResultsModel = CmCandidateResult & {
  __typename?: 'CmHiringResultsModel';
  allowedResultActions?: Maybe<AllowedResultActions>;
  avatarUrl?: Maybe<Scalars['String']['output']>;
  candidateDetailedScores?: Maybe<Array<CmCandidateDetailedScoreModel>>;
  candidateFormResponses?: Maybe<Array<CmCandidateFormResponeModel>>;
  candidateId: Scalars['Int']['output'];
  candidateSub: Scalars['String']['output'];
  companyId: Scalars['Int']['output'];
  displayResultScores?: Maybe<Array<Maybe<DisplayResultScoreModel>>>;
  doneBy: Scalars['Int']['output'];
  doneFor: Scalars['Int']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  interviewGuideId?: Maybe<Scalars['Int']['output']>;
  invitedDate?: Maybe<Scalars['Date']['output']>;
  invitedStatus?: Maybe<InvitationStatusCode>;
  invitedType: InviteType;
  lastDateOfCandidateAction?: Maybe<Scalars['Date']['output']>;
  lastName: Scalars['String']['output'];
  managers?: Maybe<Array<CmProjectCandidateManagerModel>>;
  moduleType: ProjectModuleType;
  projectCandidateGroupedStatus: ProjectCandidateGroupedStatus;
  projectCandidateStatus: ProjectCandidateStatus;
  projectCandidateStatusMessage?: Maybe<Scalars['String']['output']>;
  projectId: Scalars['Int']['output'];
  projectName?: Maybe<Scalars['String']['output']>;
  reports?: Maybe<Array<CmReportModel>>;
  resultScore?: Maybe<ResultScoreUnion>;
  stageCandidate: SmStageCandidateModel;
  stageCandidateId: Scalars['Int']['output'];
  stageCandidateStatus: StageCandidateStatus;
  stageCandidateSub: Scalars['String']['output'];
  stageId: Scalars['Int']['output'];
};

export type CmProject = {
  __typename?: 'CmProject';
  companyId: Scalars['Int']['output'];
  createdDate: Scalars['Date']['output'];
  endDate?: Maybe<Scalars['Date']['output']>;
  isArchived: Scalars['Boolean']['output'];
  isStopped: Scalars['Boolean']['output'];
  lastActivityDate: Scalars['Date']['output'];
  managers?: Maybe<Array<Maybe<ProjectManager>>>;
  moduleType: ProjectModuleType;
  name: Scalars['String']['output'];
  projectId: Scalars['Int']['output'];
  stageId: Scalars['Int']['output'];
};

export type CmProjectCandidateManagerModel = {
  __typename?: 'CmProjectCandidateManagerModel';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  managerId: Scalars['Int']['output'];
};

export type CmProjectManagerModel = {
  __typename?: 'CmProjectManagerModel';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  managerId: Scalars['Int']['output'];
  projectRole?: Maybe<IdentityPermissionRole>;
};

export type CmReportModel = {
  __typename?: 'CmReportModel';
  blob?: Maybe<Blob>;
  blobId: Scalars['Int']['output'];
  reportId: Scalars['Int']['output'];
  subType?: Maybe<ReportSubType>;
  type: ReportType;
};

export enum CmTrGridChartAxisEnum {
  Criticality = 'CRITICALITY',
  Impact = 'IMPACT',
  NumberSuccessors = 'NUMBER_SUCCESSORS',
  Risk = 'RISK',
  Score = 'SCORE'
}

export type CmTalentReviewGridChartBasicModel = {
  __typename?: 'CmTalentReviewGridChartBasicModel';
  cells?: Maybe<Array<Array<CmTalentReviewResultsCellModel>>>;
  xAxis: CmTrGridChartAxisEnum;
  xCount: Scalars['Int']['output'];
  yAxis: CmTrGridChartAxisEnum;
  yCount: Scalars['Int']['output'];
  zAxis?: Maybe<CmTrGridChartAxisEnum>;
  zCount?: Maybe<Scalars['Int']['output']>;
};

export type CmTalentReviewGridChartFilterOptionsModel = {
  __typename?: 'CmTalentReviewGridChartFilterOptionsModel';
  divisions: Array<Scalars['String']['output']>;
  hrBps: Array<User>;
  managers: Array<User>;
  projects: Array<Project>;
};

export type CmTalentReviewGridChartModel = {
  __typename?: 'CmTalentReviewGridChartModel';
  fields?: Maybe<Array<Array<Array<CmTalentReviewResultsDetailedModel>>>>;
  xAxis: CmTrGridChartAxisEnum;
  xCount: Scalars['Int']['output'];
  yAxis: CmTrGridChartAxisEnum;
  yCount: Scalars['Int']['output'];
  zAxis: CmTrGridChartAxisEnum;
  zCount: Scalars['Int']['output'];
};

export type CmTalentReviewResultsCellItemModel = {
  __typename?: 'CmTalentReviewResultsCellItemModel';
  doneForUser: User;
  values: CmValuesModel;
};

export type CmTalentReviewResultsCellModel = {
  __typename?: 'CmTalentReviewResultsCellModel';
  additionalCount: Scalars['Int']['output'];
  fields: Array<CmTalentReviewResultsCellItemModel>;
  hidden: Scalars['Boolean']['output'];
};

export type CmTalentReviewResultsDetailedModel = {
  __typename?: 'CmTalentReviewResultsDetailedModel';
  doneForCompanyInfo: UserCompanyInfo;
  doneForUser: User;
  hrBp?: Maybe<User>;
  manager: User;
  project: Project;
  stageCandidate: SmStageCandidateModel;
  values: CmValuesModel;
};

export type CmTalentReviewResultsModel = CmCandidateResult & {
  __typename?: 'CmTalentReviewResultsModel';
  allowedResultActions?: Maybe<AllowedResultActions>;
  avatarUrl?: Maybe<Scalars['String']['output']>;
  candidateDetailedScores?: Maybe<Array<CmCandidateDetailedScoreModel>>;
  candidateFormResponses?: Maybe<Array<CmCandidateFormResponeModel>>;
  candidateId: Scalars['Int']['output'];
  candidateSub: Scalars['String']['output'];
  companyId: Scalars['Int']['output'];
  directReportCompanyInfo?: Maybe<UserCompanyInfo>;
  displayResultScores?: Maybe<Array<Maybe<DisplayResultScoreModel>>>;
  doneBy: Scalars['Int']['output'];
  doneFor: Scalars['Int']['output'];
  email: Scalars['String']['output'];
  endDate?: Maybe<Scalars['Date']['output']>;
  firstName: Scalars['String']['output'];
  hrCompanyInfo?: Maybe<UserCompanyInfo>;
  hrManagerEmail?: Maybe<Scalars['String']['output']>;
  hrManagerFirstName?: Maybe<Scalars['String']['output']>;
  hrManagerId?: Maybe<Scalars['Int']['output']>;
  hrManagerLastName?: Maybe<Scalars['String']['output']>;
  interviewGuideId?: Maybe<Scalars['Int']['output']>;
  invitedDate?: Maybe<Scalars['Date']['output']>;
  invitedStatus?: Maybe<InvitationStatusCode>;
  invitedType: InviteType;
  lastDateOfCandidateAction?: Maybe<Scalars['Date']['output']>;
  lastName: Scalars['String']['output'];
  managerCompanyInfo?: Maybe<UserCompanyInfo>;
  managerEmail: Scalars['String']['output'];
  managerFirstName: Scalars['String']['output'];
  managerId: Scalars['Int']['output'];
  managerLastName: Scalars['String']['output'];
  moduleType: ProjectModuleType;
  projectCandidateGroupedStatus: ProjectCandidateGroupedStatus;
  projectCandidateStatus: ProjectCandidateStatus;
  projectCandidateStatusMessage?: Maybe<Scalars['String']['output']>;
  projectId: Scalars['Int']['output'];
  projectName?: Maybe<Scalars['String']['output']>;
  reports?: Maybe<Array<CmReportModel>>;
  resultAccess?: Maybe<ResultAccessModel>;
  resultScore?: Maybe<ResultScoreUnion>;
  stageCandidate: SmStageCandidateModel;
  stageCandidateId: Scalars['Int']['output'];
  stageCandidateStatus: StageCandidateStatus;
  stageCandidateSub: Scalars['String']['output'];
  stageId: Scalars['Int']['output'];
};

export type CmValuesModel = {
  __typename?: 'CmValuesModel';
  criticality?: Maybe<TrCriticalityEnum>;
  impact?: Maybe<TrImpactEnum>;
  numberSuccessors?: Maybe<TrNumberSuccessorsEnum>;
  risk?: Maybe<TrRiskEnum>;
  score?: Maybe<TrCustomEvaluation>;
  successors?: Maybe<Array<Scalars['String']['output']>>;
};

export type Company = {
  __typename?: 'Company';
  id: Scalars['Int']['output'];
  logoUrl?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type CompanyEmployeeFileUploadArgs = {
  companyId: Scalars['Int']['input'];
};

export type CompanyEmployeeFileUploadLineModel = {
  __typename?: 'CompanyEmployeeFileUploadLineModel';
  companyId?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  customFields?: Maybe<Scalars['JSON']['output']>;
  deletedAt?: Maybe<Scalars['Date']['output']>;
  department?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  employeeId?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['Date']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  hrManagerEmployeeId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  isArchived?: Maybe<Scalars['Boolean']['output']>;
  jobTitle?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['Date']['output']>;
  szUserId?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type CompanyEmployeeFileUploadModel = {
  __typename?: 'CompanyEmployeeFileUploadModel';
  apply: Scalars['Boolean']['output'];
  companyId: Scalars['Int']['output'];
  creates?: Maybe<Array<CompanyEmployeeFileUploadLineModel>>;
  deletes?: Maybe<Array<CompanyEmployeeFileUploadLineModel>>;
  errorMessage?: Maybe<Scalars['String']['output']>;
  errorMessages?: Maybe<Array<Scalars['String']['output']>>;
  errors?: Maybe<Array<CompanyEmployeeFileUploadLineModel>>;
  noChanges?: Maybe<Array<CompanyEmployeeFileUploadLineModel>>;
  updates?: Maybe<Array<CompanyEmployeeFileUploadLineModel>>;
};

export type CompanyEmployeeModel = {
  __typename?: 'CompanyEmployeeModel';
  companyId: Scalars['Int']['output'];
  createdAt: Scalars['Date']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  deletedAt?: Maybe<Scalars['Date']['output']>;
  department?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  employeeId: Scalars['String']['output'];
  endDate?: Maybe<Scalars['Date']['output']>;
  firstName: Scalars['String']['output'];
  hrManagerEmployeeId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  isArchived?: Maybe<Scalars['Boolean']['output']>;
  jobTitle?: Maybe<Scalars['String']['output']>;
  lastName: Scalars['String']['output'];
  startDate?: Maybe<Scalars['Date']['output']>;
  szUserId?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['Date']['output'];
};

export type CompanyEmployeeModelPaginated = {
  __typename?: 'CompanyEmployeeModelPaginated';
  data?: Maybe<Array<CompanyEmployeeModel>>;
  pageInfo?: Maybe<Pageinfo>;
};

export type CompanyEmployeeOrderByArgs = {
  email?: InputMaybe<OrderByArgs>;
  employeeId?: InputMaybe<OrderByArgs>;
  endDate?: InputMaybe<OrderByArgs>;
  firstName?: InputMaybe<OrderByArgs>;
  lastName?: InputMaybe<OrderByArgs>;
  startDate?: InputMaybe<OrderByArgs>;
  szUserId?: InputMaybe<OrderByArgs>;
};

export type CompanyEmployeeSelectField = Field & {
  __typename?: 'CompanyEmployeeSelectField';
  dynamicSelectOptions?: Maybe<Scalars['String']['output']>;
  fieldInstanceType: FieldInstanceType;
  fieldOwnerId?: Maybe<Scalars['Int']['output']>;
  fieldOwnerName?: Maybe<Scalars['String']['output']>;
  fieldOwnerType?: Maybe<FieldOwnerType>;
  fieldType: FieldType;
  formManagerType: FormManagerType;
  hint?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isArchived: Scalars['Boolean']['output'];
  isFreetextField?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  question?: Maybe<Scalars['String']['output']>;
  settings?: Maybe<FieldSettingsModel>;
  txtData?: Maybe<Scalars['String']['output']>;
};

export type CompanyMaybeUserEmployeeModel = {
  __typename?: 'CompanyMaybeUserEmployeeModel';
  email: Scalars['String']['output'];
  employeeId?: Maybe<Scalars['String']['output']>;
  firstName: Scalars['String']['output'];
  isCompanyEmployee: Scalars['Boolean']['output'];
  isUser: Scalars['Boolean']['output'];
  lastName: Scalars['String']['output'];
  userId?: Maybe<Scalars['Int']['output']>;
};

export type CompanyModel = {
  id: Scalars['Int']['input'];
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CompanyProjects = {
  __typename?: 'CompanyProjects';
  company: Company;
  id: Scalars['Int']['output'];
  numberOfCompletedInTimeFrameStageCandidates: Scalars['Int']['output'];
  numberOfCompletedStageCandidates: Scalars['Int']['output'];
  numberOfStageCandidates: Scalars['Int']['output'];
  percentageOfCompletedStageCandidates: Scalars['Float']['output'];
  projects: Array<ProjectWithStageCandidates>;
};

export type CompanyRole = {
  __typename?: 'CompanyRole';
  companyId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  role: Role;
  roleId: Scalars['Int']['output'];
  twoFactorEnabled: Scalars['Boolean']['output'];
};

export type CompanySignatureModel = {
  __typename?: 'CompanySignatureModel';
  company?: Maybe<Company>;
  companyId: Scalars['Int']['output'];
  createdAt: Scalars['Date']['output'];
  deletedAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['Int']['output'];
  isDefault: Scalars['Boolean']['output'];
  signature: Scalars['String']['output'];
  signatureEmail: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};

export enum ContentClassification {
  Negative = 'NEGATIVE',
  Neutral = 'NEUTRAL',
  Positive = 'POSITIVE'
}

export enum ContentRoleLevel {
  Apprentice = 'APPRENTICE',
  IndividualContributor = 'INDIVIDUAL_CONTRIBUTOR',
  Leader = 'LEADER',
  Manager = 'MANAGER',
  ManagerOfManagers = 'MANAGER_OF_MANAGERS',
  TechnicalExpert = 'TECHNICAL_EXPERT'
}

export type ContentValidatiorPieceModel = {
  __typename?: 'ContentValidatiorPieceModel';
  numOfIqContent: Scalars['String']['output'];
  numOfSsContent: Scalars['String']['output'];
  numOfSsSpContent: Scalars['String']['output'];
  numOfTraitContent: Scalars['String']['output'];
  softSkillId?: Maybe<Scalars['Int']['output']>;
  softSkillName?: Maybe<Scalars['String']['output']>;
  traitId?: Maybe<Scalars['Int']['output']>;
  traitName?: Maybe<Scalars['String']['output']>;
};

export type ContentValidator = {
  __typename?: 'ContentValidator';
  content: Array<ContentValidatiorPieceModel>;
  count?: Maybe<Scalars['Int']['output']>;
};

export type ContentViewerViewStageCandidateManagerReportModel = {
  __typename?: 'ContentViewerViewStageCandidateManagerReportModel';
  pollingStatus?: Maybe<PollingStatus>;
  pollingStatusMessage?: Maybe<Scalars['String']['output']>;
  pollingSubStatus?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ContentViewerViewStageCandidateReportModel = {
  __typename?: 'ContentViewerViewStageCandidateReportModel';
  pollingStatus?: Maybe<PollingStatus>;
  pollingStatusMessage?: Maybe<Scalars['String']['output']>;
  pollingSubStatus?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ContextualScoreModel = {
  children?: Maybe<Array<ContextualScoreModel>>;
  contentClassification?: Maybe<ContentClassification>;
  id: Scalars['Int']['output'];
  roleLevel?: Maybe<ContentRoleLevel>;
  score: ScoreModel;
  type: BasicScoreType;
};

export enum ContextualScorePositionType {
  Strength = 'STRENGTH',
  Weakness = 'WEAKNESS'
}

export type CreateFormFieldByFieldIdArgs = {
  displayOrder?: InputMaybe<Scalars['Int']['input']>;
  fieldId: Scalars['Int']['input'];
  isOptional: Scalars['Boolean']['input'];
};

export type CreateProjectManagerInput = {
  userId: Scalars['Int']['input'];
};

export enum DataSourceType {
  EmployeeAssessment = 'EMPLOYEE_ASSESSMENT',
  EmployeeSurvey = 'EMPLOYEE_SURVEY',
  Industry = 'INDUSTRY',
  JdReview = 'JD_REVIEW',
  ManagerSurvey = 'MANAGER_SURVEY'
}

export type DateField = Field & {
  __typename?: 'DateField';
  fieldInstanceType: FieldInstanceType;
  fieldOwnerId?: Maybe<Scalars['Int']['output']>;
  fieldOwnerName?: Maybe<Scalars['String']['output']>;
  fieldOwnerType?: Maybe<FieldOwnerType>;
  fieldType: FieldType;
  formManagerType: FormManagerType;
  hint?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isArchived: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  question?: Maybe<Scalars['String']['output']>;
  settings?: Maybe<FieldSettingsModel>;
  txtData?: Maybe<Scalars['String']['output']>;
};

export type DeleteByIdArgs = {
  id: Scalars['Int']['input'];
};

export type DeleteFormFieldByFieldIdArgs = {
  fieldId: Scalars['Int']['input'];
};

export type DeleteResult = {
  __typename?: 'DeleteResult';
  affected?: Maybe<Scalars['Int']['output']>;
};

export type DisplayResultScoreModel = {
  __typename?: 'DisplayResultScoreModel';
  key: Scalars['String']['output'];
  value?: Maybe<Scalars['String']['output']>;
};

export enum DisplayScoreType {
  Grade = 'GRADE',
  None = 'NONE',
  Percentile = 'PERCENTILE',
  StenScore = 'STEN_SCORE',
  ZScore = 'Z_SCORE'
}

export type DlxRejectedEvent = {
  __typename?: 'DlxRejectedEvent';
  createdAt: Scalars['String']['output'];
  deathQueue: Scalars['String']['output'];
  deletedAt: Scalars['String']['output'];
  event: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  rejectedCount: Scalars['Int']['output'];
  rejectedStatus: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type EaCompanyPlatformCreateOneArgs = {
  /** The company id which is being linked with the external platform assessment */
  companyId: Scalars['Int']['input'];
  /** The platform type, for each platform company must have specific platform link if you want to make specific assessments for the company on that platform */
  externalPlatformType: ExternalPlatformType;
};

/** Joining table between company and external assessments. External assessments point to this entity, if the company doesn't have any it will be automatically created when first time assigning an assessment to a company. Also, it combines the platform type and the company id so we can have multiple company platforms.This does not limit a company to use any of the freely available assessments from the available platforms. */
export type EaCompanyPlatformModel = {
  __typename?: 'EACompanyPlatformModel';
  companyId: Scalars['Int']['output'];
  createdAt: Scalars['Date']['output'];
  deletedAt?: Maybe<Scalars['Date']['output']>;
  externalPlatformType: ExternalPlatformType;
  id: Scalars['Int']['output'];
  subId: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type EaPlatformAssessmentCreateOneArgs = {
  /** The ID of the external assessment on the external platform. */
  eaPlatformId: Scalars['String']['input'];
  /** Modifier this assessment represents on our platform. You must have the DEFAULT modifier for each external assessment as a minimum. */
  modifier: ExternalPlatformModifier;
};

/** This is a child model of external_assessment that links any of the ExternalPlatformModifier with a specific external_platform_assessment and our own external_assessment model. */
export type EaPlatformAssessmentModel = {
  __typename?: 'EAPlatformAssessmentModel';
  /** Some ID for the assessment on the external platform */
  eaPlatformId: Scalars['String']['output'];
  externalAssessmentId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  /** Defines if the platform assessment is a default or is offering some type of modification. Each external_assessment can have only one of each modifiers which is ensured by unique index. */
  modifier: ExternalPlatformModifier;
  subId: Scalars['String']['output'];
};

export type EaSkillCalculateInstructionsArgs = {
  /** The challenge link, this is a todo parameter that will probably change into something else to properly know how to calculate it */
  challengeLink: Scalars['String']['input'];
};

/** Instructions that define how the skill will combine the results and calculate the score. It also includes the information that helps us link our skills with the skills on the platform since they might be named differently. */
export type EaSkillCalculateInstructionsModel = {
  __typename?: 'EASkillCalculateInstructionsModel';
  challengeLink: Scalars['String']['output'];
};

export type EaSkillCreateOneArgs = {
  /** The calculation instructions that will be used when receiving the results from the platform to match them with our internal skills */
  calculationInstructions: EaSkillCalculateInstructionsArgs;
  /** The skill id which is being linked with the external assessment */
  szSkillsMergeId: Scalars['Int']['input'];
};

/** Table for linking Spotted Zebra skills with the external_assessment. This linking will hold necessary information for the EAResultService to successfully match the results to skills. (Eg. Technical SQL skill must match MCQ SQL from the platform results) */
export type EaSkillModel = {
  __typename?: 'EASkillModel';
  calculationInstructions: EaSkillCalculateInstructionsModel;
  id: Scalars['Int']['output'];
  subId: Scalars['String']['output'];
  szSkillsMergeId: Scalars['Int']['output'];
};

/** This model is returned when trying to check the availability of the external assessment for the given stage action. Or it returns already created stage actions if they exist. */
export type EaStageActionAvailabilityModel = {
  __typename?: 'EAStageActionAvailabilityModel';
  /** Tells you if there are external assessments matching the given skills, if the stage action exists, this will be automatically true */
  available: Scalars['Boolean']['output'];
  /** Returns the already existing stage actions (if it exists) */
  eaStageActions: Array<EaStageActionModel>;
};

/** Links the stage action with external assessment, this is a product of adding the external assessment into stage. */
export type EaStageActionModel = {
  __typename?: 'EAStageActionModel';
  /** The company id where the stage project belongs */
  companyId: Scalars['Int']['output'];
  createdAt: Scalars['Date']['output'];
  deletedAt?: Maybe<Scalars['Date']['output']>;
  /** The external assessment that is linked for this stage action */
  externalAssessment: ExternalAssessmentModel;
  /** The external assessment id that is linked for this stage action */
  externalAssessmentId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  /** The stage id where this action belongs */
  stageId: Scalars['Int']['output'];
  subId: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type EmailTemplateModel = {
  __typename?: 'EmailTemplateModel';
  id: Scalars['Int']['output'];
  language: Language;
  subType?: Maybe<EmailTemplateSubType>;
  templateId: Scalars['String']['output'];
  type: EmailTemplateType;
};

export enum EmailTemplateSubType {
  Subtype_1 = 'SUBTYPE_1'
}

export enum EmailTemplateType {
  DeleteTalentReviewRequest = 'DELETE_TALENT_REVIEW_REQUEST',
  IgRecipientNotification = 'IG_RECIPIENT_NOTIFICATION',
  InvitationCandidate = 'INVITATION_CANDIDATE',
  InvitationCompany = 'INVITATION_COMPANY',
  InvitationTalentReview = 'INVITATION_TALENT_REVIEW',
  JobSpecification = 'JOB_SPECIFICATION',
  ManagerRequestSurvey = 'MANAGER_REQUEST_SURVEY',
  MfaCode = 'MFA_CODE',
  PasswordRecovery = 'PASSWORD_RECOVERY',
  ReportCandidate = 'REPORT_CANDIDATE',
  ReportManager = 'REPORT_MANAGER',
  ReportSzAdmin = 'REPORT_SZ_ADMIN',
  RequestTalentReview = 'REQUEST_TALENT_REVIEW',
  SuccessProfileCompletion = 'SUCCESS_PROFILE_COMPLETION'
}

export type EntityLanguageModel = {
  __typename?: 'EntityLanguageModel';
  createdAt: Scalars['Date']['output'];
  deletedAt?: Maybe<Scalars['Date']['output']>;
  entityId: Scalars['Int']['output'];
  entityType: EntityType;
  id: Scalars['Int']['output'];
  language: Language;
  updatedAt: Scalars['Date']['output'];
};

export enum EntityType {
  Project = 'PROJECT'
}

/** Any type of assessment representing a third-party integration assessment from any provider containing the data and links required for us to operate with it through our ecosystem. */
export type ExternalAssessmentModel = {
  __typename?: 'ExternalAssessmentModel';
  createdAt: Scalars['Date']['output'];
  deletedAt?: Maybe<Scalars['Date']['output']>;
  eaCompanyPlatform?: Maybe<EaCompanyPlatformModel>;
  eaCompanyPlatformId: Scalars['Int']['output'];
  eaPlatformAssessments?: Maybe<Array<EaPlatformAssessmentModel>>;
  eaSkills?: Maybe<Array<EaSkillModel>>;
  estimatedDurationInMinutes?: Maybe<Scalars['Int']['output']>;
  /** Defines the platform type (adapter) where this assessment is */
  externalPlatformType: ExternalPlatformType;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  subId: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};

/** Representation of each platform's adapter */
export type ExternalPlatformAdapterModel = {
  __typename?: 'ExternalPlatformAdapterModel';
  name: Scalars['String']['output'];
  /** Type of the platform this adapter is for */
  type: Scalars['Int']['output'];
};

/** Internal representation of ANY kind of external platform assessment object. */
export type ExternalPlatformAssessmentModel = {
  __typename?: 'ExternalPlatformAssessmentModel';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['Date']['output'];
  /** The ID of the assessment on the platform, this is the ID we will be using when pointing to it. (together with platform type attribute) */
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  /** Original JSON object that was gathered from the platform */
  original?: Maybe<RawPlatformAssessmentModel>;
};

/** Our external assessments can link to multiple assessments on the platform. The linked assessments from the platform can have a different modification meaning that is defined by this enum. */
export enum ExternalPlatformModifier {
  Default = 'DEFAULT',
  DurationPlus_25 = 'DURATION_PLUS_25',
  DurationPlus_50 = 'DURATION_PLUS_50'
}

export enum ExternalPlatformType {
  Coderbyte = 'CODERBYTE'
}

export type Field = {
  fieldInstanceType: FieldInstanceType;
  fieldOwnerId?: Maybe<Scalars['Int']['output']>;
  fieldOwnerName?: Maybe<Scalars['String']['output']>;
  fieldOwnerType?: Maybe<FieldOwnerType>;
  fieldType: FieldType;
  formManagerType: FormManagerType;
  hint?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isArchived: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  question?: Maybe<Scalars['String']['output']>;
  settings?: Maybe<FieldSettingsModel>;
  txtData?: Maybe<Scalars['String']['output']>;
};

export enum FieldInstanceType {
  /** Multiple - Information is not shared between forms */
  Multiple = 'MULTIPLE',
  /** Singleton - All forms share the same information */
  Singleton = 'SINGLETON'
}

export enum FieldOwnerType {
  CompanyFieldOwner = 'COMPANY_FIELD_OWNER',
  SzFieldOwner = 'SZ_FIELD_OWNER'
}

export type FieldSettingsArgs = {
  allowFreeText?: InputMaybe<Scalars['Boolean']['input']>;
  searchable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FieldSettingsModel = {
  __typename?: 'FieldSettingsModel';
  allowFreeText?: Maybe<Scalars['Boolean']['output']>;
  searchable?: Maybe<Scalars['Boolean']['output']>;
};

export enum FieldType {
  CompanyEmployeeSelectField = 'COMPANY_EMPLOYEE_SELECT_FIELD',
  /** Date */
  DateField = 'DATE_FIELD',
  /** Long text */
  LongTextField = 'LONG_TEXT_FIELD',
  /** Multiple select */
  MultipleSelectField = 'MULTIPLE_SELECT_FIELD',
  /** Short text */
  ShortTextField = 'SHORT_TEXT_FIELD',
  /** Single select */
  SingleSelectField = 'SINGLE_SELECT_FIELD'
}

export type FilterMomentRange = {
  from?: InputMaybe<Scalars['Date']['input']>;
  to?: InputMaybe<Scalars['Date']['input']>;
};

export type Form = {
  __typename?: 'Form';
  formFields?: Maybe<Array<FormField>>;
  formManagerType: FormManagerType;
  formOwner: FormOwner;
  formOwnerName: Scalars['String']['output'];
  formType: FormType;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type FormBuilder = {
  __typename?: 'FormBuilder';
  availableFields?: Maybe<Array<Field>>;
  form?: Maybe<Form>;
};

export type FormCandidateModel = {
  __typename?: 'FormCandidateModel';
  createdAt: Scalars['Date']['output'];
  deletedAt?: Maybe<Scalars['Date']['output']>;
  form: Form;
  formId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  stageCandidate?: Maybe<SmStageCandidateModel>;
  stageCandidateId: Scalars['Int']['output'];
  status: FormCandidateStatus;
  subId: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};

export enum FormCandidateStatus {
  Completed = 'COMPLETED',
  InProgress = 'IN_PROGRESS',
  NotStarted = 'NOT_STARTED'
}

export type FormCardModel = {
  __typename?: 'FormCardModel';
  /** @deprecated Please use `formCandidate { stageCandidateId }` instead!-T@25/11/2022 */
  associatedId: Scalars['Int']['output'];
  formCandidate: FormCandidateModel;
  /** @deprecated Please use `formCandidate { form { formType } }` instead!-T@25/11/2022 */
  formType: FormType;
  /** @deprecated Please use `formCandidate { status }` instead!-T@25/11/2022 */
  status: FormCandidateStatus;
};

export type FormField = {
  __typename?: 'FormField';
  displayOrder: Scalars['Int']['output'];
  field: Field;
  form: Form;
  id: Scalars['Int']['output'];
  isOptional: Scalars['Boolean']['output'];
};

export enum FormManagerType {
  /** Candidate Information */
  Ci = 'CI',
  /** Global - all forms can use this */
  Global = 'GLOBAL',
  /** Manager survey */
  ManagerSurvey = 'MANAGER_SURVEY',
  /** Quality of hire */
  QualityOfHire = 'QUALITY_OF_HIRE',
  Rs = 'RS',
  /** Talent reveiw */
  TalentReview = 'TALENT_REVIEW'
}

export type FormOwner = {
  __typename?: 'FormOwner';
  form: Form;
  formId: Scalars['Int']['output'];
  formOwnerId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
};

export type FormReportFormOwners = {
  __typename?: 'FormReportFormOwners';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type FormReportIndividualQueries = {
  __typename?: 'FormReportIndividualQueries';
  associatedIds?: Maybe<Array<Scalars['Int']['output']>>;
  formManagerTypes?: Maybe<Array<FormManagerType>>;
  formTypes?: Maybe<Array<FormType>>;
};

export enum FormType {
  CdForm = 'CD_FORM',
  CiForm = 'CI_FORM',
  MsEmployeeForm = 'MS_EMPLOYEE_FORM',
  MsManagerForm = 'MS_MANAGER_FORM',
  RsForm = 'RS_FORM',
  TrForm = 'TR_FORM'
}

export type GenerateStageIndirectInvitationUrlModel = {
  __typename?: 'GenerateStageIndirectInvitationUrlModel';
  url: Scalars['String']['output'];
};

export enum GetOption {
  OrDefault = 'OR_DEFAULT',
  OrEmptyArray = 'OR_EMPTY_ARRAY',
  OrNull = 'OR_NULL',
  OrThrow = 'OR_THROW'
}

export enum Grade {
  A = 'A',
  APlus = 'A_PLUS',
  B = 'B',
  C = 'C',
  D = 'D',
  E = 'E'
}

export type GradeBandUnion = IgBehaviourGradeBandModel | InterviewGuideCustomGradeBandModel | InterviewGuideFinalDecisionGradeBandModel | SoftSkillSelfAssessmentGradeBandModel | StatisticalGradeBandModel | TechnicalSkillSelfAssessmentGradeBandModel | TrCustomGradeBandModel;

export enum GradingMethod {
  Percentile = 'PERCENTILE',
  Sten = 'STEN'
}

export type HiringInviteFileUploadArgs = {
  endTime?: InputMaybe<Scalars['Date']['input']>;
  includeDeadlineInEmail?: InputMaybe<Scalars['Boolean']['input']>;
  projectId: Scalars['Int']['input'];
  sendEmail: Scalars['Boolean']['input'];
};

export type HiringInviteFileUploadLineModel = {
  __typename?: 'HiringInviteFileUploadLineModel';
  candidateEmail?: Maybe<Scalars['String']['output']>;
  candidateFirstName?: Maybe<Scalars['String']['output']>;
  candidateLastName?: Maybe<Scalars['String']['output']>;
  managerEmail?: Maybe<Scalars['String']['output']>;
};

export type HiringInviteFileUploadModel = {
  __typename?: 'HiringInviteFileUploadModel';
  apply: Scalars['Boolean']['output'];
  creates?: Maybe<Array<HiringInviteFileUploadLineModel>>;
  deletes?: Maybe<Array<HiringInviteFileUploadLineModel>>;
  endTime?: Maybe<Scalars['Date']['output']>;
  errorMessage?: Maybe<Scalars['String']['output']>;
  errorMessages?: Maybe<Array<Scalars['String']['output']>>;
  errors?: Maybe<Array<HiringInviteFileUploadLineModel>>;
  includeDeadlineInEmail?: Maybe<Scalars['Boolean']['output']>;
  noChanges?: Maybe<Array<HiringInviteFileUploadLineModel>>;
  projectId: Scalars['Int']['output'];
  sendEmail: Scalars['Boolean']['output'];
  updates?: Maybe<Array<HiringInviteFileUploadLineModel>>;
};

export type HiringManager = {
  externalId: Scalars['String']['input'];
};

export type IAssessmentDataQuestionModel = {
  questionSubId: Scalars['String']['input'];
  timestamp: Scalars['Date']['input'];
  traitId?: InputMaybe<Scalars['Int']['input']>;
};

export type IIgBehaviourResultScoreModel = {
  igEvaluation: IgBehaviourEvaluation;
};

export type IIgCustomResultScoreModel = {
  igCustomEvaluation: InterviewGuideCustomEvaluation;
};

export type IIgFinalDecisionResultScoreModel = {
  igFinalDecisionEvaluation: InterviewGuideFinalDecisionEvaluation;
};

export type IProjectRequestUserApprovalCreateOneArgs = {
  projectRequestUserId: Scalars['Int']['input'];
};

export type IProjectRequestUserApprovalUpdateOneArgs = {
  approvalRequestDate?: InputMaybe<Scalars['DateTime']['input']>;
  approvalStatus?: InputMaybe<ProjectRequestUserApprovalStatus>;
  id: Scalars['Int']['input'];
};

export type IProjectRequestUserCreateOneWithEmployeeCheckArgs = {
  approvalId?: InputMaybe<Scalars['Int']['input']>;
  email: Scalars['String']['input'];
  projectRequestId: Scalars['Int']['input'];
  type: ProjectRequestUserType;
};

export type IResultScoreFilterArgs = {
  key: Scalars['String']['input'];
  nDiscreetValues?: InputMaybe<Array<Scalars['Float']['input']>>;
  nRangingFrom?: InputMaybe<Scalars['Float']['input']>;
  nRangingTo?: InputMaybe<Scalars['Float']['input']>;
  sDiscreetValues?: InputMaybe<Array<Scalars['String']['input']>>;
  sRangingFrom?: InputMaybe<Scalars['String']['input']>;
  sRangingTo?: InputMaybe<Scalars['String']['input']>;
};

export type ISoftSkillSelfAssessmentScoreModel = {
  proficiency: SoftSkillSelfAssessmentProficiencyLevel;
};

export type IStatisticalResultScoreModel = {
  grade: Grade;
  percentile: Scalars['Float']['input'];
  stenScore: Scalars['Float']['input'];
  zScore: Scalars['Float']['input'];
};

export type ITechnicalSkillSelfAssessmentScoreModel = {
  technicalProficiency: TechnicalSkillSelfAssessmentProficiencyLevel;
};

export type ITrCustomResultScoreModel = {
  evaluation: TrCustomEvaluation;
  score: Scalars['Float']['input'];
};

export enum IdentityPermissionRole {
  Admin = 'ADMIN',
  AdminE2ETest = 'ADMIN_E2E_TEST',
  AllModules = 'ALL_MODULES',
  ApiManager = 'API_MANAGER',
  Authenticator = 'AUTHENTICATOR',
  Authorizer = 'AUTHORIZER',
  Candidate = 'CANDIDATE',
  CompanyAdmin = 'COMPANY_ADMIN',
  CompanyHiringManager = 'COMPANY_HIRING_MANAGER',
  CompanyHr = 'COMPANY_HR',
  CompanyMember = 'COMPANY_MEMBER',
  CompanyTalentTeam = 'COMPANY_TALENT_TEAM',
  HiringModule = 'HIRING_MODULE',
  Migrator = 'MIGRATOR',
  Scheduler = 'SCHEDULER',
  SzApi = 'SZ_API',
  SzSuperAdmin = 'SZ_SUPER_ADMIN',
  TrModule = 'TR_MODULE'
}

export enum IgBehaviourEvaluation {
  Good = 'GOOD',
  Na = 'NA',
  Poor = 'POOR'
}

export type IgBehaviourGradeBandModel = {
  __typename?: 'IgBehaviourGradeBandModel';
  displayText: Scalars['String']['output'];
  igEvaluation: IgBehaviourEvaluation;
  position: Scalars['Int']['output'];
};

export type IgBehaviourResultScoreModel = {
  __typename?: 'IgBehaviourResultScoreModel';
  igEvaluation: IgBehaviourEvaluation;
};

export type IgCategory = {
  __typename?: 'IgCategory';
  createdAt: Scalars['Date']['output'];
  deletedAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['Int']['output'];
  internalName: Scalars['String']['output'];
  interviewGuideCategories?: Maybe<Array<IgInterviewGuideCategory>>;
  isArchived: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};

export enum IgCategoryColour {
  Colour1 = 'COLOUR1',
  Colour2 = 'COLOUR2',
  Colour3 = 'COLOUR3',
  Colour4 = 'COLOUR4'
}

export type IgContent = {
  __typename?: 'IgContent';
  contentType: IgContentType;
  createdAt: Scalars['Date']['output'];
  deletedAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['Int']['output'];
  interviewGuide: IgInterviewGuide;
  interviewGuideId: Scalars['Int']['output'];
  isArchived: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  text: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};

export enum IgContentType {
  /** How to use the guide instructions  */
  HowToUse = 'HOW_TO_USE',
  /** Introduction on summary page */
  Introduction = 'INTRODUCTION'
}

export type IgCustomResultScoreModel = {
  __typename?: 'IgCustomResultScoreModel';
  igCustomEvaluation: InterviewGuideCustomEvaluation;
};

export type IgFinalDecisionResultScoreModel = {
  __typename?: 'IgFinalDecisionResultScoreModel';
  igFinalDecisionEvaluation: InterviewGuideFinalDecisionEvaluation;
};

export type IgInterviewGuide = {
  __typename?: 'IgInterviewGuide';
  contents?: Maybe<Array<IgContent>>;
  createdAt: Scalars['Date']['output'];
  deletedAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['Int']['output'];
  interviewGuideCategories?: Maybe<Array<IgInterviewGuideCategory>>;
  isArchived: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  ownerId: Scalars['Int']['output'];
  steps?: Maybe<Array<IgStep>>;
  updatedAt: Scalars['Date']['output'];
};

export type IgInterviewGuideCategory = {
  __typename?: 'IgInterviewGuideCategory';
  category: IgCategory;
  categoryId: Scalars['Int']['output'];
  colour?: Maybe<IgCategoryColour>;
  id: Scalars['Int']['output'];
  interviewGuide: IgInterviewGuide;
  interviewGuideId: Scalars['Int']['output'];
  order?: Maybe<Scalars['Int']['output']>;
};

export enum IgQuestionType {
  Dynamic = 'DYNAMIC',
  None = 'NONE',
  Static = 'STATIC'
}

export enum IgRenderBehaviourClassification {
  Development = 'DEVELOPMENT',
  Strength = 'STRENGTH'
}

export type IgRenderModel = {
  __typename?: 'IgRenderModel';
  author: User;
  authorId: Scalars['Int']['output'];
  createdAt: Scalars['Date']['output'];
  deletedAt?: Maybe<Scalars['Date']['output']>;
  feedback?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  interviewGuideId: Scalars['Int']['output'];
  lastStatusChange: Scalars['Date']['output'];
  pageStatus: IgRenderPageStatus;
  potentialRecipients: Array<User>;
  recipients: Array<IgRenderRecipientModel>;
  secondPageOpened: Scalars['Boolean']['output'];
  status: IgRenderStatus;
  subId: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};

export enum IgRenderPageStatus {
  OnPageOne = 'ON_PAGE_ONE',
  OnPageTwo = 'ON_PAGE_TWO'
}

export type IgRenderRecipientCreateOneArgs = {
  recipientId: Scalars['Int']['input'];
  renderId: Scalars['Int']['input'];
};

export type IgRenderRecipientModel = {
  __typename?: 'IgRenderRecipientModel';
  createdAt: Scalars['Date']['output'];
  deletedAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['Int']['output'];
  recipient: User;
  recipientId: Scalars['Int']['output'];
  render: IgRenderModel;
  renderId: Scalars['Int']['output'];
  subId: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};

export enum IgRenderStatus {
  InProgress = 'IN_PROGRESS',
  Opened = 'OPENED',
  Published = 'PUBLISHED'
}

export type IgSoftSkillDescriptionModel = {
  __typename?: 'IgSoftSkillDescriptionModel';
  header?: Maybe<InterviewGuideHeaderModel>;
  sections: Array<IgSoftSkillSectionModel>;
};

export type IgSoftSkillModel = {
  __typename?: 'IgSoftSkillModel';
  categoryId: Scalars['Int']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  score: Scalars['String']['output'];
};

export type IgSoftSkillSectionModel = {
  __typename?: 'IgSoftSkillSectionModel';
  name: Scalars['String']['output'];
  score: Scalars['String']['output'];
  softSkills: Array<IgSoftSkillModel>;
};

export type IgStep = {
  __typename?: 'IgStep';
  action?: Maybe<Scalars['String']['output']>;
  colour?: Maybe<IgCategoryColour>;
  createdAt: Scalars['Date']['output'];
  deletedAt?: Maybe<Scalars['Date']['output']>;
  durationInSeconds?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  internalName: Scalars['String']['output'];
  interviewGuide: IgInterviewGuide;
  interviewGuideId: Scalars['Int']['output'];
  isArchived: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  questionType: IgQuestionType;
  staticQuestionName?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Date']['output'];
};

export type InductiveItemModel = {
  __typename?: 'InductiveItemModel';
  isCompleted: Scalars['Boolean']['output'];
  question?: Maybe<InductiveQuestionModel>;
  remainingQuestions: Scalars['Int']['output'];
  remainingTime: Scalars['Int']['output'];
  /** @deprecated Please use new property `isCompleted` if you wish to know whether the assessment is completed or not! */
  testCandidateStatus: TestStatus;
  totalQuestions: Scalars['Int']['output'];
};

export type InductiveOptionModel = {
  __typename?: 'InductiveOptionModel';
  imageUrl: Scalars['String']['output'];
  key: Scalars['Int']['output'];
  subId: Scalars['String']['output'];
};

export type InductiveQuestionModel = {
  __typename?: 'InductiveQuestionModel';
  difficulty: Scalars['Float']['output'];
  imageUrls: Array<Maybe<Scalars['String']['output']>>;
  options: Array<InductiveOptionModel>;
  subId: Scalars['String']['output'];
  text: Scalars['String']['output'];
  timeLimit: Scalars['Int']['output'];
};

export type InputScoreModel = {
  customEvaluation?: InputMaybe<Scalars['String']['input']>;
  customScore?: InputMaybe<Scalars['Float']['input']>;
  grade?: InputMaybe<Grade>;
  percentile?: InputMaybe<Scalars['Float']['input']>;
  stenScore?: InputMaybe<Scalars['Float']['input']>;
  zScore?: InputMaybe<Scalars['Float']['input']>;
};

export type InterviewGuideBehaviourAssessmentEntryModel = {
  __typename?: 'InterviewGuideBehaviourAssessmentEntryModel';
  behaviour: BehaviourModel;
  id: Scalars['Int']['output'];
  result?: Maybe<ResultModel>;
  selected: InterviewGuideSelectedModel;
  textField: InterviewGuideTextFieldModel;
};

export type InterviewGuideBehaviourAssessmentModel = {
  __typename?: 'InterviewGuideBehaviourAssessmentModel';
  assessments: Array<InterviewGuideBehaviourAssessmentEntryModel>;
  gradeBands: Array<IgBehaviourGradeBandModel>;
  selectedAssessments: Array<Scalars['Int']['output']>;
};

export type InterviewGuideBehaviourModel = {
  __typename?: 'InterviewGuideBehaviourModel';
  behaviour: BehaviourModel;
  behaviourId: Scalars['Int']['output'];
  classification?: Maybe<IgRenderBehaviourClassification>;
  doneById: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  interviewGuideId: Scalars['Int']['output'];
};

export type InterviewGuideBodyModel = {
  __typename?: 'InterviewGuideBodyModel';
  sections: Array<InterviewGuideSectionUnion>;
};

export enum InterviewGuideCustomEvaluation {
  Exceptional = 'EXCEPTIONAL',
  Good = 'GOOD',
  Poor = 'POOR',
  Reasonable = 'REASONABLE',
  VeryGood = 'VERY_GOOD',
  VeryPoor = 'VERY_POOR'
}

export type InterviewGuideCustomGradeBandModel = {
  __typename?: 'InterviewGuideCustomGradeBandModel';
  displayText: Scalars['String']['output'];
  igCustomEvaluation: InterviewGuideCustomEvaluation;
  position: Scalars['Int']['output'];
};

export type InterviewGuideFeedbackModel = {
  __typename?: 'InterviewGuideFeedbackModel';
  doneById: Scalars['Int']['output'];
  feedback: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  interviewGuideId: Scalars['Int']['output'];
};

export enum InterviewGuideFinalDecisionEvaluation {
  Hire = 'HIRE',
  Reject = 'REJECT',
  TalentPool = 'TALENT_POOL'
}

export type InterviewGuideFinalDecisionGradeBandModel = {
  __typename?: 'InterviewGuideFinalDecisionGradeBandModel';
  displayText: Scalars['String']['output'];
  igFinalDecisionEvaluation: InterviewGuideFinalDecisionEvaluation;
  position: Scalars['Int']['output'];
};

export type InterviewGuideFreeTextSectionTabModel = {
  __typename?: 'InterviewGuideFreeTextSectionTabModel';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  sectionId: Scalars['Int']['output'];
  selected: InterviewGuideSelectedModel;
  textField: InterviewGuideTextFieldModel;
  title?: Maybe<Scalars['String']['output']>;
};

export type InterviewGuideHeaderModel = {
  __typename?: 'InterviewGuideHeaderModel';
  candidateCompletionDate?: Maybe<Scalars['DateTime']['output']>;
  companyName: Scalars['String']['output'];
  currentDate: Scalars['DateTime']['output'];
  doneForFirstName: Scalars['String']['output'];
  doneForLastName: Scalars['String']['output'];
  featuredSoftSkills: Array<Scalars['String']['output']>;
  projectName: Scalars['String']['output'];
  totalResultScore: StatisticalResultScoreModel;
};

export type InterviewGuideModel = {
  __typename?: 'InterviewGuideModel';
  body?: Maybe<InterviewGuideBodyModel>;
  header?: Maybe<InterviewGuideHeaderModel>;
  id: Scalars['Int']['output'];
  readonly: Scalars['Boolean']['output'];
  render: IgRenderModel;
  renders: Array<IgRenderModel>;
  stageCandidate: SmStageCandidateModel;
  stageCandidateId: Scalars['Int']['output'];
};

export type InterviewGuideNonPersistentSectionModel = {
  __typename?: 'InterviewGuideNonPersistentSectionModel';
  tabs: Array<InterviewGuideNonPersistentSectionTabModel>;
  timeRequirementInMinutes?: Maybe<Scalars['Int']['output']>;
  type: InterviewGuideSectionType;
};

export type InterviewGuideNonPersistentSectionTabModel = {
  __typename?: 'InterviewGuideNonPersistentSectionTabModel';
  description?: Maybe<Scalars['String']['output']>;
  selected: InterviewGuideSelectedModel;
  title?: Maybe<Scalars['String']['output']>;
};

export type InterviewGuidePageStatusModel = {
  __typename?: 'InterviewGuidePageStatusModel';
  doneById: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  interviewGuideId: Scalars['Int']['output'];
  secondPageOpened: Scalars['Boolean']['output'];
  status: IgRenderPageStatus;
};

export type InterviewGuideSectionModel = {
  __typename?: 'InterviewGuideSectionModel';
  id: Scalars['Int']['output'];
  interviewGuideId: Scalars['Int']['output'];
  tabs: Array<InterviewGuideFreeTextSectionTabModel>;
  timeRequirementInMinutes?: Maybe<Scalars['Int']['output']>;
  type: InterviewGuideSectionType;
};

export enum InterviewGuideSectionType {
  Intro = 'INTRO',
  Outro = 'OUTRO',
  SoftSkill = 'SOFT_SKILL',
  Technical = 'TECHNICAL'
}

export type InterviewGuideSectionUnion = InterviewGuideNonPersistentSectionModel | InterviewGuideSectionModel | InterviewGuideSoftSkillAssessmentSectionModel;

export type InterviewGuideSelectedModel = {
  __typename?: 'InterviewGuideSelectedModel';
  doneById: Scalars['Int']['output'];
  id: Scalars['Float']['output'];
  select: Scalars['Boolean']['output'];
};

export type InterviewGuideSoftSkillAssessmentSectionModel = {
  __typename?: 'InterviewGuideSoftSkillAssessmentSectionModel';
  groupTitle?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  interviewGuideId: Scalars['Int']['output'];
  softSkillGroupId: Scalars['Int']['output'];
  tabs: Array<InterviewGuideSoftSkillAssessmentSectionTabModel>;
  timeRequirementInMinutes?: Maybe<Scalars['Int']['output']>;
  type: InterviewGuideSectionType;
};

export type InterviewGuideSoftSkillAssessmentSectionTabModel = {
  __typename?: 'InterviewGuideSoftSkillAssessmentSectionTabModel';
  behaviourAssessment?: Maybe<InterviewGuideBehaviourAssessmentModel>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  mainQuestion: Scalars['String']['output'];
  sectionId: Scalars['Int']['output'];
  selected: InterviewGuideSelectedModel;
  softSkillId: Scalars['Int']['output'];
  subQuestions: Array<Scalars['String']['output']>;
  textField: InterviewGuideTextFieldModel;
  title?: Maybe<Scalars['String']['output']>;
};

export type InterviewGuideTextFieldModel = {
  __typename?: 'InterviewGuideTextFieldModel';
  doneById: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  prefillText?: Maybe<Scalars['String']['output']>;
  text: Scalars['String']['output'];
};

export type InterviewQuestionContentModel = {
  __typename?: 'InterviewQuestionContentModel';
  contextId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  mainQuestion: Scalars['String']['output'];
  subQuestions: Array<Scalars['String']['output']>;
};

export type InterviewQuestionReasonContentModel = {
  __typename?: 'InterviewQuestionReasonContentModel';
  contextId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  numLowerBound: Scalars['Int']['output'];
  roleLevel: ContentRoleLevel;
};

export type InterviewQuestionRoleLevel = {
  __typename?: 'InterviewQuestionRoleLevel';
  classification: ContentClassification;
  feedback?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  mainQuestion?: Maybe<Scalars['String']['output']>;
  reasonForQuestion?: Maybe<Scalars['String']['output']>;
  roleLevel: ContentRoleLevel;
  softSkill?: Maybe<SoftSkill>;
  softSkillId: Scalars['Float']['output'];
  subQuestions?: Maybe<Array<Scalars['String']['output']>>;
  summary?: Maybe<Scalars['String']['output']>;
  trait?: Maybe<Trait>;
  traitId: Scalars['Float']['output'];
};

export type InterviewQuestionRoleLevelPaginatedModel = {
  __typename?: 'InterviewQuestionRoleLevelPaginatedModel';
  count?: Maybe<Scalars['Float']['output']>;
  interviewQuestionContent?: Maybe<Array<InterviewQuestionRoleLevel>>;
};

export enum InvitationLastActionType {
  Accepted = 'ACCEPTED',
  Bounced = 'BOUNCED',
  Clicked = 'CLICKED',
  Deferred = 'DEFERRED',
  Delivered = 'DELIVERED',
  DispatchedToSendgrid = 'DISPATCHED_TO_SENDGRID',
  Dropped = 'DROPPED',
  NotSent = 'NOT_SENT',
  Opened = 'OPENED',
  Processed = 'PROCESSED'
}

export type InvitationModel = {
  __typename?: 'InvitationModel';
  companyId: Scalars['Float']['output'];
  email: Scalars['String']['output'];
  expiresAt?: Maybe<Scalars['Date']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['Float']['output'];
  invitationToken: Scalars['String']['output'];
  issuedAt: Scalars['Date']['output'];
  lastActionType?: Maybe<InvitationLastActionType>;
  lastName?: Maybe<Scalars['String']['output']>;
  status: InvitationStatusCode;
  targetId: Scalars['Float']['output'];
  updatedAt: Scalars['Date']['output'];
  url: Scalars['String']['output'];
};

export enum InvitationStatusCode {
  Completed = 'COMPLETED',
  Expired = 'EXPIRED',
  Pending = 'PENDING'
}

export type InvitationStatusResult = {
  __typename?: 'InvitationStatusResult';
  isCompleted: Scalars['Boolean']['output'];
  isExpired: Scalars['Boolean']['output'];
};

export enum InvitationType {
  Candidate = 'CANDIDATE',
  Company = 'COMPANY',
  TalentReview = 'TALENT_REVIEW'
}

export enum InviteType {
  Direct = 'DIRECT',
  Indirect = 'INDIRECT'
}

export type InvivitationTokenProcessingResult = {
  __typename?: 'InvivitationTokenProcessingResult';
  invitationProcessingResult: Scalars['String']['output'];
};

export enum IqFooterType {
  Hints = 'HINTS',
  IqFeedback = 'IQ_FEEDBACK',
  None = 'NONE'
}

export enum Language {
  Afar = 'AFAR',
  Afrikaans = 'AFRIKAANS',
  Akan = 'AKAN',
  Albanian = 'ALBANIAN',
  Amharic = 'AMHARIC',
  Arabic = 'ARABIC',
  Aragonese = 'ARAGONESE',
  Armenian = 'ARMENIAN',
  Assamese = 'ASSAMESE',
  Avaric = 'AVARIC',
  Avestan = 'AVESTAN',
  Aymara = 'AYMARA',
  Azerbaijani = 'AZERBAIJANI',
  Bambara = 'BAMBARA',
  Bashkir = 'BASHKIR',
  Basque = 'BASQUE',
  Belarusian = 'BELARUSIAN',
  Bengali = 'BENGALI',
  Bislama = 'BISLAMA',
  Bosnian = 'BOSNIAN',
  Breton = 'BRETON',
  Bulgarian = 'BULGARIAN',
  Burmese = 'BURMESE',
  CatalanValencian = 'CATALAN_VALENCIAN',
  CentralKhmer = 'CENTRAL_KHMER',
  Chamorro = 'CHAMORRO',
  Chechen = 'CHECHEN',
  ChichewaChewaNyanja = 'CHICHEWA_CHEWA_NYANJA',
  Chinese = 'CHINESE',
  Chuvash = 'CHUVASH',
  Cornish = 'CORNISH',
  Corsican = 'CORSICAN',
  Cree = 'CREE',
  Croatian = 'CROATIAN',
  Czech = 'CZECH',
  Danish = 'DANISH',
  DivehiDhivehiMaldivian = 'DIVEHI_DHIVEHI_MALDIVIAN',
  DutchFlemish = 'DUTCH_FLEMISH',
  Dzongkha = 'DZONGKHA',
  English = 'ENGLISH',
  Esperanto = 'ESPERANTO',
  Estonian = 'ESTONIAN',
  Ewe = 'EWE',
  Faroese = 'FAROESE',
  Fijian = 'FIJIAN',
  Finnish = 'FINNISH',
  French = 'FRENCH',
  Fulah = 'FULAH',
  Gaelic = 'GAELIC',
  Galician = 'GALICIAN',
  Ganda = 'GANDA',
  Georgian = 'GEORGIAN',
  German = 'GERMAN',
  GreekModern = 'GREEK_MODERN',
  Guarani = 'GUARANI',
  Gujarati = 'GUJARATI',
  Haitian = 'HAITIAN',
  Hausa = 'HAUSA',
  Hebrew = 'HEBREW',
  Herero = 'HERERO',
  Hindi = 'HINDI',
  HiriMotu = 'HIRI_MOTU',
  Hungarian = 'HUNGARIAN',
  Icelandic = 'ICELANDIC',
  Ido = 'IDO',
  Igbo = 'IGBO',
  Indonesian = 'INDONESIAN',
  Interlingua = 'INTERLINGUA',
  Interlingue = 'INTERLINGUE',
  Inuktitut = 'INUKTITUT',
  Inupiaq = 'INUPIAQ',
  Irish = 'IRISH',
  Italian = 'ITALIAN',
  Japanese = 'JAPANESE',
  Javanese = 'JAVANESE',
  KalaallisutGreenlandic = 'KALAALLISUT_GREENLANDIC',
  Kannada = 'KANNADA',
  Kanuri = 'KANURI',
  Kashmiri = 'KASHMIRI',
  Kazakh = 'KAZAKH',
  KikuyuGikuyu = 'KIKUYU_GIKUYU',
  Kinyarwanda = 'KINYARWANDA',
  KirghizKyrgyz = 'KIRGHIZ_KYRGYZ',
  Komi = 'KOMI',
  Kongo = 'KONGO',
  Korean = 'KOREAN',
  KuanyamaKwanyama = 'KUANYAMA_KWANYAMA',
  Kurdish = 'KURDISH',
  Lao = 'LAO',
  Latin = 'LATIN',
  Latvian = 'LATVIAN',
  LimburganLimburgerLimburgish = 'LIMBURGAN_LIMBURGER_LIMBURGISH',
  Lingala = 'LINGALA',
  Lithuanian = 'LITHUANIAN',
  LubaKatanga = 'LUBA_KATANGA',
  LuxembourgishLetzeburgesch = 'LUXEMBOURGISH_LETZEBURGESCH',
  Macedonian = 'MACEDONIAN',
  Malagasy = 'MALAGASY',
  Malay = 'MALAY',
  Malayalam = 'MALAYALAM',
  Maltese = 'MALTESE',
  Manx = 'MANX',
  Maori = 'MAORI',
  Marathi = 'MARATHI',
  Marshallese = 'MARSHALLESE',
  Mongolian = 'MONGOLIAN',
  Nauru = 'NAURU',
  NavajoNavaho = 'NAVAJO_NAVAHO',
  Ndonga = 'NDONGA',
  Nepali = 'NEPALI',
  NorthernSami = 'NORTHERN_SAMI',
  NorthNdebele = 'NORTH_NDEBELE',
  Norwegian = 'NORWEGIAN',
  NorwegianBokmal = 'NORWEGIAN_BOKMAL',
  NorwegianNynorsk = 'NORWEGIAN_NYNORSK',
  Occitan = 'OCCITAN',
  Ojibwa = 'OJIBWA',
  OldSlavonic = 'OLD_SLAVONIC',
  Oriya = 'ORIYA',
  Oromo = 'OROMO',
  OssetianOssetic = 'OSSETIAN_OSSETIC',
  Pali = 'PALI',
  PashtoPushto = 'PASHTO_PUSHTO',
  Persian = 'PERSIAN',
  Polish = 'POLISH',
  Portuguese = 'PORTUGUESE',
  PunjabiPanjabi = 'PUNJABI_PANJABI',
  Quechua = 'QUECHUA',
  RomanianMoldavian = 'ROMANIAN_MOLDAVIAN',
  Romansh = 'ROMANSH',
  Rundi = 'RUNDI',
  Russian = 'RUSSIAN',
  Samoan = 'SAMOAN',
  Sango = 'SANGO',
  Sanskrit = 'SANSKRIT',
  Sardinian = 'SARDINIAN',
  Serbian = 'SERBIAN',
  Shona = 'SHONA',
  SichuanYiNuosu = 'SICHUAN_YI_NUOSU',
  Sindhi = 'SINDHI',
  SinhalaSinhalese = 'SINHALA_SINHALESE',
  Slovak = 'SLOVAK',
  Slovenian = 'SLOVENIAN',
  Somali = 'SOMALI',
  SouthernSotho = 'SOUTHERN_SOTHO',
  SouthNdebele = 'SOUTH_NDEBELE',
  SpanishCastilian = 'SPANISH_CASTILIAN',
  Sundanese = 'SUNDANESE',
  Swahili = 'SWAHILI',
  Swati = 'SWATI',
  Swedish = 'SWEDISH',
  Tagalog = 'TAGALOG',
  Tahitian = 'TAHITIAN',
  Tajik = 'TAJIK',
  Tamil = 'TAMIL',
  Tatar = 'TATAR',
  Telugu = 'TELUGU',
  Thai = 'THAI',
  Tibetan = 'TIBETAN',
  Tigrinya = 'TIGRINYA',
  Tonga = 'TONGA',
  Tsonga = 'TSONGA',
  Tswana = 'TSWANA',
  Turkish = 'TURKISH',
  Turkmen = 'TURKMEN',
  Twi = 'TWI',
  Uighur = 'UIGHUR',
  Ukrainian = 'UKRAINIAN',
  Urdu = 'URDU',
  Uzbek = 'UZBEK',
  Venda = 'VENDA',
  Vietnamese = 'VIETNAMESE',
  Volapuk = 'VOLAPUK',
  Walloon = 'WALLOON',
  Welsh = 'WELSH',
  WesternFrisian = 'WESTERN_FRISIAN',
  Wolof = 'WOLOF',
  Xhosa = 'XHOSA',
  Yiddish = 'YIDDISH',
  Yoruba = 'YORUBA',
  ZhuangChuang = 'ZHUANG_CHUANG',
  Zulu = 'ZULU'
}

export type LongTextField = Field & {
  __typename?: 'LongTextField';
  fieldInstanceType: FieldInstanceType;
  fieldOwnerId?: Maybe<Scalars['Int']['output']>;
  fieldOwnerName?: Maybe<Scalars['String']['output']>;
  fieldOwnerType?: Maybe<FieldOwnerType>;
  fieldType: FieldType;
  formManagerType: FormManagerType;
  hint?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isArchived: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  question?: Maybe<Scalars['String']['output']>;
  settings?: Maybe<FieldSettingsModel>;
  textBoxHeight?: Maybe<Scalars['Int']['output']>;
  txtData?: Maybe<Scalars['String']['output']>;
};

export enum MeasurementConstructType {
  Behavior = 'BEHAVIOR',
  CalculatedOnSsSummary = 'CALCULATED_ON_SS_SUMMARY',
  Cognitive = 'COGNITIVE',
  Values = 'VALUES'
}

export type MfaResult = {
  __typename?: 'MfaResult';
  mfaAccessToken: Scalars['String']['output'];
};

export type MultiSelectField = Field & {
  __typename?: 'MultiSelectField';
  fieldInstanceType: FieldInstanceType;
  fieldOwnerId?: Maybe<Scalars['Int']['output']>;
  fieldOwnerName?: Maybe<Scalars['String']['output']>;
  fieldOwnerType?: Maybe<FieldOwnerType>;
  fieldType: FieldType;
  formManagerType: FormManagerType;
  hint?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isArchived: Scalars['Boolean']['output'];
  isFreetextField?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  question?: Maybe<Scalars['String']['output']>;
  selectOptions?: Maybe<Scalars['String']['output']>;
  settings?: Maybe<FieldSettingsModel>;
  txtData?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  AnswerCreate?: Maybe<Answer>;
  AnswerDelete?: Maybe<DeleteResult>;
  AnswerUpdate?: Maybe<Answer>;
  ApiKeyCompanyDisable: Scalars['Boolean']['output'];
  ApiKeyCompanyGenerate: AmApiKeyModel;
  ApiKeyDisable: Scalars['Boolean']['output'];
  ApiKeyDisableUser: Scalars['Boolean']['output'];
  ApiKeyUserGenerate: AmApiKeyModel;
  ApiUserCreateOne: ApiUserModel;
  ApiUserResetClientSecret: ApiUserModel;
  ApiUserUpdateOne: ApiUserModel;
  AssessmentDataCreateOne: AssessmentDataModel;
  AssessmentDataSoftDeleteOne: DeleteResult;
  AssessmentDataUpdateOne: AssessmentDataModel;
  BaseMethodTestCreateMany: Array<BaseMethodTest>;
  BaseMethodTestCreateOne: BaseMethodTest;
  BaseMethodTestDeleteMany: DeleteResult;
  BaseMethodTestDeleteOne: DeleteResult;
  BaseMethodTestSoftDeleteMany: DeleteResult;
  BaseMethodTestSoftDeleteOne: DeleteResult;
  BaseMethodTestUpdateMany: Array<BaseMethodTest>;
  BaseMethodTestUpdateOne: BaseMethodTest;
  BehaviourContentCreateOne: BehaviourContentModel;
  BehaviourContentDeleteOne: DeleteResult;
  BehaviourContentUpdateOne: BehaviourContentModel;
  BehaviourCreateOne: BehaviourModel;
  BehaviourDeleteOne: DeleteResult;
  BehaviourUpdateOne: BehaviourModel;
  CalibrationCandidateCreateOne: CalibrationCandidateModel;
  CalibrationCandidateDeleteOne: DeleteResult;
  CalibrationCandidateRestoreOne: CalibrationCandidateModel;
  CalibrationCandidateRollBackOne: CalibrationCandidateModel;
  CalibrationCandidateSoftDeleteOne: DeleteResult;
  CalibrationCandidateUpdateOne: CalibrationCandidateModel;
  CalibrationFileUpload: CalibrationFileUploadModel;
  CompanyCreateUser: User;
  CompanyEmployeeCreate: CompanyEmployeeModel;
  CompanyEmployeeDeleteOne: DeleteResult;
  CompanyEmployeeFileUpload: CompanyEmployeeFileUploadModel;
  CompanyEmployeeSyncWithUserCompanyInfo?: Maybe<Array<CompanyEmployeeModel>>;
  CompanyEmployeeUpdate: CompanyEmployeeModel;
  CompanyResendInvite: Scalars['Boolean']['output'];
  CompanyRoleUpsert: CompanyRole;
  CompanySignatureCreateOne: CompanySignatureModel;
  CompanySignatureDeleteOne: DeleteResult;
  CompanySignatureSoftDeleteOne: DeleteResult;
  CompanySignatureUpdateOne: CompanySignatureModel;
  E2eCookie: AuthenticationResultE2eCookie;
  /** Create a new stage action for an external assessment and a stage. */
  EAStageActionCreateOne: EaStageActionModel;
  /** Mark the stage action as deleted, effectively removing it from the stage. */
  EAStageActionSoftDeleteOne: EaStageActionModel;
  EmailTemplateCreateOne: EmailTemplateModel;
  EntityLanguageCreateOne: EntityLanguageModel;
  EntityLanguageDeleteOne: DeleteResult;
  EntityLanguageUpdateOne: EntityLanguageModel;
  /** Create a new external assessment in the bank. Also create the platform assessments, skills and company platform links */
  ExternalAssessmentCreateOne: ExternalAssessmentModel;
  FieldCreate?: Maybe<Field>;
  FieldDelete?: Maybe<DeleteResult>;
  FieldUpdate?: Maybe<Field>;
  FormAddField?: Maybe<Form>;
  FormBuilderCreate?: Maybe<FormBuilder>;
  FormBuilderUpdate?: Maybe<FormBuilder>;
  FormCandidateCreateOne: FormCandidateModel;
  FormCandidateDeleteOne: DeleteResult;
  FormCandidateResetOne: FormCandidateModel;
  FormCandidateUpdateOne: FormCandidateModel;
  FormCreate?: Maybe<Form>;
  FormDelete?: Maybe<DeleteResult>;
  FormFieldRemove?: Maybe<Form>;
  FormFieldUpdate?: Maybe<Form>;
  FormUpdate?: Maybe<Form>;
  HiringInviteFileUpload: HiringInviteFileUploadModel;
  IgBehaviourAssessmentEntryRemoveOne: DeleteResult;
  IgCategoryCreate?: Maybe<IgCategory>;
  IgCategoryDeleteOne?: Maybe<DeleteResult>;
  IgCategoryUpdate?: Maybe<IgCategory>;
  IgInterviewGuideCategoryCreate?: Maybe<IgInterviewGuideCategory>;
  IgInterviewGuideCategoryDeleteOne?: Maybe<DeleteResult>;
  IgInterviewGuideCategoryUpdate?: Maybe<IgInterviewGuideCategory>;
  IgInterviewGuideCreate?: Maybe<IgInterviewGuide>;
  IgInterviewGuideDeleteOne?: Maybe<DeleteResult>;
  IgInterviewGuideUpdate?: Maybe<IgInterviewGuide>;
  IgRenderUpdateOne?: Maybe<IgRenderModel>;
  IgStepCreate?: Maybe<IgStep>;
  IgStepDeleteOne?: Maybe<DeleteResult>;
  IgStepUpdate?: Maybe<IgStep>;
  InterviewGuideBehaviourUpdateOne: InterviewGuideBehaviourModel;
  InterviewGuideDeleteOne: DeleteResult;
  InterviewGuideFeedbackRegenerateOne: InterviewGuideFeedbackModel;
  InterviewGuideFeedbackSubmitOne: InterviewGuideFeedbackModel;
  InterviewGuideFeedbackUpdateOne: InterviewGuideFeedbackModel;
  InterviewGuideGenerateOne: InterviewGuideModel;
  InterviewGuideOpenSecondPage: Scalars['Boolean']['output'];
  InterviewGuideRecipientCreateManyAndSendEmails: Array<IgRenderRecipientModel>;
  InterviewGuideRecipientDeleteOne: DeleteResult;
  InterviewGuideSectionMarkTabAsSelected: InterviewGuideSectionUnion;
  InterviewGuideSelectedUpdateOne: InterviewGuideSelectedModel;
  InterviewGuideSoftDeleteOne: DeleteResult;
  InterviewGuideTextFieldUpdateOne: InterviewGuideTextFieldModel;
  InterviewQuestionContentCreateOne: InterviewQuestionContentModel;
  InterviewQuestionContentDeleteOne: DeleteResult;
  InterviewQuestionContentUpdateOne: InterviewQuestionContentModel;
  InterviewQuestionReasonContentCreateOne: InterviewQuestionReasonContentModel;
  InterviewQuestionReasonContentDeleteOne: DeleteResult;
  InterviewQuestionReasonContentUpdateOne: InterviewQuestionReasonContentModel;
  InterviewQuestionRoleLevelContentUpdate?: Maybe<InterviewQuestionRoleLevel>;
  InvitationCreate: InvitationModel;
  InvitationDeleteMany: DeleteResult;
  InvitationDeleteOne: DeleteResult;
  InvitationUpdate: InvitationModel;
  ProjectDelete: DeleteResult;
  ProjectRequestCreateOne: ProjectRequestModel;
  ProjectRequestDeleteOne: DeleteResult;
  ProjectRequestFileUpload: Scalars['String']['output'];
  ProjectRequestFileUploadDeleteOne: DeleteResult;
  ProjectRequestFileUploadSoftDeleteOne: DeleteResult;
  ProjectRequestLinkProject: ProjectRequestModel;
  ProjectRequestRequestJobSpecification: Scalars['Boolean']['output'];
  ProjectRequestRequestManagerSurvey: Scalars['Boolean']['output'];
  ProjectRequestRestoreOne?: Maybe<ProjectRequestModel>;
  ProjectRequestSoftDeleteOne: DeleteResult;
  ProjectRequestUpdateOne: ProjectRequestModel;
  ProjectRequestUserApprovalCreateMany: Array<ProjectRequestUserApprovalModel>;
  ProjectRequestUserApprovalCreateOne: ProjectRequestUserApprovalModel;
  ProjectRequestUserApprovalDeleteOne: DeleteResult;
  ProjectRequestUserApprovalSoftDeleteOne: DeleteResult;
  ProjectRequestUserApprovalUpdateMany: Array<ProjectRequestUserApprovalModel>;
  ProjectRequestUserApprovalUpdateOne: ProjectRequestUserApprovalModel;
  ProjectRequestUserCreateMany: Array<ProjectRequestUserModel>;
  ProjectRequestUserCreateOne: ProjectRequestUserModel;
  ProjectRequestUserDeleteOne: DeleteResult;
  ProjectRequestUserSoftDeleteOne: DeleteResult;
  ProjectRequestUserUpdateOne: ProjectRequestUserModel;
  ProjectSetCompanySignature: Project;
  ProjectTrackerAcceptIndirectInvitation: ProjectTrackerModel;
  QCalcGetNextQuestion: QCalcResponse;
  ReportAssignmentCreate?: Maybe<ReportAssignment>;
  ReportAssignmentDelete?: Maybe<DeleteResult>;
  ReportAssignmentUpdate?: Maybe<ReportAssignment>;
  ReportConfigCreate?: Maybe<ReportConfig>;
  ReportConfigDelete?: Maybe<DeleteResult>;
  ReportCopy?: Maybe<Report>;
  ReportCreate?: Maybe<Report>;
  ReportDelete?: Maybe<DeleteResult>;
  ReportRenderCreate?: Maybe<ReportRender>;
  ReportUpdate?: Maybe<Report>;
  ReportUpdateIsArchived?: Maybe<Report>;
  RequeueRejectedEvent?: Maybe<DlxRejectedEvent>;
  RespondantFormDeleteByRespondantAndAssociatedId?: Maybe<DeleteResult>;
  RespondantFormDeleteByRespondantId?: Maybe<DeleteResult>;
  RespondantFormUpdate?: Maybe<RespondantForm>;
  ResultCreateManySoftSkillsProfile: Array<ResultModel>;
  ResultCreateManySoftSkillsProfileFromSc: Array<ResultModel>;
  ResultCreateManyStatistical: Array<ResultModel>;
  ResultCreateManyTechnicalSkillsProfileFromSc: Array<ResultModel>;
  ResultCreateManyTrCustom: Array<ResultModel>;
  ResultCreateOneBehaviour: ResultModel;
  ResultCreateOneIgCustom: ResultModel;
  ResultCreateOneIgFinalDecision: ResultModel;
  ResultCreateOnePspSoftSkill: ResultModel;
  ResultCreateOnePspTechnicalSkill: ResultModel;
  ResultCreateOneSoftSkillsProfile: Array<ResultModel>;
  ResultCreateOneSoftSkillsProfileFromSc: Array<ResultModel>;
  ResultCreateOneStatistical: ResultModel;
  ResultCreateOneTechnicalSkillsProfileFromSc: Array<ResultModel>;
  ResultCreateOneTrCustom: ResultModel;
  ResultDeleteMany: DeleteResult;
  ResultDeleteOne: DeleteResult;
  ResultRestoreOne: ResultModel;
  ResultSoftDeleteMany: DeleteResult;
  ResultSoftDeleteOne: DeleteResult;
  ResultUpdateOne: ResultModel;
  ResultUpdateOneBehaviour: ResultModel;
  RssAssessmentCandidateCreateMany: Array<RssAssessmentCandidateModel>;
  RssAssessmentCandidateCreateOne: RssAssessmentCandidateModel;
  RssAssessmentCandidateDeleteMany: DeleteResult;
  RssAssessmentCandidateDeleteOne: DeleteResult;
  RssAssessmentCandidateReopenAllSubmittedForStageCandidate: Array<RssAssessmentCandidateModel>;
  RssAssessmentCandidateSoftDeleteMany: DeleteResult;
  RssAssessmentCandidateSoftDeleteOne: DeleteResult;
  RssAssessmentCandidateSubmitOne: RssAssessmentCandidateModel;
  RssAssessmentCandidateUpdateMany: Array<RssAssessmentCandidateModel>;
  RssAssessmentCandidateUpdateOne: RssAssessmentCandidateModel;
  RssAssessmentCreateMany: Array<RssAssessmentModel>;
  RssAssessmentCreateOne: RssAssessmentModel;
  RssAssessmentDeleteMany: DeleteResult;
  RssAssessmentDeleteOne: DeleteResult;
  RssAssessmentSoftDeleteMany: DeleteResult;
  RssAssessmentSoftDeleteOne: DeleteResult;
  RssAssessmentUpdateMany: Array<RssAssessmentModel>;
  RssAssessmentUpdateOne: RssAssessmentModel;
  SkillCategoryCreateMany: Array<SkillCategory>;
  SkillCategoryCreateOne: SkillCategory;
  SkillCategoryDeleteMany: DeleteResult;
  SkillCategoryDeleteOne: DeleteResult;
  SkillCategoryRestoreOne?: Maybe<SkillCategory>;
  SkillCategorySoftDeleteMany: DeleteResult;
  SkillCategorySoftDeleteOne: DeleteResult;
  SkillCategoryUpdateMany: Array<SkillCategory>;
  SkillCategoryUpdateOne: SkillCategory;
  SmInviteHiring: Array<SmStageCandidateModel>;
  SmInviteTR: Array<SmStageCandidateModel>;
  SoftSkillAddTrait?: Maybe<SoftSkill>;
  SoftSkillBulkUpdateTraits?: Maybe<SoftSkill>;
  SoftSkillCreate?: Maybe<SoftSkill>;
  SoftSkillDelete?: Maybe<DeleteResult>;
  SoftSkillDeleteTrait?: Maybe<SoftSkill>;
  SoftSkillRemoveIcon: SoftSkill;
  SoftSkillRoleLevelContentUpdate?: Maybe<SoftSkillRoleLevelContent>;
  SoftSkillSuccessProfileContentCreate?: Maybe<SoftSkillSuccessProfileContent>;
  SoftSkillSuccessProfileContentDelete?: Maybe<DeleteResult>;
  SoftSkillSuccessProfileContentUpdate?: Maybe<SoftSkillSuccessProfileContent>;
  SoftSkillTypeSuccessProfileContentCreate?: Maybe<SoftSkillTypeSuccessProfileContent>;
  SoftSkillTypeSuccessProfileContentDelete?: Maybe<DeleteResult>;
  SoftSkillTypeSuccessProfileContentUpdate?: Maybe<SoftSkillTypeSuccessProfileContent>;
  SoftSkillUpdate?: Maybe<SoftSkill>;
  SoftSkillUpdateIsArchived?: Maybe<SoftSkill>;
  SoftSkillUpdateTrait?: Maybe<SoftSkill>;
  SoftSkillUploadIcon: SoftSkill;
  StageCandidateAcceptIndirectInvitation: SmStageCandidateModel;
  StageCandidateCopyTestResults: Scalars['Boolean']['output'];
  StageCandidateCreate: SmStageCandidateModel;
  StageCandidateDeleteLogsCreateOne: StageCandidateDeleteLogs;
  StageCandidateDeleteLogsDeleteOne: DeleteResult;
  StageCandidateDeleteLogsSoftDeleteOne: DeleteResult;
  StageCandidateDeleteLogsUpdateOne: StageCandidateDeleteLogs;
  StageCandidateDeleteOne: DeleteResult;
  StageCandidateDeleteTalentReviewRequest: Scalars['Boolean']['output'];
  StageCandidateReprocessOne: Scalars['Boolean']['output'];
  StageCandidateRequestTalentReview: Scalars['Boolean']['output'];
  StageCandidateResetOne: Scalars['Boolean']['output'];
  StageCandidateUpdate: SmStageCandidateModel;
  StageCreate: SmStageModel;
  StageCreateCsvReport: StageGetCsvReportModel;
  StageDeleteMany: DeleteResult;
  StageDeleteOne: DeleteResult;
  StageReorderMany: Array<SmStageModel>;
  StageUpdate: SmStageModel;
  /** @deprecated use SuccessProfileCreateOne instead */
  SuccessProfileCreate: SuccessProfile;
  SuccessProfileCreateOne: SuccessProfile;
  SuccessProfileDelete: DeleteResult;
  SuccessProfileDeleteMany?: Maybe<DeleteResult>;
  SuccessProfileExplanationDelete: DeleteResult;
  SuccessProfileExplanationSetStatusComplete?: Maybe<SuccessProfileExplanation>;
  SuccessProfileExplantionCreate: SuccessProfileExplanation;
  SuccessProfileSoftSkillExplantionUpdate: SuccessProfileSoftSkillExplanation;
  SuccessProfileSoftSkillTypeExplantionUpdate: SuccessProfileSoftSkillTypeExplanation;
  SuccessProfileSoftSkillsOverwrite: SuccessProfile;
  SuccessProfileTechnicalSkillCreateMany: Array<SuccessProfileTechnicalSkill>;
  SuccessProfileTechnicalSkillCreateOne: SuccessProfileTechnicalSkill;
  SuccessProfileTechnicalSkillDeleteMany: DeleteResult;
  SuccessProfileTechnicalSkillDeleteOne: DeleteResult;
  SuccessProfileTechnicalSkillOverwriteMany: Array<SuccessProfileTechnicalSkill>;
  SuccessProfileTechnicalSkillSoftDeleteMany: DeleteResult;
  SuccessProfileTechnicalSkillSoftDeleteOne: DeleteResult;
  SuccessProfileTechnicalSkillUpdateMany: Array<SuccessProfileTechnicalSkill>;
  SuccessProfileTechnicalSkillUpdateOne: SuccessProfileTechnicalSkill;
  SuccessProfileTechnicalSkillsOverwrite: SuccessProfile;
  /** @deprecated use SuccessProfileUpdateOne instead */
  SuccessProfileUpdate: SuccessProfile;
  SuccessProfileUpdateOne: SuccessProfile;
  SzSkillsMergeCreateMany: Array<SzSkillsMerge>;
  SzSkillsMergeCreateOne: SzSkillsMerge;
  SzSkillsMergeDeleteMany: DeleteResult;
  SzSkillsMergeDeleteOne: DeleteResult;
  SzSkillsMergeSoftDeleteMany: DeleteResult;
  SzSkillsMergeSoftDeleteOne: DeleteResult;
  SzSkillsMergeUpdateMany: Array<SzSkillsMerge>;
  SzSkillsMergeUpdateOne: SzSkillsMerge;
  TalentReviewFileUpload: TalentReviewFileUploadModel;
  TechnicalSkillCreateMany: Array<TechnicalSkill>;
  TechnicalSkillCreateOne: TechnicalSkill;
  TechnicalSkillDeleteMany: DeleteResult;
  TechnicalSkillDeleteOne: DeleteResult;
  TechnicalSkillIconUpload: Scalars['String']['output'];
  TechnicalSkillRestoreOne?: Maybe<TechnicalSkill>;
  TechnicalSkillSoftDeleteMany: DeleteResult;
  TechnicalSkillSoftDeleteOne: DeleteResult;
  TechnicalSkillUpdateMany: Array<TechnicalSkill>;
  TechnicalSkillUpdateOne: TechnicalSkill;
  TestCandidateRemoveOne: Scalars['Boolean']['output'];
  TestCandidateReprocessScores: Scalars['Boolean']['output'];
  TestCandidateResetOne: Scalars['Boolean']['output'];
  TestCandidateStartSzPracticeTest: StartSzTestModel;
  TestCandidateStartSzTest: TmTestCandidateModel;
  TestCandidateStartTpTest: StartTpTestModel;
  TestCandidateUpdateOne: TmTestCandidateModel;
  TmTestCreateOne: TmTestModel;
  TmTestUpdateOne: TmTestModel;
  TraitCreate?: Maybe<Trait>;
  TraitDelete?: Maybe<DeleteResult>;
  TraitRoleLevelContentUpdate?: Maybe<TraitRoleLevelContent>;
  TraitSoftSkillContextCreateOne: TraitSoftSkillContextModel;
  TraitSoftSkillContextDeleteMany: DeleteResult;
  TraitSoftSkillContextDeleteOne: DeleteResult;
  TraitTestTypeReplaceMany?: Maybe<Array<TraitTestTypeModel>>;
  TraitUpdate?: Maybe<Trait>;
  TraitUpdateIsArchived?: Maybe<Trait>;
  UserCompanyInfoCreate: UserCompanyInfo;
  UserCompanyInfoDeleteOne: DeleteResult;
  UserCompanyInfoUpdate: UserCompanyInfo;
  UserCreate: User;
  UserDelete: DeleteResult;
  UserDeleteByEmail: DeleteResult;
  UserRoleCreate?: Maybe<UserRole>;
  UserRoleDelete: DeleteResult;
  UserRoleUpdate: UserRole;
  UserSettingsCreate: UserSettings;
  UserSettingsDeleteOne: DeleteResult;
  UserSettingsUpdate: UserSettings;
  UserUpdate: User;
  WidgetConfigCreate?: Maybe<WidgetConfig>;
  WidgetConfigDelete?: Maybe<DeleteResult>;
  WidgetConfigUpdate?: Maybe<WidgetConfig>;
  WidgetConfigUpdateMany?: Maybe<Array<WidgetConfig>>;
  WidgetCreate?: Maybe<Widget>;
  WidgetDelete?: Maybe<DeleteResult>;
  WidgetDeleteScreenShot: Widget;
  WidgetOptionCreate?: Maybe<WidgetOption>;
  WidgetOptionDelete?: Maybe<DeleteResult>;
  WidgetOptionUpdate?: Maybe<WidgetOption>;
  WidgetOptionUpdateIsArchived?: Maybe<WidgetOption>;
  WidgetRenderCreate?: Maybe<WidgetRender>;
  WidgetRenderDelete?: Maybe<DeleteResult>;
  WidgetUpdate?: Maybe<Widget>;
  WidgetUpdateIsArchived?: Maybe<Widget>;
  WidgetUploadScreenShot: Widget;
  authenticate: AuthenticationResult;
  authenticateApi: AuthenticationResult;
  createCompany: Company;
  createProject: Project;
  createProjectFile: ProjectFile;
  deauthenticate: Scalars['Boolean']['output'];
  deleteCompany: Scalars['Boolean']['output'];
  editProject: Project;
  editProjectArchiving: Project;
  editProjectCandidateReportState: Project;
  editProjectState: Project;
  mfaAccessToken: MfaResult;
  mfaAuthenticate: AuthenticationResultCookie;
  processInvitation: InvivitationTokenProcessingResult;
  registerAccount: AuthenticationResult;
  requestMfaCode: Scalars['Boolean']['output'];
  requestPasswordRecovery: Scalars['Boolean']['output'];
  requestTokenRefresh: AuthenticationResult;
  retriveTpManualCandidates: Scalars['Boolean']['output'];
  updateCompany: Company;
  updateIdentityPassword: Scalars['Boolean']['output'];
  uploadCompanyLogo: Scalars['String']['output'];
  uploadFile: UploadResult;
};


export type MutationAnswerCreateArgs = {
  associatedId: Scalars['Int']['input'];
  fieldId: Scalars['Int']['input'];
  formId: Scalars['Int']['input'];
  respondantId: Scalars['Int']['input'];
  response: Scalars['String']['input'];
};


export type MutationAnswerDeleteArgs = {
  id: Scalars['Int']['input'];
};


export type MutationAnswerUpdateArgs = {
  associatedId?: InputMaybe<Scalars['Int']['input']>;
  fieldId?: InputMaybe<Scalars['Int']['input']>;
  formId?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
  respondantId?: InputMaybe<Scalars['Int']['input']>;
  response?: InputMaybe<Scalars['String']['input']>;
};


export type MutationApiKeyCompanyDisableArgs = {
  companyId: Scalars['Int']['input'];
  permission?: InputMaybe<IdentityPermissionRole>;
};


export type MutationApiKeyCompanyGenerateArgs = {
  companyId: Scalars['Int']['input'];
  permission: IdentityPermissionRole;
};


export type MutationApiKeyDisableArgs = {
  key: Scalars['String']['input'];
};


export type MutationApiKeyDisableUserArgs = {
  userEmail?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  userSubId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationApiKeyUserGenerateArgs = {
  userEmail?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  userSubId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationApiUserCreateOneArgs = {
  companyId: Scalars['Int']['input'];
  hasClientSecret?: InputMaybe<Scalars['Boolean']['input']>;
  ownerId: Scalars['Int']['input'];
  ownerType: ApiUserOwnerType;
};


export type MutationApiUserResetClientSecretArgs = {
  clientId?: InputMaybe<Scalars['String']['input']>;
  companyId?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  deletedAt?: InputMaybe<Scalars['Date']['input']>;
  hasClientSecret?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ownerId?: InputMaybe<Scalars['Int']['input']>;
  ownerType?: InputMaybe<ApiUserOwnerType>;
  puppetUserId?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
};


export type MutationApiUserUpdateOneArgs = {
  clientId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  deletedAt?: InputMaybe<Scalars['Date']['input']>;
  hasClientSecret?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  ownerId?: InputMaybe<Scalars['Int']['input']>;
  ownerType?: InputMaybe<ApiUserOwnerType>;
  puppetUserId?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
};


export type MutationAssessmentDataCreateOneArgs = {
  allowedTimePerSection?: InputMaybe<Scalars['Int']['input']>;
  completedAt?: InputMaybe<Scalars['Date']['input']>;
  isPractice?: InputMaybe<Scalars['Boolean']['input']>;
  normGroupType?: InputMaybe<NormGroupType>;
  roleLevel?: InputMaybe<ContentRoleLevel>;
  startingAbilityLowerBound?: InputMaybe<Scalars['Float']['input']>;
  startingAbilityUpperBound?: InputMaybe<Scalars['Float']['input']>;
  startingQuestions?: InputMaybe<Array<IAssessmentDataQuestionModel>>;
  testCandidateId: Scalars['Int']['input'];
};


export type MutationAssessmentDataSoftDeleteOneArgs = {
  allowedTimePerSection?: InputMaybe<Scalars['Int']['input']>;
  completedAt?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isPractice?: InputMaybe<Scalars['Boolean']['input']>;
  nQuestionsPerTrait?: InputMaybe<Scalars['Int']['input']>;
  normGroupType?: InputMaybe<NormGroupType>;
  roleLevel?: InputMaybe<ContentRoleLevel>;
  startingAbilityLowerBound?: InputMaybe<Scalars['Float']['input']>;
  startingAbilityUpperBound?: InputMaybe<Scalars['Float']['input']>;
  startingQuestions?: InputMaybe<Array<IAssessmentDataQuestionModel>>;
  testCandidateId?: InputMaybe<Scalars['Int']['input']>;
  traitIds?: InputMaybe<Array<Scalars['Int']['input']>>;
};


export type MutationAssessmentDataUpdateOneArgs = {
  allowedTimePerSection?: InputMaybe<Scalars['Int']['input']>;
  completedAt?: InputMaybe<Scalars['Date']['input']>;
  id: Scalars['Int']['input'];
  isPractice?: InputMaybe<Scalars['Boolean']['input']>;
  nQuestionsPerTrait?: InputMaybe<Scalars['Int']['input']>;
  normGroupType?: InputMaybe<NormGroupType>;
  roleLevel?: InputMaybe<ContentRoleLevel>;
  startingAbilityLowerBound?: InputMaybe<Scalars['Float']['input']>;
  startingAbilityUpperBound?: InputMaybe<Scalars['Float']['input']>;
  startingQuestions?: InputMaybe<Array<IAssessmentDataQuestionModel>>;
  traitIds?: InputMaybe<Array<Scalars['Int']['input']>>;
};


export type MutationBaseMethodTestCreateManyArgs = {
  dto: Array<BaseMethodTestCreateOneArgs>;
};


export type MutationBaseMethodTestCreateOneArgs = {
  someEnum: BaseMethodTestSomeEnum;
  someFlag: Scalars['Boolean']['input'];
};


export type MutationBaseMethodTestDeleteManyArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  someEnum?: InputMaybe<BaseMethodTestSomeEnum>;
  someEnums?: InputMaybe<Array<BaseMethodTestSomeEnum>>;
  someFlag?: InputMaybe<Scalars['Boolean']['input']>;
  someFlags?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  subId?: InputMaybe<Scalars['String']['input']>;
  subIds?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type MutationBaseMethodTestDeleteOneArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  someEnum?: InputMaybe<BaseMethodTestSomeEnum>;
  someFlag?: InputMaybe<Scalars['Boolean']['input']>;
  subId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationBaseMethodTestSoftDeleteManyArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  someEnum?: InputMaybe<BaseMethodTestSomeEnum>;
  someEnums?: InputMaybe<Array<BaseMethodTestSomeEnum>>;
  someFlag?: InputMaybe<Scalars['Boolean']['input']>;
  someFlags?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  subId?: InputMaybe<Scalars['String']['input']>;
  subIds?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type MutationBaseMethodTestSoftDeleteOneArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  someEnum?: InputMaybe<BaseMethodTestSomeEnum>;
  someFlag?: InputMaybe<Scalars['Boolean']['input']>;
  subId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationBaseMethodTestUpdateManyArgs = {
  dto: Array<BaseMethodTestUpdateOneArgs>;
};


export type MutationBaseMethodTestUpdateOneArgs = {
  id: Scalars['Int']['input'];
  someEnum?: InputMaybe<BaseMethodTestSomeEnum>;
  someFlag?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationBehaviourContentCreateOneArgs = {
  behaviourId: Scalars['Int']['input'];
  negativeSummary: Scalars['String']['input'];
  positiveSummary: Scalars['String']['input'];
  roleLevel?: InputMaybe<ContentRoleLevel>;
};


export type MutationBehaviourContentDeleteOneArgs = {
  behaviourId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  negativeSummary?: InputMaybe<Scalars['String']['input']>;
  positiveSummary?: InputMaybe<Scalars['String']['input']>;
  roleLevel?: InputMaybe<ContentRoleLevel>;
};


export type MutationBehaviourContentUpdateOneArgs = {
  behaviourId?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
  negativeSummary?: InputMaybe<Scalars['String']['input']>;
  positiveSummary?: InputMaybe<Scalars['String']['input']>;
  roleLevel?: InputMaybe<ContentRoleLevel>;
};


export type MutationBehaviourCreateOneArgs = {
  contextIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  internalName: Scalars['String']['input'];
};


export type MutationBehaviourDeleteOneArgs = {
  contextIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
};


export type MutationBehaviourUpdateOneArgs = {
  contextIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  id: Scalars['Int']['input'];
  internalName?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCalibrationCandidateCreateOneArgs = {
  stageCandidateId: Scalars['Int']['input'];
};


export type MutationCalibrationCandidateDeleteOneArgs = {
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  deletedAt?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  lastAdjustedById?: InputMaybe<Scalars['Int']['input']>;
  stageCandidateId?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<CalibrationCandidateStatus>;
  subId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
};


export type MutationCalibrationCandidateRestoreOneArgs = {
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  deletedAt?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  lastAdjustedById?: InputMaybe<Scalars['Int']['input']>;
  stageCandidateId?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<CalibrationCandidateStatus>;
  subId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
};


export type MutationCalibrationCandidateRollBackOneArgs = {
  id: Scalars['Int']['input'];
  status: CalibrationCandidateStatus;
};


export type MutationCalibrationCandidateSoftDeleteOneArgs = {
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  deletedAt?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  lastAdjustedById?: InputMaybe<Scalars['Int']['input']>;
  stageCandidateId?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<CalibrationCandidateStatus>;
  subId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
};


export type MutationCalibrationCandidateUpdateOneArgs = {
  id: Scalars['Int']['input'];
  lastAdjustedById?: InputMaybe<Scalars['Int']['input']>;
  stageCandidateId?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<CalibrationCandidateStatus>;
};


export type MutationCalibrationFileUploadArgs = {
  apply: Scalars['Boolean']['input'];
  args: CalibrationFileUploadArgs;
  file: Scalars['Upload']['input'];
};


export type MutationCompanyCreateUserArgs = {
  companyId: Scalars['Float']['input'];
  email: Scalars['String']['input'];
  externalId?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  language: Language;
  lastName?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<IdentityPermissionRole>;
  roles?: InputMaybe<Array<IdentityPermissionRole>>;
  sendInvite: Scalars['Boolean']['input'];
};


export type MutationCompanyEmployeeCreateArgs = {
  companyId: Scalars['Int']['input'];
  customFields?: InputMaybe<UserCompanyInfoCustomFieldsArgs>;
  department?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  employeeId: Scalars['String']['input'];
  endDate?: InputMaybe<Scalars['Date']['input']>;
  firstName: Scalars['String']['input'];
  hrManagerEmployeeId?: InputMaybe<Scalars['String']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  lastName: Scalars['String']['input'];
  startDate?: InputMaybe<Scalars['Date']['input']>;
};


export type MutationCompanyEmployeeDeleteOneArgs = {
  id: Scalars['Int']['input'];
};


export type MutationCompanyEmployeeFileUploadArgs = {
  apply: Scalars['Boolean']['input'];
  args: CompanyEmployeeFileUploadArgs;
  file: Scalars['Upload']['input'];
};


export type MutationCompanyEmployeeSyncWithUserCompanyInfoArgs = {
  companyId?: InputMaybe<Scalars['Int']['input']>;
  companyIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  customFields?: InputMaybe<UserCompanyInfoCustomFieldsArgs>;
  department?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emails?: InputMaybe<Array<Scalars['String']['input']>>;
  employeeId?: InputMaybe<Scalars['String']['input']>;
  employeeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  hrManagerEmployeeId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};


export type MutationCompanyEmployeeUpdateArgs = {
  companyId?: InputMaybe<Scalars['Int']['input']>;
  customFields?: InputMaybe<UserCompanyInfoCustomFieldsArgs>;
  department?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  employeeId?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  hrManagerEmployeeId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Float']['input'];
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};


export type MutationCompanyResendInviteArgs = {
  companyId: Scalars['Float']['input'];
  userId: Scalars['Float']['input'];
};


export type MutationCompanyRoleUpsertArgs = {
  companyId: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  roleId: Scalars['Int']['input'];
  twoFactorEnabled?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCompanySignatureCreateOneArgs = {
  companyId: Scalars['Int']['input'];
  isDefault: Scalars['Boolean']['input'];
  signature: Scalars['String']['input'];
  signatureEmail: Scalars['String']['input'];
};


export type MutationCompanySignatureDeleteOneArgs = {
  id: Scalars['Int']['input'];
};


export type MutationCompanySignatureSoftDeleteOneArgs = {
  id: Scalars['Int']['input'];
};


export type MutationCompanySignatureUpdateOneArgs = {
  id: Scalars['Int']['input'];
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  signature?: InputMaybe<Scalars['String']['input']>;
  signatureEmail?: InputMaybe<Scalars['String']['input']>;
};


export type MutationE2eCookieArgs = {
  email: Scalars['String']['input'];
};


export type MutationEaStageActionCreateOneArgs = {
  companyId: Scalars['Int']['input'];
  externalAssessmentId: Scalars['Int']['input'];
  stageId: Scalars['Int']['input'];
};


export type MutationEaStageActionSoftDeleteOneArgs = {
  companyId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  stageId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationEmailTemplateCreateOneArgs = {
  language?: InputMaybe<Language>;
  subType?: InputMaybe<EmailTemplateSubType>;
  templateId: Scalars['String']['input'];
  type: EmailTemplateType;
};


export type MutationEntityLanguageCreateOneArgs = {
  entityId: Scalars['Int']['input'];
  entityType: EntityType;
  language: Language;
};


export type MutationEntityLanguageDeleteOneArgs = {
  entityId?: InputMaybe<Scalars['Int']['input']>;
  entityType?: InputMaybe<EntityType>;
  id?: InputMaybe<Scalars['Int']['input']>;
  language?: InputMaybe<Language>;
};


export type MutationEntityLanguageUpdateOneArgs = {
  id: Scalars['Int']['input'];
  language?: InputMaybe<Language>;
};


export type MutationExternalAssessmentCreateOneArgs = {
  companyId?: InputMaybe<Scalars['Float']['input']>;
  eaCompanyPlatform?: InputMaybe<EaCompanyPlatformCreateOneArgs>;
  eaCompanyPlatformId?: InputMaybe<Scalars['Float']['input']>;
  eaPlatformAssessments: Array<EaPlatformAssessmentCreateOneArgs>;
  eaSkills?: InputMaybe<Array<EaSkillCreateOneArgs>>;
  estimatedDurationInMinutes?: InputMaybe<Scalars['Float']['input']>;
  externalPlatformType: ExternalPlatformType;
  name: Scalars['String']['input'];
};


export type MutationFieldCreateArgs = {
  fieldInstanceType: FieldInstanceType;
  fieldOwnerId?: InputMaybe<Scalars['Int']['input']>;
  fieldOwnerType: FieldOwnerType;
  fieldType: FieldType;
  formManagerType: FormManagerType;
  hint?: InputMaybe<Scalars['String']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  question?: InputMaybe<Scalars['String']['input']>;
  selectOptions?: InputMaybe<Scalars['String']['input']>;
  settings?: InputMaybe<FieldSettingsArgs>;
};


export type MutationFieldDeleteArgs = {
  id: Scalars['Int']['input'];
};


export type MutationFieldUpdateArgs = {
  hint?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  question?: InputMaybe<Scalars['String']['input']>;
  selectOptions?: InputMaybe<Scalars['String']['input']>;
  settings?: InputMaybe<FieldSettingsArgs>;
};


export type MutationFormAddFieldArgs = {
  displayOrder?: InputMaybe<Scalars['Int']['input']>;
  fieldId: Scalars['Int']['input'];
  formId: Scalars['Int']['input'];
  isOptional: Scalars['Boolean']['input'];
};


export type MutationFormBuilderCreateArgs = {
  addFields?: InputMaybe<Array<CreateFormFieldByFieldIdArgs>>;
  formManagerType: FormManagerType;
  formOwnerId: Scalars['Int']['input'];
  formType: FormType;
  name: Scalars['String']['input'];
};


export type MutationFormBuilderUpdateArgs = {
  addFields?: InputMaybe<Array<CreateFormFieldByFieldIdArgs>>;
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  removeFields?: InputMaybe<Array<DeleteFormFieldByFieldIdArgs>>;
  updateFields?: InputMaybe<Array<UpdateFormFieldByFieldIdArgs>>;
};


export type MutationFormCandidateCreateOneArgs = {
  formId: Scalars['Int']['input'];
  stageCandidateId: Scalars['Int']['input'];
};


export type MutationFormCandidateDeleteOneArgs = {
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  deletedAt?: InputMaybe<Scalars['Date']['input']>;
  formId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  stageCandidateId?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<FormCandidateStatus>;
  subId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
};


export type MutationFormCandidateResetOneArgs = {
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  deletedAt?: InputMaybe<Scalars['Date']['input']>;
  formId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  stageCandidateId?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<FormCandidateStatus>;
  subId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
};


export type MutationFormCandidateUpdateOneArgs = {
  formId?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
  stageCandidateId?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<FormCandidateStatus>;
};


export type MutationFormCreateArgs = {
  formManagerType: FormManagerType;
  formOwnerId: Scalars['Int']['input'];
  formType: FormType;
  name: Scalars['String']['input'];
};


export type MutationFormDeleteArgs = {
  id: Scalars['Int']['input'];
};


export type MutationFormFieldRemoveArgs = {
  fieldId: Scalars['Int']['input'];
  formId: Scalars['Int']['input'];
};


export type MutationFormFieldUpdateArgs = {
  displayOrder?: InputMaybe<Scalars['Int']['input']>;
  formFieldId?: InputMaybe<Scalars['Int']['input']>;
  formId?: InputMaybe<Scalars['Int']['input']>;
  isOptional?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationFormUpdateArgs = {
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationHiringInviteFileUploadArgs = {
  apply: Scalars['Boolean']['input'];
  args: HiringInviteFileUploadArgs;
  file: Scalars['Upload']['input'];
};


export type MutationIgBehaviourAssessmentEntryRemoveOneArgs = {
  baEntryId?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  deletedAt?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  renderId?: InputMaybe<Scalars['Int']['input']>;
  subId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
};


export type MutationIgCategoryCreateArgs = {
  internalName: Scalars['String']['input'];
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
};


export type MutationIgCategoryDeleteOneArgs = {
  id: Scalars['Int']['input'];
};


export type MutationIgCategoryUpdateArgs = {
  id: Scalars['Int']['input'];
  internalName?: InputMaybe<Scalars['String']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationIgInterviewGuideCategoryCreateArgs = {
  categoryId: Scalars['Int']['input'];
  colour: IgCategoryColour;
  interviewGuideId: Scalars['Int']['input'];
  order: Scalars['Int']['input'];
};


export type MutationIgInterviewGuideCategoryDeleteOneArgs = {
  id: Scalars['Int']['input'];
};


export type MutationIgInterviewGuideCategoryUpdateArgs = {
  colour?: InputMaybe<IgCategoryColour>;
  id: Scalars['Int']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationIgInterviewGuideCreateArgs = {
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  ownerId: Scalars['Int']['input'];
};


export type MutationIgInterviewGuideDeleteOneArgs = {
  id: Scalars['Int']['input'];
};


export type MutationIgInterviewGuideUpdateArgs = {
  id: Scalars['Int']['input'];
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationIgRenderUpdateOneArgs = {
  authorId?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
  interviewGuideId?: InputMaybe<Scalars['Int']['input']>;
  pageStatus?: InputMaybe<IgRenderPageStatus>;
  secondPageOpened?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<IgRenderStatus>;
};


export type MutationIgStepCreateArgs = {
  action?: InputMaybe<Scalars['String']['input']>;
  colour?: InputMaybe<IgCategoryColour>;
  durationInSeconds?: InputMaybe<Scalars['Int']['input']>;
  internalName: Scalars['String']['input'];
  interviewGuideId: Scalars['Int']['input'];
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  order: Scalars['Int']['input'];
  questionType: IgQuestionType;
  staticQuestionName?: InputMaybe<Scalars['String']['input']>;
};


export type MutationIgStepDeleteOneArgs = {
  id: Scalars['Int']['input'];
};


export type MutationIgStepUpdateArgs = {
  action?: InputMaybe<Scalars['String']['input']>;
  colour?: InputMaybe<IgCategoryColour>;
  durationInSeconds?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
  internalName?: InputMaybe<Scalars['String']['input']>;
  interviewGuideId?: InputMaybe<Scalars['Int']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  questionType?: InputMaybe<IgQuestionType>;
  staticQuestionName?: InputMaybe<Scalars['String']['input']>;
};


export type MutationInterviewGuideBehaviourUpdateOneArgs = {
  behaviourId?: InputMaybe<Scalars['Int']['input']>;
  classification?: InputMaybe<IgRenderBehaviourClassification>;
  doneById?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
  interviewGuideId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationInterviewGuideDeleteOneArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  stageCandidateId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationInterviewGuideFeedbackRegenerateOneArgs = {
  doneById?: InputMaybe<Scalars['Int']['input']>;
  feedback?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  interviewGuideId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationInterviewGuideFeedbackSubmitOneArgs = {
  developmentBehaviours?: InputMaybe<Array<Scalars['String']['input']>>;
  doneById?: InputMaybe<Scalars['Int']['input']>;
  feedback?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  interviewGuideId?: InputMaybe<Scalars['Int']['input']>;
  strengthBehaviours?: InputMaybe<Array<Scalars['String']['input']>>;
  userEdited?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationInterviewGuideFeedbackUpdateOneArgs = {
  doneById?: InputMaybe<Scalars['Int']['input']>;
  feedback?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  interviewGuideId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationInterviewGuideGenerateOneArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  renderId?: InputMaybe<Scalars['Int']['input']>;
  stageCandidateId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationInterviewGuideOpenSecondPageArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  renderId?: InputMaybe<Scalars['Int']['input']>;
  stageCandidateId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationInterviewGuideRecipientCreateManyAndSendEmailsArgs = {
  dto: Array<IgRenderRecipientCreateOneArgs>;
};


export type MutationInterviewGuideRecipientDeleteOneArgs = {
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  deletedAt?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  recipientId?: InputMaybe<Scalars['Int']['input']>;
  renderId?: InputMaybe<Scalars['Int']['input']>;
  subId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
};


export type MutationInterviewGuideSectionMarkTabAsSelectedArgs = {
  doneById: Scalars['Int']['input'];
  id: Scalars['Int']['input'];
  tabId: Scalars['Int']['input'];
};


export type MutationInterviewGuideSelectedUpdateOneArgs = {
  behaviourAssessmentEntryId?: InputMaybe<Scalars['Int']['input']>;
  doneById?: InputMaybe<Scalars['Int']['input']>;
  forTab: Scalars['Boolean']['input'];
  id: Scalars['Int']['input'];
  sectionTabId?: InputMaybe<Scalars['Int']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationInterviewGuideSoftDeleteOneArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  stageCandidateId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationInterviewGuideTextFieldUpdateOneArgs = {
  behaviourAssessmentEntryId?: InputMaybe<Scalars['Int']['input']>;
  doneById?: InputMaybe<Scalars['Int']['input']>;
  forTab: Scalars['Boolean']['input'];
  id: Scalars['Int']['input'];
  sectionTabId?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};


export type MutationInterviewQuestionContentCreateOneArgs = {
  contextId: Scalars['Int']['input'];
  mainQuestion: Scalars['String']['input'];
  roleLevel: ContentRoleLevel;
  subQuestions: Array<Scalars['String']['input']>;
};


export type MutationInterviewQuestionContentDeleteOneArgs = {
  contextId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  mainQuestion?: InputMaybe<Scalars['String']['input']>;
  roleLevel?: InputMaybe<ContentRoleLevel>;
  subQuestions?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type MutationInterviewQuestionContentUpdateOneArgs = {
  contextId?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
  mainQuestion?: InputMaybe<Scalars['String']['input']>;
  roleLevel?: InputMaybe<ContentRoleLevel>;
  subQuestions?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type MutationInterviewQuestionReasonContentCreateOneArgs = {
  contextId: Scalars['Int']['input'];
  numLowerBound: Scalars['Int']['input'];
  roleLevel: ContentRoleLevel;
};


export type MutationInterviewQuestionReasonContentDeleteOneArgs = {
  contextId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  numLowerBound?: InputMaybe<Scalars['Int']['input']>;
  roleLevel?: InputMaybe<ContentRoleLevel>;
};


export type MutationInterviewQuestionReasonContentUpdateOneArgs = {
  contextId?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
  numLowerBound?: InputMaybe<Scalars['Int']['input']>;
  roleLevel?: InputMaybe<ContentRoleLevel>;
};


export type MutationInterviewQuestionRoleLevelContentUpdateArgs = {
  feedback?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  mainQuestion?: InputMaybe<Scalars['String']['input']>;
  reasonForQuestion?: InputMaybe<Scalars['String']['input']>;
  subQuestions?: InputMaybe<Array<Scalars['String']['input']>>;
  summary?: InputMaybe<Scalars['String']['input']>;
};


export type MutationInvitationCreateArgs = {
  companyId: Scalars['Int']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  expiresAt?: InputMaybe<Scalars['Date']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  invitationType: InvitationType;
  language?: InputMaybe<Language>;
  lastActionType?: InputMaybe<InvitationLastActionType>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  shouldCreateAccount?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<InvitationStatusCode>;
  targetId: Scalars['Int']['input'];
};


export type MutationInvitationDeleteManyArgs = {
  ids: Array<Scalars['Int']['input']>;
};


export type MutationInvitationDeleteOneArgs = {
  id: Scalars['Int']['input'];
};


export type MutationInvitationUpdateArgs = {
  companyId?: InputMaybe<Scalars['Int']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  expiresAt?: InputMaybe<Scalars['Date']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  invitationType?: InputMaybe<InvitationType>;
  language?: InputMaybe<Language>;
  lastActionType?: InputMaybe<InvitationLastActionType>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  shouldCreateAccount?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<InvitationStatusCode>;
  targetId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationProjectDeleteArgs = {
  id: Scalars['Int']['input'];
};


export type MutationProjectRequestCreateOneArgs = {
  approvalRequestDate?: InputMaybe<Scalars['DateTime']['input']>;
  companyId: Scalars['Int']['input'];
  creatorId: Scalars['Int']['input'];
  projectName: Scalars['String']['input'];
  status?: InputMaybe<ProjectRequestStatus>;
};


export type MutationProjectRequestDeleteOneArgs = {
  id: Scalars['Int']['input'];
};


export type MutationProjectRequestFileUploadArgs = {
  args: ProjectRequestFileUploadArgs;
  file: Scalars['Upload']['input'];
};


export type MutationProjectRequestFileUploadDeleteOneArgs = {
  id: Scalars['Int']['input'];
};


export type MutationProjectRequestFileUploadSoftDeleteOneArgs = {
  blobId?: InputMaybe<Scalars['Int']['input']>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  projectRequestId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationProjectRequestLinkProjectArgs = {
  id: Scalars['Int']['input'];
  projectId: Scalars['Int']['input'];
};


export type MutationProjectRequestRequestJobSpecificationArgs = {
  id: Scalars['Int']['input'];
  projectRequestUserIds: Array<Scalars['Int']['input']>;
};


export type MutationProjectRequestRequestManagerSurveyArgs = {
  id: Scalars['Int']['input'];
  projectRequestUserIds: Array<Scalars['Int']['input']>;
  surveyLink: Scalars['String']['input'];
};


export type MutationProjectRequestRestoreOneArgs = {
  approvalRequestDate?: InputMaybe<Scalars['DateTime']['input']>;
  companyId?: InputMaybe<Scalars['Int']['input']>;
  creatorId?: InputMaybe<Scalars['Int']['input']>;
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectName?: InputMaybe<Scalars['String']['input']>;
  relationDepth?: InputMaybe<RelationDepth>;
  status?: InputMaybe<ProjectRequestStatus>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type MutationProjectRequestSoftDeleteOneArgs = {
  approvalRequestDate?: InputMaybe<Scalars['DateTime']['input']>;
  companyId?: InputMaybe<Scalars['Int']['input']>;
  creatorId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectName?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ProjectRequestStatus>;
};


export type MutationProjectRequestUpdateOneArgs = {
  approvalRequestDate?: InputMaybe<Scalars['DateTime']['input']>;
  companyId?: InputMaybe<Scalars['Int']['input']>;
  creatorId?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectName?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ProjectRequestStatus>;
};


export type MutationProjectRequestUserApprovalCreateManyArgs = {
  dto: Array<IProjectRequestUserApprovalCreateOneArgs>;
};


export type MutationProjectRequestUserApprovalCreateOneArgs = {
  approvalRequestDate?: InputMaybe<Scalars['DateTime']['input']>;
  approvalStatus?: InputMaybe<ProjectRequestUserApprovalStatus>;
  projectRequestUserId: Scalars['Int']['input'];
};


export type MutationProjectRequestUserApprovalDeleteOneArgs = {
  id: Scalars['Int']['input'];
};


export type MutationProjectRequestUserApprovalSoftDeleteOneArgs = {
  approvalRequestDate?: InputMaybe<Scalars['DateTime']['input']>;
  approvalStatus?: InputMaybe<ProjectRequestUserApprovalStatus>;
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationProjectRequestUserApprovalUpdateManyArgs = {
  dto: Array<IProjectRequestUserApprovalUpdateOneArgs>;
};


export type MutationProjectRequestUserApprovalUpdateOneArgs = {
  approvalRequestDate?: InputMaybe<Scalars['DateTime']['input']>;
  approvalStatus?: InputMaybe<ProjectRequestUserApprovalStatus>;
  id: Scalars['Int']['input'];
};


export type MutationProjectRequestUserCreateManyArgs = {
  dto: Array<IProjectRequestUserCreateOneWithEmployeeCheckArgs>;
};


export type MutationProjectRequestUserCreateOneArgs = {
  approvalId?: InputMaybe<Scalars['Int']['input']>;
  email: Scalars['String']['input'];
  projectRequestId: Scalars['Int']['input'];
  type: ProjectRequestUserType;
};


export type MutationProjectRequestUserDeleteOneArgs = {
  id: Scalars['Int']['input'];
};


export type MutationProjectRequestUserSoftDeleteOneArgs = {
  approvalId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  projectRequestId?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<ProjectRequestUserType>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationProjectRequestUserUpdateOneArgs = {
  approvalId?: InputMaybe<Scalars['Int']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  projectRequestId?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<ProjectRequestUserType>;
};


export type MutationProjectSetCompanySignatureArgs = {
  companySignatureId?: InputMaybe<Scalars['Int']['input']>;
  projectId: Scalars['Int']['input'];
};


export type MutationProjectTrackerAcceptIndirectInvitationArgs = {
  hiringManagers?: InputMaybe<Array<HiringManager>>;
  projectId: Scalars['Int']['input'];
};


export type MutationQCalcGetNextQuestionArgs = {
  answers?: InputMaybe<Array<AssessmentDataAnswerGqlModel>>;
  assessmentId: Scalars['Int']['input'];
  nQuestions?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationReportAssignmentCreateArgs = {
  assignedId: Scalars['Int']['input'];
  assignedType: RAssignedType;
  reportId: Scalars['Int']['input'];
};


export type MutationReportAssignmentDeleteArgs = {
  id: Scalars['Int']['input'];
};


export type MutationReportAssignmentUpdateArgs = {
  assignedId: Scalars['Int']['input'];
  assignedType: RAssignedType;
  id: Scalars['Int']['input'];
  reportId: Scalars['Int']['input'];
};


export type MutationReportConfigCreateArgs = {
  newPageBefore?: InputMaybe<Scalars['Boolean']['input']>;
  position: Scalars['Int']['input'];
  reportId: Scalars['Int']['input'];
  widgetConfigsToUpsert?: InputMaybe<Array<WidgetConfigUpsertOneBatchedWithReportConfigArgs>>;
  widgetId: Scalars['Int']['input'];
};


export type MutationReportConfigDeleteArgs = {
  id: Scalars['Int']['input'];
};


export type MutationReportCopyArgs = {
  copyReportId: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  ownerId: Scalars['Int']['input'];
  ownerType: ReportOwnerType;
  subType?: InputMaybe<ReportSubType>;
  type: ReportType;
};


export type MutationReportCreateArgs = {
  name: Scalars['String']['input'];
  ownerId: Scalars['Int']['input'];
  ownerType: ReportOwnerType;
  subType?: InputMaybe<ReportSubType>;
  type: ReportType;
};


export type MutationReportDeleteArgs = {
  id: Scalars['Int']['input'];
};


export type MutationReportRenderCreateArgs = {
  dataSourceId: Scalars['Int']['input'];
  reportId: Scalars['Int']['input'];
  reportRenderType: ReportRenderType;
};


export type MutationReportUpdateArgs = {
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  reportConfigsToCreate?: InputMaybe<Array<ReportConfigCreateOneBatchedWithReportArgs>>;
  reportConfigsToDelete?: InputMaybe<Array<DeleteByIdArgs>>;
  reportConfigsToUpdate?: InputMaybe<Array<ReportConfigUpdateOneArgs>>;
  subType?: InputMaybe<ReportSubType>;
  type?: InputMaybe<ReportType>;
};


export type MutationReportUpdateIsArchivedArgs = {
  id: Scalars['Int']['input'];
  isArchived: Scalars['Boolean']['input'];
};


export type MutationRequeueRejectedEventArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRespondantFormDeleteByRespondantAndAssociatedIdArgs = {
  associatedId: Scalars['Int']['input'];
  id: Scalars['Int']['input'];
};


export type MutationRespondantFormDeleteByRespondantIdArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRespondantFormUpdateArgs = {
  answers?: InputMaybe<Array<UpdateRespondantFormAnswerArgs>>;
  associatedId: Scalars['Int']['input'];
  formOwnerId: Scalars['Int']['input'];
  formType: FormType;
  respondantId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationResultCreateManySoftSkillsProfileArgs = {
  args: Array<ResultCreateOneRoleSkillsSelfAssessmentArgs>;
};


export type MutationResultCreateManySoftSkillsProfileFromScArgs = {
  args: Array<ResultSoftSkillProfileCreateOneFromSc>;
};


export type MutationResultCreateManyStatisticalArgs = {
  args: Array<ResultCreateOneStatisticalArgs>;
};


export type MutationResultCreateManyTechnicalSkillsProfileFromScArgs = {
  args: Array<ResultTechnicalSkillProfileCreateOneFromSc>;
};


export type MutationResultCreateManyTrCustomArgs = {
  args: Array<ResultCreateOneTrCustomArgs>;
};


export type MutationResultCreateOneBehaviourArgs = {
  copiedFrom?: InputMaybe<Scalars['Int']['input']>;
  doneBy: Scalars['Int']['input'];
  doneFor: Scalars['Int']['input'];
  label?: InputMaybe<Scalars['String']['input']>;
  manuallyAdjustedBy?: InputMaybe<Scalars['Int']['input']>;
  measurementId: Scalars['Int']['input'];
  measurementType: ResultMeasurementType;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  score: IIgBehaviourResultScoreModel;
};


export type MutationResultCreateOneIgCustomArgs = {
  copiedFrom?: InputMaybe<Scalars['Int']['input']>;
  doneBy: Scalars['Int']['input'];
  doneFor: Scalars['Int']['input'];
  label?: InputMaybe<Scalars['String']['input']>;
  manuallyAdjustedBy?: InputMaybe<Scalars['Int']['input']>;
  measurementId: Scalars['Int']['input'];
  measurementType: ResultMeasurementType;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  score: IIgCustomResultScoreModel;
};


export type MutationResultCreateOneIgFinalDecisionArgs = {
  copiedFrom?: InputMaybe<Scalars['Int']['input']>;
  doneBy: Scalars['Int']['input'];
  doneFor: Scalars['Int']['input'];
  label?: InputMaybe<Scalars['String']['input']>;
  manuallyAdjustedBy?: InputMaybe<Scalars['Int']['input']>;
  measurementId: Scalars['Int']['input'];
  measurementType: ResultMeasurementType;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  score: IIgFinalDecisionResultScoreModel;
};


export type MutationResultCreateOnePspSoftSkillArgs = {
  score: ISoftSkillSelfAssessmentScoreModel;
  softSkillId: Scalars['Int']['input'];
};


export type MutationResultCreateOnePspTechnicalSkillArgs = {
  score: ITechnicalSkillSelfAssessmentScoreModel;
  technicalSkillId: Scalars['Int']['input'];
};


export type MutationResultCreateOneSoftSkillsProfileArgs = {
  copiedFrom?: InputMaybe<Scalars['Int']['input']>;
  doneBy: Scalars['Int']['input'];
  doneFor: Scalars['Int']['input'];
  label?: InputMaybe<Scalars['String']['input']>;
  manuallyAdjustedBy?: InputMaybe<Scalars['Int']['input']>;
  measurementId: Scalars['Int']['input'];
  measurementType: ResultMeasurementType;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  score: ISoftSkillSelfAssessmentScoreModel;
};


export type MutationResultCreateOneSoftSkillsProfileFromScArgs = {
  score: ISoftSkillSelfAssessmentScoreModel;
  softSkillId: Scalars['Int']['input'];
  stageCandidateId: Scalars['Int']['input'];
};


export type MutationResultCreateOneStatisticalArgs = {
  copiedFrom?: InputMaybe<Scalars['Int']['input']>;
  doneBy: Scalars['Int']['input'];
  doneFor: Scalars['Int']['input'];
  label?: InputMaybe<Scalars['String']['input']>;
  manuallyAdjustedBy?: InputMaybe<Scalars['Int']['input']>;
  measurementId: Scalars['Int']['input'];
  measurementType: ResultMeasurementType;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  score: IStatisticalResultScoreModel;
};


export type MutationResultCreateOneTechnicalSkillsProfileFromScArgs = {
  score: ITechnicalSkillSelfAssessmentScoreModel;
  stageCandidateId: Scalars['Int']['input'];
  technicalSkillId: Scalars['Int']['input'];
};


export type MutationResultCreateOneTrCustomArgs = {
  copiedFrom?: InputMaybe<Scalars['Int']['input']>;
  doneBy: Scalars['Int']['input'];
  doneFor: Scalars['Int']['input'];
  label?: InputMaybe<Scalars['String']['input']>;
  manuallyAdjustedBy?: InputMaybe<Scalars['Int']['input']>;
  measurementId: Scalars['Int']['input'];
  measurementType: ResultMeasurementType;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  score: ITrCustomResultScoreModel;
};


export type MutationResultDeleteManyArgs = {
  copiedFrom?: InputMaybe<Scalars['Int']['input']>;
  copiedFroms?: InputMaybe<Array<Scalars['Int']['input']>>;
  doneBy?: InputMaybe<Scalars['Int']['input']>;
  doneBys?: InputMaybe<Array<Scalars['Int']['input']>>;
  doneFor?: InputMaybe<Scalars['Int']['input']>;
  doneFors?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  label?: InputMaybe<Scalars['String']['input']>;
  labels?: InputMaybe<Array<Scalars['String']['input']>>;
  manuallyAdjustedBy?: InputMaybe<Scalars['Int']['input']>;
  manuallyAdjustedBys?: InputMaybe<Array<Scalars['Int']['input']>>;
  measurementId?: InputMaybe<Scalars['Int']['input']>;
  measurementIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  measurementType?: InputMaybe<ResultMeasurementType>;
  measurementTypes?: InputMaybe<Array<ResultMeasurementType>>;
  onlyLatest?: InputMaybe<Scalars['Boolean']['input']>;
  onlyLatestVersionPerLabel?: InputMaybe<Scalars['Boolean']['input']>;
  previousVersionId?: InputMaybe<Scalars['Int']['input']>;
  previousVersionIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  scoreType?: InputMaybe<ResultScoreType>;
  scoreTypes?: InputMaybe<Array<ResultScoreType>>;
  version?: InputMaybe<Scalars['Int']['input']>;
  versions?: InputMaybe<Array<Scalars['Int']['input']>>;
};


export type MutationResultDeleteOneArgs = {
  copiedFrom?: InputMaybe<Scalars['Int']['input']>;
  doneBy?: InputMaybe<Scalars['Int']['input']>;
  doneFor?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  manuallyAdjustedBy?: InputMaybe<Scalars['Int']['input']>;
  measurementId?: InputMaybe<Scalars['Int']['input']>;
  measurementType?: InputMaybe<ResultMeasurementType>;
  onlyLatest?: InputMaybe<Scalars['Boolean']['input']>;
  onlyLatestVersionPerLabel?: InputMaybe<Scalars['Boolean']['input']>;
  previousVersionId?: InputMaybe<Scalars['Int']['input']>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  scoreType?: InputMaybe<ResultScoreType>;
  version?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationResultRestoreOneArgs = {
  copiedFrom?: InputMaybe<Scalars['Int']['input']>;
  doneBy?: InputMaybe<Scalars['Int']['input']>;
  doneFor?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  manuallyAdjustedBy?: InputMaybe<Scalars['Int']['input']>;
  measurementId?: InputMaybe<Scalars['Int']['input']>;
  measurementType?: InputMaybe<ResultMeasurementType>;
  onlyLatest?: InputMaybe<Scalars['Boolean']['input']>;
  onlyLatestVersionPerLabel?: InputMaybe<Scalars['Boolean']['input']>;
  previousVersionId?: InputMaybe<Scalars['Int']['input']>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  scoreType?: InputMaybe<ResultScoreType>;
  version?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationResultSoftDeleteManyArgs = {
  copiedFrom?: InputMaybe<Scalars['Int']['input']>;
  copiedFroms?: InputMaybe<Array<Scalars['Int']['input']>>;
  doneBy?: InputMaybe<Scalars['Int']['input']>;
  doneBys?: InputMaybe<Array<Scalars['Int']['input']>>;
  doneFor?: InputMaybe<Scalars['Int']['input']>;
  doneFors?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  label?: InputMaybe<Scalars['String']['input']>;
  labels?: InputMaybe<Array<Scalars['String']['input']>>;
  manuallyAdjustedBy?: InputMaybe<Scalars['Int']['input']>;
  manuallyAdjustedBys?: InputMaybe<Array<Scalars['Int']['input']>>;
  measurementId?: InputMaybe<Scalars['Int']['input']>;
  measurementIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  measurementType?: InputMaybe<ResultMeasurementType>;
  measurementTypes?: InputMaybe<Array<ResultMeasurementType>>;
  onlyLatest?: InputMaybe<Scalars['Boolean']['input']>;
  onlyLatestVersionPerLabel?: InputMaybe<Scalars['Boolean']['input']>;
  previousVersionId?: InputMaybe<Scalars['Int']['input']>;
  previousVersionIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  scoreType?: InputMaybe<ResultScoreType>;
  scoreTypes?: InputMaybe<Array<ResultScoreType>>;
  version?: InputMaybe<Scalars['Int']['input']>;
  versions?: InputMaybe<Array<Scalars['Int']['input']>>;
};


export type MutationResultSoftDeleteOneArgs = {
  copiedFrom?: InputMaybe<Scalars['Int']['input']>;
  doneBy?: InputMaybe<Scalars['Int']['input']>;
  doneFor?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  manuallyAdjustedBy?: InputMaybe<Scalars['Int']['input']>;
  measurementId?: InputMaybe<Scalars['Int']['input']>;
  measurementType?: InputMaybe<ResultMeasurementType>;
  onlyLatest?: InputMaybe<Scalars['Boolean']['input']>;
  onlyLatestVersionPerLabel?: InputMaybe<Scalars['Boolean']['input']>;
  previousVersionId?: InputMaybe<Scalars['Int']['input']>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  scoreType?: InputMaybe<ResultScoreType>;
  version?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationResultUpdateOneArgs = {
  copiedFrom?: InputMaybe<Scalars['Int']['input']>;
  doneBy?: InputMaybe<Scalars['Int']['input']>;
  doneFor?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
  label?: InputMaybe<Scalars['String']['input']>;
  manuallyAdjustedBy?: InputMaybe<Scalars['Int']['input']>;
  measurementId?: InputMaybe<Scalars['Int']['input']>;
  measurementType?: InputMaybe<ResultMeasurementType>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationResultUpdateOneBehaviourArgs = {
  copiedFrom?: InputMaybe<Scalars['Int']['input']>;
  doneBy: Scalars['Int']['input'];
  doneFor: Scalars['Int']['input'];
  id: Scalars['Int']['input'];
  label?: InputMaybe<Scalars['String']['input']>;
  manuallyAdjustedBy?: InputMaybe<Scalars['Int']['input']>;
  measurementId: Scalars['Int']['input'];
  measurementType: ResultMeasurementType;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  score: IIgBehaviourResultScoreModel;
};


export type MutationRssAssessmentCandidateCreateManyArgs = {
  dto: Array<RssAssessmentCandidateCreateOneArgs>;
};


export type MutationRssAssessmentCandidateCreateOneArgs = {
  rssAssessmentId: Scalars['Int']['input'];
  stageCandidateId: Scalars['Int']['input'];
};


export type MutationRssAssessmentCandidateDeleteManyArgs = {
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  createdAts?: InputMaybe<Array<Scalars['Date']['input']>>;
  deletedAt?: InputMaybe<Scalars['Date']['input']>;
  deletedAts?: InputMaybe<Array<Scalars['Date']['input']>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  rssAssessmentId?: InputMaybe<Scalars['Int']['input']>;
  rssAssessmentIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  stageCandidateId?: InputMaybe<Scalars['Int']['input']>;
  stageCandidateIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  status?: InputMaybe<RssAssessmentCandidateStatus>;
  statuses?: InputMaybe<Array<RssAssessmentCandidateStatus>>;
  subId?: InputMaybe<Scalars['String']['input']>;
  subIds?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  updatedAts?: InputMaybe<Array<Scalars['Date']['input']>>;
};


export type MutationRssAssessmentCandidateDeleteOneArgs = {
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  deletedAt?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  rssAssessmentId?: InputMaybe<Scalars['Int']['input']>;
  stageCandidateId?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<RssAssessmentCandidateStatus>;
  subId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
};


export type MutationRssAssessmentCandidateReopenAllSubmittedForStageCandidateArgs = {
  stageCandidateId: Scalars['Int']['input'];
};


export type MutationRssAssessmentCandidateSoftDeleteManyArgs = {
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  createdAts?: InputMaybe<Array<Scalars['Date']['input']>>;
  deletedAt?: InputMaybe<Scalars['Date']['input']>;
  deletedAts?: InputMaybe<Array<Scalars['Date']['input']>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  rssAssessmentId?: InputMaybe<Scalars['Int']['input']>;
  rssAssessmentIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  stageCandidateId?: InputMaybe<Scalars['Int']['input']>;
  stageCandidateIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  status?: InputMaybe<RssAssessmentCandidateStatus>;
  statuses?: InputMaybe<Array<RssAssessmentCandidateStatus>>;
  subId?: InputMaybe<Scalars['String']['input']>;
  subIds?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  updatedAts?: InputMaybe<Array<Scalars['Date']['input']>>;
};


export type MutationRssAssessmentCandidateSoftDeleteOneArgs = {
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  deletedAt?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  rssAssessmentId?: InputMaybe<Scalars['Int']['input']>;
  stageCandidateId?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<RssAssessmentCandidateStatus>;
  subId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
};


export type MutationRssAssessmentCandidateSubmitOneArgs = {
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  deletedAt?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  rssAssessmentId?: InputMaybe<Scalars['Int']['input']>;
  stageCandidateId?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<RssAssessmentCandidateStatus>;
  subId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
};


export type MutationRssAssessmentCandidateUpdateManyArgs = {
  dto: Array<RssAssessmentCandidateUpdateOneArgs>;
};


export type MutationRssAssessmentCandidateUpdateOneArgs = {
  id: Scalars['Int']['input'];
  rssAssessmentId?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<RssAssessmentCandidateStatus>;
};


export type MutationRssAssessmentCreateManyArgs = {
  dto: Array<RssAssessmentCreateOneArgs>;
};


export type MutationRssAssessmentCreateOneArgs = {
  stageId: Scalars['Int']['input'];
  type: RssAssessmentType;
};


export type MutationRssAssessmentDeleteManyArgs = {
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  createdAts?: InputMaybe<Array<Scalars['Date']['input']>>;
  deletedAt?: InputMaybe<Scalars['Date']['input']>;
  deletedAts?: InputMaybe<Array<Scalars['Date']['input']>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  stageId?: InputMaybe<Scalars['Int']['input']>;
  stageIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  subId?: InputMaybe<Scalars['String']['input']>;
  subIds?: InputMaybe<Array<Scalars['String']['input']>>;
  type?: InputMaybe<RssAssessmentType>;
  types?: InputMaybe<Array<RssAssessmentType>>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  updatedAts?: InputMaybe<Array<Scalars['Date']['input']>>;
};


export type MutationRssAssessmentDeleteOneArgs = {
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  deletedAt?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  stageId?: InputMaybe<Scalars['Int']['input']>;
  subId?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<RssAssessmentType>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
};


export type MutationRssAssessmentSoftDeleteManyArgs = {
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  createdAts?: InputMaybe<Array<Scalars['Date']['input']>>;
  deletedAt?: InputMaybe<Scalars['Date']['input']>;
  deletedAts?: InputMaybe<Array<Scalars['Date']['input']>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  stageId?: InputMaybe<Scalars['Int']['input']>;
  stageIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  subId?: InputMaybe<Scalars['String']['input']>;
  subIds?: InputMaybe<Array<Scalars['String']['input']>>;
  type?: InputMaybe<RssAssessmentType>;
  types?: InputMaybe<Array<RssAssessmentType>>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  updatedAts?: InputMaybe<Array<Scalars['Date']['input']>>;
};


export type MutationRssAssessmentSoftDeleteOneArgs = {
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  deletedAt?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  stageId?: InputMaybe<Scalars['Int']['input']>;
  subId?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<RssAssessmentType>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
};


export type MutationRssAssessmentUpdateManyArgs = {
  dto: Array<RssAssessmentUpdateOneArgs>;
};


export type MutationRssAssessmentUpdateOneArgs = {
  id: Scalars['Int']['input'];
  type?: InputMaybe<RssAssessmentType>;
};


export type MutationSkillCategoryCreateManyArgs = {
  dto: Array<SkillCategoryCreateOneArgs>;
};


export type MutationSkillCategoryCreateOneArgs = {
  name: Scalars['String']['input'];
};


export type MutationSkillCategoryDeleteManyArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  names?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type MutationSkillCategoryDeleteOneArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationSkillCategoryRestoreOneArgs = {
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  relationDepth?: InputMaybe<RelationDepth>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type MutationSkillCategorySoftDeleteManyArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  names?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type MutationSkillCategorySoftDeleteOneArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationSkillCategoryUpdateManyArgs = {
  dto: Array<SkillCategoryUpdateOneArgs>;
};


export type MutationSkillCategoryUpdateOneArgs = {
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationSmInviteHiringArgs = {
  doneForsAndProjectManagers: Array<SmInviteHiringDoneForsAndProjectManagersArgs>;
  endTime?: InputMaybe<Scalars['Date']['input']>;
  includeDeadlineInEmail?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Language>;
  sendEmail?: InputMaybe<Scalars['Boolean']['input']>;
  stageId: Scalars['Int']['input'];
  type: SmInviteType;
};


export type MutationSmInviteTrArgs = {
  doneByEmails?: InputMaybe<Array<Scalars['String']['input']>>;
  doneForEmails: Array<Scalars['String']['input']>;
  endTime?: InputMaybe<Scalars['Date']['input']>;
  includeDeadlineInEmail?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Language>;
  sendEmail?: InputMaybe<Scalars['Boolean']['input']>;
  stageId: Scalars['Int']['input'];
  type: SmInviteType;
};


export type MutationSoftSkillAddTraitArgs = {
  addEmptyContent?: InputMaybe<Scalars['Boolean']['input']>;
  orientation: Orientation;
  softSkillId: Scalars['Int']['input'];
  traitId: Scalars['Int']['input'];
  weight: Scalars['Float']['input'];
};


export type MutationSoftSkillBulkUpdateTraitsArgs = {
  softSkillTraits: Array<BulkUpdateSoftSkillTraitArgsSingle>;
};


export type MutationSoftSkillCreateArgs = {
  category: Scalars['String']['input'];
  companyId: Scalars['Int']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  measurementConstructType?: InputMaybe<MeasurementConstructType>;
  name: Scalars['String']['input'];
  softSkillId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationSoftSkillDeleteArgs = {
  id: Scalars['Int']['input'];
};


export type MutationSoftSkillDeleteTraitArgs = {
  softSkillId: Scalars['Int']['input'];
  traitId: Scalars['Int']['input'];
};


export type MutationSoftSkillRemoveIconArgs = {
  id: Scalars['Int']['input'];
};


export type MutationSoftSkillRoleLevelContentUpdateArgs = {
  candidateContent?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  hiringManagerContent?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
};


export type MutationSoftSkillSuccessProfileContentCreateArgs = {
  description: Scalars['String']['input'];
  roleLevel: ContentRoleLevel;
  shortDescription: Scalars['String']['input'];
  softSkillId: Scalars['Int']['input'];
};


export type MutationSoftSkillSuccessProfileContentDeleteArgs = {
  id: Scalars['Int']['input'];
};


export type MutationSoftSkillSuccessProfileContentUpdateArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  roleLevel?: InputMaybe<ContentRoleLevel>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  softSkillId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationSoftSkillTypeSuccessProfileContentCreateArgs = {
  description: Scalars['String']['input'];
  softSkillType: SoftSkillType;
};


export type MutationSoftSkillTypeSuccessProfileContentDeleteArgs = {
  id: Scalars['Int']['input'];
};


export type MutationSoftSkillTypeSuccessProfileContentUpdateArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  softSkillType?: InputMaybe<SoftSkillType>;
};


export type MutationSoftSkillUpdateArgs = {
  category?: InputMaybe<Scalars['String']['input']>;
  companyId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  iconBlobId?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
  measurementConstructType?: InputMaybe<MeasurementConstructType>;
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationSoftSkillUpdateIsArchivedArgs = {
  id: Scalars['Int']['input'];
  isArchived: Scalars['Boolean']['input'];
};


export type MutationSoftSkillUpdateTraitArgs = {
  orientation?: InputMaybe<Orientation>;
  softSkillId: Scalars['Int']['input'];
  traitId: Scalars['Int']['input'];
  weight?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationSoftSkillUploadIconArgs = {
  file: Scalars['Upload']['input'];
  id: Scalars['Int']['input'];
};


export type MutationStageCandidateAcceptIndirectInvitationArgs = {
  hiringManagers?: InputMaybe<Array<HiringManager>>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  stageId: Scalars['Int']['input'];
};


export type MutationStageCandidateCopyTestResultsArgs = {
  baseStageId: Scalars['Int']['input'];
  candidateId: Scalars['Int']['input'];
  targetStageId: Scalars['Int']['input'];
};


export type MutationStageCandidateCreateArgs = {
  candidateId: Scalars['Int']['input'];
  doneBy: Scalars['Int']['input'];
  projectTrackerId: Scalars['Int']['input'];
  stageId: Scalars['Int']['input'];
  status?: InputMaybe<StageCandidateStatus>;
};


export type MutationStageCandidateDeleteLogsCreateOneArgs = {
  doneBy: Scalars['Int']['input'];
  reason: StageCandidateDeleteLogsReasonEnum;
  stageCandidateId: Scalars['Int']['input'];
};


export type MutationStageCandidateDeleteLogsDeleteOneArgs = {
  doneBy?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  reason?: InputMaybe<StageCandidateDeleteLogsReasonEnum>;
  stageCandidateId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationStageCandidateDeleteLogsSoftDeleteOneArgs = {
  doneBy?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  reason?: InputMaybe<StageCandidateDeleteLogsReasonEnum>;
  stageCandidateId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationStageCandidateDeleteLogsUpdateOneArgs = {
  doneBy?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
  reason?: InputMaybe<StageCandidateDeleteLogsReasonEnum>;
  stageCandidateId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationStageCandidateDeleteOneArgs = {
  candidateId?: InputMaybe<Scalars['Int']['input']>;
  doneBy?: InputMaybe<Scalars['Int']['input']>;
  doneFor?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  projectTrackerId?: InputMaybe<Scalars['Int']['input']>;
  stageId?: InputMaybe<Scalars['Int']['input']>;
  stageResultId?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<StageCandidateStatus>;
  subId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationStageCandidateDeleteTalentReviewRequestArgs = {
  projectId: Scalars['Int']['input'];
  reason: StageCandidateDeleteLogsReasonEnum;
  stageCandidateId: Scalars['Int']['input'];
};


export type MutationStageCandidateReprocessOneArgs = {
  candidateId?: InputMaybe<Scalars['Int']['input']>;
  doneBy?: InputMaybe<Scalars['Int']['input']>;
  doneFor?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  projectTrackerId?: InputMaybe<Scalars['Int']['input']>;
  stageId?: InputMaybe<Scalars['Int']['input']>;
  stageResultId?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<StageCandidateStatus>;
  subId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationStageCandidateRequestTalentReviewArgs = {
  emails: Array<Scalars['String']['input']>;
  projectId: Scalars['Int']['input'];
};


export type MutationStageCandidateResetOneArgs = {
  candidateId?: InputMaybe<Scalars['Int']['input']>;
  doneBy?: InputMaybe<Scalars['Int']['input']>;
  doneFor?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  projectTrackerId?: InputMaybe<Scalars['Int']['input']>;
  stageId?: InputMaybe<Scalars['Int']['input']>;
  stageResultId?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<StageCandidateStatus>;
  subId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationStageCandidateUpdateArgs = {
  doneBy?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
  projectTrackerId?: InputMaybe<Scalars['Int']['input']>;
  stageResultId?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<StageCandidateStatus>;
};


export type MutationStageCreateArgs = {
  createInterviewGuide?: InputMaybe<Scalars['Boolean']['input']>;
  emailCandidateReport: Scalars['Boolean']['input'];
  emailManagerReport: Scalars['Boolean']['input'];
  emailSzAdmin: Scalars['Boolean']['input'];
  endTime?: InputMaybe<Scalars['Date']['input']>;
  formId?: InputMaybe<Scalars['Int']['input']>;
  hasCalibration?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  projectId: Scalars['Int']['input'];
  renderCandidateReport: Scalars['Boolean']['input'];
  startTime?: InputMaybe<Scalars['Date']['input']>;
  status?: InputMaybe<StageStatus>;
  testIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  type: StageType;
};


export type MutationStageCreateCsvReportArgs = {
  basicScoreTypesToDisplay?: InputMaybe<Array<BasicScoreType>>;
  measurementConstructsToDisplay?: InputMaybe<Array<MeasurementConstructType>>;
  name?: InputMaybe<Scalars['String']['input']>;
  options: StageCsvOptions;
  scoreTypesToDisplay?: InputMaybe<Array<DisplayScoreType>>;
  softSkillSort?: InputMaybe<SpSoftSkillSort>;
  stageId?: InputMaybe<Scalars['Int']['input']>;
  stageIds?: InputMaybe<Array<Scalars['Int']['input']>>;
};


export type MutationStageDeleteManyArgs = {
  ids: Array<Scalars['Int']['input']>;
};


export type MutationStageDeleteOneArgs = {
  id: Scalars['Int']['input'];
};


export type MutationStageReorderManyArgs = {
  projectId: Scalars['Int']['input'];
  stageOrderings: Array<OrderStageInput>;
};


export type MutationStageUpdateArgs = {
  createInterviewGuide?: InputMaybe<Scalars['Boolean']['input']>;
  emailCandidateReport?: InputMaybe<Scalars['Boolean']['input']>;
  emailManagerReport?: InputMaybe<Scalars['Boolean']['input']>;
  emailSzAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  endTime?: InputMaybe<Scalars['Date']['input']>;
  formId?: InputMaybe<Scalars['Int']['input']>;
  hasCalibration?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  renderCandidateReport?: InputMaybe<Scalars['Boolean']['input']>;
  startTime?: InputMaybe<Scalars['Date']['input']>;
  testIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  type?: InputMaybe<StageType>;
};


export type MutationSuccessProfileCreateArgs = {
  calculationMethod: CalculationMethod;
  gradingMethod: GradingMethod;
  projectId: Scalars['Int']['input'];
  roleLevel: ContentRoleLevel;
  softSkills: Array<SuccessProfileSoftSkillCreateOneArgs>;
};


export type MutationSuccessProfileCreateOneArgs = {
  calculationMethod: CalculationMethod;
  gradingMethod: GradingMethod;
  projectId: Scalars['Int']['input'];
  roleLevel: ContentRoleLevel;
};


export type MutationSuccessProfileDeleteArgs = {
  id: Scalars['Int']['input'];
};


export type MutationSuccessProfileDeleteManyArgs = {
  calculationMethod?: InputMaybe<CalculationMethod>;
  gradingMethod?: InputMaybe<GradingMethod>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  roleLevel?: InputMaybe<ContentRoleLevel>;
};


export type MutationSuccessProfileExplanationDeleteArgs = {
  id: Scalars['Int']['input'];
};


export type MutationSuccessProfileExplanationSetStatusCompleteArgs = {
  id: Scalars['Int']['input'];
};


export type MutationSuccessProfileExplantionCreateArgs = {
  successProfileId: Scalars['Int']['input'];
};


export type MutationSuccessProfileSoftSkillExplantionUpdateArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  shortDescription?: InputMaybe<Scalars['String']['input']>;
};


export type MutationSuccessProfileSoftSkillTypeExplantionUpdateArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
};


export type MutationSuccessProfileSoftSkillsOverwriteArgs = {
  id: Scalars['Int']['input'];
  softSkills: Array<SuccessProfileSoftSkillCreateOneArgs>;
};


export type MutationSuccessProfileTechnicalSkillCreateManyArgs = {
  dto: Array<SuccessProfileTechnicalSkillCreateOneArgs>;
};


export type MutationSuccessProfileTechnicalSkillCreateOneArgs = {
  successProfileId?: InputMaybe<Scalars['Int']['input']>;
  technicalSkillId: Scalars['Int']['input'];
};


export type MutationSuccessProfileTechnicalSkillDeleteManyArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  successProfileId?: InputMaybe<Scalars['Int']['input']>;
  successProfileIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  technicalSkillId?: InputMaybe<Scalars['Int']['input']>;
  technicalSkillIds?: InputMaybe<Array<Scalars['Int']['input']>>;
};


export type MutationSuccessProfileTechnicalSkillDeleteOneArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  successProfileId?: InputMaybe<Scalars['Int']['input']>;
  technicalSkillId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationSuccessProfileTechnicalSkillOverwriteManyArgs = {
  dto: Array<SuccessProfileTechnicalSkillCreateOneArgs>;
};


export type MutationSuccessProfileTechnicalSkillSoftDeleteManyArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  successProfileId?: InputMaybe<Scalars['Int']['input']>;
  successProfileIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  technicalSkillId?: InputMaybe<Scalars['Int']['input']>;
  technicalSkillIds?: InputMaybe<Array<Scalars['Int']['input']>>;
};


export type MutationSuccessProfileTechnicalSkillSoftDeleteOneArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  successProfileId?: InputMaybe<Scalars['Int']['input']>;
  technicalSkillId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationSuccessProfileTechnicalSkillUpdateManyArgs = {
  dto: Array<SuccessProfileTechnicalSkillUpdateOneArgs>;
};


export type MutationSuccessProfileTechnicalSkillUpdateOneArgs = {
  id: Scalars['Int']['input'];
  successProfileId?: InputMaybe<Scalars['Int']['input']>;
  technicalSkillId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationSuccessProfileTechnicalSkillsOverwriteArgs = {
  id: Scalars['Int']['input'];
  technicalSkills: Array<SuccessProfileTechnicalSkillCreateOneArgs>;
};


export type MutationSuccessProfileUpdateArgs = {
  calculationMethod: CalculationMethod;
  gradingMethod: GradingMethod;
  id: Scalars['Int']['input'];
  roleLevel: ContentRoleLevel;
  softSkills: Array<SuccessProfileSoftSkillCreateOneArgs>;
};


export type MutationSuccessProfileUpdateOneArgs = {
  calculationMethod: CalculationMethod;
  gradingMethod: GradingMethod;
  id: Scalars['Int']['input'];
  roleLevel: ContentRoleLevel;
};


export type MutationSzSkillsMergeCreateManyArgs = {
  dto: Array<SzSkillsMergeCreateOneArgs>;
};


export type MutationSzSkillsMergeCreateOneArgs = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  companyId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  iconBlobId?: InputMaybe<Scalars['Int']['input']>;
  measurementConstructType?: InputMaybe<MeasurementConstructType>;
  name: Scalars['String']['input'];
  originId: Scalars['Int']['input'];
  skillType: SkillType;
};


export type MutationSzSkillsMergeDeleteManyArgs = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  categoryIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  companyId?: InputMaybe<Scalars['Int']['input']>;
  companyIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  iconBlobId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  measurementConstructType?: InputMaybe<MeasurementConstructType>;
  measurementConstructTypes?: InputMaybe<Array<MeasurementConstructType>>;
  name?: InputMaybe<Scalars['String']['input']>;
  originId?: InputMaybe<Scalars['Int']['input']>;
  originIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  skillType?: InputMaybe<SkillType>;
  skillTypes?: InputMaybe<Array<SkillType>>;
};


export type MutationSzSkillsMergeDeleteOneArgs = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  companyId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  iconBlobId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  measurementConstructType?: InputMaybe<MeasurementConstructType>;
  name?: InputMaybe<Scalars['String']['input']>;
  originId?: InputMaybe<Scalars['Int']['input']>;
  skillType?: InputMaybe<SkillType>;
};


export type MutationSzSkillsMergeSoftDeleteManyArgs = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  categoryIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  companyId?: InputMaybe<Scalars['Int']['input']>;
  companyIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  iconBlobId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  measurementConstructType?: InputMaybe<MeasurementConstructType>;
  measurementConstructTypes?: InputMaybe<Array<MeasurementConstructType>>;
  name?: InputMaybe<Scalars['String']['input']>;
  originId?: InputMaybe<Scalars['Int']['input']>;
  originIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  skillType?: InputMaybe<SkillType>;
  skillTypes?: InputMaybe<Array<SkillType>>;
};


export type MutationSzSkillsMergeSoftDeleteOneArgs = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  companyId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  iconBlobId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  measurementConstructType?: InputMaybe<MeasurementConstructType>;
  name?: InputMaybe<Scalars['String']['input']>;
  originId?: InputMaybe<Scalars['Int']['input']>;
  skillType?: InputMaybe<SkillType>;
};


export type MutationSzSkillsMergeUpdateManyArgs = {
  dto: Array<SzSkillsMergeUpdateOneArgs>;
};


export type MutationSzSkillsMergeUpdateOneArgs = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  companyId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  iconBlobId?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
  measurementConstructType?: InputMaybe<MeasurementConstructType>;
  name?: InputMaybe<Scalars['String']['input']>;
  originId?: InputMaybe<Scalars['Int']['input']>;
  skillType?: InputMaybe<SkillType>;
};


export type MutationTalentReviewFileUploadArgs = {
  apply: Scalars['Boolean']['input'];
  args: TalentReviewFileUploadArgs;
  file: Scalars['Upload']['input'];
};


export type MutationTechnicalSkillCreateManyArgs = {
  dto: Array<TechnicalSkillCreateOneArgs>;
};


export type MutationTechnicalSkillCreateOneArgs = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  iconBlobId?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};


export type MutationTechnicalSkillDeleteManyArgs = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  categoryIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  iconBlobId?: InputMaybe<Scalars['Int']['input']>;
  iconBlobIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  names?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type MutationTechnicalSkillDeleteOneArgs = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  iconBlobId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationTechnicalSkillIconUploadArgs = {
  file: Scalars['Upload']['input'];
  id: Scalars['Int']['input'];
};


export type MutationTechnicalSkillRestoreOneArgs = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  getOption?: InputMaybe<GetOption>;
  iconBlobId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  relationDepth?: InputMaybe<RelationDepth>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type MutationTechnicalSkillSoftDeleteManyArgs = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  categoryIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  iconBlobId?: InputMaybe<Scalars['Int']['input']>;
  iconBlobIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  names?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type MutationTechnicalSkillSoftDeleteOneArgs = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  iconBlobId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationTechnicalSkillUpdateManyArgs = {
  dto: Array<TechnicalSkillUpdateOneArgs>;
};


export type MutationTechnicalSkillUpdateOneArgs = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  iconBlobId?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationTestCandidateRemoveOneArgs = {
  candidateId: Scalars['Int']['input'];
  testId: Scalars['Int']['input'];
};


export type MutationTestCandidateReprocessScoresArgs = {
  assessmentId?: InputMaybe<Scalars['Int']['input']>;
  candidateId?: InputMaybe<Scalars['Int']['input']>;
  doneBy?: InputMaybe<Scalars['Int']['input']>;
  doneFor?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  stageCandidateId?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<TestStatus>;
  testId?: InputMaybe<Scalars['Int']['input']>;
  testOrigin?: InputMaybe<TestOrigin>;
  testResultId?: InputMaybe<Scalars['Int']['input']>;
  timeModifierPercentage?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationTestCandidateResetOneArgs = {
  assessmentId?: InputMaybe<Scalars['Int']['input']>;
  candidateId?: InputMaybe<Scalars['Int']['input']>;
  doneBy?: InputMaybe<Scalars['Int']['input']>;
  doneFor?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  stageCandidateId?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<TestStatus>;
  testId?: InputMaybe<Scalars['Int']['input']>;
  testOrigin?: InputMaybe<TestOrigin>;
  testResultId?: InputMaybe<Scalars['Int']['input']>;
  timeModifierPercentage?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationTestCandidateStartSzPracticeTestArgs = {
  assessmentId?: InputMaybe<Scalars['Int']['input']>;
  candidateId?: InputMaybe<Scalars['Int']['input']>;
  doneBy?: InputMaybe<Scalars['Int']['input']>;
  doneFor?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  stageCandidateId?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<TestStatus>;
  testId?: InputMaybe<Scalars['Int']['input']>;
  testOrigin?: InputMaybe<TestOrigin>;
  testResultId?: InputMaybe<Scalars['Int']['input']>;
  timeModifierPercentage?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationTestCandidateStartSzTestArgs = {
  testCandidateId: Scalars['Int']['input'];
};


export type MutationTestCandidateStartTpTestArgs = {
  testCandidateId: Scalars['Int']['input'];
};


export type MutationTestCandidateUpdateOneArgs = {
  assessmentId?: InputMaybe<Scalars['Int']['input']>;
  doneBy?: InputMaybe<Scalars['Int']['input']>;
  doneFor?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
  stageCandidateId?: InputMaybe<Scalars['Int']['input']>;
  stageResultId?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<TestStatus>;
  testOrigin?: InputMaybe<TestOrigin>;
  timeModifierPercentage?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationTmTestCreateOneArgs = {
  nQuestionsPerTrait?: InputMaybe<Scalars['Int']['input']>;
  origin: TestOrigin;
  stageId: Scalars['Int']['input'];
  subType?: InputMaybe<TestSubType>;
  tpProjectId?: InputMaybe<Scalars['String']['input']>;
  type: TestType;
};


export type MutationTmTestUpdateOneArgs = {
  id: Scalars['Int']['input'];
  nQuestionsPerTrait?: InputMaybe<Scalars['Int']['input']>;
  origin?: InputMaybe<TestOrigin>;
  subType?: InputMaybe<TestSubType>;
  tpProjectId?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<TestType>;
};


export type MutationTraitCreateArgs = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationTraitDeleteArgs = {
  id: Scalars['Int']['input'];
};


export type MutationTraitRoleLevelContentUpdateArgs = {
  content?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  summary?: InputMaybe<Scalars['String']['input']>;
};


export type MutationTraitSoftSkillContextCreateOneArgs = {
  behaviourIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  softSkillId?: InputMaybe<Scalars['Int']['input']>;
  traitId: Scalars['Int']['input'];
};


export type MutationTraitSoftSkillContextDeleteManyArgs = {
  behaviourIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  softSkillId?: InputMaybe<Scalars['Int']['input']>;
  softSkillIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  traitId?: InputMaybe<Scalars['Int']['input']>;
  traitIds?: InputMaybe<Array<Scalars['Int']['input']>>;
};


export type MutationTraitSoftSkillContextDeleteOneArgs = {
  behaviourIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  softSkillId?: InputMaybe<Scalars['Int']['input']>;
  traitId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationTraitTestTypeReplaceManyArgs = {
  dto: Array<TraitTestTypesUpdateOneArgs>;
};


export type MutationTraitUpdateArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  isArchived: Scalars['Boolean']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationTraitUpdateIsArchivedArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  isArchived: Scalars['Boolean']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUserCompanyInfoCreateArgs = {
  companyId: Scalars['Int']['input'];
  customFields?: InputMaybe<UserCompanyInfoCustomFieldsArgs>;
  department?: InputMaybe<Scalars['String']['input']>;
  employeeId?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  hrManagerEmployeeId?: InputMaybe<Scalars['String']['input']>;
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  userId: Scalars['Int']['input'];
};


export type MutationUserCompanyInfoDeleteOneArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUserCompanyInfoUpdateArgs = {
  customFields?: InputMaybe<UserCompanyInfoCustomFieldsArgs>;
  department?: InputMaybe<Scalars['String']['input']>;
  employeeId?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  hrManagerEmployeeId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};


export type MutationUserCreateArgs = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  isPuppet?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Language>;
  lastName: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUserDeleteArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUserDeleteByEmailArgs = {
  email: Scalars['String']['input'];
};


export type MutationUserRoleCreateArgs = {
  companyId: Scalars['Float']['input'];
  externalId?: InputMaybe<Scalars['String']['input']>;
  role: IdentityPermissionRole;
  userId: Scalars['Float']['input'];
};


export type MutationUserRoleDeleteArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUserRoleUpdateArgs = {
  companyId?: InputMaybe<Scalars['Float']['input']>;
  externalId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Float']['input'];
  role?: InputMaybe<IdentityPermissionRole>;
};


export type MutationUserSettingsCreateArgs = {
  settings: UserSettingsOptionsArgs;
  userId: Scalars['Int']['input'];
};


export type MutationUserSettingsDeleteOneArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUserSettingsUpdateArgs = {
  id: Scalars['Int']['input'];
  settings: UserSettingsOptionsArgs;
};


export type MutationUserUpdateArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  externalId?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  language?: InputMaybe<Language>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  twoFactorCode?: InputMaybe<Scalars['String']['input']>;
};


export type MutationWidgetConfigCreateArgs = {
  reportConfigId: Scalars['Int']['input'];
  settings?: InputMaybe<Scalars['String']['input']>;
  widgetOptionId: Scalars['Int']['input'];
};


export type MutationWidgetConfigDeleteArgs = {
  id: Scalars['Int']['input'];
};


export type MutationWidgetConfigUpdateArgs = {
  id: Scalars['Int']['input'];
  settings?: InputMaybe<Scalars['String']['input']>;
};


export type MutationWidgetConfigUpdateManyArgs = {
  widgetConfigUpdates: Array<WidgetConfigUpdateOneArgs>;
};


export type MutationWidgetCreateArgs = {
  name: Scalars['String']['input'];
  type: WidgetType;
};


export type MutationWidgetDeleteArgs = {
  id: Scalars['Int']['input'];
};


export type MutationWidgetDeleteScreenShotArgs = {
  id: Scalars['Int']['input'];
};


export type MutationWidgetOptionCreateArgs = {
  defaultValue?: InputMaybe<Scalars['String']['input']>;
  fieldType: FieldType;
  name: Scalars['String']['input'];
  question?: InputMaybe<Scalars['String']['input']>;
  widgetId: Scalars['Int']['input'];
};


export type MutationWidgetOptionDeleteArgs = {
  id: Scalars['Int']['input'];
};


export type MutationWidgetOptionUpdateArgs = {
  defaultValue?: InputMaybe<Scalars['String']['input']>;
  fieldType: FieldType;
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  question?: InputMaybe<Scalars['String']['input']>;
};


export type MutationWidgetOptionUpdateIsArchivedArgs = {
  id: Scalars['Int']['input'];
  isArchived: Scalars['Boolean']['input'];
};


export type MutationWidgetRenderCreateArgs = {
  reportConfigId: Scalars['Int']['input'];
  reportRenderId: Scalars['Int']['input'];
  widgetRenderData?: InputMaybe<Scalars['String']['input']>;
};


export type MutationWidgetRenderDeleteArgs = {
  id: Scalars['Int']['input'];
};


export type MutationWidgetUpdateArgs = {
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<WidgetType>;
};


export type MutationWidgetUpdateIsArchivedArgs = {
  id: Scalars['Int']['input'];
  isArchived: Scalars['Boolean']['input'];
};


export type MutationWidgetUploadScreenShotArgs = {
  file: Scalars['Upload']['input'];
  id: Scalars['Int']['input'];
};


export type MutationAuthenticateArgs = {
  clientType?: InputMaybe<ClientType>;
  email: Scalars['String']['input'];
  mfaCookie?: InputMaybe<Array<Scalars['String']['input']>>;
  password: Scalars['String']['input'];
};


export type MutationAuthenticateApiArgs = {
  clientId: Scalars['String']['input'];
  clientSecret?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateCompanyArgs = {
  expiresAt?: InputMaybe<Scalars['Date']['input']>;
  name: Scalars['String']['input'];
};


export type MutationCreateProjectArgs = {
  companyId: Scalars['Float']['input'];
  expiresAt?: InputMaybe<Scalars['Date']['input']>;
  managers?: InputMaybe<Array<CreateProjectManagerInput>>;
  moduleType?: InputMaybe<ProjectModuleType>;
  name: Scalars['String']['input'];
  requireSheetsExport?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateProjectFileArgs = {
  downloadUrl: Scalars['String']['input'];
  id: Scalars['Float']['input'];
};


export type MutationDeauthenticateArgs = {
  accessToken: Scalars['String']['input'];
};


export type MutationDeleteCompanyArgs = {
  id: Scalars['Int']['input'];
};


export type MutationEditProjectArgs = {
  companyId: Scalars['Float']['input'];
  expiresAt?: InputMaybe<Scalars['Date']['input']>;
  id: Scalars['Int']['input'];
  managers?: InputMaybe<Array<CreateProjectManagerInput>>;
  name: Scalars['String']['input'];
  requireSheetsExport?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationEditProjectArchivingArgs = {
  id: Scalars['Int']['input'];
  state: Scalars['Boolean']['input'];
};


export type MutationEditProjectCandidateReportStateArgs = {
  id: Scalars['Int']['input'];
  renderCandidateReport: Scalars['Boolean']['input'];
};


export type MutationEditProjectStateArgs = {
  id: Scalars['Int']['input'];
  state: Scalars['Boolean']['input'];
};


export type MutationMfaAccessTokenArgs = {
  clientType?: InputMaybe<ClientType>;
  email: Scalars['String']['input'];
  mfaCookie?: InputMaybe<Array<Scalars['String']['input']>>;
  password: Scalars['String']['input'];
};


export type MutationMfaAuthenticateArgs = {
  mfaAccessToken: Scalars['String']['input'];
  mfaCode: Scalars['String']['input'];
};


export type MutationProcessInvitationArgs = {
  invitationToken: Scalars['String']['input'];
  subId: Scalars['String']['input'];
};


export type MutationRegisterAccountArgs = {
  companyId?: InputMaybe<Scalars['Float']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  invitationToken?: InputMaybe<Scalars['String']['input']>;
  language: Language;
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  projectId?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationRequestMfaCodeArgs = {
  mfaAccessToken: Scalars['String']['input'];
};


export type MutationRequestPasswordRecoveryArgs = {
  clientDomainType: ClientDomainType;
  email: Scalars['String']['input'];
};


export type MutationRequestTokenRefreshArgs = {
  accessToken: Scalars['String']['input'];
  refreshToken: Scalars['String']['input'];
};


export type MutationRetriveTpManualCandidatesArgs = {
  candidateEmail: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  inductiveTpAssessmentId?: InputMaybe<Scalars['Int']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  numericalTpAssessmentId?: InputMaybe<Scalars['Int']['input']>;
  personalityTpAssessmentId?: InputMaybe<Scalars['Int']['input']>;
  stageId: Scalars['Int']['input'];
  verbalTpAssessmentId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateCompanyArgs = {
  expiresAt?: InputMaybe<Scalars['Date']['input']>;
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};


export type MutationUpdateIdentityPasswordArgs = {
  newPassword: Scalars['String']['input'];
  recoveryToken: Scalars['String']['input'];
};


export type MutationUploadCompanyLogoArgs = {
  file: Scalars['Upload']['input'];
  id: Scalars['Int']['input'];
};


export type MutationUploadFileArgs = {
  file: Scalars['Upload']['input'];
};

export enum NormGroupType {
  AdministrativeStaff = 'ADMINISTRATIVE_STAFF',
  CogAdministrativeOperationalNonGraduate = 'COG_ADMINISTRATIVE_OPERATIONAL_NON_GRADUATE',
  CogApprenticesSchoolLeaversEntryLevelStaff = 'COG_APPRENTICES_SCHOOL_LEAVERS_ENTRY_LEVEL_STAFF',
  CogGradsManagersProfessionalsExecutives = 'COG_GRADS_MANAGERS_PROFESSIONALS_EXECUTIVES',
  Executives = 'EXECUTIVES',
  Finance = 'FINANCE',
  FirstLineManagers = 'FIRST_LINE_MANAGERS',
  GeneralPopulation = 'GENERAL_POPULATION',
  Graduates = 'GRADUATES',
  HealthProfessionals = 'HEALTH_PROFESSIONALS',
  Hr = 'HR',
  LegalProfessionals = 'LEGAL_PROFESSIONALS',
  ManagementConsultants = 'MANAGEMENT_CONSULTANTS',
  MarketingProfessionals = 'MARKETING_PROFESSIONALS',
  MiddleManagers = 'MIDDLE_MANAGERS',
  SalesProfessionals = 'SALES_PROFESSIONALS',
  Stem = 'STEM',
  Teaching = 'TEACHING'
}

export type NumericalOptionModel = {
  __typename?: 'NumericalOptionModel';
  key: Scalars['Int']['output'];
  subId: Scalars['String']['output'];
  text: Scalars['String']['output'];
};

export type NumericalQuestionModel = {
  __typename?: 'NumericalQuestionModel';
  difficulty: Scalars['Float']['output'];
  options: Array<NumericalOptionModel>;
  subId: Scalars['String']['output'];
  text: Scalars['String']['output'];
};

export type NumericalTestletModel = {
  __typename?: 'NumericalTestletModel';
  imageUrl: Scalars['String']['output'];
  isCompleted: Scalars['Boolean']['output'];
  questions: Array<NumericalQuestionModel>;
  remainingQuestions: Scalars['Int']['output'];
  remainingTime: Scalars['Int']['output'];
  /** @deprecated Please use new property `isCompleted` if you wish to know whether the assessment is completed or not! */
  testCandidateStatus: TestStatus;
  timeLimit: Scalars['Int']['output'];
  totalQuestions: Scalars['Int']['output'];
};

export type OptionModel = {
  __typename?: 'OptionModel';
  key: Scalars['Int']['output'];
  subId: Scalars['String']['output'];
};

export type OrderByArgs = {
  direction?: InputMaybe<OrderByDirection>;
  nullLow?: InputMaybe<Scalars['Boolean']['input']>;
  priority: Scalars['Int']['input'];
};

export enum OrderByDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type OrderStageInput = {
  order: Scalars['Int']['input'];
  stageId: Scalars['Int']['input'];
};

export enum Orientation {
  Inverted = 'INVERTED',
  Standard = 'STANDARD'
}

export type Pageinfo = {
  __typename?: 'Pageinfo';
  currentPage: Scalars['Int']['output'];
  itemsOnPage: Scalars['Int']['output'];
  itemsTotal: Scalars['Int']['output'];
  pageTotal: Scalars['Int']['output'];
  skip?: Maybe<Scalars['Int']['output']>;
  take?: Maybe<Scalars['Int']['output']>;
};

export type PaginatedExternalAssessmentModel = {
  __typename?: 'PaginatedExternalAssessmentModel';
  externalAssessments: Array<ExternalAssessmentModel>;
  total: Scalars['Int']['output'];
};

export type PaginatedSkillCategory = {
  __typename?: 'PaginatedSkillCategory';
  skillCategories: Array<SkillCategory>;
  total: Scalars['Int']['output'];
};

export type PaginatedSzSkillsMerge = {
  __typename?: 'PaginatedSzSkillsMerge';
  skills: Array<SzSkillsMergeWithAvailability>;
  total: Scalars['Int']['output'];
};

export type PaginatedTechnicalSkill = {
  __typename?: 'PaginatedTechnicalSkill';
  technicalSkills: Array<TechnicalSkill>;
  total: Scalars['Int']['output'];
};

export type PersonalityItemModel = {
  __typename?: 'PersonalityItemModel';
  isCompleted: Scalars['Boolean']['output'];
  questions: Array<PersonalityQuestionModel>;
  remainingQuestions: Scalars['Int']['output'];
  /** @deprecated Please use new property `isCompleted` if you wish to know whether the assessment is completed or not! */
  testCandidateStatus: TestStatus;
  totalQuestions: Scalars['Int']['output'];
};

export type PersonalityOptionModel = {
  __typename?: 'PersonalityOptionModel';
  key: Scalars['Int']['output'];
  subId: Scalars['String']['output'];
  text: Scalars['String']['output'];
  value: Scalars['Float']['output'];
};

export type PersonalityQuestionModel = {
  __typename?: 'PersonalityQuestionModel';
  difficulty: Scalars['Float']['output'];
  options: Array<PersonalityOptionModel>;
  orientation: QuestionOrientation;
  subId: Scalars['String']['output'];
  text: Scalars['String']['output'];
};

export enum PollingStatus {
  Error = 'ERROR',
  Generating = 'GENERATING',
  Idling = 'IDLING',
  Ready = 'READY'
}

export type Project = {
  __typename?: 'Project';
  company?: Maybe<ProjectCompany>;
  companyId?: Maybe<Scalars['Float']['output']>;
  companySignatureId?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['String']['output'];
  creatorId: Scalars['Int']['output'];
  deletedAt?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isArchived: Scalars['Boolean']['output'];
  isStopped: Scalars['Boolean']['output'];
  managers?: Maybe<Array<ProjectManager>>;
  moduleType: ProjectModuleType;
  name: Scalars['String']['output'];
  projectRequest?: Maybe<ProjectRequestModel>;
  renderCandidateReport: Scalars['Boolean']['output'];
  requireSheetsExport: Scalars['Boolean']['output'];
  subId: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  version: Scalars['Float']['output'];
};

export enum ProjectCandidateGroupedStatus {
  Completed = 'COMPLETED',
  Invited = 'INVITED',
  InProgress = 'IN_PROGRESS',
  Rejected = 'REJECTED',
  SignedOff = 'SIGNED_OFF'
}

export enum ProjectCandidateStatus {
  Completed = 'COMPLETED',
  Invited = 'INVITED',
  /** @deprecated Removed from this. */
  InvitedBounced = 'INVITED_BOUNCED',
  /** @deprecated Removed from this. */
  InvitedClicked = 'INVITED_CLICKED',
  /** @deprecated Removed from this. */
  InvitedDelivered = 'INVITED_DELIVERED',
  /** @deprecated Removed from this. */
  InvitedOpened = 'INVITED_OPENED',
  /** @deprecated Removed from this. */
  InvitedPending = 'INVITED_PENDING',
  /** @deprecated Removed from this. */
  InviteAcccepted = 'INVITE_ACCCEPTED',
  InProgress = 'IN_PROGRESS',
  Rejected = 'REJECTED',
  SignedOff = 'SIGNED_OFF'
}

export type ProjectCompany = {
  __typename?: 'ProjectCompany';
  id: Scalars['Int']['output'];
  logoUrl?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type ProjectCompanyId = {
  __typename?: 'ProjectCompanyId';
  companyId: Scalars['Int']['output'];
};

export type ProjectFile = {
  __typename?: 'ProjectFile';
  downloadUrl: Scalars['String']['output'];
  id: Scalars['Int']['output'];
};

export type ProjectManager = {
  __typename?: 'ProjectManager';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  lastName: Scalars['String']['output'];
  userId: Scalars['Int']['output'];
};

export enum ProjectModuleType {
  Hiring = 'HIRING',
  TalentReview = 'TALENT_REVIEW'
}

export type ProjectPracticeModel = {
  __typename?: 'ProjectPracticeModel';
  projectId: Scalars['Int']['output'];
  stageId: Scalars['Int']['output'];
};

export type ProjectRequestFileUploadArgs = {
  fileName: Scalars['String']['input'];
  projectRequestId: Scalars['Int']['input'];
};

export type ProjectRequestFileUploadModel = {
  __typename?: 'ProjectRequestFileUploadModel';
  blob?: Maybe<Blob>;
  blobId: Scalars['Int']['output'];
  fileName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  projectRequest?: Maybe<ProjectRequestModel>;
  projectRequestId?: Maybe<Scalars['Int']['output']>;
};

export type ProjectRequestModel = {
  __typename?: 'ProjectRequestModel';
  approvalRequestDate?: Maybe<Scalars['Date']['output']>;
  companyId: Scalars['Int']['output'];
  createdAt: Scalars['Date']['output'];
  creator?: Maybe<User>;
  creatorId: Scalars['Int']['output'];
  deletedAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['Int']['output'];
  projectId?: Maybe<Scalars['Int']['output']>;
  projectName: Scalars['String']['output'];
  status: ProjectRequestStatus;
  updatedAt: Scalars['Date']['output'];
};

export enum ProjectRequestStatus {
  ConfirmMatch = 'CONFIRM_MATCH',
  JobSpecsRecieved = 'JOB_SPECS_RECIEVED',
  ProjectCreated = 'PROJECT_CREATED',
  RequiresProject = 'REQUIRES_PROJECT'
}

export type ProjectRequestUserApprovalModel = {
  __typename?: 'ProjectRequestUserApprovalModel';
  approvalRequestDate: Scalars['Date']['output'];
  approvalStatus: ProjectRequestUserApprovalStatus;
  createdAt: Scalars['Date']['output'];
  deletedAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['Int']['output'];
  updatedAt: Scalars['Date']['output'];
};

export enum ProjectRequestUserApprovalStatus {
  Approved = 'APPROVED',
  Denied = 'DENIED',
  Sent = 'SENT'
}

export type ProjectRequestUserModel = {
  __typename?: 'ProjectRequestUserModel';
  approval?: Maybe<ProjectRequestUserApprovalModel>;
  approvalId?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  projectRequest?: Maybe<ProjectRequestModel>;
  projectRequestId?: Maybe<Scalars['Int']['output']>;
  type: ProjectRequestUserType;
  user?: Maybe<User>;
  userId: Scalars['Int']['output'];
};

export enum ProjectRequestUserType {
  AdditionalContact = 'ADDITIONAL_CONTACT',
  Manager = 'MANAGER',
  Recruiter = 'RECRUITER'
}

export type ProjectTrackerModel = {
  __typename?: 'ProjectTrackerModel';
  createdAt: Scalars['Date']['output'];
  deletedAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['Int']['output'];
  lastActionDate: Scalars['Date']['output'];
  project: Project;
  projectId: Scalars['Int']['output'];
  subId: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type ProjectWithStageCandidates = {
  __typename?: 'ProjectWithStageCandidates';
  company?: Maybe<ProjectCompany>;
  companyId?: Maybe<Scalars['Float']['output']>;
  companySignatureId?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['String']['output'];
  creatorId: Scalars['Int']['output'];
  deletedAt?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isArchived: Scalars['Boolean']['output'];
  isStopped: Scalars['Boolean']['output'];
  managers?: Maybe<Array<ProjectManager>>;
  moduleType: ProjectModuleType;
  name: Scalars['String']['output'];
  numberOfCompletedInTimeFrameStageCandidates: Scalars['Int']['output'];
  numberOfCompletedStageCandidates: Scalars['Int']['output'];
  numberOfStageCandidates: Scalars['Int']['output'];
  percentageOfCompletedStageCandidates: Scalars['Float']['output'];
  projectRequest?: Maybe<ProjectRequestModel>;
  renderCandidateReport: Scalars['Boolean']['output'];
  requireSheetsExport: Scalars['Boolean']['output'];
  stageCandidates: Array<SmStageCandidateModel>;
  subId: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  version: Scalars['Float']['output'];
};

export type QCalcDisplayedAnswerUnion = QCalcInductiveDisplayedAnswerModel | QCalcNumericalDisplayedTestletModel | QCalcPersonalityDisplayedTraitAnswersModel | QCalcTrDisplayedTraitAnswersModel | QCalcVerbalDisplayedTestletModel;

export type QCalcInductiveDisplayedAnswerModel = {
  __typename?: 'QCalcInductiveDisplayedAnswerModel';
  ability: Scalars['Float']['output'];
  answerOptionImageUrl?: Maybe<Scalars['String']['output']>;
  correctOptionImageUrl: Scalars['String']['output'];
  inTime: Scalars['Boolean']['output'];
  isCorrect: Scalars['Boolean']['output'];
  percentile: Scalars['Float']['output'];
  questionDifficulty: Scalars['Float']['output'];
  questionImageUrls: Array<Scalars['String']['output']>;
  zScore: Scalars['Float']['output'];
};

export type QCalcNumericalDisplayedTestletModel = {
  __typename?: 'QCalcNumericalDisplayedTestletModel';
  ability: Scalars['Float']['output'];
  displayedAnswers: Array<QCalcTestletDisplayedAnswerModel>;
  imageUrl: Scalars['String']['output'];
  percentile: Scalars['Float']['output'];
  zScore: Scalars['Float']['output'];
};

export type QCalcPersonalityDisplayedAnswerModel = {
  __typename?: 'QCalcPersonalityDisplayedAnswerModel';
  ability?: Maybe<Scalars['Float']['output']>;
  answerText?: Maybe<Scalars['String']['output']>;
  answerValue?: Maybe<Scalars['Float']['output']>;
  grade?: Maybe<Grade>;
  percentile?: Maybe<Scalars['Float']['output']>;
  questionDifficulty?: Maybe<Scalars['Float']['output']>;
  questionOrientation: QuestionOrientation;
  questionText: Scalars['String']['output'];
  stenScore?: Maybe<Scalars['Float']['output']>;
  zScore?: Maybe<Scalars['Float']['output']>;
};

export type QCalcPersonalityDisplayedTraitAnswersModel = {
  __typename?: 'QCalcPersonalityDisplayedTraitAnswersModel';
  displayedAnswers: Array<QCalcPersonalityDisplayedAnswerModel>;
  trait: Trait;
  traitId: Scalars['Int']['output'];
};

export type QCalcResponse = InductiveItemModel | NumericalTestletModel | PersonalityItemModel | TrItemModel | VerbalTestletModel;

export type QCalcTestletDisplayedAnswerModel = {
  __typename?: 'QCalcTestletDisplayedAnswerModel';
  answerText?: Maybe<Scalars['String']['output']>;
  correctOptionText: Scalars['String']['output'];
  inTime: Scalars['Boolean']['output'];
  isCorrect: Scalars['Boolean']['output'];
  questionDifficulty: Scalars['Float']['output'];
  questionText: Scalars['String']['output'];
};

export type QCalcTrDisplayedAnswerModel = {
  __typename?: 'QCalcTrDisplayedAnswerModel';
  answerText?: Maybe<Scalars['String']['output']>;
  answerValue?: Maybe<Scalars['Float']['output']>;
  questionOrientation: QuestionOrientation;
  questionText: Scalars['String']['output'];
  score: Scalars['Float']['output'];
};

export type QCalcTrDisplayedTraitAnswersModel = {
  __typename?: 'QCalcTrDisplayedTraitAnswersModel';
  displayedAnswers: Array<QCalcTrDisplayedAnswerModel>;
  trait: Trait;
  traitId: Scalars['Int']['output'];
};

export type QCalcVerbalDisplayedTestletModel = {
  __typename?: 'QCalcVerbalDisplayedTestletModel';
  ability: Scalars['Float']['output'];
  displayedAnswers: Array<QCalcTestletDisplayedAnswerModel>;
  mainQuestionText: Scalars['String']['output'];
  percentile: Scalars['Float']['output'];
  zScore: Scalars['Float']['output'];
};

export type QCalcVisualisedAssessmentModel = {
  __typename?: 'QCalcVisualisedAssessmentModel';
  entries: Array<QCalcDisplayedAnswerUnion>;
};

export type Query = {
  __typename?: 'Query';
  Answer?: Maybe<Answer>;
  Answers?: Maybe<Array<Answer>>;
  ApiKeyCompanyFindMany: Array<AmApiKeyModel>;
  ApiKeyFindAll: Array<AmApiKeyModel>;
  ApiKeyUserFindOne?: Maybe<AmApiKeyModel>;
  ApiUserFindMany?: Maybe<Array<Maybe<ApiUserModel>>>;
  ApiUserFindOne?: Maybe<ApiUserModel>;
  AssessmentDataFindMany: Array<Maybe<AssessmentDataModel>>;
  AssessmentDataFindOne?: Maybe<AssessmentDataModel>;
  BaseMethodTest?: Maybe<BaseMethodTest>;
  BaseMethodTestFindMany: Array<BaseMethodTest>;
  BaseMethodTestFindOne?: Maybe<BaseMethodTest>;
  BaseMethodTests: Array<BaseMethodTest>;
  BehaviourContentFindOne: BehaviourContentModel;
  BehaviourFindOne?: Maybe<BehaviourModel>;
  BlobFindById: Blob;
  BlobFindByName?: Maybe<Blob>;
  CalibrationCandidateFindMany: Array<CalibrationCandidateModel>;
  CalibrationCandidateFindOne?: Maybe<CalibrationCandidateModel>;
  CalibrationConfigExtendedGenerateOne: CalibrationConfigExtendedModel;
  CalibrationConfigFindOne?: Maybe<CalibrationConfigModel>;
  CalibrationConfigGenerateMany: Array<CalibrationConfigModel>;
  CalibrationConfigGenerateOne?: Maybe<CalibrationConfigModel>;
  CmAllowedArea?: Maybe<CmAllowedArea>;
  CmAllowedCompanies: Array<CmAllowedCompanyModel>;
  CmAllowedProject?: Maybe<CmAllowedProject>;
  CmCandidateResultFindAndCSV?: Maybe<Blob>;
  CmCandidateResultFindAndPaginate?: Maybe<CmCandidateResultModelPaginated>;
  CmCandidateResultFindMany?: Maybe<Array<CmCandidateResult>>;
  CmDepartments?: Maybe<Array<Scalars['String']['output']>>;
  CmProjectCandidateManagers?: Maybe<Array<CmProjectCandidateManagerModel>>;
  CmProjectFindMany?: Maybe<Array<CmProject>>;
  CmProjectManagers?: Maybe<Array<CmProjectManagerModel>>;
  CmResultScoreDisplayableKeysFindOne: Array<Scalars['String']['output']>;
  CmTalentReview?: Maybe<CmTalentReviewGridChartModel>;
  CmTalentReviewGridChartBasic?: Maybe<CmTalentReviewGridChartBasicModel>;
  CmTalentReviewGridChartFilterOptionsFindMany?: Maybe<CmTalentReviewGridChartFilterOptionsModel>;
  CompanyEmployee?: Maybe<CompanyEmployeeModel>;
  CompanyEmployeeCompanyWriteAccess?: Maybe<Array<Scalars['Int']['output']>>;
  CompanyEmployeeFindMany?: Maybe<Array<CompanyEmployeeModel>>;
  CompanyEmployeeFindOne?: Maybe<CompanyEmployeeModel>;
  CompanyEmployeeFreeTextSearchPaginate?: Maybe<CompanyEmployeeModelPaginated>;
  CompanyEmployees?: Maybe<Array<CompanyEmployeeModel>>;
  CompanyFindUsers: Array<Maybe<User>>;
  CompanyMaybeUserEmployeeFindMany?: Maybe<Array<CompanyMaybeUserEmployeeModel>>;
  CompanyRole?: Maybe<CompanyRole>;
  CompanyRoles?: Maybe<Array<CompanyRole>>;
  CompanySignature?: Maybe<CompanySignatureModel>;
  CompanySignatureFindMany?: Maybe<Array<CompanySignatureModel>>;
  CompanySignatureFindOne?: Maybe<CompanySignatureModel>;
  CompanySignatures?: Maybe<Array<CompanySignatureModel>>;
  ContentViewerViewStageCandidateManagerReport: ContentViewerViewStageCandidateManagerReportModel;
  ContentViewerViewStageCandidateReport: ContentViewerViewStageCandidateReportModel;
  ContextualScore?: Maybe<ContextualScoreModel>;
  DynamicEnum?: Maybe<Scalars['String']['output']>;
  /** Get list of all the available external assessment platforms */
  EAPlatformFindMany: Array<ExternalPlatformAdapterModel>;
  /** Check availability of the stage action of the external assessment process in the project stage. This method checks if there is an existing stage action for given stage and company, and it returns the stage action if it exists. If it doesn't exist, it checks if there are any external assessments for given skills (if any are provided). Note that this doesn't prevent you from creating a stage action for the external assessment process in the project stage, but it means you will probably not find an exact match of the external assessments for your skills. In case there is already stage action for given stage and company, it will return the stage action and set the available flag to true. */
  EAStageActionAvailable: EaStageActionAvailabilityModel;
  /** Query the stage action for external assessments. */
  EAStageActionFindMany: Array<EaStageActionModel>;
  /** Query the stage action for external assessments. (paginated) */
  EAStageActionFindManyPaginated: EaStageActionModel;
  /** Query the stage action for external assessments. */
  EAStageActionFindOne?: Maybe<EaStageActionModel>;
  EntityLanguage?: Maybe<EntityLanguageModel>;
  EntityLanguageFindMany?: Maybe<Array<EntityLanguageModel>>;
  EntityLanguageFindOne?: Maybe<EntityLanguageModel>;
  EntityLanguages?: Maybe<Array<EntityLanguageModel>>;
  /** Query the external assessments in the bank. */
  ExternalAssessmentFindMany: Array<ExternalAssessmentModel>;
  /** Query the external assessments in the bank, paginated. */
  ExternalAssessmentFindManyPaginated: PaginatedExternalAssessmentModel;
  /** Query the external assessments in the bank. */
  ExternalAssessmentFindOne?: Maybe<ExternalAssessmentModel>;
  /** View and search for available assessments from the external platform. */
  ExternalPlatformAssessmentFindMany: Array<ExternalPlatformAssessmentModel>;
  /** View an assessment from the external platform. */
  ExternalPlatformAssessmentFindOne?: Maybe<ExternalPlatformAssessmentModel>;
  Field?: Maybe<Field>;
  Fields?: Maybe<Array<Field>>;
  FixContentPiece?: Maybe<ContentValidatiorPieceModel>;
  Form?: Maybe<Form>;
  FormBuilder?: Maybe<FormBuilder>;
  FormBuilderFindByOwnerAndType?: Maybe<FormBuilder>;
  FormCandidateFindMany: Array<FormCandidateModel>;
  FormCandidateFindOne?: Maybe<FormCandidateModel>;
  FormReportFindAssociatedIds?: Maybe<FormReportIndividualQueries>;
  FormReportFindFormManagerTypes?: Maybe<FormReportIndividualQueries>;
  FormReportFindFormOwners?: Maybe<Array<FormReportFormOwners>>;
  FormReportFindFormTypes?: Maybe<FormReportIndividualQueries>;
  Forms?: Maybe<Array<Form>>;
  GetDlxQueueMessageCount?: Maybe<Scalars['Float']['output']>;
  GetStageActions: StageActionsModel;
  GetStageCards: Array<StageCardModel>;
  GetTestCards: TestCardsModel;
  IgCategories?: Maybe<Array<IgCategory>>;
  IgCategory?: Maybe<IgCategory>;
  IgCategoryFindMany?: Maybe<Array<IgCategory>>;
  IgCategoryFindOne?: Maybe<IgCategory>;
  IgInterviewGuide?: Maybe<IgInterviewGuide>;
  IgInterviewGuideCategories?: Maybe<Array<IgInterviewGuideCategory>>;
  IgInterviewGuideCategory?: Maybe<IgInterviewGuideCategory>;
  IgInterviewGuideCategoryFindMany?: Maybe<Array<IgInterviewGuideCategory>>;
  IgInterviewGuideCategoryFindOne?: Maybe<IgInterviewGuideCategory>;
  IgInterviewGuideFindMany?: Maybe<Array<IgInterviewGuide>>;
  IgInterviewGuideFindOne?: Maybe<IgInterviewGuide>;
  IgInterviewGuides?: Maybe<Array<IgInterviewGuide>>;
  IgRenderFindOne?: Maybe<IgRenderModel>;
  IgStep?: Maybe<IgStep>;
  IgStepFindMany?: Maybe<Array<IgStep>>;
  IgStepFindOne?: Maybe<IgStep>;
  IgSteps?: Maybe<Array<IgStep>>;
  InterviewGuideBehaviourFindMany: Array<InterviewGuideBehaviourModel>;
  InterviewGuideFeedbackFindOne?: Maybe<InterviewGuideFeedbackModel>;
  InterviewGuideFindOne: InterviewGuideModel;
  InterviewGuidePageStatusFindOne?: Maybe<InterviewGuidePageStatusModel>;
  InterviewGuideRecipientFindMany: Array<IgRenderRecipientModel>;
  InterviewGuideRecipientUniqueFindMany: Array<IgRenderRecipientModel>;
  InterviewGuideSSDescriptionFindMany: IgSoftSkillDescriptionModel;
  InterviewQuestionContentFindOne?: Maybe<InterviewQuestionContentModel>;
  InterviewQuestionReasonContentFindOne?: Maybe<InterviewQuestionReasonContentModel>;
  InterviewQuestionRoleLevelContent: InterviewQuestionRoleLevel;
  InterviewQuestionRoleLevelContentFindManyAndCount: InterviewQuestionRoleLevelPaginatedModel;
  InterviewQuestionRoleLevelContents: Array<InterviewQuestionRoleLevel>;
  Invitation?: Maybe<InvitationModel>;
  InvitationFindMany?: Maybe<Array<InvitationModel>>;
  InvitationFindOne?: Maybe<InvitationModel>;
  Invitations?: Maybe<Array<InvitationModel>>;
  ProjectFindMany?: Maybe<Array<Project>>;
  ProjectFindManyByCompany: Array<Project>;
  ProjectFindManysByCompanyWithStageCandidateRange: Array<CompanyProjects>;
  ProjectRequest?: Maybe<ProjectRequestModel>;
  ProjectRequestFileUpload?: Maybe<ProjectRequestFileUploadModel>;
  ProjectRequestFileUploadFindMany: Array<ProjectRequestFileUploadModel>;
  ProjectRequestFileUploadFindOne?: Maybe<ProjectRequestFileUploadModel>;
  ProjectRequestFileUploads: Array<ProjectRequestFileUploadModel>;
  ProjectRequestFindMany?: Maybe<Array<ProjectRequestModel>>;
  ProjectRequestFindOne?: Maybe<ProjectRequestModel>;
  ProjectRequestUser?: Maybe<ProjectRequestUserModel>;
  ProjectRequestUserApproval?: Maybe<ProjectRequestUserApprovalModel>;
  ProjectRequestUserApprovalFindMany: Array<ProjectRequestUserApprovalModel>;
  ProjectRequestUserApprovalFindOne?: Maybe<ProjectRequestUserApprovalModel>;
  ProjectRequestUserApprovals: Array<ProjectRequestUserApprovalModel>;
  ProjectRequestUserFindMany: Array<ProjectRequestUserModel>;
  ProjectRequestUserFindOne?: Maybe<ProjectRequestUserModel>;
  ProjectRequestUsers: Array<ProjectRequestUserModel>;
  ProjectRequests: Array<ProjectRequestModel>;
  QCalcVisualiseAssessment: QCalcVisualisedAssessmentModel;
  Report?: Maybe<Report>;
  ReportAssignment?: Maybe<ReportAssignment>;
  ReportAssignmentFindMany?: Maybe<Array<ReportAssignment>>;
  ReportAssignmentFindStageReport?: Maybe<ReportAssignment>;
  ReportAssignments?: Maybe<Array<ReportAssignment>>;
  ReportConfig?: Maybe<ReportConfig>;
  ReportConfigFindMany?: Maybe<Array<ReportConfig>>;
  ReportConfigs?: Maybe<Array<ReportConfig>>;
  ReportFindMany?: Maybe<Array<Report>>;
  ReportRender?: Maybe<ReportRender>;
  ReportRenderApi?: Maybe<ReportRender>;
  ReportRenderDeleteMany?: Maybe<DeleteResult>;
  ReportRenderFindMany?: Maybe<Array<ReportRender>>;
  ReportRenderFindOne?: Maybe<ReportRender>;
  ReportRenderWithData?: Maybe<ReportRender>;
  ReportRenderWithDataApi?: Maybe<ReportRender>;
  ReportRenders: Array<ReportRender>;
  Reports?: Maybe<Array<Report>>;
  ReportsFindByCompany?: Maybe<Array<Report>>;
  RespondantForm?: Maybe<RespondantForm>;
  ResultAccessFindMany?: Maybe<Array<ResultAccessModel>>;
  ResultAccessFindOne?: Maybe<ResultAccessModel>;
  ResultFindBatch?: Maybe<Array<Maybe<ResultModel>>>;
  ResultFindBatches?: Maybe<Array<Maybe<Array<Maybe<ResultModel>>>>>;
  ResultFindMany: Array<ResultModel>;
  ResultFindOne?: Maybe<ResultModel>;
  RoleFindMany: Array<Role>;
  /** @deprecated Please use "RssAssessmentCandidateOpenOne" instead! */
  RoleSKillSelfAssessmentCandidateGetExistingSoftSkillsAndResults: RssCandidateOpenOneModel;
  Roles: Array<Role>;
  RssAssessmentCandidateFindMany: Array<RssAssessmentCandidateModel>;
  RssAssessmentCandidateFindOne?: Maybe<RssAssessmentCandidateModel>;
  RssAssessmentCandidateOpenOne: RssCandidateOpenOneModel;
  RssAssessmentFindMany: Array<RssAssessmentModel>;
  RssAssessmentFindOne?: Maybe<RssAssessmentModel>;
  SkillCategory?: Maybe<SkillCategory>;
  SkillCategoryFindMany: Array<SkillCategory>;
  SkillCategoryFindOne?: Maybe<SkillCategory>;
  SkillCategoryFreeTextSearchPaginated: PaginatedSkillCategory;
  SkillCategorys: Array<SkillCategory>;
  SkillsProfileOpenOne: SkillsProfileOpenOneModel;
  SoftSkill?: Maybe<SoftSkill>;
  SoftSkillFindMany?: Maybe<Array<SoftSkill>>;
  SoftSkillFindManyByCompanyId?: Maybe<Array<SoftSkill>>;
  SoftSkillFindManyByProjectId?: Maybe<Array<SoftSkill>>;
  SoftSkillFindManyByTraitId?: Maybe<Array<SoftSkill>>;
  SoftSkillFreeTextSearchPaginate?: Maybe<SoftSkillModelPaginated>;
  SoftSkillGetAllValidForProject: Array<SoftSkill>;
  SoftSkillProjectModuleTypeFindOne?: Maybe<SoftSkillProjectModuleTypeModel>;
  SoftSkillRoleLevelContent: SoftSkillRoleLevelContent;
  SoftSkillRoleLevelContentFindManyAndCount: SoftSkillRoleLevelContentPaginated;
  SoftSkillRoleLevelContents: Array<SoftSkillRoleLevelContent>;
  SoftSkillSuccessProfileContent: SoftSkillSuccessProfileContent;
  SoftSkillSuccessProfileContentFindManyAndCount: SoftSkillSuccessProfileContentPaginated;
  SoftSkillSuccessProfileContents: Array<SoftSkillSuccessProfileContent>;
  SoftSkillTraitFindManyBySoftSkill?: Maybe<Array<SoftSkillTrait>>;
  SoftSkillTraitFindManyBySoftSkills?: Maybe<Array<SoftSkillTrait>>;
  SoftSkillTraits?: Maybe<Array<SoftSkillTrait>>;
  SoftSkillTypeSuccessProfileContent: SoftSkillTypeSuccessProfileContent;
  SoftSkillTypeSuccessProfileContentFindMany: Array<SoftSkillTypeSuccessProfileContent>;
  SoftSkillTypeSuccessProfileContentFindOne: SoftSkillTypeSuccessProfileContent;
  SoftSkillTypeSuccessProfileContents: Array<SoftSkillTypeSuccessProfileContent>;
  SoftSkills?: Maybe<Array<SoftSkill>>;
  Stage?: Maybe<SmStageModel>;
  StageCandidate?: Maybe<SmStageCandidateModel>;
  StageCandidateDeleteLog?: Maybe<StageCandidateDeleteLogs>;
  StageCandidateDeleteLogs: Array<StageCandidateDeleteLogs>;
  StageCandidateDeleteLogsFindMany: Array<StageCandidateDeleteLogs>;
  StageCandidateDeleteLogsFindOne?: Maybe<StageCandidateDeleteLogs>;
  StageCandidateFindMany?: Maybe<Array<SmStageCandidateModel>>;
  StageCandidateFindOne?: Maybe<SmStageCandidateModel>;
  StageCandidates?: Maybe<Array<SmStageCandidateModel>>;
  StageFindMany?: Maybe<Array<SmStageModel>>;
  StageFindOne?: Maybe<SmStageModel>;
  StageGenerateIndirectInvitationUrl: GenerateStageIndirectInvitationUrlModel;
  Stages?: Maybe<Array<SmStageModel>>;
  SuccessProfile?: Maybe<SuccessProfile>;
  SuccessProfileExists?: Maybe<SuccessProfile>;
  SuccessProfileExplanation?: Maybe<SuccessProfileExplanation>;
  SuccessProfileExplanationFindBySPId?: Maybe<SuccessProfileExplanation>;
  SuccessProfileExplanationGetDefaultSSContent?: Maybe<Array<SoftSkillSuccessProfileContent>>;
  SuccessProfileExplanationGetDefaultSSTypeContent?: Maybe<Array<SoftSkillTypeSuccessProfileContent>>;
  SuccessProfileFindMany?: Maybe<Array<SuccessProfile>>;
  SuccessProfileTechnicalSkill?: Maybe<SuccessProfileTechnicalSkill>;
  SuccessProfileTechnicalSkillFindMany: Array<SuccessProfileTechnicalSkill>;
  SuccessProfileTechnicalSkillFindOne?: Maybe<SuccessProfileTechnicalSkill>;
  SuccessProfileTechnicalSkills: Array<SuccessProfileTechnicalSkill>;
  SuccessProfiles?: Maybe<Array<SuccessProfile>>;
  SzSkillsMerge?: Maybe<SzSkillsMerge>;
  SzSkillsMergeFindMany: Array<SzSkillsMerge>;
  SzSkillsMergeFindOne?: Maybe<SzSkillsMerge>;
  SzSkillsMergeFreeTextSearchPaginated: PaginatedSzSkillsMerge;
  TechnicalSkill?: Maybe<TechnicalSkill>;
  TechnicalSkillFindMany: Array<TechnicalSkill>;
  TechnicalSkillFindManyPaginated: PaginatedTechnicalSkill;
  TechnicalSkillFindOne?: Maybe<TechnicalSkill>;
  TechnicalSkillFreeTextSearchPaginated: PaginatedTechnicalSkill;
  TechnicalSkills: Array<TechnicalSkill>;
  TestCandidateFindMany: Array<TmTestCandidateModel>;
  TestCandidateFindManyByCandidate?: Maybe<Array<TmTestCandidateModel>>;
  TestCandidateFindOne?: Maybe<TmTestCandidateModel>;
  TmTest?: Maybe<TmTestModel>;
  TmTestFindMany: Array<TmTestModel>;
  TmTestFindOne?: Maybe<TmTestModel>;
  TmTests?: Maybe<Array<TmTestModel>>;
  Trait?: Maybe<Trait>;
  TraitFindManyBySoftSkillId?: Maybe<Array<Trait>>;
  TraitRoleLevelContent: TraitRoleLevelContent;
  TraitRoleLevelContentFindManyAndCount: TraitRoleLevelContentPaginatedModel;
  TraitRoleLevelContents: Array<TraitRoleLevelContent>;
  TraitSoftSkillContextFindMany?: Maybe<Array<TraitSoftSkillContextModel>>;
  TraitSoftSkillContextFindOne?: Maybe<TraitSoftSkillContextModel>;
  Traits?: Maybe<Array<Trait>>;
  User?: Maybe<User>;
  UserCompanyInfo?: Maybe<UserCompanyInfo>;
  UserCompanyInfoFindMany?: Maybe<Array<UserCompanyInfo>>;
  UserCompanyInfoFindOne?: Maybe<UserCompanyInfo>;
  UserCompanyInfos?: Maybe<Array<UserCompanyInfo>>;
  UserFreeTextSearchPaginate?: Maybe<UserModelPaginated>;
  UserRoleFindMany: Array<UserRole>;
  UserRoles: Array<UserRole>;
  UserSettings?: Maybe<UserSettings>;
  UserSettingsFindMany?: Maybe<Array<UserSettings>>;
  UserSettingsFindOne?: Maybe<UserSettings>;
  UserSettingss?: Maybe<Array<UserSettings>>;
  Users?: Maybe<Array<User>>;
  ValidateContent?: Maybe<ContentValidator>;
  ValidateContentPiece?: Maybe<ContentValidatiorPieceModel>;
  Widget?: Maybe<Widget>;
  WidgetConfig?: Maybe<WidgetConfig>;
  WidgetConfigFindMany?: Maybe<Array<WidgetConfig>>;
  WidgetConfigs?: Maybe<Array<WidgetConfig>>;
  WidgetFindMany?: Maybe<Array<Widget>>;
  WidgetOption?: Maybe<WidgetOption>;
  WidgetOptionFindMany?: Maybe<Array<WidgetOption>>;
  WidgetOptions?: Maybe<Array<WidgetOption>>;
  WidgetRender?: Maybe<WidgetRender>;
  WidgetRenderFindMany?: Maybe<Array<WidgetRender>>;
  WidgetRenders?: Maybe<Array<WidgetRender>>;
  Widgets?: Maybe<Array<Widget>>;
  alive: Blob;
  companies?: Maybe<Array<Company>>;
  company?: Maybe<Company>;
  companyFindManyByIds?: Maybe<Array<Company>>;
  getAllProjectFiles: Array<ProjectFile>;
  getAllProjects: Array<Project>;
  getCompanyId: ProjectCompanyId;
  getFormReportCSV?: Maybe<Scalars['String']['output']>;
  getInvitationStatus: InvitationStatusResult;
  getProjectById?: Maybe<Project>;
  me: User;
};


export type QueryAnswerArgs = {
  id: Scalars['Int']['input'];
};


export type QueryAnswersArgs = {
  associatedId?: InputMaybe<Scalars['Int']['input']>;
  associatedIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  fieldId?: InputMaybe<Scalars['Int']['input']>;
  fields?: InputMaybe<Array<Scalars['Int']['input']>>;
  formId?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  respondantId?: InputMaybe<Scalars['Int']['input']>;
  respondantIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  response?: InputMaybe<Scalars['String']['input']>;
};


export type QueryApiKeyCompanyFindManyArgs = {
  companyId?: InputMaybe<Scalars['Int']['input']>;
  getOption?: InputMaybe<GetOption>;
  permission?: InputMaybe<IdentityPermissionRole>;
  relationDepth?: InputMaybe<RelationDepth>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryApiKeyUserFindOneArgs = {
  getOption?: InputMaybe<GetOption>;
  relationDepth?: InputMaybe<RelationDepth>;
  userEmail?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  userSubId?: InputMaybe<Scalars['String']['input']>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryApiUserFindManyArgs = {
  clientId?: InputMaybe<Scalars['String']['input']>;
  clientIds?: InputMaybe<Array<Scalars['String']['input']>>;
  companyId?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  deletedAt?: InputMaybe<Scalars['Date']['input']>;
  getOption?: InputMaybe<GetOption>;
  hasClientSecret?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  ownerId?: InputMaybe<Scalars['Int']['input']>;
  ownerIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  ownerType?: InputMaybe<ApiUserOwnerType>;
  puppetUserId?: InputMaybe<Scalars['Int']['input']>;
  puppetUserIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  relationDepth?: InputMaybe<RelationDepth>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryApiUserFindOneArgs = {
  clientId?: InputMaybe<Scalars['String']['input']>;
  companyId?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  deletedAt?: InputMaybe<Scalars['Date']['input']>;
  getOption?: InputMaybe<GetOption>;
  hasClientSecret?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ownerId?: InputMaybe<Scalars['Int']['input']>;
  ownerType?: InputMaybe<ApiUserOwnerType>;
  puppetUserId?: InputMaybe<Scalars['Int']['input']>;
  relationDepth?: InputMaybe<RelationDepth>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryAssessmentDataFindManyArgs = {
  allowedTimePerSection?: InputMaybe<Scalars['Int']['input']>;
  completedAt?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  isPractice?: InputMaybe<Scalars['Boolean']['input']>;
  nQuestionsPerTrait?: InputMaybe<Scalars['Int']['input']>;
  normGroupType?: InputMaybe<NormGroupType>;
  roleLevel?: InputMaybe<ContentRoleLevel>;
  startingAbilityLowerBound?: InputMaybe<Scalars['Float']['input']>;
  startingAbilityUpperBound?: InputMaybe<Scalars['Float']['input']>;
  startingQuestions?: InputMaybe<Array<IAssessmentDataQuestionModel>>;
  testCandidateId?: InputMaybe<Scalars['Int']['input']>;
  traitIds?: InputMaybe<Array<Scalars['Int']['input']>>;
};


export type QueryAssessmentDataFindOneArgs = {
  allowedTimePerSection?: InputMaybe<Scalars['Int']['input']>;
  completedAt?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isPractice?: InputMaybe<Scalars['Boolean']['input']>;
  nQuestionsPerTrait?: InputMaybe<Scalars['Int']['input']>;
  normGroupType?: InputMaybe<NormGroupType>;
  roleLevel?: InputMaybe<ContentRoleLevel>;
  startingAbilityLowerBound?: InputMaybe<Scalars['Float']['input']>;
  startingAbilityUpperBound?: InputMaybe<Scalars['Float']['input']>;
  startingQuestions?: InputMaybe<Array<IAssessmentDataQuestionModel>>;
  testCandidateId?: InputMaybe<Scalars['Int']['input']>;
  traitIds?: InputMaybe<Array<Scalars['Int']['input']>>;
};


export type QueryBaseMethodTestArgs = {
  id: Scalars['Int']['input'];
};


export type QueryBaseMethodTestFindManyArgs = {
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  relationDepth?: InputMaybe<RelationDepth>;
  someEnum?: InputMaybe<BaseMethodTestSomeEnum>;
  someEnums?: InputMaybe<Array<BaseMethodTestSomeEnum>>;
  someFlag?: InputMaybe<Scalars['Boolean']['input']>;
  someFlags?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  subId?: InputMaybe<Scalars['String']['input']>;
  subIds?: InputMaybe<Array<Scalars['String']['input']>>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryBaseMethodTestFindOneArgs = {
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  relationDepth?: InputMaybe<RelationDepth>;
  someEnum?: InputMaybe<BaseMethodTestSomeEnum>;
  someFlag?: InputMaybe<Scalars['Boolean']['input']>;
  subId?: InputMaybe<Scalars['String']['input']>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryBehaviourContentFindOneArgs = {
  behaviourId?: InputMaybe<Scalars['Int']['input']>;
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  negativeSummary?: InputMaybe<Scalars['String']['input']>;
  positiveSummary?: InputMaybe<Scalars['String']['input']>;
  relationDepth?: InputMaybe<RelationDepth>;
  roleLevel?: InputMaybe<ContentRoleLevel>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryBehaviourFindOneArgs = {
  contextIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  relationDepth?: InputMaybe<RelationDepth>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryBlobFindByIdArgs = {
  getOption: Scalars['String']['input'];
  id: Scalars['Int']['input'];
};


export type QueryBlobFindByNameArgs = {
  getOption: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type QueryCalibrationCandidateFindManyArgs = {
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  createdAts?: InputMaybe<Array<Scalars['Date']['input']>>;
  deletedAt?: InputMaybe<Scalars['Date']['input']>;
  deletedAts?: InputMaybe<Array<Scalars['Date']['input']>>;
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  lastAdjustedById?: InputMaybe<Scalars['Int']['input']>;
  lastAdjustedByIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  relationDepth?: InputMaybe<RelationDepth>;
  stageCandidateId?: InputMaybe<Scalars['Int']['input']>;
  stageCandidateIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  status?: InputMaybe<CalibrationCandidateStatus>;
  statuses?: InputMaybe<Array<CalibrationCandidateStatus>>;
  subId?: InputMaybe<Scalars['String']['input']>;
  subIds?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  updatedAts?: InputMaybe<Array<Scalars['Date']['input']>>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryCalibrationCandidateFindOneArgs = {
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  deletedAt?: InputMaybe<Scalars['Date']['input']>;
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  lastAdjustedById?: InputMaybe<Scalars['Int']['input']>;
  relationDepth?: InputMaybe<RelationDepth>;
  stageCandidateId?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<CalibrationCandidateStatus>;
  subId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryCalibrationConfigExtendedGenerateOneArgs = {
  doneBy: Scalars['Int']['input'];
  scoreType: ResultScoreType;
  stageCandidateId: Scalars['Int']['input'];
};


export type QueryCalibrationConfigFindOneArgs = {
  ig?: InputMaybe<Scalars['Boolean']['input']>;
  projectId: Scalars['Int']['input'];
};


export type QueryCalibrationConfigGenerateManyArgs = {
  ig?: InputMaybe<Scalars['Boolean']['input']>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectIds?: InputMaybe<Array<Scalars['Int']['input']>>;
};


export type QueryCalibrationConfigGenerateOneArgs = {
  ig?: InputMaybe<Scalars['Boolean']['input']>;
  projectId: Scalars['Int']['input'];
};


export type QueryCmAllowedProjectArgs = {
  id: Scalars['Int']['input'];
};


export type QueryCmCandidateResultFindAndCsvArgs = {
  candidateIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  departments?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  freeTextSearch?: InputMaybe<Scalars['String']['input']>;
  hrManagerIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  invitedDate?: InputMaybe<FilterMomentRange>;
  lastDateOfCandidateAction?: InputMaybe<FilterMomentRange>;
  managerIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  moduleType?: InputMaybe<ProjectModuleType>;
  orderBy?: InputMaybe<CmCandidateResultOrderByArgs>;
  projectCandidateGroupedStatus?: InputMaybe<ProjectCandidateGroupedStatus>;
  projectCandidateStatus?: InputMaybe<ProjectCandidateStatus>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  resultScoreFilter?: InputMaybe<IResultScoreFilterArgs>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stageCandidateId?: InputMaybe<Scalars['Int']['input']>;
  stageCandidateIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  stageId?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCmCandidateResultFindAndPaginateArgs = {
  candidateIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  departments?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  freeTextSearch?: InputMaybe<Scalars['String']['input']>;
  hrManagerIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  invitedDate?: InputMaybe<FilterMomentRange>;
  lastDateOfCandidateAction?: InputMaybe<FilterMomentRange>;
  managerIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  moduleType?: InputMaybe<ProjectModuleType>;
  orderBy?: InputMaybe<CmCandidateResultOrderByArgs>;
  projectCandidateGroupedStatus?: InputMaybe<ProjectCandidateGroupedStatus>;
  projectCandidateStatus?: InputMaybe<ProjectCandidateStatus>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  resultScoreFilter?: InputMaybe<IResultScoreFilterArgs>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stageCandidateId?: InputMaybe<Scalars['Int']['input']>;
  stageCandidateIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  stageId?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCmCandidateResultFindManyArgs = {
  candidateIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  departments?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  freeTextSearch?: InputMaybe<Scalars['String']['input']>;
  hrManagerIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  invitedDate?: InputMaybe<FilterMomentRange>;
  lastDateOfCandidateAction?: InputMaybe<FilterMomentRange>;
  managerIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  moduleType?: InputMaybe<ProjectModuleType>;
  orderBy?: InputMaybe<CmCandidateResultOrderByArgs>;
  projectCandidateGroupedStatus?: InputMaybe<ProjectCandidateGroupedStatus>;
  projectCandidateStatus?: InputMaybe<ProjectCandidateStatus>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  resultScoreFilter?: InputMaybe<IResultScoreFilterArgs>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stageCandidateId?: InputMaybe<Scalars['Int']['input']>;
  stageCandidateIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  stageId?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCmDepartmentsArgs = {
  projectId: Scalars['Int']['input'];
};


export type QueryCmProjectCandidateManagersArgs = {
  projectId: Scalars['Int']['input'];
};


export type QueryCmProjectFindManyArgs = {
  moduleType?: InputMaybe<ProjectModuleType>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectIds?: InputMaybe<Array<Scalars['Int']['input']>>;
};


export type QueryCmProjectManagersArgs = {
  projectId: Scalars['Int']['input'];
};


export type QueryCmResultScoreDisplayableKeysFindOneArgs = {
  projectId: Scalars['Int']['input'];
};


export type QueryCmTalentReviewArgs = {
  criticality?: InputMaybe<Array<InputMaybe<TrCriticalityEnum>>>;
  division?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hrManagerIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  impact?: InputMaybe<Array<InputMaybe<TrImpactEnum>>>;
  managerIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  numberSuccessors?: InputMaybe<Array<InputMaybe<TrNumberSuccessorsEnum>>>;
  projectIds: Array<Scalars['Int']['input']>;
  risk?: InputMaybe<Array<InputMaybe<TrRiskEnum>>>;
  score?: InputMaybe<Array<InputMaybe<TrScoreEnum>>>;
  xAxis: CmTrGridChartAxisEnum;
  yAxis: CmTrGridChartAxisEnum;
  zAxis?: InputMaybe<CmTrGridChartAxisEnum>;
};


export type QueryCmTalentReviewGridChartBasicArgs = {
  criticality?: InputMaybe<Array<InputMaybe<TrCriticalityEnum>>>;
  division?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hrManagerIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  impact?: InputMaybe<Array<InputMaybe<TrImpactEnum>>>;
  managerIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  numberSuccessors?: InputMaybe<Array<InputMaybe<TrNumberSuccessorsEnum>>>;
  projectIds: Array<Scalars['Int']['input']>;
  risk?: InputMaybe<Array<InputMaybe<TrRiskEnum>>>;
  score?: InputMaybe<Array<InputMaybe<TrScoreEnum>>>;
  xAxis: CmTrGridChartAxisEnum;
  yAxis: CmTrGridChartAxisEnum;
  zAxis?: InputMaybe<CmTrGridChartAxisEnum>;
};


export type QueryCmTalentReviewGridChartFilterOptionsFindManyArgs = {
  companyId: Scalars['Int']['input'];
};


export type QueryCompanyEmployeeArgs = {
  id: Scalars['Int']['input'];
};


export type QueryCompanyEmployeeFindManyArgs = {
  companyId?: InputMaybe<Scalars['Int']['input']>;
  companyIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  customFields?: InputMaybe<UserCompanyInfoCustomFieldsArgs>;
  department?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emails?: InputMaybe<Array<Scalars['String']['input']>>;
  employeeId?: InputMaybe<Scalars['String']['input']>;
  employeeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  getOption?: InputMaybe<GetOption>;
  hrManagerEmployeeId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  relationDepth?: InputMaybe<RelationDepth>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryCompanyEmployeeFindOneArgs = {
  companyId?: InputMaybe<Scalars['Int']['input']>;
  customFields?: InputMaybe<UserCompanyInfoCustomFieldsArgs>;
  department?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  employeeId?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  getOption?: InputMaybe<GetOption>;
  hrManagerEmployeeId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  relationDepth?: InputMaybe<RelationDepth>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryCompanyEmployeeFreeTextSearchPaginateArgs = {
  companyIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  freetext?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  orderBy?: InputMaybe<CompanyEmployeeOrderByArgs>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCompanyFindUsersArgs = {
  id: Scalars['Int']['input'];
};


export type QueryCompanyMaybeUserEmployeeFindManyArgs = {
  companyId: Scalars['Float']['input'];
};


export type QueryCompanyRoleArgs = {
  companyId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  roleId?: InputMaybe<Scalars['Int']['input']>;
  twoFactorEnabled?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCompanyRolesArgs = {
  companyId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  roleId?: InputMaybe<Scalars['Int']['input']>;
  roleIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  twoFactorEnabled?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCompanySignatureArgs = {
  id: Scalars['Int']['input'];
};


export type QueryCompanySignatureFindManyArgs = {
  companyId?: InputMaybe<Scalars['Int']['input']>;
  companyIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  relationDepth?: InputMaybe<RelationDepth>;
  signature?: InputMaybe<Scalars['String']['input']>;
  signatureEmail?: InputMaybe<Scalars['String']['input']>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryCompanySignatureFindOneArgs = {
  companyId?: InputMaybe<Scalars['Int']['input']>;
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  relationDepth?: InputMaybe<RelationDepth>;
  signature?: InputMaybe<Scalars['String']['input']>;
  signatureEmail?: InputMaybe<Scalars['String']['input']>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryContentViewerViewStageCandidateManagerReportArgs = {
  stageCandidateSub: Scalars['String']['input'];
};


export type QueryContentViewerViewStageCandidateReportArgs = {
  stageCandidateSub: Scalars['String']['input'];
};


export type QueryContextualScoreArgs = {
  id: Scalars['Int']['input'];
  type: BasicScoreType;
};


export type QueryEaStageActionAvailableArgs = {
  companyId: Scalars['Int']['input'];
  stageId: Scalars['Int']['input'];
  szSkillsMergeIds: Array<Scalars['Int']['input']>;
};


export type QueryEaStageActionFindManyArgs = {
  companyId?: InputMaybe<Scalars['Int']['input']>;
  companyIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  stageId?: InputMaybe<Scalars['Int']['input']>;
  stageIds?: InputMaybe<Array<Scalars['Int']['input']>>;
};


export type QueryEaStageActionFindManyPaginatedArgs = {
  companyId?: InputMaybe<Scalars['Int']['input']>;
  companyIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  skip: Scalars['Int']['input'];
  stageId?: InputMaybe<Scalars['Int']['input']>;
  stageIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  take: Scalars['Int']['input'];
};


export type QueryEaStageActionFindOneArgs = {
  companyId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  stageId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryEntityLanguageArgs = {
  id: Scalars['Int']['input'];
};


export type QueryEntityLanguageFindManyArgs = {
  entityId?: InputMaybe<Scalars['Int']['input']>;
  entityIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  entityType?: InputMaybe<EntityType>;
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  language?: InputMaybe<Language>;
  relationDepth?: InputMaybe<RelationDepth>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryEntityLanguageFindOneArgs = {
  entityId?: InputMaybe<Scalars['Int']['input']>;
  entityType?: InputMaybe<EntityType>;
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  language?: InputMaybe<Language>;
  relationDepth?: InputMaybe<RelationDepth>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryExternalAssessmentFindManyArgs = {
  companyId?: InputMaybe<Scalars['Int']['input']>;
  eaCompanyPlatformId?: InputMaybe<Scalars['Int']['input']>;
  externalPlatformType?: InputMaybe<ExternalPlatformType>;
  id: Scalars['Int']['input'];
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  szSkillsMergeIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  textSearch?: InputMaybe<Scalars['String']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryExternalAssessmentFindManyPaginatedArgs = {
  companyId?: InputMaybe<Scalars['Int']['input']>;
  eaCompanyPlatformId?: InputMaybe<Scalars['Int']['input']>;
  externalPlatformType?: InputMaybe<ExternalPlatformType>;
  id: Scalars['Int']['input'];
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  skip: Scalars['Int']['input'];
  szSkillsMergeIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  take: Scalars['Int']['input'];
  textSearch?: InputMaybe<Scalars['String']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryExternalAssessmentFindOneArgs = {
  id: Scalars['Int']['input'];
};


export type QueryExternalPlatformAssessmentFindManyArgs = {
  externalPlatformType: Array<ExternalPlatformType>;
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  textSearch?: InputMaybe<Scalars['String']['input']>;
};


export type QueryExternalPlatformAssessmentFindOneArgs = {
  externalPlatformType: Array<ExternalPlatformType>;
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFieldArgs = {
  id: Scalars['Int']['input'];
};


export type QueryFieldsArgs = {
  fieldType?: InputMaybe<FieldType>;
  formManagerType?: InputMaybe<FormManagerType>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  question?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFixContentPieceArgs = {
  softSkillId: Scalars['Int']['input'];
  traitIds?: InputMaybe<Array<Scalars['Int']['input']>>;
};


export type QueryFormArgs = {
  id: Scalars['Int']['input'];
};


export type QueryFormBuilderArgs = {
  id: Scalars['Int']['input'];
};


export type QueryFormBuilderFindByOwnerAndTypeArgs = {
  formManagerType?: InputMaybe<FormManagerType>;
  formOwnerId?: InputMaybe<Scalars['Int']['input']>;
  formType?: InputMaybe<FormType>;
};


export type QueryFormCandidateFindManyArgs = {
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  createdAts?: InputMaybe<Array<Scalars['Date']['input']>>;
  deletedAt?: InputMaybe<Scalars['Date']['input']>;
  deletedAts?: InputMaybe<Array<Scalars['Date']['input']>>;
  formId?: InputMaybe<Scalars['Int']['input']>;
  formIds: Array<Scalars['Int']['input']>;
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  relationDepth?: InputMaybe<RelationDepth>;
  stageCandidateId?: InputMaybe<Scalars['Int']['input']>;
  stageCandidateIds: Array<Scalars['Int']['input']>;
  status?: InputMaybe<FormCandidateStatus>;
  statuses: Array<FormCandidateStatus>;
  subId?: InputMaybe<Scalars['String']['input']>;
  subIds?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  updatedAts?: InputMaybe<Array<Scalars['Date']['input']>>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryFormCandidateFindOneArgs = {
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  deletedAt?: InputMaybe<Scalars['Date']['input']>;
  formId?: InputMaybe<Scalars['Int']['input']>;
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  relationDepth?: InputMaybe<RelationDepth>;
  stageCandidateId?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<FormCandidateStatus>;
  subId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryFormReportFindAssociatedIdsArgs = {
  formManagerType?: InputMaybe<FormManagerType>;
  formOwnerId?: InputMaybe<Scalars['Int']['input']>;
  formType?: InputMaybe<FormType>;
};


export type QueryFormReportFindFormOwnersArgs = {
  formManagerType: FormManagerType;
  formType: FormType;
};


export type QueryFormReportFindFormTypesArgs = {
  formManagerType: FormManagerType;
};


export type QueryFormsArgs = {
  formManagerType?: InputMaybe<FormManagerType>;
  formOwnerId?: InputMaybe<Scalars['Int']['input']>;
  formType?: InputMaybe<FormType>;
  name?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetStageActionsArgs = {
  stageCandidateId: Scalars['Int']['input'];
};


export type QueryGetTestCardsArgs = {
  stageCandidateId: Scalars['Int']['input'];
};


export type QueryIgCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type QueryIgCategoryFindManyArgs = {
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  relationDepth?: InputMaybe<RelationDepth>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryIgCategoryFindOneArgs = {
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  relationDepth?: InputMaybe<RelationDepth>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryIgInterviewGuideArgs = {
  id: Scalars['Int']['input'];
};


export type QueryIgInterviewGuideCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type QueryIgInterviewGuideCategoryFindManyArgs = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  colour?: InputMaybe<IgCategoryColour>;
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  interviewGuideId?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  relationDepth?: InputMaybe<RelationDepth>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryIgInterviewGuideCategoryFindOneArgs = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  colour?: InputMaybe<IgCategoryColour>;
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  interviewGuideId?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  relationDepth?: InputMaybe<RelationDepth>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryIgInterviewGuideFindManyArgs = {
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Scalars['Int']['input']>;
  relationDepth?: InputMaybe<RelationDepth>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryIgInterviewGuideFindOneArgs = {
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Scalars['Int']['input']>;
  relationDepth?: InputMaybe<RelationDepth>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryIgRenderFindOneArgs = {
  authorId?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  deletedAt?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  interviewGuideId?: InputMaybe<Scalars['Int']['input']>;
  pageStatus?: InputMaybe<IgRenderPageStatus>;
  status?: InputMaybe<IgRenderStatus>;
  subId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
};


export type QueryIgStepArgs = {
  id: Scalars['Int']['input'];
};


export type QueryIgStepFindManyArgs = {
  action?: InputMaybe<Scalars['String']['input']>;
  colour?: InputMaybe<IgCategoryColour>;
  durationInSeconds?: InputMaybe<Scalars['Int']['input']>;
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  interviewGuideId?: InputMaybe<Scalars['Int']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  questionType?: InputMaybe<IgQuestionType>;
  relationDepth?: InputMaybe<RelationDepth>;
  staticQuestionName?: InputMaybe<Scalars['String']['input']>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryIgStepFindOneArgs = {
  action?: InputMaybe<Scalars['String']['input']>;
  colour?: InputMaybe<IgCategoryColour>;
  durationInSeconds?: InputMaybe<Scalars['Int']['input']>;
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  interviewGuideId?: InputMaybe<Scalars['Int']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  questionType?: InputMaybe<IgQuestionType>;
  relationDepth?: InputMaybe<RelationDepth>;
  staticQuestionName?: InputMaybe<Scalars['String']['input']>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryInterviewGuideBehaviourFindManyArgs = {
  behaviourId?: InputMaybe<Scalars['Int']['input']>;
  behaviourIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  classification?: InputMaybe<IgRenderBehaviourClassification>;
  classifications?: InputMaybe<Array<IgRenderBehaviourClassification>>;
  doneById?: InputMaybe<Scalars['Int']['input']>;
  doneByIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  interviewGuideId?: InputMaybe<Scalars['Int']['input']>;
  interviewGuideIds?: InputMaybe<Array<Scalars['Int']['input']>>;
};


export type QueryInterviewGuideFeedbackFindOneArgs = {
  doneById?: InputMaybe<Scalars['Int']['input']>;
  doneByIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  feedback?: InputMaybe<Scalars['String']['input']>;
  feedbacks?: InputMaybe<Array<Scalars['String']['input']>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  interviewGuideId?: InputMaybe<Scalars['Int']['input']>;
  interviewGuideIds?: InputMaybe<Array<Scalars['Int']['input']>>;
};


export type QueryInterviewGuideFindOneArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  stageCandidateId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryInterviewGuidePageStatusFindOneArgs = {
  doneById?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  interviewGuideId?: InputMaybe<Scalars['Int']['input']>;
  secondPageOpened?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<IgRenderPageStatus>;
};


export type QueryInterviewGuideRecipientFindManyArgs = {
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  createdAts?: InputMaybe<Array<Scalars['Date']['input']>>;
  deletedAt?: InputMaybe<Scalars['Date']['input']>;
  deletedAts?: InputMaybe<Array<Scalars['Date']['input']>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  recipientId?: InputMaybe<Scalars['Int']['input']>;
  recipientIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  renderId?: InputMaybe<Scalars['Int']['input']>;
  renderIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  subId?: InputMaybe<Scalars['String']['input']>;
  subIds?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  updatedAts?: InputMaybe<Array<Scalars['Date']['input']>>;
};


export type QueryInterviewGuideRecipientUniqueFindManyArgs = {
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  createdAts?: InputMaybe<Array<Scalars['Date']['input']>>;
  deletedAt?: InputMaybe<Scalars['Date']['input']>;
  deletedAts?: InputMaybe<Array<Scalars['Date']['input']>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  recipientId?: InputMaybe<Scalars['Int']['input']>;
  recipientIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  renderId?: InputMaybe<Scalars['Int']['input']>;
  renderIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  subId?: InputMaybe<Scalars['String']['input']>;
  subIds?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  updatedAts?: InputMaybe<Array<Scalars['Date']['input']>>;
};


export type QueryInterviewGuideSsDescriptionFindManyArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  stageCandidateId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryInterviewQuestionContentFindOneArgs = {
  contextId?: InputMaybe<Scalars['Int']['input']>;
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  mainQuestion?: InputMaybe<Scalars['String']['input']>;
  relationDepth?: InputMaybe<RelationDepth>;
  roleLevel?: InputMaybe<ContentRoleLevel>;
  subQuestions?: InputMaybe<Array<Scalars['String']['input']>>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryInterviewQuestionReasonContentFindOneArgs = {
  contextId?: InputMaybe<Scalars['Int']['input']>;
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  numLowerBound?: InputMaybe<Scalars['Int']['input']>;
  relationDepth?: InputMaybe<RelationDepth>;
  roleLevel?: InputMaybe<ContentRoleLevel>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryInterviewQuestionRoleLevelContentArgs = {
  classification?: InputMaybe<ContentClassification>;
  feedback?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  mainQuestion?: InputMaybe<Scalars['String']['input']>;
  privateId?: InputMaybe<Scalars['Int']['input']>;
  reasonForQuestion?: InputMaybe<Scalars['String']['input']>;
  roleLevel?: InputMaybe<ContentRoleLevel>;
  softSkillId?: InputMaybe<Scalars['Int']['input']>;
  subQuestions?: InputMaybe<Array<Scalars['String']['input']>>;
  summary?: InputMaybe<Scalars['String']['input']>;
  traitId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryInterviewQuestionRoleLevelContentFindManyAndCountArgs = {
  classification?: InputMaybe<ContentClassification>;
  classifications?: InputMaybe<Array<ContentClassification>>;
  companyIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  feedback?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  mainQuestion?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<Scalars['String']['input']>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  privateId?: InputMaybe<Scalars['Int']['input']>;
  reasonForQuestion?: InputMaybe<Scalars['String']['input']>;
  roleLevel?: InputMaybe<ContentRoleLevel>;
  roleLevels?: InputMaybe<Array<ContentRoleLevel>>;
  softSkillId?: InputMaybe<Scalars['Int']['input']>;
  softSkillIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  subQuestions?: InputMaybe<Array<Scalars['String']['input']>>;
  summary?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  traitId?: InputMaybe<Scalars['Int']['input']>;
  traitIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryInterviewQuestionRoleLevelContentsArgs = {
  classification?: InputMaybe<ContentClassification>;
  classifications?: InputMaybe<Array<ContentClassification>>;
  companyIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  feedback?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  mainQuestion?: InputMaybe<Scalars['String']['input']>;
  privateId?: InputMaybe<Scalars['Int']['input']>;
  reasonForQuestion?: InputMaybe<Scalars['String']['input']>;
  roleLevel?: InputMaybe<ContentRoleLevel>;
  roleLevels?: InputMaybe<Array<ContentRoleLevel>>;
  softSkillId?: InputMaybe<Scalars['Int']['input']>;
  softSkillIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  subQuestions?: InputMaybe<Array<Scalars['String']['input']>>;
  summary?: InputMaybe<Scalars['String']['input']>;
  traitId?: InputMaybe<Scalars['Int']['input']>;
  traitIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryInvitationArgs = {
  id: Scalars['Int']['input'];
};


export type QueryInvitationFindManyArgs = {
  baseUrl?: InputMaybe<Scalars['String']['input']>;
  companyId?: InputMaybe<Scalars['Int']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emails?: InputMaybe<Array<Scalars['String']['input']>>;
  expiresAt?: InputMaybe<Scalars['Date']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  invitationToken?: InputMaybe<Scalars['String']['input']>;
  invitationType?: InputMaybe<InvitationType>;
  language?: InputMaybe<Language>;
  lastActionType?: InputMaybe<InvitationLastActionType>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  relationDepth?: InputMaybe<RelationDepth>;
  status?: InputMaybe<InvitationStatusCode>;
  targetId?: InputMaybe<Scalars['Int']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryInvitationFindOneArgs = {
  baseUrl?: InputMaybe<Scalars['String']['input']>;
  companyId?: InputMaybe<Scalars['Int']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  expiresAt?: InputMaybe<Scalars['Date']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  invitationToken?: InputMaybe<Scalars['String']['input']>;
  invitationType?: InputMaybe<InvitationType>;
  language?: InputMaybe<Language>;
  lastActionType?: InputMaybe<InvitationLastActionType>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  relationDepth?: InputMaybe<RelationDepth>;
  status?: InputMaybe<InvitationStatusCode>;
  targetId?: InputMaybe<Scalars['Int']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryProjectFindManyArgs = {
  companyId?: InputMaybe<Scalars['Int']['input']>;
  companyIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  companySignatureId?: InputMaybe<Scalars['Int']['input']>;
  creatorId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  isStopped?: InputMaybe<Scalars['Boolean']['input']>;
  managerIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  moduleType?: InputMaybe<ProjectModuleType>;
  name?: InputMaybe<Scalars['String']['input']>;
  subId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProjectFindManyByCompanyArgs = {
  companyId: Scalars['Int']['input'];
};


export type QueryProjectFindManysByCompanyWithStageCandidateRangeArgs = {
  companyId?: InputMaybe<Scalars['Int']['input']>;
  companyIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  companySignatureId?: InputMaybe<Scalars['Int']['input']>;
  creatorId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  isStopped?: InputMaybe<Scalars['Boolean']['input']>;
  managerIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  moduleType?: InputMaybe<ProjectModuleType>;
  name?: InputMaybe<Scalars['String']['input']>;
  stageCandidateCreatedAtFrom?: InputMaybe<Scalars['Date']['input']>;
  stageCandidateCreatedAtTo?: InputMaybe<Scalars['Date']['input']>;
  subId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProjectRequestArgs = {
  id: Scalars['Int']['input'];
};


export type QueryProjectRequestFileUploadArgs = {
  id: Scalars['Int']['input'];
};


export type QueryProjectRequestFileUploadFindManyArgs = {
  blobId?: InputMaybe<Scalars['Int']['input']>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  projectRequestId?: InputMaybe<Scalars['Int']['input']>;
  projectRequestIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  relationDepth?: InputMaybe<RelationDepth>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryProjectRequestFileUploadFindOneArgs = {
  blobId?: InputMaybe<Scalars['Int']['input']>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  projectRequestId?: InputMaybe<Scalars['Int']['input']>;
  relationDepth?: InputMaybe<RelationDepth>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryProjectRequestFindManyArgs = {
  approvalRequestDate?: InputMaybe<Scalars['DateTime']['input']>;
  companyId?: InputMaybe<Scalars['Int']['input']>;
  creatorId?: InputMaybe<Scalars['Int']['input']>;
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectName?: InputMaybe<Scalars['String']['input']>;
  relationDepth?: InputMaybe<RelationDepth>;
  status?: InputMaybe<ProjectRequestStatus>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryProjectRequestFindOneArgs = {
  approvalRequestDate?: InputMaybe<Scalars['DateTime']['input']>;
  companyId?: InputMaybe<Scalars['Int']['input']>;
  creatorId?: InputMaybe<Scalars['Int']['input']>;
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectName?: InputMaybe<Scalars['String']['input']>;
  relationDepth?: InputMaybe<RelationDepth>;
  status?: InputMaybe<ProjectRequestStatus>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryProjectRequestUserArgs = {
  id: Scalars['Int']['input'];
};


export type QueryProjectRequestUserApprovalArgs = {
  id: Scalars['Int']['input'];
};


export type QueryProjectRequestUserApprovalFindManyArgs = {
  approvalRequestDate?: InputMaybe<Scalars['DateTime']['input']>;
  approvalStatus?: InputMaybe<ProjectRequestUserApprovalStatus>;
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  projectRequestUserIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  relationDepth?: InputMaybe<RelationDepth>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryProjectRequestUserApprovalFindOneArgs = {
  approvalRequestDate?: InputMaybe<Scalars['DateTime']['input']>;
  approvalStatus?: InputMaybe<ProjectRequestUserApprovalStatus>;
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  relationDepth?: InputMaybe<RelationDepth>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryProjectRequestUserFindManyArgs = {
  approvalId?: InputMaybe<Scalars['Int']['input']>;
  approvalIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  projectRequestId?: InputMaybe<Scalars['Int']['input']>;
  projectRequestIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  relationDepth?: InputMaybe<RelationDepth>;
  type?: InputMaybe<ProjectRequestUserType>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  userIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryProjectRequestUserFindOneArgs = {
  approvalId?: InputMaybe<Scalars['Int']['input']>;
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  projectRequestId?: InputMaybe<Scalars['Int']['input']>;
  relationDepth?: InputMaybe<RelationDepth>;
  type?: InputMaybe<ProjectRequestUserType>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryQCalcVisualiseAssessmentArgs = {
  allowedTimePerSection?: InputMaybe<Scalars['Int']['input']>;
  completedAt?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isPractice?: InputMaybe<Scalars['Boolean']['input']>;
  nQuestionsPerTrait?: InputMaybe<Scalars['Int']['input']>;
  normGroupType?: InputMaybe<NormGroupType>;
  roleLevel?: InputMaybe<ContentRoleLevel>;
  startingAbilityLowerBound?: InputMaybe<Scalars['Float']['input']>;
  startingAbilityUpperBound?: InputMaybe<Scalars['Float']['input']>;
  startingQuestions?: InputMaybe<Array<IAssessmentDataQuestionModel>>;
  testCandidateId?: InputMaybe<Scalars['Int']['input']>;
  traitIds?: InputMaybe<Array<Scalars['Int']['input']>>;
};


export type QueryReportArgs = {
  id: Scalars['Int']['input'];
};


export type QueryReportAssignmentArgs = {
  id: Scalars['Int']['input'];
};


export type QueryReportAssignmentFindManyArgs = {
  assignedId?: InputMaybe<Scalars['Int']['input']>;
  assignedType?: InputMaybe<RAssignedType>;
  id?: InputMaybe<Scalars['Int']['input']>;
  reportId?: InputMaybe<Scalars['Int']['input']>;
  subType?: InputMaybe<ReportSubType>;
  type?: InputMaybe<ReportType>;
};


export type QueryReportAssignmentFindStageReportArgs = {
  companyId?: InputMaybe<Scalars['Int']['input']>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  stageId?: InputMaybe<Scalars['Int']['input']>;
  subType: ReportSubType;
  type: ReportType;
};


export type QueryReportConfigArgs = {
  id: Scalars['Int']['input'];
};


export type QueryReportConfigFindManyArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  newPageBefore?: InputMaybe<Scalars['Boolean']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  reportId?: InputMaybe<Scalars['Int']['input']>;
  widgetConfigsToUpsert?: InputMaybe<Array<WidgetConfigUpsertOneBatchedWithReportConfigArgs>>;
  widgetId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryReportFindManyArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Scalars['Int']['input']>;
  ownerType?: InputMaybe<ReportOwnerType>;
  subType?: InputMaybe<ReportSubType>;
  type?: InputMaybe<ReportType>;
};


export type QueryReportRenderArgs = {
  subId: Scalars['String']['input'];
};


export type QueryReportRenderApiArgs = {
  identitySubId: Scalars['String']['input'];
  subId: Scalars['String']['input'];
};


export type QueryReportRenderDeleteManyArgs = {
  dataSourceId?: InputMaybe<Scalars['Int']['input']>;
  dataSourceIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Scalars['Int']['input']>;
  ownerType?: InputMaybe<ReportOwnerType>;
  reportId?: InputMaybe<Scalars['Int']['input']>;
  reportRenderStatus?: InputMaybe<Scalars['String']['input']>;
  reportRenderStatuses?: InputMaybe<Array<ReportRenderStatus>>;
  reportRenderType?: InputMaybe<ReportRenderType>;
  subId?: InputMaybe<Scalars['String']['input']>;
  subType?: InputMaybe<ReportSubType>;
  type?: InputMaybe<ReportType>;
};


export type QueryReportRenderFindManyArgs = {
  dataSourceId?: InputMaybe<Scalars['Int']['input']>;
  dataSourceIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Scalars['Int']['input']>;
  ownerType?: InputMaybe<ReportOwnerType>;
  relationDepth?: InputMaybe<RelationDepth>;
  reportId?: InputMaybe<Scalars['Int']['input']>;
  reportRenderStatus?: InputMaybe<Scalars['String']['input']>;
  reportRenderStatuses?: InputMaybe<Array<ReportRenderStatus>>;
  reportRenderType?: InputMaybe<ReportRenderType>;
  subId?: InputMaybe<Scalars['String']['input']>;
  subType?: InputMaybe<ReportSubType>;
  type?: InputMaybe<ReportType>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryReportRenderFindOneArgs = {
  dataSourceId?: InputMaybe<Scalars['Int']['input']>;
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Scalars['Int']['input']>;
  ownerType?: InputMaybe<ReportOwnerType>;
  relationDepth?: InputMaybe<RelationDepth>;
  reportId?: InputMaybe<Scalars['Int']['input']>;
  reportRenderStatus?: InputMaybe<Scalars['String']['input']>;
  reportRenderType?: InputMaybe<ReportRenderType>;
  subId?: InputMaybe<Scalars['String']['input']>;
  subType?: InputMaybe<ReportSubType>;
  type?: InputMaybe<ReportType>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryReportRenderWithDataArgs = {
  subId: Scalars['String']['input'];
};


export type QueryReportRenderWithDataApiArgs = {
  identitySubId: Scalars['String']['input'];
  subId: Scalars['String']['input'];
};


export type QueryReportsFindByCompanyArgs = {
  includeSharedReports: Scalars['Boolean']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Scalars['Int']['input']>;
  ownerType?: InputMaybe<ReportOwnerType>;
  subType?: InputMaybe<ReportSubType>;
  type?: InputMaybe<ReportType>;
};


export type QueryRespondantFormArgs = {
  associatedId: Scalars['Int']['input'];
  formOwnerId: Scalars['Int']['input'];
  formType: FormType;
  respondantId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryResultAccessFindManyArgs = {
  stageCandidateId?: InputMaybe<Scalars['Int']['input']>;
  stageCandidateIds?: InputMaybe<Array<Scalars['Int']['input']>>;
};


export type QueryResultAccessFindOneArgs = {
  stageCandidateId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryResultFindBatchArgs = {
  args: Array<ResultFindOneArgs>;
  getOption?: InputMaybe<GetOption>;
  relationDepth?: InputMaybe<RelationDepth>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryResultFindBatchesArgs = {
  args: Array<ResultFindManyArgs>;
  getOption?: InputMaybe<GetOption>;
  relationDepth?: InputMaybe<RelationDepth>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryResultFindManyArgs = {
  copiedFrom?: InputMaybe<Scalars['Int']['input']>;
  copiedFroms?: InputMaybe<Array<Scalars['Int']['input']>>;
  doneBy?: InputMaybe<Scalars['Int']['input']>;
  doneBys?: InputMaybe<Array<Scalars['Int']['input']>>;
  doneFor?: InputMaybe<Scalars['Int']['input']>;
  doneFors?: InputMaybe<Array<Scalars['Int']['input']>>;
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  label?: InputMaybe<Scalars['String']['input']>;
  labels?: InputMaybe<Array<Scalars['String']['input']>>;
  manuallyAdjustedBy?: InputMaybe<Scalars['Int']['input']>;
  manuallyAdjustedBys?: InputMaybe<Array<Scalars['Int']['input']>>;
  measurementId?: InputMaybe<Scalars['Int']['input']>;
  measurementIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  measurementType?: InputMaybe<ResultMeasurementType>;
  measurementTypes?: InputMaybe<Array<ResultMeasurementType>>;
  onlyLatest?: InputMaybe<Scalars['Boolean']['input']>;
  onlyLatestVersionPerLabel?: InputMaybe<Scalars['Boolean']['input']>;
  previousVersionId?: InputMaybe<Scalars['Int']['input']>;
  previousVersionIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  relationDepth?: InputMaybe<RelationDepth>;
  scoreType?: InputMaybe<ResultScoreType>;
  scoreTypes?: InputMaybe<Array<ResultScoreType>>;
  version?: InputMaybe<Scalars['Int']['input']>;
  versions?: InputMaybe<Array<Scalars['Int']['input']>>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryResultFindOneArgs = {
  copiedFrom?: InputMaybe<Scalars['Int']['input']>;
  doneBy?: InputMaybe<Scalars['Int']['input']>;
  doneFor?: InputMaybe<Scalars['Int']['input']>;
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  manuallyAdjustedBy?: InputMaybe<Scalars['Int']['input']>;
  measurementId?: InputMaybe<Scalars['Int']['input']>;
  measurementType?: InputMaybe<ResultMeasurementType>;
  onlyLatest?: InputMaybe<Scalars['Boolean']['input']>;
  onlyLatestVersionPerLabel?: InputMaybe<Scalars['Boolean']['input']>;
  previousVersionId?: InputMaybe<Scalars['Int']['input']>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  relationDepth?: InputMaybe<RelationDepth>;
  scoreType?: InputMaybe<ResultScoreType>;
  version?: InputMaybe<Scalars['Int']['input']>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryRoleFindManyArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  filterForIdentity?: InputMaybe<Scalars['Boolean']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  names?: InputMaybe<Array<Scalars['String']['input']>>;
  type?: InputMaybe<RoleType>;
};


export type QueryRoleSKillSelfAssessmentCandidateGetExistingSoftSkillsAndResultsArgs = {
  projectId: Scalars['Int']['input'];
};


export type QueryRssAssessmentCandidateFindManyArgs = {
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  createdAts?: InputMaybe<Array<Scalars['Date']['input']>>;
  deletedAt?: InputMaybe<Scalars['Date']['input']>;
  deletedAts?: InputMaybe<Array<Scalars['Date']['input']>>;
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  relationDepth?: InputMaybe<RelationDepth>;
  rssAssessmentId?: InputMaybe<Scalars['Int']['input']>;
  rssAssessmentIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  stageCandidateId?: InputMaybe<Scalars['Int']['input']>;
  stageCandidateIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  status?: InputMaybe<RssAssessmentCandidateStatus>;
  statuses?: InputMaybe<Array<RssAssessmentCandidateStatus>>;
  subId?: InputMaybe<Scalars['String']['input']>;
  subIds?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  updatedAts?: InputMaybe<Array<Scalars['Date']['input']>>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryRssAssessmentCandidateFindOneArgs = {
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  deletedAt?: InputMaybe<Scalars['Date']['input']>;
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  relationDepth?: InputMaybe<RelationDepth>;
  rssAssessmentId?: InputMaybe<Scalars['Int']['input']>;
  stageCandidateId?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<RssAssessmentCandidateStatus>;
  subId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryRssAssessmentCandidateOpenOneArgs = {
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  deletedAt?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  rssAssessmentId?: InputMaybe<Scalars['Int']['input']>;
  stageCandidateId?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<RssAssessmentCandidateStatus>;
  subId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
};


export type QueryRssAssessmentFindManyArgs = {
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  createdAts?: InputMaybe<Array<Scalars['Date']['input']>>;
  deletedAt?: InputMaybe<Scalars['Date']['input']>;
  deletedAts?: InputMaybe<Array<Scalars['Date']['input']>>;
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  relationDepth?: InputMaybe<RelationDepth>;
  stageId?: InputMaybe<Scalars['Int']['input']>;
  stageIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  subId?: InputMaybe<Scalars['String']['input']>;
  subIds?: InputMaybe<Array<Scalars['String']['input']>>;
  type?: InputMaybe<RssAssessmentType>;
  types?: InputMaybe<Array<RssAssessmentType>>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  updatedAts?: InputMaybe<Array<Scalars['Date']['input']>>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryRssAssessmentFindOneArgs = {
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  deletedAt?: InputMaybe<Scalars['Date']['input']>;
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  relationDepth?: InputMaybe<RelationDepth>;
  stageId?: InputMaybe<Scalars['Int']['input']>;
  subId?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<RssAssessmentType>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QuerySkillCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type QuerySkillCategoryFindManyArgs = {
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  names?: InputMaybe<Array<Scalars['String']['input']>>;
  relationDepth?: InputMaybe<RelationDepth>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QuerySkillCategoryFindOneArgs = {
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  relationDepth?: InputMaybe<RelationDepth>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QuerySkillCategoryFreeTextSearchPaginatedArgs = {
  freetext?: InputMaybe<Scalars['String']['input']>;
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  relationDepth?: InputMaybe<RelationDepth>;
  skip: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QuerySoftSkillArgs = {
  getOption?: InputMaybe<GetOption>;
  id: Scalars['Int']['input'];
};


export type QuerySoftSkillFindManyArgs = {
  category?: InputMaybe<Scalars['String']['input']>;
  companyId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  iconBlobId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  measurementConstructType?: InputMaybe<MeasurementConstructType>;
  name?: InputMaybe<Scalars['String']['input']>;
  names?: InputMaybe<Array<Scalars['String']['input']>>;
  traitId?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySoftSkillFindManyByCompanyIdArgs = {
  id: Scalars['Int']['input'];
};


export type QuerySoftSkillFindManyByProjectIdArgs = {
  category?: InputMaybe<Scalars['String']['input']>;
  companyId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  iconBlobId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  measurementConstructType?: InputMaybe<MeasurementConstructType>;
  name?: InputMaybe<Scalars['String']['input']>;
  projectId: Scalars['Int']['input'];
  traitId?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySoftSkillFindManyByTraitIdArgs = {
  id: Scalars['Int']['input'];
};


export type QuerySoftSkillFreeTextSearchPaginateArgs = {
  companyId?: InputMaybe<Scalars['Int']['input']>;
  freetext: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySoftSkillGetAllValidForProjectArgs = {
  projectId: Scalars['Int']['input'];
};


export type QuerySoftSkillProjectModuleTypeFindOneArgs = {
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  projectModuleType?: InputMaybe<ProjectModuleType>;
  relationDepth?: InputMaybe<RelationDepth>;
  softSkillId?: InputMaybe<Scalars['Int']['input']>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QuerySoftSkillRoleLevelContentArgs = {
  candidateContent?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  grade?: InputMaybe<Grade>;
  hiringManagerContent?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  privateId?: InputMaybe<Scalars['Int']['input']>;
  roleLevel?: InputMaybe<ContentRoleLevel>;
  softSkillId?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySoftSkillRoleLevelContentFindManyAndCountArgs = {
  candidateContent?: InputMaybe<Scalars['String']['input']>;
  companyIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  grade?: InputMaybe<Grade>;
  grades?: InputMaybe<Array<Grade>>;
  hiringManagerContent?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  order?: InputMaybe<Array<Scalars['String']['input']>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  privateId?: InputMaybe<Scalars['Int']['input']>;
  roleLevel?: InputMaybe<ContentRoleLevel>;
  roleLevels?: InputMaybe<Array<ContentRoleLevel>>;
  softSkillId?: InputMaybe<Scalars['Int']['input']>;
  softSkillIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySoftSkillRoleLevelContentsArgs = {
  candidateContent?: InputMaybe<Scalars['String']['input']>;
  companyIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  grade?: InputMaybe<Grade>;
  grades?: InputMaybe<Array<Grade>>;
  hiringManagerContent?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  privateId?: InputMaybe<Scalars['Int']['input']>;
  roleLevel?: InputMaybe<ContentRoleLevel>;
  roleLevels?: InputMaybe<Array<ContentRoleLevel>>;
  softSkillId?: InputMaybe<Scalars['Int']['input']>;
  softSkillIds?: InputMaybe<Array<Scalars['Int']['input']>>;
};


export type QuerySoftSkillSuccessProfileContentArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  roleLevel?: InputMaybe<ContentRoleLevel>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  softSkillId?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySoftSkillSuccessProfileContentFindManyAndCountArgs = {
  companyIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  order?: InputMaybe<Array<Scalars['String']['input']>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  roleLevel?: InputMaybe<ContentRoleLevel>;
  roleLevels?: InputMaybe<Array<ContentRoleLevel>>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  softSkillId?: InputMaybe<Scalars['Int']['input']>;
  softSkillIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySoftSkillSuccessProfileContentsArgs = {
  companyIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  roleLevel?: InputMaybe<ContentRoleLevel>;
  roleLevels?: InputMaybe<Array<ContentRoleLevel>>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  softSkillId?: InputMaybe<Scalars['Int']['input']>;
  softSkillIds?: InputMaybe<Array<Scalars['Int']['input']>>;
};


export type QuerySoftSkillTraitFindManyBySoftSkillArgs = {
  id: Scalars['Int']['input'];
};


export type QuerySoftSkillTraitFindManyBySoftSkillsArgs = {
  ids: Array<Scalars['Int']['input']>;
};


export type QuerySoftSkillTraitsArgs = {
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  orientation?: InputMaybe<Orientation>;
  softSkillIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  traitIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  weight?: InputMaybe<Scalars['Float']['input']>;
};


export type QuerySoftSkillTypeSuccessProfileContentArgs = {
  id: Scalars['Int']['input'];
};


export type QuerySoftSkillTypeSuccessProfileContentFindManyArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  getOption?: InputMaybe<GetOption>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  relationDepth?: InputMaybe<RelationDepth>;
  softSkillType?: InputMaybe<SoftSkillType>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QuerySoftSkillTypeSuccessProfileContentFindOneArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  relationDepth?: InputMaybe<RelationDepth>;
  softSkillType?: InputMaybe<SoftSkillType>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryStageArgs = {
  id: Scalars['Int']['input'];
};


export type QueryStageCandidateArgs = {
  id: Scalars['Int']['input'];
};


export type QueryStageCandidateDeleteLogArgs = {
  id: Scalars['Int']['input'];
};


export type QueryStageCandidateDeleteLogsFindManyArgs = {
  doneBy?: InputMaybe<Scalars['Int']['input']>;
  doneBys?: InputMaybe<Array<Scalars['Int']['input']>>;
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  reason?: InputMaybe<StageCandidateDeleteLogsReasonEnum>;
  reasons?: InputMaybe<Array<StageCandidateDeleteLogsReasonEnum>>;
  relationDepth?: InputMaybe<RelationDepth>;
  stageCandidateId?: InputMaybe<Scalars['Int']['input']>;
  stageCandidateIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryStageCandidateDeleteLogsFindOneArgs = {
  doneBy?: InputMaybe<Scalars['Int']['input']>;
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  reason?: InputMaybe<StageCandidateDeleteLogsReasonEnum>;
  relationDepth?: InputMaybe<RelationDepth>;
  stageCandidateId?: InputMaybe<Scalars['Int']['input']>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryStageCandidateFindManyArgs = {
  candidateId?: InputMaybe<Scalars['Int']['input']>;
  candidateIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdAtFrom?: InputMaybe<Scalars['Date']['input']>;
  createdAtTo?: InputMaybe<Scalars['Date']['input']>;
  doneBy?: InputMaybe<Scalars['Int']['input']>;
  doneBys?: InputMaybe<Array<Scalars['Int']['input']>>;
  doneFor?: InputMaybe<Scalars['Int']['input']>;
  doneFors?: InputMaybe<Array<Scalars['Int']['input']>>;
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  orderBy?: InputMaybe<StageCandidateOrderByArgs>;
  projectTrackerId?: InputMaybe<Scalars['Int']['input']>;
  relationDepth?: InputMaybe<RelationDepth>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stageId?: InputMaybe<Scalars['Int']['input']>;
  stageIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  stageResultId?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<StageCandidateStatus>;
  statuses?: InputMaybe<Array<StageCandidateStatus>>;
  subId?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  updatedAtFrom?: InputMaybe<Scalars['Date']['input']>;
  updatedAtTo?: InputMaybe<Scalars['Date']['input']>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryStageCandidateFindOneArgs = {
  candidateId?: InputMaybe<Scalars['Int']['input']>;
  doneBy?: InputMaybe<Scalars['Int']['input']>;
  doneFor?: InputMaybe<Scalars['Int']['input']>;
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  projectTrackerId?: InputMaybe<Scalars['Int']['input']>;
  relationDepth?: InputMaybe<RelationDepth>;
  stageId?: InputMaybe<Scalars['Int']['input']>;
  stageResultId?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<StageCandidateStatus>;
  subId?: InputMaybe<Scalars['String']['input']>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryStageFindManyArgs = {
  createInterviewGuide?: InputMaybe<Scalars['Boolean']['input']>;
  emailCandidateReport?: InputMaybe<Scalars['Boolean']['input']>;
  emailManagerReport?: InputMaybe<Scalars['Boolean']['input']>;
  emailSzAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  endTime?: InputMaybe<Scalars['Date']['input']>;
  formId?: InputMaybe<Scalars['Int']['input']>;
  getOption?: InputMaybe<GetOption>;
  hasCalibration?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  relationDepth?: InputMaybe<RelationDepth>;
  renderCandidateReport?: InputMaybe<Scalars['Boolean']['input']>;
  startTime?: InputMaybe<Scalars['Date']['input']>;
  status?: InputMaybe<StageStatus>;
  subId?: InputMaybe<Scalars['String']['input']>;
  testIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  type?: InputMaybe<StageType>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryStageFindOneArgs = {
  createInterviewGuide?: InputMaybe<Scalars['Boolean']['input']>;
  emailCandidateReport?: InputMaybe<Scalars['Boolean']['input']>;
  emailManagerReport?: InputMaybe<Scalars['Boolean']['input']>;
  emailSzAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  endTime?: InputMaybe<Scalars['Date']['input']>;
  formId?: InputMaybe<Scalars['Int']['input']>;
  getOption?: InputMaybe<GetOption>;
  hasCalibration?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  relationDepth?: InputMaybe<RelationDepth>;
  renderCandidateReport?: InputMaybe<Scalars['Boolean']['input']>;
  startTime?: InputMaybe<Scalars['Date']['input']>;
  status?: InputMaybe<StageStatus>;
  subId?: InputMaybe<Scalars['String']['input']>;
  testIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  type?: InputMaybe<StageType>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryStageGenerateIndirectInvitationUrlArgs = {
  id: Scalars['Int']['input'];
  language?: InputMaybe<Language>;
};


export type QuerySuccessProfileArgs = {
  projectId: Scalars['Int']['input'];
};


export type QuerySuccessProfileExistsArgs = {
  projectId: Scalars['Int']['input'];
};


export type QuerySuccessProfileExplanationArgs = {
  id: Scalars['Int']['input'];
};


export type QuerySuccessProfileExplanationFindBySpIdArgs = {
  id: Scalars['Int']['input'];
};


export type QuerySuccessProfileExplanationGetDefaultSsContentArgs = {
  id: Scalars['Int']['input'];
};


export type QuerySuccessProfileExplanationGetDefaultSsTypeContentArgs = {
  id: Scalars['Int']['input'];
};


export type QuerySuccessProfileFindManyArgs = {
  calculationMethod?: InputMaybe<CalculationMethod>;
  gradingMethod?: InputMaybe<GradingMethod>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  roleLevel?: InputMaybe<ContentRoleLevel>;
};


export type QuerySuccessProfileTechnicalSkillArgs = {
  id: Scalars['Int']['input'];
};


export type QuerySuccessProfileTechnicalSkillFindManyArgs = {
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  relationDepth?: InputMaybe<RelationDepth>;
  successProfileId?: InputMaybe<Scalars['Int']['input']>;
  successProfileIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  technicalSkillId?: InputMaybe<Scalars['Int']['input']>;
  technicalSkillIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QuerySuccessProfileTechnicalSkillFindOneArgs = {
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  relationDepth?: InputMaybe<RelationDepth>;
  successProfileId?: InputMaybe<Scalars['Int']['input']>;
  technicalSkillId?: InputMaybe<Scalars['Int']['input']>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QuerySzSkillsMergeArgs = {
  id: Scalars['Int']['input'];
};


export type QuerySzSkillsMergeFindManyArgs = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  categoryIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  companyId?: InputMaybe<Scalars['Int']['input']>;
  companyIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  getOption?: InputMaybe<GetOption>;
  iconBlobId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  measurementConstructType?: InputMaybe<MeasurementConstructType>;
  measurementConstructTypes?: InputMaybe<Array<MeasurementConstructType>>;
  name?: InputMaybe<Scalars['String']['input']>;
  originId?: InputMaybe<Scalars['Int']['input']>;
  originIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  relationDepth?: InputMaybe<RelationDepth>;
  skillType?: InputMaybe<SkillType>;
  skillTypes?: InputMaybe<Array<SkillType>>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QuerySzSkillsMergeFindOneArgs = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  companyId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  getOption?: InputMaybe<GetOption>;
  iconBlobId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  measurementConstructType?: InputMaybe<MeasurementConstructType>;
  name?: InputMaybe<Scalars['String']['input']>;
  originId?: InputMaybe<Scalars['Int']['input']>;
  relationDepth?: InputMaybe<RelationDepth>;
  skillType?: InputMaybe<SkillType>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QuerySzSkillsMergeFreeTextSearchPaginatedArgs = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  companyId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  freetext?: InputMaybe<Scalars['String']['input']>;
  getOption?: InputMaybe<GetOption>;
  iconBlobId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  measurementConstructType?: InputMaybe<MeasurementConstructType>;
  name?: InputMaybe<Scalars['String']['input']>;
  originId?: InputMaybe<Scalars['Int']['input']>;
  relationDepth?: InputMaybe<RelationDepth>;
  skillType?: InputMaybe<SkillType>;
  skip: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryTechnicalSkillArgs = {
  id: Scalars['Int']['input'];
};


export type QueryTechnicalSkillFindManyArgs = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  categoryIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  getOption?: InputMaybe<GetOption>;
  iconBlobId?: InputMaybe<Scalars['Int']['input']>;
  iconBlobIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  names?: InputMaybe<Array<Scalars['String']['input']>>;
  relationDepth?: InputMaybe<RelationDepth>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryTechnicalSkillFindManyPaginatedArgs = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  getOption?: InputMaybe<GetOption>;
  iconBlobId?: InputMaybe<Scalars['Int']['input']>;
  icons?: InputMaybe<Array<Scalars['String']['input']>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  names?: InputMaybe<Array<Scalars['String']['input']>>;
  relationDepth?: InputMaybe<RelationDepth>;
  skip: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryTechnicalSkillFindOneArgs = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  getOption?: InputMaybe<GetOption>;
  iconBlobId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  relationDepth?: InputMaybe<RelationDepth>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryTechnicalSkillFreeTextSearchPaginatedArgs = {
  categoryIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  freetext?: InputMaybe<Scalars['String']['input']>;
  getOption?: InputMaybe<GetOption>;
  relationDepth?: InputMaybe<RelationDepth>;
  skip: Scalars['Int']['input'];
  sortField?: InputMaybe<TechnicalSkillSortField>;
  sortOrder?: InputMaybe<SortOption>;
  take: Scalars['Int']['input'];
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryTestCandidateFindManyArgs = {
  assessmentId?: InputMaybe<Scalars['Int']['input']>;
  candidateId?: InputMaybe<Scalars['Int']['input']>;
  candidateIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  doneBy?: InputMaybe<Scalars['Int']['input']>;
  doneBys?: InputMaybe<Array<Scalars['Int']['input']>>;
  doneFor?: InputMaybe<Scalars['Int']['input']>;
  doneFors?: InputMaybe<Array<Scalars['Int']['input']>>;
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  relationDepth?: InputMaybe<RelationDepth>;
  stageCandidateId?: InputMaybe<Scalars['Int']['input']>;
  stageCandidateIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  status?: InputMaybe<TestStatus>;
  testId?: InputMaybe<Scalars['Int']['input']>;
  testIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  testOrigin?: InputMaybe<TestOrigin>;
  testResultId?: InputMaybe<Scalars['Int']['input']>;
  timeModifierPercentage?: InputMaybe<Scalars['Float']['input']>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryTestCandidateFindManyByCandidateArgs = {
  candidateId: Scalars['Int']['input'];
  getOption?: InputMaybe<GetOption>;
  relationDepth?: InputMaybe<RelationDepth>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryTestCandidateFindOneArgs = {
  assessmentId?: InputMaybe<Scalars['Int']['input']>;
  candidateId?: InputMaybe<Scalars['Int']['input']>;
  doneBy?: InputMaybe<Scalars['Int']['input']>;
  doneFor?: InputMaybe<Scalars['Int']['input']>;
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  relationDepth?: InputMaybe<RelationDepth>;
  stageCandidateId?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<TestStatus>;
  testId?: InputMaybe<Scalars['Int']['input']>;
  testOrigin?: InputMaybe<TestOrigin>;
  testResultId?: InputMaybe<Scalars['Int']['input']>;
  timeModifierPercentage?: InputMaybe<Scalars['Float']['input']>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryTmTestArgs = {
  id: Scalars['Int']['input'];
};


export type QueryTmTestFindManyArgs = {
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  nQuestionsPerTrait?: InputMaybe<Scalars['Int']['input']>;
  origin?: InputMaybe<TestOrigin>;
  relationDepth?: InputMaybe<RelationDepth>;
  stageId?: InputMaybe<Scalars['Int']['input']>;
  stageIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  subId?: InputMaybe<Scalars['String']['input']>;
  subIds?: InputMaybe<Array<Scalars['String']['input']>>;
  subType?: InputMaybe<TestSubType>;
  tpProjectId?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<TestType>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryTmTestFindOneArgs = {
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  nQuestionsPerTrait?: InputMaybe<Scalars['Int']['input']>;
  origin?: InputMaybe<TestOrigin>;
  relationDepth?: InputMaybe<RelationDepth>;
  stageId?: InputMaybe<Scalars['Int']['input']>;
  subId?: InputMaybe<Scalars['String']['input']>;
  subType?: InputMaybe<TestSubType>;
  tpProjectId?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<TestType>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryTraitArgs = {
  id: Scalars['Int']['input'];
};


export type QueryTraitFindManyBySoftSkillIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryTraitRoleLevelContentArgs = {
  classification?: InputMaybe<ContentClassification>;
  content?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  privateId?: InputMaybe<Scalars['Int']['input']>;
  roleLevel?: InputMaybe<ContentRoleLevel>;
  softSkillId?: InputMaybe<Scalars['Int']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  traitId?: InputMaybe<Scalars['Int']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTraitRoleLevelContentFindManyAndCountArgs = {
  classification?: InputMaybe<ContentClassification>;
  classifications?: InputMaybe<Array<ContentClassification>>;
  companyIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  content?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  order?: InputMaybe<Array<Scalars['String']['input']>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  privateId?: InputMaybe<Scalars['Int']['input']>;
  roleLevel?: InputMaybe<ContentRoleLevel>;
  roleLevels?: InputMaybe<Array<ContentRoleLevel>>;
  softSkillId?: InputMaybe<Scalars['Int']['input']>;
  softSkillIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  summary?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  traitId?: InputMaybe<Scalars['Int']['input']>;
  traitIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTraitRoleLevelContentsArgs = {
  classification?: InputMaybe<ContentClassification>;
  classifications?: InputMaybe<Array<ContentClassification>>;
  companyIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  content?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  privateId?: InputMaybe<Scalars['Int']['input']>;
  roleLevel?: InputMaybe<ContentRoleLevel>;
  roleLevels?: InputMaybe<Array<ContentRoleLevel>>;
  softSkillId?: InputMaybe<Scalars['Int']['input']>;
  softSkillIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  summary?: InputMaybe<Scalars['String']['input']>;
  traitId?: InputMaybe<Scalars['Int']['input']>;
  traitIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTraitSoftSkillContextFindManyArgs = {
  behaviourIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  relationDepth?: InputMaybe<RelationDepth>;
  softSkillId?: InputMaybe<Scalars['Int']['input']>;
  softSkillIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  traitId?: InputMaybe<Scalars['Int']['input']>;
  traitIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryTraitSoftSkillContextFindOneArgs = {
  behaviourIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  relationDepth?: InputMaybe<RelationDepth>;
  softSkillId?: InputMaybe<Scalars['Int']['input']>;
  traitId?: InputMaybe<Scalars['Int']['input']>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryTraitsArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  names?: InputMaybe<Array<Scalars['String']['input']>>;
  softSkillId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  filterFakeUsers?: InputMaybe<Scalars['Boolean']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isPuppet?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Language>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
  subId?: InputMaybe<Scalars['String']['input']>;
  twoFactorCode?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUserCompanyInfoArgs = {
  id: Scalars['Int']['input'];
};


export type QueryUserCompanyInfoFindManyArgs = {
  companyId?: InputMaybe<Scalars['Int']['input']>;
  companyIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  department?: InputMaybe<Scalars['String']['input']>;
  employeeId?: InputMaybe<Scalars['String']['input']>;
  employeeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  getOption?: InputMaybe<GetOption>;
  hrManagerEmployeeId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  relationDepth?: InputMaybe<RelationDepth>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  userIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryUserCompanyInfoFindOneArgs = {
  companyId?: InputMaybe<Scalars['Int']['input']>;
  department?: InputMaybe<Scalars['String']['input']>;
  employeeId?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  getOption?: InputMaybe<GetOption>;
  hrManagerEmployeeId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  relationDepth?: InputMaybe<RelationDepth>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryUserFreeTextSearchPaginateArgs = {
  companyIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  filterFakeUsers?: InputMaybe<Scalars['Boolean']['input']>;
  freetext: Scalars['String']['input'];
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  roleEnd?: InputMaybe<IdentityPermissionRole>;
  roleStart?: InputMaybe<IdentityPermissionRole>;
  roles?: InputMaybe<Array<IdentityPermissionRole>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserRoleFindManyArgs = {
  companyRoleId?: InputMaybe<Scalars['Float']['input']>;
  companyRoleIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  externalId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Float']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  userId?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryUserSettingsArgs = {
  id: Scalars['Int']['input'];
};


export type QueryUserSettingsFindManyArgs = {
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  relationDepth?: InputMaybe<RelationDepth>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  userIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryUserSettingsFindOneArgs = {
  getOption?: InputMaybe<GetOption>;
  id?: InputMaybe<Scalars['Int']['input']>;
  relationDepth?: InputMaybe<RelationDepth>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  withDeleted?: InputMaybe<WithDeletedChoice>;
};


export type QueryUsersArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  emails?: InputMaybe<Array<Scalars['String']['input']>>;
  filterFakeUsers?: InputMaybe<Scalars['Boolean']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  isPuppet?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<Language>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
  subIds?: InputMaybe<Array<Scalars['String']['input']>>;
  twoFactorCode?: InputMaybe<Scalars['String']['input']>;
};


export type QueryValidateContentArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  softSkillIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  take?: InputMaybe<Scalars['Int']['input']>;
  traitIds?: InputMaybe<Array<Scalars['Int']['input']>>;
};


export type QueryValidateContentPieceArgs = {
  softSkillId: Scalars['Int']['input'];
  traitIds?: InputMaybe<Array<Scalars['Int']['input']>>;
};


export type QueryWidgetArgs = {
  id: Scalars['Int']['input'];
};


export type QueryWidgetConfigArgs = {
  id: Scalars['Int']['input'];
};


export type QueryWidgetConfigFindManyArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  reportConfigId?: InputMaybe<Scalars['Int']['input']>;
  settings?: InputMaybe<Scalars['String']['input']>;
  widgetOptionId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryWidgetFindManyArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<WidgetType>;
};


export type QueryWidgetOptionArgs = {
  id: Scalars['Int']['input'];
};


export type QueryWidgetOptionFindManyArgs = {
  defaultValue?: InputMaybe<Scalars['String']['input']>;
  fieldType?: InputMaybe<FieldType>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  question?: InputMaybe<Scalars['String']['input']>;
  widgetId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryWidgetRenderArgs = {
  id: Scalars['Int']['input'];
};


export type QueryWidgetRenderFindManyArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  reportConfigId?: InputMaybe<Scalars['Int']['input']>;
  reportRenderId?: InputMaybe<Scalars['Int']['input']>;
  widgetRenderData?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCompanyArgs = {
  id: Scalars['Int']['input'];
};


export type QueryCompanyFindManyByIdsArgs = {
  ids: Array<Scalars['Int']['input']>;
};


export type QueryGetAllProjectFilesArgs = {
  id: Scalars['Float']['input'];
};


export type QueryGetCompanyIdArgs = {
  id: Scalars['Float']['input'];
};


export type QueryGetFormReportCsvArgs = {
  associatedId: Scalars['Int']['input'];
  formManagerType: FormManagerType;
  formOwnerId: Scalars['Int']['input'];
  formType: FormType;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetInvitationStatusArgs = {
  invitationToken: Scalars['String']['input'];
};


export type QueryGetProjectByIdArgs = {
  id: Scalars['Float']['input'];
};

export type QuestionModel = {
  __typename?: 'QuestionModel';
  options: Array<OptionModel>;
  subId: Scalars['String']['output'];
  text: Scalars['String']['output'];
};

export enum QuestionOrientation {
  Inverted = 'INVERTED',
  Standard = 'STANDARD'
}

export enum RAssignedType {
  Company = 'COMPANY',
  Project = 'PROJECT',
  Stage = 'STAGE'
}

/** Original JSON object that was gathered from the platform */
export type RawPlatformAssessmentModel = {
  __typename?: 'RawPlatformAssessmentModel';
  id?: Maybe<Scalars['String']['output']>;
};

export enum RelationDepth {
  Basic = 'BASIC',
  Full = 'FULL',
  FullWithExternal = 'FULL_WITH_EXTERNAL'
}

export type Report = {
  __typename?: 'Report';
  company?: Maybe<Company>;
  createdAt: Scalars['Date']['output'];
  deletedAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['Int']['output'];
  isArchived: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  ownerId: Scalars['Int']['output'];
  ownerType: ReportOwnerType;
  reportConfigs?: Maybe<Array<ReportConfig>>;
  reportRenders?: Maybe<Array<ReportRender>>;
  subType?: Maybe<ReportSubType>;
  type: ReportType;
  updatedAt: Scalars['Date']['output'];
};

export type ReportAssignment = {
  __typename?: 'ReportAssignment';
  assignedId: Scalars['Int']['output'];
  assignedType: RAssignedType;
  createdAt: Scalars['Date']['output'];
  deletedAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['Int']['output'];
  inheritsSetting?: Maybe<Scalars['Boolean']['output']>;
  report: Report;
  reportId: Scalars['Int']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type ReportConfig = {
  __typename?: 'ReportConfig';
  id: Scalars['Int']['output'];
  newPageBefore: Scalars['Boolean']['output'];
  position: Scalars['Int']['output'];
  report: Report;
  reportId: Scalars['Int']['output'];
  widget: Widget;
  widgetConfigs?: Maybe<Array<WidgetConfig>>;
  widgetId: Scalars['Int']['output'];
};

export type ReportConfigCreateOneBatchedWithReportArgs = {
  newPageBefore?: InputMaybe<Scalars['Boolean']['input']>;
  position: Scalars['Int']['input'];
  widgetConfigsToUpsert?: InputMaybe<Array<WidgetConfigUpsertOneBatchedWithReportConfigArgs>>;
  widgetId: Scalars['Int']['input'];
};

export type ReportConfigUpdateOneArgs = {
  id: Scalars['Int']['input'];
  newPageBefore?: InputMaybe<Scalars['Boolean']['input']>;
  position: Scalars['Int']['input'];
  widgetConfigsToUpsert?: InputMaybe<Array<WidgetConfigUpsertOneBatchedWithReportConfigArgs>>;
};

export enum ReportOwnerType {
  /** Company owner */
  Company = 'COMPANY',
  /** User owner */
  User = 'USER'
}

export type ReportRender = {
  __typename?: 'ReportRender';
  blob?: Maybe<Blob>;
  blobId?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['Date']['output'];
  dataSourceId: Scalars['Int']['output'];
  deletedAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['Int']['output'];
  report: Report;
  reportId: Scalars['Int']['output'];
  reportRenderStatus?: Maybe<ReportRenderStatus>;
  reportRenderType?: Maybe<ReportRenderType>;
  statusMessage?: Maybe<Scalars['String']['output']>;
  subId: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
  widgetRenders?: Maybe<Array<WidgetRender>>;
};

export enum ReportRenderStatus {
  CollectingData = 'COLLECTING_DATA',
  Complete = 'COMPLETE',
  CompleteEmailed = 'COMPLETE_EMAILED',
  CompleteEmailing = 'COMPLETE_EMAILING',
  Failed = 'FAILED',
  Initialisation = 'INITIALISATION',
  Rendering = 'RENDERING'
}

export enum ReportRenderType {
  Csv = 'CSV',
  Data = 'DATA',
  Pdf = 'PDF'
}

export enum ReportSubType {
  /** Stage results candidate */
  StageResultsCandidate = 'STAGE_RESULTS_CANDIDATE',
  /** Stage results manager */
  StageResultsManager = 'STAGE_RESULTS_MANAGER',
  /** Sp report full */
  SuccessProfileFull = 'SUCCESS_PROFILE_FULL',
  /** Sp report partial */
  SuccessProfilePartial = 'SUCCESS_PROFILE_PARTIAL'
}

export enum ReportType {
  /** Stage results */
  StageResults = 'STAGE_RESULTS',
  /** Success profile results */
  SuccessProfile = 'SUCCESS_PROFILE'
}

export type RespondantFieldWithAnswers = {
  __typename?: 'RespondantFieldWithAnswers';
  answer?: Maybe<Scalars['String']['output']>;
  displayOrder: Scalars['Int']['output'];
  field?: Maybe<Field>;
  isOptional: Scalars['Boolean']['output'];
  selectOptionAnswerIsFreeText?: Maybe<Scalars['Boolean']['output']>;
};

export type RespondantForm = {
  __typename?: 'RespondantForm';
  associatedId: Scalars['Int']['output'];
  formId: Scalars['Int']['output'];
  formOwnerId: Scalars['Int']['output'];
  formType: FormType;
  isComplete: Scalars['Boolean']['output'];
  respondantFieldWithAnswers: Array<RespondantFieldWithAnswers>;
  submittedFormLogId?: Maybe<Scalars['Int']['output']>;
};

export enum ResponseType {
  CompanyEmployeeSelectResponse = 'COMPANY_EMPLOYEE_SELECT_RESPONSE',
  DateResponse = 'DATE_RESPONSE',
  LongTextResponse = 'LONG_TEXT_RESPONSE',
  MultipleSelectResponse = 'MULTIPLE_SELECT_RESPONSE',
  ShortTextResponse = 'SHORT_TEXT_RESPONSE',
  SingleSelectResponse = 'SINGLE_SELECT_RESPONSE'
}

export enum ResultAccessAllowedActions {
  Create = 'CREATE',
  SignOff = 'SIGN_OFF'
}

export type ResultAccessModel = {
  __typename?: 'ResultAccessModel';
  allowedActions?: Maybe<Array<ResultAccessAllowedActions>>;
  label?: Maybe<Scalars['String']['output']>;
  latestActionlabel?: Maybe<Scalars['String']['output']>;
  resultAccessOwnerId?: Maybe<Scalars['Int']['output']>;
  status: ResultAccessStatus;
};

export enum ResultAccessStatus {
  Editable = 'EDITABLE',
  LockedForHigherLevel = 'LOCKED_FOR_HIGHER_LEVEL',
  SignedOff = 'SIGNED_OFF'
}

export type ResultCreateOneRoleSkillsSelfAssessmentArgs = {
  copiedFrom?: InputMaybe<Scalars['Int']['input']>;
  doneBy: Scalars['Int']['input'];
  doneFor: Scalars['Int']['input'];
  label?: InputMaybe<Scalars['String']['input']>;
  manuallyAdjustedBy?: InputMaybe<Scalars['Int']['input']>;
  measurementId: Scalars['Int']['input'];
  measurementType: ResultMeasurementType;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  score: ISoftSkillSelfAssessmentScoreModel;
};

export type ResultCreateOneStatisticalArgs = {
  copiedFrom?: InputMaybe<Scalars['Int']['input']>;
  doneBy: Scalars['Int']['input'];
  doneFor: Scalars['Int']['input'];
  label?: InputMaybe<Scalars['String']['input']>;
  manuallyAdjustedBy?: InputMaybe<Scalars['Int']['input']>;
  measurementId: Scalars['Int']['input'];
  measurementType: ResultMeasurementType;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  score: IStatisticalResultScoreModel;
};

export type ResultCreateOneTrCustomArgs = {
  copiedFrom?: InputMaybe<Scalars['Int']['input']>;
  doneBy: Scalars['Int']['input'];
  doneFor: Scalars['Int']['input'];
  label?: InputMaybe<Scalars['String']['input']>;
  manuallyAdjustedBy?: InputMaybe<Scalars['Int']['input']>;
  measurementId: Scalars['Int']['input'];
  measurementType: ResultMeasurementType;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  score: ITrCustomResultScoreModel;
};

export type ResultFindManyArgs = {
  copiedFrom?: InputMaybe<Scalars['Int']['input']>;
  copiedFroms?: InputMaybe<Array<Scalars['Int']['input']>>;
  doneBy?: InputMaybe<Scalars['Int']['input']>;
  doneBys?: InputMaybe<Array<Scalars['Int']['input']>>;
  doneFor?: InputMaybe<Scalars['Int']['input']>;
  doneFors?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  label?: InputMaybe<Scalars['String']['input']>;
  labels?: InputMaybe<Array<Scalars['String']['input']>>;
  manuallyAdjustedBy?: InputMaybe<Scalars['Int']['input']>;
  manuallyAdjustedBys?: InputMaybe<Array<Scalars['Int']['input']>>;
  measurementId?: InputMaybe<Scalars['Int']['input']>;
  measurementIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  measurementType?: InputMaybe<ResultMeasurementType>;
  measurementTypes?: InputMaybe<Array<ResultMeasurementType>>;
  onlyLatest?: InputMaybe<Scalars['Boolean']['input']>;
  onlyLatestVersionPerLabel?: InputMaybe<Scalars['Boolean']['input']>;
  previousVersionId?: InputMaybe<Scalars['Int']['input']>;
  previousVersionIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  projectIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  scoreType?: InputMaybe<ResultScoreType>;
  scoreTypes?: InputMaybe<Array<ResultScoreType>>;
  version?: InputMaybe<Scalars['Int']['input']>;
  versions?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type ResultFindOneArgs = {
  copiedFrom?: InputMaybe<Scalars['Int']['input']>;
  doneBy?: InputMaybe<Scalars['Int']['input']>;
  doneFor?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  manuallyAdjustedBy?: InputMaybe<Scalars['Int']['input']>;
  measurementId?: InputMaybe<Scalars['Int']['input']>;
  measurementType?: InputMaybe<ResultMeasurementType>;
  onlyLatest?: InputMaybe<Scalars['Boolean']['input']>;
  onlyLatestVersionPerLabel?: InputMaybe<Scalars['Boolean']['input']>;
  previousVersionId?: InputMaybe<Scalars['Int']['input']>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  scoreType?: InputMaybe<ResultScoreType>;
  version?: InputMaybe<Scalars['Int']['input']>;
};

export enum ResultMeasurementType {
  Behaviour = 'BEHAVIOUR',
  InterviewGuide = 'INTERVIEW_GUIDE',
  SoftSkill = 'SOFT_SKILL',
  SuccessProfile = 'SUCCESS_PROFILE',
  TechnicalSkill = 'TECHNICAL_SKILL',
  Trait = 'TRAIT'
}

export type ResultModel = {
  __typename?: 'ResultModel';
  copiedFrom?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['Date']['output'];
  deletedAt?: Maybe<Scalars['Date']['output']>;
  doneBy: Scalars['Int']['output'];
  doneFor: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  label?: Maybe<Scalars['String']['output']>;
  manuallyAdjustedBy?: Maybe<Scalars['Int']['output']>;
  measurementId: Scalars['Int']['output'];
  measurementType: ResultMeasurementType;
  previousVersionId?: Maybe<Scalars['Int']['output']>;
  projectId?: Maybe<Scalars['Int']['output']>;
  score: ResultScoreUnion;
  scoreType: ResultScoreType;
  updatedAt: Scalars['Date']['output'];
  version: Scalars['Int']['output'];
};

export enum ResultScoreType {
  IgBehaviour = 'IG_BEHAVIOUR',
  IgCustom = 'IG_CUSTOM',
  IgFinalDecision = 'IG_FINAL_DECISION',
  RoleSoftSkillsProfile = 'ROLE_SOFT_SKILLS_PROFILE',
  RoleTechnicalSkillsProfile = 'ROLE_TECHNICAL_SKILLS_PROFILE',
  Statistical = 'STATISTICAL',
  TrCustom = 'TR_CUSTOM'
}

export type ResultScoreUnion = IgBehaviourResultScoreModel | IgCustomResultScoreModel | IgFinalDecisionResultScoreModel | SoftSkillSelfAssessmentScoreModel | StatisticalResultScoreModel | TechnicalSkillSelfAssessmentScoreModel | TrCustomResultScoreModel;

export type ResultSoftSkillProfileCreateOneFromSc = {
  score: ISoftSkillSelfAssessmentScoreModel;
  softSkillId: Scalars['Int']['input'];
  stageCandidateId: Scalars['Int']['input'];
};

export type ResultTechnicalSkillProfileCreateOneFromSc = {
  score: ITechnicalSkillSelfAssessmentScoreModel;
  stageCandidateId: Scalars['Int']['input'];
  technicalSkillId: Scalars['Int']['input'];
};

export type Role = {
  __typename?: 'Role';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  type: RoleType;
};

export enum RoleType {
  Company = 'COMPANY',
  External = 'EXTERNAL',
  ModuleAccess = 'MODULE_ACCESS',
  SzProtected = 'SZ_PROTECTED',
  SzSingleton = 'SZ_SINGLETON'
}

export type RssAssessmentCandidateCreateOneArgs = {
  rssAssessmentId: Scalars['Int']['input'];
  stageCandidateId: Scalars['Int']['input'];
};

export type RssAssessmentCandidateModel = {
  __typename?: 'RssAssessmentCandidateModel';
  createdAt: Scalars['Date']['output'];
  deletedAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['Int']['output'];
  rssAssessment: RssAssessmentModel;
  rssAssessmentId: Scalars['Int']['output'];
  stageCandidate?: Maybe<SmStageCandidateModel>;
  stageCandidateId: Scalars['Int']['output'];
  status: RssAssessmentCandidateStatus;
  subId: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};

export enum RssAssessmentCandidateStatus {
  NotStarted = 'NOT_STARTED',
  OpenForChanges = 'OPEN_FOR_CHANGES',
  Submitted = 'SUBMITTED'
}

export type RssAssessmentCandidateUpdateOneArgs = {
  id: Scalars['Int']['input'];
  rssAssessmentId?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<RssAssessmentCandidateStatus>;
};

export type RssAssessmentCreateOneArgs = {
  stageId: Scalars['Int']['input'];
  type: RssAssessmentType;
};

export type RssAssessmentModel = {
  __typename?: 'RssAssessmentModel';
  createdAt: Scalars['Date']['output'];
  deletedAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['Int']['output'];
  stage?: Maybe<SmStageModel>;
  stageId: Scalars['Int']['output'];
  subId: Scalars['String']['output'];
  type: RssAssessmentType;
  updatedAt: Scalars['Date']['output'];
};

export enum RssAssessmentType {
  SoftSkill = 'SOFT_SKILL',
  TechnicalSkill = 'TECHNICAL_SKILL'
}

export type RssAssessmentUpdateOneArgs = {
  id: Scalars['Int']['input'];
  type?: InputMaybe<RssAssessmentType>;
};

export type RssCandidateOpenOneModel = {
  __typename?: 'RssCandidateOpenOneModel';
  gradeBands: Array<GradeBandUnion>;
  rssAssessmentCandidate: RssAssessmentCandidateModel;
  skillsWithResults: Array<SkillWithResultModel>;
};

export type ScoreModel = {
  __typename?: 'ScoreModel';
  customEvaluation?: Maybe<Scalars['String']['output']>;
  customScore?: Maybe<Scalars['Float']['output']>;
  grade?: Maybe<Grade>;
  percentile?: Maybe<Scalars['Float']['output']>;
  stenScore?: Maybe<Scalars['Float']['output']>;
  zScore?: Maybe<Scalars['Float']['output']>;
};

export type ShortTextField = Field & {
  __typename?: 'ShortTextField';
  fieldInstanceType: FieldInstanceType;
  fieldOwnerId?: Maybe<Scalars['Int']['output']>;
  fieldOwnerName?: Maybe<Scalars['String']['output']>;
  fieldOwnerType?: Maybe<FieldOwnerType>;
  fieldType: FieldType;
  formManagerType: FormManagerType;
  hint?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isArchived: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  question?: Maybe<Scalars['String']['output']>;
  settings?: Maybe<FieldSettingsModel>;
  txtData?: Maybe<Scalars['String']['output']>;
};

export type SingleSelectField = Field & {
  __typename?: 'SingleSelectField';
  fieldInstanceType: FieldInstanceType;
  fieldOwnerId?: Maybe<Scalars['Int']['output']>;
  fieldOwnerName?: Maybe<Scalars['String']['output']>;
  fieldOwnerType?: Maybe<FieldOwnerType>;
  fieldType: FieldType;
  formManagerType: FormManagerType;
  hint?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isArchived: Scalars['Boolean']['output'];
  isFreetextField?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  question?: Maybe<Scalars['String']['output']>;
  selectOptions?: Maybe<Scalars['String']['output']>;
  settings?: Maybe<FieldSettingsModel>;
  txtData?: Maybe<Scalars['String']['output']>;
};

export type SkillCategory = {
  __typename?: 'SkillCategory';
  createdAt: Scalars['Date']['output'];
  deletedAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type SkillCategoryCreateOneArgs = {
  name: Scalars['String']['input'];
};

export type SkillCategoryUpdateOneArgs = {
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export enum SkillType {
  SoftSkill = 'SOFT_SKILL',
  TechnicalSkill = 'TECHNICAL_SKILL'
}

export type SkillUnion = SoftSkill | TechnicalSkill;

export type SkillWithResultModel = {
  __typename?: 'SkillWithResultModel';
  result?: Maybe<ResultModel>;
  skill: SkillUnion;
};

export type SkillsProfileOpenOneModel = {
  __typename?: 'SkillsProfileOpenOneModel';
  skillsWithResults: Array<SpSkillWithResultModel>;
  softSkillGradeBands: Array<SoftSkillSelfAssessmentGradeBandModel>;
  technicalSkillGradeBands: Array<TechnicalSkillSelfAssessmentGradeBandModel>;
};

export type SmInviteHiringDoneForsAndProjectManagersArgs = {
  doneForNewUser: SmInviteNewUserDetailsArgs;
  projectManagerNewUsers?: InputMaybe<Array<SmInviteHiringManagerDetailsArgs>>;
};

export type SmInviteHiringManagerDetailsArgs = {
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
};

export type SmInviteNewUserDetailsArgs = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
};

export enum SmInviteType {
  Hiring = 'HIRING',
  TalentReview = 'TALENT_REVIEW'
}

export type SmStageCandidateModel = {
  __typename?: 'SmStageCandidateModel';
  actions: StageCandidateActionsModel;
  calibrationCandidate?: Maybe<CalibrationCandidateModel>;
  candidateId: Scalars['Int']['output'];
  candidateProjectManagerIds?: Maybe<Array<Scalars['Int']['output']>>;
  companyId?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['Date']['output'];
  deletedAt?: Maybe<Scalars['Date']['output']>;
  doneBy: Scalars['Int']['output'];
  doneByUser: User;
  doneFor: Scalars['Int']['output'];
  doneForUser: User;
  formCandidates?: Maybe<Array<Maybe<FormCandidateModel>>>;
  id: Scalars['Int']['output'];
  interviewGuide?: Maybe<InterviewGuideModel>;
  lastDateOfCandidateAction?: Maybe<Scalars['Date']['output']>;
  projectTrackerId: Scalars['Int']['output'];
  rssAssessmentCandidates?: Maybe<Array<RssAssessmentCandidateModel>>;
  stage: SmStageModel;
  stageId: Scalars['Int']['output'];
  stageResult?: Maybe<SmStageResultModel>;
  status: StageCandidateStatus;
  subId: Scalars['String']['output'];
  testCandidates?: Maybe<Array<Maybe<TmTestCandidateModel>>>;
  updatedAt: Scalars['Date']['output'];
};

export type SmStageModel = {
  __typename?: 'SmStageModel';
  availableActions: Array<StageAvailableActionModel>;
  createInterviewGuide: Scalars['Boolean']['output'];
  createdAt: Scalars['Date']['output'];
  deletedAt?: Maybe<Scalars['Date']['output']>;
  emailCandidateReport: Scalars['Boolean']['output'];
  emailManagerReport: Scalars['Boolean']['output'];
  emailSzAdmin: Scalars['Boolean']['output'];
  endTime?: Maybe<Scalars['Date']['output']>;
  formId?: Maybe<Scalars['Int']['output']>;
  hasCalibration: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  projectId: Scalars['Int']['output'];
  renderCandidateReport: Scalars['Boolean']['output'];
  rssAssessmentIds?: Maybe<Array<Scalars['Int']['output']>>;
  rssAssessments: Array<RssAssessmentModel>;
  startTime?: Maybe<Scalars['Date']['output']>;
  status: StageStatus;
  subId: Scalars['String']['output'];
  testIds: Array<Scalars['Int']['output']>;
  type: StageType;
  updatedAt: Scalars['Date']['output'];
};

export type SmStageResultModel = {
  __typename?: 'SmStageResultModel';
  calculationMethodUsed?: Maybe<CalculationMethod>;
  createdAt: Scalars['Date']['output'];
  deletedAt?: Maybe<Scalars['Date']['output']>;
  gradingMethodUsed?: Maybe<GradingMethod>;
  id: Scalars['Int']['output'];
  scores: Array<BasicScoreModel>;
  stageCandidate: SmStageCandidateModel;
  stageCandidateId: Scalars['Int']['output'];
  structuredScore?: Maybe<StructuredScoreModel>;
  totalScore: BasicScoreModel;
  updatedAt: Scalars['Date']['output'];
};

export type SoftSkill = {
  __typename?: 'SoftSkill';
  category?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Company>;
  companyId: Scalars['Int']['output'];
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Blob>;
  iconBlobId?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  isArchived: Scalars['Boolean']['output'];
  measurementConstructType?: Maybe<MeasurementConstructType>;
  name: Scalars['String']['output'];
  softSkillTraits?: Maybe<Array<SoftSkillTrait>>;
};

export enum SoftSkillContentHeaderType {
  InterviewInstructions = 'INTERVIEW_INSTRUCTIONS',
  None = 'NONE'
}

export enum SoftSkillImageType {
  CategoryImage = 'CATEGORY_IMAGE',
  SoftSkillImage = 'SOFT_SKILL_IMAGE'
}

export type SoftSkillModelPaginated = {
  __typename?: 'SoftSkillModelPaginated';
  data?: Maybe<Array<SoftSkill>>;
  pageInfo?: Maybe<Pageinfo>;
};

export type SoftSkillProjectModuleTypeModel = {
  __typename?: 'SoftSkillProjectModuleTypeModel';
  id: Scalars['Int']['output'];
  projectModuleType: ProjectModuleType;
  softSkillId: Scalars['Int']['output'];
};

export type SoftSkillRoleLevelContent = {
  __typename?: 'SoftSkillRoleLevelContent';
  candidateContent?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  grade: Grade;
  gradeDescription?: Maybe<Scalars['String']['output']>;
  hiringManagerContent?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  roleLevel: ContentRoleLevel;
  scoreRange?: Maybe<Scalars['String']['output']>;
  softSkill?: Maybe<SoftSkill>;
  softSkillId?: Maybe<Scalars['Int']['output']>;
};

export type SoftSkillRoleLevelContentPaginated = {
  __typename?: 'SoftSkillRoleLevelContentPaginated';
  count?: Maybe<Scalars['Float']['output']>;
  softSkillContent?: Maybe<Array<SoftSkillRoleLevelContent>>;
};

export type SoftSkillScoreModel = ContextualScoreModel & {
  __typename?: 'SoftSkillScoreModel';
  children?: Maybe<Array<ContextualScoreModel>>;
  contentClassification?: Maybe<ContentClassification>;
  id: Scalars['Int']['output'];
  roleLevel?: Maybe<ContentRoleLevel>;
  score: ScoreModel;
  softSkillRoleLevelContent?: Maybe<SoftSkillRoleLevelContent>;
  spSoftSkill?: Maybe<SuccessProfileSoftSkill>;
  type: BasicScoreType;
};

export type SoftSkillSelfAssessmentGradeBandModel = {
  __typename?: 'SoftSkillSelfAssessmentGradeBandModel';
  displayText: Scalars['String']['output'];
  position: Scalars['Int']['output'];
  proficiency: SoftSkillSelfAssessmentProficiencyLevel;
};

export enum SoftSkillSelfAssessmentProficiencyLevel {
  Beginner = 'BEGINNER',
  Expert = 'EXPERT',
  Intermediate = 'INTERMEDIATE'
}

export type SoftSkillSelfAssessmentScoreModel = {
  __typename?: 'SoftSkillSelfAssessmentScoreModel';
  proficiency: SoftSkillSelfAssessmentProficiencyLevel;
};

export type SoftSkillSuccessProfileContent = {
  __typename?: 'SoftSkillSuccessProfileContent';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  roleLevel: ContentRoleLevel;
  shortDescription?: Maybe<Scalars['String']['output']>;
  softSkill?: Maybe<SoftSkill>;
  softSkillId: Scalars['Int']['output'];
};

export type SoftSkillSuccessProfileContentPaginated = {
  __typename?: 'SoftSkillSuccessProfileContentPaginated';
  count?: Maybe<Scalars['Float']['output']>;
  softSkillContent?: Maybe<Array<SoftSkillSuccessProfileContent>>;
};

export type SoftSkillTrait = {
  __typename?: 'SoftSkillTrait';
  id?: Maybe<Scalars['Int']['output']>;
  orientation: Scalars['Int']['output'];
  softSkill?: Maybe<SoftSkill>;
  softSkillId?: Maybe<Scalars['Int']['output']>;
  softSkillName?: Maybe<Scalars['String']['output']>;
  trait?: Maybe<Trait>;
  traitId?: Maybe<Scalars['Int']['output']>;
  traitName?: Maybe<Scalars['String']['output']>;
  weight: Scalars['Float']['output'];
};

export enum SoftSkillType {
  Core = 'CORE',
  Differentiator = 'DIFFERENTIATOR',
  Diversity = 'DIVERSITY'
}

export type SoftSkillTypeSuccessProfileContent = {
  __typename?: 'SoftSkillTypeSuccessProfileContent';
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  softSkillType: SoftSkillType;
};

export enum SortOption {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type SpSkillWithResultModel = {
  __typename?: 'SpSkillWithResultModel';
  result: ResultModel;
  skill: SkillUnion;
};

export enum SpSoftSkillSort {
  Category = 'CATEGORY',
  Name = 'NAME'
}

export enum StageActionAvailability {
  AlreadyExists = 'ALREADY_EXISTS',
  Available = 'AVAILABLE',
  NotAvailable = 'NOT_AVAILABLE'
}

export type StageActionAvailabilityModel = {
  __typename?: 'StageActionAvailabilityModel';
  reason?: Maybe<Scalars['String']['output']>;
  status: StageActionAvailabilityStatus;
};

export enum StageActionAvailabilityStatus {
  Available = 'AVAILABLE',
  Completed = 'COMPLETED',
  NotAvailable = 'NOT_AVAILABLE'
}

export type StageActionCalibrationModel = StageActionModel & {
  __typename?: 'StageActionCalibrationModel';
  availability: StageActionAvailabilityModel;
  calibrationCandidate: CalibrationCandidateModel;
  description?: Maybe<Scalars['String']['output']>;
  instructions?: Maybe<Scalars['String']['output']>;
  sectionTimeAllowanceMinutes?: Maybe<Scalars['Float']['output']>;
  sectionTimeEstimateMinutes?: Maybe<Scalars['Float']['output']>;
  title: Scalars['String']['output'];
  totalTimeAllowanceMinutes?: Maybe<Scalars['Int']['output']>;
  totalTimeEstimateMinutes?: Maybe<Scalars['Int']['output']>;
};

export type StageActionFormModel = StageActionModel & {
  __typename?: 'StageActionFormModel';
  availability: StageActionAvailabilityModel;
  description?: Maybe<Scalars['String']['output']>;
  formCandidate: FormCandidateModel;
  instructions?: Maybe<Scalars['String']['output']>;
  sectionTimeAllowanceMinutes?: Maybe<Scalars['Float']['output']>;
  sectionTimeEstimateMinutes?: Maybe<Scalars['Float']['output']>;
  title: Scalars['String']['output'];
  totalTimeAllowanceMinutes?: Maybe<Scalars['Int']['output']>;
  totalTimeEstimateMinutes?: Maybe<Scalars['Int']['output']>;
};

export type StageActionModel = {
  availability: StageActionAvailabilityModel;
  description?: Maybe<Scalars['String']['output']>;
  instructions?: Maybe<Scalars['String']['output']>;
  sectionTimeAllowanceMinutes?: Maybe<Scalars['Float']['output']>;
  sectionTimeEstimateMinutes?: Maybe<Scalars['Float']['output']>;
  title: Scalars['String']['output'];
  totalTimeAllowanceMinutes?: Maybe<Scalars['Int']['output']>;
  totalTimeEstimateMinutes?: Maybe<Scalars['Int']['output']>;
};

export type StageActionRssAssessmentModel = StageActionModel & {
  __typename?: 'StageActionRssAssessmentModel';
  availability: StageActionAvailabilityModel;
  description?: Maybe<Scalars['String']['output']>;
  instructions?: Maybe<Scalars['String']['output']>;
  sectionTimeAllowanceMinutes?: Maybe<Scalars['Float']['output']>;
  sectionTimeEstimateMinutes?: Maybe<Scalars['Float']['output']>;
  softRssAssessmentCandidate?: Maybe<RssAssessmentCandidateModel>;
  technicalRssAssessmentCandidate?: Maybe<RssAssessmentCandidateModel>;
  title: Scalars['String']['output'];
  totalTimeAllowanceMinutes?: Maybe<Scalars['Int']['output']>;
  totalTimeEstimateMinutes?: Maybe<Scalars['Int']['output']>;
};

export enum StageActionSubType {
  RssAssessmentSoft = 'RSS_ASSESSMENT_SOFT',
  RssAssessmentTechnical = 'RSS_ASSESSMENT_TECHNICAL'
}

export type StageActionTestModel = StageActionModel & {
  __typename?: 'StageActionTestModel';
  availability: StageActionAvailabilityModel;
  description?: Maybe<Scalars['String']['output']>;
  hasPractice: Scalars['Boolean']['output'];
  instructions?: Maybe<Scalars['String']['output']>;
  sectionTimeAllowanceMinutes?: Maybe<Scalars['Float']['output']>;
  sectionTimeEstimateMinutes?: Maybe<Scalars['Float']['output']>;
  testCandidate: TmTestCandidateModel;
  title: Scalars['String']['output'];
  totalTimeAllowanceMinutes?: Maybe<Scalars['Int']['output']>;
  totalTimeEstimateMinutes?: Maybe<Scalars['Int']['output']>;
};

export enum StageActionType {
  Calibration = 'CALIBRATION',
  CognitiveTestInductive = 'COGNITIVE_TEST_INDUCTIVE',
  CognitiveTestNumerical = 'COGNITIVE_TEST_NUMERICAL',
  CognitiveTestVerbal = 'COGNITIVE_TEST_VERBAL',
  Form = 'FORM',
  ManagerReview = 'MANAGER_REVIEW',
  PersonalityTest = 'PERSONALITY_TEST',
  RssAssessment = 'RSS_ASSESSMENT'
}

export type StageActionsModel = {
  __typename?: 'StageActionsModel';
  actions: Array<StageActionModel>;
  company: Company;
  doneByUser: User;
  doneForUser: User;
  project: Project;
  stage: SmStageModel;
  stageCandidate: SmStageCandidateModel;
};

export type StageAvailableActionModel = {
  __typename?: 'StageAvailableActionModel';
  availability: StageActionAvailability;
  name: Scalars['String']['output'];
  subType?: Maybe<StageActionSubType>;
  type: StageActionType;
};

export type StageCandidateActionsModel = {
  __typename?: 'StageCandidateActionsModel';
  rssAssessmentAction: StageActionRssAssessmentModel;
};

export type StageCandidateDeleteLogs = {
  __typename?: 'StageCandidateDeleteLogs';
  doneBy: Scalars['Float']['output'];
  id: Scalars['Int']['output'];
  reason: StageCandidateDeleteLogsReasonEnum;
  stageCandidate?: Maybe<SmStageCandidateModel>;
  stageCandidateId: Scalars['Float']['output'];
};

export enum StageCandidateDeleteLogsReasonEnum {
  AnotherReason = 'ANOTHER_REASON',
  LeftMyTeam = 'LEFT_MY_TEAM',
  LeftTheCompany = 'LEFT_THE_COMPANY',
  NotTheCorrectLevel = 'NOT_THE_CORRECT_LEVEL'
}

export type StageCandidateOrderByArgs = {
  candidateId?: InputMaybe<OrderByArgs>;
  lastDateOfCandidateAction?: InputMaybe<OrderByArgs>;
};

export enum StageCandidateStatus {
  Completed = 'COMPLETED',
  InProgress = 'IN_PROGRESS',
  ManagerCompleted = 'MANAGER_COMPLETED',
  NotStarted = 'NOT_STARTED',
  SignedOff = 'SIGNED_OFF'
}

export type StageCardModel = {
  __typename?: 'StageCardModel';
  candidateReportId?: Maybe<Scalars['Int']['output']>;
  company: Company;
  /** @deprecated Please use `company { id }` instead!-T@10/12/2022 */
  companyId: Scalars['Int']['output'];
  /** @deprecated Please use `company { logoUrl }` instead!-T@10/12/2022 */
  companyLogoUrl?: Maybe<Scalars['String']['output']>;
  /** @deprecated Please use `company { companyName }` instead!-T@10/12/2022 */
  companyName: Scalars['String']['output'];
  /** @deprecated Please use doneByUser.id instead!-T@10/12/2022 */
  doneBy: Scalars['Int']['output'];
  /** @deprecated Please use doneByUser.firstName instead!-T@10/12/2022 */
  doneByFirstName: Scalars['String']['output'];
  /** @deprecated Please use doneByUser.lastName instead!-T@10/12/2022 */
  doneByLastName: Scalars['String']['output'];
  doneByUser: User;
  /** @deprecated Please use doneForUser.id instead!-T@10/12/2022 */
  doneFor: Scalars['Int']['output'];
  /** @deprecated Please use doneForUser.firstName instead!-T@10/12/2022 */
  doneForFirstName: Scalars['String']['output'];
  /** @deprecated Please use doneForUser.lastName instead!-T@10/12/2022 */
  doneForLastName: Scalars['String']['output'];
  doneForUser: User;
  /** @deprecated Please use `stage { endTime }` instead!-T@10/12/2022 */
  endTime?: Maybe<Scalars['Date']['output']>;
  inspectable: Scalars['Boolean']['output'];
  /** @deprecated Please use `stageCandidate { lastDateOfCandidateAction }` instead!-T@10/12/2022 */
  lastDateOfCandidateAction?: Maybe<Scalars['Date']['output']>;
  project: Project;
  /** @deprecated Please use `project { id }` instead!-T@10/12/2022 */
  projectId: Scalars['Int']['output'];
  /** @deprecated Please use `project { moduleType }` instead!-T@10/12/2022 */
  projectModuleType: ProjectModuleType;
  /** @deprecated Please use `project { name }` instead!-T@10/12/2022 */
  projectName: Scalars['String']['output'];
  /** @deprecated Please use `stage { renderCandidateReport }` instead!-T@10/12/2022 */
  renderCandidateReport: Scalars['Boolean']['output'];
  stage: SmStageModel;
  stageCandidate: SmStageCandidateModel;
  /** @deprecated Please use `stageCandidate { id }` instead!-T@10/12/2022 */
  stageCandidateId: Scalars['Int']['output'];
  /** @deprecated Please use `stageCandidate { status }` instead!-T@10/12/2022 */
  stageCandidateStatus: StageCandidateStatus;
  /** @deprecated Please use `stage { id }` instead!-T@10/12/2022 */
  stageId: Scalars['Int']['output'];
  /** @deprecated Please use `stage { name }` instead!-T@10/12/2022 */
  stageName: Scalars['String']['output'];
  /** @deprecated Never used AFAIK! */
  stageResultGrade?: Maybe<Grade>;
  /** @deprecated Please use `stage { name }` instead!-T@10/12/2022 */
  stageStatus: StageStatus;
  /** @deprecated Please use `stage { startTime }` instead!-T@10/12/2022 */
  startTime?: Maybe<Scalars['Date']['output']>;
};

export enum StageCsvOptions {
  AllScoresAllMeasures = 'ALL_SCORES_ALL_MEASURES',
  Custom = 'CUSTOM',
  PercentileAllMeasures = 'PERCENTILE_ALL_MEASURES',
  PercentileCategoryCog = 'PERCENTILE_CATEGORY_COG',
  PercentileSoftSkills = 'PERCENTILE_SOFT_SKILLS'
}

export type StageGetCsvReportModel = {
  __typename?: 'StageGetCsvReportModel';
  blobName: Scalars['String']['output'];
};

export enum StageStatus {
  Active = 'ACTIVE',
  Expired = 'EXPIRED',
  Scheduled = 'SCHEDULED'
}

export enum StageType {
  External = 'EXTERNAL',
  Full = 'FULL',
  Partial = 'PARTIAL'
}

export type StartSzTestModel = {
  __typename?: 'StartSzTestModel';
  assessmentId: Scalars['Int']['output'];
};

export type StartTpTestModel = {
  __typename?: 'StartTpTestModel';
  url: Scalars['String']['output'];
};

export type StatisticalGradeBandModel = {
  __typename?: 'StatisticalGradeBandModel';
  displayText: Scalars['String']['output'];
  grade: Grade;
  position: Scalars['Int']['output'];
};

export type StatisticalResultScoreModel = {
  __typename?: 'StatisticalResultScoreModel';
  grade: Grade;
  percentile: Scalars['Float']['output'];
  stenScore: Scalars['Float']['output'];
  zScore: Scalars['Float']['output'];
};

export type StructuredScoreModel = {
  __typename?: 'StructuredScoreModel';
  children?: Maybe<Array<StructuredScoreModel>>;
  id: Scalars['Int']['output'];
  order?: Maybe<Scalars['Int']['output']>;
  score: ScoreModel;
  type: BasicScoreType;
};

export type SuccessProfile = {
  __typename?: 'SuccessProfile';
  calculationMethod: CalculationMethod;
  createdAt: Scalars['Date']['output'];
  deletedAt?: Maybe<Scalars['Date']['output']>;
  gradingMethod: GradingMethod;
  id: Scalars['Int']['output'];
  project?: Maybe<Project>;
  projectId: Scalars['Int']['output'];
  roleLevel: ContentRoleLevel;
  status: SuccessProfileStatus;
  successProfileSoftSkills?: Maybe<Array<SuccessProfileSoftSkill>>;
  successProfileTechnicalSkills?: Maybe<Array<SuccessProfileTechnicalSkill>>;
  updatedAt: Scalars['Date']['output'];
};

export type SuccessProfileExplanation = {
  __typename?: 'SuccessProfileExplanation';
  createdAt: Scalars['Date']['output'];
  deletedAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['Int']['output'];
  softSkillExplanations?: Maybe<Array<SuccessProfileSoftSkillExplanation>>;
  softSkillTypeExplanations?: Maybe<Array<SuccessProfileSoftSkillTypeExplanation>>;
  status: SuccessProfileExplanationStatus;
  successProfile: SuccessProfile;
  successProfileId: Scalars['Int']['output'];
  updatedAt: Scalars['Date']['output'];
};

export enum SuccessProfileExplanationStatus {
  Complete = 'COMPLETE',
  Editing = 'EDITING'
}

export type SuccessProfileScoreModel = ContextualScoreModel & {
  __typename?: 'SuccessProfileScoreModel';
  children?: Maybe<Array<ContextualScoreModel>>;
  contentClassification?: Maybe<ContentClassification>;
  id: Scalars['Int']['output'];
  roleLevel?: Maybe<ContentRoleLevel>;
  score: ScoreModel;
  type: BasicScoreType;
};

export type SuccessProfileSoftSkill = {
  __typename?: 'SuccessProfileSoftSkill';
  id: Scalars['Int']['output'];
  includeInCalibration: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  softSkill: SoftSkill;
  softSkillId: Scalars['Int']['output'];
  successProfile: SuccessProfile;
  successProfileId: Scalars['Int']['output'];
  successProfileSoftSkillDataSources?: Maybe<Array<SuccessProfileSoftSkillDataSource>>;
  successProfileSoftSkillTraits?: Maybe<Array<SuccessProfileSoftSkillTrait>>;
  type: SoftSkillType;
  weight: Scalars['Float']['output'];
};

export type SuccessProfileSoftSkillCreateOneArgs = {
  dataSources?: InputMaybe<Array<SuccessProfileSoftSkillDataSourceCreateOneBase>>;
  includeInCalibration?: InputMaybe<Scalars['Boolean']['input']>;
  softSkillId: Scalars['Int']['input'];
  successProfileId?: InputMaybe<Scalars['Int']['input']>;
  traits?: InputMaybe<Array<SuccessProfileSoftSkillTraitCreateOneArgs>>;
  type: SoftSkillType;
  weight?: InputMaybe<Scalars['Float']['input']>;
};

export type SuccessProfileSoftSkillDataSource = {
  __typename?: 'SuccessProfileSoftSkillDataSource';
  dataSourceType: DataSourceType;
  id: Scalars['Int']['output'];
  orientation?: Maybe<Scalars['Int']['output']>;
  softSkillType: SoftSkillType;
  successProfileSoftSkill: SuccessProfileSoftSkill;
  successProfileSoftSkillId: Scalars['Int']['output'];
};

export type SuccessProfileSoftSkillDataSourceCreateOneBase = {
  dataSourceType: DataSourceType;
  softSkillType: SoftSkillType;
};

export type SuccessProfileSoftSkillExplanation = {
  __typename?: 'SuccessProfileSoftSkillExplanation';
  defaultContent?: Maybe<SoftSkillSuccessProfileContent>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  shortDescription?: Maybe<Scalars['String']['output']>;
  softSkill: SoftSkill;
  softSkillId: Scalars['Int']['output'];
  successProfileExplanation: SuccessProfileExplanation;
  successProfileExplanationId: Scalars['Int']['output'];
};

export type SuccessProfileSoftSkillTrait = {
  __typename?: 'SuccessProfileSoftSkillTrait';
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  orientation?: Maybe<Scalars['Int']['output']>;
  softSkill: SoftSkill;
  softSkillId: Scalars['Int']['output'];
  successProfileSoftSkill: SuccessProfileSoftSkill;
  successProfileSoftSkillId: Scalars['Int']['output'];
  trait: Trait;
  traitId: Scalars['Int']['output'];
  weight: Scalars['Float']['output'];
};

export type SuccessProfileSoftSkillTraitCreateOneArgs = {
  orientation?: InputMaybe<Scalars['Int']['input']>;
  softSkillId?: InputMaybe<Scalars['Int']['input']>;
  successProfileSoftSkillId?: InputMaybe<Scalars['Int']['input']>;
  traitId: Scalars['Int']['input'];
  weight?: InputMaybe<Scalars['Float']['input']>;
};

export type SuccessProfileSoftSkillTypeExplanation = {
  __typename?: 'SuccessProfileSoftSkillTypeExplanation';
  defaultContent?: Maybe<SoftSkillTypeSuccessProfileContent>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  softSkillType: SoftSkillType;
  successProfileExplanation: SuccessProfileExplanation;
  successProfileExplanationId: Scalars['Int']['output'];
};

export enum SuccessProfileStatus {
  Complete = 'COMPLETE',
  MissingSoftSkills = 'MISSING_SOFT_SKILLS'
}

export type SuccessProfileTechnicalSkill = {
  __typename?: 'SuccessProfileTechnicalSkill';
  id: Scalars['Int']['output'];
  successProfile?: Maybe<SuccessProfile>;
  successProfileId: Scalars['Int']['output'];
  technicalSkill?: Maybe<TechnicalSkill>;
  technicalSkillId: Scalars['Int']['output'];
};

export type SuccessProfileTechnicalSkillCreateOneArgs = {
  successProfileId?: InputMaybe<Scalars['Int']['input']>;
  technicalSkillId: Scalars['Int']['input'];
};

export type SuccessProfileTechnicalSkillUpdateOneArgs = {
  id: Scalars['Int']['input'];
  successProfileId?: InputMaybe<Scalars['Int']['input']>;
  technicalSkillId?: InputMaybe<Scalars['Int']['input']>;
};

export type SzSkillsMerge = {
  __typename?: 'SzSkillsMerge';
  category?: Maybe<SkillCategory>;
  categoryId?: Maybe<Scalars['Int']['output']>;
  companyId: Scalars['Int']['output'];
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Blob>;
  iconBlobId?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  measurementConstructType?: Maybe<MeasurementConstructType>;
  name: Scalars['String']['output'];
  originId: Scalars['Int']['output'];
  skillType: SkillType;
};

export type SzSkillsMergeCreateOneArgs = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  companyId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  iconBlobId?: InputMaybe<Scalars['Int']['input']>;
  measurementConstructType?: InputMaybe<MeasurementConstructType>;
  name: Scalars['String']['input'];
  originId: Scalars['Int']['input'];
  skillType: SkillType;
};

export type SzSkillsMergeUpdateOneArgs = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  companyId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  iconBlobId?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
  measurementConstructType?: InputMaybe<MeasurementConstructType>;
  name?: InputMaybe<Scalars['String']['input']>;
  originId?: InputMaybe<Scalars['Int']['input']>;
  skillType?: InputMaybe<SkillType>;
};

export type SzSkillsMergeWithAvailability = {
  __typename?: 'SzSkillsMergeWithAvailability';
  alreadyExist: Scalars['Boolean']['output'];
  result?: Maybe<ResultModel>;
  skill: SzSkillsMerge;
};

export enum TrCriticalityEnum {
  High = 'HIGH',
  Low = 'LOW',
  Medium = 'MEDIUM'
}

export enum TrImpactEnum {
  High = 'HIGH',
  Low = 'LOW',
  Medium = 'MEDIUM'
}

export enum TrNumberSuccessorsEnum {
  One = 'ONE',
  ThreeOrMore = 'THREE_OR_MORE',
  Two = 'TWO',
  Zero = 'ZERO'
}

export enum TrRiskEnum {
  High = 'HIGH',
  Low = 'LOW',
  Medium = 'MEDIUM'
}

export enum TrScoreEnum {
  RisingTalent = 'RISING_TALENT',
  SolidContributor = 'SOLID_CONTRIBUTOR',
  StarTalent = 'STAR_TALENT',
  UnderperformingTalent = 'UNDERPERFORMING_TALENT'
}

export type TalentReviewFileUploadArgs = {
  endTime?: InputMaybe<Scalars['Date']['input']>;
  includeDeadlineInEmail?: InputMaybe<Scalars['Boolean']['input']>;
  projectId: Scalars['Int']['input'];
  sendEmail: Scalars['Boolean']['input'];
};

export type TalentReviewFileUploadLineModel = {
  __typename?: 'TalentReviewFileUploadLineModel';
  directReportEmail?: Maybe<Scalars['String']['output']>;
  directReportName?: Maybe<Scalars['String']['output']>;
  managerEmail?: Maybe<Scalars['String']['output']>;
  managerName?: Maybe<Scalars['String']['output']>;
};

export type TalentReviewFileUploadModel = {
  __typename?: 'TalentReviewFileUploadModel';
  apply: Scalars['Boolean']['output'];
  creates?: Maybe<Array<TalentReviewFileUploadLineModel>>;
  deletes?: Maybe<Array<TalentReviewFileUploadLineModel>>;
  endTime?: Maybe<Scalars['Date']['output']>;
  errorMessage?: Maybe<Scalars['String']['output']>;
  errorMessages?: Maybe<Array<Scalars['String']['output']>>;
  errors?: Maybe<Array<TalentReviewFileUploadLineModel>>;
  includeDeadlineInEmail?: Maybe<Scalars['Boolean']['output']>;
  noChanges?: Maybe<Array<TalentReviewFileUploadLineModel>>;
  projectId: Scalars['Int']['output'];
  sendEmail: Scalars['Boolean']['output'];
  updates?: Maybe<Array<TalentReviewFileUploadLineModel>>;
};

export type TechnicalSkill = {
  __typename?: 'TechnicalSkill';
  category?: Maybe<SkillCategory>;
  categoryId?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['Date']['output'];
  deletedAt?: Maybe<Scalars['Date']['output']>;
  icon?: Maybe<Blob>;
  iconBlobId?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type TechnicalSkillCreateOneArgs = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  iconBlobId?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};

export type TechnicalSkillSelfAssessmentGradeBandModel = {
  __typename?: 'TechnicalSkillSelfAssessmentGradeBandModel';
  displayText: Scalars['String']['output'];
  position: Scalars['Int']['output'];
  proficiency: TechnicalSkillSelfAssessmentProficiencyLevel;
};

export enum TechnicalSkillSelfAssessmentProficiencyLevel {
  Beginner = 'BEGINNER',
  Expert = 'EXPERT',
  Intermediate = 'INTERMEDIATE',
  NoKnowledge = 'NO_KNOWLEDGE'
}

export type TechnicalSkillSelfAssessmentScoreModel = {
  __typename?: 'TechnicalSkillSelfAssessmentScoreModel';
  technicalProficiency: TechnicalSkillSelfAssessmentProficiencyLevel;
};

export enum TechnicalSkillSortField {
  Date = 'DATE',
  Name = 'NAME'
}

export type TechnicalSkillUpdateOneArgs = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  iconBlobId?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type TestCardModel = {
  __typename?: 'TestCardModel';
  allowReset: Scalars['Boolean']['output'];
  hasPractice: Scalars['Boolean']['output'];
  test: TmTestModel;
  testCandidate: TmTestCandidateModel;
  /** @deprecated Please use `testCandidate { id }` instead!-T@25/11/2022 */
  testCandidateId: Scalars['Int']['output'];
  /** @deprecated Please use `test { id }` instead!-T@25/11/2022 */
  testId: Scalars['Int']['output'];
  /** @deprecated Please use `test { origin }` instead!-T@25/11/2022 */
  testOrigin: TestOrigin;
  /** @deprecated Please use `testCandidate { status }` instead!-T@25/11/2022 */
  testStatus: TestStatus;
  /** @deprecated Please use `test { subType }` instead!-T@25/11/2022 */
  testSubType?: Maybe<TestSubType>;
  /** @deprecated Please use `test { type }` instead!-T@25/11/2022 */
  testType: TestType;
  timePerQuestion?: Maybe<Scalars['Int']['output']>;
  timeRequirement?: Maybe<Scalars['Int']['output']>;
};

export type TestCardsModel = {
  __typename?: 'TestCardsModel';
  calibrationCards: Array<CalibrationCardModel>;
  /** @deprecated Please use `testCards` instead!-T@25/11/2022 */
  cards: Array<TestCardModel>;
  company: Company;
  /** @deprecated Please use `company { id }` instead!-T@25/11/2022 */
  companyId: Scalars['Float']['output'];
  /** @deprecated Please use `company { logoUrl }` insead!-T@25/11/2022 */
  companyLogoUrl?: Maybe<Scalars['String']['output']>;
  /** @deprecated Please use `company { name }` instead!-T@25/11/2022 */
  companyName: Scalars['String']['output'];
  displayInstructions: Scalars['Boolean']['output'];
  displayOnboarding: Scalars['Boolean']['output'];
  /** @deprecated Please use `doneByUser { id }` instead!-T@25/11/2022 */
  doneBy: Scalars['Int']['output'];
  /** @deprecated Please use `doneByUser { firstName }` instead!-T@25/11/2022 */
  doneByFirstName: Scalars['String']['output'];
  /** @deprecated Please use `doneByUser { lastName }` instead!-T@25/11/2022 */
  doneByLastName: Scalars['String']['output'];
  doneByUser: User;
  /** @deprecated Please use `doneForUser { id }` instead!-T@25/11/2022 */
  doneFor: Scalars['Int']['output'];
  /** @deprecated Please use `doneForUser { firstName }` instead!-T@25/11/2022 */
  doneForFirstName: Scalars['String']['output'];
  /** @deprecated Please use `doneForUser { lastName }` instead!-T@25/11/2022 */
  doneForLastName: Scalars['String']['output'];
  doneForUser: User;
  /** @deprecated Please use `stage { endTime }` instead!-T@25/11/2022 */
  endTime?: Maybe<Scalars['Date']['output']>;
  formCards: Array<FormCardModel>;
  /** @deprecated Feature replaced by new Practice Tests.-T@25/11/2022 */
  isPracticeProject?: Maybe<Scalars['Boolean']['output']>;
  project: Project;
  /** @deprecated Please use `project { id }` instead!-T@25/11/2022 */
  projectId: Scalars['Int']['output'];
  /** @deprecated Please use `project { moduleType }` instead! */
  projectModuleType: ProjectModuleType;
  /** @deprecated Please use `project { name }` instead!-T@25/11/2022 */
  projectName: Scalars['String']['output'];
  /** @deprecated Feature replaced by new Practice Tests.-T@25/11/2022 */
  projectPractice?: Maybe<ProjectPracticeModel>;
  stage: SmStageModel;
  stageCandidate: SmStageCandidateModel;
  /** @deprecated Please use `stageCandidate { id }` instead!-T@25/11/2022 */
  stageCandidateId: Scalars['Int']['output'];
  /** @deprecated Please use `stageCandidate { status }` instead!-T@25/11/2022 */
  stageCandidateStatus: StageCandidateStatus;
  /** @deprecated Please use `stage { id }` insead!-T@25/11/2022 */
  stageId: Scalars['Int']['output'];
  /** @deprecated Please use `stage { name }` instead!-T@25/11/2022 */
  stageName: Scalars['String']['output'];
  /** @deprecated Please use `stage { status }` instead!-T@25/11/2022 */
  stageStatus: StageStatus;
  /** @deprecated Please use `stage { startTime }` instead!-T@25/11/2022 */
  startTime?: Maybe<Scalars['Date']['output']>;
  testCards: Array<TestCardModel>;
};

export enum TestOrigin {
  SpottedZebra = 'SPOTTED_ZEBRA',
  TestPartnership = 'TEST_PARTNERSHIP'
}

export enum TestStatus {
  Completed = 'COMPLETED',
  InProgress = 'IN_PROGRESS',
  NotStarted = 'NOT_STARTED'
}

export enum TestSubType {
  Inductive = 'INDUCTIVE',
  Numerical = 'NUMERICAL',
  Verbal = 'VERBAL'
}

export enum TestType {
  Cognitive = 'COGNITIVE',
  Personality = 'PERSONALITY',
  TalentReview = 'TALENT_REVIEW'
}

export type TmTestCandidateModel = {
  __typename?: 'TmTestCandidateModel';
  assessmentId?: Maybe<Scalars['Int']['output']>;
  /** @deprecated This will be removed in the future. Renamed to "doneFor". */
  candidateId: Scalars['Int']['output'];
  createdAt: Scalars['Date']['output'];
  deletedAt?: Maybe<Scalars['Date']['output']>;
  doneBy: Scalars['Int']['output'];
  doneFor: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  stageCandidate?: Maybe<SmStageCandidateModel>;
  stageCandidateId: Scalars['Int']['output'];
  status: TestStatus;
  test?: Maybe<TmTestModel>;
  testId: Scalars['Int']['output'];
  testOrigin: TestOrigin;
  testResult?: Maybe<TmTestResultModel>;
  testResultId?: Maybe<Scalars['Int']['output']>;
  timeModifierPercentage: Scalars['Float']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type TmTestModel = {
  __typename?: 'TmTestModel';
  createdAt: Scalars['Date']['output'];
  deletedAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['Int']['output'];
  nQuestionsPerTrait?: Maybe<Scalars['Int']['output']>;
  origin: TestOrigin;
  stageId: Scalars['Int']['output'];
  subId: Scalars['String']['output'];
  subType?: Maybe<TestSubType>;
  tpProjectId?: Maybe<Scalars['String']['output']>;
  type: TestType;
  updatedAt: Scalars['Date']['output'];
};

export type TmTestResultModel = {
  __typename?: 'TmTestResultModel';
  createdAt: Scalars['Date']['output'];
  deletedAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['Int']['output'];
  scores: Array<BasicScoreModel>;
  testCandidate: TmTestCandidateModel;
  testCandidateId: Scalars['Int']['output'];
  updatedAt: Scalars['Date']['output'];
};

export enum TrCustomEvaluation {
  RisingTalent = 'RISING_TALENT',
  SolidContributor = 'SOLID_CONTRIBUTOR',
  StarTalent = 'STAR_TALENT',
  UnderperformingTalent = 'UNDERPERFORMING_TALENT'
}

export type TrCustomGradeBandModel = {
  __typename?: 'TrCustomGradeBandModel';
  displayText: Scalars['String']['output'];
  evaluation: TrCustomEvaluation;
  position: Scalars['Int']['output'];
};

export type TrCustomResultScoreModel = {
  __typename?: 'TrCustomResultScoreModel';
  evaluation: TrCustomEvaluation;
  score: Scalars['Float']['output'];
};

export type TrItemModel = {
  __typename?: 'TrItemModel';
  isCompleted: Scalars['Boolean']['output'];
  questions: Array<TrQuestionModel>;
  remainingQuestions: Scalars['Int']['output'];
  /** @deprecated Please use new property `isCompleted` if you wish to know whether the assessment is completed or not! */
  testCandidateStatus: TestStatus;
  totalQuestions: Scalars['Int']['output'];
};

export type TrOptionModel = {
  __typename?: 'TrOptionModel';
  key: Scalars['Int']['output'];
  subId: Scalars['String']['output'];
  text: Scalars['String']['output'];
};

export type TrQuestionModel = {
  __typename?: 'TrQuestionModel';
  options: Array<TrOptionModel>;
  orientation: QuestionOrientation;
  subId: Scalars['String']['output'];
  text: Scalars['String']['output'];
};

export type Trait = {
  __typename?: 'Trait';
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  isArchived: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  softSkillTraits?: Maybe<Array<SoftSkillTrait>>;
  testTypes: Array<TraitTestTypeModel>;
};

export type TraitRoleLevelContent = {
  __typename?: 'TraitRoleLevelContent';
  classification: ContentClassification;
  content?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  roleLevel: ContentRoleLevel;
  softSkill?: Maybe<SoftSkill>;
  softSkillId?: Maybe<Scalars['Int']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  trait?: Maybe<Trait>;
  traitId?: Maybe<Scalars['Int']['output']>;
};

export type TraitRoleLevelContentPaginatedModel = {
  __typename?: 'TraitRoleLevelContentPaginatedModel';
  count?: Maybe<Scalars['Float']['output']>;
  traitContent?: Maybe<Array<TraitRoleLevelContent>>;
};

export type TraitScoreModel = ContextualScoreModel & {
  __typename?: 'TraitScoreModel';
  children?: Maybe<Array<ContextualScoreModel>>;
  contentClassification?: Maybe<ContentClassification>;
  id: Scalars['Int']['output'];
  iqRoleLevelContent?: Maybe<InterviewQuestionRoleLevel>;
  roleLevel?: Maybe<ContentRoleLevel>;
  score: ScoreModel;
  spSoftSkillTrait?: Maybe<SuccessProfileSoftSkillTrait>;
  traitRoleLevelContent?: Maybe<TraitRoleLevelContent>;
  type: BasicScoreType;
};

export type TraitSoftSkillContextModel = {
  __typename?: 'TraitSoftSkillContextModel';
  behaviours: Array<BehaviourModel>;
  id: Scalars['Int']['output'];
  interviewQuestionContents?: Maybe<Array<InterviewQuestionContentModel>>;
  interviewQuestionReasonContents?: Maybe<Array<InterviewQuestionReasonContentModel>>;
  softSkillId?: Maybe<Scalars['Int']['output']>;
  traitId: Scalars['Int']['output'];
};

export type TraitTestTypeModel = {
  __typename?: 'TraitTestTypeModel';
  id: Scalars['Int']['output'];
  testSubType?: Maybe<TestSubType>;
  testType: TestType;
  trait?: Maybe<Trait>;
  traitId: Scalars['Int']['output'];
};

export type TraitTestTypesUpdateOneArgs = {
  testSubType?: InputMaybe<TestSubType>;
  testType: TestType;
  traitId: Scalars['Int']['input'];
};

export type UpdateFormFieldByFieldIdArgs = {
  displayOrder?: InputMaybe<Scalars['Int']['input']>;
  fieldId: Scalars['Int']['input'];
  isOptional?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateRespondantFormAnswerArgs = {
  fieldId: Scalars['Int']['input'];
  response: Scalars['String']['input'];
};

export type UploadResult = {
  __typename?: 'UploadResult';
  url: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  companyInfo?: Maybe<Array<UserCompanyInfo>>;
  email: Scalars['String']['output'];
  externalId?: Maybe<Scalars['String']['output']>;
  firstName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  isPuppet: Scalars['Boolean']['output'];
  language: Language;
  lastName: Scalars['String']['output'];
  roles: Array<UserRole>;
  subId?: Maybe<Scalars['String']['output']>;
  twoFactorEnabled: Scalars['Boolean']['output'];
};

export type UserCompanyInfo = {
  __typename?: 'UserCompanyInfo';
  companyId: Scalars['Int']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  customFieldsString?: Maybe<Scalars['String']['output']>;
  department?: Maybe<Scalars['String']['output']>;
  employeeId?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['Date']['output']>;
  hrManagerEmployeeId?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  jobTitle?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['Date']['output']>;
  userId: Scalars['Int']['output'];
};

export type UserCompanyInfoCustomFieldsArgs = {
  division?: InputMaybe<Scalars['String']['input']>;
  function?: InputMaybe<Scalars['String']['input']>;
  functionGroup?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  office?: InputMaybe<Scalars['String']['input']>;
  officeCountry?: InputMaybe<Scalars['String']['input']>;
  organisationLevel?: InputMaybe<Scalars['String']['input']>;
};

export type UserModelPaginated = {
  __typename?: 'UserModelPaginated';
  data?: Maybe<Array<User>>;
  pageInfo?: Maybe<Pageinfo>;
};

export type UserRole = {
  __typename?: 'UserRole';
  companyRole: CompanyRole;
  externalId?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  user: User;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type UserSettings = {
  __typename?: 'UserSettings';
  id: Scalars['Int']['output'];
  settings?: Maybe<UserSettingsOptions>;
  userId: Scalars['Int']['output'];
};

export type UserSettingsOptions = {
  __typename?: 'UserSettingsOptions';
  CM_lastVisitedModule?: Maybe<Scalars['Boolean']['output']>;
  TR_displayOnboarding?: Maybe<Scalars['Boolean']['output']>;
};

export type UserSettingsOptionsArgs = {
  CM_lastVisitedModule?: InputMaybe<Scalars['Boolean']['input']>;
  TR_displayOnboarding?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VerbalOptionModel = {
  __typename?: 'VerbalOptionModel';
  key: Scalars['Int']['output'];
  subId: Scalars['String']['output'];
  text: Scalars['String']['output'];
};

export type VerbalQuestionModel = {
  __typename?: 'VerbalQuestionModel';
  difficulty: Scalars['Float']['output'];
  options: Array<VerbalOptionModel>;
  subId: Scalars['String']['output'];
  text: Scalars['String']['output'];
};

export type VerbalTestletModel = {
  __typename?: 'VerbalTestletModel';
  isCompleted: Scalars['Boolean']['output'];
  questions: Array<VerbalQuestionModel>;
  remainingQuestions: Scalars['Int']['output'];
  remainingTime: Scalars['Int']['output'];
  /** @deprecated Please use new property `isCompleted` if you wish to know whether the assessment is completed or not! */
  testCandidateStatus: TestStatus;
  text: Scalars['String']['output'];
  timeLimit: Scalars['Int']['output'];
  totalQuestions: Scalars['Int']['output'];
};

export type Widget = {
  __typename?: 'Widget';
  createdAt: Scalars['Date']['output'];
  deletedAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['Int']['output'];
  isArchived: Scalars['Boolean']['output'];
  name?: Maybe<Scalars['String']['output']>;
  reportConfigs?: Maybe<Array<ReportConfig>>;
  screenShotBlob?: Maybe<Blob>;
  screenShotBlobId?: Maybe<Scalars['Int']['output']>;
  type: WidgetType;
  updatedAt: Scalars['Date']['output'];
  widgetOptions?: Maybe<Array<WidgetOption>>;
};

export type WidgetConfig = {
  __typename?: 'WidgetConfig';
  id: Scalars['Int']['output'];
  reportConfig?: Maybe<ReportConfig>;
  reportConfigId: Scalars['Int']['output'];
  settings?: Maybe<Scalars['String']['output']>;
  widgetOption?: Maybe<WidgetOption>;
  widgetOptionId: Scalars['Int']['output'];
};

export type WidgetConfigUpdateOneArgs = {
  id: Scalars['Int']['input'];
  settings?: InputMaybe<Scalars['String']['input']>;
};

export type WidgetConfigUpsertOneBatchedWithReportConfigArgs = {
  settings?: InputMaybe<Scalars['String']['input']>;
  widgetOptionId: Scalars['Int']['input'];
};

export type WidgetOption = {
  __typename?: 'WidgetOption';
  defaultValue?: Maybe<Scalars['String']['output']>;
  fieldType: FieldType;
  id: Scalars['Int']['output'];
  isArchived: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  question?: Maybe<Scalars['String']['output']>;
  widget: Widget;
  widgetConfigs?: Maybe<Array<WidgetConfig>>;
  widgetId: Scalars['Int']['output'];
};

export type WidgetRender = {
  __typename?: 'WidgetRender';
  id: Scalars['Int']['output'];
  newPageBefore: Scalars['Boolean']['output'];
  position: Scalars['Int']['output'];
  reportConfig: ReportConfig;
  reportConfigId: Scalars['Int']['output'];
  reportRender: ReportRender;
  reportRenderId: Scalars['Int']['output'];
  type: WidgetType;
  widgetConfigs?: Maybe<Array<WidgetConfig>>;
  widgetRenderData?: Maybe<WidgetRenderData>;
};

export type WidgetRenderData = {
  subId?: Maybe<Scalars['String']['output']>;
  widgetType: WidgetType;
};

export enum WidgetType {
  /** Assessment link */
  AssessmentLink = 'ASSESSMENT_LINK',
  /** Assessment links */
  AssessmentLinks = 'ASSESSMENT_LINKS',
  /** Assessment summaries */
  AssessmentSummaries = 'ASSESSMENT_SUMMARIES',
  /** Assessment summary */
  AssessmentSummary = 'ASSESSMENT_SUMMARY',
  /** Candidate and company details */
  CandidateCompany = 'CANDIDATE_COMPANY',
  /** (Internal) Contextual score */
  ContextualScore = 'CONTEXTUAL_SCORE',
  InterviewGuide = 'INTERVIEW_GUIDE',
  InterviewGuideCategories = 'INTERVIEW_GUIDE_CATEGORIES',
  InterviewGuideCategory = 'INTERVIEW_GUIDE_CATEGORY',
  InterviewGuideContent = 'INTERVIEW_GUIDE_CONTENT',
  InterviewGuideFlow = 'INTERVIEW_GUIDE_FLOW',
  InterviewGuideHowToUse = 'INTERVIEW_GUIDE_HOW_TO_USE',
  InterviewGuideStep = 'INTERVIEW_GUIDE_STEP',
  /** Role level chart */
  RoleLevelChart = 'ROLE_LEVEL_CHART',
  /** Soft skills card */
  SoftSkillCard = 'SOFT_SKILL_CARD',
  /** Soft skills cards */
  SoftSkillCards = 'SOFT_SKILL_CARDS',
  /** Soft skills datasource */
  SoftSkillDataSource = 'SOFT_SKILL_DATA_SOURCE',
  /** Soft skill excluded */
  SoftSkillExcluded = 'SOFT_SKILL_EXCLUDED',
  /** (Internal) Soft skill score */
  SoftSkillScore = 'SOFT_SKILL_SCORE',
  /** (Internal) Soft skill score chart */
  SoftSkillScoreChart = 'SOFT_SKILL_SCORE_CHART',
  /** (Internal) Soft skill score top and bottom */
  SoftSkillScoreTopBottom = 'SOFT_SKILL_SCORE_TOP_BOTTOM',
  /** (Internal) Soft skill score with content */
  SoftSkillScoreWithContent = 'SOFT_SKILL_SCORE_WITH_CONTENT',
  /** Success profile cover page */
  SpCoverPage = 'SP_COVER_PAGE',
  /** Success profile explanation */
  SpExplanation = 'SP_EXPLANATION',
  /** Success profile header and footer */
  SpHeaderFooter = 'SP_HEADER_FOOTER',
  /** Soft skills detail */
  SpSoftSkillDetail = 'SP_SOFT_SKILL_DETAIL',
  SpSoftSkillExplanation = 'SP_SOFT_SKILL_EXPLANATION',
  /** Soft skills spider chart */
  SpSoftSkillSpider = 'SP_SOFT_SKILL_SPIDER',
  /** Soft skill type explanation */
  SpSoftSkillTypeExplanation = 'SP_SOFT_SKILL_TYPE_EXPLANATION',
  /** Stage results cover page */
  SrCoverPage = 'SR_COVER_PAGE',
  /** Information required for email */
  SrEmailContent = 'SR_EMAIL_CONTENT',
  StageCandidateHeader = 'STAGE_CANDIDATE_HEADER',
  StageCandidateHighlightedScores = 'STAGE_CANDIDATE_HIGHLIGHTED_SCORES',
  /** (Internal) Stage Candidate Soft skill score with content */
  StageCandidateSoftSkillScoreSummaryWithContent = 'STAGE_CANDIDATE_SOFT_SKILL_SCORE_SUMMARY_WITH_CONTENT',
  /** (Internal) Stage Candidate Soft skill score with content */
  StageCandidateSoftSkillScoreWithContent = 'STAGE_CANDIDATE_SOFT_SKILL_SCORE_WITH_CONTENT',
  StageCandidateSuccessProfileScoreFinalScores = 'STAGE_CANDIDATE_SUCCESS_PROFILE_SCORE_FINAL_SCORES',
  StageCandidateSuccessProfileScoreSummaryWithContent = 'STAGE_CANDIDATE_SUCCESS_PROFILE_SCORE_SUMMARY_WITH_CONTENT',
  StageCandidateSuccessProfileScoreWithContent = 'STAGE_CANDIDATE_SUCCESS_PROFILE_SCORE_WITH_CONTENT',
  /** Static */
  Static = 'STATIC',
  /** (Internal) Success profile score */
  SuccessProfileScore = 'SUCCESS_PROFILE_SCORE',
  /** Success profile scores - chart */
  SuccessProfileScoreChart = 'SUCCESS_PROFILE_SCORE_CHART',
  /** Success profile scores - just final scores */
  SuccessProfileScoreFinalScores = 'SUCCESS_PROFILE_SCORE_FINAL_SCORES',
  /** Success profile scores - top and bottom soft skills */
  SuccessProfileScoreTopBottom = 'SUCCESS_PROFILE_SCORE_TOP_BOTTOM',
  /** Success profile scores - with content */
  SuccessProfileScoreWithContent = 'SUCCESS_PROFILE_SCORE_WITH_CONTENT',
  TestingWidget = 'TESTING_WIDGET',
  /** Test summary */
  TestSummary = 'TEST_SUMMARY',
  /** (Internal) trait score */
  TraitScore = 'TRAIT_SCORE',
  /** (Internal) trait score with content */
  TraitScoreWithContent = 'TRAIT_SCORE_WITH_CONTENT',
  /** (Internal) trait score with content and IQ */
  TraitScoreWithIq = 'TRAIT_SCORE_WITH_IQ',
  WidgetExample = 'WIDGET_EXAMPLE'
}

export enum WithDeletedChoice {
  All = 'ALL',
  OnlyArchived = 'ONLY_ARCHIVED',
  OnlyNotArchived = 'ONLY_NOT_ARCHIVED'
}

export type WrdAssessmentLink = WidgetRenderData & {
  __typename?: 'WrdAssessmentLink';
  header: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  subId?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
  urlDisplayText: Scalars['String']['output'];
  widgetType: WidgetType;
};

export type WrdAssessmentLinks = WidgetRenderData & {
  __typename?: 'WrdAssessmentLinks';
  assessmentLinks?: Maybe<Array<WrdAssessmentLink>>;
  subId?: Maybe<Scalars['String']['output']>;
  widgetType: WidgetType;
};

export type WrdAssessmentSummaries = WidgetRenderData & {
  __typename?: 'WrdAssessmentSummaries';
  assessmentSummaries?: Maybe<Array<WrdAssessmentSummary>>;
  subId?: Maybe<Scalars['String']['output']>;
  widgetType: WidgetType;
};

export type WrdAssessmentSummary = WidgetRenderData & {
  __typename?: 'WrdAssessmentSummary';
  order: Scalars['Int']['output'];
  subId?: Maybe<Scalars['String']['output']>;
  testSummaries: Array<WrdTestSummary>;
  totalTime: Scalars['Int']['output'];
  widgetType: WidgetType;
};

export type WrdCandidateCompany = WidgetRenderData & {
  __typename?: 'WrdCandidateCompany';
  candidateAvatarUrl?: Maybe<Scalars['String']['output']>;
  candidateInitials: Scalars['String']['output'];
  candidateName: Scalars['String']['output'];
  companyLogo?: Maybe<Scalars['String']['output']>;
  companyName: Scalars['String']['output'];
  subId?: Maybe<Scalars['String']['output']>;
  widgetType: WidgetType;
};

export type WrdContextualScore = WidgetRenderData & {
  __typename?: 'WrdContextualScore';
  barSize?: Maybe<Scalars['Int']['output']>;
  children?: Maybe<Array<WrdContextualScore>>;
  displayClassification: Scalars['String']['output'];
  displayScoreType?: Maybe<DisplayScoreType>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  order?: Maybe<Scalars['Int']['output']>;
  score: ScoreModel;
  subId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  widgetType: WidgetType;
};

export type WrdIgContent = WidgetRenderData & {
  __typename?: 'WrdIgContent';
  contentType: IgContentType;
  id: Scalars['Int']['output'];
  interviewGuideId: Scalars['Int']['output'];
  subId?: Maybe<Scalars['String']['output']>;
  text: Scalars['String']['output'];
  widgetType: WidgetType;
};

export type WrdIgInterviewGuideCategories = WidgetRenderData & {
  __typename?: 'WrdIgInterviewGuideCategories';
  categories?: Maybe<Array<Maybe<WrdIgInterviewGuideCategory>>>;
  subId?: Maybe<Scalars['String']['output']>;
  widgetType: WidgetType;
};

export type WrdIgInterviewGuideCategory = WidgetRenderData & {
  __typename?: 'WrdIgInterviewGuideCategory';
  colour?: Maybe<IgCategoryColour>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  order?: Maybe<Scalars['Int']['output']>;
  subId?: Maybe<Scalars['String']['output']>;
  widgetType: WidgetType;
};

export type WrdIgStep = WidgetRenderData & {
  __typename?: 'WrdIgStep';
  action?: Maybe<Scalars['String']['output']>;
  colour?: Maybe<IgCategoryColour>;
  durationInSeconds?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  interviewGuideId: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  questionType: IgQuestionType;
  staticQuestionName?: Maybe<Scalars['String']['output']>;
  subId?: Maybe<Scalars['String']['output']>;
  widgetType: WidgetType;
};

export type WrdInterviewGuide = WidgetRenderData & {
  __typename?: 'WrdInterviewGuide';
  contents?: Maybe<Array<Maybe<WrdIgContent>>>;
  id: Scalars['Int']['output'];
  steps?: Maybe<Array<Maybe<WrdIgStep>>>;
  subId?: Maybe<Scalars['String']['output']>;
  widgetType: WidgetType;
};

export type WrdInterviewGuideFlow = WidgetRenderData & {
  __typename?: 'WrdInterviewGuideFlow';
  contents?: Maybe<Array<Maybe<WrdIgContent>>>;
  id: Scalars['Int']['output'];
  steps?: Maybe<Array<Maybe<WrdIgStep>>>;
  subId?: Maybe<Scalars['String']['output']>;
  widgetType: WidgetType;
};

export type WrdInterviewGuideHowToUse = WidgetRenderData & {
  __typename?: 'WrdInterviewGuideHowToUse';
  contents?: Maybe<Array<Maybe<WrdIgContent>>>;
  id: Scalars['Int']['output'];
  steps?: Maybe<Array<Maybe<WrdIgStep>>>;
  subId?: Maybe<Scalars['String']['output']>;
  widgetType: WidgetType;
};

export type WrdRoleLevelChart = WidgetRenderData & {
  __typename?: 'WrdRoleLevelChart';
  contentRoleLevelsToDisplay?: Maybe<Array<ContentRoleLevel>>;
  roleLevel: ContentRoleLevel;
  subId?: Maybe<Scalars['String']['output']>;
  widgetType: WidgetType;
};

export type WrdSoftSkillCard = WidgetRenderData & {
  __typename?: 'WrdSoftSkillCard';
  order: Scalars['Int']['output'];
  softSkillDataSources?: Maybe<Array<WrdSoftSkillDataSource>>;
  softSkillId: Scalars['Int']['output'];
  softSkillName: Scalars['String']['output'];
  softSkillType: SoftSkillType;
  subId?: Maybe<Scalars['String']['output']>;
  weight: Scalars['Float']['output'];
  weightRatio: Scalars['Float']['output'];
  widgetType: WidgetType;
};

export type WrdSoftSkillCards = WidgetRenderData & {
  __typename?: 'WrdSoftSkillCards';
  softSkillCards?: Maybe<Array<WrdSoftSkillCard>>;
  softSkillsExcluded?: Maybe<Array<WrdSoftSkillExcluded>>;
  subId?: Maybe<Scalars['String']['output']>;
  widgetType: WidgetType;
};

export type WrdSoftSkillDataSource = WidgetRenderData & {
  __typename?: 'WrdSoftSkillDataSource';
  dataSourceType: DataSourceType;
  softSkillType: SoftSkillType;
  subId?: Maybe<Scalars['String']['output']>;
  widgetType: WidgetType;
};

export type WrdSoftSkillExcluded = WidgetRenderData & {
  __typename?: 'WrdSoftSkillExcluded';
  category: Scalars['String']['output'];
  companyId: Scalars['Int']['output'];
  softSkillId: Scalars['Int']['output'];
  softSkillName: Scalars['String']['output'];
  subId?: Maybe<Scalars['String']['output']>;
  widgetType: WidgetType;
};

export type WrdSoftSkillScore = WidgetRenderData & {
  __typename?: 'WrdSoftSkillScore';
  barSize?: Maybe<Scalars['Int']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  children?: Maybe<Array<WrdTraitScore>>;
  displayClassification: Scalars['String']['output'];
  displayScoreType?: Maybe<DisplayScoreType>;
  id: Scalars['Int']['output'];
  measurementConstructType?: Maybe<MeasurementConstructType>;
  name: Scalars['String']['output'];
  order?: Maybe<Scalars['Int']['output']>;
  score: ScoreModel;
  softSkillImageType?: Maybe<SoftSkillImageType>;
  subId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  widgetType: WidgetType;
};

export type WrdSoftSkillScoreChart = WidgetRenderData & {
  __typename?: 'WrdSoftSkillScoreChart';
  barSize?: Maybe<Scalars['Int']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  children?: Maybe<Array<WrdTraitScore>>;
  displayClassification: Scalars['String']['output'];
  displayScoreType?: Maybe<DisplayScoreType>;
  id: Scalars['Int']['output'];
  measurementConstructType?: Maybe<MeasurementConstructType>;
  name: Scalars['String']['output'];
  order?: Maybe<Scalars['Int']['output']>;
  score: ScoreModel;
  softSkillImageType?: Maybe<SoftSkillImageType>;
  subId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  widgetType: WidgetType;
};

export type WrdSoftSkillScoreTopBottom = WidgetRenderData & {
  __typename?: 'WrdSoftSkillScoreTopBottom';
  barSize?: Maybe<Scalars['Int']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  children?: Maybe<Array<WrdTraitScoreWithContent>>;
  displayClassification: Scalars['String']['output'];
  displayScoreType?: Maybe<DisplayScoreType>;
  id: Scalars['Int']['output'];
  measurementConstructType?: Maybe<MeasurementConstructType>;
  name: Scalars['String']['output'];
  order?: Maybe<Scalars['Int']['output']>;
  positionType?: Maybe<ContextualScorePositionType>;
  score: ScoreModel;
  softSkillImageType?: Maybe<SoftSkillImageType>;
  subId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  widgetType: WidgetType;
};

export type WrdSoftSkillScoreWithContent = WidgetRenderData & {
  __typename?: 'WrdSoftSkillScoreWithContent';
  barSize?: Maybe<Scalars['Int']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  children?: Maybe<Array<WrdTraitScoreWithContent>>;
  description?: Maybe<Scalars['String']['output']>;
  displayClassification: Scalars['String']['output'];
  displayScoreType?: Maybe<DisplayScoreType>;
  feedback?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  headerText?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  iqTrait?: Maybe<WrdTraitScoreWithIq>;
  measurementConstructType?: Maybe<MeasurementConstructType>;
  name: Scalars['String']['output'];
  order?: Maybe<Scalars['Int']['output']>;
  score: ScoreModel;
  softSkillContentHeaderType?: Maybe<SoftSkillContentHeaderType>;
  softSkillImageType?: Maybe<SoftSkillImageType>;
  softSkillType?: Maybe<SoftSkillType>;
  subId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  weight?: Maybe<Scalars['Float']['output']>;
  widgetType: WidgetType;
};

export type WrdSpCoverPage = WidgetRenderData & {
  __typename?: 'WrdSpCoverPage';
  companyLogo?: Maybe<Scalars['String']['output']>;
  projectId: Scalars['Int']['output'];
  projectName: Scalars['String']['output'];
  subId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  widgetType: WidgetType;
};

export type WrdSpExplanation = WidgetRenderData & {
  __typename?: 'WrdSpExplanation';
  softSkillExplanations?: Maybe<Array<WrdSpSoftSkillDetail>>;
  softSkillTypeExplanations?: Maybe<Array<WrdSpSoftSkillTypeExplanation>>;
  subId?: Maybe<Scalars['String']['output']>;
  widgetType: WidgetType;
};

export type WrdSpHeaderFooter = WidgetRenderData & {
  __typename?: 'WrdSpHeaderFooter';
  companyLogo?: Maybe<Scalars['String']['output']>;
  projectId: Scalars['Int']['output'];
  projectName: Scalars['String']['output'];
  subId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  widgetType: WidgetType;
};

export type WrdSpSoftSkillDetail = WidgetRenderData & {
  __typename?: 'WrdSpSoftSkillDetail';
  description: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  shortDescription: Scalars['String']['output'];
  softSkillId: Scalars['Int']['output'];
  softSkillName: Scalars['String']['output'];
  softSkillType: SoftSkillType;
  subId?: Maybe<Scalars['String']['output']>;
  weight: Scalars['Float']['output'];
  weightRatio: Scalars['Float']['output'];
  widgetType: WidgetType;
};

export type WrdSpSoftSkillSpider = WidgetRenderData & {
  __typename?: 'WrdSpSoftSkillSpider';
  projectName: Scalars['String']['output'];
  spSoftSkillDetails?: Maybe<Array<WrdSpSoftSkillDetail>>;
  subId?: Maybe<Scalars['String']['output']>;
  widgetType: WidgetType;
};

export type WrdSpSoftSkillTypeExplanation = WidgetRenderData & {
  __typename?: 'WrdSpSoftSkillTypeExplanation';
  description: Scalars['String']['output'];
  softSkillType: SoftSkillType;
  subId?: Maybe<Scalars['String']['output']>;
  widgetType: WidgetType;
};

export type WrdSrCoverPage = WidgetRenderData & {
  __typename?: 'WrdSrCoverPage';
  candidateAvatarUrl?: Maybe<Scalars['String']['output']>;
  candidateInitials: Scalars['String']['output'];
  candidateName: Scalars['String']['output'];
  companyLogo?: Maybe<Scalars['String']['output']>;
  companyName: Scalars['String']['output'];
  projectId: Scalars['Int']['output'];
  projectName: Scalars['String']['output'];
  stageName: Scalars['String']['output'];
  subId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  widgetType: WidgetType;
};

export type WrdSrEmailContent = WidgetRenderData & {
  __typename?: 'WrdSrEmailContent';
  candidateAvatarUrl?: Maybe<Scalars['String']['output']>;
  candidateInitials: Scalars['String']['output'];
  candidateName: Scalars['String']['output'];
  companyLogo?: Maybe<Scalars['String']['output']>;
  companyName: Scalars['String']['output'];
  gradeColor: Scalars['String']['output'];
  gradeColorRGBA: Scalars['String']['output'];
  projectId: Scalars['Int']['output'];
  projectName: Scalars['String']['output'];
  score: Scalars['String']['output'];
  stageName: Scalars['String']['output'];
  subId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  widgetType: WidgetType;
};

export type WrdStageCandidateHeader = WidgetRenderData & {
  __typename?: 'WrdStageCandidateHeader';
  candidateAvatarUrl?: Maybe<Scalars['String']['output']>;
  candidateInitials: Scalars['String']['output'];
  candidateName: Scalars['String']['output'];
  companyLogo?: Maybe<Scalars['String']['output']>;
  companyName: Scalars['String']['output'];
  projectName: Scalars['String']['output'];
  subId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  widgetType: WidgetType;
};

export type WrdStageCandidateHighlightedScores = WidgetRenderData & {
  __typename?: 'WrdStageCandidateHighlightedScores';
  barSize?: Maybe<Scalars['Int']['output']>;
  children?: Maybe<Array<WrdContextualScore>>;
  content?: Maybe<Scalars['String']['output']>;
  displayClassification: Scalars['String']['output'];
  displayScoreType?: Maybe<DisplayScoreType>;
  highlightedScores?: Maybe<Array<WrdSoftSkillScore>>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  order?: Maybe<Scalars['Int']['output']>;
  positionType?: Maybe<ContextualScorePositionType>;
  score: ScoreModel;
  subId?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  widgetType: WidgetType;
};

export type WrdStageCandidateSoftSkillScoreSummaryWithContent = WidgetRenderData & {
  __typename?: 'WrdStageCandidateSoftSkillScoreSummaryWithContent';
  barSize?: Maybe<Scalars['Int']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  children?: Maybe<Array<WrdTraitScoreWithContent>>;
  description?: Maybe<Scalars['String']['output']>;
  displayClassification: Scalars['String']['output'];
  displayScoreType?: Maybe<DisplayScoreType>;
  feedback?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  headerText?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  iqTrait?: Maybe<WrdTraitScoreWithIq>;
  measurementConstructType?: Maybe<MeasurementConstructType>;
  name: Scalars['String']['output'];
  order?: Maybe<Scalars['Int']['output']>;
  score: ScoreModel;
  softSkillContentHeaderType?: Maybe<SoftSkillContentHeaderType>;
  softSkillImageType?: Maybe<SoftSkillImageType>;
  softSkillType?: Maybe<SoftSkillType>;
  subId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  weight?: Maybe<Scalars['Float']['output']>;
  widgetType: WidgetType;
};

export type WrdStageCandidateSoftSkillScoreWithContent = WidgetRenderData & {
  __typename?: 'WrdStageCandidateSoftSkillScoreWithContent';
  barSize?: Maybe<Scalars['Int']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  children?: Maybe<Array<WrdTraitScoreWithContent>>;
  description?: Maybe<Scalars['String']['output']>;
  displayClassification: Scalars['String']['output'];
  displayScoreType?: Maybe<DisplayScoreType>;
  feedback?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  headerText?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  iqTrait?: Maybe<WrdTraitScoreWithIq>;
  measurementConstructType?: Maybe<MeasurementConstructType>;
  name: Scalars['String']['output'];
  order?: Maybe<Scalars['Int']['output']>;
  score: ScoreModel;
  softSkillContentHeaderType?: Maybe<SoftSkillContentHeaderType>;
  softSkillImageType?: Maybe<SoftSkillImageType>;
  softSkillType?: Maybe<SoftSkillType>;
  subId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  weight?: Maybe<Scalars['Float']['output']>;
  widgetType: WidgetType;
};

export type WrdStageCandidateSuccessProfileScoreFinalScores = WidgetRenderData & {
  __typename?: 'WrdStageCandidateSuccessProfileScoreFinalScores';
  barSize?: Maybe<Scalars['Int']['output']>;
  children?: Maybe<Array<WrdSoftSkillScoreChart>>;
  displayClassification: Scalars['String']['output'];
  displayScoreType?: Maybe<DisplayScoreType>;
  highlightedScores?: Maybe<Array<WrdSoftSkillScore>>;
  id: Scalars['Int']['output'];
  manualScores?: Maybe<Array<Scalars['String']['output']>>;
  name: Scalars['String']['output'];
  order?: Maybe<Scalars['Int']['output']>;
  score: ScoreModel;
  subId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  widgetType: WidgetType;
};

export type WrdStageCandidateSuccessProfileScoreSummaryWithContent = WidgetRenderData & {
  __typename?: 'WrdStageCandidateSuccessProfileScoreSummaryWithContent';
  barSize?: Maybe<Scalars['Int']['output']>;
  children?: Maybe<Array<WrdStageCandidateSoftSkillScoreSummaryWithContent>>;
  displayClassification: Scalars['String']['output'];
  displayScoreType?: Maybe<DisplayScoreType>;
  highlightedScores?: Maybe<Array<WrdSoftSkillScore>>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  order?: Maybe<Scalars['Int']['output']>;
  score: ScoreModel;
  subId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  widgetType: WidgetType;
};

export type WrdStageCandidateSuccessProfileScoreWithContent = WidgetRenderData & {
  __typename?: 'WrdStageCandidateSuccessProfileScoreWithContent';
  barSize?: Maybe<Scalars['Int']['output']>;
  children?: Maybe<Array<WrdStageCandidateSoftSkillScoreWithContent>>;
  displayClassification: Scalars['String']['output'];
  displayScoreType?: Maybe<DisplayScoreType>;
  highlightedScores?: Maybe<Array<WrdSoftSkillScore>>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  order?: Maybe<Scalars['Int']['output']>;
  score: ScoreModel;
  subId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  widgetType: WidgetType;
};

export type WrdStatic = WidgetRenderData & {
  __typename?: 'WrdStatic';
  subId?: Maybe<Scalars['String']['output']>;
  widgetType: WidgetType;
};

export type WrdSuccessProfileScore = WidgetRenderData & {
  __typename?: 'WrdSuccessProfileScore';
  barSize?: Maybe<Scalars['Int']['output']>;
  children?: Maybe<Array<WrdSoftSkillScore>>;
  displayClassification: Scalars['String']['output'];
  displayScoreType?: Maybe<DisplayScoreType>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  order?: Maybe<Scalars['Int']['output']>;
  score: ScoreModel;
  subId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  widgetType: WidgetType;
};

export type WrdSuccessProfileScoreChart = WidgetRenderData & {
  __typename?: 'WrdSuccessProfileScoreChart';
  barSize?: Maybe<Scalars['Int']['output']>;
  children?: Maybe<Array<WrdSoftSkillScoreChart>>;
  displayClassification: Scalars['String']['output'];
  displayScoreType?: Maybe<DisplayScoreType>;
  highlightedScores?: Maybe<Array<WrdSoftSkillScore>>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  order?: Maybe<Scalars['Int']['output']>;
  score: ScoreModel;
  subId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  widgetType: WidgetType;
};

export type WrdSuccessProfileScoreFinalScores = WidgetRenderData & {
  __typename?: 'WrdSuccessProfileScoreFinalScores';
  barSize?: Maybe<Scalars['Int']['output']>;
  children?: Maybe<Array<WrdSoftSkillScoreChart>>;
  displayClassification: Scalars['String']['output'];
  displayScoreType?: Maybe<DisplayScoreType>;
  highlightedScores?: Maybe<Array<WrdSoftSkillScore>>;
  id: Scalars['Int']['output'];
  manualScores?: Maybe<Array<Scalars['String']['output']>>;
  name: Scalars['String']['output'];
  order?: Maybe<Scalars['Int']['output']>;
  score: ScoreModel;
  subId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  widgetType: WidgetType;
};

export type WrdSuccessProfileScoreTopBottom = WidgetRenderData & {
  __typename?: 'WrdSuccessProfileScoreTopBottom';
  barSize?: Maybe<Scalars['Int']['output']>;
  children?: Maybe<Array<WrdSoftSkillScoreTopBottom>>;
  displayClassification: Scalars['String']['output'];
  displayScoreType?: Maybe<DisplayScoreType>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  order?: Maybe<Scalars['Int']['output']>;
  score: ScoreModel;
  subId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  widgetType: WidgetType;
};

export type WrdSuccessProfileScoreWithContent = WidgetRenderData & {
  __typename?: 'WrdSuccessProfileScoreWithContent';
  barSize?: Maybe<Scalars['Int']['output']>;
  children?: Maybe<Array<WrdSoftSkillScoreWithContent>>;
  displayClassification: Scalars['String']['output'];
  displayScoreType?: Maybe<DisplayScoreType>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  order?: Maybe<Scalars['Int']['output']>;
  score: ScoreModel;
  subId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  widgetType: WidgetType;
};

export type WrdTestSummary = WidgetRenderData & {
  __typename?: 'WrdTestSummary';
  name: Scalars['String']['output'];
  subId?: Maybe<Scalars['String']['output']>;
  summary: Scalars['String']['output'];
  time: Scalars['Int']['output'];
  type: TestType;
  widgetType: WidgetType;
};

export type WrdTraitScore = WidgetRenderData & {
  __typename?: 'WrdTraitScore';
  barSize?: Maybe<Scalars['Int']['output']>;
  children?: Maybe<Array<WrdContextualScore>>;
  displayClassification: Scalars['String']['output'];
  displayScoreType?: Maybe<DisplayScoreType>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  order?: Maybe<Scalars['Int']['output']>;
  score: ScoreModel;
  subId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  widgetType: WidgetType;
};

export type WrdTraitScoreWithContent = WidgetRenderData & {
  __typename?: 'WrdTraitScoreWithContent';
  barSize?: Maybe<Scalars['Int']['output']>;
  children?: Maybe<Array<WrdContextualScore>>;
  content?: Maybe<Scalars['String']['output']>;
  displayClassification: Scalars['String']['output'];
  displayScoreType?: Maybe<DisplayScoreType>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  order?: Maybe<Scalars['Int']['output']>;
  positionType?: Maybe<ContextualScorePositionType>;
  score: ScoreModel;
  subId?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  widgetType: WidgetType;
};

export type WrdTraitScoreWithIq = WidgetRenderData & {
  __typename?: 'WrdTraitScoreWithIq';
  barSize?: Maybe<Scalars['Int']['output']>;
  children?: Maybe<Array<WrdContextualScore>>;
  content?: Maybe<Scalars['String']['output']>;
  displayClassification: Scalars['String']['output'];
  displayScoreType?: Maybe<DisplayScoreType>;
  id: Scalars['Int']['output'];
  iqFeedback?: Maybe<Scalars['String']['output']>;
  iqFooterType: IqFooterType;
  iqHints?: Maybe<Array<Scalars['String']['output']>>;
  iqMainQuestion?: Maybe<Scalars['String']['output']>;
  iqReasonForQuestion?: Maybe<Scalars['String']['output']>;
  iqSubQuestions?: Maybe<Array<Scalars['String']['output']>>;
  iqSummary?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  order?: Maybe<Scalars['Int']['output']>;
  positionType?: Maybe<ContextualScorePositionType>;
  score: ScoreModel;
  subId?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  widgetType: WidgetType;
};

export type WrdWidgetExample = WidgetRenderData & {
  __typename?: 'WrdWidgetExample';
  name: Scalars['String']['output'];
  subId?: Maybe<Scalars['String']['output']>;
  summary: Scalars['String']['output'];
  testType: TestType;
  time: Scalars['Int']['output'];
  widgetType: WidgetType;
};

export type WrdWidgetTesting = WidgetRenderData & {
  __typename?: 'WrdWidgetTesting';
  subId?: Maybe<Scalars['String']['output']>;
  test: Scalars['String']['output'];
  widgetType: WidgetType;
};

export type AllowedResultActions = CmAllowedResultActionsHiringModel | CmAllowedResultActionsTalentReviewModel;

export type AuthenticateMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  clientType?: InputMaybe<ClientType>;
  mfaCookie?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type AuthenticateMutation = { __typename?: 'Mutation', authenticate: { __typename?: 'AuthenticationResult', accessToken: string, refreshToken: string } };


export const AuthenticateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Authenticate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"clientType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ClientType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mfaCookie"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authenticate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"mfaCookie"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mfaCookie"}}},{"kind":"Argument","name":{"kind":"Name","value":"clientType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"clientType"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]}}]} as unknown as DocumentNode<AuthenticateMutation, AuthenticateMutationVariables>;
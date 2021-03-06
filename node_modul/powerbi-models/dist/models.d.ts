/*! powerbi-models v1.3.3 | (c) 2016 Microsoft Corporation MIT */
export declare const Validators: any;
export declare type KeyValuePair = {
    key: string;
    value: string;
};
export interface ITechnicalDetails {
    requestId?: string;
    errorInfo?: KeyValuePair[];
}
export interface IError {
    message: string;
    detailedMessage?: string;
    errorCode?: string;
    level?: TraceType;
    technicalDetails?: ITechnicalDetails;
}
export declare enum TraceType {
    Information = 0,
    Verbose = 1,
    Warning = 2,
    Error = 3,
    ExpectedError = 4,
    UnexpectedError = 5,
    Fatal = 6
}
export declare enum PageSizeType {
    Widescreen = 0,
    Standard = 1,
    Cortana = 2,
    Letter = 3,
    Custom = 4
}
export declare enum DisplayOption {
    FitToPage = 0,
    FitToWidth = 1,
    ActualSize = 2
}
export declare enum BackgroundType {
    Default = 0,
    Transparent = 1
}
export interface IPageSize {
    type: PageSizeType;
}
export interface ICustomPageSize extends IPageSize {
    width?: number;
    height?: number;
}
export declare type PagesLayout = {
    [key: string]: IPageLayout;
};
export declare type VisualsLayout = {
    [key: string]: IVisualLayout;
};
export interface IPageLayout {
    defaultLayout?: IVisualLayout;
    visualsLayout: VisualsLayout;
}
export declare enum VisualContainerDisplayMode {
    Visible = 0,
    Hidden = 1
}
export declare enum LayoutType {
    Master = 0,
    Custom = 1,
    MobilePortrait = 2,
    MobileLandscape = 3
}
export declare enum HyperlinkClickBehavior {
    Navigate = 0,
    NavigateAndRaiseEvent = 1,
    RaiseEvent = 2
}
export interface IVisualLayout {
    x?: number;
    y?: number;
    z?: number;
    width?: number;
    height?: number;
    displayState?: IVisualContainerDisplayState;
}
export interface IVisualContainerDisplayState {
    mode: VisualContainerDisplayMode;
}
export interface ICustomLayout {
    pageSize?: IPageSize;
    displayOption?: DisplayOption;
    pagesLayout?: PagesLayout;
}
export interface IReport {
    id: string;
    displayName: string;
}
export declare enum SectionVisibility {
    AlwaysVisible = 0,
    HiddenInViewMode = 1
}
export interface IPage {
    name: string;
    displayName: string;
    isActive?: boolean;
    visibility?: SectionVisibility;
    defaultSize?: ICustomPageSize;
    defaultDisplayOption?: DisplayOption;
}
export interface IVisual {
    name: string;
    title: string;
    type: string;
    layout?: IVisualLayout;
}
export interface IDatasetBinding {
    datasetId: string;
}
export declare enum Permissions {
    Read = 0,
    ReadWrite = 1,
    Copy = 2,
    Create = 4,
    All = 7
}
export declare enum ViewMode {
    View = 0,
    Edit = 1
}
export declare enum TokenType {
    Aad = 0,
    Embed = 1
}
export declare enum ContrastMode {
    None = 0,
    HighContrast1 = 1,
    HighContrast2 = 2,
    HighContrastBlack = 3,
    HighContrastWhite = 4
}
export declare type PageView = "fitToWidth" | "oneColumn" | "actualSize";
export interface IQnaVisualRenderedEvent {
    question: string;
    normalizedQuestion?: string;
}
export interface IVisualCustomCommandEvent {
    visualName: string;
    command: string;
}
export interface ISelection {
    visual: IVisual;
    page: IPage;
    report: IReport;
    dataPoints: IIdentityValue<IEqualsDataReference>[];
    regions: IIdentityValue<IEqualsDataReference | IBetweenDataReference>[];
    filters: IFilter[];
}
export interface ISwipeEvent {
    currentPosition: IPosition;
    startPosition: IPosition;
}
export interface IPosition {
    x: number;
    y: number;
}
export declare type Extensions = IExtension[];
export interface IExtension {
    command?: ICommandExtension;
}
export interface IExtensionItem {
    name: string;
    extend: IExtensionPoints;
}
export declare type CommandExtensionSelector = IVisualSelector | IVisualTypeSelector;
export interface ICommandExtension extends IExtensionItem {
    title: string;
    icon?: string;
    selector?: CommandExtensionSelector;
}
export interface IExtensionPoints {
    visualContextMenu?: IMenuExtension;
    visualOptionsMenu?: IMenuExtension;
}
export interface IExtensionPoint {
}
export interface IMenuExtension extends IExtensionPoint {
    title?: string;
    icon?: string;
    menuLocation?: MenuLocation;
}
export declare enum MenuLocation {
    Bottom = 0,
    Top = 1
}
export interface IBaseTarget {
    table: string;
    $schema?: string;
}
export interface IColumnTarget extends IBaseTarget {
    column: string;
}
export interface IKeyColumnsTarget extends IColumnTarget {
    keys: string[];
}
export interface IKeyHierarchyTarget extends IHierarchyLevelTarget {
    keys: string[];
}
export interface IHierarchyLevelTarget extends IBaseTarget {
    hierarchy: string;
    hierarchyLevel: string;
}
export interface INotSupportedTarget extends IBaseTarget {
}
export interface IMeasureTarget extends IBaseTarget {
    measure: string;
}
export interface IAggregationTarget {
    aggregationFunction: string;
}
export interface IColumnAggrTarget extends IColumnTarget, IAggregationTarget {
}
export interface IHierarchyLevelAggrTarget extends IHierarchyLevelTarget, IAggregationTarget {
}
export declare type IKeyTarget = (IKeyColumnsTarget | IKeyHierarchyTarget);
export declare type ITarget = (IColumnTarget | IHierarchyLevelTarget | IMeasureTarget | INotSupportedTarget | IColumnAggrTarget | IHierarchyLevelAggrTarget);
export interface IBaseFilterTarget extends IBaseTarget {
}
export interface IFilterColumnTarget extends IBaseFilterTarget, IColumnTarget {
}
export interface IFilterKeyColumnsTarget extends IFilterColumnTarget, IKeyColumnsTarget {
}
export interface IFilterHierarchyTarget extends IBaseFilterTarget, IHierarchyLevelTarget {
}
export interface IFilterKeyHierarchyTarget extends IFilterHierarchyTarget, IKeyHierarchyTarget {
}
export interface INotSupportedFilterTarget extends IBaseFilterTarget, INotSupportedTarget {
}
export interface IFilterAggregationTarget extends IBaseFilterTarget, IAggregationTarget {
}
export interface IFilterMeasureTarget extends IBaseFilterTarget, IMeasureTarget {
}
export interface IFilterColumnAggrTarget extends IFilterColumnTarget, IFilterAggregationTarget {
}
export interface IFilterHierarchyAggrTarget extends IFilterHierarchyTarget, IFilterAggregationTarget {
}
export declare type IFilterKeyTarget = (IFilterKeyColumnsTarget | IFilterKeyHierarchyTarget);
export declare type IFilterTarget = (IFilterColumnTarget | IFilterHierarchyTarget | IFilterMeasureTarget | INotSupportedFilterTarget | IFilterColumnAggrTarget | IFilterHierarchyAggrTarget);
export declare type ITupleFilterTarget = IFilterTarget[];
export declare type IFilterGeneralTarget = IFilterTarget | IFilterKeyTarget | ITupleFilterTarget;
export interface IFilter {
    $schema: string;
    target: IFilterGeneralTarget;
    filterType: FilterType;
    displaySettings?: IFilterDisplaySettings;
}
export interface IFilterDisplaySettings {
    isLockedInViewMode?: boolean;
    isHiddenInViewMode?: boolean;
    displayName?: string;
}
export interface INotSupportedFilter extends IFilter {
    message: string;
    notSupportedTypeName: string;
}
export interface IIncludeExcludeFilter extends IFilter {
    values: (string | number | boolean)[];
    isExclude: boolean;
}
export interface ITopNFilter extends IFilter {
    operator: TopNFilterOperators;
    itemCount: number;
    orderBy: ITarget;
}
export interface IRelativeDateFilter extends IFilter {
    operator: RelativeDateOperators;
    timeUnitsCount: number;
    timeUnitType: RelativeDateFilterTimeUnit;
    includeToday: boolean;
}
export interface IBasicFilter extends IFilter {
    operator: BasicFilterOperators;
    values: (string | number | boolean)[];
    requireSingleSelection?: boolean;
}
export interface IBasicFilterWithKeys extends IBasicFilter {
    target: IFilterKeyTarget;
    keyValues: (string | number | boolean)[][];
}
export declare type PrimitiveValueType = (string | number | boolean);
export interface ITupleElementValue {
    value: PrimitiveValueType;
    keyValues?: PrimitiveValueType[];
}
export declare type TupleValueType = ITupleElementValue[];
export declare type TupleFilterOperators = "In";
export interface ITupleFilter extends IFilter {
    $schema: string;
    filterType: FilterType;
    operator: TupleFilterOperators;
    target: ITupleFilterTarget;
    values: TupleValueType[];
}
export declare enum FiltersLevel {
    Report = 0,
    Page = 1,
    Visual = 2
}
export declare type ReportLevelFilters = IBasicFilter | IBasicFilterWithKeys | IAdvancedFilter | IRelativeDateFilter | ITupleFilter;
export declare type PageLevelFilters = IBasicFilter | IBasicFilterWithKeys | IAdvancedFilter | IRelativeDateFilter | ITupleFilter;
export declare type VisualLevelFilters = IBasicFilter | IBasicFilterWithKeys | IAdvancedFilter | IRelativeDateFilter | ITopNFilter | IIncludeExcludeFilter;
export declare type ISlicerFilter = IBasicFilter | IBasicFilterWithKeys | IAdvancedFilter | IRelativeDateFilter;
export declare type TopNFilterOperators = "Top" | "Bottom";
export declare type BasicFilterOperators = "In" | "NotIn" | "All";
export declare type AdvancedFilterLogicalOperators = "And" | "Or";
export declare type AdvancedFilterConditionOperators = "None" | "LessThan" | "LessThanOrEqual" | "GreaterThan" | "GreaterThanOrEqual" | "Contains" | "DoesNotContain" | "StartsWith" | "DoesNotStartWith" | "Is" | "IsNot" | "IsBlank" | "IsNotBlank";
export interface IAdvancedFilterCondition {
    value?: (string | number | boolean | Date);
    operator: AdvancedFilterConditionOperators;
}
export interface IAdvancedFilter extends IFilter {
    logicalOperator: AdvancedFilterLogicalOperators;
    conditions: IAdvancedFilterCondition[];
}
export declare enum FilterType {
    Advanced = 0,
    Basic = 1,
    Unknown = 2,
    IncludeExclude = 3,
    RelativeDate = 4,
    TopN = 5,
    Tuple = 6
}
export declare enum RelativeDateFilterTimeUnit {
    Days = 0,
    Weeks = 1,
    CalendarWeeks = 2,
    Months = 3,
    CalendarMonths = 4,
    Years = 5,
    CalendarYears = 6
}
export declare enum RelativeDateOperators {
    InLast = 0,
    InThis = 1,
    InNext = 2
}
export declare abstract class Filter {
    static schema: string;
    protected static schemaUrl: string;
    target: IFilterGeneralTarget;
    filterType: FilterType;
    displaySettings: IFilterDisplaySettings;
    protected schemaUrl: string;
    constructor(target: IFilterGeneralTarget, filterType: FilterType);
    toJSON(): IFilter;
}
export declare class NotSupportedFilter extends Filter {
    static schemaUrl: string;
    message: string;
    notSupportedTypeName: string;
    constructor(target: IFilterTarget, message: string, notSupportedTypeName: string);
    toJSON(): INotSupportedFilter;
}
export declare class IncludeExcludeFilter extends Filter {
    static schemaUrl: string;
    values: (string | number | boolean)[];
    isExclude: boolean;
    constructor(target: IFilterTarget, isExclude: boolean, values: (string | number | boolean)[]);
    toJSON(): IIncludeExcludeFilter;
}
export declare class TopNFilter extends Filter {
    static schemaUrl: string;
    operator: TopNFilterOperators;
    orderBy: ITarget;
    itemCount: number;
    constructor(target: IFilterTarget, operator: TopNFilterOperators, itemCount: number, orderBy: ITarget);
    toJSON(): ITopNFilter;
}
export declare class RelativeDateFilter extends Filter {
    static schemaUrl: string;
    operator: RelativeDateOperators;
    timeUnitsCount: number;
    timeUnitType: RelativeDateFilterTimeUnit;
    includeToday: boolean;
    constructor(target: IFilterTarget, operator: RelativeDateOperators, timeUnitsCount: number, timeUnitType: RelativeDateFilterTimeUnit, includeToday: boolean);
    toJSON(): IRelativeDateFilter;
}
export declare class BasicFilter extends Filter {
    static schemaUrl: string;
    operator: BasicFilterOperators;
    values: (string | number | boolean)[];
    keyValues: (string | number | boolean)[][];
    requireSingleSelection: boolean;
    constructor(target: IFilterTarget, operator: BasicFilterOperators, ...values: ((string | number | boolean) | (string | number | boolean)[])[]);
    toJSON(): IBasicFilter;
}
export declare class BasicFilterWithKeys extends BasicFilter {
    keyValues: (string | number | boolean)[][];
    target: IFilterKeyTarget;
    constructor(target: IFilterKeyTarget, operator: BasicFilterOperators, values: ((string | number | boolean) | (string | number | boolean)[]), keyValues: (string | number | boolean)[][]);
    toJSON(): IBasicFilter;
}
export declare class TupleFilter extends Filter {
    static schemaUrl: string;
    operator: TupleFilterOperators;
    target: ITupleFilterTarget;
    values: TupleValueType[];
    constructor(target: ITupleFilterTarget, operator: TupleFilterOperators, values: TupleValueType[]);
    toJSON(): ITupleFilter;
}
export declare class AdvancedFilter extends Filter {
    static schemaUrl: string;
    logicalOperator: AdvancedFilterLogicalOperators;
    conditions: IAdvancedFilterCondition[];
    constructor(target: IFilterTarget, logicalOperator: AdvancedFilterLogicalOperators, ...conditions: (IAdvancedFilterCondition | IAdvancedFilterCondition[])[]);
    toJSON(): IAdvancedFilter;
}
export interface IDataReference {
    target: IFilterTarget;
}
export interface IEqualsDataReference extends IDataReference {
    equals: string | boolean | number | Date;
}
export interface IBetweenDataReference extends IDataReference {
    between: (string | boolean | number)[];
}
export interface IValueDataReference extends IDataReference {
    value: string | boolean | number | Date;
    formattedValue: string;
}
export interface IIdentityValue<T extends IDataReference> {
    identity: T[];
    values: IValueDataReference[];
}
export declare function isFilterKeyColumnsTarget(target: IFilterTarget): boolean;
export declare function isBasicFilterWithKeys(filter: IFilter): boolean;
export declare function getFilterType(filter: IFilter): FilterType;
export declare function isMeasure(arg: any): arg is IMeasureTarget;
export declare function isColumn(arg: any): arg is IColumnTarget;
export declare function isHierarchyLevel(arg: any): arg is IHierarchyLevelTarget;
export declare function isHierarchyLevelAggr(arg: any): arg is IHierarchyLevelAggrTarget;
export declare function isColumnAggr(arg: any): arg is IColumnAggrTarget;
export interface IReportLoadConfiguration {
    accessToken: string;
    id: string;
    groupId?: string;
    settings?: ISettings;
    pageName?: string;
    filters?: ReportLevelFilters[];
    slicers?: ISlicer[];
    permissions?: Permissions;
    viewMode?: ViewMode;
    tokenType?: TokenType;
    bookmark?: IApplyBookmarkRequest;
    theme?: IReportTheme;
    embedUrl?: string;
    datasetBinding?: IDatasetBinding;
    contrastMode?: ContrastMode;
}
export interface IReportCreateConfiguration {
    accessToken: string;
    datasetId: string;
    groupId?: string;
    settings?: ISettings;
    tokenType?: TokenType;
    theme?: IReportTheme;
}
export interface IDashboardLoadConfiguration {
    accessToken: string;
    id: string;
    groupId?: string;
    pageView?: PageView;
    tokenType?: TokenType;
    embedUrl?: string;
}
export interface ITileLoadConfiguration {
    accessToken: string;
    id: string;
    dashboardId: string;
    groupId?: string;
    tokenType?: TokenType;
    width?: number;
    height?: number;
}
export interface ISettings {
    background?: BackgroundType;
    bookmarksPaneEnabled?: boolean;
    commands?: ICommandsSettings[];
    customLayout?: ICustomLayout;
    extensions?: Extensions;
    filterPaneEnabled?: boolean;
    hideErrors?: boolean;
    hyperlinkClickBehavior?: HyperlinkClickBehavior;
    layoutType?: LayoutType;
    navContentPaneEnabled?: boolean;
    useCustomSaveAsDialog?: boolean;
    visualSettings?: IVisualSettings;
}
export interface ISaveAsParameters {
    name: string;
}
export interface IPaginatedReportLoadConfiguration {
    accessToken: string;
    id: string;
    groupId?: string;
    settings?: IPaginatedReportSettings;
    tokenType?: TokenType;
}
export interface IPaginatedReportSettings {
    commands?: IPaginatedReportsCommandsSettings;
}
export interface IQnaSettings {
    filterPaneEnabled?: boolean;
    hideErrors?: boolean;
}
export interface ILoadQnaConfiguration {
    accessToken: string;
    datasetIds: string[];
    groupId?: string;
    question?: string;
    viewMode?: QnaMode;
    settings?: IQnaSettings;
    tokenType?: TokenType;
}
export declare enum QnaMode {
    Interactive = 0,
    ResultOnly = 1
}
export declare enum ExportDataType {
    Summarized = 0,
    Underlying = 1
}
export declare enum BookmarksPlayMode {
    Off = 0,
    Presentation = 1
}
export declare const CommonErrorCodes: {
    TokenExpired: string;
    NotFound: string;
    InvalidParameters: string;
    LoadReportFailed: string;
    NotAuthorized: string;
    FailedToLoadModel: string;
};
export declare const TextAlignment: {
    Left: string;
    Center: string;
    Right: string;
};
export declare const LegendPosition: {
    Top: string;
    Bottom: string;
    Right: string;
    Left: string;
    TopCenter: string;
    BottomCenter: string;
    RightCenter: string;
    LeftCenter: string;
};
export interface IQnaInterpretInputData {
    question: string;
    datasetIds?: string[];
}
export interface IReportBookmark {
    name: string;
    displayName: string;
    state?: string;
    children?: IReportBookmark[];
}
export interface IPlayBookmarkRequest {
    playMode: BookmarksPlayMode;
}
export interface IAddBookmarkRequest {
    state?: string;
    displayName?: string;
    apply?: boolean;
}
export declare type IApplyBookmarkRequest = IApplyBookmarkStateRequest | IApplyBookmarkByNameRequest;
export interface IApplyBookmarkStateRequest {
    state: string;
}
export interface IApplyBookmarkByNameRequest {
    name: string;
}
export interface IExportDataRequest {
    rows?: number;
    exportDataType?: ExportDataType;
}
export interface IExportDataResult {
    data: string;
}
export interface ICreateVisualRequest {
    visualType: string;
    layout?: IVisualLayout;
    autoFocus?: boolean;
}
export interface IVisualResponse {
    visual: IVisual;
}
export interface ICreateVisualResponse extends IVisualResponse {
}
export interface ICloneVisualRequest {
    filters?: IFilter[];
    layout?: IVisualLayout;
    autoFocus?: boolean;
}
export interface ICloneVisualResponse extends IVisualResponse {
    visualName: string;
}
export interface ISortByVisualRequest {
    orderBy: ITarget;
    direction: SortDirection;
}
export declare enum SortDirection {
    Ascending = 1,
    Descending = 2
}
export interface ISelector {
    $schema: string;
}
export interface IPageSelector extends ISelector {
    pageName: string;
}
export interface IVisualSelector extends ISelector {
    visualName: string;
}
export interface IVisualTypeSelector extends ISelector {
    visualType: string;
}
export interface ISlicerTargetSelector extends ISelector {
    target: SlicerTarget;
}
export declare abstract class Selector implements ISelector {
    $schema: string;
    constructor(schema: string);
    toJSON(): ISelector;
}
export declare class PageSelector extends Selector implements IPageSelector {
    static schemaUrl: string;
    pageName: string;
    constructor(pageName: string);
    toJSON(): IPageSelector;
}
export declare class VisualSelector extends Selector implements IVisualSelector {
    static schemaUrl: string;
    visualName: string;
    constructor(visualName: string);
    toJSON(): IVisualSelector;
}
export declare class VisualTypeSelector extends Selector implements IVisualTypeSelector {
    static schemaUrl: string;
    visualType: string;
    constructor(visualType: string);
    toJSON(): IVisualTypeSelector;
}
export declare class SlicerTargetSelector extends Selector implements ISlicerTargetSelector {
    static schemaUrl: string;
    target: SlicerTarget;
    constructor(target: SlicerTarget);
    toJSON(): ISlicerTargetSelector;
}
export declare type SlicerTarget = IFilterTarget | IFilterKeyTarget;
export declare type SlicerSelector = IVisualSelector | ISlicerTargetSelector;
export interface ISlicer {
    selector: SlicerSelector;
    state: ISlicerState;
}
export interface ISlicerState {
    filters: ISlicerFilter[];
    targets?: SlicerTarget[];
}
export declare type VisualHeaderSelector = IVisualSelector | IVisualTypeSelector;
export declare type VisualsHeaderSelector = VisualHeaderSelector;
export interface IVisualHeaderSettings {
    visible?: boolean;
}
export interface IVisualHeader {
    settings: IVisualHeaderSettings;
    selector?: VisualHeaderSelector;
}
export interface IVisualSettings {
    visualHeaders?: IVisualHeader[];
}
export interface IReportTheme {
}
export interface ICustomTheme extends IReportTheme {
    themeJson: any;
}
export declare type VisualCommandSelector = IVisualSelector | IVisualTypeSelector;
export declare enum CommandDisplayOption {
    Enabled = 0,
    Disabled = 1,
    Hidden = 2
}
export interface ICommandSettings {
    displayOption: CommandDisplayOption;
    selector?: VisualCommandSelector;
}
export interface ICommandsSettings {
    copy?: ICommandSettings;
    drill?: ICommandSettings;
    drillthrough?: ICommandSettings;
    expandCollapse?: ICommandSettings;
    exportData?: ICommandSettings;
    includeExclude?: ICommandSettings;
    removeVisual?: ICommandSettings;
    search?: ICommandSettings;
    seeData?: ICommandSettings;
    sort?: ICommandSettings;
    spotlight?: ICommandSettings;
}
export interface IPaginatedReportsCommandSettings {
    enabled: boolean;
}
export interface IParametersPanelCommandSettings extends IPaginatedReportsCommandSettings {
    expanded: boolean;
}
export interface IPaginatedReportsCommandsSettings {
    parameterPanel?: IParametersPanelCommandSettings;
}
export declare enum VisualDataRoleKind {
    Grouping = 0,
    Measure = 1,
    GroupingOrMeasure = 2
}
export declare enum VisualDataRoleKindPreference {
    Measure = 0,
    Grouping = 1
}
export interface IVisualDataRole {
    name: string;
    kind: VisualDataRoleKind;
    kindPreference?: VisualDataRoleKindPreference;
    displayName?: string;
    description?: string;
}
export interface IVisualCapabilities {
    dataRoles?: IVisualDataRole[];
}
export interface IVisualPropertySelector {
    objectName: string;
    propertyName: string;
}
export interface IVisualPropertyValue {
    schema?: string;
    value: any;
}
export interface IDefaultProperty {
}
export interface IThemeColorProperty {
    id: number;
    shade: number;
}
export declare function validateVisualSelector(input: any): IError[];
export declare function validateSlicer(input: any): IError[];
export declare function validateSlicerState(input: any): IError[];
export declare function validatePlayBookmarkRequest(input: any): IError[];
export declare function validateAddBookmarkRequest(input: any): IError[];
export declare function validateApplyBookmarkByNameRequest(input: any): IError[];
export declare function validateApplyBookmarkStateRequest(input: any): IError[];
export declare function validateSettings(input: any): IError[];
export declare function validateCustomPageSize(input: any): IError[];
export declare function validateExtension(input: any): IError[];
export declare function validateReportLoad(input: any): IError[];
export declare function validateCreateReport(input: any): IError[];
export declare function validateDashboardLoad(input: any): IError[];
export declare function validateTileLoad(input: any): IError[];
export declare function validatePage(input: any): IError[];
export declare function validateFilter(input: any): IError[];
export declare function validateSaveAsParameters(input: any): IError[];
export declare function validateLoadQnaConfiguration(input: any): IError[];
export declare function validateQnaInterpretInputData(input: any): IError[];
export declare function validateExportDataRequest(input: any): IError[];
export declare function validateVisualHeader(input: any): IError[];
export declare function validateVisualSettings(input: any): IError[];
export declare function validateCommandsSettings(input: any): IError[];
export declare function validateCustomTheme(input: any): IError[];

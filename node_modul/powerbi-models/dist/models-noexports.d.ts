/*! powerbi-models v1.3.3 | (c) 2016 Microsoft Corporation MIT */
declare const Validators: any;
declare type KeyValuePair = {
    key: string;
    value: string;
};
interface ITechnicalDetails {
    requestId?: string;
    errorInfo?: KeyValuePair[];
}
interface IError {
    message: string;
    detailedMessage?: string;
    errorCode?: string;
    level?: TraceType;
    technicalDetails?: ITechnicalDetails;
}
declare enum TraceType {
    Information = 0,
    Verbose = 1,
    Warning = 2,
    Error = 3,
    ExpectedError = 4,
    UnexpectedError = 5,
    Fatal = 6
}
declare enum PageSizeType {
    Widescreen = 0,
    Standard = 1,
    Cortana = 2,
    Letter = 3,
    Custom = 4
}
declare enum DisplayOption {
    FitToPage = 0,
    FitToWidth = 1,
    ActualSize = 2
}
declare enum BackgroundType {
    Default = 0,
    Transparent = 1
}
interface IPageSize {
    type: PageSizeType;
}
interface ICustomPageSize extends IPageSize {
    width?: number;
    height?: number;
}
declare type PagesLayout = {
    [key: string]: IPageLayout;
};
declare type VisualsLayout = {
    [key: string]: IVisualLayout;
};
interface IPageLayout {
    defaultLayout?: IVisualLayout;
    visualsLayout: VisualsLayout;
}
declare enum VisualContainerDisplayMode {
    Visible = 0,
    Hidden = 1
}
declare enum LayoutType {
    Master = 0,
    Custom = 1,
    MobilePortrait = 2,
    MobileLandscape = 3
}
declare enum HyperlinkClickBehavior {
    Navigate = 0,
    NavigateAndRaiseEvent = 1,
    RaiseEvent = 2
}
interface IVisualLayout {
    x?: number;
    y?: number;
    z?: number;
    width?: number;
    height?: number;
    displayState?: IVisualContainerDisplayState;
}
interface IVisualContainerDisplayState {
    mode: VisualContainerDisplayMode;
}
interface ICustomLayout {
    pageSize?: IPageSize;
    displayOption?: DisplayOption;
    pagesLayout?: PagesLayout;
}
interface IReport {
    id: string;
    displayName: string;
}
declare enum SectionVisibility {
    AlwaysVisible = 0,
    HiddenInViewMode = 1
}
interface IPage {
    name: string;
    displayName: string;
    isActive?: boolean;
    visibility?: SectionVisibility;
    defaultSize?: ICustomPageSize;
    defaultDisplayOption?: DisplayOption;
}
interface IVisual {
    name: string;
    title: string;
    type: string;
    layout?: IVisualLayout;
}
interface IDatasetBinding {
    datasetId: string;
}
declare enum Permissions {
    Read = 0,
    ReadWrite = 1,
    Copy = 2,
    Create = 4,
    All = 7
}
declare enum ViewMode {
    View = 0,
    Edit = 1
}
declare enum TokenType {
    Aad = 0,
    Embed = 1
}
declare enum ContrastMode {
    None = 0,
    HighContrast1 = 1,
    HighContrast2 = 2,
    HighContrastBlack = 3,
    HighContrastWhite = 4
}
declare type PageView = "fitToWidth" | "oneColumn" | "actualSize";
interface IQnaVisualRenderedEvent {
    question: string;
    normalizedQuestion?: string;
}
interface IVisualCustomCommandEvent {
    visualName: string;
    command: string;
}
interface ISelection {
    visual: IVisual;
    page: IPage;
    report: IReport;
    dataPoints: IIdentityValue<IEqualsDataReference>[];
    regions: IIdentityValue<IEqualsDataReference | IBetweenDataReference>[];
    filters: IFilter[];
}
interface ISwipeEvent {
    currentPosition: IPosition;
    startPosition: IPosition;
}
interface IPosition {
    x: number;
    y: number;
}
declare type Extensions = IExtension[];
interface IExtension {
    command?: ICommandExtension;
}
interface IExtensionItem {
    name: string;
    extend: IExtensionPoints;
}
declare type CommandExtensionSelector = IVisualSelector | IVisualTypeSelector;
interface ICommandExtension extends IExtensionItem {
    title: string;
    icon?: string;
    selector?: CommandExtensionSelector;
}
interface IExtensionPoints {
    visualContextMenu?: IMenuExtension;
    visualOptionsMenu?: IMenuExtension;
}
interface IExtensionPoint {
}
interface IMenuExtension extends IExtensionPoint {
    title?: string;
    icon?: string;
    menuLocation?: MenuLocation;
}
declare enum MenuLocation {
    Bottom = 0,
    Top = 1
}
interface IBaseTarget {
    table: string;
    $schema?: string;
}
interface IColumnTarget extends IBaseTarget {
    column: string;
}
interface IKeyColumnsTarget extends IColumnTarget {
    keys: string[];
}
interface IKeyHierarchyTarget extends IHierarchyLevelTarget {
    keys: string[];
}
interface IHierarchyLevelTarget extends IBaseTarget {
    hierarchy: string;
    hierarchyLevel: string;
}
interface INotSupportedTarget extends IBaseTarget {
}
interface IMeasureTarget extends IBaseTarget {
    measure: string;
}
interface IAggregationTarget {
    aggregationFunction: string;
}
interface IColumnAggrTarget extends IColumnTarget, IAggregationTarget {
}
interface IHierarchyLevelAggrTarget extends IHierarchyLevelTarget, IAggregationTarget {
}
declare type IKeyTarget = (IKeyColumnsTarget | IKeyHierarchyTarget);
declare type ITarget = (IColumnTarget | IHierarchyLevelTarget | IMeasureTarget | INotSupportedTarget | IColumnAggrTarget | IHierarchyLevelAggrTarget);
interface IBaseFilterTarget extends IBaseTarget {
}
interface IFilterColumnTarget extends IBaseFilterTarget, IColumnTarget {
}
interface IFilterKeyColumnsTarget extends IFilterColumnTarget, IKeyColumnsTarget {
}
interface IFilterHierarchyTarget extends IBaseFilterTarget, IHierarchyLevelTarget {
}
interface IFilterKeyHierarchyTarget extends IFilterHierarchyTarget, IKeyHierarchyTarget {
}
interface INotSupportedFilterTarget extends IBaseFilterTarget, INotSupportedTarget {
}
interface IFilterAggregationTarget extends IBaseFilterTarget, IAggregationTarget {
}
interface IFilterMeasureTarget extends IBaseFilterTarget, IMeasureTarget {
}
interface IFilterColumnAggrTarget extends IFilterColumnTarget, IFilterAggregationTarget {
}
interface IFilterHierarchyAggrTarget extends IFilterHierarchyTarget, IFilterAggregationTarget {
}
declare type IFilterKeyTarget = (IFilterKeyColumnsTarget | IFilterKeyHierarchyTarget);
declare type IFilterTarget = (IFilterColumnTarget | IFilterHierarchyTarget | IFilterMeasureTarget | INotSupportedFilterTarget | IFilterColumnAggrTarget | IFilterHierarchyAggrTarget);
declare type ITupleFilterTarget = IFilterTarget[];
declare type IFilterGeneralTarget = IFilterTarget | IFilterKeyTarget | ITupleFilterTarget;
interface IFilter {
    $schema: string;
    target: IFilterGeneralTarget;
    filterType: FilterType;
    displaySettings?: IFilterDisplaySettings;
}
interface IFilterDisplaySettings {
    isLockedInViewMode?: boolean;
    isHiddenInViewMode?: boolean;
    displayName?: string;
}
interface INotSupportedFilter extends IFilter {
    message: string;
    notSupportedTypeName: string;
}
interface IIncludeExcludeFilter extends IFilter {
    values: (string | number | boolean)[];
    isExclude: boolean;
}
interface ITopNFilter extends IFilter {
    operator: TopNFilterOperators;
    itemCount: number;
    orderBy: ITarget;
}
interface IRelativeDateFilter extends IFilter {
    operator: RelativeDateOperators;
    timeUnitsCount: number;
    timeUnitType: RelativeDateFilterTimeUnit;
    includeToday: boolean;
}
interface IBasicFilter extends IFilter {
    operator: BasicFilterOperators;
    values: (string | number | boolean)[];
    requireSingleSelection?: boolean;
}
interface IBasicFilterWithKeys extends IBasicFilter {
    target: IFilterKeyTarget;
    keyValues: (string | number | boolean)[][];
}
declare type PrimitiveValueType = (string | number | boolean);
interface ITupleElementValue {
    value: PrimitiveValueType;
    keyValues?: PrimitiveValueType[];
}
declare type TupleValueType = ITupleElementValue[];
declare type TupleFilterOperators = "In";
interface ITupleFilter extends IFilter {
    $schema: string;
    filterType: FilterType;
    operator: TupleFilterOperators;
    target: ITupleFilterTarget;
    values: TupleValueType[];
}
declare enum FiltersLevel {
    Report = 0,
    Page = 1,
    Visual = 2
}
declare type ReportLevelFilters = IBasicFilter | IBasicFilterWithKeys | IAdvancedFilter | IRelativeDateFilter | ITupleFilter;
declare type PageLevelFilters = IBasicFilter | IBasicFilterWithKeys | IAdvancedFilter | IRelativeDateFilter | ITupleFilter;
declare type VisualLevelFilters = IBasicFilter | IBasicFilterWithKeys | IAdvancedFilter | IRelativeDateFilter | ITopNFilter | IIncludeExcludeFilter;
declare type ISlicerFilter = IBasicFilter | IBasicFilterWithKeys | IAdvancedFilter | IRelativeDateFilter;
declare type TopNFilterOperators = "Top" | "Bottom";
declare type BasicFilterOperators = "In" | "NotIn" | "All";
declare type AdvancedFilterLogicalOperators = "And" | "Or";
declare type AdvancedFilterConditionOperators = "None" | "LessThan" | "LessThanOrEqual" | "GreaterThan" | "GreaterThanOrEqual" | "Contains" | "DoesNotContain" | "StartsWith" | "DoesNotStartWith" | "Is" | "IsNot" | "IsBlank" | "IsNotBlank";
interface IAdvancedFilterCondition {
    value?: (string | number | boolean | Date);
    operator: AdvancedFilterConditionOperators;
}
interface IAdvancedFilter extends IFilter {
    logicalOperator: AdvancedFilterLogicalOperators;
    conditions: IAdvancedFilterCondition[];
}
declare enum FilterType {
    Advanced = 0,
    Basic = 1,
    Unknown = 2,
    IncludeExclude = 3,
    RelativeDate = 4,
    TopN = 5,
    Tuple = 6
}
declare enum RelativeDateFilterTimeUnit {
    Days = 0,
    Weeks = 1,
    CalendarWeeks = 2,
    Months = 3,
    CalendarMonths = 4,
    Years = 5,
    CalendarYears = 6
}
declare enum RelativeDateOperators {
    InLast = 0,
    InThis = 1,
    InNext = 2
}
declare abstract class Filter {
    static schema: string;
    protected static schemaUrl: string;
    target: IFilterGeneralTarget;
    filterType: FilterType;
    displaySettings: IFilterDisplaySettings;
    protected schemaUrl: string;
    constructor(target: IFilterGeneralTarget, filterType: FilterType);
    toJSON(): IFilter;
}
declare class NotSupportedFilter extends Filter {
    static schemaUrl: string;
    message: string;
    notSupportedTypeName: string;
    constructor(target: IFilterTarget, message: string, notSupportedTypeName: string);
    toJSON(): INotSupportedFilter;
}
declare class IncludeExcludeFilter extends Filter {
    static schemaUrl: string;
    values: (string | number | boolean)[];
    isExclude: boolean;
    constructor(target: IFilterTarget, isExclude: boolean, values: (string | number | boolean)[]);
    toJSON(): IIncludeExcludeFilter;
}
declare class TopNFilter extends Filter {
    static schemaUrl: string;
    operator: TopNFilterOperators;
    orderBy: ITarget;
    itemCount: number;
    constructor(target: IFilterTarget, operator: TopNFilterOperators, itemCount: number, orderBy: ITarget);
    toJSON(): ITopNFilter;
}
declare class RelativeDateFilter extends Filter {
    static schemaUrl: string;
    operator: RelativeDateOperators;
    timeUnitsCount: number;
    timeUnitType: RelativeDateFilterTimeUnit;
    includeToday: boolean;
    constructor(target: IFilterTarget, operator: RelativeDateOperators, timeUnitsCount: number, timeUnitType: RelativeDateFilterTimeUnit, includeToday: boolean);
    toJSON(): IRelativeDateFilter;
}
declare class BasicFilter extends Filter {
    static schemaUrl: string;
    operator: BasicFilterOperators;
    values: (string | number | boolean)[];
    keyValues: (string | number | boolean)[][];
    requireSingleSelection: boolean;
    constructor(target: IFilterTarget, operator: BasicFilterOperators, ...values: ((string | number | boolean) | (string | number | boolean)[])[]);
    toJSON(): IBasicFilter;
}
declare class BasicFilterWithKeys extends BasicFilter {
    keyValues: (string | number | boolean)[][];
    target: IFilterKeyTarget;
    constructor(target: IFilterKeyTarget, operator: BasicFilterOperators, values: ((string | number | boolean) | (string | number | boolean)[]), keyValues: (string | number | boolean)[][]);
    toJSON(): IBasicFilter;
}
declare class TupleFilter extends Filter {
    static schemaUrl: string;
    operator: TupleFilterOperators;
    target: ITupleFilterTarget;
    values: TupleValueType[];
    constructor(target: ITupleFilterTarget, operator: TupleFilterOperators, values: TupleValueType[]);
    toJSON(): ITupleFilter;
}
declare class AdvancedFilter extends Filter {
    static schemaUrl: string;
    logicalOperator: AdvancedFilterLogicalOperators;
    conditions: IAdvancedFilterCondition[];
    constructor(target: IFilterTarget, logicalOperator: AdvancedFilterLogicalOperators, ...conditions: (IAdvancedFilterCondition | IAdvancedFilterCondition[])[]);
    toJSON(): IAdvancedFilter;
}
interface IDataReference {
    target: IFilterTarget;
}
interface IEqualsDataReference extends IDataReference {
    equals: string | boolean | number | Date;
}
interface IBetweenDataReference extends IDataReference {
    between: (string | boolean | number)[];
}
interface IValueDataReference extends IDataReference {
    value: string | boolean | number | Date;
    formattedValue: string;
}
interface IIdentityValue<T extends IDataReference> {
    identity: T[];
    values: IValueDataReference[];
}
declare function isFilterKeyColumnsTarget(target: IFilterTarget): boolean;
declare function isBasicFilterWithKeys(filter: IFilter): boolean;
declare function getFilterType(filter: IFilter): FilterType;
declare function isMeasure(arg: any): arg is IMeasureTarget;
declare function isColumn(arg: any): arg is IColumnTarget;
declare function isHierarchyLevel(arg: any): arg is IHierarchyLevelTarget;
declare function isHierarchyLevelAggr(arg: any): arg is IHierarchyLevelAggrTarget;
declare function isColumnAggr(arg: any): arg is IColumnAggrTarget;
interface IReportLoadConfiguration {
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
interface IReportCreateConfiguration {
    accessToken: string;
    datasetId: string;
    groupId?: string;
    settings?: ISettings;
    tokenType?: TokenType;
    theme?: IReportTheme;
}
interface IDashboardLoadConfiguration {
    accessToken: string;
    id: string;
    groupId?: string;
    pageView?: PageView;
    tokenType?: TokenType;
    embedUrl?: string;
}
interface ITileLoadConfiguration {
    accessToken: string;
    id: string;
    dashboardId: string;
    groupId?: string;
    tokenType?: TokenType;
    width?: number;
    height?: number;
}
interface ISettings {
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
interface ISaveAsParameters {
    name: string;
}
interface IPaginatedReportLoadConfiguration {
    accessToken: string;
    id: string;
    groupId?: string;
    settings?: IPaginatedReportSettings;
    tokenType?: TokenType;
}
interface IPaginatedReportSettings {
    commands?: IPaginatedReportsCommandsSettings;
}
interface IQnaSettings {
    filterPaneEnabled?: boolean;
    hideErrors?: boolean;
}
interface ILoadQnaConfiguration {
    accessToken: string;
    datasetIds: string[];
    groupId?: string;
    question?: string;
    viewMode?: QnaMode;
    settings?: IQnaSettings;
    tokenType?: TokenType;
}
declare enum QnaMode {
    Interactive = 0,
    ResultOnly = 1
}
declare enum ExportDataType {
    Summarized = 0,
    Underlying = 1
}
declare enum BookmarksPlayMode {
    Off = 0,
    Presentation = 1
}
declare const CommonErrorCodes: {
    TokenExpired: string;
    NotFound: string;
    InvalidParameters: string;
    LoadReportFailed: string;
    NotAuthorized: string;
    FailedToLoadModel: string;
};
declare const TextAlignment: {
    Left: string;
    Center: string;
    Right: string;
};
declare const LegendPosition: {
    Top: string;
    Bottom: string;
    Right: string;
    Left: string;
    TopCenter: string;
    BottomCenter: string;
    RightCenter: string;
    LeftCenter: string;
};
interface IQnaInterpretInputData {
    question: string;
    datasetIds?: string[];
}
interface IReportBookmark {
    name: string;
    displayName: string;
    state?: string;
    children?: IReportBookmark[];
}
interface IPlayBookmarkRequest {
    playMode: BookmarksPlayMode;
}
interface IAddBookmarkRequest {
    state?: string;
    displayName?: string;
    apply?: boolean;
}
declare type IApplyBookmarkRequest = IApplyBookmarkStateRequest | IApplyBookmarkByNameRequest;
interface IApplyBookmarkStateRequest {
    state: string;
}
interface IApplyBookmarkByNameRequest {
    name: string;
}
interface IExportDataRequest {
    rows?: number;
    exportDataType?: ExportDataType;
}
interface IExportDataResult {
    data: string;
}
interface ICreateVisualRequest {
    visualType: string;
    layout?: IVisualLayout;
    autoFocus?: boolean;
}
interface IVisualResponse {
    visual: IVisual;
}
interface ICreateVisualResponse extends IVisualResponse {
}
interface ICloneVisualRequest {
    filters?: IFilter[];
    layout?: IVisualLayout;
    autoFocus?: boolean;
}
interface ICloneVisualResponse extends IVisualResponse {
    visualName: string;
}
interface ISortByVisualRequest {
    orderBy: ITarget;
    direction: SortDirection;
}
declare enum SortDirection {
    Ascending = 1,
    Descending = 2
}
interface ISelector {
    $schema: string;
}
interface IPageSelector extends ISelector {
    pageName: string;
}
interface IVisualSelector extends ISelector {
    visualName: string;
}
interface IVisualTypeSelector extends ISelector {
    visualType: string;
}
interface ISlicerTargetSelector extends ISelector {
    target: SlicerTarget;
}
declare abstract class Selector implements ISelector {
    $schema: string;
    constructor(schema: string);
    toJSON(): ISelector;
}
declare class PageSelector extends Selector implements IPageSelector {
    static schemaUrl: string;
    pageName: string;
    constructor(pageName: string);
    toJSON(): IPageSelector;
}
declare class VisualSelector extends Selector implements IVisualSelector {
    static schemaUrl: string;
    visualName: string;
    constructor(visualName: string);
    toJSON(): IVisualSelector;
}
declare class VisualTypeSelector extends Selector implements IVisualTypeSelector {
    static schemaUrl: string;
    visualType: string;
    constructor(visualType: string);
    toJSON(): IVisualTypeSelector;
}
declare class SlicerTargetSelector extends Selector implements ISlicerTargetSelector {
    static schemaUrl: string;
    target: SlicerTarget;
    constructor(target: SlicerTarget);
    toJSON(): ISlicerTargetSelector;
}
declare type SlicerTarget = IFilterTarget | IFilterKeyTarget;
declare type SlicerSelector = IVisualSelector | ISlicerTargetSelector;
interface ISlicer {
    selector: SlicerSelector;
    state: ISlicerState;
}
interface ISlicerState {
    filters: ISlicerFilter[];
    targets?: SlicerTarget[];
}
declare type VisualHeaderSelector = IVisualSelector | IVisualTypeSelector;
declare type VisualsHeaderSelector = VisualHeaderSelector;
interface IVisualHeaderSettings {
    visible?: boolean;
}
interface IVisualHeader {
    settings: IVisualHeaderSettings;
    selector?: VisualHeaderSelector;
}
interface IVisualSettings {
    visualHeaders?: IVisualHeader[];
}
interface IReportTheme {
}
interface ICustomTheme extends IReportTheme {
    themeJson: any;
}
declare type VisualCommandSelector = IVisualSelector | IVisualTypeSelector;
declare enum CommandDisplayOption {
    Enabled = 0,
    Disabled = 1,
    Hidden = 2
}
interface ICommandSettings {
    displayOption: CommandDisplayOption;
    selector?: VisualCommandSelector;
}
interface ICommandsSettings {
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
interface IPaginatedReportsCommandSettings {
    enabled: boolean;
}
interface IParametersPanelCommandSettings extends IPaginatedReportsCommandSettings {
    expanded: boolean;
}
interface IPaginatedReportsCommandsSettings {
    parameterPanel?: IParametersPanelCommandSettings;
}
declare enum VisualDataRoleKind {
    Grouping = 0,
    Measure = 1,
    GroupingOrMeasure = 2
}
declare enum VisualDataRoleKindPreference {
    Measure = 0,
    Grouping = 1
}
interface IVisualDataRole {
    name: string;
    kind: VisualDataRoleKind;
    kindPreference?: VisualDataRoleKindPreference;
    displayName?: string;
    description?: string;
}
interface IVisualCapabilities {
    dataRoles?: IVisualDataRole[];
}
interface IVisualPropertySelector {
    objectName: string;
    propertyName: string;
}
interface IVisualPropertyValue {
    schema?: string;
    value: any;
}
interface IDefaultProperty {
}
interface IThemeColorProperty {
    id: number;
    shade: number;
}
declare function validateVisualSelector(input: any): IError[];
declare function validateSlicer(input: any): IError[];
declare function validateSlicerState(input: any): IError[];
declare function validatePlayBookmarkRequest(input: any): IError[];
declare function validateAddBookmarkRequest(input: any): IError[];
declare function validateApplyBookmarkByNameRequest(input: any): IError[];
declare function validateApplyBookmarkStateRequest(input: any): IError[];
declare function validateSettings(input: any): IError[];
declare function validateCustomPageSize(input: any): IError[];
declare function validateExtension(input: any): IError[];
declare function validateReportLoad(input: any): IError[];
declare function validateCreateReport(input: any): IError[];
declare function validateDashboardLoad(input: any): IError[];
declare function validateTileLoad(input: any): IError[];
declare function validatePage(input: any): IError[];
declare function validateFilter(input: any): IError[];
declare function validateSaveAsParameters(input: any): IError[];
declare function validateLoadQnaConfiguration(input: any): IError[];
declare function validateQnaInterpretInputData(input: any): IError[];
declare function validateExportDataRequest(input: any): IError[];
declare function validateVisualHeader(input: any): IError[];
declare function validateVisualSettings(input: any): IError[];
declare function validateCommandsSettings(input: any): IError[];
declare function validateCustomTheme(input: any): IError[];

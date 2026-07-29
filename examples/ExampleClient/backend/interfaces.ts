export interface Value {
    timestamp: string;
    value: string | number | boolean;
    qualitycode?: number;
}

export interface Data {
    variableId: string;
    values: Value[];
    lastRequestTime?: string;
    error: unknown;
}

export interface DataResult {
    data: Data[];
    hasMoreData?: {
        from: string;
        to: string;
    }
}

export interface DataSourceReference {
    id: string;
    type: string;
    aggregation: string;
}

export interface CalculateParams {
    from: string;
    to: string;
    dataSources: DataSourceReference[];
}

export interface CalculateResult {
    dataSource: DataSourceReference;
    value: number;
}

export type CalculateResults = CalculateResult[];

export interface CalculateTrendParams extends CalculateParams {
    calculationTimeRange: number;
}

export interface CalculateTrendResult {
    dataSource: DataSourceReference;
    values: Value[];
}

export type CalculateTrendResults = CalculateTrendResult[];

export interface DeltaRequest {
    variableId: string;
    lastRequestTime?: string;
}

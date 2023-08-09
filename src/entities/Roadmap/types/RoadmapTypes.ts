
export enum Status {
    DONE = "Done",
    IN_PROGRESS = "In Progress",
    TO_DONE = "To Do"
}

export enum Period {
    Q1 = "Q1",
    Q2 = "Q2",
    Q3 = "Q3",
    Q4 = "Q4",
}
export enum RoadmapColor {
    PAST = "#42B8F3",
    PRESENT = "#D49D32",
    FUTURE = "#466A88"
}

interface StageItem {
    title: string,
    status: Status
}

interface PeriodData {
    id: number,
    period: Period,
    stage: StageItem[];
}

export interface RoadmapItem {
    year: number,
    annualColor: RoadmapColor,
    periods: PeriodData[]
}

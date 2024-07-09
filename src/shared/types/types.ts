
export type NumericRange<
    START extends number,
    END extends number,
    ARR extends unknown[] = [],
    ACC extends number = never
> = ARR['length'] extends END
    ? ACC | START | END
    : NumericRange<START, END, [...ARR, 1], ARR[START] extends undefined ? ACC : ACC | ARR['length']>

export interface Time {
    year: number;
    month: NumericRange<1, 12>;
    day: NumericRange<0, 31>;
    hour: NumericRange<0, 23>
    minutes: NumericRange<0, 59>;
}
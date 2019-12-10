export interface TeamMetricsInterface {
    id?          : number;
    key          : string;
    name         : string;
    code         : string;
    win_count    : number;
    draw_count   : number;
    losses_count : number;
    goals_for    : number;
    goals_against: number;
    goals_diff   : number;
    total_points : number;
    position?    : number;
}
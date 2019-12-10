import { TeamMetricsInterface } from "src/league/interfaces/team-metrics.interface";

export default  {
    sortByTotalPoints      : (a: TeamMetricsInterface, b: TeamMetricsInterface) => b.total_points - a.total_points,
    sortByDifference : (a: TeamMetricsInterface, b: TeamMetricsInterface) => b.goals_diff - a.goals_diff,
    sortByGoals      : (a: TeamMetricsInterface, b: TeamMetricsInterface) => b.goals_for - a.goals_for
}
import { getMonthOrdersAmount } from "@/api/get-month-orders-amount";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { Utensils } from "lucide-react";
import { MetricCardSkeleton } from "./metric-card-skeleton";

export function MonthOrdersAmountCard() {
  const { data: monthOrdersAmount } = useQuery({
    queryFn: getMonthOrdersAmount,
    queryKey: ["metrics", "month-oders-amount"],
  });

  return (
    <Card>
      <CardHeader className="flex items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base">Pedidos (mês)</CardTitle>
        <Utensils className="text-muted-foreground h-4 w-4" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthOrdersAmount ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {monthOrdersAmount.amount.toLocaleString("pt-BR")}
            </span>
            <p className="text-muted-foreground text-xs">
              {monthOrdersAmount.diffFromLastMonth >= 0 ? (
                <>
                  <span className="mr-2 text-emerald-500 dark:text-emerald-400">
                    +{monthOrdersAmount.diffFromLastMonth}%
                  </span>
                  em relação ao mês passado
                </>
              ) : (
                <>
                  <span className="mr-2 text-rose-500 dark:text-rose-400">
                    {monthOrdersAmount.diffFromLastMonth}%
                  </span>
                  em relação ao mês passado
                </>
              )}
            </p>
          </>
        ) : (
          <MetricCardSkeleton />
        )}
      </CardContent>
    </Card>
  );
}

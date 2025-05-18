import { getMonthRevenue } from "@/api/get-month-revenue";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { DollarSign } from "lucide-react";

export function MonthRevenueCard() {
  const { data: monthRevenue } = useQuery({
    queryFn: getMonthRevenue,
    queryKey: ["metrics", "month-revenue"],
  });

  return (
    <Card>
      <CardHeader className="flex items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base">Receita total (mês)</CardTitle>
        <DollarSign className="text-muted-foreground h-4 w-4" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthRevenue && (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {(monthRevenue.receipt / 100).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
            {monthRevenue.diffFromLastMonth >= 0 ? (
              <>
                <p className="text-muted-foreground text-xs">
                  <span className="mr-2 text-emerald-500 dark:text-emerald-400">
                    +{monthRevenue.diffFromLastMonth}%
                  </span>
                  em relação ao mês passado
                </p>
              </>
            ) : (
              <>
                <p className="text-muted-foreground text-xs">
                  <span className="mr-2 text-rose-500 dark:text-rose-400">
                    {monthRevenue.diffFromLastMonth}%
                  </span>
                  em relação ao mês passado
                </p>
              </>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
}

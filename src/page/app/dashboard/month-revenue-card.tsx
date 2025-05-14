import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign } from "lucide-react";

export function MonthRevenueCard() {
  return (
    <Card>
      <CardHeader className="flex items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base">Receita total (mês)</CardTitle>
        <DollarSign className="text-muted-foreground h-4 w-4" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">R$ 1.248,60</span>
        <p className="text-muted-foreground text-xs">
          <span className="mr-2 text-emerald-500 dark:text-emerald-400">
            +2%
          </span>
          em relação ao mês passado
        </p>
      </CardContent>
    </Card>
  );
}

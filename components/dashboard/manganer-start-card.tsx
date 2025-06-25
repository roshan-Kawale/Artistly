import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { startCardProps } from "./type";

export function ManagerStartCard({
  startCardOptions,
}: {
  startCardOptions: startCardProps[];
}) {
  return (
    <div  className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {startCardOptions.map((option , index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{option.header}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{option.length}</div>
            <p className="text-xs text-muted-foreground">{option.desc}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

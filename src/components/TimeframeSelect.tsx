import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface TimeframeSelectProps {
  timeframe: number;
  onTimeframeChange: (value: string) => void;
}

const TimeframeSelect: React.FC<TimeframeSelectProps> = ({
  timeframe,
  onTimeframeChange,
}) => {
  return (
    <div className="flex flex-row gap-[1rem] items-center">
      <Label htmlFor="timeframe" className="font-size-regular whitespace-nowrap">
        Price History:
      </Label>
      <Select value={timeframe.toString()} onValueChange={onTimeframeChange}>
        <SelectTrigger className="w-[10rem]">
          <SelectValue placeholder="Select Timeframe" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">1 Day</SelectItem>
          <SelectItem value="7">7 Days</SelectItem>
          <SelectItem value="30">30 Days</SelectItem>
          <SelectItem value="90">90 Days</SelectItem>
          <SelectItem value="365">1 Year</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default TimeframeSelect;

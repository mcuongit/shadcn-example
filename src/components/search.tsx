import { Search as SearchIcon } from "lucide-react";
import { Input, InputProps } from "./ui/input";

type Props = Omit<InputProps, "type" | "className">;

export default function Search({ placeholder = "Tìm kiếm", ...props }: Props) {
  return (
    <div className="relative">
      <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder={placeholder}
        className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
        {...props}
      />
    </div>
  );
}

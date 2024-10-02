import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon, Sun } from "lucide-react";
import { FC, useId } from "react";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export const ModeSwitch: FC = () => {
  const { setTheme, theme } = useTheme();
  const id = useId();

  const getLabel = (): string => {
    const object: Record<typeof theme, string> = {
      dark: "Tối",
      light: "Sáng",
      system: "Hệ thống",
    };
    return object[theme];
  };
  return (
    <div className="flex items-center space-x-2">
      <Switch
        checked={theme === "dark"}
        id={id}
        onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
      <Label htmlFor={id}>{getLabel()}</Label>
    </div>
  );
};

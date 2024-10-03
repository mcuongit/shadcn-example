import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";

type Lng = "en" | "vi";

const lang: Record<string, string> = {
  en: "English",
  vi: "Tiếng Việt",
};

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const changeLang = (lng: Lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {lang[i18n.language] ?? lang.vi}
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{t("common:language")}</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => changeLang("en")}>{lang.en}</DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLang("vi")}>{lang.vi}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

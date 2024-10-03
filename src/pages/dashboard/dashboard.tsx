import Counter from "@/features/counter/counter";
import { useTranslation } from "react-i18next";

const Dashboard = () => {
  const { t } = useTranslation("glossary");
  return (
    <main className="container py-3">
      <h1>{t("dashboard")}</h1>
      <Counter />
    </main>
  );
};

export default Dashboard;

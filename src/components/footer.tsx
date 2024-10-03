import { LanguageSwitcher } from "./language-switcher";

export default function Footer() {
  return (
    <footer className="">
      <div className="container py-3">
        <div className="flex items-center">
          <p className="mr-auto">Footer</p>
          <LanguageSwitcher />
        </div>
      </div>
    </footer>
  );
}

import { ModeToggle } from "@/components/mode-toggle";
import LoginForm from "./components/login-form";

export default function SignIn() {
  return (
    <div className="h-screen relative">
      <div className="absolute top-3 right-3">
        <ModeToggle />
      </div>
      <div className="flex h-full items-center">
        <LoginForm />
      </div>
    </div>
  );
}

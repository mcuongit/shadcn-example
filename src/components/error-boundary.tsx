import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

import { AlertCircle } from "lucide-react";
import { FC, PropsWithChildren } from "react";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import { Button } from "./ui/button";
import { useRouteError } from "react-router-dom";

const isDev = import.meta.env.DEV;
export const ErrorAlertFallback: FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <Alert variant="destructive" className="max-w-lg w-full mx-auto">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Đã có lỗi xảy ra!</AlertTitle>
      <AlertDescription className="space-y-2">
        <p>Hãy thao tác lại và feedback với quản trị viên.</p>
        {isDev && <p>Nguyên nhân: {error.message}</p>}
        <div className="text-right">
          <Button variant={"outline"} onClick={resetErrorBoundary}>
            OK
          </Button>
        </div>
      </AlertDescription>
    </Alert>
  );
};

export const ErrorDialogFallback: FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <AlertDialog defaultOpen>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Có lỗi xảy ra</AlertDialogTitle>
          <AlertDialogDescription>
            <p>Hãy thao tác lại và feedback với quản trị viên</p>
            {isDev && <p>Nguyên nhân: {error.message}</p>}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={resetErrorBoundary}>OK</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export const ErrorDrawerFallback: FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <Drawer
      open
      onOpenChange={(v) => {
        if (v === false) resetErrorBoundary();
      }}
    >
      <DrawerContent>
        <div className="mx-auto max-w-sm w-full">
          <DrawerHeader>
            <DrawerTitle>Có lỗi xảy ra</DrawerTitle>
            <DrawerDescription>
              <p>Hãy thao tác lại và feedback với quản trị viên</p>
              {isDev && <p>Nguyên nhân: {error.message}</p>}
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button onClick={resetErrorBoundary}>OK</Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export const DefaultErrorBoundary: FC<PropsWithChildren> = ({ children }) => {
  return <ErrorBoundary FallbackComponent={ErrorAlertFallback}>{children}</ErrorBoundary>;
};

export const DrawerErrorBoundary: FC<PropsWithChildren> = ({ children }) => {
  return <ErrorBoundary FallbackComponent={ErrorDrawerFallback}>{children}</ErrorBoundary>;
};

export const GlobalErrorBoundary: FC<PropsWithChildren> = ({ children }) => {
  return <ErrorBoundary FallbackComponent={ErrorDialogFallback}>{children}</ErrorBoundary>;
};

export const RouteErrorBoundary: FC = () => {
  const error = useRouteError() as Record<string, string>;
  return (
    <Alert variant="destructive" className="max-w-lg w-full mx-auto">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Đã có lỗi xảy ra!</AlertTitle>
      <AlertDescription>
        <p>Hãy thao tác lại và feedback với quản trị viên.</p>
        {isDev && <p>Nguyên nhân: {error.message}</p>}
      </AlertDescription>
    </Alert>
  );
};

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { PropsWithChildren, forwardRef } from "react";

interface Props extends PropsWithChildren {
  onConfirm: () => void;
  isDelete?: boolean;
  title?: string;
  desc?: string;
}
export const ConfirmDeleteDialog = forwardRef<HTMLButtonElement, Props>(
  ({ children, onConfirm, isDelete = false, title = "Xác nhận", desc = "Bạn muốn tiếp tục hành động này?" }, ref) => {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild ref={ref}>
          {children}
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{isDelete ? "Xác nhận xoá?" : title}</AlertDialogTitle>
            <AlertDialogDescription>
              {isDelete ? "Bạn sẽ không thể hoàn tác hành động này." : desc}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Đóng</AlertDialogCancel>
            <AlertDialogAction onClick={onConfirm}>Tiếp tục</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }
);
ConfirmDeleteDialog.displayName = "ConfirmDeleteDialog";

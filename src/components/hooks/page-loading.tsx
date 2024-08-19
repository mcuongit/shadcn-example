import nProgress from "nprogress";
import { useEffect } from "react";
nProgress.configure({ showSpinner: false });
type Props = {
  isLoading: boolean;
};
export default function usePageLoading({ isLoading }: Props) {
  useEffect(() => {
    if (isLoading) {
      nProgress.start();
    } else {
      nProgress.done();
    }
    return () => {
      nProgress.done();
    };
  }, [isLoading]);
}
